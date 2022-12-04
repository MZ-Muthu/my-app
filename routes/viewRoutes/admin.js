// ============================================================
// import packages
const express = require('express');

// ============================================================
// create router
const router = express.Router();

// ============================================================
// import controllers
// admin controllers
const authControllers = require('../../controllers/authControllers');
const bloodDonationControllers = require('../../controllers/bloodDonationControllers');
const medicalMarketControllers = require('../../controllers/medicalMarketControllers');
const jobPortalControllers = require('../../controllers/jobPortalControllers');
const advertisementControllers = require('../../controllers/advertisementControllers');
const homecareServiceControllers = require('../../controllers/homecareServiceControllers');
const deaddictionControllers = require('../../controllers/deAddictionControllers');
const adminControllers = require('../../controllers/admin/adminControllers');
const adminViewControllers = require('../../controllers/adminViewControllers');
const ambulanceContro = require('../../controllers/admin/ambulanceContro');
const homecareContro = require('../../controllers/admin/homecareContro');
const deaddictionContro = require('../../controllers/admin/deaddictionContro');
const moduleContro = require('../../controllers/admin/moduleControllers');
const bloodDonationContro = require('../../controllers/bloodDonationControllers');
const expertContro = require('../../controllers/admin/meetTheExpertControllers');
const trackAmbulanceManagement = require('../../controllers/admin/trackAmbulanceManagement');
const opticalsControllers = require('../../controllers/admin/opticalsAdminControllers');

// vendor controllers
const studyAbroadVendorControllers = require('../../controllers/studeAbroadControlles');
const hospitalVenodrControllers = require('../../controllers/hospitalPackageControllers');
const speakToUsControllers = require('../../controllers/speakToUsControllers');
const opticalVendorControllers = require('../../controllers/opticalControllers');
const hearingaidVendorControllers = require('../../controllers/hearingControllers');
const differentlyabledControllers = require('../../controllers/differentlyAbledControllers');
const donnationVendorControllers = require('../../controllers/donnationControllers');
const medicalRecordsVendorControllers = require('../../controllers/medicalRecordsControllers');
const fitnessVendorControllers = require('../../controllers/fitnessControllers');
const ambulanceVendorControllers = require('../../controllers/ambulanceControllers');
const laboratoryVendorControllers = require('../../controllers/laboratoryControllers');
const meetTheExpertVendorControllers = require('../../controllers/meetTheExportControllers');
const pharmacyVendorControllers = require('../../controllers/pharmacyControllers');
const onlineConsultancyControllers = require('../../controllers/onlineConsultancyControllers');
const secondOpinionControllers = require('../../controllers/secondOpinionControllers');
const ambulanceControllers = require('../../controllers/ambulanceControllers');

// ============================================================
// create routes
router.use(authControllers.protect, authControllers.restrictTo('admin'));
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// home
router.get(
    '/',
    adminControllers.countNumberOfDocuments,
    adminViewControllers.adminHome
);

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// vendor management
// get all modules
router.get('/vendor-management/', adminViewControllers.getVendorHome);

// get new partner requests
router.get(
    '/vendor-management/partner-requests',
    adminControllers.assignDataForGetRequestedPartners,
    adminControllers.getRequestedPartner,
    adminViewControllers.getRequesterVendorList
);

// get all vendors depend on modules
router.get(
    '/vendor-management/:moduleName',
    adminControllers.assignDataForGetAllVendors,
    adminControllers.getAllVendors,
    adminViewControllers.getVendorList
);

// get a vendor with available details
router.get(
    '/vendor-management/view-vendor/:vendorId',
    adminControllers.getAVendor,
    adminViewControllers.getAVendor
);

// get vendor's personal details
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/personal-deatils',
    adminControllers.assignDataForGetAVendorPersonalDetails,
    adminControllers.getVendorADeatails,
    adminControllers.getAddidionalData,
    adminViewControllers.getAVendorDetails
);

// get vendor's personal details
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/service-and-facilities',
    adminControllers.vendorFacilitiesandServices,
    adminViewControllers.getAVendorServiceDetails
);
// get vendor's personal details
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/booking-management',
    adminControllers.getAppliants,
    adminViewControllers.getAVendorBookingManagement
);

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ambulance
// get vendor's personal details
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/ambulance-drivers',
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminViewControllers.getAAmbulanceDrivers
);
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/ambulance-facilities',
    adminControllers.getPartnerAndAmbulanceServices,
    adminViewControllers.getAAmbulanceFacilities
);
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/ambulance-quotes-management',
    adminControllers.setSearchqueryForAmbulanceQuotes,
    ambulanceVendorControllers.getPartnerAndQuotes,
    adminViewControllers.getAAmbulanceBooking
);

// ============================================================
// ============================================================
// ============================================================
// blood bank
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/blood-management',
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminViewControllers.getABloodbankBloodManage
);
// ============================================================
// ============================================================
// ============================================================
// meet the experts service and facilities
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/expert-service-management',
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    meetTheExpertVendorControllers.getMeetTheExpertsServices,
    adminViewControllers.getAExpertServiceManage
);

// expert booking management
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/expert-booking-management',
    adminControllers.setSearchForExportBookingList,
    meetTheExpertVendorControllers.getMeetTheExpertsBookingList,
    adminViewControllers.getAExpertsBooking
);
// ============================================================
// ============================================================
// ============================================================
// Jobs
// get all jobs
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/jobs',
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminControllers.assignDataForGetAllJobs,
    adminControllers.getAllJobs,
    adminViewControllers.getJobLists
);

// post a job
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/jobs/post-new-job',
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    jobPortalControllers.getJobCategories,
    adminViewControllers.postAJob
);

// update job
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/jobs/update-job/:jobId',
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminControllers.assignDataForGetJobAndCategories,
    adminViewControllers.updateAJob
);

// get a job details
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/jobs/view-a-job/:jobId',
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminControllers.assignUserIdAndPartnerId,
    jobPortalControllers.assignDataforGetJobandReceivedApplications,
    jobPortalControllers.getJobandapplications,
    adminViewControllers.viewAJob
);

// get a applicatnt details
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/jobs/applicant/:applicantId',
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    jobPortalControllers.findOneJobApplicant,
    adminViewControllers.viewAApplicant
);

// ============================================================
// ============================================================
// ============================================================
// quotes
// quotes
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/quotes',
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminControllers.assignUserIdAndPartnerId,
    medicalMarketControllers.getProductList,
    adminViewControllers.getQuotesDetails
);

// quotelist
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/quotes/lowest-quotes/:batchId',
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminControllers.assignUserIdAndPartnerId,
    medicalMarketControllers.getTop3LowestQuotes,
    adminViewControllers.getRespondQuotesDetails
);
// quotelist
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/quotes/get-a-quote/:quoteId',
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminControllers.assignUserIdAndPartnerId,
    medicalMarketControllers.getTop3LowestQuotes,
    adminViewControllers.getRespondQuotesDetails
);
// ============================================================
// ============================================================
// ============================================================
// study abroad
// study aboroad home
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/college-management',
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminControllers.createStudyAbroadDetailsidItNew,
    adminControllers.assignDataForGetStudyAbroad,
    studyAbroadVendorControllers.getACollege,
    adminViewControllers.getStudyAboradCollegeDetailsManagement
);

// study aboroad course management
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/course-management',
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminControllers.createStudyAbroadDetailsidItNew,
    adminControllers.assignDataForGetStudyAbroad,
    studyAbroadVendorControllers.getACollege,
    adminViewControllers.getStudyAboradCourseDetailsManagement
);

// study aboroad course management
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/facilities-management',
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminControllers.createStudyAbroadDetailsidItNew,
    adminControllers.assignDataForGetStudyAbroad,
    studyAbroadVendorControllers.getACollege,
    adminViewControllers.getStudyAboradFacilitieManagement
);

// ============================================================
// ============================================================
// ============================================================
// Hospital
// Hospital Package Management
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/package-management',
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminControllers.assignUserIdAndPartnerId,
    hospitalVenodrControllers.getAllHospitalPackageServices,
    adminViewControllers.getHospitalPackageManagement
);
// hospital package managemetn
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/hospital-service-management',
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminControllers.assignUserIdAndPartnerId,
    hospitalVenodrControllers.getAllHospitalServicesAndPackages,
    adminViewControllers.getHospitalServiceManagement
);

// hospital facilities managemetn
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/hospital-facilities-management',
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminControllers.assignUserIdAndPartnerId,
    hospitalVenodrControllers.assignDataFotGettHospitalFacilities,
    hospitalVenodrControllers.getHospitalDatas,
    adminViewControllers.getHospitalFacilitieManagement
);

// hospital facilities managemetn
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/hospital-specialist-management',
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminControllers.assignUserIdAndPartnerId,
    hospitalVenodrControllers.assignDataFotGettHospitalSpecialist,
    hospitalVenodrControllers.getHospitalDatas,
    adminViewControllers.getHospitalSpecialManagement
);

// hospital room facilities managemetn
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/hospital-room-facilities-management',
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminControllers.assignUserIdAndPartnerId,
    hospitalVenodrControllers.assignDataFotGettHospitalRoomFacilities,
    hospitalVenodrControllers.getHospitalDatas,
    adminViewControllers.getHospitalRoomFacilitiesManagement
);

// hospital nearby management
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/tourism/nearby-facilities-management',
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminControllers.assignUserIdAndPartnerId,
    hospitalVenodrControllers.assignDataFotGettHospitalNearby,
    hospitalVenodrControllers.getHospitalDatas,
    adminViewControllers.getHospitalNearbyFacilitiesManagemant
);

// hospital nearby hotel management management
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/tourism/nearby-hotels-management',
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminControllers.assignUserIdAndPartnerId,
    hospitalVenodrControllers.assignDataFotGettHospitalNearbyHotels,
    hospitalVenodrControllers.getHospitalDatas,
    adminViewControllers.getHospitalNearbyHotelsManagemant
);

// hospital nearby restaurents management management
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/tourism/nearby-restaurants-management',
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminControllers.assignUserIdAndPartnerId,
    hospitalVenodrControllers.assignDataFotGettHospitalNearbyRestaurents,
    hospitalVenodrControllers.getHospitalDatas,
    adminViewControllers.getHospitalNearbyReastaurentsManagemant
);

// hospital nearby restaurents management management
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/tourism/nearby-airport-management',
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminControllers.assignUserIdAndPartnerId,
    hospitalVenodrControllers.assignDataFotGettHospitalNearbyAirports,
    hospitalVenodrControllers.getHospitalDatas,
    adminViewControllers.getHospitalNearbyAirportsManagemant
);
// hospital nearby tarain management management
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/tourism/nearby-railwayStation-management',
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminControllers.assignUserIdAndPartnerId,
    hospitalVenodrControllers.assignDataFotGettHospitalNearbyRailwayStation,
    hospitalVenodrControllers.getHospitalDatas,
    adminViewControllers.getHospitalNearbyTrainsManagemant
);
// hospital nearby restaurents management management
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/tourism/nearby-busstops-management',
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminControllers.assignUserIdAndPartnerId,
    hospitalVenodrControllers.assignDataFotGettHospitalNearbyBusStops,
    hospitalVenodrControllers.getHospitalDatas,
    adminViewControllers.getHospitalNearbyBussManagemant
);

// organ management
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/organ/organ-management',
    authControllers.protect,
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminControllers.assignUserIdAndPartnerId,
    hospitalVenodrControllers.assignDataForGetAvailablities,
    hospitalVenodrControllers.getAvailiablity,
    hospitalVenodrControllers.getAllOrgansLists,
    adminViewControllers.getHospitalOrganAvailablity
);
// ============================================================
// ============================================================
// ============================================================
// Speak to Us
// Slots managemetn
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/slots-management',
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminControllers.assignDataForGetSpeakToUsAvailablity,
    // speakToUsControllers.verifyVendorDatas,
    speakToUsControllers.assignDataForFindMyAvailablitySlots,
    speakToUsControllers.getMyAvailablity,
    adminViewControllers.getSpeakToUsSlots
);

// ============================================================
// ============================================================
// ============================================================
// Online Consultancy
// Slots managemetn
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/consultancy-slots-management',
    adminControllers.checkAbsoluteModuleForConsultancy,
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminControllers.assignDataForGetOnlineConsultancyAvailablity,
    onlineConsultancyControllers.assignDataForFindMyAvailablitySlots,
    onlineConsultancyControllers.getMyAvailablity,
    onlineConsultancyControllers.getAvailablityDays,
    adminViewControllers.getConsultancyToUsSlots
);

// booking managements
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/booking-slots-management',
    adminControllers.checkAbsoluteModuleForConsultancy,
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminControllers.assignUserIdAndPartnerId,
    onlineConsultancyControllers.getMyConsultancyBookingData,
    adminViewControllers.getConsultancyBooking
);

// ============================================================
// ============================================================
// ============================================================
// Opticals Management
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/product-management',
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminControllers.getOpticalProductandOrders,
    adminViewControllers.getOpticalsProductsManagement
);

// booking managemetn
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/opticals-booking-management',
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminControllers.getAllBookinOpticalBookingdata,
    adminViewControllers.getOpticalsBookingManagement
);

// ============================================================
// ============================================================
// ============================================================
// hearing aid
// bearinga id product management
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/hearingaid-products-management',
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    hearingaidVendorControllers.getHearingaidProduct,
    adminViewControllers.getHearingAidProductManagement
);

// differenly able product mnagemnte
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/differently-abled-products-management',
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminControllers.assignUserIdAndPartnerId,
    differentlyabledControllers.getDifferentlyAbledProducts,
    adminViewControllers.getDifferentlyAbledProductManagement
);

// hearing aid hospital booking management
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/hospital-booking-management',
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    hearingaidVendorControllers.getHearingAidHospitalBookingData,
    adminViewControllers.getHearingAidHospitalProductManagement
);

// ============================================================
// ============================================================
// ============================================================
// equip management
router.get(
    '/vendor-management/vendor-details/Fitness/:vendorId/equipment-management',
    adminControllers.setModuleNameForFitness,
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminViewControllers.getAEquidmentManagement
);

// facilities management
router.get(
    '/vendor-management/vendor-details/Fitness/:vendorId/fitness-facilities-management',
    adminControllers.setModuleNameForFitness,
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminViewControllers.getFacilitiesManagement
);

// fitness videos management
router.get(
    '/vendor-management/vendor-details/Fitness/:vendorId/fitness-video-management',
    adminControllers.setModuleNameForFitness,
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    fitnessVendorControllers.assignDatatoGetVendorFitnessVideos,
    fitnessVendorControllers.getVendorFitnesVideos,
    adminViewControllers.getVideoManagement
);

// ============================================================
// ============================================================
// ============================================================
// laboratory
// get laboratory booking
router.get(
    '/vendor-management/vendor-details/Laboratory/:vendorId/laboratory-booking-management',
    adminControllers.setModuleNameForLaboratory,
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    laboratoryVendorControllers.getAllLaboratoryBookings,
    adminViewControllers.getLaboratoryBooking
);

// get laboratory services
router.get(
    '/vendor-management/vendor-details/Laboratory/:vendorId/laboratory-services-management',
    adminControllers.setModuleNameForLaboratory,
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    laboratoryVendorControllers.getAllLaboratoryCategories,
    adminViewControllers.getLaboratoryServices
);

// get laboratory facilities
router.get(
    '/vendor-management/vendor-details/Laboratory/:vendorId/laboratory-facilities-management',
    adminControllers.setModuleNameForLaboratory,
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminViewControllers.getLaboratoryFacilities
);

// get laboratory lab images
router.get(
    '/vendor-management/vendor-details/Laboratory/:vendorId/laboratory-lab-images-management',
    adminControllers.setModuleNameForLaboratory,
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminViewControllers.getLaboratoryImages
);

// ============================================================
// ============================================================
// ============================================================
// pharmacy
// product management
router.get(
    '/vendor-management/vendor-details/Pharmacy/:vendorId/pharmacy-product-management',
    adminControllers.setModuleNameForPharmacy,
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    pharmacyVendorControllers.getMyMedicines,
    adminViewControllers.getPharmacyProductsView
);
// quote managemet
router.get(
    '/vendor-management/vendor-details/Pharmacy/:vendorId/quotes-management',
    adminControllers.setModuleNameForPharmacy,
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    pharmacyVendorControllers.getMyMedicineRequests,
    adminViewControllers.getPharmacyView
);
// ============================================================\
// ============================================================\
// ============================================================\
// medical market
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/market-product-management',
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    medicalMarketControllers.getMyProducts,
    adminViewControllers.getMedicalMarketManageProduct
);
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/product-quotes-management',
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    medicalMarketControllers.getMyQuotes,
    adminViewControllers.getMedicalMarketManageQuotes
);

// ============================================================
// ============================================================
// ============================================================
// Second Opinion
router.get(
    '/vendor-management/vendor-details/:moduleName/:vendorId/sponsers-managment',
    adminControllers.checkAbsoluteModuleForConsultancy,
    adminControllers.assignDataForGetVendorDetails,
    adminControllers.getVendorADeatails,
    adminControllers.assignUserIdAndPartnerId,
    adminControllers.assignDataForGetVendorOpinionDetails,
    adminControllers.getVendorADeatails,
    secondOpinionControllers.assignDataForgetMySponserList,
    secondOpinionControllers.getAllOpinionSponcers,
    adminViewControllers.getVendorOpinionList
);

// ************************************************************
// ************************************************************
// ************************************************************
// ************************************************************
// ************************************************************
// ************************************************************
// // SEcond optini slots
// router.get(
//     '/vendor-management/vendor-details/:moduleName/:vendorId/second-opinion-slots-management',
//     adminControllers.assingDataForCheckSecondOpinion,
//     adminControllers.assignDataForGetVendorDetails,
//     adminControllers.getVendorADeatails,
//     adminControllers.assignDataForGetOnlineConsultancyAvailablity,
//     secondOpinionControllers.assignDataForFindMyAvailablitySlots,
//     secondOpinionControllers.getMyAvailablity,
//     secondOpinionControllers.getAvailablityDays,
//     adminViewControllers.getVendorSecondOpinionSlots
// );

// ************************************************************
// ************************************************************
// ************************************************************
// ************************************************************
// ************************************************************
// ************************************************************
// // SEcond optini Booking management
// router.get(
//     '/vendor-management/vendor-details/:moduleName/:vendorId/second-opinion-booking-management',
//     adminControllers.assingDataForCheckSecondOpinion,
//     adminControllers.assignDataForGetVendorDetails,
//     adminControllers.getVendorADeatails,
//     adminControllers.assignDataForGetOnlineConsultancyAvailablity,
//     secondOpinionControllers.getSecondOpinionServiceBookings,
//     adminViewControllers.getVendorSecondOpinionBookingManagement
// );

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// users
router.get(
    '/user-management/',
    adminControllers.assignDataForFindUsers,
    adminControllers.getAllUsers,
    adminViewControllers.getAlluserHome
);

// get a user
router.get(
    '/user-management/view-user/:userEId',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    adminViewControllers.getAUser
);

// ============================================================
// ============================================================
// ============================================================
// ambulance
router.get(
    '/user-management/ambulance-service/:userEId',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    adminControllers.assignUserIdForUser,
    ambulanceControllers.getUsersBookedData,
    adminViewControllers.getUserAmbulanceHome
);

// ============================================================
// ============================================================
// ============================================================
// homecare
// homecare home
router.get(
    '/user-management/homecare-services/:userEId',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    homecareContro.getUserBookedHomecareServices,
    adminViewControllers.getUserHomecareHome
);
// ============================================================
// ============================================================
// ============================================================
// expert
// expert home
router.get(
    '/user-management/meet-the-expert-service/:userEId',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    expertContro.getUserBookedExpertServices,
    adminViewControllers.getUserExpertHome
);

// ============================================================
// ============================================================
// ============================================================
// deaddiction
// deaddiction home
router.get(
    '/user-management/de-addiction-service/:userEId',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    deaddictionContro.getUserBookedDeaddictionServices,
    adminViewControllers.getUserDeaddictionHome
);
// ============================================================
// ============================================================
// ============================================================
// blood donation
// blood donner management
router.get(
    '/user-management/blood-donation-service/:userEId/blood-donner-list',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    bloodDonationContro.assignDataForGetBloodDonners,
    bloodDonationContro.getBloodDonners,
    adminViewControllers.getUserBloodDonationHome
);

// blood request management
router.get(
    '/user-management/blood-donation-service/:userEId/blood-request-management',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    bloodDonationContro.assignDataForGetBloodDonners,
    bloodDonationContro.getBloodDonners,
    adminViewControllers.getUserBloodDonationHome
);
// ============================================================
// ============================================================
// ============================================================
// Meet The Expert
// blood donation
router.get(
    '/user-management/blood-donation-service/:userEId/blood-donner-list',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    bloodDonationContro.assignDataForGetBloodDonners,
    bloodDonationContro.getBloodDonners,
    adminViewControllers.getUserBloodDonationHome
);

// blood requests
router.get(
    '/user-management/blood-donation-service/:userEId/user-blood-request',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    bloodDonationContro.getUserBloodRequests,
    adminViewControllers.getUserBloodDonationRequester
);
// blood requests
router.get(
    '/user-management/blood-donation-service/:userEId/user-blood-request-received',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    bloodDonationContro.getUserReceivedBloodRequests,
    adminViewControllers.getUserBloodDonationRequest
);

// ============================================================
// ============================================================
// ============================================================
// opticals
// order management
router.get(
    '/user-management/opticals-service/:userEId/order-management',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    opticalsControllers.assignDataForOpticalOrdersGet,
    opticalVendorControllers.getMyOpticalOrders,
    adminViewControllers.getUserOpticalsOrders
);

// booking management
router.get(
    '/user-management/opticals-service/:userEId/booking-management',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    opticalsControllers.assignDataForOpticalOrdersGet,
    opticalVendorControllers.getMyOpticalBooking,
    adminViewControllers.getUserOpticalsBooking
);

// ============================================================
// ============================================================
// ============================================================
// hearing aid
// booking management
router.get(
    '/user-management/hearingaid-service/:userEId/hospital-booking-management',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    opticalsControllers.assignDataForOpticalOrdersGet,
    hearingaidVendorControllers.getMyHearingAidBooking,
    adminViewControllers.getUserHearingAidBookingHospital
);

// hearig aid order management
router.get(
    '/user-management/hearingaid-service/:userEId/hearingadi-order-management',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    opticalsControllers.assignDataForOpticalOrdersGet,
    hearingaidVendorControllers.getMyHearingAidOrders,
    adminViewControllers.getUserHearingAidOrdes
);

// ============================================================
// ============================================================
// ============================================================
// different abled product
// differently order management
router.get(
    '/user-management/differently-abled-service/:userEId/differently-abled-order-management',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    opticalsControllers.assignDataForOpticalOrdersGet,
    hearingaidVendorControllers.getMyDifferentlyAbledOrders,
    adminViewControllers.getUserDifferentlyabliedOrdes
);

// ============================================================
// ============================================================
// ============================================================
// donation and charity
// my donation
router.get(
    '/user-management/donation-and-charity/:userEId/user-fund-donation',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    opticalsControllers.assignDataForOpticalOrdersGet,
    donnationVendorControllers.assignDataForGetAllDonationHistory,
    donnationVendorControllers.getAllFundDonationHistory,
    adminViewControllers.getUserFundDonations
);

// my donation requst donation
router.get(
    '/user-management/donation-and-charity/:userEId/user-fund-requests',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    opticalsControllers.assignDataForOpticalOrdersGet,
    donnationVendorControllers.asssignDataForGetAllDonationHistory,
    donnationVendorControllers.getAllDonationRequstHistoty,
    adminViewControllers.getAllDonationRequestHistory
);

// user product donations
router.get(
    '/user-management/donation-and-charity/:userEId/product-donations',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    opticalsControllers.assignDataForOpticalOrdersGet,
    donnationVendorControllers.getIndividualProductDonationsHistory,
    adminViewControllers.getAllUserProductDonationHistory
);

// user product donations request
router.get(
    '/user-management/donation-and-charity/:userEId/product-donation-request',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    opticalsControllers.assignDataForOpticalOrdersGet,
    donnationVendorControllers.getIndividualProductDonationsHistory,
    adminViewControllers.getAllUserProductDonationHistory
);

// ============================================================
// ============================================================
// ============================================================
// Medical records
router.get(
    '/user-management/medical-records/:userEId/medical-records-management',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    opticalsControllers.assignDataForOpticalOrdersGet,
    medicalRecordsVendorControllers.getMedicalRecordsThroughMember,
    adminViewControllers.getMedicalRecords
);

// ============================================================
// ============================================================
// ============================================================
// Pharmacy
// get all user quote
router.get(
    '/user-management/pharmacy/:userEId/quotes-management',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    opticalsControllers.assignDataForOpticalOrdersGet,
    pharmacyVendorControllers.getMyPharmacyOrderRequest,
    adminViewControllers.getPharmacyQuotes
);
// // get a quote
// router.get(
//     '/user-management/pharmacy/:userEId/view-a-order/:orderId',
//     adminControllers.assignDataForGetAUser,
//     adminControllers.getAUser,
//     opticalsControllers.assignDataForOpticalOrdersGet,
//     pharmacyVendorControllers.getAPharmacyOrderRequest,
//     adminViewControllers.getPharmacyAQuotes
// );

// ============================================================
// ============================================================
// ============================================================
// jobportsl
// get all applied jobs
router.get(
    '/user-management/jobportal/:userEId/applied-jobs',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    adminControllers.assignUserIdForUser,
    jobPortalControllers.getMyJobApplications,
    adminViewControllers.getJobApplications
);

// posted jobs
router.get(
    '/user-management/jobportal/:userEId/posted-jobs',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    adminControllers.assignUserIdForUser,
    adminControllers.assignDataForGetJobs,
    jobPortalControllers.getMyJobList,
    adminViewControllers.getUserJobs
);
// post a jobs
router.get(
    '/user-management/jobportal/:userEId/post-new-job',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    adminControllers.assignUserIdForUser,
    jobPortalControllers.getJobCategories,
    adminViewControllers.postUserJob
);

// update a jobs
router.get(
    '/user-management/jobportal/:userEId/update-job/:jobId',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    adminControllers.assignDataforDocsUserId,
    adminControllers.assignDataForGetJobAndCategories,
    adminViewControllers.updateUserJob
);

// view a job
router.get(
    '/user-management/jobportal/:userEId/view-a-job/:jobId',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    adminControllers.assignUserIdForUser,
    adminControllers.assignDataForGetJobs,
    jobPortalControllers.assignDataforGetJobandReceivedApplications,
    jobPortalControllers.getJobandapplications,
    adminViewControllers.viewAUserJob
);

// view a applicant
router.get(
    '/user-management/jobportal/:userEId/applicant/:applicantId',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    adminControllers.assignUserIdForUser,
    jobPortalControllers.findOneJobApplicant,
    adminViewControllers.viewAUserApplicant
);

// ============================================================
// ============================================================
// ============================================================
// Medical Market
router.get(
    '/user-management/market/:userEId/product-order-management',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    adminControllers.assignUserIdForUser,
    medicalMarketControllers.getMyMarketOrders,
    medicalMarketControllers.mergetMarketOrders,
    adminViewControllers.getMedicalMarketOrders
);
// view a produc order
router.get(
    '/user-management/market/:userEId/product-order-management/view-order/:batchId',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    adminControllers.assignUserIdForUser,
    medicalMarketControllers.assignDataForGetMarketOrders,
    medicalMarketControllers.getMarketOrderBatch,
    adminViewControllers.getAMedicalMarketOrderList
);
// product quotes management
router.get(
    '/user-management/market/:userEId/quotes',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    adminControllers.assignUserIdForUser,
    medicalMarketControllers.getProductListForUser,
    adminViewControllers.getMedicalMarketQuotes
);
// quotelist
router.get(
    '/user-management/market/:userEId/quotes/lowest-quotes/:batchId',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    adminControllers.assignUserIdForUser,
    adminControllers.assignDataForGetJobs,
    medicalMarketControllers.getTop3LowestQuotes,
    adminViewControllers.getUserRespondQuotesDetails
);
// quotelist
router.get(
    '/user-management/market/:userEId/quotes/get-a-quote/:quoteId',
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    adminControllers.assignUserIdForUser,
    adminControllers.assignDataForGetJobs,
    medicalMarketControllers.getTop3LowestQuotes,
    adminViewControllers.getUserRespondQuotesDetails
);
// ============================================================
// ============================================================
// ============================================================
// Online Consultancy
router.get(
    `/user-management/online-consultancy/:userEId/slot-booking-management`,
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    adminControllers.assignUserIdForUser,
    adminControllers.assignDataForGetJobs,
    onlineConsultancyControllers.getMyConsultancyBookingDataUser,
    adminViewControllers.getUserConsulatacyBooking
);

// ============================================================
// ============================================================
// ============================================================
// laboratoru
router.get(
    `/user-management/laboratory/:userEId/laboratory-booking-management`,
    adminControllers.assignDataForGetAUser,
    adminControllers.getAUser,
    adminControllers.assignUserIdForUser,
    laboratoryVendorControllers.getAllMyLaboratoryBooking,
    adminViewControllers.getUserLaboratoryBooking
);

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// modules management
router.get('/module-management/', adminViewControllers.getModuleHome);

// ============================================================
// ============================================================
// ============================================================
// homecare modules
router.get(
    '/module-management/homecare-service/',
    moduleContro.getAllHomecareServices,
    adminViewControllers.getModuleHomecareHome
);
// ============================================================
// ============================================================
// ============================================================
// deaddiction modules
router.get(
    '/module-management/deaddiction-service/',
    moduleContro.getAllDeaddictionServices,
    adminViewControllers.getModuleDeaddictionHome
);
// ============================================================
// ============================================================
// ============================================================
// ambulance modules
router.get(
    '/module-management/ambulance-service/',
    moduleContro.getAllAmbulanceServices,
    adminViewControllers.getModulesAmbulanceHome
);
// ============================================================
// ============================================================
// ============================================================
// Hospita Packages
// Hospital categories
router.get(
    '/module-management/hospital/categories',
    moduleContro.getAllHospitalPackages,
    adminViewControllers.getModulesHospitalPackageHome
);

// Organ lists
router.get(
    '/module-management/hospital/organs',
    moduleContro.getAllOrgans,
    adminViewControllers.getModulesOrgans
);

// ============================================================
// ============================================================
// ============================================================
// Fitness
router.get(
    '/module-management/fitness/',
    moduleContro.getAllNutritions,
    adminViewControllers.getModulesFitnesNutrionsHome
);

// ============================================================
// ============================================================
// ============================================================
// Pharmacy
// cate4gories
router.get(
    '/module-management/pharmacy/categories',
    moduleContro.getAllPharmacyCategories,
    adminViewControllers.getModulesFitnesPharmacyCategories
);
// Pharmacy
router.get(
    '/module-management/pharmacy/medicines',
    moduleContro.getAllMedicinesAndCategoreis,
    adminViewControllers.getModulesFitnesPharmacyMedicines
);

// ============================================================
// ============================================================
// ============================================================
// Laboratory
router.get(
    '/module-management/laboratory/categories',
    moduleContro.getAllLaboratoryCategories,
    adminViewControllers.getModulesFitnesLaboratoryCategories
);

// ============================================================
// ============================================================
// ============================================================
// jobs
// job categories
router.get(
    '/module-management/job/categories',
    moduleContro.getAllJobCategories,
    adminViewControllers.getModuleJobCategories
);

// ============================================================
// ============================================================
// ============================================================
// Second Opinion
// parter request
router.get(
    '/module-management/second-opinion/new-sponser-requests',
    moduleContro.getAllRequestedOpinionSponsers,
    adminViewControllers.getAllRequestedOpinionSponsers
);

// ============================================================
// ============================================================
// ============================================================
// One Us
// Blog categories
router.get(
    '/module-management/one-us/blog-categories',
    moduleContro.getAllBlogCategories,
    adminViewControllers.getAllOneUsBlogCategories
);

// Blogs
router.get(
    '/module-management/one-us/blogs',
    moduleContro.getAllBlogs,
    adminViewControllers.getAllOneUsBlogs
);

// Video categories
router.get(
    '/module-management/one-us/video-categories',
    moduleContro.getAllVideoCategories,
    adminViewControllers.getAllOneUsVideoCategories
);

// videos
router.get(
    '/module-management/one-us/videos',
    moduleContro.getAllVideos,
    adminViewControllers.getAllOneUsVideos
);
// videos
router.get(
    '/module-management/one-us/videos/requests',
    moduleContro.assignDataForGetAllRequestedVideso,
    moduleContro.getAllRequstedVideos,
    adminViewControllers.getAllOneUsVideoRequests
);

// blogs
router.get(
    '/module-management/one-us/blogs/requests',
    moduleContro.assignDataForGetAllRequestedBlogs,
    moduleContro.getAllRequstedBlogs,
    adminViewControllers.getAllOneUsBlogsRequests
);

// ============================================================
// ============================================================
// ============================================================
// doctory categories
router.get(
    '/module-management/doctor-categories',
    moduleContro.getAllDoctoryCategories,
    adminViewControllers.getAllDoctorCategories
);

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ambulance management
// Ambulance management home
router.get('/ambulance-alert', adminViewControllers.getModuleAmbulanceHome);
// ambulance drivers
router.get(
    '/ambulance-alert/ambulance-driver-management',
    trackAmbulanceManagement.getAllAmbulanceDrivers,
    adminViewControllers.getModuleAmbulanceDriver
);
// ambulance drivers
router.get(
    '/ambulance-alert/traffic-police-management',
    trackAmbulanceManagement.getAllTrafficPoliceModel,
    adminViewControllers.getModuleTrafficPolice
);

// request new ambulance request
router.get(
    '/ambulance-alert/request-management/new-ambulance-request',
    trackAmbulanceManagement.getAllNewAmbulanceAlert,
    adminViewControllers.getModuleAlertNewAlerts
);

// request new Veify request
router.get(
    '/ambulance-alert/request-management/verification-requests',
    trackAmbulanceManagement.assignDataForGetAllVerifyRequest,
    trackAmbulanceManagement.getAllVerifyRequest,
    adminViewControllers.getModuleAlertVerifyAlerts
);
// ============================================================
// ============================================================
// ============================================================
// homecare modules
router.get(
    '/module-management/market/categoreis/',
    moduleContro.getAllMedicalMarketServices,
    adminViewControllers.getModuleMedicalMarketCategoreis
);

// ============================================================
// ============================================================
// ============================================================
// Meet the Experts
router.get(
    '/module-management/meet-the-experts/categories/',
    moduleContro.getAllMeetTheExpertServices,
    adminViewControllers.getModuleMeetTheeExpertCategoreis
);

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Donation management

// ============================================================
// ============================================================
// ============================================================
// donation and charity
router.get(
    '/donation-management/donation-and-charity/active-donation-management'
);

// ============================================================
// ============================================================

// export routes
module.exports = router;
