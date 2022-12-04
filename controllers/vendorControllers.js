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
const jobCategoriesModel = require('../models/JopPortal/jobCategoriesModel');
const jobModel = require('../models/JopPortal/postJobModel');

// get bloodbank and partner
exports.getPartner = catchAsync(async (req, res, next) => {
    const [partner] = await Promise.all([
        partnerModel.findOne({
            userId: req.user._id,
            for: req.params.from,
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

    req.body.partner = partner;

    return next();
});

// get partner and job categoreis
exports.getPartnerAndJobCategories = catchAsync(async (req, res, next) => {
    const [partner, categories] = await Promise.all([
        partnerModel.findOne({
            userId: req.user._id,
            for: req.params.from,
            status: 'accepted'
        }),
        jobCategoriesModel.find()
    ]);

    req.body.partner = partner;
    req.body.categories = categories;
    return next();
});

// get job,partner and job categoreis
exports.getJobPartnerAndJobCategories = catchAsync(async (req, res, next) => {
    const [partner, categories, job] = await Promise.all([
        partnerModel.findOne({
            userId: req.user._id,
            for: req.params.from,
            status: 'accepted'
        }),
        jobCategoriesModel.find(),
        jobModel.findOne({
            userId: req.user._id,
            hiwjbmID: req.params.jobId
        })
    ]);

    req.body.partner = partner;
    req.body.categories = categories;
    req.body.job = job;
    return next();
});

// assignd ata for get all job categoresi
// assing Data for partner
exports.assignPartnerBloodBank = (req, res, next) => {
    req.params.from = 'Blood Bank';

    return next();
};

// assing Data for partner expert
exports.assignPartnerExpert = (req, res, next) => {
    req.params.from = 'Meet the Expert';
    return next();
};

// my vendor lists
exports.myVendorLists = catchAsync(async (req, res, next) => {
    const partner = await partnerModel
        .find({
            userId: req.user._id,
            accepted: true
        })
        .distinct('for');
    req.body.partners = partner;
    return next();
});
