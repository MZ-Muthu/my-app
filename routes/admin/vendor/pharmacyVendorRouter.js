// ============================================================
// import packages
const express = require('express');

// ============================================================
// creaate router
const router = express.Router();

// ============================================================
// import utiliteies
const fileUpload = require('../../../util/fileUpload');
// ============================================================
// import controllers
const authControllers = require('../../../controllers/authControllers');
const adminControllers = require('../../../controllers/admin/adminControllers');
const pharmaceVendorControllers = require('../../../controllers/pharmacyControllers');

// ============================================================
// shared routers
router.use(authControllers.protect, authControllers.restrictTo('admin'));

// ============================================================
// update quote status
router.patch(
    '/update-request-status/:status/:vendorId/:quoteId',
    adminControllers.setModuleNameForPharmacy,
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    pharmaceVendorControllers.updateParmacyVendorReceivedRequest
);
// create my medicine details
router.post(
    '/add-medicine/:vendorId',
    adminControllers.setModuleNameForPharmacy,
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    pharmaceVendorControllers.assignDataForCreateMedicines,
    pharmaceVendorControllers.createNewMedicines,
    pharmaceVendorControllers.sendJsonForCreateOne
);
// ============================================================
// exports router
module.exports = router;
