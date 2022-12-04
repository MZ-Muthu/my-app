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
const quotesVendorControllers = require('../../controllers/quotesControllers');
const marketVendroControllers = require('../../controllers/medicalMarketControllers');

// ============================================================
router.use(authControllers.protect, authControllers.restrictTo('admin'));

// get all user
router.get(
    '/get-all-user',
    adminControllers.assignDataForFindUsers,
    adminControllers.getAllUsers,
    adminControllers.sendJsonForGetAll
);
// get  a user
router.get(
    '/get-a-user/:userEId',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser
);

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// quotes
// get all request
// request new quote
router.post(
    '/quotes/request-quotes/user/:userEId/:addressId',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    adminControllers.assignUserIdForUser,
    marketVendroControllers.getDataForQuote
);

// cancel medical market
router.patch(
    '/quotes/user/:userEId/cancel-quote/:quoteId',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    adminControllers.assignUserIdForUser,
    adminControllers.assignDataForGetJobs,
    quotesVendorControllers.assignDataForCancelReques,
    marketVendroControllers.updateMedcalquoterequestors,
    marketVendroControllers.sendJsonForUpdateOne
);

// cancel medical market
router.patch(
    '/quotes/user/:userEId/update-quote-status/:status/:quoteId',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    adminControllers.assignUserIdForUser,
    adminControllers.assignDataForGetJobs,
    quotesVendorControllers.assignDataForQuotesRequests,
    marketVendroControllers.updateMedcalquoterequestor,
    marketVendroControllers.sendJsonForUpdateOne
);

// ============================================================
module.exports = router;
