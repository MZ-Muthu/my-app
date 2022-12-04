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
const secondOpitionVendorControllers = require('../../../controllers/secondOpinionControllers');

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
    adminControllers.assignDataForOptionion,
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminControllers.assignUserIdAndPartnerId,
    secondOpitionVendorControllers.assignDataForUpdateTheStatus,
    secondOpitionVendorControllers.updateOpinionStatus,
    secondOpitionVendorControllers.sendJsonForUpdateOne
);

// // update speak to us counsilar stattus
// select sponser
router.patch(
    '/select-sponser/:vendorId/:sponserId',
    adminControllers.assignDataForOptionion,
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminControllers.assignUserIdAndPartnerId,
    secondOpitionVendorControllers.assignDataForGetPartner,
    secondOpitionVendorControllers.verifyAndSelectSponser
);

// manage second opionion availablity
router.patch(
    '/manage-slots-availablity/:vendorId',
    adminControllers.assignDataForOptionion,
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminControllers.assignUserIdAndPartnerId,
    secondOpitionVendorControllers.checkTheDateandTimeisvalid,
    secondOpitionVendorControllers.assingConsultancyAvailablityData
);

// update consultancty status
router.patch(
    '/update-booking-status/:status/:vendorId/:bookingId',
    adminControllers.assignDataForOptionion,
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    secondOpitionVendorControllers.assignDataforUpdateSecondOpinionBookingStatus,
    secondOpitionVendorControllers.updateSecondOpininCall,
    secondOpitionVendorControllers.sendJsonForUpdateOne
);

// ============================================================
// export router
module.exports = router;
