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
const pharmacyUserControllers = require('../../../controllers/pharmacyControllers');

// ============================================================
// create routes
// update expert service
router.patch(
    '/update-request-status/:status/:userEId/:requestId',
    authControllers.protect,
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    adminControllers.assignUserIdForUser,
    pharmacyUserControllers.updatePharmacyRequestStatus
);

// ============================================================
// ============================================================
// export router
module.exports = router;
