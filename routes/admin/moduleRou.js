// ============================================================
// import packages
const express = require('express');

// ============================================================
// creaate router
const router = express.Router();

// ============================================================
// import utilities
const fileUpload = require('../../util/fileUpload');

// ============================================================
// import controllers
const authControllers = require('../../controllers/authControllers');
const adminControllers = require('../../controllers/admin/adminControllers');
const moduleControllers = require('../../controllers/admin/moduleControllers');
// ============================================================
// create router
// moudle management
// ============================================================
// ============================================================
// ============================================================
// homecare
// create new homecare service
router.post(
    '/create-homecare-services',
    moduleControllers.setbannerImageSize,
    fileUpload.uploadSingleImage('bannerImage'),
    fileUpload.resizeSingleImage,
    moduleControllers.assignDataForcreateNewHomecareServices,
    moduleControllers.assignImageNameForHomecareService,
    fileUpload.uploadFilesinAWS,
    moduleControllers.createNewHomeCareService,
    moduleControllers.sendJsonForCreateOne
);
// update homecare
router.patch(
    '/update-homecare-services/:serviceId',
    moduleControllers.getOldHomecareData,
    moduleControllers.setbannerImageSize,
    fileUpload.uploadSingleImage('bannerImage'),
    fileUpload.resizeSingleImage,
    moduleControllers.assignImageNameForHomecareService,
    fileUpload.uploadFilesinAWS,
    moduleControllers.updateHomecareServices,
    moduleControllers.assignDataForUpdateRestHomcareServicesAll,
    moduleControllers.updateRemainingHomeCareServices,
    moduleControllers.sendJsonForUpdateOne
);

// ============================================================
// ============================================================
// ============================================================
// create new deaddiction service
router.post(
    '/create-deaddiction-services',
    // moduleControllers.setbannerImageSize,
    // moduleControllers.setbannerImageSizeForDeaddicationCenter,
    // fileUpload.uploadSinglAndMultipleImage,
    // fileUpload.resizeImageAndGallerys,
    // moduleControllers.assignImageNameForDeaddictionService,
    // fileUpload.uploadFilesinAWSVariable,
    // moduleControllers.createNewDeaddictionService,
    // moduleControllers.sendJsonForCreateOne,
    moduleControllers.setbannerImageSize,
    fileUpload.uploadSingleImage('bannerImage'),
    fileUpload.resizeSingleImage,
    moduleControllers.assignDataForcreateNewDeaddictionServices,
    moduleControllers.assignImageNameForDeaddictionService,
    fileUpload.uploadFilesinAWS,
    moduleControllers.createNewDeaddictionService,
    moduleControllers.sendJsonForCreateOne
);
// update deaddiction service
router.patch(
    '/update-deaddiction-services/:serviceId',
    // moduleControllers.getOldDeaddictionData,
    // moduleControllers.setbannerImageSizeForDeaddicationCenter,
    // fileUpload.uploadSinglAndMultipleImage,
    // fileUpload.resizeImageAndGallerys,
    // moduleControllers.assignImageNameForDeaddictionService,
    // fileUpload.uploadFilesinAWSVariable,
    // moduleControllers.updateDeaddictionServices,
    // moduleControllers.assignDataForUpdateRestdeaddictionServicesAll,
    // moduleControllers.updateRemainingDeaddictionServices,
    // moduleControllers.sendJsonForUpdateOne,

    moduleControllers.getOldDeaddictionData,
    moduleControllers.setbannerImageSizeForDeaddicationCenter,
    fileUpload.uploadSingleImage('bannerImage'),
    moduleControllers.assignImageNameForDeaddictionService,
    fileUpload.resizeSingleImage,
    moduleControllers.updateDeaddictionServices,
    moduleControllers.assignDataForUpdateRestdeaddictionServicesAll,
    moduleControllers.updateRemainingDeaddictionServices,
    moduleControllers.sendJsonForUpdateOne
);
// ============================================================
// ============================================================
// ============================================================
// create new ambulance service
router.post(
    '/create-ambulance-services',
    moduleControllers.setbannerImageSize,
    fileUpload.uploadSingleImage('bannerImage'),
    fileUpload.resizeSingleImage,
    moduleControllers.assignDataForcreateNewAmbulanceServices,
    moduleControllers.assignImageNameForAmbulanceService,
    fileUpload.uploadFilesinAWS,
    moduleControllers.createNewAmbulanceService,
    moduleControllers.sendJsonForCreateOne
);
// update deaddiction service
router.patch(
    '/update-ambulance-services/:serviceId',
    moduleControllers.getOldAmbulanceData,
    moduleControllers.setbannerImageSize,
    fileUpload.uploadSingleImage('bannerImage'),
    fileUpload.resizeSingleImage,
    moduleControllers.assignImageNameForAmbulanceService,
    fileUpload.uploadFilesinAWS,
    moduleControllers.updateAmbulanceServices,
    moduleControllers.updateRemainValuesinAmbulanceServices
);

// ============================================================
// ============================================================
// ============================================================
// Hospital package
router.post(
    '/hospital/categories',
    moduleControllers.setbannerImageSize,
    fileUpload.uploadSingleImage('bannerImage'),
    fileUpload.resizeSingleImage,
    moduleControllers.assignDataForcreateNewHospitalPackage,
    moduleControllers.assignImageNameForHospitalPackage,
    fileUpload.uploadFilesinAWS,
    moduleControllers.createNewHospitalPacakge,
    moduleControllers.sendJsonForCreateOne
);
// update deaddiction service
router.patch(
    '/hospital/categories/:serviceId',
    moduleControllers.getOldHospitalPackage,
    moduleControllers.setbannerImageSize,
    fileUpload.uploadSingleImage('bannerImage'),
    fileUpload.resizeSingleImage,
    moduleControllers.assignImageNameForHospitalPackage,
    fileUpload.uploadFilesinAWS,
    moduleControllers.updateHospitalPackage,
    moduleControllers.updateRemainValuesinHospitalPackage
);
// create new organ
router.post(
    '/hospital/organ',
    moduleControllers.setbannerImageSize,
    fileUpload.uploadSingleImage('bannerImage'),
    fileUpload.resizeSingleImage,
    moduleControllers.assignDataForcreateNewOrgan,
    moduleControllers.assignImageNameForHospitalOrgan,
    fileUpload.uploadFilesinAWS,
    moduleControllers.createNewHospitalOrgan,
    moduleControllers.sendJsonForCreateOne
);
// update deaddiction service
router.patch(
    '/hospital/organ/:serviceId',
    moduleControllers.getOldOrganName,
    moduleControllers.setbannerImageSize,
    fileUpload.uploadSingleImage('bannerImage'),
    fileUpload.resizeSingleImage,
    moduleControllers.assignImageNameForHospitalOrgan,
    fileUpload.uploadFilesinAWS,
    moduleControllers.updateHospitalOrgan,
    moduleControllers.assignDataForUpdateRestdeaddictionServicesAll,
    moduleControllers.updateRemainingOrgansAvailablityNames,
    moduleControllers.sendJsonForUpdateOne
);

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Fitness
router.post(
    '/fitness/new-food-nutritions',
    moduleControllers.setbannerImageSize,
    fileUpload.uploadSingleImage('bannerImage'),
    fileUpload.resizeSingleImage,
    moduleControllers.assignDataForcreateNewNutritions,
    moduleControllers.assignImageNameForNutritions,
    fileUpload.uploadFilesinAWS,
    moduleControllers.createNewNutritionDetails,
    moduleControllers.sendJsonForCreateOne
);
// update nutrion food details
router.patch(
    '/fitness/update-food-nutritions/:foodId',
    moduleControllers.setbannerImageSize,
    fileUpload.uploadSingleImage('bannerImage'),
    fileUpload.resizeSingleImage,
    moduleControllers.assignImageNameForNutritions,
    fileUpload.uploadFilesinAWS,
    moduleControllers.updateNutritionDetails,
    moduleControllers.sendJsonForUpdateOne
);
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Meet The experts
router.post(
    '/meet-the-experts/categories',
    moduleControllers.setbannerImageSize,
    fileUpload.uploadSingleImage('bannerImage'),
    fileUpload.resizeSingleImage,
    moduleControllers.assignDataForcreateNewMeetTheExpertCategoreis,
    moduleControllers.assignImageNameForMeetTheExpertCategores,
    fileUpload.uploadFilesinAWS,
    moduleControllers.createNewMeetTheExpertCategories,
    moduleControllers.sendJsonForCreateOne
);
// update nutrion food details
router.patch(
    '/meet-the-experts/categories/:expertId',
    moduleControllers.getOldExpertName,
    moduleControllers.setbannerImageSize,
    fileUpload.uploadSingleImage('bannerImage'),
    fileUpload.resizeSingleImage,
    moduleControllers.assignImageNameForMeetTheExpertCategores,
    fileUpload.uploadFilesinAWS,
    moduleControllers.updateExpertCategories,
    moduleControllers.assignDataForUpdateExpertCategoriesAll,
    moduleControllers.updateRemainingExpertServicesNames,
    moduleControllers.sendJsonForUpdateOne
);

// ============================================================
// ============================================================
// ============================================================
// pharmacy
// create new homecare service
router.post(
    '/create-pharmacy-services',
    moduleControllers.setbannerImageSize,
    fileUpload.uploadSingleImage('bannerImage'),
    fileUpload.resizeSingleImage,
    moduleControllers.assignDataForcreateNewPharmacyCategories,
    moduleControllers.assignImageNameForPharmacy,
    fileUpload.uploadFilesinAWS,
    moduleControllers.createNewPharmacyServices,
    moduleControllers.sendJsonForCreateOne
);
// update homecare
router.patch(
    '/update-pharmacy-services/:serviceId',
    moduleControllers.getOldMedicinesName,
    moduleControllers.setbannerImageSize,
    fileUpload.uploadSingleImage('bannerImage'),
    fileUpload.resizeSingleImage,
    moduleControllers.assignImageNameForPharmacy,
    fileUpload.uploadFilesinAWS,
    moduleControllers.updatePharmacyServices,
    moduleControllers.assignDataForUpdateRestMedicinesServicesAll,
    moduleControllers.updateMedicinesServices,
    moduleControllers.sendJsonForUpdateOne
);

// create new pharmacy medicines
router.post(
    '/create-pharmacy-medicines',
    moduleControllers.setbannerImageSize,
    fileUpload.uploadSingleImage('bannerImage'),
    fileUpload.resizeSingleImage,
    moduleControllers.assignDataForcreateNewPharmacyMedicines,
    moduleControllers.assignImageNameForPharmacyMedicines,
    fileUpload.uploadFilesinAWS,
    moduleControllers.checkValidCategorie,
    moduleControllers.createNewPharmacyMedicine,
    moduleControllers.sendJsonForCreateOne
);
// update homecare
router.patch(
    '/update-pharmacy-medicines/:serviceId',

    moduleControllers.setbannerImageSize,
    fileUpload.uploadSingleImage('bannerImage'),
    fileUpload.resizeSingleImage,
    moduleControllers.assignImageNameForPharmacyMedicines,
    fileUpload.uploadFilesinAWS,
    moduleControllers.updateMedicines,
    moduleControllers.sendJsonForUpdateOne
);

// create medicines

// ============================================================
// ============================================================
// ============================================================
// laboratory
// create new laboratory
router.post(
    '/create-laboratory-services',
    moduleControllers.setbannerImageSize,
    fileUpload.uploadSingleImage('bannerImage'),
    fileUpload.resizeSingleImage,
    moduleControllers.assignDataForcreateNewLaboratoryCategories,
    moduleControllers.assignImageNameForlaboratory,
    fileUpload.uploadFilesinAWS,
    moduleControllers.createNewLaboratoryServices,
    moduleControllers.sendJsonForCreateOne
);
// update laboratory
router.patch(
    '/update-laboratory-services/:serviceId',
    moduleControllers.getOldLaboratoryData,
    moduleControllers.setbannerImageSize,
    fileUpload.uploadSingleImage('bannerImage'),
    fileUpload.resizeSingleImage,
    moduleControllers.assignImageNameForlaboratory,
    fileUpload.uploadFilesinAWS,
    moduleControllers.updateLaboratoryService,
    moduleControllers.assignDataForUpdateRestLaboratoryServicesAll,
    moduleControllers.updateRemainingLaboratoryServices,
    moduleControllers.sendJsonForUpdateOne
);

// ============================================================
// ============================================================
// ============================================================
// Job categories
router.post(
    '/job/create-job-categories',
    moduleControllers.assignDataforCreateNewJobCategories,
    moduleControllers.createNewJobCategories,
    moduleControllers.sendJsonForCreateOne
);

// update jsob categories

// mange job sub categories
router.patch(
    '/job/manage-job-categories/:serviceId',
    moduleControllers.mangeJobsubCategories,
    moduleControllers.updateSubCategories,
    moduleControllers.sendJsonForUpdateOne
);

// ============================================================
// ============================================================
// ============================================================
// job
// job categorie manangement

// ============================================================
// ============================================================
// ============================================================
// Second opinion
router.patch(
    '/second-opinion/verify-sponser/:status/:sponserId',
    moduleControllers.assignDataForUpdateSponserStatus,
    moduleControllers.updateOpinionSponserStatus,
    moduleControllers.sendJsonForUpdateOne
);

// ============================================================
// ============================================================
// ============================================================
// pharmacy
// create new homecare service
router.post(
    '/one-us/blog-categories',
    moduleControllers.setbannerImageSize,
    fileUpload.uploadSingleImage('bannerImage'),
    fileUpload.resizeSingleImage,
    moduleControllers.assignDataForcreateNewOneUsBlogCategories,
    moduleControllers.assignImageNameForOneUsBlogCategoreis,
    fileUpload.uploadFilesinAWS,
    moduleControllers.createNewOneUsBlogCategories,
    moduleControllers.sendJsonForCreateOne
);
// update homecare
router.patch(
    '/one-us/blog-categories/:serviceId',
    moduleControllers.getOldBlogCategorieName,
    moduleControllers.setbannerImageSize,
    fileUpload.uploadSingleImage('bannerImage'),
    fileUpload.resizeSingleImage,
    moduleControllers.assignImageNameForOneUsBlogCategoreis,
    fileUpload.uploadFilesinAWS,
    moduleControllers.updateOneUsBlogs,
    moduleControllers.assignDataForUpdateRestBlogsAndVideos,
    moduleControllers.updateBlogs,
    moduleControllers.sendJsonForUpdateOne
);

// create new blogs
router.post(
    '/one-us/blog',
    moduleControllers.setbannerImageSize,
    fileUpload.uploadSingleImage('bannerImage'),
    fileUpload.resizeSingleImage,
    moduleControllers.assignDataForcreateNewOneUsBlog,
    moduleControllers.assignImageNameForOneUsBlog,
    moduleControllers.checkValidBlogCategorie,
    fileUpload.uploadFilesinAWS,
    moduleControllers.createNewOneUsBlog,
    moduleControllers.sendJsonForCreateOne
);
// update homecare
router.patch(
    '/one-us/blog/:serviceId',
    moduleControllers.setbannerImageSize,
    fileUpload.uploadSingleImage('bannerImage'),
    fileUpload.resizeSingleImage,
    moduleControllers.assignImageNameForOneUsBlog,
    moduleControllers.checkValidBlogCategorie,
    fileUpload.uploadFilesinAWS,
    moduleControllers.updateOneUsBlog,
    moduleControllers.sendJsonForUpdateOne
);
// create new video categoreis
router.post(
    '/one-us/video-categories',
    moduleControllers.setbannerImageSize,
    fileUpload.uploadSingleImage('bannerImage'),
    fileUpload.resizeSingleImage,
    moduleControllers.assignDataForcreateNewOneUsVideoCategories,
    moduleControllers.assignImageNameForOneUsVideoCategoreis,
    fileUpload.uploadFilesinAWS,
    moduleControllers.createNewOneUsVideoCategories,
    moduleControllers.sendJsonForCreateOne
);
// update homecare
router.patch(
    '/one-us/video-categories/:serviceId',
    moduleControllers.getOldVideoCategorieName,
    moduleControllers.setbannerImageSize,
    fileUpload.uploadSingleImage('bannerImage'),
    fileUpload.resizeSingleImage,
    moduleControllers.assignImageNameForOneUsVideoCategoreis,
    fileUpload.uploadFilesinAWS,
    moduleControllers.updateOneUsVidoeCategories,
    moduleControllers.assignDataForUpdateRestBlogsAndVideos,
    moduleControllers.updateVideoCategory,
    moduleControllers.sendJsonForUpdateOne
);
// create new video
router.post(
    '/one-us/video',
    fileUpload.uploadSingleVideo('videos'),
    moduleControllers.assignDataForcreateNewOneUsVideo,
    moduleControllers.assignImageNameForOneUsVideo,
    moduleControllers.checkValidVideoCategorie,
    fileUpload.uploadVideoinAWS,
    moduleControllers.createNewOneUsVideo,
    moduleControllers.sendJsonForCreateOne
);
// create new video
router.patch(
    '/one-us/video/:serviceId',
    fileUpload.uploadSingleVideo('videos'),
    moduleControllers.assignImageNameForOneUsVideo,
    moduleControllers.checkValidVideoCategorie,
    fileUpload.uploadVideoinAWS,
    moduleControllers.updateOneUsVideo,
    moduleControllers.sendJsonForUpdateOne
);

// update one us video status
router.patch(
    '/one-us/video/:status/:videoId',
    moduleControllers.assignDataForUpdateVideoStatus,
    moduleControllers.updateOneUsVideo,
    moduleControllers.sendJsonForUpdateOne
);

// update one us blog status
router.patch(
    '/one-us/blog/:status/:blogId',
    moduleControllers.assignDataForUpdateBlogStatus,
    moduleControllers.updateOneUsBlog,
    moduleControllers.sendJsonForUpdateOne
);

// ============================================================
// ============================================================
// ============================================================
// Docsots
// create new doctor categorie
router.post(
    '/doctors/categories',
    moduleControllers.setbannerImageSize,
    fileUpload.uploadSingleImage('bannerImage'),
    fileUpload.resizeSingleImage,
    moduleControllers.assignDataForcreateNewDoctorCategories,
    moduleControllers.assignImageNameForDoctorCategoreis,
    fileUpload.uploadFilesinAWS,
    moduleControllers.createDoctorCategorieCategories,
    moduleControllers.sendJsonForCreateOne
);
// update homecare
router.patch(
    '/doctors/categories/:serviceId',
    moduleControllers.getOldDoctorCategorieName,
    moduleControllers.setbannerImageSize,
    fileUpload.uploadSingleImage('bannerImage'),
    fileUpload.resizeSingleImage,
    moduleControllers.assignImageNameForDoctorCategoreis,
    fileUpload.uploadFilesinAWS,
    moduleControllers.updateDoctorBlogs,
    moduleControllers.assignDataForUpdateRestBlogsAndVideos,
    moduleControllers.updateBlogs,
    moduleControllers.sendJsonForUpdateOne
);

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// create new Medical market service
router.post(
    '/market/categorie',
    moduleControllers.setbannerImageSize,
    fileUpload.uploadSingleImage('bannerImage'),
    fileUpload.resizeSingleImage,
    moduleControllers.assignDataForcreateNewMedicalMarketServices,
    moduleControllers.assignImageNameForMedicalMarketService,
    fileUpload.uploadFilesinAWS,
    moduleControllers.createNewMedicalMarketCategories,
    moduleControllers.sendJsonForCreateOne
);
// update homecare
router.patch(
    '/market/categorie/:marketId',
    moduleControllers.getOldMarketCategorieData,
    moduleControllers.setbannerImageSize,
    fileUpload.uploadSingleImage('bannerImage'),
    fileUpload.resizeSingleImage,
    moduleControllers.assignImageNameForMedicalMarketService,
    fileUpload.uploadFilesinAWS,
    moduleControllers.updateMarketCategorie,
    moduleControllers.assignDataForUpdateRestMarketServicesAll,
    moduleControllers.updateRemainingMarketProductServices,
    moduleControllers.sendJsonForUpdateOne
);

// ============================================================
module.exports = router;
