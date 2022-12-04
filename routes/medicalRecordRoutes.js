// ============================================================
// import library
const express = require('express');

// ============================================================
// create router
const router = express.Router();

const fileUpload = require('../util/fileUpload');
// ============================================================
// controllers
const authControllers = require('../controllers/authControllers');
const medicalRecordControllers = require('../controllers/medicalRecordsControllers');

// ============================================================
// create routes

// get all records
router.get(
    '/get-my-records',
    authControllers.protect,
    medicalRecordControllers.assignDataForGetAllMyRecords,
    medicalRecordControllers.getAllMedicalRecords,
    medicalRecordControllers.sendJsonForGetAllRecords
);

// get a records
router.get(
    '/get-a-record/:recordId',
    authControllers.protect,
    medicalRecordControllers.assignDataForGetARecord,
    medicalRecordControllers.getARecords,
    medicalRecordControllers.sendJsonForFindOneWithPopulate
);

router.post(
    '/new-record',
    authControllers.protect,
    fileUpload.uploadSingleDocument('docs'),
    medicalRecordControllers.assignNewServiceData,
    medicalRecordControllers.assignDocumentName,
    fileUpload.uploadDocumentinAWS,
    medicalRecordControllers.createNewService,
    medicalRecordControllers.sendServiceJson
);

router.patch(
    '/update-record/:serviceId',
    authControllers.protect,
    medicalRecordControllers.assignRecordUpdateData,
    medicalRecordControllers.updateMedicalRecords,
    medicalRecordControllers.sendJsonForupdatedMedicalRecords
);

router.delete(
    '/delete-record/:serviceId',

    medicalRecordControllers.deleteRecords
);

router.get(
    '/record-list/:recordId',
    authControllers.protect,
    medicalRecordControllers.assignDataForGetMemberRecords,
    medicalRecordControllers.getMemberMedicalRecords,
    medicalRecordControllers.sendJsonForFindAll
);

// ============================================================
// export routes
module.exports = router;
