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
const marketVendorControllers = require('../../../controllers/medicalMarketControllers');
// ============================================================
// shared routers
router.use(authControllers.protect, authControllers.restrictTo('admin'));

// create new market product
router.post(
    '/new-medical-market-product/:vendorId',
    authControllers.protect,
    marketVendorControllers.setImageSizeForMarketProduct,
    adminControllers.setModuleNameForMarket,
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminControllers.assignUserIdAndPartnerId,
    marketVendorControllers.verifyMarketProductData,
    marketVendorControllers.saveFilesAsJbgForMarketProduct,
    marketVendorControllers.saveMarketProductToAWS,
    marketVendorControllers.createNewMarketProduct,
    marketVendorControllers.sendServiceJson
);

// update arket product
router.patch(
    '/update-medical-market-product/:vendorId/:productId',
    authControllers.protect,
    marketVendorControllers.setImageSizeForMarketProduct,
    adminControllers.setModuleNameForMarket,
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminControllers.assignUserIdAndPartnerId,
    marketVendorControllers.verifyMarketProductData,
    marketVendorControllers.saveFilesAsJbgForMarketProduct,
    marketVendorControllers.saveMarketProductToAWS,
    marketVendorControllers.assignDataForUpdateMedicalMarketProduct,
    marketVendorControllers.updateMarketProduct,
    marketVendorControllers.sendServiceJson
);

// update hearing aid's order status
router.patch(
    '/update-order-status/:status/:vendorId/:orderId',
    adminControllers.setModuleNameForMarket,
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminControllers.assignUserIdAndPartnerId,
    marketVendorControllers.assignDataforUpdateMarketProductStatus,
    marketVendorControllers.mangeMedicalMarketOrder,
    marketVendorControllers.sendJsonforUpdateOne
);

// update quote status
router.patch(
    '/update-quote-status/:vendorId/:quoteId',
    adminControllers.setModuleNameForMarket,
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminControllers.assignUserIdAndPartnerId,
    marketVendorControllers.assignDataForUpdateStatus,
    marketVendorControllers.updateMedcalquoterequestor,
    marketVendorControllers.sendJsonForUpdateOne
);

// ============================================================
// exports router
module.exports = router;
