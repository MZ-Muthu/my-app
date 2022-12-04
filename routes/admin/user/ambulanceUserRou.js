// ============================================================
// import packages
const express = require('express');

// ============================================================
// creaate router
const router = express.Router();

// ============================================================
// import controllers
const authControllers = require('../../../controllers/authControllers');
const adminAmbulanceControllers = require('../../../controllers/admin/ambulanceContro');
const adminControllers = require('../../../controllers/admin/adminControllers');
const ambulanceControllers = require('../../../controllers/ambulanceControllers');

// create routes
//shared
router.use(authControllers.protect, authControllers.restrictTo('admin'));

// update ambulance status
router.patch(
    '/update-quote-status/:status/:userEId/:quoteId',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    adminControllers.assignUserIdForUser,
    ambulanceControllers.responseProvidersQuote,
    ambulanceControllers.updateServiceProviders,
    ambulanceControllers.assingDataforUpdateRemainingStatus,
    ambulanceControllers.updateRemainingAmbualceStatus,
    ambulanceControllers.sendJsonForUpdateById
);

// update ambulance status
router.patch(
    '/cancel-quote/:userEId/:quoteId',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    adminControllers.assignUserIdForUser,
    ambulanceControllers.assignDataForCancelQuote,
    ambulanceControllers.updateAmbulanceQuotes,
    ambulanceControllers.sendJsonForUpdateAll
);

// get advertisements
// ============================================================
module.exports = router;
