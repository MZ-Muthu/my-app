// ============================================================
// import libraris
const express = require('express');

// ============================================================
// create router
const router = express.Router();

// ============================================================
// import controllers
const onlineConsultancyControllers = require('../../controllers/onlineConsultancyControllers');
const authControllers = require('../../controllers/authControllers');
const jobPortalControllers = require('../../controllers/jobPortalControllers');
const advertisementControllers = require('../../controllers/advertisementControllers');
const medicalMarketControllers = require('../../controllers/medicalMarketControllers');

// ============================================================
// // create routes
// router.post(
//     '/new-service',
//     authControllers.protect,
//     onlineConsultancyControllers.assignExpertSearchData,
//     onlineConsultancyControllers.verifyValidPartner,
//     onlineConsultancyControllers.assignNewServiceData,
//     onlineConsultancyControllers.createNewService,
//     onlineConsultancyControllers.sendServiceJson
// );

// // update new vendor
router.patch(
    '/update-online-consultancy',
    authControllers.protect,

    // onlineConsultancyControllers.assignDataForUpdateConsultancy,
    // onlineConsultancyControllers.updateOnlineConsultancy,
    // onlineConsultancyControllers.sendJsonForUpdateOne,
    onlineConsultancyControllers.filterOnlineConsulatancyData,
    onlineConsultancyControllers.assignPartnerSearchData,
    onlineConsultancyControllers.updateOnlineConsultancy,
    onlineConsultancyControllers.updateSecondOpinionForConsultant,
    onlineConsultancyControllers.sendJsonForUpdateOne
);

// upsert availablity time
router.patch(
    '/manage-availablity/',
    authControllers.protect,
    onlineConsultancyControllers.checkTheDateandTimeisvalid,
    onlineConsultancyControllers.checkValidVendorandPartner,
    onlineConsultancyControllers.assingConsultancyAvailablityData
);

// // update the active and inactive
// router.patch(
//     '/set-councilar-status/:serviceId/:status',
//     authControllers.protect,
//     onlineConsultancyControllers.checkValidVendorandPartner,
//     onlineConsultancyControllers.assignDataForCouselingStatusUpdate,
//     onlineConsultancyControllers.updateCouncilarStatus,
//     onlineConsultancyControllers.sendJsonForUpdateOne
// );

// manage bookds slotes
router.patch(
    '/manage-booking-status/:status/:bookingId',
    authControllers.protect,
    onlineConsultancyControllers.assignConsuSearchData,
    onlineConsultancyControllers.verifyValidPartner,
    onlineConsultancyControllers.assignDataforUpdateConsultancyBookingStatus,
    onlineConsultancyControllers.updateOnlineConsultancyBookingStatus,
    onlineConsultancyControllers.sendJsonForUpdateOne
);

// get booking request
router.get(
    '/booking-management',
    authControllers.protect,
    onlineConsultancyControllers.assignConsuSearchData,
    onlineConsultancyControllers.verifyValidPartner,
    onlineConsultancyControllers.getMyConsultancyBookingData,
    onlineConsultancyControllers.sendJsonForDocs
);

// get my booking slots
router.get(
    '/my-booking-slots',
    authControllers.protect,
    onlineConsultancyControllers.assignConsuSearchData,
    onlineConsultancyControllers.verifyValidPartner,
    onlineConsultancyControllers.assignPartn,
    onlineConsultancyControllers.assignDataForFindMyAvailablitySlots,
    onlineConsultancyControllers.getMyAvailablity,
    onlineConsultancyControllers.getAvailablityDays,
    onlineConsultancyControllers.sendJsonForBookingSlots
);

// get available
router.get(
    '/get-doctors/:category',
    authControllers.protect,
    onlineConsultancyControllers.getAvailableDoctors
);

// get a router
router.get(
    '/get-a-doctor/:type/:serviceId/',
    authControllers.protect,
    onlineConsultancyControllers.getaDoctor,
    onlineConsultancyControllers.sendJsonForDocs
);

//post new job
router.post(
    '/post-new-job/:serviceId',
    authControllers.protect,
    onlineConsultancyControllers.assignDataForGetApplicants,
    jobPortalControllers.checkValidVendorandAssignData,
    // onlineConsultancyControllers.checkValidVendorandPartner,
    // jobPortalControllers.assignDataForCreateNewJobPostFromOnlineConsultancy,
    // jobPortalControllers.checkPartnerIdandPartnerEid,
    jobPortalControllers.createNewPost,
    jobPortalControllers.sendJsonForCreateOne
);
// update job
router.patch(
    '/update-my-job/:jobId',
    authControllers.protect,
    onlineConsultancyControllers.assignDataForUpdateJobs,
    jobPortalControllers.preventFalseDataUpdate,
    jobPortalControllers.updateJob,
    jobPortalControllers.sendJsonForUpdateOne
);

// delete(inactive) job
router.patch(
    '/delete-my-job/:jobId',
    authControllers.protect,
    onlineConsultancyControllers.assignDataForUpdateJobs,
    jobPortalControllers.preventFalseDataDelete,
    jobPortalControllers.updateJob,
    jobPortalControllers.sendJsonForUpdateOne
);

// get job applicats
router.get(
    '/get-job-applicants/:jobId',
    authControllers.protect,
    onlineConsultancyControllers.assignDataForGetApplicants,
    jobPortalControllers.getJobApplicats
);

// get a job
router.get(
    '/get-applicant-profile/:applicantId',
    authControllers.protect,
    jobPortalControllers.getJobApplication
);

// create new advertisement
router.post(
    '/create-new-advertisement/:serviceId',
    authControllers.protect,
    onlineConsultancyControllers.assignDataForGetApplicants,
    advertisementControllers.checkValidVendorandAssignData,
    // onlineConsultancyControllers.checkValidVendorandPartner,
    // advertisementControllers.assignDataForCreateNewJobPostFromOnlineCondsultancy,
    // advertisementControllers.checkPartnerIdandPartnerEid,
    advertisementControllers.createNewAdvertisement,
    advertisementControllers.sendJsonForCreateOne
);

// update advertisement
router.patch(
    '/update-my-advertisement/:adId',
    authControllers.protect,
    onlineConsultancyControllers.assignDataForUpdateAdvertisement,
    advertisementControllers.preventFalseAdvertisemenDataUpdate,
    advertisementControllers.updateAdvertisement,
    advertisementControllers.sendJsonForUpdateOne
);

// delete(inactive) job
router.patch(
    '/delete-my-advertisement/:adId',
    authControllers.protect,
    onlineConsultancyControllers.assignDataForUpdateAdvertisement,
    advertisementControllers.preventFalseDataDelete,
    advertisementControllers.updateAdvertisement,
    advertisementControllers.sendJsonForUpdateOne
);

// ============================================================
// create a quote
router.post(
    '/request-quotes/',
    authControllers.protect,
    onlineConsultancyControllers.getDataForQuoteFromOnlineConsultancy
);

// get my quotes
router.get(
    '/get-my-quotes',
    authControllers.protect,
    onlineConsultancyControllers.assignDataForGetMyQuotes,
    medicalMarketControllers.getMyActiveQuotes
);

// get my quotes
router.get(
    '/get-a-quotes/:quoteId',
    authControllers.protect,
    onlineConsultancyControllers.assignDataForGetMyQuotes,
    onlineConsultancyControllers.getAQuotes
);

// cancel medical market
router.patch(
    '/cancel-quote/:quoteId',
    authControllers.protect,
    onlineConsultancyControllers.assignDataForCancelReques,
    medicalMarketControllers.updateMedcalquoterequestors,
    medicalMarketControllers.sendJsonForUpdateOne
);

// cancel medical market
router.patch(
    '/update-quote-status/:quoteId',
    authControllers.protect,
    onlineConsultancyControllers.assignDataForQuotesRequests,
    medicalMarketControllers.updateMedcalquoterequestor,
    medicalMarketControllers.sendJsonForUpdateOne
);

// ============================================================
// export router
module.exports = router;
