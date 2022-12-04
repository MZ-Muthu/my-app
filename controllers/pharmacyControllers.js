// ============================================================
// import models
const { validate } = require('uuid');
const schedule = require('node-schedule');
const multer = require('multer');
const AWS = require('aws-sdk');

// ============================================================
// import controllers
const factoryControllers = require('./factoryControllers');

// ============================================================
// import utilities
const catchAsync = require('../util/catchAsync');
const encryptID = require('../util/uuid');
const AppError = require('../util/AppError');

// ============================================================
// import models
const partnerModel = require('../models/shared/partnerModel');
const pharmacyCategorieModel = require('../models/Pharmasy/pharmacyCategoriesModel');
const pharmacyMedicinesModel = require('../models/Pharmasy/pharmacyMedicinesModel');
const pharmacyMedicinesListModel = require('../models/Pharmasy/medicineDetails');
const pharmacyMedicineRequesterModel = require('../models/Pharmasy/newPharmacyMedicineRequesterModel');
const pharmacyMedicineRequestModel = require('../models/Pharmasy/newPharmacyMedicineRequestsModel');
const pharmacyCartModel = require('../models/Pharmasy/pharmacyCartModel');

const filerDataFromRequest = require('../util/filterObjects');
const addressModel = require('../models/shared/addUserAddressModel');

// ============================================================
//
// get all pharmacy
exports.getAllPharmacys = factoryControllers.getAllFilter(
    pharmacyCategorieModel
);

// send json for get all filter
exports.sendJsonForGetallFilter = factoryControllers.sendAllFilter();

// assign data for get a medicint
exports.assignDataForCreateMedicines = catchAsync(async (req, res, next) => {
    const date = Date.now();
    const [data, med] = await Promise.all([
        pharmacyMedicinesListModel.find({
            hiwpmmdsID: req.body.medicines
        }),
        pharmacyMedicinesModel
            .findOne({
                pharmacyID: req.docs._id,
                medicineEID: req.body.medicines
            })
            .populate('medicine')
    ]);
    if (data.length !== req.body.medicines.length) {
        return next(new AppError('Please enter the valid medicines.', 400));
    }

    if (med) {
        return next(
            new AppError(
                `The medicine "${med.medicine[0].name}" was already in your medicine list`,
                400
            )
        );
    }
    req.body = await Promise.all(
        req.body.medicines.map(async (el) => {
            const id = await encryptID(process.env.MEDICAL_RECORD_SECRET);
            return {
                createdAt: date,
                hiwpmmmID: id,
                pharmacyID: req.docs._id,
                pharmacyEID: req.docs.hiwpmID,
                medicineEID: el
            };
        })
    );
    return next();
});

// send json for create one
exports.createNewMedicines = factoryControllers.createOne(
    pharmacyMedicinesModel
);

// send json for create one
exports.sendJsonForCreateOne = factoryControllers.sendJson();

// assign partner search data
exports.assignPartnerSearch = catchAsync(async (req, res, next) => {
    req.searchQuery = {
        userId: req.user._id,
        status: 'accepted',
        for: 'Pharmacy'
    };
    return next();
});
// assign data for get all productgs
exports.getAllPharmacyProducts = factoryControllers.getFindAllFilter(
    pharmacyMedicinesListModel
);

// verify valid partner to do this service
exports.verifyValidPartner = factoryControllers.findOne(
    partnerModel,
    'Partner not found!'
);

// get neary by medicsl
exports.getNearByMedcals = catchAsync(async (req, res, next) => {
    let cart = [[]];
    let arr = [];
    let obj = [];
    console.log(req.body);
    if (req.body.type === 'medicine') {
        arr = await pharmacyCartModel
            .find({
                hiwpmpcdmID: req.body.medicines
            })
            .distinct('medicineEId');
        obj = [
            {
                $lookup: {
                    from: 'pharmacy medicines',
                    localField: 'hiwpmID',
                    foreignField: 'pharmacyEID',
                    pipeline: [
                        {
                            $match: {
                                medicineEID: { $in: arr }
                            }
                        },
                        {
                            $count: 'score'
                        },
                        {
                            $project: {
                                check: {
                                    $cond: {
                                        if: {
                                            $eq: ['$score', arr.length]
                                        },
                                        then: true,
                                        else: false
                                    }
                                }
                            }
                        }
                    ],
                    as: 'partner'
                }
            },
            { $unwind: '$partner' },
            { $match: { 'partner.check': true } }
        ];
        cart = [
            pharmacyMedicinesListModel
                .find({ hiwpmmdsID: arr })
                .select('-createdAt -id')
        ];
    } else if (req.body.type === 'prescription') {
        if (!req.body.prescription) {
            return next(
                new AppError('Please upload the prescription first.', 400)
            );
        }
    }

    const [medicals, medicine, [address]] = await Promise.all([
        partnerModel.aggregate([
            {
                $match: {
                    location: {
                        $geoWithin: {
                            $centerSphere: [
                                [
                                    req.body.location[1] * 1,
                                    req.body.location[0] * 1
                                ],
                                process.env.PHARMACY_ORDER_DISTANCE / 6378.1
                            ]
                        }
                    },
                    for: 'Pharmacy',
                    status: 'accepted'
                }
            },
            ...obj
        ]),
        ...cart,
        addressModel
            .find({
                userId: req.user._id,
                hiwnusID: req.params.addressId
            })
            .lean()
    ]);

    if (!address) {
        return next(new AppError('Address not found.', 404));
    }
    let result = {};
    if (req.body.type === 'medicine') {
        if (!medicals.length)
            return next(
                new AppError(
                    'There is no medicals available right now, for your medicines.',
                    400
                )
            );
        result = { medicines: medicine };
    }
    if (req.body.type === 'prescription') {
        if (!medicals.length)
            return next(
                new AppError('Currently there is no pharmacy available..', 404)
            );
        result = { prescription: req.body.prescription };
    }
    // eslint-disable-next-line no-multi-assign
    address._id = address.__v = address.hiwnusID = address.userId = undefined;
    const id = await encryptID(process.env.MEDICAL_RECORD_SECRET);
    req.body.location = {
        type: 'Point',
        coordinates: [req.body.location[1] * 1, req.body.location[0] * 1]
    };

    const requsest = await Promise.all(
        medicals.map(async (el) => {
            const uuid = await encryptID(process.env.MEDICAL_RECORD_SECRET);
            return {
                ...result,
                requestType: req.body.type,
                userId: req.user._id,
                partnerId: el._id,
                partnerEId: el.hiwpmID,
                hiwnpmrsmsID: uuid,
                createdAt: Date.now(),
                batch: id,
                address: address,
                location: req.body.location
            };
        })
    );
    const data = await pharmacyMedicineRequestModel.create(requsest);
    return res.json({ status: 'Success' });
});

// get my medicine request
exports.getMyMedicineRequests = catchAsync(async (req, res, next) => {
    const [docs] = await pharmacyMedicineRequestModel.aggregate([
        {
            $match: {
                partnerId: req.docs._id
            }
        },
        {
            $facet: {
                active: [
                    {
                        $match: {
                            $and: [
                                {
                                    status: { $ne: 'completed' }
                                },
                                {
                                    status: { $ne: 'canceled' }
                                },
                                {
                                    status: { $ne: 'missed' }
                                }
                            ]
                        }
                    }
                ],
                history: [
                    {
                        $match: {
                            $or: [
                                {
                                    status: 'completed'
                                },
                                {
                                    status: 'missed'
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]);
    req.body.docs = docs;
    return next();
});

// my medicines
exports.getMyMedicines = catchAsync(async (req, res, next) => {
    const [docs, medicines] = await Promise.all([
        pharmacyMedicinesModel.aggregate([
            {
                $match: {
                    pharmacyID: req.docs._id
                }
            },
            {
                $lookup: {
                    from: 'pharmacy medicines lists',
                    localField: 'medicineEID',
                    foreignField: 'hiwpmmdsID',

                    as: 'medicine'
                }
            },
            {
                $unwind: '$medicine'
            },
            {
                $project: {
                    name: '$medicine.name',
                    description: '$medicine.description',
                    bannerImage: '$medicine.bannerImage',
                    categorie: '$medicine.categorie',
                    price: '$medicine.price',
                    date: '$createdAt'
                }
            }
        ]),
        pharmacyMedicinesListModel.find().select('name hiwpmmdsID')
    ]);
    req.body.docs = docs;
    req.body.medicines = medicines;
    return next();
});

// get all my medicnes
exports.getAllMedicines = factoryControllers.findAllData(
    pharmacyMedicinesModel
);

// send json for my medicine
exports.sendJsonForDocs = (req, res) =>
    res.status(200).json({
        status: 'Success',
        docs: req.body.docs
    });

// assing Data for update status
exports.updateParmacyVendorReceivedRequest = catchAsync(
    async (req, res, next) => {
        const getQuote = await pharmacyMedicineRequestModel.findOne({
            partnerId: req.docs._id,
            hiwnpmrsmsID: req.params.quoteId
        });
        req.body = {};
        const reqs = {};
        if (!getQuote) {
            return next(new AppError('Quote not found.', 404));
        }
        if (req.params.status === 'accepted') {
            if (getQuote.status !== 'pending') {
                return next(new AppError(`Invalid request.`, 400));
            }
            req.body.acceptedTime = Date.now();
        } else if (req.params.status === 'packed') {
            if (getQuote.status !== 'accepted') {
                return next(new AppError(`Invalid request.`, 400));
            }
            req.body.packedTime = Date.now();
        } else if (req.params.status === 'outofdelivery') {
            if (getQuote.status !== 'packed') {
                return next(new AppError(`Invalid request.`, 400));
            }
            req.body.outofdeliveryTime = Date.now();
        } else if (req.params.status === 'completed') {
            if (getQuote.status !== 'outofdelivery') {
                return next(new AppError(`Invalid request.`, 400));
            }
            req.body.completedTime = Date.now();
            reqs.completedTime = Date.now();
            reqs.status = 'completed';
        } else {
            return next(new AppError('Please select the valid status', 400));
        }

        await Promise.all([
            pharmacyMedicineRequestModel.findByIdAndUpdate(
                getQuote._id,
                { ...req.body, status: req.params.status },
                {
                    runValidators: true
                }
            )
        ]);

        return res.status(200).json({
            status: 'Success'
        });
    }
);

// update quote status
exports.updatePharmacyRequestStatus = catchAsync(async (req, res, next) => {
    let [request] = await Promise.all([
        pharmacyMedicineRequestModel.find({
            batch: req.params.requestId,
            userId: req.user._id
        })
    ]);

    [request] = await Promise.all([
        request.some(
            (el) =>
                el.status === 'packed' ||
                el.status === 'outofdelivery' ||
                el.status === 'completed'
        )
    ]);
    if (request) {
        return next(
            new AppError(
                "You request was alreay started processing. So, we can't process you request.",
                400
            )
        );
    }
    await Promise.all([
        pharmacyMedicineRequestModel.updateMany(
            { batch: req.params.requestId, userId: req.user._id },
            {
                status: 'canceled',
                canceledTime: Date.now()
            }
        )
    ]);
    return res.status(200).json({ status: 'Success' });
});

// get my pharcy order request
exports.getMyPharmacyOrderRequest = catchAsync(async (req, res, next) => {
    const [docs] = await pharmacyMedicineRequestModel.aggregate([
        {
            $match: {
                userId: req.user._id
            }
        },
        {
            $facet: {
                active: [
                    {
                        $match: {
                            $and: [
                                {
                                    status: { $ne: 'completed' }
                                },
                                {
                                    status: { $ne: 'missed' }
                                },
                                {
                                    status: { $ne: 'canceled' }
                                }
                            ]
                        }
                    },
                    {
                        $group: {
                            _id: '$batch',
                            medicines: { $first: '$medicines' },
                            address: {
                                $first: '$address'
                            },
                            prescription: { $first: '$prescription' },
                            date: { $first: '$createdAt' },
                            status: { $first: '$status' },
                            requestType: { $first: '$requestType' }
                        }
                    }
                ],
                history: [
                    {
                        $match: {
                            $or: [
                                {
                                    status: 'completed'
                                },
                                {
                                    status: 'canceled'
                                }
                            ]
                        }
                    },
                    {
                        $group: {
                            _id: '$batch',
                            medicines: { $first: '$medicines' },
                            address: {
                                $first: '$address'
                            },
                            date: { $first: '$createdAt' },
                            status: { $first: '$status' }
                        }
                    }
                ]
            }
        }
    ]);
    req.body.docs = docs;

    return next();
});

// assign data for find order
exports.assignDataForGetPharmacyOrder = (req, res, next) => {
    return next();
};

// get all orders
exports.getAPharmacyOrder = catchAsync(async (req, res, next) => {
    [req.docs] = await pharmacyMedicineRequestModel.aggregate([
        {
            $match: {
                userId: req.user._id,
                batch: req.params.orderId
            }
        },
        {
            $group: {
                _id: '$batch',
                requestType: { $first: '$requestType' },
                medicines: { $first: '$medicines' },
                prescription: { $first: '$prescription' },
                address: { $first: '$address' },
                location: { $first: '$location' },

                res: {
                    $push: {
                        $cond: [
                            {
                                $or: [
                                    { $eq: ['$status', 'accepted'] },
                                    { $eq: ['$status', 'packed'] },
                                    { $eq: ['$status', 'outofdelivery'] },
                                    { $eq: ['$status', 'completed'] }
                                ]
                            },
                            {
                                partnerEId: '$partnerEId',
                                respondedTime: '$respondedTime',
                                acceptedTime: '$acceptedTime',
                                packedTime: '$packedTime',
                                outofdeliveryTime: '$outofdeliveryTime',
                                completedTime: '$completedTime',
                                status: '$status'
                            },
                            null
                        ]
                    }
                }
            }
        },
        {
            $project: {
                res: { $setDifference: ['$res', [null]] },
                requestType: 1,
                medicines: 1,
                prescription: 1,
                address: 1,
                location: 1
            }
        }
    ]);
    if (!req.docs) {
        return next(new AppError('Quote not found', 404));
    }
    return next();
});

// send josn for docs
exports.sendJsonForFindOneDocs = factoryControllers.sendJsonForFindOne();

// get pharmacy responses
exports.getPharmacyResponses = catchAsync(async (req, res, next) => {
    const [docs] = await pharmacyMedicineRequestModel.aggregate([
        {
            $match: {
                batch: req.params.batchId,
                userId: req.user._id,
                status: { $ne: 'missed' }
            }
        },
        {
            $group: {
                _id: '$batch',
                medicine: { $first: '$medicines' },
                address: { $first: '$address' },
                parnters: {
                    $push: {
                        respondedTime: '$respondedTime',
                        acceptedTime: '$acceptedTime',
                        packedTime: '$packedTime',
                        outofdeliveryTime: '$outofdeliveryTime',
                        completedTime: '$completedTime',
                        canceledTime: '$canceledTime',
                        status: '$status'
                    }
                }
            }
        }
    ]);
    req.body.docs = docs;
    return next(0);
});

// get a order request
exports.getAPharmacyOrderRequest = catchAsync(async (req, res, next) => {
    const [docs] = await pharmacyMedicineRequesterModel.aggregate([
        {
            $match: {
                hiwpmrmsID: req.params.orderId,
                userId: req.user._id
            }
        },
        {
            $lookup: {
                from: 'pharmacy medicine requests',
                localField: 'hiwpmrmsID',
                foreignField: 'batch',
                pipeline: [
                    {
                        $match: {
                            $and: [
                                { status: { $ne: 'pending' } },
                                { status: { $ne: 'missed' } },
                                { status: { $ne: 'canceled' } }
                            ]
                        }
                    }
                ],
                as: 'response'
            }
        }
    ]);

    req.body.docs = docs;
    return next();
});

// filter new blood bank data
exports.filterNewPharmacy = catchAsync(async (req, res, next) => {
    [req.body] = await Promise.all([
        filerDataFromRequest(
            req.body,
            'name',
            'phone',
            'centerPhone',
            'centerLandLine',
            'location',
            'openTime',
            'closeTime',
            'address',
            'city',
            'aboutUs'
        )
    ]);

    return next();
});

// assign partner search data
exports.assignPartnerSearchData = (req, res, next) => {
    req.updateOneSearch = {
        userId: req.user._id,
        status: 'accepted',
        for: 'Pharmacy'
    };

    req.body.location = {
        type: 'Point',
        coordinates: [req.body.location[1], req.body.location[0]]
    };

    req.body.userId = req.user._id;

    req.body = { $set: req.body };
    return next();
};

// update pharmacy service
exports.updatePharmacyService = factoryControllers.updateOne(partnerModel);

// send json for create one
exports.sendJsonForUpdateOne = factoryControllers.sendJsonForUpdateOne();

// check if the product alreay in user cart
exports.checkProductAlreadyExist = catchAsync(async (req, res, next) => {
    const [pharmacy, product] = await Promise.all([
        pharmacyCartModel.findOne({
            userId: req.user._id,
            medicineEId: req.params.medicineId
        }),
        pharmacyMedicinesListModel.findOne({
            hiwpmmdsID: req.params.medicineId
        })
    ]);
    if (pharmacy) {
        return next(
            new AppError('This medicine already exist in your cart', 400)
        );
    }

    if (!product) {
        return next(new AppError('Product not found!', 404));
    }
    req.body.hiwpmpcdmID = await encryptID(process.env.MEDICAL_RECORD_SECRET);
    req.body.createdAt = Date.now();
    req.body.medicineId = product._id;
    req.body.medicineEId = product.hiwpmmdsID;
    req.body.userId = req.user._id;
    return next();
});

// create cart
exports.createMedicineCart = factoryControllers.createOne(pharmacyCartModel);

// assign data for update cart
exports.assignDataforUpdateMedicineCart = (req, res, next) => {
    req.updateOneSearch = {
        userId: req.user._id,
        hiwpmpcdmID: req.params.cartId
    };
    return next();
};

// update cart
exports.updateMedicineCart = factoryControllers.updateOne(pharmacyCartModel);

// assign data for delete cart
exports.assignDataForDeleteCart = (req, res, next) => {
    req.searchQuery = { userId: req.user._id, hiwpmpcdmID: req.params.cartId };
    return next();
};

// delete cart
exports.deleteMedicineCart = factoryControllers.deleteOne(pharmacyCartModel);

// send json for update one
exports.sendJsonForDeleteOne = factoryControllers.sendJsonForDeleteOne();

// get my carte
exports.getMyMedicineCarts = catchAsync(async (req, res, next) => {
    const data = await pharmacyCartModel.aggregate([
        {
            $match: {
                userId: req.user._id
            }
        },
        {
            $lookup: {
                from: 'pharmacy medicines lists',
                localField: 'medicineId',
                foreignField: '_id',
                as: 'product'
            }
        },
        {
            $unwind: '$product'
        }
    ]);
    req.body.docs = data;
    return next();
});

// send json for get all cart
exports.sendJsonForGetAll = factoryControllers.sendJsonForAll();

const multerStorage = multer.memoryStorage();

function multerFilter(req, file, cb) {
    if (
        file.mimetype.startsWith('image') ||
        file.mimetype.startsWith('application/pdf')
    ) {
        console.log(file);
        cb(null, true);
    } else {
        cb(new AppError('Image or pdf only accepted.', 400), false);
    }
}
const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
});

// singleImage
exports.uploadPrescriptionOfUser = (name) => upload.single(name);

// check file
exports.checkFileAvailable = (req, res, next) => {
    if (req.from === 'mobile') {
        return next();
    }
    req.body.medicines = req.body.medicines.split(',');
    req.body.location = req.body.location.split(',');
    if (req.body.type === 'medicine') {
        return next();
    }
    if (!req.file) {
        return next(new AppError('Prescription should be included.'));
    }
    req.file.fileType =
        req.file.mimetype === 'application/pdf' ? 'pdf' : 'jpeg';
    req.file.content =
        req.file.mimetype === 'application/pdf'
            ? 'application/pdf'
            : 'image/jpeg';
    req.file.imagename = `${`${`${req.user._id
        .toString()
        .split(/[a-z]+/)
        .join('')}-${Math.round(
        Date.now() * Date.now() * Math.random() * Math.random() * 1000000
    )}`}`
        .split('-')
        .join('')}-pharmacy-user`;
    return next();
};

// upload files in s3
exports.uploadLaboratoryReportToAWS = catchAsync(async (req, res, next) => {
    if (req.from === 'mobile' || req.body.type === 'medicine') {
        return next();
    }
    const s3 = new AWS.S3({
        accessKeyId: process.env.AWS_ACCESSKEY,
        secretAccessKey: process.env.AWS_SECRETKEY,
        region: process.env.AWS_REGION
    });
    const params = {
        Bucket: process.env.AWS_BUCKET,
        Key: `${req.file.imagename}.${req.file.fileType}`,
        ContentType: req.file.content,
        Body: req.file.buffer
    };
    s3.upload(params, (err, data) => {
        if (err) {
            return next(
                new AppError(
                    'Somehing went wrong while processing your request.Please try again.',
                    401
                )
            );
        }
        req.body.prescription = data.Location;

        return next();
    });
});
