// ============================================================
// import packages
const express = require('express');

// ============================================================
// creaate router
const router = express.Router();

// ============================================================
// import utilities
const fileUpload = require('../../../util/fileUpload');

// ============================================================
// import controllers
const authControllers = require('../../../controllers/authControllers');
const adminControllers = require('../../../controllers/admin/adminControllers');
const adminAmbulanceControllers = require('../../../controllers/admin/ambulanceContro');
const ambulanceControllers = require('../../../controllers/ambulanceControllers');
const ambulanceContro = require('../../../controllers/admin/ambulanceContro');
// create routes
router.use(authControllers.protect, authControllers.restrictTo('admin'));
// Ambulance
// ambulance drivers
router.patch(
    '/manage-ambulance-drivers/:vendorId/:type/:service',
    ambulanceContro.setDriverProfileSize,
    fileUpload.uploadSingleImage('driverProfile'),
    fileUpload.resizeSingleImage,
    fileUpload.uploadFilesinAWS,
    ambulanceControllers.checkValidAmbulanceServicesAndDrivers,
    adminAmbulanceControllers.updateAmbulaceServices
);

// ambulance facilities
router.patch(
    '/manage-ambulance-services/:vendorId/:type/:service',
    ambulanceControllers.checkValidAmbulanceServicesAndDrivers,
    adminAmbulanceControllers.updateAmbulaceServices
);

// get booking list
router.get(
    '/get-booking-history/:vendorId',
    adminAmbulanceControllers.assignDataToFindVendorAmbulanceBooking,
    adminAmbulanceControllers.getBookingSlots,
    adminAmbulanceControllers.sendJsonForAll
);

// update ambulance
router.patch(
    '/update-quote-status/:status/:vendorId/:quoteId',
    adminControllers.assignDataForFindAmbualnceServices,
    adminControllers.getVendorADeatails,
    adminControllers.assignUserIdAndPartnerId,
    ambulanceControllers.assignDataForServiceProvers,
    ambulanceControllers.updateServiceProviders,
    ambulanceControllers.sendJsonForUpdateById
);
// get a applicant
router.patch(
    '/assign-ambulance-driver/:quoteId/:userEId/:driverId/:ambulanceId',
    authControllers.protect,
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    adminControllers.assignUserIdForUser,
    ambulanceControllers.verifyAmbulanceDriver
);

// get advertisements
// ============================================================
module.exports = router;
