// ============================================================
// import libraries
const express = require('express');

// create route
const router = express.Router();

// ============================================================
// utilities
const fileUpload = require('../../util/fileUpload');

// ============================================================
// import controllers
const authControllers = require('../../controllers/authControllers');
const pharmacyControllers = require('../../controllers/pharmacyControllers');

// ============================================================
// shared
router.use(authControllers.protect);

// ============================================================
// create routes

// update laborator routes
router.patch(
    '/update-pharmacy',
    pharmacyControllers.filterNewPharmacy,
    pharmacyControllers.assignPartnerSearchData,
    // pharmacyControllers.verifyValidPartner,
    // pharmacyControllers.assignValidPartnerSearchData,
    pharmacyControllers.updatePharmacyService,
    pharmacyControllers.sendJsonForUpdateOne
);

// get all pharmcay categories
router.get(
    '/pharmacy-categories',
    pharmacyControllers.getAllPharmacys,
    pharmacyControllers.sendJsonForGetallFilter
);

// create my medicine details
router.post(
    '/add-medicine',
    pharmacyControllers.assignPartnerSearch,
    pharmacyControllers.verifyValidPartner,
    pharmacyControllers.assignDataForCreateMedicines,
    pharmacyControllers.createNewMedicines,
    pharmacyControllers.sendJsonForCreateOne
);

// get my requests
router.get(
    '/my-medicine-requests',
    pharmacyControllers.assignPartnerSearch,
    pharmacyControllers.verifyValidPartner,
    pharmacyControllers.getMyMedicineRequests,
    pharmacyControllers.sendJsonForDocs
);

// update quote status
router.patch(
    '/update-request-status/:status/:quoteId',
    pharmacyControllers.assignPartnerSearch,
    pharmacyControllers.verifyValidPartner,
    pharmacyControllers.updateParmacyVendorReceivedRequest
);

// get all pharmacy products
router.get(
    '/products',
    pharmacyControllers.getAllPharmacyProducts,
    pharmacyControllers.sendJsonForGetallFilter
);

// ============================================================
// export route
module.exports = router;
