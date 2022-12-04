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
const medicalMarketVendorControllers = require('../../../controllers/medicalMarketControllers');

// ============================================================
// create routes
// update expert service
// cancel product
router.patch(
    '/product/cancel-order/:userEId/:orderId',
    authControllers.protect,
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    adminControllers.assignUserIdForUser,
    medicalMarketVendorControllers.assignDataForCancelMarketProductOrderService,
    medicalMarketVendorControllers.mangeMedicalMarketOrder,
    medicalMarketVendorControllers.sendJsonforUpdateOne
);

// ============================================================
// ============================================================
// export router
module.exports = router;
