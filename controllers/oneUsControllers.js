// ============================================================
// import packages
const { initializeApp } = require('firebase-admin/app');
const admin = require('firebase-admin');

const { getFirestore } = require('firebase-admin/firestore');
const _ = require('lodash');
const data = {
    type: process.env.FIRESTORE_TYPE,
    project_id: process.env.FIRESTORE_PROJECT_ID,
    private_key_id: process.env.FIRESTORE_PRIVATE_KEY_ID,
    private_key: process.env.FIRESTORE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.FIRESTORE_CLIENT_EMAIL,
    client_id: process.env.FIRESTORE_CLIENT_ID,
    auth_uri: process.env.FIRESTORE_AUTH_URI,
    token_uri: process.env.FIRESTORE_TOKEN_URI,
    auth_provider_x509_cert_url:
        process.env.FIRESTORE_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.FIRESTORE_CLIENT_X509CERT_URL
};
const firebaseConfig = {
    credential: admin.credential.cert(data),
    databaseURL: process.env.FIRESTORE_DATABASE_URL
};
initializeApp(firebaseConfig);
const db = getFirestore();

// ============================================================
// import controllers
const factoryController = require('./factoryControllers');

// ============================================================
// import models
const videoCategoriesModel = require('../models/OneUs/videoCategoriesModel');
const videosModel = require('../models/OneUs/videosModel');
const blogsCategoriesModel = require('../models/OneUs/blogsCategoriesModel');
const blogsModel = require('../models/OneUs/blogsModel');

// ============================================================
// import utilities
const catchAsync = require('../util/catchAsync');
const encryptID = require('../util/uuid');
const AppError = require('../util/AppError');

// ============================================================
// controllers.
// get my charts
exports.getMyCharts = catchAsync(async (req, res, next) => {
    const docRef = db.collection('chats').doc('alovelace');
    console.log(req.user._id.toString());
    const msgData = {
        text: (Math.random() + 1).toString(36).substring(7),
        createdAt: new Date(),
        user: {
            _id: req.user._id.toString(),
            name: req.user.name,
            profile: req.user.profileImage
        }
    };
    // const snapshot = await docRef.collection('message').limit(3).get();
    // const last = snapshot.docs[snapshot.docs.length - 1];

    // let msg = await docRef
    //     .collection('message')
    //     .orderBy('createdAt', 'desc')
    //     .get();
    // let msgList = [];
    // msg = await Promise.all([msg.forEach((doc) => msgList.push(doc.data()))]);
    // console.log(_.reverse(msgList));
    // await docRef.get().then((el) => console.log(el.data()));

    await docRef.set({
        message: { ...msgData, user: req.user._id.toString() }
    });
    await docRef.collection('message').add(msgData);
});

// assign data for get videos
exports.getOneUsVideos = catchAsync(async (req, res, next) => {
    const obj = { status: 'accepted' };
    if (req.query.type) {
        obj.categorie = req.query.type;
    }
    const [categories, videos] = await Promise.all([
        videoCategoriesModel.find().distinct('name'),
        videosModel.find(obj).select('title video description categorie slug')
    ]);
    req.body.categories = categories;
    req.body.videos = videos;
    return next();
});

// assign data for get blogs
exports.getOneUsBlogs = catchAsync(async (req, res, next) => {
    const obj = { status: 'accepted' };
    if (req.query.type) {
        obj.categorie = req.query.type;
    }
    const [categories, blogs] = await Promise.all([
        blogsCategoriesModel.find().distinct('name'),
        blogsModel
            .find(obj)
            .select('title bannerImage description categorie slug')
    ]);
    req.body.categories = categories;
    req.body.blogs = blogs;
    return next();
});

// send json for get videos
exports.sendJsonFroGetVideos = (req, res) =>
    res.status(200).json({
        status: 'Success',
        categories: req.body.categories,
        videos: req.body.videos
    });

// get get my one us videos
exports.getMyoneUsVideos = catchAsync(async (req, res, next) => {
    const [categories, [videos]] = await Promise.all([
        videoCategoriesModel.find().distinct('name'),
        videosModel.aggregate([
            {
                $match: {
                    userType: 'user',
                    userId: req.user._id
                }
            },
            {
                $facet: {
                    active: [
                        {
                            $match: {
                                $or: [
                                    {
                                        status: 'requested'
                                    },
                                    {
                                        status: 'accepted'
                                    }
                                ]
                            }
                        }
                    ],
                    rejected: [
                        {
                            $match: {
                                status: 'rejected'
                            }
                        }
                    ]
                }
            }
        ])
    ]);

    req.body.categories = categories;
    req.body.videos = videos;
    return next();
});

// get get my one us videos
exports.getMyoneUsBlogs = catchAsync(async (req, res, next) => {
    const [categories, [blogs]] = await Promise.all([
        blogsCategoriesModel.find().distinct('name'),
        blogsModel.aggregate([
            {
                $match: {
                    userType: 'user',
                    userId: req.user._id
                }
            },
            {
                $facet: {
                    active: [
                        {
                            $match: {
                                $or: [
                                    {
                                        status: 'requested'
                                    },
                                    {
                                        status: 'accepted'
                                    }
                                ]
                            }
                        }
                    ],
                    rejected: [
                        {
                            $match: {
                                status: 'rejected'
                            }
                        }
                    ]
                }
            }
        ])
    ]);

    req.body.categories = categories;
    req.body.blogs = blogs;
    return next();
});

// assign data for create new one us video categoreis
exports.assignDataForcreateNewOneUsVideo = catchAsync(
    async (req, res, next) => {
        req.body.hiwousvbmID = await encryptID(process.env.SPEAK_TO_US_SECRET);
        req.body.createdAt = Date.now();
        req.body.userEId = req.user.hiwuueidmID;
        req.body.userId = req.user._id;
        req.body.userType = 'user';
        return next();
    }
);

// set video image
exports.assignImageNameForOneUsVideo = (req, res, next) => {
    req.searchQuery = { name: req.body.categorie };
    if (req.body.statusType === 'update') {
        req.updateOneSearch = { hiwousvbmID: req.params.serviceId };
        req.body.status = 'requested';
    }

    if (req.from === 'mobile') return next();
    req.video = {};
    req.video.name = 'video';
    if (req.body.statusType === 'create') {
        req.video.videoname = `${`${`${req.user._id
            .toString()
            .split(/[a-z]+/)
            .join('')}-${req.body.hiwousvbmID.split(/[a-z]+/).join('')}`}`
            .split('-')
            .join('')}-oneus-video`;
        return next();
    }
    if (req.body.statusType !== 'update') {
        return next(new AppError(`undefined url ${req.originalUrl}`, 404));
    }
    req.updateOneSearch = { hiwousvbmID: req.params.serviceId };
    if (!req.file) {
        return next();
    }
    req.video.videoname = `${`${`${req.user._id
        .toString()
        .split(/[a-z]+/)
        .join('')}-${req.params.serviceId.split(/[a-z]+/).join('')}`}`
        .split('-')
        .join('')}-oneus-video`;
    return next();
};

// check valid categorei
exports.checkValidVideoCategorie = factoryController.findOne(
    videoCategoriesModel,
    'Categorie Not found'
);

// create new one use blog model
exports.createNewOneUsVideo = factoryController.createOne(videosModel);

// send json for create one
exports.sendJsonForCreateOne = factoryController.sendJson();

// create new one use video model
exports.updateOneUsVideo = factoryController.updateOne(videosModel);

// send json fro update one
exports.sendJsonForUpdateOne = factoryController.sendJsonForUpdateOne();

// set image size for ambulance driver
exports.setbannerImageSize = (req, res, next) => {
    req.image = {};
    req.image.resizeW = 400;
    req.image.resizeH = 400;

    req.image.name = 'bannerImage';
    return next();
};

// assign data for create new one us video categoreis
exports.assignDataForcreateNewOneUsVideoCategories = catchAsync(
    async (req, res, next) => {
        req.body.hiwonvpmID = await encryptID(process.env.SPEAK_TO_US_SECRET);

        req.body.createdAt = Date.now();
        return next();
    }
);

// assign data for create new one us blog categoreis
exports.assignDataForcreateNewOneUsBlog = catchAsync(async (req, res, next) => {
    req.body.hiwousvmID = await encryptID(process.env.SPEAK_TO_US_SECRET);
    req.body.createdAt = Date.now();
    req.body.userEId = req.user.hiwuueidmID;
    req.body.userType = 'user';
    req.body.userId = req.user._id;
    return next();
});

// set blog image
exports.assignImageNameForOneUsBlog = (req, res, next) => {
    req.searchQuery = { name: req.body.categorie };
    if (req.body.statusType === 'update') {
        req.updateOneSearch = { hiwousvmID: req.params.serviceId };
        req.body.status = 'requested';
    }
    if (req.from === 'mobile') return next();
    if (req.body.statusType === 'create') {
        req.image.imagename = `${`${`${req.user._id
            .toString()
            .split(/[a-z]+/)
            .join('')}-${req.body.hiwousvmID.split(/[a-z]+/).join('')}`}`
            .split('-')
            .join('')}-oneus-blog`;
        return next();
    }
    if (req.body.statusType !== 'update') {
        return next(
            new AppError('Somthing went wrong. Please try again later.', 400)
        );
    }

    if (!req.image.data) {
        return next();
    }
    req.image.imagename = `${`${`${req.user._id
        .toString()
        .split(/[a-z]+/)
        .join('')}-${req.params.serviceId.split(/[a-z]+/).join('')}`}`
        .split('-')
        .join('')}-oneus-blog`;
    return next();
};

// check valid categorei
exports.checkValidBlogCategorie = factoryController.findOne(
    blogsCategoriesModel,
    'Categorie Not found'
);

// create new one use blog model
exports.createNewOneUsBlog = factoryController.createOne(blogsModel);

// update one use blog model
exports.updateOneUsBlog = factoryController.updateOne(blogsModel);
