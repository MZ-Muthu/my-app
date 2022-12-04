const express = require('express');

const router = express.Router();

// ============================================================
// import controllers
const authControllers = require('../controllers/authControllers');
const partnerController = require('../controllers/partnerController');

// create new partner
router
    .route('/new-partner')
    .post(
        authControllers.protect,
        partnerController.checkAlreadyExistPartner,
        partnerController.validatePartnerData,
        partnerController.assignNewPartnerData,
        partnerController.createPartner,
        partnerController.sendJsoCreatedPartner
    );

// get all partner
router.get(
    '/get-my-partners/',
    authControllers.protect,
    partnerController.assignDataForGetPartners,
    partnerController.getAllAcceptedPartners,
    partnerController.sendJsonForGetAllSelectedquery
);

// get a partner
router.get(
    '/get-a-partner/:partnerId',
    authControllers.protect,
    partnerController.assignDataForGetAPartner,
    partnerController.getAPartner,
    partnerController.sendJsonForGetOne
);

// get a job categorie
router.get(
    '/get-a-doctor-categorie/:name',
    partnerController.assingDataforGetADoctorCategorie,
    partnerController.GetADoctorCategorie,
    partnerController.sendJsonForGetOne
);

// get doctors
router.get(
    '/get-doctors',
    partnerController.getDoctors,
    partnerController.sendJsonForGetAllQuery
);

module.exports = router;
