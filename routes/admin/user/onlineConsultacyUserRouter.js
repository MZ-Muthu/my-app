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
const vendorOnlineConsultancyControllers = require('../../../controllers/onlineConsultancyControllers');

// ============================================================
// create routes
// ============================================================
// shared
router.use(authControllers.protect, authControllers.restrictTo('admin'));

// update homecare service
router.patch(
    '/update-booking-status/:status/:userEId/:slotId',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    adminControllers.assignUserIdForUser,
    vendorOnlineConsultancyControllers.assignDataForCancelConsultantReques,
    vendorOnlineConsultancyControllers.updateOnlineConsultancyBookingStatus,
    vendorOnlineConsultancyControllers.sendJsonForUpdateOne
);

// ============================================================
// ============================================================
// export router
module.exports = router;
