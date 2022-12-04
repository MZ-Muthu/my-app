// ============================================================
// import packages
const express = require('express');

// ============================================================
// create router
const router = express.Router();

// ============================================================
// import controllers
const authControllers = require('../../controllers/authControllers');
const userControllers = require('../../controllers/userControllers');
const userViewControllers = require('../../controllers/userViewControllers');
const ambulanceVendorControllers = require('../../controllers/ambulanceControllers');
const medicalMarketVendorControllers = require('../../controllers/medicalMarketControllers');
const homecareServiceControllers = require('../../controllers/homecareServiceControllers');
const fitnessVendorControllers = require('../../controllers/fitnessControllers');
const bloodDonationVendorControllers = require('../../controllers/bloodDonationControllers');
const jobPortalVendorControllers = require('../../controllers/jobPortalControllers');
const deaddictionControllers = require('../../controllers/deAddictionControllers');
const medicalRecordsControllers = require('../../controllers/medicalRecordsControllers');
const hospitalControllers = require('../../controllers/hospitalPackageControllers');
const differentlyAbledControllers = require('../../controllers/differentlyAbledControllers');
const donnationControllers = require('../../controllers/donnationControllers');
const studyAbroadControllers = require('../../controllers/studeAbroadControlles');
const pharmacyControllers = require('../../controllers/pharmacyControllers');
const laboratoryControllers = require('../../controllers/laboratoryControllers');
const expertsControllers = require('../../controllers/meetTheExportControllers');
const hearingaidControllers = require('../../controllers/hearingControllers');
const partnerControllers = require('../../controllers/partnerController');
const oneUsControllers = require('../../controllers/oneUsControllers');

// ============================================================
// create routes

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// shared
// home
router.get(
    '/',
    authControllers.isUserAlreadyLogin,
    userViewControllers.getHome
);

// login
router.get(
    '/login',
    authControllers.isUserAlreadyLogin,
    // authControllers.redirectUserttoLogin,
    userViewControllers.login
);

// router.get vendor routes

// logout
router.get('/logout', authControllers.logout);

// thank you screen
router.get('/:from/thank-you', userViewControllers.getUserThankyou);

// user acccount home
router.get(
    '/my-account',
    authControllers.protect,
    userViewControllers.getUserMyAccount
);

// get vendor list
router.get(
    '/vendor-lists',
    authControllers.protect,
    partnerControllers.getMyPartners,
    userViewControllers.getVendorLists
);
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Ambulance
// Ambulance boking home
router.get(
    '/ambulance/ambulance-service',
    authControllers.protect,
    ambulanceVendorControllers.getAmbulanceServiceList,
    userViewControllers.getUserAmbulanceHome
);

// ambulance select location for bookings
router.get(
    '/ambulance/ambulance-service/select-locations',
    authControllers.protect,
    ambulanceVendorControllers.checkValidUserAmbulanceServices,
    userViewControllers.getUserAmbulanceQuoteSection
);

// ambulance Bookings
router.get(
    '/my-account/ambulance/',
    authControllers.protect,
    ambulanceVendorControllers.getUsersBookedData,
    userViewControllers.getUserAmbulanceQuoteBookings
);

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Medical market
router.get(
    '/medical-market',
    authControllers.protect,
    medicalMarketVendorControllers.getAllMedicalMarketServices,
    userViewControllers.getUserMedicalMarketHome
);

// Get all paroducts
router.get(
    '/medical-market/shop',
    authControllers.protect,
    medicalMarketVendorControllers.assignDataForGetProducts,
    medicalMarketVendorControllers.getAllMedicalMarketServices,
    medicalMarketVendorControllers.getAllProduct,
    userViewControllers.getUserMedicalMarketCategoreis
);

// view a product
router.get(
    '/medical-market/shop/:productId',
    authControllers.protect,
    medicalMarketVendorControllers.assignGetAServiceData,
    medicalMarketVendorControllers.findServiceById,
    medicalMarketVendorControllers.checkPartnerStatus,
    userViewControllers.getUserMedicalMarketViewAProduct
);

// market checkout page
router.get(
    '/medical-market/checkout/',
    authControllers.protect,
    medicalMarketVendorControllers.getCartOrderProducts,
    medicalMarketVendorControllers.checkTheOrderSessionWasExpiredMarket,
    userViewControllers.getUserMedicalMarketCheckout
);

// Medical market carts
router.get(
    '/medical-market/my-cart',
    authControllers.protect,
    medicalMarketVendorControllers.getMyCarts,
    userViewControllers.getUserMedicalMarketCarts
);

// Medical markte wish lsit
router.get(
    '/medical-market/my-wishlist',
    authControllers.protect,
    medicalMarketVendorControllers.getMyMarketWishlists,
    userViewControllers.getUserMedicalMarketWishlists
);

// market quotes
router.get(
    '/medical-market/quotes-management',
    authControllers.protect,
    medicalMarketVendorControllers.getProductListForUser,
    userViewControllers.getUserMedicalMarketQuotesManagement
);

// market quotes
router.get(
    '/medical-market/quotes-management/lowest-quotes/:batchId',
    authControllers.protect,
    medicalMarketVendorControllers.setParmsForUser,
    medicalMarketVendorControllers.getTop3LowestQuotes,
    userViewControllers.getUserMedicalMarketLowestQuotesManagement
);
// market quotes
router.get(
    '/medical-market/quotes-management/get-a-quote/:quoteId',
    authControllers.protect,
    medicalMarketVendorControllers.setParmsForUser,
    medicalMarketVendorControllers.getTop3LowestQuotes,
    userViewControllers.getUserMedicalMarketLowestQuotesManagement
);

// my orders
router.get(
    '/my-account/medical-market/my-orders',
    authControllers.protect,
    medicalMarketVendorControllers.getMyMarketOrders,
    medicalMarketVendorControllers.mergetMarketOrders,
    userViewControllers.getUserMedicalMarketorders
);

// view order
router.get(
    '/my-account/medical-market/my-orders/view-order/:batchId',
    authControllers.protect,
    medicalMarketVendorControllers.assignDataForGetMarketOrders,
    medicalMarketVendorControllers.getMarketOrderBatch,
    userViewControllers.getUserMedicalMarketViewAOrders
);
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Home care
// home
router.get(
    '/homecare-services/',
    authControllers.protect,
    homecareServiceControllers.getAllHomcareServices,
    userViewControllers.getUserHomecareServiceHome
);

// get homecare services based on service
router.get(
    '/homecare-services/:serviceName',
    authControllers.protect,
    homecareServiceControllers.assignGetServiceData,
    homecareServiceControllers.getAllHomcareServices,
    homecareServiceControllers.getAllHomecareSerive,
    homecareServiceControllers.filterHomecaredata,
    userViewControllers.getUserHomecareServiceServiceList
);

// get a service
router.get(
    '/homecare-services/service/:serviceId',
    authControllers.protect,
    homecareServiceControllers.assignGetAServiceDataForGetProduct,
    homecareServiceControllers.findOneHomeCareservice,
    homecareServiceControllers.getaHomecareService,
    userViewControllers.getUserHomecareServiceAService
);

// my homecare booking
router.get(
    '/my-account/homecare-services',
    authControllers.protect,
    homecareServiceControllers.assignDataForGetMyHomecareServices,
    homecareServiceControllers.getAllMyHomecareService,
    userViewControllers.getUserHomecareBookings
);
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Fitness
router.get(
    '/fitness',
    authControllers.protect,
    userViewControllers.getUserFitnessHome
);

// fitness videos
router.get(
    '/fitness/workout-videos/:type',
    authControllers.protect,
    fitnessVendorControllers.getAllworkoutValues,
    userViewControllers.getUserFitnessWorkoutVideos
);

// get  a fitness video
router.get(
    '/fitness/workout-videos/video/:type/:videoId',
    authControllers.protect,
    fitnessVendorControllers.getAFitnessVideo,
    userViewControllers.getUserAFitnessWorkoutVideo
);

// get all fitness center
router.get(
    '/fitness/fitness-centers/:type',
    authControllers.protect,
    fitnessVendorControllers.assignDataForGetAllGym,
    fitnessVendorControllers.getAllGYMValues,
    userViewControllers.getUserFinessCenters
);

// get a fitness center
router.get(
    '/fitness/fitness-centres/centre/:serviceId',
    authControllers.protect,
    fitnessVendorControllers.assignGetAGYMData,
    fitnessVendorControllers.findGYMById,
    userViewControllers.getUserAFitnessCenters
);

// get a fitness foods
router.get(
    '/fitness/healthy-foods',
    authControllers.protect,
    fitnessVendorControllers.getAllFoodDetails,
    userViewControllers.getUserFitnessFoods
);

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Blood Donations
// blood donation home
router.get(
    '/blook-donation',
    authControllers.protect,
    userViewControllers.getUserBloodDonationHome
);

// blood donation find donners
router.get(
    '/blood-donation/related-donners',
    authControllers.protect,
    bloodDonationVendorControllers.assignDataForGetBloodGroup,
    bloodDonationVendorControllers.getRequesterData,
    bloodDonationVendorControllers.assingDataForFindBloodGroups,
    bloodDonationVendorControllers.getBloodGroups,
    userViewControllers.getUserBloodDonationFindDonner
);

// blood donation near by blood banks
router.get(
    '/blood-donation/nearby-blood-banks',
    authControllers.protect,
    bloodDonationVendorControllers.getNearByBloodbanks,
    userViewControllers.getUserBloodDonationBloodBanks
);

// get accepted request
router.get(
    '/blood-donation/accepted-requests',
    authControllers.protect,
    bloodDonationVendorControllers.assignDataForGetBloodGroup,
    bloodDonationVendorControllers.getRequesterData,
    bloodDonationVendorControllers.assignDataForFindActiveRequests,
    bloodDonationVendorControllers.findAllacceptedRequests,
    userViewControllers.getUserBloodDonationAcceptedRequests
);

// get my requst
router.get(
    '/blood-donation/my-requests',
    authControllers.protect,
    bloodDonationVendorControllers.getMyBloodRequests,
    userViewControllers.getUserBloodDonationMyReqeuests
);

// router.get bloo donation history
router.get(
    '/my-account/blood-donation',
    authControllers.protect,
    bloodDonationVendorControllers.getMyBloodDonationHisotory,
    userViewControllers.getUserBloodDonationMyHistory
);

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Job portal
// job portal home
router.get(
    '/job-portal',
    authControllers.protect,
    userViewControllers.getUserJobPortalHome
);

// job protal job list
router.get(
    '/job-portal/jobs',
    authControllers.protect,
    jobPortalVendorControllers.assignDataForGetAllJobs,
    jobPortalVendorControllers.getAllJobs,
    jobPortalVendorControllers.filterVerifiedPartners,
    userViewControllers.getUserJobPortalSearch
);

// job portal get a job
router.get(
    '/job-portal/job/:jobId',
    authControllers.protect,
    jobPortalVendorControllers.getAJob,
    userViewControllers.getUserJobPortalGetAJob
);

// get job portal prodfiles
router.get(
    '/my-account/job-portal',
    authControllers.protect,
    jobPortalVendorControllers.getMyJobApplications,
    userViewControllers.getUserJobPortalProfile
);

// manage job portal profile details
router.get(
    '/my-account/job-portal/manage-profile',
    authControllers.protect,
    jobPortalVendorControllers.checkifTheUserAlreadyExist,
    userViewControllers.getuserJobPortalManageProfile
);

// get all  my jjob
router.get(
    '/job-portal/my-jobs/',
    authControllers.protect,
    jobPortalVendorControllers.assignDataForUser,
    jobPortalVendorControllers.getMyJobList,
    userViewControllers.getUsersJob
);

// post new job
router.get(
    '/job-portal/post-new-job/',
    authControllers.protect,
    jobPortalVendorControllers.getJobCategories,
    userViewControllers.getPostNewJob
);

// get view profile
router.get(
    '/job-portal/view-a-job/:jobId',
    authControllers.protect,
    jobPortalVendorControllers.assignDataForUser,
    jobPortalVendorControllers.assignDataforGetJobandReceivedApplications,
    jobPortalVendorControllers.getJobandapplications,
    userViewControllers.viewUserJob
);

// update job profile
router.get(
    '/job-portal/update-job/:jobId',
    authControllers.protect,
    jobPortalVendorControllers.assignDataForGetJobAndCategories,
    userViewControllers.updateUserJob
);
// update job profile
router.get(
    '/job-portal/applicant/:applicantId',
    authControllers.protect,
    jobPortalVendorControllers.findOneJobApplicant,
    userViewControllers.viewJobApplicant
);
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Deaddication
// deaddiction home
router.get(
    '/deaddiction-services',
    authControllers.protect,
    deaddictionControllers.assignGetAllServiceData,
    deaddictionControllers.getAllDeaddictionCenter,
    userViewControllers.getUserDeaddictionHome
);

// deaddiction View
router.get(
    '/deaddiction-services/centre/:centerId',
    authControllers.protect,
    deaddictionControllers.assignDataForGetADeaddictionSErvice,
    userViewControllers.getUserDeaddictionAService
);

// deaddiction history
router.get(
    '/my-account/deaddiction-services',
    authControllers.protect,
    deaddictionControllers.getAllMyDeaddictionBookings,
    userViewControllers.getUserDeaddictionHistory
);

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Medical Records
// Home
router.get(
    '/medical-records',
    authControllers.protect,
    userViewControllers.getUserMedicalRecordsHome
);

// medical records
router.get(
    '/medical-records/records/',
    authControllers.protect,
    // medicalRecordsControllers.assignDataForGetAllMyRecords,
    // medicalRecordsControllers.getAllMedicalRecords,
    medicalRecordsControllers.getMedicalRecordsThroughMember,
    userViewControllers.getUserMedicalRecordsList
);

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Hospital

// ============================================================
// ============================================================
// ============================================================
// Hospital Package
// hospital package home
router.get(
    '/hospital/package',
    authControllers.protect,
    hospitalControllers.getAllHospitalPackages,
    userViewControllers.getUserHospitalPackageHome
);

// get a package services
router.get(
    '/hospital/package/:packageName',
    authControllers.protect,
    hospitalControllers.assignDataForGetAllHospitalPackage,
    hospitalControllers.getAllPackage,
    hospitalControllers.filterDataForCheckPackageData,
    userViewControllers.getUserHospitalPackageLists
);

// get a package details
router.get(
    '/hospital/package/:packageName/:serviceId',
    authControllers.protect,
    hospitalControllers.getAHospialPackage,
    userViewControllers.getUserHospitalPackageDetails
);

// ============================================================
// ============================================================
// ============================================================
// Medical tourism
// Tourism home
router.get(
    '/hospital/tourism',
    authControllers.protect,
    hospitalControllers.getAllHospitalPackages,
    userViewControllers.getUserHospitalTourismHome
);

// get tourism lists
router.get(
    '/hospital/tourism/:packageName',
    authControllers.protect,
    hospitalControllers.assignDataForGetAllHospitalTourism,
    hospitalControllers.getAllPackage,
    hospitalControllers.filterDataForCheckTourismData,
    hospitalControllers.getAllHospitalPackages,
    userViewControllers.getUserHospitalTourismList
);

// get tourism detaills
router.get(
    '/hospital/tourism/:packageName/:serviceId',
    authControllers.protect,
    hospitalControllers.getAHospialTourism,
    userViewControllers.getUserHospitalTousimDetails
);

// ============================================================
// ============================================================
// ============================================================
// Hospital Details
// Hospital list
router.get(
    '/hospital/details',
    authControllers.protect,
    hospitalControllers.getAllHospitalDetails,
    userViewControllers.getUserHospitalDetailsList
);

// Hospital Details
router.get(
    '/hospital/details/:stream/:hospitalId',
    authControllers.protect,
    hospitalControllers.assignDataForGetHospitalStatus,
    hospitalControllers.getAHospitalDetails,
    hospitalControllers.assignForHospitalDetails,
    userViewControllers.getUserHospitalDetailsListDetails
);

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Differentlly-abled products
router.get(
    '/differently-abled/buy-products',
    authControllers.protect,
    differentlyAbledControllers.getAllDifferentlyAbledProducts,
    userViewControllers.getUserDifferetnlyAbledProuctLists
);

// get a product details
router.get(
    '/differently-abled/buy-products/:productId',
    authControllers.protect,
    differentlyAbledControllers.getADifferentlyAbledProduct,
    userViewControllers.getUserDifferetnlyAbledProuctDetails
);

// differently abled product
router.get(
    '/differently-abled/checkout/',
    authControllers.protect,
    userControllers.assignDataForGetAllAddress,
    userControllers.getAllUserAddress,
    userViewControllers.getUserDifferetnlyAbledProuctCheckout
);

// differently abled product
router.get(
    '/my-account/differently-abled',
    authControllers.protect,
    hearingaidControllers.assignDataForGetMyDifferenlyAbledOrders,
    hearingaidControllers.getMyDifferentlyAbledOrder,
    userViewControllers.getUserDifferetnlyAbledProuctOrders
);

// differently abled product order
router.get(
    '/my-account/differently-abled/order/:orderId',
    authControllers.protect,
    hearingaidControllers.assignDataforGetAhDifferetnlyAbled,
    hearingaidControllers.getADifferentlyAbledOrder,
    userViewControllers.getUserDifferetnlyAbledProductOrderDetails
);

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Donation and charity
router.get(
    '/donation-and-charity',
    authControllers.protect,
    donnationControllers.caluculateMonthlyAverage,
    userViewControllers.getUserDonationAndCharityHome
);

// Donation and charity fund requesters
router.get(
    '/my-account/donation-and-charity/',
    authControllers.protect,
    donnationControllers.myDonations,
    userViewControllers.getUserDonationAndCharityHistory
);

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Knowledge Bse
// knowledge base home
router.get(
    '/knowledge-base',
    authControllers.protect,
    userViewControllers.getUserKnowlegeBase
);

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Organ donation
router.get(
    '/organ-donation/organ-lists',
    authControllers.protect,
    hospitalControllers.getAllOrgans,
    userViewControllers.getUserOrganDonationHOme
);

// get organ details
router.get(
    '/organ-donation/hospital/:organId',
    authControllers.protect,
    hospitalControllers.getOrganDetails,
    userViewControllers.getUserOrganDonationDeetails
);

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Study Abroad
// study-abroad home
router.get(
    '/study-abroad/colleges',
    authControllers.protect,
    studyAbroadControllers.assignDAtaForFindAllData,
    studyAbroadControllers.getAllColleges,
    userViewControllers.getUserStudyAbroadList
);

// study-abroad college deitla
router.get(
    '/study-abroad/college/:collegeId',
    authControllers.protect,
    studyAbroadControllers.assignDataForGetAColleges,
    studyAbroadControllers.getACollege,
    userViewControllers.getUserStudyAbroadCollegeDetails
);

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Pharmacy
// Pharmacy home
router.get(
    '/pharmacy',
    authControllers.protect,
    pharmacyControllers.getAllPharmacys,
    userViewControllers.getUserPharmacyHome
);

// pharmacy medicines
router.get(
    '/pharmacy/medicines',
    authControllers.protect,
    pharmacyControllers.getAllPharmacyProducts,
    userViewControllers.getUserPharmacyMedicines
);

// pharmacy carts
router.get(
    '/pharmacy/my-carts',
    authControllers.protect,
    pharmacyControllers.getMyMedicineCarts,
    userViewControllers.getUserPharmacyMyCarts
);
// differently abled product
router.get(
    '/pharmacy/checkout/',
    authControllers.protect,
    userControllers.assignDataForGetAllAddress,
    userControllers.getAllUserAddress,
    userViewControllers.getUserPharmacyCheckout
);
// phaarmacy orders
router.get(
    '/my-account/pharmacy',
    authControllers.protect,
    pharmacyControllers.getMyPharmacyOrderRequest,
    userViewControllers.getUserPharmacyMyOrders
);

// pharmacy order
router.get(
    '/my-account/pharmacy/order/:orderId',
    authControllers.protect,
    pharmacyControllers.assignDataForGetPharmacyOrder,
    pharmacyControllers.getAPharmacyOrder,
    userViewControllers.getAUserPharmacyOrder
);

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Laboratory
// laboratory home
router.get(
    '/laboratorys',
    authControllers.protect,
    laboratoryControllers.getAllLaboratoryCategoriesList,
    userViewControllers.getUserLaboratoryHome
);

// laboratory lists
router.get(
    '/laboratorys/lists',
    authControllers.protect,
    laboratoryControllers.getAllLaboratory,
    userViewControllers.getUserLaboratoryLists
);

// laboratory details
router.get(
    '/laboratorys/details/:labId',
    authControllers.protect,
    laboratoryControllers.assignDataForGetALaboratory,
    laboratoryControllers.getALaboratory,
    userViewControllers.getUserLaboratoryDetails
);

// laboratory checkout
router.get(
    '/laboratorys/checkout/',
    authControllers.protect,
    userControllers.assignDataForGetAllAddress,
    userControllers.getAllUserAddress,
    userViewControllers.getUserLaboratoryCheckout
);

// laboratory bookings
router.get(
    '/my-account/laboratory',
    authControllers.protect,
    laboratoryControllers.getAllMyLaboratoryBooking,
    userViewControllers.getUserLaboratoryOrders
);

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Meet The Expert
router.get(
    '/meet-the-experts',
    authControllers.protect,
    expertsControllers.getAllExperts,
    userViewControllers.getUserMeettheExpertsHome
);
// laboratory checkout
router.get(
    '/meet-the-experts/checkout/',
    authControllers.protect,
    userControllers.assignDataForGetAllAddress,
    userControllers.getAllUserAddress,
    userViewControllers.getUserExpertCheckout
);
// Meet the expert services
router.get(
    '/meet-the-experts/:serviceName',
    authControllers.protect,
    expertsControllers.assignDataForAllSerive,
    expertsControllers.getRelatedDataFind,
    userViewControllers.getUserMeettheExpertsLists
);

// Meet the expert details
router.get(
    '/meet-the-experts/details/:expertId',
    authControllers.protect,
    expertsControllers.assignDataForGetMeetTheExpert,
    userViewControllers.getUserMeettheExpertsDetails
);

// get expert bookings
router.get(
    '/my-account/meet-the-experts',
    authControllers.protect,
    expertsControllers.getAllMyExpertService,
    userViewControllers.getUserMeettheExpertsOrders
);

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Hearing aid

// hearing aid product
router.get(
    '/hearing-aid/checkout/',
    authControllers.protect,
    userControllers.assignDataForGetAllAddress,
    userControllers.getAllUserAddress,
    userViewControllers.getUserHeringAidProuctCheckout
);
// Hearing aid lists
router.get(
    '/hearing-aid/:type',
    authControllers.protect,
    hearingaidControllers.assignDataForGetAllHearingaid,
    hearingaidControllers.getAllHearingaidPartners,
    hearingaidControllers.assingUserRenderPage,
    userViewControllers.getUserHearingaidHome
);

// get a hearign ai product
router.get(
    '/hearing-aid/product/:productId',
    authControllers.protect,
    hearingaidControllers.getAHearingAidProduct,
    userViewControllers.getUserHearingaidProductDetails
);

// get a hearign ai product
router.get(
    '/hearing-aid/hospital/:serviceId',
    authControllers.protect,
    hearingaidControllers.assignGetAServiceData,
    hearingaidControllers.findServiceById,
    userViewControllers.getUserHearingaiHospialDetails
);

// hearing aid repair store
router.get(
    '/hearing-aid/repair-store/:serviceId',
    authControllers.protect,
    hearingaidControllers.assignGetAServiceData,
    hearingaidControllers.findServiceById,
    userViewControllers.getUserHearingaiRepairStoreDetails
);

// hearing aid account
router.get(
    '/my-account/hearing-aid',
    authControllers.protect,
    hearingaidControllers.assignDataForHospitalBooking,
    hearingaidControllers.getAllHearingaidHospitalBooking,
    hearingaidControllers.changeDocstoBooking,
    hearingaidControllers.assignDataForGetMyHearingaidOrders,
    hearingaidControllers.getMyhearringAidOrder,
    userViewControllers.getUserHearingAidAccount
);

// hearing aid order
router.get(
    '/my-account/hearing-aid/order/:orderId',
    authControllers.protect,
    hearingaidControllers.assignDataforGetAhearingAid,
    hearingaidControllers.getAHearingAidOrder,
    userViewControllers.getUserHearingAidOrders
);

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Community
// one use chatting
router.get(
    '/one-us/chat',
    authControllers.protect,
    oneUsControllers.getMyCharts
);

// one us videos
router.get(
    '/one-us/videos',
    authControllers.protect,
    oneUsControllers.getOneUsVideos,
    userViewControllers.getOneUsVideos
);

// one us video manaemnt
router.get(
    '/my-account/oneus/video-management',
    authControllers.protect,
    oneUsControllers.getMyoneUsVideos,
    userViewControllers.getMyOneUsVideos
);

// one us blogs
router.get(
    '/one-us/blogs',
    authControllers.protect,
    oneUsControllers.getOneUsBlogs,
    userViewControllers.getOneUsBlogs
);

// one us video manaemnt
router.get(
    '/my-account/oneus/video-management',
    authControllers.protect,
    oneUsControllers.getMyoneUsVideos,
    userViewControllers.getMyOneUsVideos
);

// one us blog manaemnt
router.get(
    '/my-account/oneus/blog-management',
    authControllers.protect,
    oneUsControllers.getMyoneUsBlogs,
    userViewControllers.getMyOneUsBlogs
);

// ============================================================
// export routes
module.exports = router;
