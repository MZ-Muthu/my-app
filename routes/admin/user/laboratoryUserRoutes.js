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
const laboratoryUserControllers = require('../../../controllers/laboratoryControllers');

// ============================================================
// create routes
// update expert service
router.patch(
    '/cancel-laboratory-booking/:userEId/:labId',
    authControllers.protect,
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    adminControllers.assignUserIdForUser,
    laboratoryUserControllers.assignDataforCancelBooking,
    laboratoryUserControllers.updateLaboratoryBooking,
    laboratoryUserControllers.sendJsonForUpdateOne
);

// ============================================================
// ============================================================
// export router
module.exports = router;
