// ============================================================
// import libraris
const express = require('express');

// ============================================================
// create router
const router = express.Router();

// ============================================================
// import controllers
const secondOpinionControllers = require('../../controllers/secondOpinionControllers');
const authControllers = require('../../controllers/authControllers');

// ============================================================
// // create routes
router.use(authControllers.protect);

// update partner statau
// router.patch(
//     '/update-second-opinion',
//     secondOpinionControllers.filterSecondOpinionData,
//     secondOpinionControllers.assignPartnerSearchData,
//     secondOpinionControllers.updateSecondOpinion,
//     secondOpinionControllers.sendJsonForUpdateOne
// );

// get vendor slots
// router.get(
//     '/vendor-slots',
//     secondOpinionControllers.assignDataForGetPartner,
//     secondOpinionControllers.verifyValidParter,
//     secondOpinionControllers.assignPartnerBody,
//     secondOpinionControllers.assignDataForFindMyAvailablitySlots,
//     secondOpinionControllers.getMyAvailablity,
//     secondOpinionControllers.getAvailablityDays,
//     secondOpinionControllers.sendJsonForGetVendorSlots
// );

// get booking data
// router.get(
//     '/booking-management',
//     secondOpinionControllers.assignDataForGetPartner,
//     secondOpinionControllers.verifyValidParter,
//     secondOpinionControllers.getSecondOpinionServiceBookings,
//     secondOpinionControllers.sendJsonForDocs
// );

// create new sponser
router.post(
    '/new-sponsor',
    secondOpinionControllers.assignDataForGetPartner,
    secondOpinionControllers.verifyValidParter,
    secondOpinionControllers.assignDataForCreateNewOpinionSponser,
    secondOpinionControllers.createNewOpinionSponser,
    secondOpinionControllers.sendJsonForCreateOne
);

// delete sponser
router.delete(
    '/delete-sponsor/:sponsorId',
    secondOpinionControllers.assignDataForGetPartner,
    secondOpinionControllers.verifyValidParter,
    secondOpinionControllers.deleteSponser
);

// select sponser
router.patch(
    '/select-sponser/:sponserId',
    secondOpinionControllers.assignDataForGetPartner,
    secondOpinionControllers.verifyValidParter,
    secondOpinionControllers.verifyAndSelectSponser
);

// // update booking staua
// router.patch(
//     '/manage-booking-status/:status/:bookingId',
//     secondOpinionControllers.assignDataForGetPartner,
//     secondOpinionControllers.verifyValidParter,
//     secondOpinionControllers.assignDataforUpdateSecondOpinionBookingStatus,
//     secondOpinionControllers.updateSecondOpininCall,
//     secondOpinionControllers.sendJsonForUpdateOne
// );

// // get all sponser
// router.get(
//     '/get-specialits/:category',
//     secondOpinionControllers.getOpininionAlldoctors
// );
// get a router
// router.get(
//     '/get-a-doctor/:serviceId/',
//     secondOpinionControllers.getaDoctor,
//     secondOpinionControllers.sendJsonForDocs
// );

// update status
router.patch(
    '/update-availability',
    secondOpinionControllers.assignDataForGetPartner,
    secondOpinionControllers.verifyValidParter,
    secondOpinionControllers.assignDataForUpdateTheStatus,
    secondOpinionControllers.updateOpinionStatus,
    secondOpinionControllers.sendJsonForUpdateOne
);
// get active doctors list
router.get(
    '/specialists/:categorie',
    secondOpinionControllers.getAvailableDoctorsSpecilits
);

// get a doctor
router.get(
    '/view-doctor/:doctorId',
    secondOpinionControllers.getADoctorDetails
);

// get my sponser
router.get(
    '/my-sponser-list',
    secondOpinionControllers.assignDataForGetPartner,
    secondOpinionControllers.verifyValidParter,
    secondOpinionControllers.assignDataForgetMySponserList,
    secondOpinionControllers.getAllOpinionSponcers,
    secondOpinionControllers.sendJsonForGetAll
);

// manage availaity
// router.patch(
//     '/manage-availablity/',
//     secondOpinionControllers.checkTheDateandTimeisvalid,
//     secondOpinionControllers.checkValidVendorandPartner,
//     secondOpinionControllers.assingConsultancyAvailablityData
// );

// ============================================================
// export router
module.exports = router;
