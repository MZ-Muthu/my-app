const express = require('express');

const router = express.Router();

// ============================================================
// import utilities
const fileUpload = require('../util/fileUpload');

// ============================================================
// Import Controllers
const authControllers = require('../controllers/authControllers');
const homecareServiceControllers = require('../controllers/homecareServiceControllers');
const meetExpertControllers = require('../controllers/meetTheExportControllers');
const deaddictionControllers = require('../controllers/deAddictionControllers');
const donnationControllers = require('../controllers/donnationControllers');
const userControllers = require('../controllers/userControllers');
const fitnessControllers = require('../controllers/fitnessControllers');
const hearingAidControllers = require('../controllers/hearingControllers');
const opticalControllers = require('../controllers/opticalControllers');
const jobPortalControllers = require('../controllers/jobPortalControllers');
const medicalMarketControllers = require('../controllers/medicalMarketControllers');
const onlineConsultancyControllers = require('../controllers/onlineConsultancyControllers');
const pillRemainderControllers = require('../controllers/pillReminderControllers');
const bloodDonationControllers = require('../controllers/bloodDonationControllers');
const ambulanceControllers = require('../controllers/ambulanceControllers');
const laboratoryControllers = require('../controllers/laboratoryControllers');
const pharmacyControllers = require('../controllers/pharmacyControllers');
const secondOpinionControllers = require('../controllers/secondOpinionControllers');
const oneUsControllers = require('../controllers/oneUsControllers');

router.post('/user-otp', authControllers.userOtpGenerate);
// router.route('/signUp').post(authControllers.signup);
// router.post('/login', authControllers.login);
router.patch(
    '/update-user',
    authControllers.protect,
    userControllers.assignDataForUpdateUser,
    userControllers.updateUser,
    userControllers.sendJsonforUpdateOne
);

router.patch('/verify-user', authControllers.verifyUserOtp);
// get user data
router.get(
    '/get-me',
    authControllers.protect,
    userControllers.sendJsonForGetUser
);
// ============================================================
// book home care service

router.post(
    '/apply-home-care-service/:serviceid/:address',
    authControllers.protect,
    // homecareServiceControllers.assignHomeServiceApplicationSearchQuery,
    // homecareServiceControllers.assignDataForHomeCareServiceApplication,
    // homecareServiceControllers.assignHomeCareServiceApplicants,
    homecareServiceControllers.verifyandAssignDataForHomecareServiceApplies,
    homecareServiceControllers.createNewHomeCareServiceApplicants,
    homecareServiceControllers.sendJsonForNewHomecareServiceApplicants
);
// get my service
router.get(
    '/my-homecare-bookings',
    authControllers.protect,
    homecareServiceControllers.assignDataForGetMyHomecareServices,
    homecareServiceControllers.getAllMyHomecareService,
    homecareServiceControllers.sendJsonGetAllMyService
);

// cancel homecare service
router.patch(
    '/cancel-homecare-booking/:homecareId',
    authControllers.protect,
    homecareServiceControllers.assignDataForCancelHomecareServiceFromUser,
    homecareServiceControllers.cancelHomecareService,
    homecareServiceControllers.sendJsonForHomecareCancelRequest
);

// ============================================================
// book Meet the Expert
router.post(
    '/book-expert/:serviceId/:address',
    authControllers.protect,
    // meetExpertControllers.assignMeetExpertApplicationSearchQuery,
    // meetExpertControllers.assignDataForMeetExpertServiceApplication,
    // meetExpertControllers.assignMeetExpertServiceApplicants,

    meetExpertControllers.verifyaddressandPartner,
    meetExpertControllers.createNewExpertServiceApplicants,
    meetExpertControllers.sendJsonForNewExpertServiceApplicants
);

// get my applications
router.get(
    '/my-experts-booking',
    authControllers.protect,
    // meetExpertControllers.assignDataForGetMyExperts,
    meetExpertControllers.getAllMyExpertService,
    meetExpertControllers.sendJsonForDocs
);

// cancel deaddication service
router.patch(
    '/cancel-expert-booking/:expertId',
    authControllers.protect,
    meetExpertControllers.assignDataForCancelExpertFromUser,
    meetExpertControllers.cancelExpertService,
    meetExpertControllers.sendJsonForUpdateOne
);

// ============================================================
// book de-addiction center
router.post(
    '/book-deaddiction/:serviceid',
    authControllers.protect,
    deaddictionControllers.assignDeAddictionSearchQuery,
    deaddictionControllers.checkValidPartner,
    deaddictionControllers.assignDeaddictionSaveQuery,
    deaddictionControllers.createNewDeaddictionApplicants,
    deaddictionControllers.sendServiceJson
);
// get my applications
router.get(
    '/my-deaddiction-bookings',
    authControllers.protect,
    deaddictionControllers.getAllMyDeaddictionBookings,
    deaddictionControllers.sendAllFilterDataJson
);

// cancel deaddication service
router.patch(
    '/cancel-deaddiction-service/:serviceId/',
    authControllers.protect,
    deaddictionControllers.assignDataForCancelDeaddictionService,
    deaddictionControllers.cancelDeaddictionService,
    deaddictionControllers.sendJsonForDeaddictionCancelRequest
);
// ============================================================
// donnation and charity
// new donnor
router.post(
    '/new-fund-donner/',
    authControllers.protect,
    donnationControllers.assignNewDonnationdata,
    donnationControllers.createNewDonation,
    donnationControllers.updateRequestorDonnation,
    donnationControllers.sendJsonSerive
);
// new donnor
router.post(
    '/new-product-donner/:requesterId',
    authControllers.protect,
    donnationControllers.assignNewProductDonnationdata,
    donnationControllers.createNewIndividualProductDonation,
    donnationControllers.updateProductDonationRequest,
    donnationControllers.sendJsonSerive
);

// update new product donnaer status
router.patch(
    '/update-requester-delivery-status/:requestId',
    authControllers.protect,
    donnationControllers.updateIndividualProductRequstDeliveryStatus
);

// update patient product recivieng status
router.patch(
    '/update-patient-receive-status/:requestId',
    authControllers.protect,
    donnationControllers.updateIndividualProductReciveingStatus
);

// new donnation requestor
router.post(
    '/new-donation-requester',
    authControllers.protect,
    donnationControllers.uploadFundDonationRequesterFileUpload,
    donnationControllers.assignrequestordata,
    donnationControllers.createNewFundDonationRequsterDataName,
    donnationControllers.createNewDonationRequestor,
    donnationControllers.sendJsonSerive
);

// new product donner requesster
router.post(
    '/new-product-donation-requester',
    authControllers.protect,
    donnationControllers.uploadProductDonationRequesterFileUpload,
    donnationControllers.assignDataForCreateNewProductRequester,
    donnationControllers.createNewProductDonationRequsterDataName,
    donnationControllers.createNewProductDonationRequester,
    donnationControllers.sendJsonSerive
);

// new product donner
router.post(
    '/new-product-donner',
    authControllers.protect,
    userControllers.setDonatedProductImage,
    fileUpload.uploadSingleImage('docs'),
    fileUpload.resizeSingleImage,
    donnationControllers.assignproductDonnerData,
    donnationControllers.assingImageNameForProductDonner,
    fileUpload.uploadFilesinAWS,
    donnationControllers.createNewProductDonation,
    donnationControllers.sendJsonSerive
);

// my donation request
router.get(
    '/my-donation-requests',
    authControllers.protect,
    donnationControllers.mydonationRequests
);

// my donataions
router.get(
    '/my-donations',
    authControllers.protect,
    donnationControllers.myDonations,
    donnationControllers.sendJsonFoFundRequests
);

// my product donations
router.get('/my-product-donations', authControllers.protect);

// previous month average
router.get(
    '/last-month-average',
    authControllers.protect,
    donnationControllers.caluculateMonthlyAverage,
    donnationControllers.sendJsonForDocs
    // donnationControllers.assignDataForAllWithSelectedData,
    // donnationControllers.getAllDonationRequests,
    // donnationControllers.assignDataForDonnationRequest,
    // donnationControllers.sendJsonSEriveDataWithSelectedData
);

// get all fund requester
router.get(
    '/donation/fund/requesters',
    authControllers.protect,
    donnationControllers.getAllDonationRequesters,
    donnationControllers.sendJsonForDocs
);

// get all product requsers
router.get(
    '/donation/product/requesters',
    authControllers.protect,
    donnationControllers.getAllProductRequesters,
    donnationControllers.sendJsonForDocs
);
// get all fund requester
router.get(
    '/donation/fund/requesters',
    authControllers.protect,
    donnationControllers.getAllDonationRequesters,
    donnationControllers.sendJsonForDocs
);

// ============================================================
router.post(
    '/book-hearingaid-hosptial/:hospitalId',
    authControllers.protect,
    hearingAidControllers.verifyandAssignDataForBookHospital,
    hearingAidControllers.bookHearingAidHospital,
    hearingAidControllers.sendServiceJson
);

// cancel hearing ai dhospital booking
router.patch(
    '/cancel-hearingaid-hospital/:bookingId',
    authControllers.protect,
    hearingAidControllers.assignDataforCanceHearingaidHospital,
    hearingAidControllers.updateHearingaidHospitalBookingStatus,
    hearingAidControllers.sendServiceUpdateJson
);

router.post(
    '/order-hearingaid/:id/:address',
    authControllers.protect,
    userControllers.orderHearingAid
);

// get all my hearing aid
router.get(
    '/hearinaid/get-my-orders',
    authControllers.protect,
    // hearingAidControllers.assignDataForGetMyHearingaidOrders,
    hearingAidControllers.getMyhearringAidOrder,
    hearingAidControllers.sendJsonforDocs
);

// get a hearing aid
router.get(
    '/hearingaid/get-a-order/:orderId',
    authControllers.protect,
    hearingAidControllers.assignDataforGetAhearingAid,
    hearingAidControllers.getAHearingAidOrder,
    hearingAidControllers.sendJsonForGetOne
);

// get all hearing aid hospital bookinga
router.get(
    '/hearingaid/get-my-hospital-bookings',
    authControllers.protect,
    // hearingAidControllers.assignDataForHospitalBooking,
    hearingAidControllers.getAllHearingaidHospitalBooking,
    hearingAidControllers.sendJsonforDocs
);

// get a hearing aid booking
router.get(
    '/hearingaid/get-a-hospital-booking/:bookingId',
    authControllers.protect,
    hearingAidControllers.assignDataForGetAheairnAidHospitalBooking,
    hearingAidControllers.getAHearingAidHospitalBooking,
    hearingAidControllers.sendJsonForFindOneWithPopulte
);

// cancel product
router.patch(
    '/cancel-hearingaid/:orderId',
    authControllers.protect,
    userControllers.assignDataForCancelHearingAidOrderService,
    userControllers.updateHearingAidOrder,
    userControllers.sendJsonForUpdateMembers
);
// order differtnly abled prodct
router.post(
    '/order-differently-abled/:id/:address',
    authControllers.protect,
    userControllers.orderDifferentlyAbledProduct
);

// cancel differenly abled product
router.patch(
    '/cancel-differently-abled/:orderId',
    authControllers.protect,
    userControllers.assignDataForCancelDifferentlyAbledOrderService,
    userControllers.updateDifferentlyAbledOrder,
    userControllers.sendJsonForUpdateMembers
);
// get all my hearing aid
router.get(
    '/differentlyabled/get-my-orders',
    authControllers.protect,
    // hearingAidControllers.assignDataForGetMyDifferenlyAbledOrders,
    // hearingAidControllers.getMyDifferentlyAbledOrder,
    hearingAidControllers.getMyDifferentlyAbledOrders,
    hearingAidControllers.sendJsonForSendOrders
);

// get a hearing aid
router.get(
    '/differentlyabled/get-a-order/:orderId',
    authControllers.protect,
    hearingAidControllers.assignDataforGetAhDifferetnlyAbled,
    hearingAidControllers.getADifferentlyAbledOrder,
    hearingAidControllers.sendJsonForGetOne
);
// get a hearing aid
router.get(
    '/hearingaid/get-a-order/:orderId',
    authControllers.protect,
    hearingAidControllers.assignDataforGetAhearingAid,
    hearingAidControllers.getAHearingAidOrder,
    hearingAidControllers.sendJsonForGetOne
);
// cancel product
router.patch(
    '/cancel-hearingaid/:orderId',
    authControllers.protect,
    userControllers.assignDataForCancelHearingAidOrderService,
    userControllers.updateHearingAidOrder,
    userControllers.sendJsonForUpdateMembers
);

// ============================================================
///////////////////Fitness
// set goals
router.put(
    '/fitness/set-goals/',
    authControllers.protect,
    fitnessControllers.assignDataForSetGoals,
    fitnessControllers.createNewGoal,
    fitnessControllers.assignDataforUpserGoalReport,
    fitnessControllers.upsertGoalReport,
    fitnessControllers.sendJsonService
);

// get goal report
router.get(
    '/fitness/get-today-goal',
    authControllers.protect,
    fitnessControllers.assignDataforGetTodayGoald,
    fitnessControllers.getMyGoal,
    fitnessControllers.sendJsonForGetOne
);

// set goal report
router.post(
    '/fitness/set-goal-report/',
    authControllers.protect,
    fitnessControllers.assignDataForSetReports,
    fitnessControllers.createNewGoalReport,
    fitnessControllers.sendjsonforcreateOne
);

// ============================================================
///////////// reviews
// Home care reviews
router.patch(
    '/homecare/review/:homecareId',
    authControllers.protect,
    homecareServiceControllers.assignGetAServiceData,
    // homecareServiceControllers.findServiceById,
    homecareServiceControllers.assingHomecareReviewData,
    homecareServiceControllers.createHomecareReview,
    homecareServiceControllers.updateReviewAverage
);

// Home care reviews
router.patch(
    '/expert/review/:expertId',
    authControllers.protect,
    meetExpertControllers.assignDataExpertServiceIsValid,
    meetExpertControllers.checkValidExpertService,
    meetExpertControllers.assingExpertReviewData,
    meetExpertControllers.createExpertReview,
    meetExpertControllers.updateReviewAverage
);

//De-addication reviews
router.patch(
    '/deaddiction/review/:serviceId',
    authControllers.protect,
    deaddictionControllers.assignGetAServiceData,
    deaddictionControllers.findServiceById,
    deaddictionControllers.assingDeAddictionReviewData,
    deaddictionControllers.createDeaddictionReview,
    deaddictionControllers.updateReviewAverage
);

// Hearing AID review
router.patch(
    '/hearingaid/review/:serviceId',
    authControllers.protect,
    hearingAidControllers.assignGetAServiceData,
    hearingAidControllers.findServiceById,
    hearingAidControllers.assingDeAddictionReviewData,
    hearingAidControllers.createHearingAIDReview,
    hearingAidControllers.updateReviewAverage
);

// ============================================================
// ============================================================
// user address
router.post(
    '/new-address',
    authControllers.protect,
    userControllers.assignNewAddressData,
    userControllers.newAddress,
    userControllers.sendServiceJson
);
// get all my user address
router.get(
    '/address/get-my-addresses',
    authControllers.protect,
    userControllers.assignDataForGetAllAddress,
    userControllers.getAllUserAddress,
    userControllers.sendJsonAllAddress
);

// delete my address
router.delete(
    '/address/delete-my-address/:addressId',
    authControllers.protect,
    userControllers.assignDataForDeleteOne,
    userControllers.deleteOneAddress,
    userControllers.sendJsonForDeleteOne
);

// ============================================================
// get product and address data
router.get(
    '/get-address-and-product/:id/:address',
    authControllers.protect,
    userControllers.getProductAddressData
);

// ============================================================
// add members
router.post(
    '/add-member',
    authControllers.protect,
    userControllers.setProfileImage,
    fileUpload.uploadSingleImage('profile'),
    fileUpload.resizeSingleImage,
    userControllers.assignDataForAddNewMembers,
    userControllers.assignImageNameForMemberProfile,
    fileUpload.uploadFilesinAWS,
    userControllers.createNewMember,
    userControllers.sendJsonForAddNewMembers
);

// update members
router.patch(
    '/select-member/:type/:memberId',
    authControllers.protect,
    userControllers.assignDataForManageMembers,
    userControllers.updateMembers,
    userControllers.sendJsonForUpdateMembers
);
// delete members
router.delete(
    '/delete-member/:memberId',
    authControllers.protect,
    userControllers.deleteMember
);

// get all member
router.get(
    '/get-all-members',
    authControllers.protect,
    userControllers.assignDataForGetMember,
    userControllers.getAllmember,
    userControllers.sendJsonAllAddress
);
// ============================================================
// opticals
// order opticals
router.post(
    '/order-optical/:id/:address',
    authControllers.protect,
    opticalControllers.orderOpticals
);
// get my orders
router.get(
    '/opticals/my-orders',
    authControllers.protect,
    opticalControllers.getMyOpticalOrders,
    opticalControllers.sendJsonforGetOpticalOrders
);
// get my orders
router.get(
    '/opticals/my-bookings',
    authControllers.protect,
    opticalControllers.getMyOpticalBooking,
    opticalControllers.sendJsonforGetOpticalBooking
);
// cancel product
router.patch(
    '/cancel-opticals-order/:orderId',
    authControllers.protect,
    opticalControllers.assignDataForCancelOpticalOrderService,
    opticalControllers.updateOpticalOrder,
    opticalControllers.sendJsonforUpdateOne
);
//  create optical booking
router.post(
    '/book-optical/:serviceId',
    authControllers.protect,
    opticalControllers.assigndataForCheckValidOpticalData,
    opticalControllers.findOneData,
    opticalControllers.assignDataForBookOpticals,
    opticalControllers.bookOpticals,
    opticalControllers.sendServiceJson
);
// cancel requrest
router.patch(
    '/cancel-opticals-booking/:bookingId',
    authControllers.protect,
    opticalControllers.assignDataForCancelOpticalBookService,
    opticalControllers.cancelOpticalBooking,
    opticalControllers.sendJsonforUpdateOne
);

// Hearing AID review
router.patch(
    '/opticals/review/:serviceId',
    authControllers.protect,
    opticalControllers.assignGetAServiceData,
    opticalControllers.findServiceById,
    opticalControllers.assingDOpticalsData,
    opticalControllers.createOpticalsReview,
    opticalControllers.updateReviewAverage
);

// ============================================================
// create new job
router.post(
    '/post-new-job',
    authControllers.protect,
    jobPortalControllers.assignDataForCreateNewJobPostUser,
    jobPortalControllers.createNewPost,
    jobPortalControllers.sendJsonForCreateOne
);

router.post(
    '/apply-new-job/:serviceId',
    authControllers.protect,
    jobPortalControllers.assingDataforSearchAJob,
    jobPortalControllers.applyNewJob,
    jobPortalControllers.sendJsonForCreateOne
);

// get my job applications
router.get(
    '/jobportal/get-my-job-applications',
    authControllers.protect,
    jobPortalControllers.getMyJobApplications,
    jobPortalControllers.sendJsonForApp
);

// view my job
router.get(
    '/get-job-applicants/:jobId',
    authControllers.protect,
    jobPortalControllers.getMyJobApplicantsUser
);

//  get a applicatn
router.get(
    '/get-a-applicant/:jobId/:applicantId',
    authControllers.protect,
    jobPortalControllers.getAUserApplicant,
    jobPortalControllers.sendJsonForApp
);
// update applicant status
router.patch(
    '/update-applicant-status/:status/:jobId/:applicantId',
    authControllers.protect,
    jobPortalControllers.getAUserApplicant,
    jobPortalControllers.updateApplicantStatus
);
// check if the userData was already exist
router.get(
    '/jobportal/get-user-data',
    authControllers.protect,
    jobPortalControllers.checkifTheUserAlreadyExist,
    jobPortalControllers.sendJsonForUserProfileDocs
);
// check if the userData was already exist
router.post(
    '/jobportal/create-user-data',
    authControllers.protect,
    jobPortalControllers.createUserData
);

router.patch(
    '/jobportal/update-user-data/',
    authControllers.protect,
    jobPortalControllers.updateUserPesonalDetails
);

// ============================================================
// medical market review
router.patch(
    '/market/review/:serviceId',
    authControllers.protect,
    medicalMarketControllers.assignGetAMarketData,
    medicalMarketControllers.findServiceById,
    medicalMarketControllers.assingDMarketData,
    medicalMarketControllers.createOpticalsReview,
    medicalMarketControllers.updateReviewAverage
);

// create new cart
router.post(
    '/market/product/add-to-cart/:productId',
    authControllers.protect,
    medicalMarketControllers.verifyProductandcheckuser,
    medicalMarketControllers.createNewCart,
    medicalMarketControllers.sendServiceJson
);

// get my carts
router.get(
    '/market/product/my-carts',
    authControllers.protect,
    medicalMarketControllers.getMyCarts,
    medicalMarketControllers.sendJsonForCarts
);

// get my whishslist
router.get(
    '/market/product/my-wishlists',
    authControllers.protect,
    medicalMarketControllers.getMyMarketWishlists,
    medicalMarketControllers.sendJsonForWishLists
);

// get my order
router.get(
    '/market/product/my-orders',
    authControllers.protect,
    medicalMarketControllers.getMyMarketOrders,
    medicalMarketControllers.sendJsonFofGetMyOrders
);

// update cart
router.patch(
    '/market/product/update-cart/:cartId',
    authControllers.protect,
    medicalMarketControllers.checkCartDataForUpdate,
    medicalMarketControllers.updateProductCart,
    medicalMarketControllers.sendJsonForUpdateOne
);

// delete dart
router.delete(
    '/market/product/delete-cart/:productId',
    authControllers.protect,
    medicalMarketControllers.deleteMarketProductCart
);

// create new wishlist
router.post(
    '/market/product/add-to-wishlist/:productId',
    authControllers.protect,
    medicalMarketControllers.verifyProductandcheckuserWishlist,
    medicalMarketControllers.createNewWhishlist,
    medicalMarketControllers.sendServiceJson
);

// delete wishlist
router.delete(
    '/market/product/delete-wishlist/:productId',
    authControllers.protect,
    medicalMarketControllers.deleteMarketProductWishlist
);

// move wishlist to cart
router.post(
    '/market/product/wishlist-to-cart/:productId',
    authControllers.protect,
    medicalMarketControllers.assignDataForCheckValidMarketWishlist,
    medicalMarketControllers.findOneMarketPlaceProductWishlist,
    medicalMarketControllers.checkWishListandCartinMarketProduct
);

// ============================================================
// order product
router.post(
    '/market/product/order-product/:address',
    authControllers.protect,
    medicalMarketControllers.orderMedicalMarketProduct
);

// save product to cart
router.post(
    '/market/product/product-to-checkout/:productId',
    authControllers.protect,
    medicalMarketControllers.saveProductToOrderCart
);

// get my orders
router.get(
    '/market/product/get-order-products',
    authControllers.protect,
    medicalMarketControllers.getCartOrderProducts,
    medicalMarketControllers.sendJsonForDocs
);

// order form cart
router.post(
    '/market/product/cart-to-checkout/',
    authControllers.protect,
    medicalMarketControllers.saveProductToOrderFromCart
);

// cancel product
router.patch(
    '/market/product/cancel-order/:orderId',
    authControllers.protect,
    medicalMarketControllers.assignDataForCancelMarketProductOrderService,
    medicalMarketControllers.mangeMedicalMarketOrder,
    medicalMarketControllers.sendJsonforUpdateOne
);

// medical market quote request
router.post(
    '/market/product/request-quote/:addressId',
    authControllers.protect,
    medicalMarketControllers.getDataForQuote
);

// cancel medical market
router.patch(
    '/market/product/cancel-quote/:quoteId',
    authControllers.protect,
    medicalMarketControllers.assignDataForCancelMarketOrderRequest,
    medicalMarketControllers.updateMedcalquoterequestors,
    medicalMarketControllers.sendJsonForUpdateOne
);

// cancel medical market
router.patch(
    '/market/product/update-quote-status/:quoteId',
    authControllers.protect,
    // medicalMarketControllers.assignDataForQuotesRequests,
    medicalMarketControllers.assignDataForUpdateStatusForUser,
    medicalMarketControllers.updateMedcalquoterequestor,
    medicalMarketControllers.sendJsonForUpdateOne
);

// get my quotes
router.get(
    '/market/product/get-my-quotes',
    authControllers.protect,
    medicalMarketControllers.getProductListForUser,
    medicalMarketControllers.sendJonsForMyquoteRequests
);

// get quotes response
router.get(
    '/market/product/lowest-quotes/:batchId',
    authControllers.protect,
    medicalMarketControllers.setParmsForUser,
    medicalMarketControllers.getTop3LowestQuotes,
    medicalMarketControllers.sendJsonForLowestQuotes
);

// get a quote
router.get(
    '/market/product/get-a-quote/:quoteId',
    authControllers.protect,
    medicalMarketControllers.setParmsForUser,
    medicalMarketControllers.getTop3LowestQuotes,
    medicalMarketControllers.sendJsonForLowestQuotes
);

// get my orders
router.get(
    '/market/product/my-orders',
    authControllers.protect,
    medicalMarketControllers.getMyMarketOrders,
    medicalMarketControllers.sendJsonFofGetMyOrders
);

// make appoinment with doctor
router.post(
    '/online-consultancy/book-doctor/:serviceId',
    authControllers.protect,
    onlineConsultancyControllers.checkDoctorandDoctorAppoinment,
    onlineConsultancyControllers.bookOnlineConsultant,
    onlineConsultancyControllers.sendServiceJson
);
// make appoinment with doctor
router.get(
    '/online-consultancy/my-bookings',
    authControllers.protect,
    onlineConsultancyControllers.getMyConsultancyBookingDataUser,
    onlineConsultancyControllers.sendJsonForDocs
);

// cancel medical market
router.patch(
    '/online-consultancy/cancel-doctor-slot/:slotId',
    authControllers.protect,
    onlineConsultancyControllers.assignDataForCancelConsultantReques,
    onlineConsultancyControllers.updateOnlineConsultancySlotBokking,
    onlineConsultancyControllers.sendJsonForUpdateOne
);

// medical market review
router.patch(
    '/online-consultancy/review/:serviceId',
    authControllers.protect,
    onlineConsultancyControllers.assignGetACunsultantData,
    onlineConsultancyControllers.findServiceById,
    onlineConsultancyControllers.assingDMarketData,
    onlineConsultancyControllers.createOpticalsReview,
    onlineConsultancyControllers.updateReviewAverage
);

// create new pill reminder
router.post(
    '/pillreminder/new-reminder',
    authControllers.protect,
    pillRemainderControllers.assingDataForGetAMember,
    pillRemainderControllers.findAMember,
    pillRemainderControllers.checkValidTimeForReminder,
    pillRemainderControllers.createNewPillReminder,
    pillRemainderControllers.cronJob
);

// update pill reminder
router.patch(
    '/pillreminder/update-reminder/:reminderId',
    authControllers.protect,
    pillRemainderControllers.assinDataforGetupdatepillReminder,
    pillRemainderControllers.checkValidTimeForReminder,
    pillRemainderControllers.updatepillReminder,
    pillRemainderControllers.deleteAllPreviousReminders,
    pillRemainderControllers.cronJob
);
// Delet pill reminders
router.delete(
    '/pillreminder/:reminderId',
    authControllers.protect,
    pillRemainderControllers.deletePillReminders,
    pillRemainderControllers.sendJsonForDeleteJson
);

// taken pill reminder
router.patch(
    '/pillreminder/taken-pills/:reminderId',
    authControllers.protect,
    pillRemainderControllers.getPillReminderAndSendSMS
);

// get my pill reminders
router.get(
    '/pillreminder/my-pill-reminders',
    authControllers.protect,
    pillRemainderControllers.getMyPillReminders
);
// check job is running
router.get('/check-router/:serviceId', userControllers.checkJob);

// ============================================================
// blood donation
router.post(
    '/blood-donation/new-blood-donner',
    authControllers.protect,
    fileUpload.uploadSingleDocument('doc'),
    bloodDonationControllers.assignDataForCreateNewBloodDonner,
    bloodDonationControllers.assignDocumentName,
    fileUpload.uploadDocumentinAWS,
    bloodDonationControllers.createNewBloodDonner,
    bloodDonationControllers.sendJsonForCreateOne
);

// get my blood donners
router.get(
    '/blood-donation/my-blood-donners',
    authControllers.protect,
    bloodDonationControllers.assignDataForGetMyBloodDonner,
    bloodDonationControllers.getBloodDonners,
    bloodDonationControllers.sendJsonForFindAll
);
// update new blood donner
router.patch(
    '/blood-donation/update-blood-donner/:userId',
    authControllers.protect,
    bloodDonationControllers.assignDataForUpdateBloodDonner,
    bloodDonationControllers.updateBloodDonner,
    bloodDonationControllers.sendJsonForupdateOne
);

// new blood requester and update
router.post(
    '/blood-donation/new-blood-requester',
    authControllers.protect,
    bloodDonationControllers.assignDataandGetAvailableMembers,
    bloodDonationControllers.assinDataForCancelAllPreviousRequests,
    bloodDonationControllers.createBloodRequest
);

// update blood requster that depend on status cancel request or fulfil request
router.patch(
    '/blood-donation/update-blood-requester/:status',
    authControllers.protect,
    bloodDonationControllers.updateBloodrequest
);

// get list of blood donners from data dependon your request
router.get(
    '/blood-donation/get-related-donners',
    authControllers.protect,
    bloodDonationControllers.assignDataForGetBloodGroup,
    bloodDonationControllers.getRequesterData,
    bloodDonationControllers.assingDataForFindBloodGroups,
    bloodDonationControllers.getBloodGroups,
    bloodDonationControllers.sendJsonFroRelatedDonners
);

// send manual blood request from blood group list
router.post(
    '/blood-donation/send-blood-request/:requesterId/:donnerId',
    authControllers.protect,
    bloodDonationControllers.assignAndVerifyDataForRequest,
    bloodDonationControllers.createSingleBloodRequest,
    bloodDonationControllers.sendJsonForCreateOne
);

//my blood reuest and the request i recived
router.get(
    '/blood-donation/my-requests/',
    authControllers.protect,
    bloodDonationControllers.getMyBloodRequests,
    bloodDonationControllers.sendJsonForGetMyreqeusts
);

// response the request i recieved(accept or reject)
router.patch(
    '/blood-donation/update-my-requests/:status/:donnerId/:requestId/',
    authControllers.protect,
    bloodDonationControllers.assignDataForUpdateRequestStatus,
    bloodDonationControllers.updateBloodRequest,
    bloodDonationControllers.sendJsonForupdateOne
);

// // get all accepter requests
router.get(
    '/blood-donation/get-accepted-requests',
    authControllers.protect,
    bloodDonationControllers.assignDataForGetBloodGroup,
    bloodDonationControllers.getRequesterData,
    bloodDonationControllers.assignDataForFindActiveRequests,
    bloodDonationControllers.findAllacceptedRequests,
    bloodDonationControllers.sendJsonForFilterAll
);

// verfiy donated user
router.patch(
    '/blood-donation/verify-blood-donnar/:donationId/:verifyID',
    authControllers.protect,
    bloodDonationControllers.assignDataForGetValidDonner,
    bloodDonationControllers.verifyandUpdateDonnerandRecinverData
);

// blood donation history

router.get(
    '/blood-donation/my-donation-history',
    authControllers.protect,
    bloodDonationControllers.getMyBloodDonationHisotory,
    bloodDonationControllers.sendJsonForBloodDonationHistory
);
// ============================================================
// Ambulance

// send quotes for ambulance providers
router.post(
    '/post-new-ambulance-qoute',
    authControllers.protect,
    ambulanceControllers.sendQuotesToNearbyServices,
    ambulanceControllers.createNewAmbulanceQuoteRequest,
    ambulanceControllers.sendJsonForCreateNew
);
// camcel ambulance request
router.patch(
    '/cancel-ambulance-quotes/:quoteId',
    authControllers.protect,
    ambulanceControllers.assignDataForCancelQuote,
    ambulanceControllers.updateAmbulanceQuotes,
    ambulanceControllers.sendJsonForUpdateAll
);

// get my requests
router.get(
    '/ambulance/my-quotes',
    authControllers.protect,
    // ambulanceControllers.getActiveAmbulanceQuotes,
    ambulanceControllers.getUsersBookedData,
    ambulanceControllers.sendJsonForAmbulanceQuotes
);

// get my ambulance assign history
router.get(
    '/ambulance/my-ambulance-assigns',
    authControllers.protect,
    ambulanceControllers.myAmbulanceAssignDatas
);
// ambulance driver sttaus
router.patch(
    '/ambulance/update-ambulace-driver-status/:status/:driverId',
    authControllers.protect,
    ambulanceControllers.updateBookedAmbulanceDriverStatus
);
// get a quotes
router.get(
    '/ambulance/get-a-quote/:quoteId',
    authControllers.protect,
    ambulanceControllers.getAActiveAmbulanceQuoteDetails
);

// get all my quotes
// router.get(
//     '/get-responded-quotes/',
//     authControllers.protect,
//     ambulanceControllers.getAllAmbulanceQuotes
// );
// update ambulance request
router.patch(
    '/update-ambulance-quote/:status/:quoteId',
    authControllers.protect,
    ambulanceControllers.responseProvidersQuote,
    ambulanceControllers.updateServiceProviders,
    ambulanceControllers.assingDataforUpdateRemainingStatus,
    ambulanceControllers.updateRemainingAmbualceStatus,
    ambulanceControllers.sendjsonForUpdateOne
);

// ============================================================
//  get all laboratries
router.post(
    '/laboratory/book-laboratory/:labId',
    authControllers.protect,
    laboratoryControllers.verifyLabDetails,
    laboratoryControllers.createNewLaboratoryBooking,
    laboratoryControllers.sendJsonfForCreateOne
);

// cancel lab booking
router.patch(
    '/laboratory/cancel-laboratory-booking/:labId',
    authControllers.protect,
    laboratoryControllers.assignDataforCancelBooking,
    laboratoryControllers.updateLaboratoryBooking,
    laboratoryControllers.sendJsonForUpdateOne
);

// get my booking
router.get(
    '/get-my-laboratory-booking',
    authControllers.protect,
    laboratoryControllers.getAllMyLaboratoryBooking,
    laboratoryControllers.sendJsonForBooking
);

// ============================================================
// pharmacy
// get medicine around 3km radious
router.post(
    '/pharmacy/pharmacy-availablity/:addressId',
    authControllers.protect,
    pharmacyControllers.uploadPrescriptionOfUser('prescription'),
    pharmacyControllers.checkFileAvailable,
    pharmacyControllers.uploadLaboratoryReportToAWS,
    pharmacyControllers.getNearByMedcals
);

// update quote statu
router.patch(
    '/pharmacy/cancel-request/:status/:requestId',
    authControllers.protect,
    pharmacyControllers.updatePharmacyRequestStatus
);

// add pharmacy product cards
router.post(
    '/pharmacy/add-to-cart/:medicineId',
    authControllers.protect,
    pharmacyControllers.checkProductAlreadyExist,
    pharmacyControllers.createMedicineCart,
    pharmacyControllers.sendJsonForCreateOne
);

// update cart
router.patch(
    '/pharmacy/update-cart/:cartId',
    authControllers.protect,
    pharmacyControllers.assignDataforUpdateMedicineCart,
    pharmacyControllers.updateMedicineCart,
    pharmacyControllers.sendJsonForUpdateOne
);

// delete cart
router.delete(
    '/pharmacy/delete-cart/:cartId',
    authControllers.protect,
    pharmacyControllers.assignDataForDeleteCart,
    pharmacyControllers.deleteMedicineCart,
    pharmacyControllers.sendJsonForDeleteOne
);

// get my carts
router.get(
    '/pharmacy/my-carts',
    authControllers.protect,
    pharmacyControllers.getMyMedicineCarts,
    pharmacyControllers.sendJsonForDocs
);

// get my request
router.get(
    '/pharmacy/my-order-request',
    authControllers.protect,
    pharmacyControllers.getMyPharmacyOrderRequest,
    pharmacyControllers.sendJsonForDocs
);

// get a pharmcy order
router.get(
    '/pharmacy/order/:orderId',
    authControllers.protect,
    pharmacyControllers.assignDataForGetPharmacyOrder,
    pharmacyControllers.getAPharmacyOrder,
    pharmacyControllers.sendJsonForFindOneDocs
);

// medicine responsed
router.get(
    '/pharmacy/get-a-order/:batchId',
    authControllers.protect,
    pharmacyControllers.getPharmacyResponses,
    pharmacyControllers.sendJsonForDocs
);
// get a request
router.get(
    '/pharmacy/get-a-order/:orderId',
    authControllers.protect,
    pharmacyControllers.getAPharmacyOrderRequest,
    pharmacyControllers.sendJsonForDocs
);

// ============================================================
// ============================================================
// ============================================================
// Second opinion
// make appoinment with doctor
// router.post(
//     '/second-opinion/book-doctor/:serviceId',
//     authControllers.protect,
//     secondOpinionControllers.checkDoctorandDoctorAppoinment,
//     secondOpinionControllers.bookSecondOpinioncall,
//     secondOpinionControllers.sendJsonForCreateOne
// );

// // cancel second opinion slit
// router.patch(
//     '/second-opinion/cancel-slot/:slotId',
//     authControllers.protect,
//     secondOpinionControllers.assignDataForCancelSecondOpinionSlot,
//     secondOpinionControllers.updateSecondOpininCall,
//     secondOpinionControllers.sendJsonForUpdateOne
// );

// // get my slots
// router.get(
//     '/second-opinion/my-slot-bookings',
//     authControllers.protect,
//     secondOpinionControllers.getMyBookingHistory,
//     secondOpinionControllers.sendJsonForDocs
// );

// ============================================================
// ============================================================
// ============================================================
// One us
router.get(
    '/oneus/my-videos',
    authControllers.protect,
    oneUsControllers.getMyoneUsVideos,
    oneUsControllers.sendJsonFroGetVideos
);

// create new video
router.post(
    '/one-us/video',
    authControllers.protect,
    fileUpload.uploadSingleVideo('videos'),
    oneUsControllers.assignDataForcreateNewOneUsVideo,
    oneUsControllers.assignImageNameForOneUsVideo,
    oneUsControllers.checkValidVideoCategorie,
    fileUpload.uploadVideoinAWS,
    oneUsControllers.createNewOneUsVideo,
    oneUsControllers.sendJsonForCreateOne
);

// create new video
router.patch(
    '/one-us/video/:serviceId',
    authControllers.protect,
    fileUpload.uploadSingleVideo('videos'),
    oneUsControllers.assignImageNameForOneUsVideo,
    oneUsControllers.checkValidVideoCategorie,
    fileUpload.uploadVideoinAWS,
    oneUsControllers.updateOneUsVideo,
    oneUsControllers.sendJsonForUpdateOne
);

// create new blogs
router.post(
    '/one-us/blog',
    authControllers.protect,
    oneUsControllers.setbannerImageSize,
    fileUpload.uploadSingleImage('bannerImage'),
    fileUpload.resizeSingleImage,
    oneUsControllers.assignDataForcreateNewOneUsBlog,
    oneUsControllers.assignImageNameForOneUsBlog,
    oneUsControllers.checkValidBlogCategorie,
    fileUpload.uploadFilesinAWS,
    oneUsControllers.createNewOneUsBlog,
    oneUsControllers.sendJsonForCreateOne
);
// update homecare
router.patch(
    '/one-us/blog/:serviceId',
    authControllers.protect,
    oneUsControllers.setbannerImageSize,
    fileUpload.uploadSingleImage('bannerImage'),
    fileUpload.resizeSingleImage,
    oneUsControllers.assignImageNameForOneUsBlog,
    oneUsControllers.checkValidBlogCategorie,
    fileUpload.uploadFilesinAWS,
    oneUsControllers.updateOneUsBlog,
    oneUsControllers.sendJsonForUpdateOne
);

// ============================================================
// exports user routes
module.exports = router;
