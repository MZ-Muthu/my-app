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
// vendor controllers
const onlineConsultancyVendorControllers = require('../../../controllers/onlineConsultancyControllers');

// ============================================================
// import utilities
const fileUpload = require('../../../util/fileUpload');

// ============================================================
// shared routes
router.use(authControllers.protect, authControllers.restrictTo('admin'));

// ============================================================
// mange routes
// manage schudles
router.patch(
    '/manage-availablity/:vendorId',
    adminControllers.assignDataForFindOnlineConsultancy,
    adminControllers.getVendorADeatails,
    adminControllers.assignDataforGetProperData,
    onlineConsultancyVendorControllers.checkTheDateandTimeisvalid,
    onlineConsultancyVendorControllers.assingConsultancyAvailablityData
);

// update consultancty status
router.patch(
    '/update-booking-status/:status/:vendorId/:bookingId',
    adminControllers.assignDataForFindOnlineConsultancy,
    adminControllers.getVendorADeatails,
    adminControllers.assignDataforGetProperData,
    onlineConsultancyVendorControllers.assignDataforUpdateConsultancyBookingStatus,
    onlineConsultancyVendorControllers.updateOnlineConsultancyBookingStatus,
    onlineConsultancyVendorControllers.sendJsonForUpdateOne
);

// ============================================================
// export router
module.exports = router;
