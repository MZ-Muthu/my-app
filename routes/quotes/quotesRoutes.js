// ============================================================
// import libraries
const express = require('express');

// create route
const router = express.Router();

// ============================================================
// import controllers
const authControllers = require('../../controllers/authControllers');
const quotesControllers = require('../../controllers/quotesControllers');
const medicalMarketControllers = require('../../controllers/medicalMarketControllers');
const vendorControllers = require('../../controllers/vendorControllers');
// shared
router.use(authControllers.protect);
// ============================================================
// create job routes

// ============================================================
// create a quote
router.post(
    '/:from/request-quotes/',
    authControllers.protect,
    quotesControllers.assignDataForValidPartner,
    quotesControllers.verifyValidPartner,
    quotesControllers.postNewQuotes
);
// quotes
router.get(
    '/:from/quotes',
    authControllers.protect,
    vendorControllers.getPartner,
    medicalMarketControllers.getProductList,
    medicalMarketControllers.sendJsonForQuotesList
);

// quotelist
router.get(
    '/:from/quotes/lowest-quotes/:batchId',
    authControllers.protect,
    vendorControllers.getPartner,
    medicalMarketControllers.getTop3LowestQuotes,
    medicalMarketControllers.sendJsonForLowestQuotesList
);

// viewa a quote
router.get(
    '/:from/get-a-quote/:quoteId',
    authControllers.protect,
    vendorControllers.getPartner,
    medicalMarketControllers.getTop3LowestQuotes,
    medicalMarketControllers.sendJsonForLowestQuotesList
);

// get my quotes
router.get(
    '/get-my-quotes',
    authControllers.protect,
    medicalMarketControllers.getMyActiveQuotes
);

// get my quotes
router.get(
    '/get-a-quotes/:quoteId',
    authControllers.protect,
    quotesControllers.getAQuotes
);

// cancel medical market
router.patch(
    '/:from/cancel-quote/:quoteId',
    authControllers.protect,
    quotesControllers.assignDataForCancelReques,
    medicalMarketControllers.updateMedcalquoterequestors,
    medicalMarketControllers.sendJsonForUpdateOne
);

// cancel medical market
router.patch(
    '/:from/update-quote-status/:status/:quoteId',
    authControllers.protect,
    quotesControllers.assignDataForQuotesRequests,
    medicalMarketControllers.updateMedcalquoterequestor,
    medicalMarketControllers.sendJsonForUpdateOne
);

// ============================================================
// export job rote
module.exports = router;
