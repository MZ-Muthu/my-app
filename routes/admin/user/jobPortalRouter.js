// ============================================================
// import packages
const express = require('express');

// ============================================================
// creaate router
const router = express.Router();

// ============================================================
// import controllers
const authControllers = require('../../../controllers/authControllers');
const adminControllers = require('../../../controllers/admin/adminControllers');
const jobportalVendorControllers = require('../../../controllers/jobPortalControllers');

// ============================================================
// create routes

// shared
router.use(authControllers.protect, authControllers.restrictTo('admin'));

// update expert service
router.post(
    '/post-new-job/:userEId',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    jobportalVendorControllers.filterValidJobData,
    jobportalVendorControllers.checkCategoryandSpecility,
    adminControllers.asssignDataForPostNewJob,
    jobportalVendorControllers.createNewPost,
    jobportalVendorControllers.sendJsonForCreateOne
);

// update user address
router.patch(
    '/update-job/:userEId/:jobId',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    jobportalVendorControllers.filterValidJobData,
    jobportalVendorControllers.checkCategoryandSpecility,
    adminControllers.assignDataForUpdateUserJobs,
    jobportalVendorControllers.updateJob,
    jobportalVendorControllers.sendJsonForUpdateOne
);

// ============================================================
// ============================================================
// export router
module.exports = router;
