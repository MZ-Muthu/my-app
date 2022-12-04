// ============================================================
// import controllers
const factoryControllers = require('./factoryControllers');

// ============================================================
// import utilities
const AppError = require('../util/AppError');
const catchAsync = require('../util/catchAsync');
const encryptID = require('../util/uuid');
const filerDataFromRequest = require('../util/filterObjects');

// ============================================================
// import models
const medicalMarketProductsModel = require('../models/MedicalMarket/medicalMarketProductsModel');
const medicalMarketQuoteRequesterModel = require('../models/MedicalMarket/medicalMarketQuoteRequesterModel');
const partnerModel = require('../models/shared/partnerModel');

// assign data for verify valid partner
exports.assignDataForValidPartner = (req, res, next) => {
    req.searchQuery = {
        userId: req.user._id,
        for: req.params.from,
        status: 'accepted'
    };
    return next();
};

// verify valid partner
exports.verifyValidPartner = factoryControllers.findOne(partnerModel);

// create new quote
exports.postNewQuotes = catchAsync(async (req, res, next) => {
    const docs = await Promise.all(
        req.body.map(async (el) => {
            const uuid = await encryptID(process.env.MEDICAL_MARKET_SECRET);
            let product = new RegExp(el.productName.toLowerCase(), 'ig');
            const datas = await medicalMarketProductsModel.aggregate([
                {
                    $match: {
                        productStream: product
                    }
                },
                {
                    $group: { _id: '$partnerId' }
                },
                {
                    $lookup: {
                        from: 'partners',
                        localField: '_id',
                        foreignField: '_id',
                        pipeline: [
                            {
                                $match: {
                                    status: 'accepted'
                                }
                            }
                        ],
                        as: 'partners'
                    }
                },
                {
                    $unwind: '$partners'
                },
                {
                    $group: {
                        _id: '$partners._id',
                        eId: { $first: '$partners.hiwpmID' },
                        address: { $first: '$partners.address' }
                    }
                }
            ]);

            const reqsts = [];
            await Promise.all(
                datas.map(async (els) => {
                    const reqs = {
                        productName: el.productName,
                        proposalDate: Date.now(),
                        productDescription: el.productDescription,
                        quantity: el.quantity,
                        hiwmmqrrsID: await encryptID(
                            process.env.MEDICAL_MARKET_SECRET
                        ),
                        userId: req.user._id,
                        for: uuid,
                        from: req.params.from ?? req.params.moduleName,
                        requestPartnerID: els._id,
                        requestedPartnerEID: els.eId,
                        createdAt: Date.now(),
                        address: els.address
                    };
                    return reqsts.push(reqs);
                })
            );
            await medicalMarketQuoteRequesterModel.create(reqsts);
            return !!reqsts.length;
        })
    );
    const check = docs.some((el) => !!el);
    if (!check) {
        return next(new AppError('Vendor not found', 404));
    }
    return res.status(200).json({ status: 'Success' });
});

// get a quote
exports.getAQuotes = catchAsync(async (req, res, next) => {
    let quotes = await medicalMarketQuoteRequesterModel.aggregate([
        {
            $match: {
                for: req.params.quoteId,
                userId: req.user._id,
                from: req.params.from
            }
        },
        {
            $lookup: {
                from: 'partners',
                localField: 'requestPartner',
                foreignField: '_id',
                as: 'partners'
            }
        },
        {
            $unwind: '$partners'
        },
        {
            $project: {
                _id: 1,
                productName: 1,
                proposalDate: 1,
                productDescription: 1,
                quantity: 1,
                proposeStatus: 1,
                createdAt: 1,
                'partners.name': 1
            }
        }
    ]);
    quotes = await Promise.all(quotes.map((el) => ({ ...el, _id: undefined })));
    return res.status(200).json({
        status: 'Success',
        docs: quotes
    });
});

// cancel requester request
exports.assignDataForCancelReques = catchAsync(async (req, res, next) => {
    req.updateAllSearchQuery = {
        for: req.params.quoteId,
        userId: req.user._id,
        from: req.params.from ?? req.params.moduleName
    };
    req.updateAllData = {
        proposeStatus: 'canceled',
        userActionDate: Date.now()
    };
    return next();
});

// respont quote status
exports.assignDataForQuotesRequests = catchAsync(async (req, res, next) => {
    req.updateOneSearch = {
        hiwmmqrrsID: req.params.quoteId,
        userId: req.user._id,
        from: req.params.from ?? req.params.moduleName,
        $or: [
            { proposeStatus: 'proposal-submited' },
            { proposeStatus: 'negotiate' }
        ]
    };

    if (req.params.status === 'accepted') {
        req.body.proposeStatus = 'accepted';
        req.body.userDescription = req.body.cause;
        req.body.userActionDate = Date.now();
    } else if (req.params.status === 'rejected') {
        req.body.proposeStatus = 'rejected-by-user';
        req.body.userDescription = req.body.cause;
        req.body.userActionDate = Date.now();
    } else if (req.params.status === 'negotiate') {
        if (!req.body.cause) {
            return next(
                new AppError(
                    'Short Description should be included while negotiate..'
                )
            );
        }
        const data = await medicalMarketQuoteRequesterModel.findOne(
            req.updateOneSearch
        );
        const negotiateDetails = {
            price: data.estimateCost,
            askedBy: 'requester',
            description: data.negotiateDescription,
            date: data.negotiateDate
        };
        req.body = {
            proposeStatus: 'negotiate',
            negotiateDate: Date.now(),
            negotiateDescription: req.body.cause,
            $push: { negotiateDetails }
        };
    } else {
        next(new AppError(`undefined url ${req.originalUrl}`, 404));
    }

    return next();
});
