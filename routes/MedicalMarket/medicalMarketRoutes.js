// ============================================================
// import packages
const express = require('express');

// ============================================================
// creaate router
const router = express.Router();

// ============================================================
// import controllers
const authControllers = require('../../controllers/authControllers');
const medicalMarketControllers = require('../../controllers/medicalMarketControllers');

// ============================================================
// create routes

router
    .route('/')
    .get(
        authControllers.protect,
        medicalMarketControllers.getAllMedicalMarketServices,
        medicalMarketControllers.sendJsonAllData
    );
// create new store
// router.post(
//     '/new-medical-market',
//     authControllers.protect,
//     medicalMarketControllers.filterMedicalMarketStoreData,
//     medicalMarketControllers.checkValidVendorandPartnerMedicalMarket,
//     medicalMarketControllers.createNewMedicalMarketStore,
//     medicalMarketControllers.sendJsonForCreateOne
// );

// // blood bank
// router.patch(
//     '/update-medical-market',
//     authControllers.protect,
//     medicalMarketControllers.assignPartnerSearchData,
//     medicalMarketControllers.verifyValidPartner,
//     medicalMarketControllers.filterMedicalMarketStoreData,
//     medicalMarketControllers.assignDataForUpdatMedicalMarketServiceProvider,
//     medicalMarketControllers.updateMedicalMarketServiceProvider,
//     medicalMarketControllers.sendJsonForUpdateOne
// );

// update laborator routes
router.patch(
    '/update-market',
    authControllers.protect,
    medicalMarketControllers.filterMedicalMarket,
    medicalMarketControllers.assignPartnerSearchDataForUpdate,
    medicalMarketControllers.updateMarketService,
    medicalMarketControllers.sendJsonForUpdateOne
);

// router
//     .route('/:serviceId')
//     .patch(
//         authControllers.protect,
//         authControllers.restrictTo('admin'),
//         medicalMarketControllers.getOldData,
//         medicalMarketControllers.assignDataForUpdateMedicalMarketProducts,
//         medicalMarketControllers.updateMedicalMarket,
//         medicalMarketControllers.assignDataForUpdateAll,
//         medicalMarketControllers.updateRemainingHomeCareServices,
//         medicalMarketControllers.sendJsonForUpdateAll
//     );

router.post(
    '/new-medical-market-product',
    authControllers.protect,
    medicalMarketControllers.setImageSizeForMarketProduct,
    // medicalMarketControllers.verifyMedicalMarketProductService,
    medicalMarketControllers.assignDataForFindPartner,
    medicalMarketControllers.verifyValidPartner,
    medicalMarketControllers.verifyMarketProductData,
    medicalMarketControllers.saveFilesAsJbgForMarketProduct,
    medicalMarketControllers.saveMarketProductToAWS,
    medicalMarketControllers.createNewMarketProduct,
    medicalMarketControllers.sendServiceJson
);
// update arket product
router.patch(
    '/update-medical-market-product/:productId',
    authControllers.protect,
    medicalMarketControllers.setImageSizeForMarketProduct,
    // medicalMarketControllers.verifyMedicalMarketProductService,
    medicalMarketControllers.assignDataForFindPartner,
    medicalMarketControllers.verifyValidPartner,
    medicalMarketControllers.verifyMarketProductData,
    medicalMarketControllers.saveFilesAsJbgForMarketProduct,
    medicalMarketControllers.saveMarketProductToAWS,
    medicalMarketControllers.assignDataForUpdateMedicalMarketProduct,
    medicalMarketControllers.updateMarketProduct,
    medicalMarketControllers.sendServiceJson
);

// update hearing aid's order status
router.patch(
    '/update-order-status/:status/:orderId',
    authControllers.protect,
    medicalMarketControllers.assignPartnerSearchData,
    medicalMarketControllers.verifyValidPartner,
    medicalMarketControllers.assignDataforUpdateMarketProductStatus,
    medicalMarketControllers.mangeMedicalMarketOrder,
    medicalMarketControllers.sendJsonforUpdateOne
);

// update quote status
router.patch(
    '/update-quote-status/:quoteId',
    authControllers.protect,
    medicalMarketControllers.assignPartnerSearchData,
    medicalMarketControllers.verifyValidPartner,
    medicalMarketControllers.assignDataForUpdateStatus,
    medicalMarketControllers.updateMedcalquoterequestor,
    medicalMarketControllers.sendJsonForUpdateOne
);

// // update service
// router.patch(
//     '/update-service/:serviceId',
//     authControllers.protect,
//     medicalMarketControllers.assignPartnerSearchData,
//     medicalMarketControllers.verifyValidPartner,
//     medicalMarketControllers.assignDataForUpdateMedicalMarket,
//     medicalMarketControllers.updateHomeCareService,
//     medicalMarketControllers.sendJsonForUpdateOne
// );
router.delete(
    '/delete-service/:serviceId',
    authControllers.protect,
    medicalMarketControllers.assignPartnerSearchData,
    medicalMarketControllers.verifyValidPartner,
    medicalMarketControllers.deleteMedicalMarketService,
    medicalMarketControllers.sendServiceJson
);

// // get all routes
// router.post(
//     '/get-all-service',
//     authControllers.protect,
//     medicalMarketControllers.getAllMedicalMarketProduct,
//     medicalMarketControllers.sendJsonAll
// );

// get a route
router.get(
    '/get-a-product/:productId',
    authControllers.protect,
    // medicalMarketControllers.assignPartnerSearchData,
    // medicalMarketControllers.verifyValidPartner,
    medicalMarketControllers.assignGetAServiceData,
    medicalMarketControllers.findServiceById,
    medicalMarketControllers.checkPartnerStatus,
    medicalMarketControllers.sendJsonForPopulateOne
);

// get product daata
router.post(
    '/get-product-data',
    authControllers.protect,
    medicalMarketControllers.getMarketProductsData
);

// router.patch(
//     '/vendor-update/:quoteId',
//     authControllers.protect,
//     medicalMarketControllers.assignPartnerSearchData,
//     medicalMarketControllers.verifyValidPartner,
//     medicalMarketControllers.assigndataForUpdateQuote,
//     medicalMarketControllers.updateMedcalquoterequestor,
//     medicalMarketControllers.sendJsonForUpdateOne
// );

// get all product
router.get(
    '/get-all-products',
    authControllers.protect,
    medicalMarketControllers.assignDataForGetProducts,
    medicalMarketControllers.getAllProduct,
    medicalMarketControllers.sendJsonForFindAllWithPopulate
);

// ============================================================
// export route
module.exports = router;
