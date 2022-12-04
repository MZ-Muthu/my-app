// ============================================================
// import models
const { default: mongoose } = require('mongoose');
const AWS = require('aws-sdk');
const sharp = require('sharp');
const { validate } = require('uuid');
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
const medicalMarketCategories = require('../models/MedicalMarket/medicalMarketCategoriesModel');
const partnerModel = require('../models/shared/partnerModel');
const medicalMarketProductsModel = require('../models/MedicalMarket/medicalMarketProductsModel');
const marketReviewModel = require('../models/MedicalMarket/medicalMarketProductReviewModel');
const medicalMarketProductCartModel = require('../models/MedicalMarket/medicalMarketProductCartModel');
const medicalMarketProductWishlistModel = require('../models/MedicalMarket/medicalMarketProductWishlistModel');
const addressModel = require('../models/shared/addUserAddressModel');
const medicalMarketProductOrderModel = require('../models/MedicalMarket/orderMedicalMarketProductModel');
const medicalMarketQuoteRequesterModel = require('../models/MedicalMarket/medicalMarketQuoteRequesterModel');
const medicalMarketServiceProviderModel = require('../models/MedicalMarket/medicalMarketServiceProviderModel');

// ============================================================
// create controllers
// assign data for create new medical market service
exports.assignDataForCreateNewMedicalMarketList = catchAsync(
    async (req, res, next) => {
        req.body.hiwmmcmmID = await encryptID(
            process.env.MEDICAL_MARKET_SECRET
        );
        req.body.createdAt = Date.now();
        return next();
    }
);

// create new homecare service
exports.createNewMedicalMarketList = factoryControllers.createOne(
    medicalMarketCategories
);

// send created new service  to client
exports.sendServiceJson = factoryControllers.sendJson();

// get all homecare service
exports.getAllMedicalMarketServices = factoryControllers.getAll(
    medicalMarketCategories
);

// send json for get all data
exports.sendJsonAllData = factoryControllers.sendJsonForFindAll();

// assign data for get old data
exports.getOldData = catchAsync(async (req, res, next) => {
    const data = await medicalMarketCategories.findOne({
        hiwmmcmmID: req.params.serviceId
    });
    if (!data) {
        return next(
            new AppError(
                'Something went wrong while processing your request.',
                400
            )
        );
    }

    req.oldName = data.name;
    return next();
});
// assign data for update MedicalMarket service
exports.assignDataForUpdateMedicalMarketService = (req, res, next) => {
    req.updateOneSearch = { hiwmmcmmID: req.params.serviceId };
    return next();
};

// assign data for update all MedicalMarket services data
exports.assignDataForUpdateAll = (req, res, next) => {
    if (req.body.name === req.oldName) {
        return res.status(200).json({ status: 'Success' });
    }

    req.updateAllSearchQuery = { serviceName: req.oldName };
    req.updateAllData = { serviceName: req.body.name };
    return next();
};

// verify new homecare service
exports.verifyMedicalMarketProductService = catchAsync(
    async (req, res, next) => {
        const [partner] = await Promise.all([
            partnerModel.findOne({
                userId: req.user._id,
                status: 'accepted',
                for: 'Medical Market'
            }),
            medicalMarketList.findOne({
                name: req.body.serviceName
            })
        ]);
        if (!partner) {
            return next(
                new AppError(
                    'Something went wrong while processing your request.',
                    401
                )
            );
        }
        req.body.parentEID = partner.hiwpmID;
        req.body.userId = req.user._id;
        req.body.createdAt = Date.now();
        req.body.partnerId = partner._id;
        req.body.sellerName = req.user.name;
        req.body.hiwmmpmID = await encryptID(process.env.MEDICAL_MARKET_SECRET);
        return next();
    }
);

// assign data for update medicalmarket product
exports.assignDataForUpdateMedicalMarketProducts = (req, res, next) => {
    req.updateOneSearch = { hiwhcsmID: req.params.serviceId };
    return next();
};

// update MedicalMarket service
exports.updateMedicalMarket = factoryControllers.updateOne(
    medicalMarketCategories
);

// update other homecare service data
exports.updateRemainingHomeCareServices = factoryControllers.updateAll(
    medicalMarketProductsModel
);

// send annomymus json
exports.sendJsonForUpdateAll = (req, res) =>
    res.status(200).json({
        status: 'Success'
    });

// create new service
exports.createNewMarketProduct = factoryControllers.createOne(
    medicalMarketProductsModel
);

// assign partner search data
exports.assignPartnerSearchData = (req, res, next) => {
    req.searchQuery = {
        userId: req.user._id,
        status: 'accepted',
        for: 'Medical Market'
    };
    req.body.userId = req.user._id;
    req.body.createdAt = Date.now();
    return next();
};

// verify valid partner to do this service
exports.verifyValidPartner = factoryControllers.findOne(partnerModel);

// assign partner search data
exports.assignDataForUpdateMedicalMarketProduct = (req, res, next) => {
    req.updateOneSearch = {
        userId: req.user._id,
        hiwmmpmID: req.params.productId
    };

    return next();
};

// update medicalmarket service
exports.updateMarketProduct = factoryControllers.updateOne(
    medicalMarketProductsModel
);

// send json for update one
exports.sendJsonForUpdateOne = factoryControllers.sendJsonForUpdateOne();

// delete homecare service
exports.deleteMedicalMarketService = catchAsync(async (req, res, next) => {
    const data = await medicalMarketProductsModel.deleteOne({
        userId: req.user._id,
        hiwmmpmID: req.params.serviceId
    });
    if (!data.deletedCount) {
        return next(
            new AppError(
                'Something went wrong while proessing your request',
                400
            )
        );
    }
    return next();
});

// get all servie
exports.getAllMedicalMarketProduct = factoryControllers.getAllFilter(
    medicalMarketProductsModel
);

// send json for all
exports.sendJsonAll = factoryControllers.sendAllFilter();

// assign data for get a service
exports.assignGetAServiceData = (req, res, next) => {
    req.searchQuery = { hiwmmpmID: req.params.productId };
    req.queryPopulate = [
        {
            path: 'reviews',
            select: 'userId rating review createdAt -marketId'
        },
        {
            path: 'partner',
            select: 'status'
        }
    ];
    return next();
};

// find data by id
exports.findServiceById = factoryControllers.findOneWithPopulate(
    medicalMarketProductsModel
);

// check if partner was acceter
exports.checkPartnerStatus = (req, res, next) => {
    if (req.body.findOnePopulateDocs?.partner[0]?.status !== 'accepted') {
        return next(new AppError('Product not found', 404));
    }
    req.body.findOnePopulateDocs.partner = undefined;
    return next();
};

// send json for find one with populate
exports.sendJsonForPopulateOne =
    factoryControllers.sendJsonForFindOneWithPopulate();

// assign data for get a service
exports.assignGetAMarketData = (req, res, next) => {
    req.searchQuery = { hiwmmpmID: req.params.serviceId };
    req.queryPopulate = [
        {
            path: 'reviews',
            select: 'userId rating review createdAt -marketId'
        }
    ];
    return next();
};

// assign data for market product reivews
exports.assingDMarketData = (req, res, next) => {
    req.upsertQuery = {
        userId: req.user._id,
        marketId: req.body.findOnePopulateDocs._id
    };

    req.upsertDoc = {
        $set: {
            review: req.body.review,
            rating: req.body.rating,
            userId: req.user._id,
            marketId: req.body.findOnePopulateDocs._id,
            createdAt: Date.now()
        }
    };

    return next();
};

// create review
exports.createOpticalsReview = factoryControllers.upsertOne(marketReviewModel);

// calculate avaerage of expert service
exports.updateReviewAverage = catchAsync(async (req, res, next) => {
    const stats = await marketReviewModel.aggregate([
        {
            $match: {
                marketId: mongoose.Types.ObjectId(
                    req.body.findOnePopulateDocs._id
                )
            }
        },
        {
            $group: {
                _id: '$opticalsId',
                length: { $sum: 1 },
                avgRating: { $avg: '$rating' }
            }
        }
    ]);
    if (stats.length > 0) {
        await medicalMarketProductsModel.findByIdAndUpdate(
            req.body.findOnePopulateDocs._id,
            {
                ratingsAverage: stats[0].avgRating,
                ratingsQuantity: stats[0].length
            }
        );
    } else {
        await medicalMarketProductsModel.findByIdAndUpdate(
            req.body.findOnePopulateDocs._id,
            {
                ratingsAverage: 0,
                ratingsQuantity: 0
            }
        );
    }
    return res.status(200).json({ status: 'Success' });
});

// assing data for add new cart
exports.verifyProductandcheckuser = catchAsync(async (req, res, next) => {
    const [product, cartUser] = await Promise.all([
        medicalMarketProductsModel.findOne({ hiwmmpmID: req.params.productId }),
        medicalMarketProductCartModel.exists({
            userId: req.user._id,
            productEID: req.params.productId,
            cartType: 'cart'
        })
    ]);

    if (!product) {
        return next(
            new AppError(
                'Something went wrong while processing your request',
                401
            )
        );
    }
    if (cartUser) {
        return next(new AppError('This Product is already is your list', 400));
    }
    if (product.productType === 'colorOnly') {
        if (!req.body.color) {
            return next(new AppError('Please select the color.', 404));
        }
        const [productData] = await Promise.all([
            product.productDetails.find(
                (el) => el.hiwmmppdsmID === req.body.color
            )
        ]);

        if (!productData) {
            return next(new AppError('Color not found', 404));
        }
        req.body = {
            color: productData.color,
            quantity: req.body.quantity ?? 1
        };
    } else if (product.productType === 'sizeOnly') {
        if (!req.body.size) {
            return next(new AppError('Please select the size.', 404));
        }
        const [productData] = await Promise.all([
            product.productDetails[0].subDetails.find(
                (el) => el.hiwmmpdssID === req.body.size
            )
        ]);
        if (!productData) {
            return next(new AppError('Size not found', 404));
        }
        req.body = {
            size: productData.size,
            quantity: req.body.quantity ?? 1
        };
    } else if (product.productType === 'colorWithSize') {
        if (!req.body.color) {
            return next(new AppError('Please select the color.', 404));
        }
        if (!req.body.size) {
            return next(new AppError('Please select the size.', 404));
        }
        let color, size;
        await Promise.all(
            product.productDetails.map(async (el) => {
                if (el.hiwmmppdsmID === req.body.color) {
                    color = el.color;
                    [{ size }] = await Promise.all([
                        el.subDetails.find(
                            (el) => el.hiwmmpdssID === req.body.size
                        )
                    ]);
                }
            })
        );

        if (!color || !size) {
            return next(new AppError('Product not found', 404));
        }

        req.body = {
            color,
            size,
            quantity: req.body.quantity ?? 1
        };
    } else if (product.productType === 'single') {
        req.body = { quantity: req.body.quantity ?? 1 };
    }
    req.body.userId = req.user._id;
    req.body.productEID = product.hiwmmpmID;
    req.body.productId = product._id;
    req.body.productType = product.productType;
    req.body.hiwmmpcsID = await encryptID(process.env.MEDICAL_MARKET_SECRET);

    return next();
});

// create new cart
exports.createNewCart = factoryControllers.createOne(
    medicalMarketProductCartModel
);

// assin data for update cart
exports.checkCartDataForUpdate = catchAsync(async (req, res, next) => {
    let [product] = await medicalMarketProductCartModel.aggregate([
        {
            $match: {
                hiwmmpcsID: req.params.cartId,
                userId: req.user._id,
                cartType: 'cart'
            }
        },
        {
            $lookup: {
                from: 'medical market products',
                localField: 'productId',
                foreignField: '_id',
                pipeline: [
                    {
                        $lookup: {
                            from: 'partners',
                            localField: 'partnerId',
                            foreignField: '_id',
                            as: 'partner',
                            pipeline: [
                                {
                                    $match: {
                                        status: 'accepted',
                                        for: 'Medical Market'
                                    }
                                }
                            ]
                        }
                    },
                    {
                        $unwind: '$partner'
                    }
                ],
                as: 'product'
            }
        }
    ]);
    if (!product) {
        return next(new AppError('Cart not found.', 404));
    }
    if (!product.product.length) {
        return next(new AppError('Invalid product', 400));
    }
    if (product.productType !== product.product[0].productType) {
        return next(new AppError('Invalid product', 400));
    }
    if (product.product[0].productType === 'colorOnly') {
        const checkColor = !req.body.color && !product.color;
        if (checkColor) {
            return next(new AppError('Please select the color.', 404));
        }
        let productData;
        if (req.body.color) {
            [productData] = await Promise.all([
                product.product[0].productDetails.find(
                    (el) => el.hiwmmppdsmID === req.body.color
                )
            ]);
        } else {
            productData = { color: product.color };
        }

        if (!productData) {
            return next(new AppError('Product not found', 404));
        }
        req.body = {
            color: productData.color,
            quantity: req.body.quantity ?? 1
        };
    } else if (product.product[0].productType === 'sizeOnly') {
        const checkSize = !req.body.size && !product.size;
        if (checkSize) {
            return next(new AppError('Please select the size.', 404));
        }
        let productData;
        if (req.body.size) {
            [productData] = await Promise.all([
                product.product[0].productDetails[0].subDetails.find(
                    (el) => el.hiwmmpdssID === req.body.size
                )
            ]);
        } else {
            productData = { size: product.size };
        }
        if (!productData) {
            return next(new AppError('Size not found', 404));
        }
        req.body = {
            size: productData.size,
            quantity: req.body.quantity ?? product.quantity
        };
    } else if (product.product[0].productType === 'colorWithSize') {
        const checkColor = !req.body.color && !product.color;
        const checkSize = !req.body.size && !product.size;
        if (checkColor) {
            return next(new AppError('Please select the color.', 404));
        }
        if (checkSize) {
            return next(new AppError('Please select the size.', 404));
        }
        let productData;
        if (req.body.color || req.body.size) {
            [productData] = await Promise.all(
                product.product[0].productDetails.map(async (el) => {
                    if (el.hiwmmppdsmID === req.body.color) {
                        const [size] = await Promise.all([
                            el.subDetails.find(
                                (el) => el.hiwmmpdssID === req.body.size
                            )
                        ]);
                        return { color: el?.color ?? false, size: size };
                    }
                })
            );
        } else {
            productData = {
                color: product.color,
                size: { size: product.size }
            };
        }
        if (!productData?.color || !productData?.size?.size) {
            return next(new AppError('Product not found', 404));
        }

        req.body = {
            color: productData.color,
            size: productData.size.size,
            quantity: req.body.quantity ?? 1
        };
    } else if (product.product[0].productType === 'single') {
        req.body = { quantity: req.body.quantity ?? 1 };
    }

    req.updateOneSearch = {
        hiwmmpcsID: req.params.cartId,
        userId: req.user._id,
        cartType: 'cart'
    };
    return next();
});

// update product cart
exports.updateProductCart = factoryControllers.updateOne(
    medicalMarketProductCartModel
);

// delete cart
exports.deleteMarketProductCart = catchAsync(async (req, res, next) => {
    const cart = await medicalMarketProductCartModel.findOneAndDelete({
        hiwmmpcsID: req.params.productId,
        userId: req.user._id
    });
    if (!cart) {
        return next(
            new AppError(
                'Something went wrong while processing your request.',
                401
            )
        );
    }
    return res.status(200).json({
        status: 'Success'
    });
});

// assing data for add new cart
exports.verifyProductandcheckuserWishlist = catchAsync(
    async (req, res, next) => {
        const [product, wishUser] = await Promise.all([
            medicalMarketProductsModel.findOne({
                hiwmmpmID: req.params.productId
            }),
            medicalMarketProductWishlistModel.exists({
                userId: req.user._id,
                productEID: req.params.productId
            })
        ]);

        if (!product) {
            return next(
                new AppError(
                    'Something went wrong while processing your request',
                    401
                )
            );
        }
        if (wishUser) {
            return next(
                new AppError('This Product is already is your list', 400)
            );
        }

        req.body.userId = req.user._id;
        req.body.productEID = product.hiwmmpmID;
        req.body.productId = product._id;

        req.body.hiwmmpwlID = await encryptID(
            process.env.MEDICAL_MARKET_SECRET
        );
        return next();
    }
);

// create new cart
exports.createNewWhishlist = factoryControllers.createOne(
    medicalMarketProductWishlistModel
);

// delete cart
exports.deleteMarketProductWishlist = catchAsync(async (req, res, next) => {
    const cart = await medicalMarketProductWishlistModel.findOneAndDelete({
        hiwmmpwlID: req.params.productId,
        userId: req.user._id
    });
    if (!cart) {
        return next(
            new AppError(
                'Something went wrong while processing your request.',
                401
            )
        );
    }
    return res.status(200).json({
        status: 'Success'
    });
});

// assign data for check valide wishlist and user
exports.assignDataForCheckValidMarketWishlist = (req, res, next) => {
    req.searchQuery = {
        hiwmmpwlID: req.params.productId,
        userId: req.user._id
    };
    return next();
};

// find wishlist
exports.findOneMarketPlaceProductWishlist = factoryControllers.findOne(
    medicalMarketProductWishlistModel
);

// check cart and wishlish data
exports.checkWishListandCartinMarketProduct = catchAsync(
    async (req, res, next) => {
        const [cart, product] = await Promise.all([
            medicalMarketProductCartModel.findOne({
                productEID: req.docs.productEID,
                userId: req.user._id
            }),
            medicalMarketProductsModel.findOne({
                hiwmmpmID: req.docs.productEID
            })
        ]);

        if (cart) {
            return next(
                new AppError('This product already in your cart.', 403)
            );
        }
        if (!product) {
            return next(
                new AppError(
                    'Something went wrong while processing you request.',
                    401
                )
            );
        }
        req.body = {};
        if (product.productType === 'colorOnly') {
            req.body.color = product.productDetails[0].color;
        } else if (product.productType === 'sizeOnly') {
            req.body.size = product.productDetails[0].subDetails[0].size;
        } else if (product.productType === 'colorWithSize') {
            req.body.color = product.productDetails[0].color;
            req.body.size = product.productDetails[0].subDetails[0].size;
        }
        req.body.quantity = 1;
        req.body.userId = req.user._id;
        req.body.productEID = product.hiwmmpmID;
        req.body.productId = product._id;
        req.body.productType = product.productType;
        req.body.hiwmmpcsID = await encryptID(
            process.env.MEDICAL_MARKET_SECRET
        );

        const [carts, wishlist] = await Promise.all([
            medicalMarketProductCartModel.create(req.body),
            medicalMarketProductWishlistModel.findByIdAndDelete(req.docs._id)
        ]);
        if (!carts || !wishlist) {
            return next(
                new AppError(
                    'Something went wrong while processing you request.',
                    401
                )
            );
        }
        return res.status(202).json({
            status: 'Success'
        });
    }
);

// medical market product order
exports.orderMedicalMarketProduct = catchAsync(async (req, res, next) => {
    const [address, product] = await Promise.all([
        addressModel.findOne({
            hiwnusID: req.params.address,
            userId: req.user._id
        }),
        medicalMarketProductCartModel.aggregate([
            {
                $match: {
                    userId: req.user._id,
                    cartType: 'order'
                }
            },
            {
                $lookup: {
                    from: 'medical market products',
                    localField: 'productId',
                    foreignField: '_id',
                    pipeline: [
                        {
                            $lookup: {
                                from: 'partners',
                                localField: 'partnerId',
                                foreignField: '_id',
                                as: 'partner',
                                pipeline: [
                                    {
                                        $match: {
                                            status: 'accepted',
                                            for: 'Medical Market'
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            $unwind: '$partner'
                        }
                    ],
                    as: 'product'
                }
            }
        ])
    ]);
    if (!address) {
        return next(new AppError('Address not found.', 404));
    }
    const batch = await encryptID(process.env.MEDICAL_MARKET_SECRET);
    const datas = await Promise.all(
        product.map(async (el) => {
            if (!el.product.length) {
                /*********** */
                const productName = await medicalMarketProductsModel.findById(
                    el.productId
                );
                return next(
                    new AppError(
                        `product '${productName.productName}' was not found.`,
                        404
                    )
                );
            }
            if (el.productType !== el.product[0].productType) {
                // ******************
                return next(
                    new AppError(
                        `Something went wrong with product ${el.product[0].productName}`
                    )
                );
            }
            if (el.productType === 'colorOnly') {
                if (!el.color) {
                    return next(new AppError('Please select the color.', 404));
                }
                const [productData] = await Promise.all([
                    el.product[0].productDetails.find(
                        (els) => el.color === el.color
                    )
                ]);

                if (!productData) {
                    return next(new AppError('Product not found', 404));
                }

                req.body.price = productData.subDetails[0].price;
                req.body.discountPrice =
                    productData.subDetails[0].discountPrice;
                req.body.bannerImage = productData.bannerImage;
                req.body.imageGallery = productData.imageGallery;
            } else if (el.productType === 'sizeOnly') {
                if (!el.size) {
                    return next(new AppError('Please select the size.', 404));
                }
                const [productData] = await Promise.all([
                    el.product[0].productDetails[0].subDetails.find(
                        (els) => els.size === el.size
                    )
                ]);
                if (!productData) {
                    return next(new AppError('Product not found', 404));
                }
                req.body.bannerImage = el.product[0].bannerImage;
                req.body.imageGallery = el.product[0].imageGallery;
                req.body.price = productData.price;
                req.body.discountPrice = productData.discountPrice;
            } else if (el.productType === 'colorWithSize') {
                if (!el.color) {
                    return next(new AppError('Please select the color.', 404));
                }
                if (!el.size) {
                    return next(new AppError('Please select the size.', 404));
                }
                const [productData] = await Promise.all(
                    el.product[0].productDetails.map(async (els) => {
                        if (els.color === el.color) {
                            const [size] = await Promise.all([
                                els.subDetails.find(
                                    (els2) => els2.size === el.size
                                )
                            ]);
                            return {
                                color: el?.color ?? false,
                                size: size,
                                image: els.bannerImage,
                                imageGallery: els.imageGallery
                            };
                        }
                    })
                );
                if (!productData?.color || !productData?.size?.size) {
                    return next(new AppError('Product not found', 404));
                }
                req.body.bannerImage = productData.image;
                req.body.imageGallery = productData.imageGallery;
                req.body.price = productData.size.price;
                req.body.discountPrice = productData.size.discountPrice;
            } else {
                req.body.price = el.product[0].price;
                req.body.bannerImage = el.product[0].bannerImage;
                req.body.imageGallery = el.product[0].imageGallery;
                req.body.discountPrice = el.product[0].discountPrice;
            }
            const uid = await encryptID(process.env.MEDICAL_MARKET_SECRET);
            const obj = {
                product: {
                    name: el.product[0].productName,
                    productId: el.productId,
                    bannerImage: req.body.bannerImage,
                    imageGallery: req.body.imageGallery,
                    color: el.color ?? undefined,
                    size: el.size ?? undefined,
                    price: req.body.price,
                    discountPrice: req.body.discountPrice,
                    quantity: el.quantity
                },
                productData: el.product[0],
                address: address,
                partnerId: el.product[0].partnerId,
                createdAt: Date.now(),
                hiwommpSID: uid,
                batch,
                userId: req.user._id
            };
            return obj;
        })
    );

    const orderMarketProduct = await medicalMarketProductOrderModel.create(
        datas
    );
    if (!orderMarketProduct) {
        return next(
            new AppError(
                'Something went wrong while processing your request.',
                400
            )
        );
    }
    return res.status(200).json({ status: 'Success' });
});

// save product to order product
exports.saveProductToOrderCart = catchAsync(async (req, res, next) => {
    if (!req.body.quantity) {
        return next(new AppError('Quantity should be included.', 400));
    }
    const product = await medicalMarketProductsModel.findOne({
        hiwmmpmID: req.params.productId
    });
    if (!product) {
        return next(new AppError('Product not found', 404));
    }
    const uid = await encryptID(process.env.MEDICAL_MARKET_SECRET);
    if (product.productType === 'colorOnly') {
        if (!req.body.color) {
            return next(new AppError('Please select the color.', 404));
        }
        const [productData] = await Promise.all([
            product.productDetails.find(
                (el) => el.hiwmmppdsmID === req.body.color
            )
        ]);
        if (!productData) {
            return next(new AppError('Product not found', 404));
        }

        req.body = {
            userId: req.user._id,
            productEID: product.hiwmmpmID,
            productId: product._id,
            quantity: req.body.quantity,
            productType: product.productType,
            color: productData.color,
            bannerImage: productData.bannerImage,
            hiwmmpcsID: uid,
            createdAt: Date.now(),
            cartType: 'order',
            price: productData.subDetails[0].price,
            discountPrice: productData.subDetails[0].discountPrice
        };
    } else if (product.productType === 'sizeOnly') {
        if (!req.body.size) {
            return next(new AppError('Please select the size.', 404));
        }
        const [productData] = await Promise.all([
            product.productDetails[0].subDetails.find(
                (el) => el.hiwmmpdssID === req.body.size
            )
        ]);

        if (!productData) {
            return next(new AppError('Product not found', 404));
        }

        req.body = {
            userId: req.user._id,
            productEID: product.hiwmmpmID,
            productId: product._id,
            quantity: req.body.quantity,
            productType: product.productType,
            size: productData.size,
            bannerImage: product.productDetails[0].bannerImage,
            hiwmmpcsID: uid,
            createdAt: Date.now(),
            cartType: 'order',
            price: productData.price,
            discountPrice: productData.discountPrice
        };
    } else if (product.productType === 'colorWithSize') {
        if (!req.body.color) {
            return next(new AppError('Please select the color.', 404));
        }
        if (!req.body.size) {
            return next(new AppError('Please select the size.', 404));
        }
        let color, size, bannerImage;
        await Promise.all(
            product.productDetails.map(async (el) => {
                if (el.hiwmmppdsmID === req.body.color) {
                    [size] = await Promise.all([
                        el.subDetails.find(
                            (els) => els.hiwmmpdssID === req.body.size
                        )
                    ]);
                    bannerImage = el.bannerImage;
                    color = el.color;
                }
            })
        );
        if (!color || !size?.size) {
            return next(new AppError('Product not found', 404));
        }
        req.body = {
            userId: req.user._id,
            productEID: product.hiwmmpmID,
            productId: product._id,
            quantity: req.body.quantity,
            productType: product.productType,
            color: color,
            size: size.size,
            bannerImage,
            hiwmmpcsID: uid,
            createdAt: Date.now(),
            cartType: 'order',
            price: size.price,
            discountPrice: size.discountPrice
        };
    } else if (product.productType === 'single') {
        req.body = {
            userId: req.user._id,
            productEID: product.hiwmmpmID,
            productId: product._id,
            quantity: req.body.quantity,
            productType: product.productType,
            hiwmmpcsID: uid,
            createdAt: Date.now(),
            cartType: 'order',
            price: product.price,
            bannerImage: product.bannerImage,
            discountPrice: product.discountPrice
        };
    }
    await medicalMarketProductCartModel.deleteMany({
        userId: req.user._id,
        cartType: 'order'
    });
    const data = await medicalMarketProductCartModel.create(req.body);
    if (!data) {
        return next(
            new AppError(
                'Something went wrong while processing your request',
                400
            )
        );
    }
    return res.status(200).json({
        status: 'Success'
    });
});

// assing data for cancel request
exports.assignDataForCancelMarketProductOrderService = (req, res, next) => {
    const bodydata = req.body.cause;
    req.body = {};
    req.body.status = 'canceled';
    req.body.cause = bodydata;
    req.body.cancelTime = Date.now();
    req.updateOneSearch = {
        hiwommpSID: req.params.orderId,
        userId: req.user._id,
        status: 'pending'
    };
    return next();
};

// assign data for get product
exports.getCartOrderProducts = catchAsync(async (req, res, next) => {
    req.searchQuery = { userId: req.user._id, cartType: 'order' };
    const [orders, address] = await Promise.all([
        medicalMarketProductCartModel.aggregate([
            {
                $match: {
                    userId: req.user._id,
                    cartType: 'order'
                }
            },
            {
                $lookup: {
                    from: 'medical market products',
                    localField: 'productId',
                    foreignField: '_id',
                    as: 'product'
                }
            }
        ]),
        addressModel.find({ userId: req.user._id })
    ]);

    req.body.docs = orders;
    req.body.address = address;
    return next();
});

// get orders
exports.sendJsonForDocs = (req, res) =>
    res.status(200).json({
        status: 'Success',
        docs: req.body.docs,
        address: req.body.address
    });

// aget card
exports.mangeMedicalMarketOrder = factoryControllers.updateOne(
    medicalMarketProductOrderModel
);

// send json status of homecare cancel requiest
exports.sendJsonforUpdateOne = factoryControllers.sendJsonForUpdateOne();

// get data for vendors and products
exports.getDataForQuote = catchAsync(async (req, res, next) => {
    let address = await addressModel.findOne({
        userId: req.user._id,
        hiwnusID: req.params.addressId
    });
    if (!address) {
        return next(new AppError('Address not found', 404));
    }
    address = `${address.address},${address.city},${address.city},${address.pincode}`;
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
                        as: 'partners'
                    }
                },
                {
                    $unwind: '$partners'
                },
                {
                    $match: { 'partners.status': 'accepted' }
                },
                {
                    $group: {
                        _id: '$partners._id',
                        eId: { $first: '$partners._id' }
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
                        address,
                        userId: req.user._id,
                        for: uuid,
                        requestPartnerID: els._id,
                        requestedPartnerEID: els.eId,
                        createdAt: Date.now(),
                        from: 'user'
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
        return next(
            new AppError('No related vendors found in your search.', 404)
        );
    }
    return res.status(200).json({ status: 'Success' });
});

// cancel requester request
exports.assignDataForCancelMarketOrderRequest = catchAsync(
    async (req, res, next) => {
        req.updateAllSearchQuery = {
            for: req.params.quoteId,
            userId: req.user._id,
            from: 'user'
        };
        req.updateAllData = {
            proposeStatus: 'canceled',
            userActionDate: Date.now()
        };
        console.log(req.updateAllSearchQuery);
        return next();
    }
);

// cancel requester request
exports.assignDataForCancelMarketQuotesRequest = catchAsync(
    async (req, res, next) => {
        req.updateAllSearchQuery = {
            for: req.params.quoteId,
            userId: req.user._id,
            from: 'user'
        };
        req.updateAllData = {
            proposeStatus: 'canceled',
            userActionDate: Date.now()
        };
        return next();
    }
);

// respont quote status
exports.assignDataForQuotesRequests = (req, res, next) => {
    req.updateOneSearch = {
        hiwmmqrrsID: req.params.quoteId,
        userId: req.user._id,
        from: 'Medical Market',
        proposeStatus: 'proposal-submited'
    };
    req.body.proposeStatus = req.body.status;
    req.body.userActionDate = Date.now();
    return next();
};

// cancel requerster
exports.updateMedcalquoterequestor = factoryControllers.updateOne(
    medicalMarketQuoteRequesterModel
);
// cancel quote
exports.updateMedcalquoterequestors = factoryControllers.updateAll(
    medicalMarketQuoteRequesterModel
);

// assign data for upate vendor
exports.assigndataForUpdateQuote = (req, res, next) => {
    req.updateOneSearch = {
        hiwmmqrrsID: req.params.quoteId,
        requestPartner: req.docs._id,
        proposeStatus: 'requested'
    };
    if (req.body.status === 'rejected-by-vendor') {
        req.body = { status: 'rejected-by-vendor' };
    }
    req.body.vendorActionDate = Date.now();
    return next();
};

// order products form cart
exports.saveProductToOrderFromCart = catchAsync(async (req, res, next) => {
    const obj = {};
    obj['$or'] = await Promise.all(
        req.body.ids.map(async (el) => {
            return { hiwmmpcsID: el };
        })
    );
    const product = await medicalMarketProductCartModel.aggregate([
        {
            $match: { userId: req.user._id, cartType: 'cart' }
        },
        {
            $match: {
                ...obj
            }
        },
        {
            $lookup: {
                from: 'medical market products',
                localField: 'productId',
                foreignField: '_id',
                pipeline: [
                    {
                        $lookup: {
                            from: 'partners',
                            localField: 'partnerId',
                            foreignField: '_id',
                            as: 'partner',
                            pipeline: [
                                {
                                    $match: {
                                        status: 'accepted',
                                        for: 'Medical Market'
                                    }
                                }
                            ]
                        }
                    },
                    {
                        $unwind: '$partner'
                    }
                ],
                as: 'product'
            }
        }
    ]);
    // res.json(product);
    const cartData = await Promise.all(
        product.map(async (el) => {
            const uid = await encryptID(process.env.MEDICAL_MARKET_SECRET);
            if (!el.product.length) {
                /*********** */
                const productName = await medicalMarketProductsModel.findById(
                    el.productId
                );
                return next(
                    new AppError(
                        `product '${productName.productName}' was not found.`,
                        404
                    )
                );
            }
            if (el.productType !== el.product[0].productType) {
                // ******************
                return next(
                    new AppError(
                        `Something went wrong with product ${el.product[0].productName}`
                    )
                );
            }
            let obj = {};
            if (el.productType === 'colorOnly') {
                if (!el.color) {
                    return next(new AppError('Please select the color.', 400));
                }
                const [productData] = await Promise.all([
                    el.product[0].productDetails.find(
                        (els) => els.color === el.color
                    )
                ]);
                if (!productData) {
                    return next(new AppError('Product not found', 404));
                }
                obj = {
                    userId: req.user._id,
                    productEID: el.product[0].hiwmmpmID,
                    productId: el.product[0]._id,
                    quantity: el.quantity,
                    productType: el.product[0].productType,
                    bannerImage: el.product[0].bannerImage,
                    color: el.color,
                    hiwmmpcsID: uid,
                    createdAt: Date.now(),
                    cartType: 'order',
                    price: productData.subDetails[0].price,
                    discountPrice: productData.subDetails[0].discountPrice
                };
            } else if (el.productType === 'sizeOnly') {
                if (!el.size) {
                    return next(new AppError('Please select the size'));
                }
                const [productData] = await Promise.all([
                    el.product[0].productDetails[0].subDetails.find(
                        (els) => els.size === el.size
                    )
                ]);
                if (!productData) {
                    return next(new AppError('Product not found', 404));
                }
                obj = {
                    userId: req.user._id,
                    productEID: el.product[0].hiwmmpmID,
                    productId: el.product[0]._id,
                    quantity: el.quantity,
                    productType: el.product[0].productType,
                    size: el.size,
                    bannerImage: el.product[0].bannerImage,
                    hiwmmpcsID: uid,
                    createdAt: Date.now(),
                    cartType: 'order',
                    price: productData.price,
                    discountPrice: productData.discountPrice
                };
            } else if (el.productType === 'colorWithSize') {
                if (!el.color) {
                    return next(new AppError('Please select the color.', 400));
                }
                if (!el.size) {
                    return next(new AppError('Please select the size'));
                }
                let color, size, bannerImage;
                await Promise.all(
                    el.product[0].productDetails.map(async (els) => {
                        if (el.color === els.color) {
                            [size] = await Promise.all([
                                els.subDetails.find(
                                    (els2) => els2.size === el.size
                                )
                            ]);
                            bannerImage = els.bannerImage;
                            color = els.color;
                        }
                    })
                );
                if (!color || !size?.size) {
                    return next(new AppError('Product not found', 404));
                }
                obj = {
                    userId: req.user._id,
                    productEID: el.product[0].hiwmmpmID,
                    productId: el.product[0]._id,
                    quantity: el.quantity,
                    productType: el.product[0].productType,
                    color: el.color,
                    size: el.size,
                    bannerImage,
                    hiwmmpcsID: uid,
                    createdAt: Date.now(),
                    cartType: 'order',
                    price: size.price,
                    discountPrice: size.discountPrice
                };
            } else if (el.productType === 'single') {
                obj = {
                    userId: req.user._id,
                    productEID: el.product[0].hiwmmpmID,
                    productId: el.product[0]._id,
                    quantity: el.quantity,
                    productType: el.product[0].productType,
                    hiwmmpcsID: uid,
                    createdAt: Date.now(),
                    cartType: 'order',
                    price: el.product[0].price,
                    discountPrice: el.product[0].discountPrice,
                    bannerImage: el.product[0].bannerImage
                };
            }
            return obj;
        })
    );
    await medicalMarketProductCartModel.deleteMany({
        userId: req.user._id,
        cartType: 'order'
    });
    const data = await medicalMarketProductCartModel.create(cartData);
    if (!data) {
        return next(
            new AppError(
                'Something went wrong while processing your request',
                400
            )
        );
    }
    return res.status(200).json({
        status: 'Success'
    });
});

// get my active quoetes
exports.getMyActiveQuotes = catchAsync(async (req, res, next) => {
    const quotes = await medicalMarketQuoteRequesterModel.aggregate([
        {
            $match: {
                userId: req.user._id,
                from: req.params.from,
                $and: [
                    {
                        proposeStatus: { $ne: 'completed' }
                    },
                    {
                        proposeStatus: { $ne: 'canceled' }
                    }
                ]
            }
        },
        {
            $group: {
                _id: '$for',
                productName: { $first: '$productName' },
                proposalDate: { $first: '$proposalDate' },
                productDescription: { $first: '$productDescription' },
                quantity: { $first: '$quantity' }
            }
        }
    ]);
    return res.status(200).json({
        status: 'Success',
        docs: quotes
    });
});

// get a quote
exports.getAQuotes = catchAsync(async (req, res, next) => {
    let quotes = await medicalMarketQuoteRequesterModel.aggregate([
        {
            $match: {
                for: req.params.quoteId,
                userId: req.user._id,
                from: req.body.from
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
    quotes = await Promise.all(
        quotes.map((el) => {
            return { ...el, _id: undefined };
        })
    );
    return res.status(200).json({
        status: 'Success',
        docs: quotes
    });
});

// get partner and produt names
exports.getProductList = catchAsync(async (req, res, next) => {
    const [names, [request]] = await Promise.all([
        medicalMarketProductsModel.find().distinct('productStream'),
        medicalMarketQuoteRequesterModel.aggregate([
            {
                $facet: {
                    request: [
                        {
                            $match: {
                                userId: req.user._id,
                                proposeStatus: 'requested',
                                from: req.params.from ?? req.params.moduleName
                            }
                        },
                        {
                            $group: {
                                _id: '$for',
                                productName: { $first: '$productName' },
                                quantity: { $first: '$quantity' },
                                proposalDate: { $first: '$proposalDate' },
                                from: { $first: '$from' },
                                total: { $sum: 1 }
                            }
                        },
                        {
                            $sort: { proposalDate: -1 }
                        }
                    ],
                    activeList: [
                        {
                            $match: {
                                userId: req.user._id,
                                $or: [
                                    { proposeStatus: 'requested' },
                                    { proposeStatus: 'proposal-submited' },
                                    { proposeStatus: 'accepted' }
                                ],
                                from: req.params.from ?? req.params.moduleName
                            }
                        },
                        {
                            $group: {
                                _id: '$for',
                                productName: { $first: '$productName' },
                                quantity: { $first: '$quantity' },
                                proposalDate: { $first: '$proposalDate' },
                                productDescription: {
                                    $first: '$productDescription'
                                },
                                from: { $first: '$from' },
                                total: { $sum: 1 }
                            }
                        },
                        {
                            $sort: { proposalDate: -1 }
                        }
                    ],
                    history: [
                        {
                            $match: {
                                userId: req.user._id,
                                from: req.params.from ?? req.params.moduleName,
                                $or: [
                                    { proposeStatus: 'rejected-by-user' },
                                    { proposeStatus: 'completed' }
                                ]
                            }
                        },
                        {
                            $lookup: {
                                from: 'partners',
                                localField: 'requestPartnerID',
                                foreignField: '_id',
                                pipeline: [{ $project: { name: 1 } }],
                                as: 'partner'
                            }
                        },
                        {
                            $unwind: '$partner'
                        }
                    ]
                }
            }
        ])
    ]);

    req.body.history = request.history;
    req.body.request = request.request;
    req.body.activeList = request.activeList;
    req.body.names = names;
    return next();
});

// send json for product quotes
exports.sendJsonForQuotesList = (req, res) =>
    res.status(200).json({
        status: 'Success',
        names: req.body.names,
        request: req.body.request,
        activeList: req.body.activeList,
        history: req.body.history
    });

// get partner and produt names
exports.getProductListForUser = catchAsync(async (req, res, next) => {
    console.log(req.user._id);
    const [names, [request], address] = await Promise.all([
        medicalMarketProductsModel.find().distinct('productStream'),
        medicalMarketQuoteRequesterModel.aggregate([
            {
                $facet: {
                    request: [
                        {
                            $match: {
                                userId: req.user._id,
                                $or: [
                                    {
                                        proposeStatus: 'requested'
                                    },
                                    {
                                        proposeStatus: 'proposal-submited'
                                    },
                                    {
                                        proposeStatus: 'accepted'
                                    }
                                ],
                                from: 'user'
                            }
                        },
                        {
                            $group: {
                                _id: '$for',
                                productName: { $first: '$productName' },
                                quantity: { $first: '$quantity' },
                                proposalDate: { $first: '$proposalDate' },
                                from: { $first: '$from' },
                                total: { $sum: 1 }
                            }
                        },
                        {
                            $sort: { proposalDate: -1 }
                        }
                    ],
                    negotiate: [
                        {
                            $match: {
                                userId: req.user._id,
                                proposeStatus: 'negotiate',
                                from: 'user'
                            }
                        },
                        {
                            $group: {
                                _id: '$for',
                                productName: { $first: '$productName' },
                                quantity: { $first: '$quantity' },
                                proposalDate: { $first: '$proposalDate' },
                                productDescription: {
                                    $first: '$productDescription'
                                },
                                from: { $first: '$from' },
                                total: { $sum: 1 }
                            }
                        },
                        {
                            $sort: { proposalDate: -1 }
                        }
                    ],
                    history: [
                        {
                            $match: {
                                userId: req.user._id,
                                from: 'user',
                                $or: [
                                    { proposeStatus: 'rejected-by-user' },
                                    { proposeStatus: 'completed' },
                                    { proposeStatus: 'rejected-by-vendor' },
                                    { proposeStatus: 'canceled' }
                                ]
                            }
                        },
                        {
                            $lookup: {
                                from: 'partners',
                                localField: 'requestPartnerID',
                                foreignField: '_id',
                                pipeline: [{ $project: { name: 1 } }],
                                as: 'partner'
                            }
                        },
                        {
                            $unwind: '$partner'
                        }
                    ]
                }
            }
        ]),
        addressModel.find({ userId: req.user._id })
    ]);

    req.body.history = request.history;
    req.body.request = request.request;
    req.body.negotiate = request.negotiate;
    req.body.names = names;
    req.body.address = address;
    return next();
});

// send jsonf for my quotes
exports.sendJonsForMyquoteRequests = (req, res) =>
    res.status(200).json({
        status: 'Success',
        history: req.body.history,
        request: req.body.request,
        negotiate: req.body.negotiate
    });

// set params for user
exports.setParmsForUser = (req, res, next) => {
    req.params.from = 'user';
    return next();
};

// get top 3 lowest quotes
exports.getTop3LowestQuotes = catchAsync(async (req, res, next) => {
    let obj = {};

    if (req.originalUrl.includes('/lowest-quotes')) {
        obj = {
            for: req.params.batchId,
            $or: [
                { proposeStatus: 'proposal-submited' },
                { proposeStatus: 'negotiate' },
                { proposeStatus: 'accepted' }
            ]
        };
    } else if (req.originalUrl.includes('/get-a-quote')) {
        obj = {
            hiwmmqrrsID: req.params.quoteId
        };
    } else {
        return next(new AppError(`undefined url ${req.originalUrl}`, 404));
    }
    const lowest = await medicalMarketQuoteRequesterModel.aggregate([
        {
            $match: {
                userId: req.user._id,
                from: req.params.from ?? req.params.moduleName,
                ...obj
            }
        },
        {
            $lookup: {
                from: 'partners',
                localField: 'requestPartnerID',
                foreignField: '_id',
                as: 'partner'
            }
        },
        {
            $unwind: '$partner'
        },
        {
            $sort: { estimateCost: -1, submitDate: 1 }
        },
        { $limit: 3 },
        {
            $group: {
                _id: '$estimateCost',
                partners: {
                    $push: {
                        proposal: '$hiwmmqrrsID',
                        partner: '$partner.name',
                        vendorActionDate: '$vendorActionDate',
                        productName: '$productName',
                        proposalDate: '$proposalDate',
                        productDescription: '$productDescription',
                        quantity: '$quantity',
                        proposeStatus: '$proposeStatus',
                        estimateCost: '$estimateCost',
                        from: '$from',
                        negotiateDescription: '$negotiateDescription'
                    }
                }
            }
        }
    ]);
    req.body.lowest = lowest;
    return next();
});

// send json for lowest quotes list
exports.sendJsonForLowestQuotesList = (req, res) =>
    res.status(200).json({
        status: 'Success',
        quotes: req.body.lowest,
        from: req.params.from
    });

// /send jso for quotes
exports.sendJsonForLowestQuotes = (req, res) =>
    res.status(200).json({ status: 'Success', docs: req.body.lowest });

// filter new blood bank data
exports.filterMedicalMarketStoreData = catchAsync(async (req, res, next) => {
    [req.body] = await Promise.all([
        filerDataFromRequest(
            req.body,
            'contactPersonName',
            'contactPersonPhone',
            'email',
            'storePhone',
            'landline',
            'openTime',
            'closeTime',
            'location',
            'address'
        )
    ]);
    return next();
});
// assign data for update medical market
exports.assignDataForUpdatMedicalMarketServiceProvider = (req, res, next) => {
    req.updateOneSearch = { userId: req.user._id, partnerId: req.docs._id };
    req.body.location = {
        type: 'Point',
        coordinates: [req.body.location[1], req.body.location[0]]
    };
    return next();
};

// update medicalmarket service provider
exports.updateMedicalMarketServiceProvider = factoryControllers.updateOne(
    medicalMarketServiceProviderModel
);

// check the partner and councilar
exports.checkValidVendorandPartnerMedicalMarket = catchAsync(
    async (req, res, next) => {
        const [partner] = await Promise.all([
            partnerModel.findOne({
                userId: req.user._id,
                status: 'accepted',
                for: 'Medical Market'
            })
        ]);

        if (!partner) {
            return next(
                new AppError('Please verify or create partner service.', 400)
            );
        }

        // console.log(req.body);
        req.body.userId = req.user._id;
        req.body.partnerId = partner._id;
        req.body.createdAt = Date.now();
        req.body.location = {
            type: 'Point',
            coordinates: [req.body.location[1], req.body.location[0]]
        };
        req.body.storeName = partner.company;
        req.body.storeEmail = partner.email;
        req.body.hiwmmspmID = await encryptID(
            process.env.AMBULANCE_ALERT_SECRET
        );
        return next();
    }
);

// create new medical market store
exports.createNewMedicalMarketStore = factoryControllers.createOne(
    medicalMarketServiceProviderModel
);
// send json for create one
exports.sendJsonForCreateOne = factoryControllers.sendJson();

// get bloodbank and partner
exports.getPartneranMarket = catchAsync(async (req, res, next) => {
    const [partner] = await Promise.all([
        partnerModel.findOne({
            userId: req.user._id,
            for: 'Medical Market',
            status: 'accepted'
        })
    ]);
    if (!partner) {
        return next(
            new AppError(
                'Something went wrong while processing your request',
                400
            )
        );
    }

    req.query.from = 'Medical Market';
    req.docs = partner;
    return next();
});

// get all valid products
exports.assignDataForGetProducts = (req, res, next) => {
    req.searchQuery = {};
    req.queryPopulate = [
        {
            path: 'partner',
            select: 'status'
        }
    ];
    return next();
};

// get all products
exports.getAllProduct =
    factoryControllers.getFindAllWithPopulateElemMatchFilter(
        medicalMarketProductsModel
    );

// sennd jfon for get all filtter with populate
exports.sendJsonForFindAllWithPopulate = factoryControllers.sendAllFilter();

// assign data for my product
exports.getMyProducts = catchAsync(async (req, res, next) => {
    const [products, categories, [orders]] = await Promise.all([
        medicalMarketProductsModel.find({
            userId: req.user._id
        }),
        medicalMarketCategories.find().distinct('name'),
        medicalMarketProductOrderModel.aggregate([
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
                                status: 'pending',
                                orderStatus: { $ne: 'delivered' }
                            }
                        }
                    ],
                    history: [
                        {
                            $match: {
                                status: 'delivered',
                                orderStatus: 'delivered'
                            }
                        }
                    ]
                }
            }
        ])
    ]);
    req.body.product = products;
    req.body.categories = categories;
    req.body.orders = orders;
    return next();
});

// my quote datas
exports.getMyQuotes = catchAsync(async (req, res, next) => {
    const [quotes] = await medicalMarketQuoteRequesterModel.aggregate([
        {
            $match: {
                requestPartnerID: req.docs._id
            }
        },

        {
            $lookup: {
                from: 'users',
                localField: 'userId',
                foreignField: '_id',
                pipeline: [
                    {
                        $project: { name: 1 }
                    }
                ],
                as: 'user'
            }
        },
        { $unwind: '$user' },
        {
            $facet: {
                requested: [
                    {
                        $match: {
                            $or: [
                                {
                                    proposeStatus: 'requested'
                                },
                                {
                                    proposeStatus: 'proposal-submited'
                                },
                                {
                                    proposeStatus: 'accepted'
                                }
                            ]
                        }
                    }
                ],
                negotiate: [
                    {
                        $match: { proposeStatus: 'negotiate' }
                    }
                ],
                history: [
                    {
                        $match: {
                            $or: [
                                {
                                    proposeStatus: 'rejected-by-user'
                                },
                                {
                                    proposeStatus: 'rejected-by-vendor'
                                },
                                {
                                    proposeStatus: 'canceled'
                                },
                                {
                                    proposeStatus: 'completed'
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]);
    req.body.quotes = quotes;
    return next();
});

//

// filter new blood bank data
exports.filterMedicalMarket = catchAsync(async (req, res, next) => {
    [req.body] = await Promise.all([
        filerDataFromRequest(
            req.body,
            'name',
            'phone',
            'centerPhone',
            'centerLandLine',
            'latitude',
            'longtitude',
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
exports.assignPartnerSearchDataForUpdate = (req, res, next) => {
    req.updateOneSearch = {
        userId: req.user._id,
        status: 'accepted',
        for: 'Medical Market'
    };
    req.body.location = {
        type: 'Point',
        coordinates: [req.body.latitude, req.body.longtitude]
    };
    req.body.userId = req.user._id;

    req.body = { $set: req.body };
    return next();
};

// update Market service
exports.updateMarketService = factoryControllers.updateOne(partnerModel);

// set image size
exports.setImageSizeForMarketProduct = (req, res, next) => {
    req.image = {};
    req.image.resizeW = 400;
    req.image.resizeH = 400;
    return next();
};

// assign data fo rverify partner
exports.assignDataForFindPartner = (req, res, next) => {
    req.searchQuery = {
        userId: req.user._id,
        status: 'accepted',
        for: 'Medical Market'
    };
    return next();
};

// verify valid data in opticals
exports.verifyMarketProductData = catchAsync(async (req, res, next) => {
    req.body.city = req.docs.city;
    req.body.address = req.docs.address;
    req.body.partnerId = req.docs._id;
    req.body.partnerEID = req.docs.hiwpmID;
    req.body.sellerName = req.docs.company;
    if (req.body.statusType === 'create') {
        req.body.userId = req.user._id;
        req.body.createdAt = Date.now();
        req.body.hiwmmpmID = await encryptID(process.env.OPTICAL_SECRET);
    } else if (req.body.statusType !== 'update') {
        return next(
            new AppError(
                'Something went wrong while processing your request',
                400
            )
        );
    }
    return next();
});

// save json
exports.saveFilesAsJbgForMarketProduct = catchAsync(async (req, res, next) => {
    if (req.body.statusType === 'create') {
        if (req.body.productType === 'single') {
            req.body.image = sharp(Buffer.from(req.body.image))
                .resize(req.image.resizeW * 1, req.image.resizeH * 1)
                .toFormat('jpeg')
                .jpeg({ quality: 90 });
            req.body.imageGallery = await Promise.all(
                req.body.imageGallery.map((els2) =>
                    sharp(Buffer.from(els2))
                        .resize(req.image.resizeW * 1, req.image.resizeH * 1)
                        .toFormat('jpeg')
                        .jpeg({ quality: 90 })
                )
            );
        } else if (req.body.productType === 'colorOnly') {
            req.body.productDetails = await Promise.all(
                req.body.productDetails.map(async (el, index) => {
                    const subDetails = [
                        {
                            price: el.price,
                            discountPrice: el.discountPrice,
                            hiwmmpdssID: 'abx'
                        }
                    ];
                    const image = sharp(Buffer.from(el.bannerImage))
                        .resize(req.image.resizeW * 1, req.image.resizeH * 1)
                        .toFormat('jpeg')
                        .jpeg({ quality: 90 });
                    const imageGallery = await Promise.all(
                        el.imageGallery.map((els2) =>
                            sharp(Buffer.from(els2))
                                .resize(
                                    req.image.resizeW * 1,
                                    req.image.resizeH * 1
                                )
                                .toFormat('jpeg')
                                .jpeg({ quality: 90 })
                        )
                    );

                    return { ...el, image, imageGallery };
                })
            );
        } else if (req.body.productType === 'sizeOnly') {
            req.body.image = sharp(Buffer.from(req.body.image))
                .resize(req.image.resizeW * 1, req.image.resizeH * 1)
                .toFormat('jpeg')
                .jpeg({ quality: 90 });
            req.body.imageGallery = await Promise.all(
                req.body.imageGallery.map((els2) =>
                    sharp(Buffer.from(els2))
                        .resize(req.image.resizeW * 1, req.image.resizeH * 1)
                        .toFormat('jpeg')
                        .jpeg({ quality: 90 })
                )
            );
        } else if (req.body.productType === 'colorWithSize') {
            req.body.productDetails = await Promise.all(
                req.body.productDetails.map(async (el) => {
                    const image = sharp(Buffer.from(el.bannerImage))
                        .resize(req.image.resizeW * 1, req.image.resizeH * 1)
                        .toFormat('jpeg')
                        .jpeg({ quality: 90 });

                    const imageGallery = await Promise.all(
                        el.imageGallery.map((els2) =>
                            sharp(Buffer.from(els2))
                                .resize(
                                    req.image.resizeW * 1,
                                    req.image.resizeH * 1
                                )
                                .toFormat('jpeg')
                                .jpeg({ quality: 90 })
                        )
                    );
                    return {
                        ...el,
                        bannerImage: image,
                        imageGallery: imageGallery
                    };
                })
            );
        }
    } else if (req.body.statusType === 'update') {
        if (req.body.productType === 'single') {
            if (req.body.image) {
                req.body.image = sharp(Buffer.from(req.body.image))
                    .resize(req.image.resizeW * 1, req.image.resizeH * 1)
                    .toFormat('jpeg')
                    .jpeg({ quality: 90 });
            }
            if (req.body.imageGallery) {
                req.body.imageGallery = await Promise.all(
                    req.body.imageGallery.map((els2) =>
                        sharp(Buffer.from(els2))
                            .resize(
                                req.image.resizeW * 1,
                                req.image.resizeH * 1
                            )
                            .toFormat('jpeg')
                            .jpeg({ quality: 90 })
                    )
                );
            }
        } else if (req.body.productType === 'colorOnly') {
            req.body.productDetails = await Promise.all(
                req.body.productDetails.map(async (el, index) => {
                    let image, imageGallery;
                    if (el.bannerImage) {
                        image = sharp(Buffer.from(el.bannerImage))
                            .resize(
                                req.image.resizeW * 1,
                                req.image.resizeH * 1
                            )
                            .toFormat('jpeg')
                            .jpeg({ quality: 90 });
                    }
                    if (el.imageGallery) {
                        imageGallery = await Promise.all(
                            el.imageGallery.map((els2) =>
                                sharp(Buffer.from(els2))
                                    .resize(
                                        req.image.resizeW * 1,
                                        req.image.resizeH * 1
                                    )
                                    .toFormat('jpeg')
                                    .jpeg({ quality: 90 })
                            )
                        );
                    }
                    return { ...el, image, imageGallery };
                })
            );
        } else if (req.body.productType === 'sizeOnly') {
            if (req.body.image) {
                req.body.image = sharp(Buffer.from(req.body.image))
                    .resize(req.image.resizeW * 1, req.image.resizeH * 1)
                    .toFormat('jpeg')
                    .jpeg({ quality: 90 });
            }
            if (req.body.imageGallery) {
                req.body.imageGallery = await Promise.all(
                    req.body.imageGallery.map((els2) =>
                        sharp(Buffer.from(els2))
                            .resize(
                                req.image.resizeW * 1,
                                req.image.resizeH * 1
                            )
                            .toFormat('jpeg')
                            .jpeg({ quality: 90 })
                    )
                );
            }
        } else if (req.body.productType === 'colorWithSize') {
            req.body.productDetails = await Promise.all(
                req.body.productDetails.map(async (el) => {
                    let image, imageGallery;

                    if (el.bannerImage) {
                        image = sharp(Buffer.from(el.bannerImage))
                            .resize(
                                req.image.resizeW * 1,
                                req.image.resizeH * 1
                            )
                            .toFormat('jpeg')
                            .jpeg({ quality: 100 });
                    }
                    if (el.imageGallery) {
                        imageGallery = await Promise.all(
                            el.imageGallery.map((els2) =>
                                sharp(Buffer.from(els2))
                                    .resize(
                                        req.image.resizeW * 1,
                                        req.image.resizeH * 1
                                    )
                                    .toFormat('jpeg')
                                    .jpeg({ quality: 90 })
                            )
                        );
                    }
                    return {
                        ...el,
                        bannerImage: image,
                        imageGallery: imageGallery
                    };
                })
            );
        }
    }
    return next();
});

// save optical product to aws
exports.saveMarketProductToAWS = catchAsync(async (req, res, next) => {
    console.log(req.body);
    const s3 = new AWS.S3({
        accessKeyId: process.env.AWS_ACCESSKEY,
        secretAccessKey: process.env.AWS_SECRETKEY,
        region: process.env.AWS_REGION
    });
    if (req.body.statusType === 'create') {
        if (req.body.productType === 'single') {
            const imageName = `${`${`${req.user._id
                .toString()
                .split(/[a-z]+/)
                .join('')}-${req.body.hiwmmpmID.split(/[a-z]+/).join('')}`}`
                .split('-')
                .join('')}`;
            const params = {
                Bucket: process.env.AWS_BUCKET,
                Key: `${imageName}-medical-market-product-banner.jpeg`,
                ContentType: 'image/jpeg',
                Body: req.body.image
            };
            let image = '';
            try {
                image = await s3.upload(params).promise();
                req.body.bannerImage = image.Location;
                req.body.image = undefined;
            } catch (error) {
                console.log(error);
                return next(
                    new AppError(
                        'Somehing went wrong while processing your request.Please try again.',
                        401
                    )
                );
            }

            req.body.imageGallery = await Promise.all(
                req.body.imageGallery.map(async (els2, index) => {
                    const params2 = {
                        Bucket: process.env.AWS_BUCKET,
                        Key: `${imageName}-medical-market-product-gallery-${index}.jpeg`,
                        ContentType: 'image/jpeg',
                        Body: els2
                    };

                    const gal = await s3.upload(params2).promise();
                    return gal.Location;
                })
            );
        } else if (req.body.productType === 'colorOnly') {
            req.body.productDetails = await Promise.all(
                req.body.productDetails.map(async (el, index) => {
                    const eID = await encryptID(process.env.OPTICAL_SECRET);
                    const imageName = `${`${`${req.user._id
                        .toString()
                        .split(/[a-z]+/)
                        .join('')}-${eID.split(/[a-z]+/).join('')}`}`
                        .split('-')
                        .join('')}`;
                    const params = {
                        Bucket: process.env.AWS_BUCKET,
                        Key: `${imageName}-medical-market-product-banner.jpeg`,
                        ContentType: 'image/jpeg',
                        Body: el.image
                    };
                    let image = '';
                    try {
                        image = await s3.upload(params).promise();
                        image = image.Location;
                    } catch (error) {
                        return next(
                            new AppError(
                                'Somehing went wrong while processing your request.Please try again.',
                                401
                            )
                        );
                    }

                    const imageGallery = await Promise.all(
                        el.imageGallery.map(async (els2, index) => {
                            const params2 = {
                                Bucket: process.env.AWS_BUCKET,
                                Key: `${imageName}-medical-market-product-gallery-${index}.jpeg`,
                                ContentType: 'image/jpeg',
                                Body: els2
                            };

                            const gal = await s3.upload(params2).promise();
                            return gal.Location;
                        })
                    );
                    if (index === 0) {
                        req.body.price = el.price;
                        req.body.discountPrice = el.discountPrice;
                        req.body.bannerImage = image;
                        req.body.imageGallery = imageGallery;
                    }
                    return {
                        color: el.color,
                        subDetails: [
                            {
                                price: el.price,
                                discountPrice: el.discountPrice,
                                hiwmmpdssID: Date.now()
                            }
                        ],
                        bannerImage: image,
                        imageGallery,
                        hiwmmppdsmID: eID
                    };
                })
            );
        } else if (req.body.productType === 'sizeOnly') {
            const imageName = `${`${`${req.user._id
                .toString()
                .split(/[a-z]+/)
                .join('')}-${req.body.hiwmmpmID.split(/[a-z]+/).join('')}`}`
                .split('-')
                .join('')}`;

            const params = {
                Bucket: process.env.AWS_BUCKET,
                Key: `${imageName}-medical-market-product-banner.jpeg`,
                ContentType: 'image/jpeg',
                Body: req.body.image
            };
            let image = '';
            try {
                image = await s3.upload(params).promise();
                req.body.bannerImage = image.Location;
                req.body.image = undefined;
            } catch (error) {
                console.log(error);
                return next(
                    new AppError(
                        'Somehing went wrong while processing your request.Please try again.',
                        401
                    )
                );
            }

            req.body.imageGallery = await Promise.all(
                req.body.imageGallery.map(async (els2, index) => {
                    const params2 = {
                        Bucket: process.env.AWS_BUCKET,
                        Key: `${imageName}-medical-market-product-gallery-${index}.jpeg`,
                        ContentType: 'image/jpeg',
                        Body: els2
                    };

                    const gal = await s3.upload(params2).promise();
                    return gal.Location;
                })
            );
            const subDetails = await Promise.all(
                req.body.productDetails.map(async (el, index) => {
                    const eId = await encryptID(process.env.OPTICAL_SECRET);
                    if (index === 0) {
                        req.body.price = el.price;
                        req.body.discountPrice = el.discountPrice;
                    }
                    return { ...el, hiwmmpdssID: eId };
                })
            );

            req.body.productDetails = [
                {
                    bannerImage: req.body.bannerImage,
                    imageGallery: req.body.imageGallery,
                    hiwmmppdsmID: Date.now(),
                    subDetails
                }
            ];
        } else if (req.body.productType === 'colorWithSize') {
            req.body.productDetails = await Promise.all(
                req.body.productDetails.map(async (el, index) => {
                    const eID = await encryptID(process.env.OPTICAL_SECRET);
                    const imageName = `${`${`${req.user._id
                        .toString()
                        .split(/[a-z]+/)
                        .join('')}-${eID.split(/[a-z]+/).join('')}`}`
                        .split('-')
                        .join('')}`;
                    const params = {
                        Bucket: process.env.AWS_BUCKET,
                        Key: `${imageName}-medical-market-product-banner.jpeg`,
                        ContentType: 'image/jpeg',
                        Body: el.bannerImage
                    };
                    let image = '';
                    try {
                        image = await s3.upload(params).promise();
                        image = image.Location;
                    } catch (error) {
                        console.log(error);
                        return next(
                            new AppError(
                                'Somehing went wrong while processing your request.Please try again.',
                                401
                            )
                        );
                    }
                    const imageGallery = await Promise.all(
                        el.imageGallery.map(async (els2, index) => {
                            const params2 = {
                                Bucket: process.env.AWS_BUCKET,
                                Key: `${imageName}-medical-market-product-gallery-${index}.jpeg`,
                                ContentType: 'image/jpeg',
                                Body: els2
                            };

                            const gal = await s3.upload(params2).promise();
                            return gal.Location;
                        })
                    );

                    const subDetails = await Promise.all(
                        el.subDetails.map(async (els, index2) => {
                            const esID = await encryptID(
                                process.env.OPTICAL_SECRET
                            );

                            if (index === 0 && index2 === 0) {
                                req.body.price = els.price;
                                req.body.discountPrice = els.discountPrice;
                                req.body.bannerImage = image;
                                req.body.imageGallery = imageGallery;
                            }
                            return {
                                ...els,
                                hiwmmpdssID: esID
                            };
                        })
                    );
                    return {
                        ...el,
                        subDetails,
                        hiwmmppdsmID: eID,
                        bannerImage: image,
                        imageGallery: imageGallery
                    };
                })
            );
        }
    } else if (req.body.statusType === 'update') {
        const medicalMarketProduct = await medicalMarketProductsModel.findOne({
            userId: req.user._id,
            partnerId: req.docs._id,
            hiwmmpmID: req.params.productId
        });

        if (!medicalMarketProduct) {
            return next(new AppError('Product not found', 404));
        }
        if (req.body.productType === 'single') {
            req.body.productDetails = [];
            const imageName = `${`${`${req.user._id
                .toString()
                .split(/[a-z]+/)
                .join('')}-${req.params.productId.split(/[a-z]+/).join('')}`}`
                .split('-')
                .join('')}`;
            if (req.body.image) {
                const params = {
                    Bucket: process.env.AWS_BUCKET,
                    Key: `${imageName}-medical-market-product-banner.jpeg`,
                    ContentType: 'image/jpeg',
                    Body: req.body.image
                };

                try {
                    const image = await s3.upload(params).promise();
                    req.body.bannerImage = image.Location;
                    req.body.image = undefined;
                } catch (error) {
                    return next(
                        new AppError(
                            'Somehing went wrong while processing your request.Please try again.',
                            401
                        )
                    );
                }
            } else {
                req.body.bannerImage = medicalMarketProduct.bannerImage;
            }
            if (req.body.imageGallery) {
                req.body.imageGallery = await Promise.all(
                    req.body.imageGallery.map(async (els, index) => {
                        const params2 = {
                            Bucket: process.env.AWS_BUCKET,
                            Key: `${imageName}-medical-market-product-gallery-${index}.jpeg`,
                            ContentType: 'image/jpeg',
                            Body: els
                        };
                        try {
                            const gal = await s3.upload(params2).promise();
                            return gal.Location;
                        } catch (error) {
                            return next(
                                new AppError(
                                    'Somehing went wrong while processing your request.Please try again.',
                                    500
                                )
                            );
                        }
                    })
                );
            } else {
                req.body.imageGallery = medicalMarketProduct.imageGallery;
            }
        } else if (req.body.productType === 'colorOnly') {
            req.body.productDetails = await Promise.all(
                req.body.productDetails.map(async (el, index) => {
                    const eID =
                        el.id ?? (await encryptID(process.env.OPTICAL_SECRET));
                    let image, imageGallery;
                    const imageName = `${`${`${req.user._id
                        .toString()
                        .split(/[a-z]+/)
                        .join('')}-${eID.split(/[a-z]+/).join('')}`}`
                        .split('-')
                        .join('')}`;
                    if (el.image) {
                        const params = {
                            Bucket: process.env.AWS_BUCKET,
                            Key: `${imageName}-medical-market-product-banner.jpeg`,
                            ContentType: 'image/jpeg',
                            Body: el.image
                        };

                        try {
                            image = await s3.upload(params).promise();
                            image = image.Location;
                        } catch (error) {
                            return next(
                                new AppError(
                                    'Somehing went wrong while processing your request.Please try again.',
                                    401
                                )
                            );
                        }
                    } else {
                        if (!el.id || !validate(el.id)) {
                            return next(
                                new AppError(
                                    'You should be included image and gallery of product',
                                    400
                                )
                            );
                        }
                        const [filData] = await Promise.all(
                            medicalMarketProduct.productDetails.filter(
                                (els) => {
                                    return els.hiwmmppdsmID === el.id;
                                }
                            )
                        );
                        if (!filData) {
                            return next(
                                new AppError(
                                    'Something went wrong. Please try again.'
                                )
                            );
                        }
                        image = filData.bannerImage;
                    }
                    if (el.imageGallery) {
                        imageGallery = await Promise.all(
                            el.imageGallery.map(async (els2, index) => {
                                const params2 = {
                                    Bucket: process.env.AWS_BUCKET,
                                    Key: `${imageName}-medical-market-product-gallery-${index}.jpeg`,
                                    ContentType: 'image/jpeg',
                                    Body: els2
                                };

                                const gal = await s3.upload(params2).promise();
                                return gal.Location;
                            })
                        );
                    } else {
                        if (!el.id || !validate(el.id)) {
                            return next(
                                new AppError(
                                    'You should be included image and gallery of product',
                                    400
                                )
                            );
                        }
                        const [filData] = await Promise.all(
                            medicalMarketProduct.productDetails.filter(
                                (els) => {
                                    return els.hiwmmppdsmID === el.id;
                                }
                            )
                        );

                        if (!filData) {
                            return next(
                                new AppError(
                                    'Something went wrong. Please try again.'
                                )
                            );
                        }
                        imageGallery = filData.imageGallery;
                    }
                    if (index === 0) {
                        req.body.price = el.price;
                        req.body.discountPrice = el.discountPrice;
                        req.body.bannerImage = image;
                        req.body.imageGallery = imageGallery;
                    }
                    return {
                        color: el.color,
                        subDetails: [
                            {
                                price: el.price,
                                discountPrice: el.discountPrice,
                                hiwmmpdssID: Date.now()
                            }
                        ],
                        bannerImage: image,
                        imageGallery,
                        hiwmmppdsmID: eID
                    };
                })
            );
        } else if (req.body.productType === 'sizeOnly') {
            const imageName =
                `${`${`${req.user._id
                    .toString()
                    .split(/[a-z]+/)
                    .join('')}-${req.params.productId
                    .split(/[a-z]+/)
                    .join('')}`}`
                    .split('-')
                    .join('')}` + Math.round(Date.now() * Math.random());
            let image, imageGallery;
            if (req.body.image) {
                const params = {
                    Bucket: process.env.AWS_BUCKET,
                    Key: `${imageName}-medical-market-product-banner.jpeg`,
                    ContentType: 'image/jpeg',
                    Body: req.body.image
                };
                image = '';
                try {
                    image = await s3.upload(params).promise();
                    image = image.Location;

                    req.body.image = undefined;
                } catch (error) {
                    console.log(error);
                    return next(
                        new AppError(
                            'Somehing went wrong while processing your request.Please try again.',
                            401
                        )
                    );
                }
            } else {
                image = medicalMarketProduct.bannerImage;
            }
            if (req.body.imageGallery) {
                imageGallery = await Promise.all(
                    req.body.imageGallery.map(async (els2, index) => {
                        const params2 = {
                            Bucket: process.env.AWS_BUCKET,
                            Key: `${imageName}-medical-market-product-gallery-${index}.jpeg`,
                            ContentType: 'image/jpeg',
                            Body: els2
                        };

                        const gal = await s3.upload(params2).promise();
                        return gal.Location;
                    })
                );
            } else {
                imageGallery = medicalMarketProduct.imageGallery;
            }
            const subDetails = await Promise.all(
                req.body.productDetails.map(async (el, index) => {
                    let eId;
                    if (!validate(el.id))
                        eId = await encryptID(process.env.OPTICAL_SECRET);
                    else eId = el.id;

                    if (index === 0) {
                        req.body.price = el.price;
                        req.body.discountPrice = el.discountPrice;
                    }
                    return { ...el, hiwmmpdssID: eId };
                })
            );
            req.body.bannerImage = image;
            req.body.imageGallery = imageGallery;

            req.body.productDetails = [
                {
                    bannerImage: image,
                    imageGallery: imageGallery,
                    hiwmmppdsmID: Date.now(),
                    subDetails
                }
            ];
        } else if (req.body.productType === 'colorWithSize') {
            req.body.productDetails = await Promise.all(
                req.body.productDetails.map(async (el, index) => {
                    let eID = el.id;
                    if (el.id === undefined) {
                        if (!el.bannerImage || !el.imageGallery) {
                            return next(
                                new AppError(
                                    'If your are try add to new product details, make sure you added banner image and gallery images.',
                                    400
                                )
                            );
                        }
                        el.hiwmmppdsmID = await encryptID(
                            process.env.OPTICAL_SECRET
                        );
                        eID = el.hiwmmppdsmID;
                    }

                    let image, imageGallery, filteredData;
                    if (!el.bannerImage || !el.imageGallery) {
                        [filteredData] = await Promise.all(
                            medicalMarketProduct.productDetails.filter(
                                (els) => {
                                    return els.hiwmmppdsmID === el.id;
                                }
                            )
                        );
                    }
                    const imageName = `${`${`${req.user._id
                        .toString()
                        .split(/[a-z]+/)
                        .join('')}-${eID.split(/[a-z]+/).join('')}`}`
                        .split('-')
                        .join('')}`;
                    if (el.bannerImage) {
                        const params = {
                            Bucket: process.env.AWS_BUCKET,
                            Key: `${imageName}-medical-market-product-banner.jpeg`,
                            ContentType: 'image/jpeg',
                            Body: el.bannerImage
                        };

                        try {
                            image = await s3.upload(params).promise();
                            image = image.Location;
                        } catch (error) {
                            return next(
                                new AppError(
                                    'Somehing went wrong while processing your request.Please try again.',
                                    401
                                )
                            );
                        }
                    } else {
                        image = filteredData.bannerImage;
                    }
                    if (el.imageGallery) {
                        imageGallery = await Promise.all(
                            el.imageGallery.map(async (els, index) => {
                                const params2 = {
                                    Bucket: process.env.AWS_BUCKET,
                                    Key: `${imageName}-medical-market-product-gallery-${index}.jpeg`,
                                    ContentType: 'image/jpeg',
                                    Body: els
                                };

                                const gal = await s3.upload(params2).promise();
                                return gal.Location;
                            })
                        );
                    } else {
                        imageGallery = filteredData.imageGallery;
                    }

                    const subDetails = await Promise.all(
                        el.subDetails.map(async (els, index2) => {
                            let eID2 = els.id;
                            if (els.id === undefined) {
                                els.hiwmmpdssID = await encryptID(
                                    process.env.OPTICAL_SECRET
                                );
                                eID2 = els.hiwmmpdssID;
                            }

                            if (index === 0) {
                                req.body.price = els.price;
                                req.body.discountPrice = els.price;
                                req.body.bannerImage = image;
                                req.body.imageGallery = imageGallery;
                            }

                            return {
                                ...els,

                                hiwmmpdssID: eID2
                            };
                        })
                    );
                    return {
                        ...el,
                        subDetails,
                        hiwmmppdsmID: eID,
                        bannerImage: image,
                        imageGallery: imageGallery
                    };
                })
            );
        }
    } else {
        return next(new AppError('Bad Request', 400));
    }
    return next();
});

// assign data for update the hearingaid product order status
exports.assignDataforUpdateMarketProductStatus = catchAsync(
    async (req, res, next) => {
        req.updateOneSearch = {
            partnerId: req.docs._id,
            hiwommpSID: req.params.orderId
        };
        const order = await medicalMarketProductOrderModel.findOne({
            partnerId: req.docs._id,
            hiwommpSID: req.params.orderId
        });
        if (!order) {
            return next(new AppError('Product not found', 404));
        }
        let status = req.params.status;
        const obj = {};
        if (status === 'accepted') {
            if (order.orderStatus !== 'placed' || order.status !== 'pending') {
                return next(
                    new AppError(
                        `This order is already ${order.orderStatus}. So, we can't accept your request.`
                    )
                );
            }
            obj.acceptedDate = Date.now();
        } else if (status === 'rejected') {
            if (
                (order.orderStatus !== 'accepted' &&
                    order.orderStatus !== 'placed') ||
                order.status !== 'pending'
            ) {
                return next(
                    new AppError(
                        `This order is already ${order.orderStatus}. So, we can't accept your request.`
                    )
                );
            }
            obj.status = 'rejected';
            obj.rejectedDate = Date.now();
        } else if (status === 'shipped') {
            if (
                order.orderStatus !== 'accepted' ||
                order.status !== 'pending'
            ) {
                return next(
                    new AppError(
                        `This order is already ${order.orderStatus}. So, we can't accept your request.`
                    )
                );
            }
            obj.shippedDate = Date.now();
        } else if (status === 'outofdelivery') {
            if (order.orderStatus !== 'shipped' || order.status !== 'pending') {
                return next(
                    new AppError(
                        `This order is already ${order.orderStatus}. So, we can't accept your request.`
                    )
                );
            }
            obj.outOfDeliveryDate = Date.now();
        } else if (status === 'delivered') {
            if (
                order.orderStatus !== 'outofdelivery' ||
                order.status !== 'pending'
            ) {
                return next(
                    new AppError(
                        `This order is already ${order.orderStatus}. So, we can't accept your request.`
                    )
                );
            }
            obj.deliveredDate = Date.now();
            obj.status = 'delivered';
        } else {
            return next(new AppError('Please select valid status.', 400));
        }
        req.body = { orderStatus: status, ...obj };
        return next();
    }
);

// assign data for update status
exports.assignDataForUpdateStatus = catchAsync(async (req, res, next) => {
    const proposal = await medicalMarketQuoteRequesterModel.findOne({
        hiwmmqrrsID: req.params.quoteId,
        requestPartnerID: req.docs._id
    });
    console.log({
        hiwmmqrrsID: req.params.quoteId,
        userId: req.user._id
    });
    if (!proposal) {
        return next(new AppError('Proposal not found', 404));
    }
    const obj = {};
    if (req.body.status === 'proposal-submited') {
        if (proposal.proposeStatus !== 'requested') {
            return next(
                new AppError(
                    `This order is already ${proposal.proposeStatus}. So, we can't accept your request.`
                )
            );
        }
        if (!req.body.price) {
            return next(new AppError('Price should be included.', 400));
        }
        obj.estimateCost = req.body.price;
        obj.submitDescription = req.body.cause;
        obj.submitDate = Date.now();
    } else if (req.body.status === 'negotiate') {
        if (
            proposal.proposeStatus !== 'proposal-submited' &&
            proposal.proposeStatus !== 'negotiate'
        ) {
            return next(
                new AppError(
                    `This order is already ${proposal.proposeStatus}. So, we can't accept your request.`
                )
            );
        }
        obj.estimateCost = req.body.price;
        obj.negotiateDescription = req.body.description;
        obj.negotiateDate = Date.now();
        obj['$push'] = {
            negotiateDetails: {
                price: proposal.estimateCost,
                askedBy: 'vendor',
                description: proposal.negotiateDescription,
                date: proposal.negotiateDate
            }
        };
    } else if (req.body.status === 'rejected') {
        if (
            proposal.proposeStatus !== 'requested' &&
            proposal.proposeStatus !== 'proposal-submited' &&
            proposal.proposeStatus !== 'accepted'
        ) {
            return next(
                new AppError(
                    `This order is already ${proposal.proposeStatus}. So, we can't accept your request.`
                )
            );
        }
        obj.vendorRejectDescription = req.body.description;
        obj.vendorRejectDate = Date.now();
        req.body.status = 'rejected-by-vendor';
    } else if (req.body.status === 'completed') {
        if (proposal.proposeStatus !== 'accepted')
            return next(
                new AppError(
                    `This order is already ${proposal.proposeStatus}. So, we can't accept your request.`
                )
            );
        obj.completedDate = Date.now();
        obj.completedDescription = req.body.description;
    } else {
        next(new AppError(`undefined url ${req.originalUrl}`, 404));
    }
    req.body = { proposeStatus: req.body.status, ...obj };
    req.updateOneSearch = {
        requestPartnerID: req.docs._id,
        hiwmmqrrsID: req.params.quoteId
    };
    return next();
});
// assign data for update status
exports.assignDataForUpdateStatusForUser = catchAsync(
    async (req, res, next) => {
        const proposal = await medicalMarketQuoteRequesterModel.findOne({
            hiwmmqrrsID: req.params.quoteId,
            userId: req.user._id
        });
        if (!proposal) {
            return next(new AppError('Proposal not found', 404));
        }
        const obj = {};
        console.log(req.body.status);
        if (req.body.status === 'accepted') {
            if (
                proposal.proposeStatus !== 'proposal-submited' &&
                proposal.proposeStatus !== 'negotiate'
            ) {
                return next(
                    new AppError(
                        `This order is already ${proposal.proposeStatus}. So, we can't accept your request.`
                    )
                );
            }
            obj.estimateCost = req.body.price;
            obj.submitDescription = req.body.cause;
            obj.submitDate = Date.now();
        } else if (req.body.status === 'negotiate') {
            if (
                proposal.proposeStatus !== 'proposal-submited' &&
                proposal.proposeStatus !== 'negotiate'
            ) {
                return next(
                    new AppError(
                        `This order is already ${proposal.proposeStatus}. So, we can't accept your request.`
                    )
                );
            }
            obj.estimateCost = req.body.price;
            obj.negotiateDescription = req.body.cause;
            obj.negotiateDate = Date.now();
            obj['$push'] = {
                negotiateDetails: {
                    price: proposal.estimateCost,
                    askedBy: 'requester',
                    description: proposal.negotiateDescription,
                    date: proposal.negotiateDate
                }
            };
        } else if (req.body.status === 'rejected') {
            if (
                proposal.proposeStatus !== 'requested' &&
                proposal.proposeStatus !== 'proposal-submited' &&
                proposal.proposeStatus !== 'accepted'
            ) {
                return next(
                    new AppError(
                        `This order is already ${proposal.proposeStatus}. So, we can't accept your request.`
                    )
                );
            }
            obj.vendorRejectDescription = req.body.description;
            obj.vendorRejectDate = Date.now();
            req.body.status = 'rejected-by-user';
        } else {
            next(new AppError(`undefined url ${req.originalUrl}`, 404));
        }
        req.body = { proposeStatus: req.body.status, ...obj };
        req.updateOneSearch = {
            hiwmmqrrsID: req.params.quoteId,
            userId: req.user._id,
            _id: proposal._id
        };
        return next();
    }
);

// assign data for get orders
exports.getMyMarketOrders = catchAsync(async (req, res, next) => {
    const [orders] = await medicalMarketProductOrderModel.aggregate([
        {
            $match: {
                userId: req.user._id
            }
        },
        {
            $group: {
                _id: '$batch',
                address: { $first: '$address' },
                proudcts: {
                    $push: {
                        product: '$product',
                        productData: '$productData',
                        id: '$hiwommpSID',
                        status: '$status',
                        cause: '$cause',
                        orderStatus: '$orderStatus',
                        createdAt: '$createdAt',
                        shippedDate: '$shippedDate',
                        acceptedDate: '$acceptedDate',
                        rejectedDate: '$rejectedDate',
                        outOfDeliveryDate: '$outOfDeliveryDate',
                        deliveredDate: '$deliveredDate',
                        cancelTime: '$cancelTime'
                    }
                }
            }
        },
        {
            $facet: {
                active: [
                    {
                        $match: {
                            'proudcts.status': 'pending'
                        }
                    }
                ],
                history: [
                    {
                        $match: {
                            'proudcts.status': { $ne: 'pending' }
                        }
                    }
                ]
            }
        }
    ]);
    req.body.orders = orders;
    return next();
});

exports.mergetMarketOrders = (req, res, next) => {
    req.body.orders = [...req.body.orders.active, ...req.body.orders.history];
    return next();
};

// send json for docs
exports.sendJsonFofGetMyOrders = (req, res) =>
    res.status(200).json({
        status: 'Success',
        docs: req.body.orders
    });

// send json for get my carts
exports.getMyCarts = catchAsync(async (req, res, next) => {
    const carts = await medicalMarketProductCartModel.aggregate([
        {
            $match: { userId: req.user._id, cartType: 'cart' }
        },
        {
            $lookup: {
                from: 'medical market products',
                localField: 'productEID',
                foreignField: 'hiwmmpmID',
                as: 'product'
            }
        },
        {
            $unwind: '$product'
        }
    ]);

    req.body.docs = carts;
    return next();
});

// send json for carts
exports.sendJsonForCarts = (req, res) =>
    res.status(200).json({
        status: 'Success',
        carts: req.body.docs
    });

// get my wish list
exports.getMyMarketWishlists = catchAsync(async (req, res, next) => {
    const wishlists = await medicalMarketProductWishlistModel.aggregate([
        {
            $match: { userId: req.user._id }
        },
        {
            $lookup: {
                from: 'medical market products',
                localField: 'productEID',
                foreignField: 'hiwmmpmID',
                as: 'product'
            }
        },
        {
            $unwind: '$product'
        }
    ]);
    req.body.docs = wishlists;
    return next();
});

// send jsonf for wishlist
exports.sendJsonForWishLists = (req, res) =>
    res.status(200).json({ status: 'Success', wishlists: req.body.docs });

// send json for get all data
exports.sendJsonForFinAll = factoryControllers.sendJsonForAll();

// get market products data
exports.getMarketProductsData = catchAsync(async (req, res, next) => {
    const id = req.cookies['mmpd-id'];
    if (!id) {
        return next(
            new AppError('Something went wrong please try again.', 404)
        );
    }
    const [product] = await medicalMarketProductsModel.aggregate([
        {
            $match: {
                hiwmmpmID: id
            }
        },
        {
            $limit: 1
        },
        {
            $lookup: {
                from: 'partners',
                localField: 'partnerId',
                foreignField: '_id',
                pipeline: [
                    {
                        $match: {
                            for: 'Medical Market',
                            status: 'accepted'
                        }
                    }
                ],
                as: 'partner'
            }
        },
        {
            $unwind: '$partner'
        },
        {
            $project: {
                partner: 0
            }
        }
    ]);
    if (product.productType === 'single') {
        return next(new AppError('Product not found.', 404));
    } else if (product.productType === 'colorOnly') {
        if (!req.body.color) {
            return next(new AppError('Product not found.', 404));
        }
        const [color] = await Promise.all([
            product.productDetails.find(
                (el) => el.hiwmmppdsmID === req.body.color
            )
        ]);
        if (!color) {
            return next(new AppError('Product not found.', 404));
        }
        req.body = { color, productType: product.productType };
    } else if (product.productType === 'colorWithSize') {
        if (!req.body.color) {
            return next(new AppError('Product not found.', 404));
        }
        let color, size, imageGallery, sizeList;
        await Promise.all(
            product.productDetails.map(async (el) => {
                if (el.hiwmmppdsmID === req.body.color) {
                    color = el.color;
                    imageGallery = el.imageGallery;
                    sizeList = el.subDetails;
                    if (!req.body.size) {
                        size = el.subDetails[0];
                    } else {
                        [size] = await Promise.all([
                            el.subDetails.find(
                                (el) => el.hiwmmpdssID === req.body.size
                            )
                        ]);
                        if (!size) {
                            return next(new AppError('Product not found', 404));
                        }
                    }
                }
            })
        );

        if (!color || !size) {
            console.log(color);
            return next(new AppError('Product not found', 404));
        }
        console.log(color, size);
        req.body = {
            color,
            size,
            imageGallery,
            productType: product.productType,
            sizeList
        };
    } else if (product.productType) console.log(req.body);
    return res.status(200).json({
        status: 'Success',
        docs: req.body
    });
});

// check if the session was expired
exports.checkTheOrderSessionWasExpiredMarket = (req, res, next) => {
    const date =
        new Date(req.body.docs[0].createdAt).valueOf() <
        new Date(Date.now() - 1000 * 60 * 5).valueOf();
    if (date) {
        return next(
            new AppError(
                'You order session was was expired please try again.',
                440
            )
        );
    }
    return next();
};

// assing data for get a order batch
exports.assignDataForGetMarketOrders = (req, res, next) => {
    req.searchQuery = {
        batch: req.params.batchId,
        userId: req.user._id
    };
    return next();
};

// get medical market order
exports.getMarketOrderBatch = factoryControllers.findAllData(
    medicalMarketProductOrderModel
);
