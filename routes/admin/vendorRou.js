// ============================================================
// import packages
const express = require('express');

// ============================================================
// creaate router
const router = express.Router();

// ============================================================
// import controllers
const authControllers = require('../../controllers/authControllers');
const adminControllers = require('../../controllers/admin/adminControllers');
const jobportalVendorControllers = require('../../controllers/jobPortalControllers');
const quotesVendorControllers = require('../../controllers/quotesControllers');
const marketVendroControllers = require('../../controllers/medicalMarketControllers');

// ============================================================
// create routes
router.use(authControllers.protect, authControllers.restrictTo('admin'));

// get all packgeges
router.get(
    '/get-all-vendors/:moduleName',
    adminControllers.assignDataForGetAllVendors,
    adminControllers.getAllVendors,
    adminControllers.sendJsonForFilter
);

// get -a vendor
// router.get('/get-a-vendor/:vendorId', adminControllers.getAVendor);

// update vendor profile
router.patch(
    '/update-vender/:moduleName/:vendorId',
    adminControllers.assignDataForUpdatePartner,
    adminControllers.updatePartner,
    adminControllers.sendJsonForUpdateOne
);

// update vendor status
router.patch(
    '/update-partner-status/:status/:partnerId',
    adminControllers.assignDataForUpdatePartnerStatus,
    adminControllers.updatePartnerStatus,
    adminControllers.createDependingModules
);

// post new job
router.post(
    '/jobportal/post-new-job/:moduleName/:vendorId',
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    jobportalVendorControllers.filterValidJobData,
    jobportalVendorControllers.checkCategoryandSpecility,
    adminControllers.assignDataforPostNewJob,
    jobportalVendorControllers.createNewPost,
    jobportalVendorControllers.sendJsonForCreateOne
);

// update my job
router.patch(
    '/jobportal/update-job/:moduleName/:vendorId/:jobId',
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    jobportalVendorControllers.filterValidJobData,
    jobportalVendorControllers.checkCategoryandSpecility,
    adminControllers.assignUserIdAndPartnerId,
    adminControllers.assignDataForUpdateVendorJobs,
    jobportalVendorControllers.updateJob,
    jobportalVendorControllers.sendJsonForUpdateOne
);

// request new quote
router.post(
    '/quotes/request-quotes/:moduleName/:vendorId',
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    quotesVendorControllers.postNewQuotes
);

// cancel medical market
router.patch(
    '/quotes/:moduleName/:vendorId/cancel-quote/:quoteId',
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminControllers.assignUserIdAndPartnerId,
    quotesVendorControllers.assignDataForCancelReques,
    marketVendroControllers.updateMedcalquoterequestors,
    marketVendroControllers.sendJsonForUpdateOne
);

// cancel medical market
router.patch(
    '/quotes/:moduleName/:vendorId/update-quote-status/:status/:quoteId',
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminControllers.assignUserIdAndPartnerId,
    quotesVendorControllers.assignDataForQuotesRequests,
    marketVendroControllers.updateMedcalquoterequestor,
    marketVendroControllers.sendJsonForUpdateOne
);

// ============================================================
module.exports = router;
