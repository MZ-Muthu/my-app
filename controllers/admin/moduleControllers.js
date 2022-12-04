// ============================================================
// import pakcages
const multer = require('multer');

// ============================================================
// import controllers
const factoryControllers = require('../factoryControllers');

// ============================================================
// import utilities
const AppError = require('../../util/AppError');
const catchAsync = require('../../util/catchAsync');
const encryptID = require('../../util/uuid');
const filterObjects = require('../../util/filterObjects');

// ============================================================
// import models
const homecareServices = require('../../models/Homecare/homecareService');
const homecareServiceModel = require('../../models/Homecare/homecaresModel');
const deaddictionService = require('../../models/Deaddiction/deAddictionServicesModel');
const deaddictionServiceModel = require('../../models/Deaddiction//createDeaddictionModel');
const ambulanceService = require('../../models/AmbulanceAlert/AmbulanceServiceModel');
const partnerModel = require('../../models/shared/partnerModel');
const hospitalPackagesModel = require('../../models/Hospital/hospitalPackage');
const hospitalModel = require('../../models/Hospital/hospitalModel');
const foodNutritionModel = require('../../models/Fitness/foodDetailsModel');
const pharmacyCategoriesModel = require('../../models/Pharmasy/pharmacyCategoriesModel');
const laboratoryCategoriesModel = require('../../models/laboratory/laboratoryCategoriesModel');
const jobCategoriesModel = require('../../models/JopPortal/jobCategoriesModel');
const pharmacyMedicinesModel = require('../../models/Pharmasy/medicineDetails');
const secondOpinionSponserModel = require('../../models/secondOpinion/seconsOpinionSponserModel');
const videoCategoreisModel = require('../../models/OneUs/videoCategoriesModel');
const blogCategoriesmModel = require('../../models/OneUs/blogsCategoriesModel');
const blogsModel = require('../../models/OneUs/blogsModel');
const videosModel = require('../../models/OneUs/videosModel');
const doctoryCategoriesModel = require('../../models/shared/doctoryCategoriesModel');
const organsModel = require('../../models/Hospital/organModels');
const organAvailablityModel = require('../../models/Hospital/organAvailablitiesModel');
const medicalMarketCategoriesModel = require('../../models/MedicalMarket/medicalMarketCategoriesModel');
const expertCategoriesModel = require('../../models/MeetTheExperts/meetTheExpert');
const meetTheExpertsServiceProviderModel = require('../../models/MeetTheExperts/meetTheExpertServiceProvidersModel');
const marketCategorieModel = require('../../models/MedicalMarket/medicalMarketCategoriesModel');
const marketProductModel = require('../../models/MedicalMarket/medicalMarketProductsModel');

//  get all homecare services
exports.getAllHomecareServices = factoryControllers.getAll(homecareServices);

//  get all marekt categoreis
exports.getAllMedicalMarketServices = factoryControllers.getAll(
    medicalMarketCategoriesModel
);

//  get meet the expert services
exports.getAllMeetTheExpertServices = factoryControllers.getAll(
    expertCategoriesModel
);

//  get all deaddiction services
exports.getAllDeaddictionServices =
    factoryControllers.getAll(deaddictionService);

//  get all ambulance services
exports.getAllAmbulanceServices = factoryControllers.getAll(ambulanceService);

//  get all ambulance services
exports.getAllHospitalPackages = factoryControllers.getAll(
    hospitalPackagesModel
);

//  get all hospital packages
exports.getAllOrgans = factoryControllers.getAll(organsModel);

let multerStorage = multer.memoryStorage();
function multerFilter(req, file, cb) {
    if (file.mimetype.startsWith('image')) {
        cb(null, true);
    } else {
        cb(
            new AppError('Not a image type please upload the image', 400),
            false
        );
    }
}
let upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
});
// set image size for ambulance driver
exports.setbannerImageSize = (req, res, next) => {
    req.image = {};
    req.image.resizeW = 400;
    req.image.resizeH = 400;

    req.image.name = 'bannerImage';
    return next();
};
// set image size for ambulance driver
exports.setbannerImageSizeForDeaddicationCenter = (req, res, next) => {
    req.image = {};
    req.image.resizeW = 400;
    req.image.resizeH = 400;

    req.image.name = 'bannerImage';
    // req.image.gallery = 'serviceImages';

    return next();
};

// reqize iamge and image gallery
exports.resizeHomecareServiceImages = catchAsync(async (req, res, next) => {
    if (req.body.statusType === 'create')
        if (!req.files.image || !req.files.imageGallery)
            return next(
                new AppError(
                    'Banner image and service image should be included.',
                    400
                )
            );
    // image cover
    if (req.files.bannerImage)
        req.image.bannerImage = sharp(req.files.bannerImage[0].buffer)
            .resize(2000, 1333)
            .toFormat('jpeg')
            .jpeg({ quality: 90 });

    // images
    if (req.files?.serviceImages?.length) {
        req.image.imageGallery = [];
        await Promise.all(
            req.files.serviceImages.map(async (el, i) => {
                const data = sharp(el.buffer)
                    .resize(2000, 1333)
                    .toFormat('jpeg')
                    .jpeg({ quality: 90 });

                req.image.imageGallery.push(data);
            })
        );
    }
    return next();
});
// assign data for create new homecare  servicse
exports.assignDataForcreateNewHomecareServices = catchAsync(
    async (req, res, next) => {
        req.body.hiwhcsmID = await encryptID(process.env.SPEAK_TO_US_SECRET);

        req.body.createdAt = Date.now();
        return next();
    }
);

// assign data for create new medical market servicse
exports.assignDataForcreateNewMedicalMarketServices = catchAsync(
    async (req, res, next) => {
        req.body.hiwmmcmmID = await encryptID(process.env.SPEAK_TO_US_SECRET);

        req.body.createdAt = Date.now();
        return next();
    }
);
// assign data for create new pharmacy categories
exports.assignDataForcreateNewPharmacyCategories = catchAsync(
    async (req, res, next) => {
        req.body.hiwpclImID = await encryptID(process.env.SPEAK_TO_US_SECRET);

        req.body.createdAt = Date.now();
        return next();
    }
);

// assign data for create new one us blog categoreis
exports.assignDataForcreateNewOneUsBlogCategories = catchAsync(
    async (req, res, next) => {
        req.body.hiwonusID = await encryptID(process.env.SPEAK_TO_US_SECRET);

        req.body.createdAt = Date.now();
        return next();
    }
);

// assign data for create new doctor categories
exports.assignDataForcreateNewDoctorCategories = catchAsync(
    async (req, res, next) => {
        req.body.hiwdcmID = await encryptID(process.env.SPEAK_TO_US_SECRET);

        req.body.createdAt = Date.now();
        return next();
    }
);

// assign data for create new one us blog categoreis
exports.assignDataForcreateNewOneUsBlog = catchAsync(async (req, res, next) => {
    req.body.hiwousvmID = await encryptID(process.env.SPEAK_TO_US_SECRET);
    req.body.createdAt = Date.now();
    req.body.userEId = req.user.hiwuueidmID;
    req.body.userType = 'admin';
    req.body.status = accepted;
    req.body.userId = req.user._id;

    return next();
});

// assign data for create new one us video categoreis
exports.assignDataForcreateNewOneUsVideo = catchAsync(
    async (req, res, next) => {
        req.body.hiwousvbmID = await encryptID(process.env.SPEAK_TO_US_SECRET);
        req.body.createdAt = Date.now();
        req.body.userEId = req.user.hiwuueidmID;
        req.body.userType = 'admin';
        req.body.status = 'accepted';
        req.body.userId = req.user._id;
        return next();
    }
);

// check valid categorei
exports.checkValidBlogCategorie = factoryControllers.findOne(
    blogCategoriesmModel,
    'Categorie Not found'
);

// check valid categorei
exports.checkValidVideoCategorie = factoryControllers.findOne(
    videoCategoreisModel,
    'Categorie Not found'
);

// assign data for create new one us video categoreis
exports.assignDataForcreateNewOneUsVideoCategories = catchAsync(
    async (req, res, next) => {
        req.body.hiwonvpmID = await encryptID(process.env.SPEAK_TO_US_SECRET);

        req.body.createdAt = Date.now();
        return next();
    }
);

// assign data for create new pharmacy medicines
exports.assignDataForcreateNewPharmacyMedicines = catchAsync(
    async (req, res, next) => {
        req.body.hiwpmmdsID = await encryptID(process.env.SPEAK_TO_US_SECRET);

        req.body.createdAt = Date.now();
        return next();
    }
);
// assign data for create new laboratory categories
exports.assignDataForcreateNewLaboratoryCategories = catchAsync(
    async (req, res, next) => {
        req.body.hiwlbycmID = await encryptID(process.env.SPEAK_TO_US_SECRET);

        req.body.createdAt = Date.now();
        return next();
    }
);
// assign data for create new deaddiction  servicse
exports.assignDataForcreateNewDeaddictionServices = catchAsync(
    async (req, res, next) => {
        console.log(req.file);
        req.body.hiwdasmID = await encryptID(process.env.SPEAK_TO_US_SECRET);
        req.body.createdAt = Date.now();
        return next();
    }
);
// assign data for create new ambulance  servicse
exports.assignDataForcreateNewAmbulanceServices = catchAsync(
    async (req, res, next) => {
        req.body.hiwaanasmID = await encryptID(process.env.SPEAK_TO_US_SECRET);
        req.body.createdAt = Date.now();
        return next();
    }
);

// assign data for create new hospital package
exports.assignDataForcreateNewHospitalPackage = catchAsync(
    async (req, res, next) => {
        req.body.hiwhppmID = await encryptID(process.env.SPEAK_TO_US_SECRET);
        req.body.createdAt = Date.now();
        return next();
    }
);

// assign data for create new hospital organ
exports.assignDataForcreateNewOrgan = catchAsync(async (req, res, next) => {
    req.body.hiwhdodolssID = await encryptID(process.env.SPEAK_TO_US_SECRET);
    req.body.createdAt = Date.now();
    return next();
});

// assign data for create new nutritions
exports.assignDataForcreateNewNutritions = catchAsync(
    async (req, res, next) => {
        req.body.hiwfndID = await encryptID(process.env.SPEAK_TO_US_SECRET);
        req.body.createdAt = Date.now();
        return next();
    }
);

// assign data for create new nutritions
exports.assignDataForcreateNewMeetTheExpertCategoreis = catchAsync(
    async (req, res, next) => {
        req.body.hiwmteMID = await encryptID(process.env.SPEAK_TO_US_SECRET);
        req.body.createdAt = Date.now();

        return next();
    }
);

// set homecare image name
exports.assignImageNameForHomecareService = (req, res, next) => {
    if (req.body.statusType === 'create') {
        req.image.imagename = `${`${`${req.user._id
            .toString()
            .split(/[a-z]+/)
            .join('')}-${req.body.hiwhcsmID.split(/[a-z]+/).join('')}`}`
            .split('-')
            .join('')}-homecare-bannerimage`;
        return next();
    }
    if (req.body.statusType !== 'update') {
        return next(
            new AppError('Somthing went wrong. Please try again later.', 400)
        );
    }
    req.updateOneSearch = { hiwhcsmID: req.params.serviceId };
    if (!req.image.data) {
        return next();
    }
    req.image.imagename = `${`${`${req.user._id
        .toString()
        .split(/[a-z]+/)
        .join('')}-${req.params.serviceId.split(/[a-z]+/).join('')}`}`
        .split('-')
        .join('')}-homecare-bannerimage`;
    return next();
};

// set medical market image name
exports.assignImageNameForMedicalMarketService = (req, res, next) => {
    if (req.body.statusType === 'create') {
        req.image.imagename = `${`${`${req.user._id
            .toString()
            .split(/[a-z]+/)
            .join('')}-${req.body.hiwmmcmmID.split(/[a-z]+/).join('')}`}`
            .split('-')
            .join('')}-medical-market`;
        return next();
    }
    if (req.body.statusType !== 'update') {
        return next(
            new AppError('Somthing went wrong. Please try again later.', 400)
        );
    }
    req.updateOneSearch = { hiwmmcmmID: req.params.marketId };
    if (!req.image.data) {
        return next();
    }
    req.image.imagename = `${`${`${req.user._id
        .toString()
        .split(/[a-z]+/)
        .join('')}-${req.params.marketId.split(/[a-z]+/).join('')}`}`
        .split('-')
        .join('')}-medical-market`;
    return next();
};

// set pharmacy image name
exports.assignImageNameForPharmacy = (req, res, next) => {
    if (req.body.statusType === 'create') {
        req.image.imagename = `${`${`${req.user._id
            .toString()
            .split(/[a-z]+/)
            .join('')}-${req.body.hiwpclImID.split(/[a-z]+/).join('')}`}`
            .split('-')
            .join('')}-pharmacy-categories`;
        return next();
    }
    if (req.body.statusType !== 'update') {
        return next(
            new AppError('Somthing went wrong. Please try again later.', 400)
        );
    }
    req.updateOneSearch = { hiwpclImID: req.params.serviceId };
    if (!req.image.data) {
        return next();
    }
    req.image.imagename = `${`${`${req.user._id
        .toString()
        .split(/[a-z]+/)
        .join('')}-${req.params.serviceId.split(/[a-z]+/).join('')}`}`
        .split('-')
        .join('')}-pharmacy-categories`;
    return next();
};

// set pharmacy image name
exports.assignImageNameForOneUsBlogCategoreis = (req, res, next) => {
    if (req.body.statusType === 'create') {
        req.image.imagename = `${`${`${req.user._id
            .toString()
            .split(/[a-z]+/)
            .join('')}-${req.body.hiwonusID.split(/[a-z]+/).join('')}`}`
            .split('-')
            .join('')}-oneus-blog-categories`;
        return next();
    }
    if (req.body.statusType !== 'update') {
        return next(
            new AppError('Somthing went wrong. Please try again later.', 400)
        );
    }
    req.updateOneSearch = { hiwonusID: req.params.serviceId };
    if (!req.image.data) {
        return next();
    }
    req.image.imagename = `${`${`${req.user._id
        .toString()
        .split(/[a-z]+/)
        .join('')}-${req.params.serviceId.split(/[a-z]+/).join('')}`}`
        .split('-')
        .join('')}-oneus-blog-categories`;
    return next();
};

// set new doctor categories
exports.assignImageNameForDoctorCategoreis = catchAsync(
    async (req, res, next) => {
        console.log('hi');
        if (req.body.statusType === 'create') {
            req.image.imagename = `${`${`${req.user._id
                .toString()
                .split(/[a-z]+/)
                .join('')}-${req.body.hiwdcmID.split(/[a-z]+/).join('')}`}`
                .split('-')
                .join('')}-doctor-categories`;

            req.body.specialists = await Promise.all(
                req.body.specialists.split(',').map(async (el) => {
                    const eId = await encryptID(process.env.SPEAK_TO_US_SECRET);
                    return { name: el, hiwdcsslsID: eId };
                })
            );
            return next();
        }
        if (req.body.statusType !== 'update') {
            return next(
                new AppError(
                    'Somthing went wrong. Please try again later.',
                    400
                )
            );
        }
        req.body.specialists = JSON.parse(req.body.specialists);
        req.updateOneSearch = { hiwdcmID: req.params.serviceId };
        req.body.specialists = await Promise.all(
            req.body.specialists.map(async (el) => {
                if (el.id) {
                    return { hiwdcsslsID: el.id, name: el.name };
                }
                const eId = await encryptID(process.env.SPEAK_TO_US_SECRET);
                return { name: el.name, hiwdcsslsID: eId, new: true };
            })
        );
        if (!req.image.data) {
            return next();
        }
        req.image.imagename = `${`${`${req.user._id
            .toString()
            .split(/[a-z]+/)
            .join('')}-${req.params.serviceId.split(/[a-z]+/).join('')}`}`
            .split('-')
            .join('')}-doctor-categories`;
        return next();
    }
);

// set blog image
exports.assignImageNameForOneUsBlog = (req, res, next) => {
    req.searchQuery = { name: req.body.categorie };
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
    req.updateOneSearch = { hiwousvmID: req.params.serviceId };
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

// set video image
exports.assignImageNameForOneUsVideo = (req, res, next) => {
    req.searchQuery = { name: req.body.categorie };
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
        return next(
            new AppError('Somthing went wrong. Please try again later.', 400)
        );
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

// set pharmacy image name
exports.assignImageNameForOneUsVideoCategoreis = (req, res, next) => {
    if (req.body.statusType === 'create') {
        req.image.imagename = `${`${`${req.user._id
            .toString()
            .split(/[a-z]+/)
            .join('')}-${req.body.hiwonvpmID.split(/[a-z]+/).join('')}`}`
            .split('-')
            .join('')}-oneus-video-categories`;
        return next();
    }
    if (req.body.statusType !== 'update') {
        return next(
            new AppError('Somthing went wrong. Please try again later.', 400)
        );
    }
    req.updateOneSearch = { hiwonvpmID: req.params.serviceId };
    if (!req.file) {
        return next();
    }
    req.image.imagename = `${`${`${req.user._id
        .toString()
        .split(/[a-z]+/)
        .join('')}-${req.params.serviceId.split(/[a-z]+/).join('')}`}`
        .split('-')
        .join('')}-oneus-video-categories`;
    return next();
};
// set pharmacy medicines image name
exports.assignImageNameForPharmacyMedicines = (req, res, next) => {
    console.log(req.body);
    if (req.body.statusType === 'create') {
        req.image.imagename = `${`${`${req.user._id
            .toString()
            .split(/[a-z]+/)
            .join('')}-${req.body.hiwpmmdsID.split(/[a-z]+/).join('')}`}`
            .split('-')
            .join('')}-pharmacy-medicine`;
        return next();
    }
    if (req.body.statusType !== 'update') {
        return next(
            new AppError('Somthing went wrong. Please try again later.', 400)
        );
    }
    req.updateOneSearch = { hiwpmmdsID: req.params.serviceId };
    if (!req.image.data) {
        return next();
    }
    req.image.imagename = `${`${`${req.user._id
        .toString()
        .split(/[a-z]+/)
        .join('')}-${req.params.serviceId.split(/[a-z]+/).join('')}`}`
        .split('-')
        .join('')}-pharmacy-medicine`;
    return next();
};

// set laboratory image name
exports.assignImageNameForlaboratory = (req, res, next) => {
    if (req.body.statusType === 'create') {
        req.image.imagename = `${`${`${req.user._id
            .toString()
            .split(/[a-z]+/)
            .join('')}-${req.body.hiwlbycmID.split(/[a-z]+/).join('')}`}`
            .split('-')
            .join('')}-laboratory-categories`;
        return next();
    }
    if (req.body.statusType !== 'update') {
        return next(
            new AppError('Somthing went wrong. Please try again later.', 400)
        );
    }
    req.updateOneSearch = { hiwlbycmID: req.params.serviceId };
    if (!req.image.data) {
        return next();
    }
    req.image.imagename = `${`${`${req.user._id
        .toString()
        .split(/[a-z]+/)
        .join('')}-${req.params.serviceId.split(/[a-z]+/).join('')}`}`
        .split('-')
        .join('')}-laboratory-categories`;
    return next();
};
// set image name
exports.assignImageNameForDeaddictionService = (req, res, next) => {
    if (req.body.statusType === 'create') {
        req.image.imagename = `${`${`${req.user._id
            .toString()
            .split(/[a-z]+/)
            .join('')}-${req.body.hiwdasmID.split(/[a-z]+/).join('')}`}`
            .split('-')
            .join('')}-deaddiction-bannerimage`;
        // req.image.galleryName = `${`${`${req.user._id
        //     .toString()
        //     .split(/[a-z]+/)
        //     .join('')}-${req.body.hiwdasmID.split(/[a-z]+/).join('')}`}`
        //     .split('-')
        //     .join('')}-deaddiction-gallery`;
        return next();
    }
    if (req.body.statusType !== 'update') {
        return next(
            new AppError('Somthing went wrong. Please try again later.', 400)
        );
    }
    req.updateOneSearch = { hiwdasmID: req.params.serviceId };
    if (!req.image.image) {
        return next();
    }
    req.image.imagename = `${`${`${req.user._id
        .toString()
        .split(/[a-z]+/)
        .join('')}-${req.params.serviceId.split(/[a-z]+/).join('')}`}`
        .split('-')
        .join('')}-deaddiction-bannerimage`;
    // req.image.galleryName = `${`${`${req.user._id
    //     .toString()
    //     .split(/[a-z]+/)
    //     .join('')}-${req.params.serviceId.split(/[a-z]+/).join('')}`}`
    //     .split('-')
    //     .join('')}-deaddiction-gallery`;
    return next();
};
// set ambulance image name
exports.assignImageNameForAmbulanceService = (req, res, next) => {
    if (req.body.statusType === 'create') {
        req.image.imagename = `${`${`${req.user._id
            .toString()
            .split(/[a-z]+/)
            .join('')}-${req.body.hiwaanasmID.split(/[a-z]+/).join('')}`}`
            .split('-')
            .join('')}-ambulance-bannerimage`;
        return next();
    }
    if (req.body.statusType !== 'update') {
        return next(
            new AppError('Somthing went wrong. Please try again later.', 400)
        );
    }
    req.updateOneSearch = { hiwaanasmID: req.params.serviceId };
    if (!req.image.data) {
        return next();
    }
    req.image.imagename = `${`${`${req.user._id
        .toString()
        .split(/[a-z]+/)
        .join('')}-${req.params.serviceId.split(/[a-z]+/).join('')}`}`
        .split('-')
        .join('')}-ambulance-bannerimage`;
    return next();
};

// set a hospital package image name
exports.assignImageNameForHospitalPackage = (req, res, next) => {
    if (req.body.statusType === 'create') {
        req.image.imagename = `${`${`${req.user._id
            .toString()
            .split(/[a-z]+/)
            .join('')}-${req.body.hiwhppmID.split(/[a-z]+/).join('')}`}`
            .split('-')
            .join('')}-hospital-package-bannerimage`;
        return next();
    }
    if (req.body.statusType !== 'update') {
        return next(
            new AppError('Somthing went wrong. Please try again later.', 400)
        );
    }
    req.updateOneSearch = { hiwhppmID: req.params.serviceId };
    if (!req.image.data) {
        return next();
    }
    req.image.imagename = `${`${`${req.user._id
        .toString()
        .split(/[a-z]+/)
        .join('')}-${req.params.serviceId.split(/[a-z]+/).join('')}`}`
        .split('-')
        .join('')}-hospital-package-bannerimage`;
    return next();
};

// add hopital organ name
exports.assignImageNameForHospitalOrgan = (req, res, next) => {
    if (req.body.statusType === 'create') {
        req.image.imagename = `${`${`${req.user._id
            .toString()
            .split(/[a-z]+/)
            .join('')}-${req.body.hiwhdodolssID.split(/[a-z]+/).join('')}`}`
            .split('-')
            .join('')}-hospital-organ`;
        return next();
    }
    if (req.body.statusType !== 'update') {
        return next(
            new AppError('Somthing went wrong. Please try again later.', 400)
        );
    }
    req.updateOneSearch = { hiwhdodolssID: req.params.serviceId };
    if (!req.image.data) {
        return next();
    }
    req.image.imagename = `${`${`${req.user._id
        .toString()
        .split(/[a-z]+/)
        .join('')}-${req.params.serviceId.split(/[a-z]+/).join('')}`}`
        .split('-')
        .join('')}-hospital-organ`;
    return next();
};

// set a hospital package image name
exports.assignImageNameForNutritions = (req, res, next) => {
    req.body.uses = req.body.uses.split(',');
    if (req.body.statusType === 'create') {
        req.image.imagename = `${`${`${req.user._id
            .toString()
            .split(/[a-z]+/)
            .join('')}-${req.body.hiwfndID.split(/[a-z]+/).join('')}`}`
            .split('-')
            .join('')}-food-nutrition-image`;
        return next();
    }
    if (req.body.statusType !== 'update') {
        return next(
            new AppError('Somthing went wrong. Please try again later.', 400)
        );
    }
    req.updateOneSearch = { hiwfndID: req.params.foodId };

    if (!req.image.data) {
        return next();
    }
    req.image.imagename = `${`${`${req.user._id
        .toString()
        .split(/[a-z]+/)
        .join('')}-${req.params.foodId.split(/[a-z]+/).join('')}`}`
        .split('-')
        .join('')}-food-nutrition-image`;
    return next();
};

// set a meet the expert categories
exports.assignImageNameForMeetTheExpertCategores = (req, res, next) => {
    if (req.body.statusType === 'create') {
        console.log(req.body.hiwmteMID);
        req.image.imagename = `${`${`${req.user._id
            .toString()
            .split(/[a-z]+/)
            .join('')}-${req.body.hiwmteMID.split(/[a-z]+/).join('')}`}`
            .split('-')
            .join('')}-expert-categories`;
        return next();
    }
    if (req.body.statusType !== 'update') {
        return next(
            new AppError('Somthing went wrong. Please try again later.', 400)
        );
    }
    req.updateOneSearch = { hiwmteMID: req.params.expertId };

    if (!req.image.data) {
        return next();
    }
    req.image.imagename = `${`${`${req.user._id
        .toString()
        .split(/[a-z]+/)
        .join('')}-${req.params.expertId.split(/[a-z]+/).join('')}`}`
        .split('-')
        .join('')}-expert-categories`;
    return next();
};

// set a nutritions images
exports.assignImageNameForutritions = (req, res, next) => {
    if (req.body.statusType === 'create') {
        req.image.imagename = `${`${`${req.user._id
            .toString()
            .split(/[a-z]+/)
            .join('')}-${req.body.hiwhppmID.split(/[a-z]+/).join('')}`}`
            .split('-')
            .join('')}-hospital-package-bannerimage`;
        return next();
    }
    if (req.body.statusType !== 'update') {
        return next(
            new AppError('Somthing went wrong. Please try again later.', 400)
        );
    }
    req.updateOneSearch = { hiwhppmID: req.params.serviceId };
    if (!req.image.data) {
        return next();
    }
    req.image.imagename = `${`${`${req.user._id
        .toString()
        .split(/[a-z]+/)
        .join('')}-${req.params.serviceId.split(/[a-z]+/).join('')}`}`
        .split('-')
        .join('')}-hospital-package-bannerimage`;
    return next();
};
// create new homecare service
exports.createNewHomeCareService =
    factoryControllers.createOne(homecareServices);

// create new homecare service
exports.createNewMedicalMarketCategories = factoryControllers.createOne(
    medicalMarketCategoriesModel
);

// create new pharmacy service
exports.createNewPharmacyServices = factoryControllers.createOne(
    pharmacyCategoriesModel
);

// create new one use blog model
exports.createNewOneUsBlogCategories =
    factoryControllers.createOne(blogCategoriesmModel);

// create new doctor categorie
exports.createDoctorCategorieCategories = factoryControllers.createOne(
    doctoryCategoriesModel
);

// create new one use blog model
exports.createNewOneUsBlog = factoryControllers.createOne(blogsModel);

// create new one use blog model
exports.createNewOneUsVideo = factoryControllers.createOne(videosModel);

// create new one use video model
exports.updateOneUsVideo = factoryControllers.updateOne(videosModel);

// update one use blog model
exports.updateOneUsBlog = factoryControllers.updateOne(blogsModel);

// create new one use video model
exports.createNewOneUsVideoCategories =
    factoryControllers.createOne(videoCategoreisModel);

// create new pharmacy medicnine
exports.createNewPharmacyMedicine = factoryControllers.createOne(
    pharmacyMedicinesModel
);

// create new pharmacy medicine
exports.checkValidCategorie = catchAsync(async (req, res, next) => {
    const categorie = await pharmacyCategoriesModel.findOne({
        name: req.body.categorie
    });
    console.log(req.body.categorie);
    if (!categorie) {
        return next(new AppError('Please select the valide categorie.', 400));
    }
    return next();
});

// create new laboratory service
exports.createNewLaboratoryServices = factoryControllers.createOne(
    laboratoryCategoriesModel
);

// create new deaddiction service
exports.createNewDeaddictionService =
    factoryControllers.createOne(deaddictionService);

// create new ambulance service
exports.createNewAmbulanceService =
    factoryControllers.createOne(ambulanceService);

// create new hospital package
exports.createNewHospitalPacakge = factoryControllers.createOne(
    hospitalPackagesModel
);

// create new hospital organ
exports.createNewHospitalOrgan = factoryControllers.createOne(organsModel);

// create new nutritions details
exports.createNewNutritionDetails =
    factoryControllers.createOne(foodNutritionModel);

// create new nutritions details
exports.createNewMeetTheExpertCategories = factoryControllers.createOne(
    expertCategoriesModel
);

// create new nutritions details
exports.updateNutritionDetails =
    factoryControllers.updateOne(foodNutritionModel);

// update homecare services
exports.updateHomecareServices = factoryControllers.updateOne(homecareServices);

// update market categore
exports.updateMarketCategorie =
    factoryControllers.updateOne(marketCategorieModel);

// update homecare services
exports.updateLaboratoryService = factoryControllers.updateOne(
    laboratoryCategoriesModel
);

// update medicines services
exports.updateMedicines = factoryControllers.updateOne(pharmacyMedicinesModel);
// update medicines services
exports.updateMedicinesServices = factoryControllers.updateAll(
    pharmacyMedicinesModel
);

// update blogs
exports.updateBlogs = factoryControllers.updateAll(blogsModel);

// update videos category
exports.updateVideoCategory = factoryControllers.updateAll(videosModel);
// update pharmacy categorie
exports.updatePharmacyServices = factoryControllers.updateOne(
    pharmacyCategoriesModel
);

// update deaddiction services
exports.updateDeaddictionServices =
    factoryControllers.updateOne(deaddictionService);

// update ambulance services
exports.updateAmbulanceServices =
    factoryControllers.updateOne(ambulanceService);

// update hosptialPackage
exports.updateHospitalPackage = factoryControllers.updateOne(
    hospitalPackagesModel
);

// update hospital package
exports.updateHospitalOrgan = factoryControllers.updateOne(organsModel);

// update expert categories
exports.updateExpertCategories = factoryControllers.updateOne(
    expertCategoriesModel
);

// update one us blogs
exports.updateOneUsBlogs = factoryControllers.updateOne(blogCategoriesmModel);

// update doctor categories
exports.updateDoctorBlogs = factoryControllers.updateOne(
    doctoryCategoriesModel
);

// update one us videos
exports.updateOneUsVidoeCategories =
    factoryControllers.updateOne(videoCategoreisModel);

// send json for create one
exports.sendJsonForCreateOne = factoryControllers.sendJson();

// send json fro update one
exports.sendJsonForUpdateOne = factoryControllers.sendJsonForUpdateOne();

// assign data for get old data
exports.getOldHomecareData = catchAsync(async (req, res, next) => {
    const data = await homecareServices.findOne({
        hiwhcsmID: req.params.serviceId
    });
    if (!data) {
        return next(new AppError('Categorie not found.', 400));
    }
    req.oldName = data.name;
    return next();
});

// assign data for get old data
exports.getOldMarketCategorieData = catchAsync(async (req, res, next) => {
    const data = await marketCategorieModel.findOne({
        hiwmmcmmID: req.params.marketId
    });
    if (!data) {
        return next(new AppError('Categorie not found.', 400));
    }
    req.oldName = data.name;
    return next();
});

// assign data for get old data
exports.getOldLaboratoryData = catchAsync(async (req, res, next) => {
    const data = await laboratoryCategoriesModel.findOne({
        hiwlbycmID: req.params.serviceId
    });
    if (!data) {
        return next(new AppError('Categorie not found.', 400));
    }
    req.oldName = data.name;
    return next();
});

// assign data for get old data
exports.getOldMedicinesName = catchAsync(async (req, res, next) => {
    const data = await pharmacyCategoriesModel.findOne({
        hiwpclImID: req.params.serviceId
    });
    if (!data) {
        return next(new AppError('medicine not found.', 400));
    }
    req.oldName = data.name;
    return next();
});

// assign data for get old data
exports.getOldBlogCategorieName = catchAsync(async (req, res, next) => {
    const data = await blogCategoriesmModel.findOne({
        hiwonusID: req.params.serviceId
    });
    if (!data) {
        return next(new AppError('categorie not found.', 400));
    }
    req.oldName = data.name;
    return next();
});

// assign data for get old data
exports.getOldDoctorCategorieName = catchAsync(async (req, res, next) => {
    const data = await doctoryCategoriesModel.findOne({
        hiwdcmID: req.params.serviceId
    });
    if (!data) {
        return next(new AppError('categorie not found.', 400));
    }
    req.oldData = data;
    return next();
});

// assign data for get old data
exports.getOldVideoCategorieName = catchAsync(async (req, res, next) => {
    const data = await videoCategoreisModel.findOne({
        hiwonvpmID: req.params.serviceId
    });
    if (!data) {
        return next(new AppError('categorie not found.', 400));
    }
    req.oldName = data.name;
    return next();
});
// assign data for get old deaddiction data
exports.getOldDeaddictionData = catchAsync(async (req, res, next) => {
    const data = await deaddictionService.findOne({
        hiwdasmID: req.params.serviceId
    });
    if (!data) {
        return next(
            new AppError(
                'Something went wrong while processing your request.',
                400
            )
        );
    }
    console.log('hi');
    req.oldName = data.name;
    return next();
});

// assign data for get old ambulance data
exports.getOldAmbulanceData = catchAsync(async (req, res, next) => {
    const data = await ambulanceService.findOne({
        hiwaanasmID: req.params.serviceId
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

/// assign data for get old ambulance data
exports.getOldHospitalPackage = catchAsync(async (req, res, next) => {
    const data = await hospitalPackagesModel.findOne({
        hiwhppmID: req.params.serviceId
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

/// assign data for get old organ name
exports.getOldOrganName = catchAsync(async (req, res, next) => {
    const data = await organsModel.findOne({
        hiwhdodolssID: req.params.serviceId
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

/// assign data for get old expet name
exports.getOldExpertName = catchAsync(async (req, res, next) => {
    const data = await expertCategoriesModel.findOne({
        hiwmteMID: req.params.expertId
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

// assign data for update all homecare services data
exports.assignDataForUpdateRestHomcareServicesAll = (req, res, next) => {
    if (req.body.name === req.oldName) {
        return res.status(200).json({ status: 'Success' });
    }

    req.updateAllSearchQuery = { serviceName: req.oldName };
    req.updateAllData = { serviceName: req.body.name };
    return next();
};

// assign data for update all remaingin market categorie
exports.assignDataForUpdateRestMarketServicesAll = (req, res, next) => {
    if (req.body.name === req.oldName) {
        return res.status(200).json({ status: 'Success' });
    }
    req.updateAllSearchQuery = { productStream: req.oldName };
    req.updateAllData = { productStream: req.body.name };

    return next();
};

// assign data for update all homecare services data
exports.assignDataForUpdateRestLaboratoryServicesAll = (req, res, next) => {
    if (req.body.name === req.oldName) {
        return res.status(200).json({ status: 'Success' });
    }

    req.updateAllSearchQuery = { serviceName: req.oldName };
    req.updateAllData = { serviceName: req.body.name };
    return next();
};

// assign data for update all medicines services data
exports.assignDataForUpdateRestMedicinesServicesAll = (req, res, next) => {
    if (req.body.name === req.oldName) {
        return res.status(200).json({ status: 'Success' });
    }

    req.updateAllSearchQuery = { categorie: req.oldName };
    req.updateAllData = { categorie: req.body.name };
    return next();
};

// assign data for update all on
exports.assignDataForUpdateRestBlogsAndVideos = catchAsync(
    async (req, res, next) => {
        const old = [];
        const pushData = [];
        await Promise.all(
            req.oldData.specialists.map(async (el) => {
                await Promise.all(
                    req.body.specialists.map((els) => {
                        if (els.hiwdcsslsID === el.hiwdcsslsID) {
                            if (els.name !== el.name && !els.new) {
                                pushData.push({
                                    'onlineConsultancy.speciality': {
                                        $cond: {
                                            if: {
                                                $and: [
                                                    {
                                                        $eq: [
                                                            '$onlineConsultancy.speciality',
                                                            el.name
                                                        ]
                                                    },
                                                    {
                                                        $eq: [
                                                            '$for',
                                                            'Online Consultancy'
                                                        ]
                                                    }
                                                ]
                                            },
                                            then: els.name,
                                            else: '$onlineConsultancy.speciality'
                                        }
                                    }
                                });
                                pushData.push({
                                    'secondOpinion.speciality': {
                                        $cond: {
                                            if: {
                                                $and: [
                                                    {
                                                        $eq: [
                                                            '$secondOpinion.speciality',
                                                            el.name
                                                        ]
                                                    },
                                                    {
                                                        $eq: [
                                                            '$for',
                                                            'Second Opinion'
                                                        ]
                                                    }
                                                ]
                                            },
                                            then: els.name,
                                            else: '$secondOpinion.speciality'
                                        }
                                    }
                                });
                                old.push({
                                    'onlineConsultancy.speciality': el.name,
                                    for: 'Online Consultancy'
                                });
                                return old.push({
                                    'secondOpinion.speciality': el.name,
                                    for: 'Second Opinion'
                                });
                            }
                        }
                    })
                );
            })
        );
        if (req.oldData.name !== req.body.name) {
            const data = await partnerModel.updateMany(
                {
                    $or: [
                        { 'onlineConsultancy.category': req.oldData.name },
                        { 'secondOpinion.category': req.oldData.name }
                    ]
                },
                [
                    {
                        $set: {
                            'onlineConsultancy.category': {
                                $cond: {
                                    if: {
                                        $eq: [
                                            '$onlineConsultancy.category',
                                            req.oldData.name
                                        ]
                                    },
                                    then: req.body.name,
                                    else: '$onlineConsultancy.category'
                                }
                            },
                            'secondOpinion.category': {
                                $cond: {
                                    if: {
                                        $eq: [
                                            '$secondOpinion.category',
                                            req.oldData.name
                                        ]
                                    },
                                    then: req.body.name,
                                    else: '$secondOpinion.category'
                                }
                            }
                        }
                    }
                ]
            );
            console.log(data);
        }
        if (pushData.length) {
            await Promise.all(
                pushData.map(async (el, index) => {
                    await partnerModel.updateMany(
                        {
                            ...old[index]
                        },
                        [
                            {
                                $set: {
                                    ...el
                                }
                            }
                        ]
                    );
                    console.log(old[index]);
                })
            );
        }
        return res.status(200).json({
            status: 'Success'
        });
    }
);

// assign data for update all deaddiction services data
exports.assignDataForUpdateRestdeaddictionServicesAll = (req, res, next) => {
    if (req.body.name === req.oldName) {
        return res.status(200).json({ status: 'Success' });
    }

    req.updateAllSearchQuery = { serviceName: req.oldName };
    req.updateAllData = { serviceName: req.body.name };
    return next();
};

// assign data for update all expert service data
exports.assignDataForUpdateExpertCategoriesAll = (req, res, next) => {
    if (req.body.name === req.oldName) {
        return res.status(200).json({ status: 'Success' });
    }

    req.updateAllSearchQuery = { expertType: req.oldName };
    req.updateAllData = { expertType: req.body.name };
    return next();
};
// assign data for update all deaddiction services data
exports.updateRemainValuesinAmbulanceServices = catchAsync(
    async (req, res, next) => {
        if (req.body.name === req.oldName) {
            return res.status(200).json({ status: 'Success' });
        }
        const obj = {};

        const drivers = await partnerModel.updateMany(
            {
                for: 'Ambulance Service'
            },
            {
                'ambulance.ambulanceService.$[].services.$[service]':
                    req.body.name
            },
            {
                new: true,
                runValidators: true,
                arrayFilters: [{ service: req.oldName }]
            }
        );
        return res.status(200).json({
            status: 'Success'
        });
    }
);

// assign data for update all hospital package
exports.updateRemainValuesinHospitalPackage = catchAsync(
    async (req, res, next) => {
        if (req.body.name === req.oldName) {
            return res.status(200).json({ status: 'Success' });
        }
        const drivers = await Promise.all([
            hospitalModel.updateMany(
                {
                    $or: [
                        { 'packageDetails.$.category': req.oldname },
                        { 'hospitalServices.$.name': req.oldname }
                    ]
                },
                {
                    $set: {
                        'packageDetails.$[sub].category': req.body.name,
                        'hospitalServices.$[nme].name': req.body.name
                    }
                },
                {
                    new: true,
                    runValidators: true,
                    arrayFilters: [
                        {
                            'sub.category': req.oldName
                        },
                        {
                            'nme.name': req.oldName
                        }
                    ]
                }
            )
        ]);

        return res.status(200).json({
            status: 'Success'
        });
    }
);

// update registered homecare service data
exports.updateRemainingHomeCareServices =
    factoryControllers.updateAll(homecareServiceModel);

// update registered market service data
exports.updateRemainingMarketProductServices =
    factoryControllers.updateAll(marketProductModel);

// update medicines service data
exports.updateRemainingLaboratoryServices = catchAsync(
    async (req, res, next) => {
        if (req.body.name === req.oldName) {
            return res.status(200).json({ status: 'Success' });
        }
        const obj = {};
        console.log(req.body.name, req.oldName);
        const drivers = await partnerModel.updateMany(
            {
                for: 'Laboratory'
            },
            {
                'laboratory.availableTests.$[upName].name': req.body.name
            },
            {
                new: true,
                runValidators: true,
                arrayFilters: [{ 'upName.name': req.oldName }]
            }
        );
        return res.status(200).json({
            status: 'Success'
        });
    }
);

// update registerd deddication service data
exports.updateRemainingDeaddictionServices = factoryControllers.updateAll(
    deaddictionServiceModel
);

// update remaining organs
exports.updateRemainingOrgansAvailablityNames = factoryControllers.updateAll(
    organAvailablityModel
);

// update expert service
exports.updateRemainingExpertServicesNames = factoryControllers.updateAll(
    meetTheExpertsServiceProviderModel
);

// get nutritions
exports.getAllNutritions = factoryControllers.getAllFilter(foodNutritionModel);

// get all pharmacy
exports.getAllPharmacyCategories = factoryControllers.getAllFilter(
    pharmacyCategoriesModel
);

// get all medicine and categorie
exports.getAllMedicinesAndCategoreis = catchAsync(async (req, res, next) => {
    const [medicine, categories] = await Promise.all([
        pharmacyMedicinesModel.find(),
        pharmacyCategoriesModel.find().distinct('name')
    ]);

    req.body.medicines = medicine;
    req.body.categories = categories;
    return next();
});

// get all laboratory categories
exports.getAllLaboratoryCategories = factoryControllers.getAllFilter(
    laboratoryCategoriesModel
);

// assign data for create new job categoreise
exports.assignDataforCreateNewJobCategories = catchAsync(
    async (req, res, next) => {
        req.body.hiwjsmlsmID = await encryptID(process.env.SPEAK_TO_US_SECRET);

        req.body.createdAt = Date.now();
        return next();
    }
);

// creat new job categories
exports.createNewJobCategories =
    factoryControllers.createOne(jobCategoriesModel);

// mange job sub cateegories
exports.mangeJobsubCategories = catchAsync(async (req, res, next) => {
    req.updateOneSearch = { hiwjsmlsmID: req.params.serviceId };
    req.body.specialists = [...new Set(req.body.specialists)];
    console.log(req.body);
    return next();
});

// update job categoreis
exports.updateSubCategories = factoryControllers.updateOne(jobCategoriesModel);

// get all job categories
exports.getAllJobCategories = factoryControllers.getAll(jobCategoriesModel);

// assing data for update status
exports.assignDataForUpdateSponserStatus = (req, res, next) => {
    req.updateOneSearch = {
        hiwsosmID: req.params.sponserId,
        status: 'pending'
    };

    req.body = { status: req.params.status };
    if (req.params.status === 'accepted') {
        req.body.acceptedDate = Date.now();
    } else if (req.params.status === 'rejected') {
        req.body.rejectedDate = Date.now();
    } else {
        return next(new AppError(`undefined url ${req.originalUrl}`, 404));
    }
    return next();
};

// update sponser status
exports.updateOpinionSponserStatus = factoryControllers.updateOne(
    secondOpinionSponserModel
);

// assign data for get all modules
exports.getAllRequestedOpinionSponsers = catchAsync(async (req, res, next) => {
    const docs = await secondOpinionSponserModel.aggregate([
        {
            $match: {
                status: 'pending'
            }
        },
        {
            $lookup: {
                from: 'partners',
                localField: 'partnerId',
                foreignField: '_id',
                pipeline: [
                    {
                        $match: {
                            status: 'accepted',
                            for: 'Second Opinion'
                        }
                    }
                ],
                as: 'partner'
            }
        },
        { $unwind: '$partner' }
    ]);

    req.body.docs = docs;
    return next();
});

// get all blog categores
exports.getAllBlogCategories = factoryControllers.getAll(blogCategoriesmModel);

// get all blogs and blog catgories
exports.getAllBlogs = catchAsync(async (req, res, next) => {
    const [categories, blogs] = await Promise.all([
        blogCategoriesmModel.find().distinct('name'),
        blogsModel.find({ userType: 'admin' })
    ]);

    req.body.categories = categories;
    req.body.blogs = blogs;
    return next();
});

// get all video categories
exports.getAllVideoCategories = factoryControllers.getAll(videoCategoreisModel);

// get all blogs and blog catgories
exports.getAllVideos = catchAsync(async (req, res, next) => {
    const [categories, videos] = await Promise.all([
        videoCategoreisModel.find().distinct('name'),
        videosModel.find({ userType: 'admin' })
    ]);

    req.body.categories = categories;
    req.body.videos = videos;
    return next();
});

// assign data for get all videos request
exports.assignDataForGetAllRequestedVideso = (req, res, next) => {
    req.searchQuery = {
        status: 'requested'
    };

    return next();
};

// assign data for get all blogs request
exports.assignDataForGetAllRequestedBlogs = (req, res, next) => {
    req.searchQuery = {
        status: 'requested'
    };

    return next();
};

// get all requested videos
exports.getAllRequstedVideos = factoryControllers.findAllData(videosModel);

// get all requested blogs
exports.getAllRequstedBlogs = factoryControllers.findAllData(blogsModel);
// get all doctor categoriesz
exports.getAllDoctoryCategories = factoryControllers.getAll(
    doctoryCategoriesModel
);

// assing data for updatevideo satus
exports.assignDataForUpdateVideoStatus = (req, res, next) => {
    req.updateOneSearch = {
        hiwousvbmID: req.params.videoId
    };
    req.body.status = req.params.status;
    return next();
};

// assing data for updatevideo satus
exports.assignDataForUpdateBlogStatus = (req, res, next) => {
    req.updateOneSearch = {
        hiwousvmID: req.params.blogId
    };
    req.body.status = req.params.status;
    return next();
};
