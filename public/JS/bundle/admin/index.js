import 'core-js/actual';
import 'regenerator-runtime/runtime.js';
import axios from 'axios';
import {
    assignPrivateAmbulanceDriver,
    cancelQuoteUser,
    manageAmbulaceDrivers,
    manageAmbulacServices,
    updateAmbulanceStatus,
    updateUserAmbulanceStatus
} from './controllers/ambulanceControllers';

import {
    createDeaddictionServices,
    deaddictionStatusUpdate,
    deaddictionStatusUpdateUser,
    manageDeaddictionFacilities,
    updateDeaddictionService
} from './controllers/deaddictionControllers';

import {
    createHomecareServices,
    homecareStatusUpdate,
    homecareStatusUpdateUser,
    manageHomecareFacilities,
    updateHomecareService
} from './controllers/homecareControllers';

import {
    updatePersonalData,
    upodatePartnerStatus
} from './controllers/sharedControllers';

import {
    createAmbulanceService,
    createDeaddictionService,
    createDoctorCategorie,
    createHomecareService,
    createHospitalOrgan,
    createHospitalPackage,
    createLaboratoryService,
    createMeetTheExpertCategories,
    createNewLMarketCategorie,
    createNewNutritions,
    createOneUsBlogs,
    createOneUsBlogsCategoreis,
    createOneUsVideos,
    createOneUsVideosCategoreis,
    createPharmacyMedicineService,
    createPharmacyService,
    updateAmbualnceServices,
    updateDeaddictionServices,
    updateDoctorCategories,
    updatehomecaresService,
    updateHospitalOrganList,
    updateHospitalPackageList,
    updateLaboratoryService,
    updateMarketCategorieList,
    updateMeetTheExpertCategories,
    updateNutritionsFoodDetails,
    updateOneUsBlogs,
    updateOneUsBlogsService,
    updateOneUsBlogStatus,
    updateOneUsVideos,
    updateOneUsVideosService,
    updateOneUsVideoStatus,
    updatePharmacyMedicines,
    updatePharmacyService
} from './controllers/moduleControllers';
import {
    bloodManage,
    createNewBloodDonner,
    updateBloodDonner,
    updateBloodRequesterUpdate,
    updateUserBloodRequest
} from './controllers/bloodDonnationContollers';
import {
    createMeetTheExpertServices,
    expertStatusUpdate,
    expertStatusUpdateUser,
    manageExpertFacilities,
    updateMeetTheExpertServices
} from './controllers/meetTheExpertControllers';
import {
    assignAmbulanceDriver,
    createNewAmbulancedriver,
    createNewTrafficPolice,
    updateAmbulanceRequestStatus,
    updateNewAmbulancedriver,
    updateTrafficPolice
} from './controllers/ampulanceDriverControllers';
import {
    studyAbroadCourseUpdate,
    updateStudyAbroadcollegeDetails,
    updateStudyAbroadFacilities
} from './controllers/studyAbroadControllers';
import {
    createNewOrganAvailablity,
    hospitalDoctorManagement,
    hospitalFacilityManagement,
    hospitalRoomFacilityManagement,
    hospitalRoomImages,
    hospitalServiceManagement,
    manageAvailableHospitalFacilities,
    manageHopitaPackage,
    manageHospitalPackageSubCategory,
    manageHospitalServiceList,
    manageHospitalSpecialities,
    manageHospitalssPackType,
    manageNearByAirportsinHospitals,
    manageNearByBusInHospitals,
    manageNearByHotelsinHospitals,
    manageNearByRestaurentsinHospitals,
    manageNearByTrainInHospitals,
    removeHospitalRoomImage,
    updateHospital,
    updateHospitalNearbyFacililities,
    updateOrganAvailablity
} from './controllers/hospitalControllers';
import {
    counsilarStatusUpdate,
    updateSchudles
} from './controllers/speaktoUsControllers';
import {
    createNewOpticalProduct,
    updateOpticals,
    updateOpticalProduct,
    updateOpticalProductOrderStatus,
    updateOpticalShowRoomStatus,
    updateOpticalProductOrderStatusUser
} from './controllers/opticalsControllers';
import {
    createNewDiffProduct,
    createNewHearingAidProduct,
    updateDiffOrderProductOrderStatus,
    updateHearingAidHospitalBookingStatus,
    updateHearingAidHospitalUserBookingStatus,
    updateHearingAidProduct,
    updateHearingaidProductOrderStatus,
    updateHearingAidUserProductOrderStatus,
    updateNewDiffProduct
} from './controllers/hearingaidControllers';
import { updateDifferentlyUserProductOrderStatus } from './controllers/differenlyAbleedControllers';
import { getRecordsForMembers } from './controllers/medicalRecordsControllers';
import {
    createNewFitnessVideoFromVendor,
    manageEquipmentImages,
    manageFacilitiesManagement,
    updateFitenessWorkoutVideo,
    updatFitnessVideoFromVendor
} from './controllers/fitnessControllers';
import {
    addLaboratoryImages,
    cancelUserLaboratoryBookings,
    createNewLaboratoryFacilities,
    manageLaboratoryTest,
    removeLaboratoryImages,
    updateLaboratory,
    updateLaboratoryBooking
} from './controllers/laboratoryControllers';
import {
    addParmacyMedicines,
    updatePharmacyBooking,
    updatePharmacyQuoteStatusFromUser
} from './controllers/pharmacyControllers.';
import {
    createNewCategories,
    createNewJobCategories,
    postNewJob,
    postNewUserJob,
    updateJobCategories,
    updateMyJob,
    updateNewUserJob
} from './controllers/jobControllers';
import {
    createNewMarketProduct,
    updateMarketProduct,
    updateMarketProductOrderStatus,
    updateMarketProductQuoteStatus
} from './controllers/medicalMarketControllers';
import {
    cancelAQuotes,
    cancelAUserQuotes,
    cancelMedicalMarketOrders,
    newProductQuote,
    newUserProductQuote,
    updateQuotes,
    updateUserQuotes
} from './controllers/quotesControllers';
import {
    updateConsultancySchudles,
    updateConsultantStatus,
    updateUserConsultantStatus
} from './controllers/onlineConsultancyControllers';
import {
    updateOpinionDoctorStatus,
    updateOpinionRequestData,
    updateOpinionSelectedSponser,
    updateSecondOpinionSchudles,
    updateSecondOpinionVendorBookingStatus
} from './controllers/secondOpinionControllers';

// shared router
const add_doctor_sub_categories = document.getElementById(
    'add_doctor_sub_categories'
);
// shared router
const addUpdatedSubCategorie = document.querySelectorAll(
    '.addUpdatedSubCategorie'
);
const create_new_doctory_categorie = document.getElementById(
    'create_new_doctory_categorie'
);
const update_doctor_category = document.getElementById(
    'update_doctor_category'
);

// update venndor request
const update_partner_request_status = document.getElementById(
    'update_partner_request_status'
);

// homecare
const create_homecare = document.getElementById('create_homecare');
const update_personal_details = document.getElementById(
    'update_personal_details'
);
const doctoryCategorie = document.getElementById('category');
const create_homecare_service = document.getElementById(
    'create_homecare_service'
);
const manage_homecare_service = document.getElementById(
    'manage_homecare_service'
);
const create_homecare_facilities = document.getElementById(
    'create_homecare_facilities'
);
const manage_homecare_facilities = document.getElementById(
    'manage_homecare_facilities'
);
const homecare_booking_status = document.getElementById(
    'homecare_booking_status'
);

// deaddiction
// const create_homecare = document.getElementById('create_homecare');
// const update_personal_details = document.getElementById(
//     'update_personal_details'
// );
const create_deaddiction_service = document.getElementById(
    'create_deaddiction_service'
);
const manage_deaddiction_service = document.getElementById(
    'manage_deaddiction_service'
);
const create_deaddiction_facilities = document.getElementById(
    'create_deaddiction_facilities'
);
const manage_deaddiction_facilities = document.getElementById(
    'manage_deaddiction_facilities'
);
const deaddiction_booking_status = document.getElementById(
    'deaddiction_booking_status'
);

// ambulance
const create_ambulance_driver = document.getElementById(
    'create_ambulance_driver'
);
const manage_ambulance_drivers = document.getElementById(
    'manage_ambulance_drivers'
);
const create_ambulance_facilities = document.getElementById(
    'create_ambulance_facilities'
);
const update_ambulance_facilities = document.getElementById(
    'update_ambulance_facilities'
);
const activeAmbulanceMapStart = document.querySelectorAll(
    '.activeAmbulanceMapStart'
);
const historyAmbulanceMapStart = document.querySelectorAll(
    '.historyAmbulanceMapStart'
);
const ambulance_quote_status = document.getElementById(
    'ambulance_quote_status'
);

// blood donation
const available_blood_units = document.getElementById('available_blood_units');
const update_blood_units = document.getElementById('update_blood_units');

// meet the experts
const create_expert_provide_services = document.getElementById(
    'create_expert_provide_services'
);
const update_expert_provide_service = document.getElementById(
    'update_expert_provide_service'
);
const create_expter_facilities = document.getElementById(
    'create_expter_facilities'
);
const update_expert_facilities = document.getElementById(
    'update_expert_facilities'
);
const expert_booking_status = document.getElementById('expert_booking_status');

// hearinga aid
const update_hearingaid = document.getElementById('update_hearingaid');
const update_hearingaid_vendor_hospital_booking_status =
    document.getElementById('update_hearingaid_vendor_hospital_booking_status');
const add_new_features = document.getElementById('add_new_features');
const add_update_features = document.querySelectorAll('.add_update_features');
const add_new_hearingaid_product_details = document.getElementById(
    'add_new_hearingaid_product_details'
);
const add_update_hearingaid_product_details = document.querySelectorAll(
    '.add_update_hearingaid_product_details'
);
const deleteUpdateProductDetails = document.querySelectorAll(
    '.deleteUpdateProductDetails'
);
const addHearingAidProductSubUpdateDetails = document.querySelectorAll(
    '.addHearingAidProductSubUpdateDetails'
);
const deleteHearingaidSubDetails = document.querySelectorAll(
    '.deleteHearingaidSubDetails'
);
const deleteUpdatedSubColorDetails = document.querySelectorAll(
    '.deleteUpdatedSubColorDetails'
);
const add_new_hearingaid_color_details = document.getElementById(
    'add_new_hearingaid_color_details'
);
const update_hearingaid_product = document.getElementById(
    'update_hearingaid_product'
);
const create_new_hearingaid_product = document.getElementById(
    'create_new_hearingaid_product'
);
const update_vendor_hearingaid_product_status = document.getElementById(
    'update_vendor_hearingaid_product_status'
);
const update_user_hearingaid_product_status = document.getElementById(
    'update_user_hearingaid_product_status'
);
const update_user_diffable_product_status = document.getElementById(
    'update_user_diffable_product_status'
);
const update_hearingaid_user_hospital_booking_status = document.getElementById(
    'update_hearingaid_user_hospital_booking_status'
);
const update_vendor_diffable_product_status = document.getElementById(
    'update_vendor_diffable_product_status'
);
// differently ablie product
const newProductType = document.getElementById('newProductType');
const updateProdutType = document.querySelectorAll('.updateProdutType');
const create_new_differently_product = document.getElementById(
    'create_new_differently_product'
);
const update_differenly_product = document.getElementById(
    'update_differenly_product'
);

// medical records
const medical_record_change_member = document.getElementById(
    'medical_record_change_member'
);

// ============================================================
// ============================================================
// ============================================================
// study abroad
const addSport = document.getElementById('addSport');
const update_studyabroad_collegedetails = document.getElementById(
    'update_studyabroad_collegedetails'
);
const addPgCourse = document.getElementById('addPgCourse');
const addyear = document.getElementById('addyear');
const ugCourses = document.getElementById('ugCourses');
const update_studyabroad_coursedetails = document.getElementById(
    'update_studyabroad_coursedetails'
);
const addEmbassy = document.getElementById('addEmbassy');
const update_studyabroad_facilities = document.getElementById(
    'update_studyabroad_facilities'
);

// ============================================================
// ============================================================
// ============================================================
// Hospital

// ============================================================
// Package
const add_new_hospital_package = document.getElementById(
    'add_new_hospital_package'
);
const update_hospital_category = document.getElementById(
    'update_hospital_category'
);
const addServiceList = document.querySelectorAll('addServiceList');
const addServicesForHospitals = document.querySelectorAll(
    '.addServicesForHospitals'
);
const updateServicesForHospitals = document.querySelectorAll(
    '.updateServicesForHospitals'
);
const add_service_list = document.getElementById('add_service_list');

const add_hospital_service = document.getElementById('add_hospital_service');
const update_hospital_details_service = document.getElementById(
    'update_hospital_details_service'
);
const add_hospital_facility = document.getElementById('add_hospital_facility');
const update_hospital_facilities = document.getElementById(
    'update_hospital_facilities'
);
const add_doctor_details = document.getElementById('add_doctor_details');
const update_doctor_details = document.getElementById('update_doctor_details');
const add_hospital_room_facility = document.getElementById(
    'add_hospital_room_facility'
);
const update_hospital_room_facilities = document.getElementById(
    'update_hospital_room_facilities'
);
const add_hospital_images = document.querySelectorAll('.add_hospital_images');
const remove_hospital_images = document.querySelectorAll(
    '.remove_hospital_images'
);
const manage_hospital_available_facilities = document.getElementById(
    'manage_hospital_available_facilities'
);
const manage_hospital_available_specialities = document.getElementById(
    'manage_hospital_available_specialities'
);

// tourism

const update_nearby_facilities = document.getElementById(
    'update_nearby_facilities'
);
const add_nearby_hospital_hotels_service = document.getElementById(
    'add_nearby_hospital_hotels_service'
);
const update_nearby_hotels_service = document.getElementById(
    'update_nearby_hotels_service'
);
const add_nearby_hospital_restaurents = document.getElementById(
    'add_nearby_hospital_restaurents'
);
const update_nearby_restaurents_service = document.getElementById(
    'update_nearby_restaurents_service'
);
const add_nearby_hospital_airport_service = document.getElementById(
    'add_nearby_hospital_airport_service'
);
const update_nearby_airport_service = document.getElementById(
    'update_nearby_airport_service'
);
const add_nearby_hospital_train_service = document.getElementById(
    'add_nearby_hospital_train_service'
);
const update_nearby_train_service = document.getElementById(
    'update_nearby_train_service'
);
const add_nearby_hospital_bus_service = document.getElementById(
    'add_nearby_hospital_bus_service'
);
const update_nearby_bus_service = document.getElementById(
    'update_nearby_bus_service'
);
const add_organ_availablity = document.getElementById('add_organ_availablity');
const update_organ_availablity = document.getElementById(
    'update_organ_availablity'
);

// ============================================================
// ============================================================
// ============================================================
// Speek to us
const addSchedules = document.querySelectorAll('.addSchedules');
const hourlyAdd = document.querySelectorAll('.hourlyAdd');
const update_schudle = document.getElementById('update_schudle');
const counsilarStatus = document.getElementById('counsilarStatus');

// ============================================================
// ============================================================
// ============================================================
// Online consultancy
const update_consultacy_schudles = document.getElementById(
    'update_consultacy_schudles'
);
const consultancyBookType = document.getElementById('consultancyBookType');
const update_online_consultancy_status = document.getElementById(
    'update_online_consultancy_status'
);
const update_opd_consultancy_status = document.getElementById(
    'update_opd_consultancy_status'
);
const update_user_online_consultancy_status = document.getElementById(
    'update_user_online_consultancy_status'
);
const update_user_opd_consultancy_status = document.getElementById(
    'update_user_opd_consultancy_status'
);

// ============================================================
// ============================================================
// ============================================================
//  opticals
const update_opticals = document.getElementById('update_opticals');
const addFrameDetails = document.getElementById('addFrameDetails');
const create_new_optical_product = document.getElementById(
    'create_new_optical_product'
);
const update_optical_product = document.getElementById(
    'update_optical_product'
);
const deleteFrameDetailsForUpdate = document.querySelectorAll(
    '.deleteFrameDetailsForUpdate'
);
const addFrameDetailsForUpdate = document.querySelectorAll(
    '.addFrameDetailsForUpdate'
);
const update_vendor_optical_product_status = document.getElementById(
    'update_vendor_optical_product_status'
);
const update_user_optical_product_status = document.getElementById(
    'update_user_optical_product_status'
);
const update_optical_showroom_booking = document.getElementById(
    'update_optical_showroom_booking'
);
const update_user_optical_showroom_booking = document.getElementById(
    'update_user_optical_showroom_booking'
);
// ============================================================
// ============================================================
// ============================================================
// job
const jobCategory = document.getElementById('jobCategory');
const createNewJob = document.getElementById('createNewJob');
const updateJob = document.getElementById('updateJob');
const createNewUserJob = document.getElementById('createNewUserJob');
const updateUserJob = document.getElementById('updateUserJob');

// ============================================================
// ============================================================
// ============================================================
// market place
const create_medical_product = document.getElementById(
    'create_medical_product'
);
const update_medical_product = document.getElementById(
    'update_medical_product'
);
const update_vendor_market_product_status = document.getElementById(
    'update_vendor_market_product_status'
);
const update_vendor_market_quote_status = document.getElementById(
    'update_vendor_market_quote_status'
);
const negotiateResponse = document.querySelectorAll('.negotiateResponse');
const deleteColorOnlyUpdateData = document.querySelectorAll(
    '.deleteColorOnlyUpdateData'
);
const deleteSizeOnlyDataUpdate = document.querySelectorAll(
    '.deleteSizeOnlyDataUpdate'
);
const marketProductType = document.getElementById('marketProductType');
const marketUpdateProductType = document.querySelectorAll(
    '.marketUpdateProductType'
);
const deleteUpdatedMarketSubColorDetails = document.querySelectorAll(
    '.deleteUpdatedMarketSubColorDetails'
);
const deleteMarketSubDetails = document.querySelectorAll(
    '.deleteMarketSubDetails'
);
const addMarketProductSubUpdateDetails = document.querySelectorAll(
    '.addMarketProductSubUpdateDetails'
);
const add_update_market_product_details = document.querySelectorAll(
    '.add_update_market_product_details'
);
const newAboutProductDetails = document.getElementById(
    'newAboutProductDetails'
);
const newAboutProductAdditionalDetails = document.getElementById(
    'newAboutProductAdditionalDetails'
);
const addColorOnlyProductDetailsWR = document.querySelectorAll(
    '.addColorOnlyProductDetailsWR'
);
const addSizeOnlyDataUpdate = document.querySelectorAll(
    '.addSizeOnlyDataUpdate'
);
const updateMarketAboutDetails = document.querySelectorAll(
    '.updateMarketAboutDetails'
);
const updateAboutProductAdditionalDetails = document.querySelectorAll(
    '.updateAboutProductAdditionalDetails'
);
const cancel_medical_marekt_order = document.querySelectorAll(
    '.cancel_medical_marekt_order'
);

// ============================================================
// ============================================================
// ============================================================
// quotes
const request_quotes = document.getElementById('request_quotes');
const request_user_quotes = document.getElementById('request_user_quotes');
const manage_quotes = document.getElementById('manage_quotes');
const manage_user_quotes = document.getElementById('manage_user_quotes');
const proposalUpdate = document.getElementById('proposalUpdate');
const proposalUserUpdate = document.getElementById('proposalUserUpdate');

// ============================================================
// ============================================================
// ============================================================
// Second opinion
const opinionSponserStatus = document.getElementById('opinionSponserStatus');
const updateOpinorRequest = document.getElementById('updateOpinorRequest');
const selectOpnionSponser = document.querySelectorAll('.selectOpnionSponser');
const update_seconopinion_schudles = document.getElementById(
    'update_seconopinion_schudles'
);
const update_secons_opinion_status = document.getElementById(
    'update_secons_opinion_status'
);

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// user
// ============================================================
// ============================================================
// ============================================================
// ambulance
const ambulance_quote_status_user = document.getElementById(
    'ambulance_quote_status_user'
);
const cancel_quotes_user = document.getElementById('cancel_quotes_user');
const activeAmbulanceMapStartUser = document.querySelectorAll(
    '.activeAmbulanceMapStartUser'
);
const historyAmbulanceMapStartUser = document.querySelectorAll(
    '.historyAmbulanceMapStartUser'
);

// ============================================================
// ============================================================
// ============================================================
// homecare
const homecare_quote_status_user = document.getElementById(
    'homecare_quote_status_user'
);
// ============================================================
// ============================================================
// ============================================================
// expert
const expert_quote_status_user = document.getElementById(
    'expert_quote_status_user'
);
// ============================================================
// ============================================================
// ============================================================
// blood donation
// create new blood donner
const create_new_blood_donner = document.getElementById(
    'create_new_blood_donner'
);
// update new blood donner
const update_blood_donner = document.getElementById('update_blood_donner');

// update new blood donner
const update_blood_requester = document.getElementById(
    'update_blood_requester'
);
// update blood request
const update_blood_request = document.getElementById('update_blood_request');

// ============================================================
// ============================================================
// ============================================================
// deaddiction
const deaddiction_quote_status_user = document.getElementById(
    'deaddiction_quote_status_user'
);
const historyDeaddictionCenter = document.querySelectorAll(
    '.historyDeaddictionCenter'
);
const activeDeaddictionCenter = document.querySelectorAll(
    '.activeDeaddictionCenter'
);
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// modules
// homecare
const create_new_homecare_service = document.getElementById(
    'create_new_homecare_service'
);
const update_homecare_service = document.getElementById(
    'update_homecare_service'
);
// deaddiction
const create_new_deaddiction_service = document.getElementById(
    'create_new_deaddiction_service'
);
const update_deaddiction_service = document.getElementById(
    'update_deaddiction_service'
);

// ambulance
const create_new_ambulance_service = document.getElementById(
    'create_new_ambulance_service'
);
const update_ambulance_service = document.getElementById(
    'update_ambulance_service'
);
// organs
const create_hospiatl_package_service = document.getElementById(
    'create_hospiatl_package_service'
);
const update_hospital_service = document.getElementById(
    'update_hospital_service'
);
const create_hospiatl_organs_service = document.getElementById(
    'create_hospiatl_organs_service'
);
const update_hospital_organs_service = document.getElementById(
    'update_hospital_organs_service'
);

// pharmacy categories
const create_new_pharmacy_service = document.getElementById(
    'create_new_pharmacy_service'
);
// update pharmacy categories
const update_pharmacy_service = document.getElementById(
    'update_pharmacy_service'
);

// pharmacy medicines
const create_new_medicine_service = document.getElementById(
    'create_new_medicine_service'
);
// update pharmacy categories
const update_pharmacy_medicines = document.getElementById(
    'update_pharmacy_medicines'
);

// create laboratory categories
const create_new_laboratory_service = document.getElementById(
    'create_new_laboratory_service'
);

// update laboratory categoreis
const update_laboratory_service = document.getElementById(
    'update_laboratory_service'
);
// add new job specialist
const add_specialist = document.getElementById('add_specialist');

// add update job specialist
const add_update_specialist = document.querySelectorAll(
    '.add_update_specialist'
);

// create job categoreis
const create_new_job_categories = document.getElementById(
    'create_new_job_categories'
);

// update job categoreis
const update_job_categories = document.getElementById('update_job_categories');

// create market categories
const create_new_market_categories = document.getElementById(
    'create_new_market_categories'
);
// update market categoires
const update_new_market_categories = document.getElementById(
    'update_new_market_categories'
);

// meet the expert modules
const create_new_meet_the_expert_categoreis = document.getElementById(
    'create_new_meet_the_expert_categoreis'
);
const update_meet_the_expert_categoreis = document.getElementById(
    'update_meet_the_expert_categoreis'
);

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ambulance driver
// crete ambulance driver
const create_Ambulance_driver = document.getElementById(
    'create_Ambulance_driver'
);
// update ambulance driver
const update_ambulance_driver = document.getElementById(
    'update_ambulance_driver'
);
// create traffic police
const create_traffic_police = document.getElementById('create_traffic_police');

// update traffic police
const update_traffic_police = document.getElementById('update_traffic_police');

// assign map for get all patient location
const newRequestPatientLocation = document.querySelectorAll(
    '.newRequestPatientLocation'
);
// assign ambulance drivers
const assign_ambulance_drivers = document.getElementById(
    'assign_ambulance_drivers'
);
// update ambulance status
const update_ambulance_driver_request = document.getElementById(
    'update_ambulance_driver_request'
);

// ============================================================
// ============================================================
// ============================================================
// Fitnes
// create equipments
const create_equipment_details = document.getElementById(
    'create_equipment_details'
);
// update eqipments
const manage_gym_equipments = document.getElementById('manage_gym_equipments');

// create faciliteis
const create_fitness_facilities_details = document.getElementById(
    'create_fitness_facilities_details'
);

// update faciliteis
const manage_fitness_facilities = document.getElementById(
    'manage_fitness_facilities'
);
// add new instruction
const new_fitnes_video_instructions = document.getElementById(
    'new_fitnes_video_instructions'
);

// add new instruction for update
const add_update_instruction = document.querySelectorAll(
    '.add_update_instruction'
);

// update nutrition videso
const update_nutrition_uses = document.querySelectorAll(
    '.update_nutrition_uses'
);

// add usees
const new_food_nutritions_uses = document.getElementById(
    'new_food_nutritions_uses'
);
// create fitness workout videso
const create_fitness_workout_videos = document.getElementById(
    'create_fitness_workout_videos'
);

// create fitness workout videso
const manage_fitness_video_upload = document.getElementById(
    'manage_fitness_video_upload'
);
// create food nutritions
const create_new_food_nutritions = document.getElementById(
    'create_new_food_nutritions'
);

// update food nutrition details
const update_Nutrition_food_details = document.getElementById(
    'update_Nutrition_food_details'
);
// ============================================================
// ============================================================
// ============================================================
// laboratory
const update_laboratory = document.getElementById('update_laboratory');
const create_laboratory_tests = document.getElementById(
    'create_laboratory_tests'
);
const manage_laboratory_tests = document.getElementById(
    'manage_laboratory_tests'
);
const create_laboratory_facilities = document.getElementById(
    'create_laboratory_facilities'
);

const manage_laboratory_facilities = document.getElementById(
    'manage_laboratory_facilities'
);

const create_laboratory_images = document.getElementById(
    'create_laboratory_images'
);
const deletePharmacyimages = document.querySelectorAll('.deletePharmacyimages');
const update_laboratory_vendor_status = document.getElementById(
    'update_laboratory_vendor_status'
);
const update_pharmacy_vendor_status = document.getElementById(
    'update_pharmacy_vendor_status'
);
const cancel_pharmacy_quote = document.getElementById('cancel_pharmacy_quote');
const add_new_medicines = document.getElementById('add_new_medicines');
const cancel_user_laboratory_booking_status = document.querySelectorAll(
    '.cancel_user_laboratory_booking_status'
);

// ============================================================
// ============================================================
// ============================================================
// One us
// creeate blog categories
const create_new_oneus_blog_categories_module = document.getElementById(
    'create_new_oneus_blog_categories_module'
);
// creeate blogs
const create_new_oneus_blogs = document.getElementById(
    'create_new_oneus_blogs'
);

// creeate videos
const create_new_oneus_video = document.getElementById(
    'create_new_oneus_video'
);
// update blogs
const update_oneus_blog = document.getElementById('update_oneus_blog');
// update video
const update_oneus_video = document.getElementById('update_oneus_video');
// update blog categories
const update_oneus_blog_categories_module = document.getElementById(
    'update_oneus_blog_categories_module'
);

// creeate blog categories
const create_new_oneus_video_categories_module = document.getElementById(
    'create_new_oneus_video_categories_module'
);
// update blog categories
const update_oneus_video_categories_module = document.getElementById(
    'update_oneus_video_categories_module'
);
// update video stautus
const update_oneus_video_status = document.getElementById(
    'update_oneus_video_status'
);
const update_oneus_blog_status = document.getElementById(
    'update_oneus_blog_status'
);

// ============================================================
// ============================================================
// ============================================================
// // homecare
// if (create_homecare) {
//     create_homecare.addEventListener('submit', (e) => {
//         e.preventDefault();

//         const contactPersonName =
//             document.getElementById('contactPerson').value;
//         const contactPersonPhone =
//             document.getElementById('contactpersonPhone').value;
//         const Phone = document.getElementById('Phone').value;
//         const Landline = document.getElementById('landline').value;
//         const latitude = document.getElementById('latitude').value;
//         const longtitude = document.getElementById('longtitude').value;
//         const openTime = document.getElementById('openTime').value;
//         const closeTime = document.getElementById('closeTime').value;
//         const Address = document.getElementById('Address').value;
//         const jobType = document.getElementById('jobType').value;
//         const city = document.getElementById('city').value;

//         return createHomcecare(
//             contactPersonName,
//             contactPersonPhone,
//             Phone,
//             Landline,
//             latitude,
//             longtitude,
//             openTime,
//             closeTime,
//             Address,
//             jobType,
//             city
//         );
//     });
// }

// update personal data
if (update_personal_details) {
    update_personal_details.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('contactPerson').value;
        const phone = document.getElementById('contactpersonPhone').value;
        const centerPhone = document.getElementById('Phone').value;
        const centerLandLine = document.getElementById('landline').value;
        const latitude = document.getElementById('latitude').value;
        const longtitude = document.getElementById('longtitude').value;
        const openTime = document.getElementById('openTime').value;
        const closeTime = document.getElementById('closeTime').value;
        const address = document.getElementById('Address').value;
        const city = document.getElementById('city').value;
        const aboutUs = document.getElementById('aboutUs').value;

        let jobType = undefined,
            serviceType = undefined,
            vendorType = undefined;
        if (e.target.dataset.module === 'Homecare service') {
            jobType = document.getElementById('jobType').value;
        }
        if (e.target.dataset.module === 'Meet the Expert') {
            serviceType = document.getElementById('expertServiceType').value;
            vendorType = document.getElementById('expertVendorType').value;
        }
        let conNumber = undefined;
        if (e.target.dataset.module === 'Speak To Us') {
            conNumber = document.getElementById('councelNumber').value;
        }
        let medicalTourism = undefined,
            hospitalPackage = undefined;

        if (e.target.dataset.module === 'Hospital') {
            medicalTourism = document.getElementById('medicalTourism').checked;
            hospitalPackage =
                document.getElementById('hospitalPackage').checked;
        }
        let [batteryChanging, noiceFixing, cleaningCharge] = [undefined];
        if (e.target.dataset.module === 'Hearing AID') {
            if (document.getElementById('batteryChanging')) {
                noiceFixing = document.getElementById('noiceFixing').value;
                cleaningCharge =
                    document.getElementById('cleaningCharge').value;
            }
        }
        let experience, category, speciality;
        if (
            e.target.dataset.module === 'Online Consultancy' ||
            e.target.dataset.module === 'Second Opinion'
        ) {
            experience = document.getElementById('experience').value;
            category = document.getElementById('category').value;
            speciality = document.getElementById('speciality').value;
        }

        let price;
        if (e.target.dataset.module === 'Fitness') {
            price = document.getElementById('price').value;
        }
        return updatePersonalData(
            {
                name,
                phone,
                centerPhone,
                centerLandLine,
                latitude,
                longtitude,
                openTime,
                closeTime,
                address,
                city,
                jobType,
                serviceType,
                vendorType,
                conNumber,
                medicalTourism,
                hospitalPackage,
                batteryChanging,
                noiceFixing,
                cleaningCharge,
                experience,
                category,
                speciality,
                price,
                aboutUs
            },
            e.target.dataset.partner,
            e.target.dataset.module
        );
    });
}

// set values
if (doctoryCategorie) {
    doctoryCategorie.addEventListener('change', async (e) => {
        let data = await axios({
            method: 'GET',
            url: `/api/v1/partner/get-a-doctor-categorie/${e.target.value}`
        }).catch((err) => {
            if (err?.response?.data?.message) {
                swal('Warning', err.response.data.message, 'error');
            }
            return swal(
                'Warning',
                'Please select the valid categorie.',
                'error'
            );
        });

        data = data.data.docs;
        const speciality = document.getElementById('speciality');
        speciality.replaceChildren();
        let options = await data.specialists.map(
            (el) => `<option value="${el.name}">${el.name}</option>`
        );
        speciality.insertAdjacentHTML(
            'beforeend',
            `<option> -- Select your Speciality -- </option>${options.join('')}`
        );
    });
}

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// add new features
if (add_new_features) {
    add_new_features.addEventListener('click', (e) => {
        e.preventDefault();
        const html = `<input class="form-control newFeatures mt-2" type="text" placeholder="Features" required="">`;
        const elId = document.getElementById('newFeatures');
        return elId.insertAdjacentHTML('beforeend', html);
    });
}
// update hearinga hosptial booking status
if (update_hearingaid_user_hospital_booking_status) {
    update_hearingaid_user_hospital_booking_status.addEventListener(
        'change',
        (e) => {
            e.preventDefault();
            if (e.target.classList.contains('update_status')) {
                const status = document.getElementById(
                    `hearingaid_hospital_status_${e.target.dataset.index}`
                ).value;
                return updateHearingAidHospitalUserBookingStatus(
                    status,
                    update_hearingaid_user_hospital_booking_status.dataset.id,
                    e.target.dataset.id
                );
            }
        }
    );
}

// update hearinga hosptial booking status
if (update_hearingaid_vendor_hospital_booking_status) {
    update_hearingaid_vendor_hospital_booking_status.addEventListener(
        'change',
        (e) => {
            e.preventDefault();
            if (e.target.classList.contains('update_status')) {
                const status = document.getElementById(
                    `hearingaid_hospital_status_${e.target.dataset.index}`
                ).value;
                return updateHearingAidHospitalBookingStatus(
                    status,
                    update_hearingaid_vendor_hospital_booking_status.dataset.id,
                    e.target.dataset.id
                );
            }
        }
    );
}

// add update new features
if (add_update_features.length) {
    [...add_update_features].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const html = `<input class="form-control mt-2 newUpdateFeatures${e.target.dataset.index}" type="text" placeholder="Features" required="">`;
            const elId = document.getElementById(
                `addUpdateFeatures${e.target.dataset.index}`
            );
            return elId.insertAdjacentHTML('beforeend', html);
        });
    });
}
if (add_new_hearingaid_product_details) {
    // add new frame details
    add_new_hearingaid_product_details.addEventListener('click', (e) => {
        e.preventDefault();
        const id = Date.now();
        const html = `
       
            <div id='newHearingAidProductDetails${id}' class='newHearingAidSubDetails' data-index=${id}>
             <a class="btn btn-danger" id='delelteNewProductDetails${id}' data-index=${id}>Delete</a>
                <div class="col-md-12">
                    <label class="form-label" for="newColor${id}">Color<span class="text-danger">*</span></label>
                    <input class="form-control" id="newColor${id}" type="text" placeholder="Color" required="" />
                </div>
                <div class="col-md-12">
                    <label class="form-label" for="newSize${id}">Size<span class="text-danger">*</span></label>
                    <input class="form-control" id="newSize${id}" type="text" placeholder="Size" required="" />
                </div>
                <div class="col-md-12">
                    <label class="form-label" for="newPrice${id}">Price<span class="text-danger">*</span></label>
                    <input class="form-control" id="newPrice${id}" type="text" placeholder="Price" required="" />
                </div>
                <div class="col-md-12">
                    <label class="form-label" for="newDiscountPrice${id}">Discount Price<span class="text-danger">*</span></label>
                    <input class="form-control" id="newDiscountPrice${id}" type="text" placeholder="Discount Price" />
                </div>
                 <div class="col-md-12">
                    <label class="form-label" for="newProductImage${id}">Product Image<span class="text-danger">*</span></label>
                    <input class="form-control" id="newProductImage${id}" type="file"  required="" accept="image/*" required />
                </div>
                <div class="col-md-12">
                    <label class="form-label" for="newProductImageGallery${id}">Product Image Gallery<span class="text-danger">*</span></label>
                    <input class="form-control" id="newProductImageGallery${id}" type="file" multiple required="" required accept="image/*"  />
                </div>
            </div>
        `;
        const newProductDetails = document.getElementById('newProductDetails');
        newProductDetails.insertAdjacentHTML('beforeend', html);
        return create_event_For_close(
            `delelteNewProductDetails${id}`,
            `newHearingAidProductDetails${id}`
        );
    });
}

const update_color_details_hearingaid = (fors, to, id, ids) => {
    document.getElementById(fors).addEventListener('click', (e) => {
        e.preventDefault();
        const id3 = Date.now();
        const html = `
        <div id='updateHearingAidSubProductDetails${id}${ids}${id3}' class='updateHearingAidSubColorDetails${id}${ids} m-2 p-2' data-index=${id} data-index2=${ids} data-index3=${id3}>
            <div class="d-flex justify-content-end">
             <a class="btn btn-danger" id='delelteNewSubProductDetails${id}${ids}${id3}' data-index=${id} data-index2=${ids} data-index3=${id3}>Delete</a>
            </div>
            
                <div class="col-md-12">
                    <label class="form-label" for="newSize${id}${ids}${id3}">Size<span class="text-danger">*</span></label>
                    <input class="form-control" id="newSize${id}${ids}${id3}" type="text" placeholder="Size" required="" />
                </div>
                <div class="col-md-12">
                    <label class="form-label" for="newPrice${id}${ids}${id3}">Price<span class="text-danger">*</span></label>
                    <input class="form-control" id="newPrice${id}${ids}${id3}" type="text" placeholder="Price" required="" />
                </div>
                <div class="col-md-12">
                    <label class="form-label" for="newDiscountPrice${id}${ids}${id3}">Discount Price<span class="text-danger">*</span></label>
                    <input class="form-control" id="newDiscountPrice${id}${ids}${id3}" type="text" placeholder="Discount Price" />
                </div>
                </div>
            </div>
        `;
        const elId = document.getElementById(to);
        elId.insertAdjacentHTML('beforeend', html);
        return create_event_For_close(
            `delelteNewSubProductDetails${id}${ids}${id3}`,
            `updateHearingAidSubProductDetails${id}${ids}${id3}`
        );
    });
};
// delete add old data
if (deleteHearingaidSubDetails?.length) {
    [...deleteHearingaidSubDetails].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();

            document
                .getElementById(
                    `updateHearingAidSubProductDetails${e.target.dataset.index}${e.target.dataset.index2}${e.target.dataset.index3}`
                )

                .remove();
        });
    });
} // delete add old data
if (deleteUpdatedSubColorDetails?.length) {
    [...deleteUpdatedSubColorDetails].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            document
                .getElementById(
                    `updateHearingAidProductDetails${e.target.dataset.index}${e.target.dataset.index2}`
                )
                .remove();
        });
    });
}
if (addHearingAidProductSubUpdateDetails.length) {
    [...addHearingAidProductSubUpdateDetails].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const { index, index2 } = e.target.dataset,
                index3 = Date.now();

            const html = `
        <div id='updateHearingAidSubProductDetails${index}${index2}${index3}' class='updateHearingAidSubColorDetails${index}${index2} m-2 p-2' data-index=${index} data-index2=${index2} data-index3=${index3}>
            <div class="d-flex justify-content-end">
             <a class="btn btn-danger" id='delelteNewSubProductDetails${index}${index2}${index3}' data-index=${index} data-index2=${index2} data-index3=${index3}>Delete</a>
            </div>
            
                <div class="col-md-12">
                    <label class="form-label" for="newSize${index}${index2}${index3}">Size<span class="text-danger">*</span></label>
                    <input class="form-control" id="newSize${index}${index2}${index3}" type="text" placeholder="Size" required="" />
                </div>
                <div class="col-md-12">
                    <label class="form-label" for="newPrice${index}${index2}${index3}">Price<span class="text-danger">*</span></label>
                    <input class="form-control" id="newPrice${index}${index2}${index3}" type="text" placeholder="Price" required="" />
                </div>
                <div class="col-md-12">
                    <label class="form-label" for="newDiscountPrice${index}${index2}${index3}">Discount Price<span class="text-danger">*</span></label>
                    <input class="form-control" id="newDiscountPrice${index}${index2}${index3}" type="text" placeholder="Discount Price" />
                </div>
             
                </div>
            </div>
        `;
            const elId = document.getElementById(
                `hearingaidUpdateSubDeatail${index}${index2}`
            );
            elId.insertAdjacentHTML('beforeend', html);
            return create_event_For_close(
                `delelteNewSubProductDetails${index}${index2}${index3}`,
                `updateHearingAidSubProductDetails${index}${index2}${index3}`
            );
        });
    });
}

// add product detail value for update
if (add_update_hearingaid_product_details.length) {
    [...add_update_hearingaid_product_details].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const addColor = document.getElementById(
                `updateProductUpdateDetails${e.target.dataset.index}`
            );
            const index2 = Date.now(),
                index = e.target.dataset.index;
            const html = `
        <div id='updateHearingAidProductDetails${index}${index2}' class='newHearingAidSubUpdateDetails${index} border m-2 p-3' data-index=${index} data-index2=${index2}>
            <div class='d-flex justify-content-end position-relative'>
                <a class="btn btn-danger" id='delelteupdateProductDetails${index}${index2}' data-index=${index} data-index2=${index2}>Delete</a>
            </div>
            <div class="col-md-12">
                    <label class="form-label" for="newColor${index}${index2}">Color<span class="text-danger">*</span></label>
                    <input class="form-control" id="newColor${index}${index2}" type="text" placeholder="Color" required="" />
            </div>
             <div class="col-md-12">
                    <label class="form-label" for="newProductImage${index}${index2}">Product Image<span class="text-danger">*</span></label>
                    <input class="form-control" id="newProductImage${index}${index2}" type="file"  required="" accept="image/*" required />
            </div>
            <div class="col-md-12">
                    <label class="form-label" for="newProductImageGallery${index}${index2}">Product Image Gallery<span class="text-danger">*</span></label>
                    <input class="form-control" id="newProductImageGallery${index}${index2}" type="file" multiple required="" required accept="image/*"  />
            </div>
            <div id="hearingaidUpdateSubDeatail${index}${index2}">
            </div>
            <div class='d-flex justify-content-center mt-2'>
                <button class="btn btn-success" type="button" id="addHearingaidUpdateSubDeatail${index}${index2}"  >Add Details</button>
            </div>
        </div>
        `;
            addColor.insertAdjacentHTML('beforeend', html);
            create_event_For_close(
                `delelteupdateProductDetails${index}${index2}`,
                `updateHearingAidProductDetails${index}${index2}`
            );
            return update_color_details_hearingaid(
                `addHearingaidUpdateSubDeatail${index}${index2}`,
                `hearingaidUpdateSubDeatail${index}${index2}`,
                index,
                index2
            );
        });
    });
}
// delete add old data
if (deleteUpdateProductDetails?.length) {
    [...deleteUpdateProductDetails].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            document
                .getElementById(
                    `newHearingAidProductDetails${e.target.dataset.index}${e.target.dataset.key}`
                )
                .remove();
        });
    });
}

// update hearing aid product
if (update_hearingaid_product) {
    update_hearingaid_product.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (e.target.id === 'update_product') {
            const id = e.target.dataset.index;
            const productName = document.getElementById(
                `updateName${id}`
            ).value;
            const description = document.getElementById(
                `updateProductDescription${id}`
            ).value;
            const productType = document.getElementById(
                `updateProductType${id}`
            ).value;

            const features = await Promise.all(
                [...document.querySelectorAll('.newUpdateFeatures' + id)].map(
                    (el) => {
                        if (!!el.value) return el.value;
                    }
                )
            );
            const productDetailList = document.querySelectorAll(
                `.newHearingAidSubUpdateDetails${id}`
            );

            const productDetails = [];
            await Promise.all(
                [...productDetailList].map(async (el) => {
                    const obj = {};
                    obj.id = el.dataset.id;
                    obj.color = document.getElementById(
                        `newColor${el.dataset.index}${el.dataset.index2}`
                    ).value;
                    const imageForm = new FormData();
                    await Promise.all(
                        Object.entries(
                            document.getElementById(
                                `newProductImageGallery${el.dataset.index}${el.dataset.index2}`
                            ).files
                        ).map(([key, value]) => {
                            return imageForm.append('imageGallery', value);
                        })
                    );

                    imageForm.append(
                        'image',
                        document.getElementById(
                            `newProductImage${el.dataset.index}${el.dataset.index2}`
                        ).files[0]
                    );
                    imageForm.append('imageStatus', 'update');
                    const res = await axios({
                        method: 'POST',
                        url: '/api/v1/opticals/get-images',
                        data: imageForm
                    });
                    if (res.data.status !== 'Success') {
                        return swal(
                            'Warning',
                            'Something went wrong while processing your reques1t.',
                            'error'
                        );
                    }

                    obj.bannerImage = res.data.image;
                    obj.imageGallery = res.data.imageGallery;
                    obj.subDetails = [];
                    await Promise.all(
                        [
                            ...document.querySelectorAll(
                                `.updateHearingAidSubColorDetails${el.dataset.index}${el.dataset.index2}`
                            )
                        ].map(async (els) => {
                            const subObj = {};
                            subObj.id = els.dataset.id;
                            subObj.size = document.getElementById(
                                `newSize${el.dataset.index}${els.dataset.index2}${els.dataset.index3}`
                            ).value;

                            subObj.price = document.getElementById(
                                `newPrice${el.dataset.index}${els.dataset.index2}${els.dataset.index3}`
                            ).value;

                            subObj.discountPrice = document.getElementById(
                                `newDiscountPrice${el.dataset.index}${els.dataset.index2}${els.dataset.index3}`
                            ).value;

                            obj.subDetails.push(subObj);
                        })
                    );

                    productDetails.push(obj);
                })
            );

            return updateHearingAidProduct(
                {
                    productName,
                    description,
                    productType,
                    features,
                    statusType: 'update',
                    productDetails
                },
                e.target.dataset.id,
                e.target.dataset.pid
            );
        }
    });
}

// create new hearinga id product
if (create_new_hearingaid_product) {
    create_new_hearingaid_product.addEventListener('submit', async (e) => {
        e.preventDefault();

        const productName = document.getElementById('newName').value;
        const description = document.getElementById('newDescription').value;
        const productType = document.getElementById('newProductType').value;

        const features = await Promise.all(
            [...document.querySelectorAll('.newFeatures')].map((el) => {
                if (!!el.value) return el.value;
            })
        );
        const productDetailList = document.querySelectorAll(
            '.newHearingAidSubDetails'
        );
        const productDetails = [];
        await Promise.all(
            [...productDetailList].map(async (el) => {
                const obj = {};

                obj.color = document.getElementById(
                    `newColor${el.dataset.index}`
                ).value;
                const imageForm = new FormData();
                await Promise.all(
                    Object.entries(
                        document.getElementById(
                            `newProductImageGallery${el.dataset.index}`
                        ).files
                    ).map(([key, value]) => {
                        return imageForm.append('imageGallery', value);
                    })
                );

                imageForm.append(
                    'image',
                    document.getElementById(
                        `newProductImage${el.dataset.index}`
                    ).files[0]
                );
                imageForm.append('imageStatus', 'create');
                const res = await axios({
                    method: 'POST',
                    url: '/api/v1/opticals/get-images',
                    data: imageForm
                });
                if (res.data.status !== 'Success') {
                    return swal(
                        'Warning',
                        'Something went wrong while processing your reques1t.',
                        'error'
                    );
                }

                obj.bannerImage = res.data.image;
                obj.imageGallery = res.data.imageGallery;
                obj.subDetails = [];
                await Promise.all(
                    [
                        ...document.querySelectorAll(
                            `.newHearingAidSubColorDetails${el.dataset.index}`
                        )
                    ].map(async (els) => {
                        const subObj = {};
                        subObj.size = document.getElementById(
                            `newSize${el.dataset.index}${els.dataset.indexs}`
                        ).value;

                        subObj.price = document.getElementById(
                            `newPrice${el.dataset.index}${els.dataset.indexs}`
                        ).value;

                        subObj.discountPrice = document.getElementById(
                            `newDiscountPrice${el.dataset.index}${els.dataset.indexs}`
                        ).value;

                        obj.subDetails.push(subObj);
                    })
                );

                productDetails.push(obj);
            })
        );
        return createNewHearingAidProduct(
            {
                productName,
                description,
                features,
                productType,
                productDetails,
                statusType: 'create'
            },
            e.target.dataset.id
        );
    });
}
// update hearingaid products status
if (update_vendor_hearingaid_product_status) {
    update_vendor_hearingaid_product_status.addEventListener('change', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('update_status')) {
            const status = document.getElementById(
                `update_hearingaid_status-${e.target.dataset.index}`
            ).value;
            return updateHearingaidProductOrderStatus(
                status,
                update_vendor_hearingaid_product_status.dataset.id,
                e.target.dataset.id
            );
        }
    });
}

// update hearingaid order status
if (update_user_hearingaid_product_status) {
    update_user_hearingaid_product_status.addEventListener('change', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('update_status')) {
            const status = document.getElementById(
                `update_hearingaid_status-${e.target.dataset.index}`
            ).value;
            return updateHearingAidUserProductOrderStatus(
                status,
                update_user_hearingaid_product_status.dataset.id,
                e.target.dataset.id
            );
        }
    });
}
// update hearingaid order status
if (update_user_diffable_product_status) {
    update_user_diffable_product_status.addEventListener('change', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('update_status')) {
            const status = document.getElementById(
                `update_hearingaid_status-${e.target.dataset.index}`
            ).value;
            return updateDifferentlyUserProductOrderStatus(
                status,
                update_user_diffable_product_status.dataset.id,
                e.target.dataset.id
            );
        }
    });
}

// update hearingaid products status
if (update_vendor_diffable_product_status) {
    update_vendor_diffable_product_status.addEventListener('change', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('update_status')) {
            const status = document.getElementById(
                `update_diffable_status-${e.target.dataset.index}`
            ).value;
            return updateDiffOrderProductOrderStatus(
                status,
                update_vendor_diffable_product_status.dataset.id,
                e.target.dataset.id
            );
        }
    });
}

// add sub type
if (newProductType) {
    newProductType.addEventListener('change', (e) => {
        e.preventDefault();
        if (
            e.target.value === 'leg' ||
            e.target.value === 'hand' ||
            e.target.value === 'support-stick'
        ) {
            const html = `
                <label class="col-form-label fw-bold">Fit Type:</label>
                <div class="col-sm-12">
                    <select class="form-select border border-2 bg-li" id="newFitType" required="">
                        <option value="">-- Select Fit Type -- </option>
                        <option value="left">Left </option>
                        <option value="right">Right </option>
                    </select>
                </div>
            `;

            const elId = document.getElementById('addNewFitType');
            if (!elId.hasChildNodes())
                return elId.insertAdjacentHTML('beforeend', html);
        } else {
            const elId = document.getElementById('addNewFitType');
            elId.innerHTML = '';
        }
    });
}

// add sub type for update
if (updateProdutType.length) {
    [...updateProdutType].map((el) => {
        el.addEventListener('change', (e) => {
            e.preventDefault();

            if (
                e.target.value === 'leg' ||
                e.target.value === 'hand' ||
                e.target.value === 'support-stick'
            ) {
                const html = `
                <label class="col-form-label fw-bold">Fit Type:</label>
                <div class="col-sm-12">
                    <select class="form-select border border-2 bg-li" id="newFitType${e.target.dataset.index}" required="">
                        <option value="">-- Select Fit Type -- </option>
                        <option value="left">Left </option>
                        <option value="right">Right </option>
                    </select>
                </div>
            `;

                const elId = document.getElementById(
                    `addUpdateFitType${e.target.dataset.index}`
                );
                if (!elId.hasChildNodes())
                    return elId.insertAdjacentHTML('beforeend', html);
            } else {
                const elId = document.getElementById(
                    `addUpdateFitType${e.target.dataset.index}`
                );
                elId.innerHTML = '';
            }
        });
    });
}

// update differently abled product
if (update_differenly_product) {
    update_differenly_product.addEventListener('submit', async (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append(
            'productName',
            document.getElementById(`newName${e.target.dataset.index}`).value
        );
        form.append(
            'meterialType',
            document.getElementById(`newMaterialType${e.target.dataset.index}`)
                .value
        );
        form.append(
            'price',
            document.getElementById(`newPrice${e.target.dataset.index}`).value
        );
        form.append(
            'discountPrice',
            document.getElementById(`newDiscountPrice${e.target.dataset.index}`)
                .value
        );
        form.append(
            'productType',
            document.getElementById(`newProductType${e.target.dataset.index}`)
                .value
        );
        if (
            document.getElementById(`newProductType${e.target.dataset.index}`)
                .value !== 'wheelchair'
        )
            form.append(
                'fitType',
                document.getElementById(`newFitType${e.target.dataset.index}`)
                    .value
            );
        form.append(
            'image',
            document.getElementById(`newImages${e.target.dataset.index}`)
                .files[0]
        );
        await Promise.all(
            Object.entries(
                document.getElementById(
                    `newImageGallery${e.target.dataset.index}`
                ).files
            ).map(([key, value]) => {
                return form.append('imageGallery', value);
            })
        );

        form.append(
            'productDescription',
            document.getElementById(`newDescription${e.target.dataset.index}`)
                .value
        );
        form.append('statusType', 'update');
        return updateNewDiffProduct(
            form,
            e.target.dataset.id,
            e.target.dataset.pid
        );
    });
}

// create new product type
if (create_new_differently_product) {
    create_new_differently_product.addEventListener('submit', async (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('productName', document.getElementById('newName').value);
        form.append(
            'meterialType',
            document.getElementById('newMaterialType').value
        );
        form.append('price', document.getElementById('newPrice').value);
        form.append(
            'discountPrice',
            document.getElementById('newDiscountPrice').value
        );
        form.append(
            'productType',
            document.getElementById('newProductType').value
        );
        if (document.getElementById('newProductType').value !== 'wheelchair')
            form.append('fitType', document.getElementById('newFitType').value);
        form.append('image', document.getElementById('newImages').files[0]);
        await Promise.all(
            Object.entries(
                document.getElementById(`newImageGallery`).files
            ).map(([key, value]) => {
                return form.append('imageGallery', value);
            })
        );

        form.append(
            'productDescription',
            document.getElementById('newDescription').value
        );
        form.append('statusType', 'create');
        return createNewDiffProduct(form, e.target.dataset.id);
    });
}
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// homecare
// create homecare service
if (create_homecare_service) {
    create_homecare_service.addEventListener('submit', async (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('bannerImage', document.getElementById('image').files[0]);
        form.append(
            'serviceName',
            document.getElementById('serviceName').value
        );
        form.append(
            'description',
            document.getElementById('description').value
        );
        form.append('priceTo', document.getElementById('endPrice').value);
        form.append('priceFrom', document.getElementById('startPrice').value);
        await Promise.all(
            Object.entries(document.getElementById('imageGallery').files).map(
                ([key, value]) => {
                    return form.append('serviceImages', value);
                }
            )
        );

        form.append('latitude', document.getElementById('latitude').value);
        form.append('longitude', document.getElementById('longitude').value);
        form.append('statusType', 'create');
        return createHomecareServices(form, e.target.dataset.partner);
    });
}
// update homecare service
if (manage_homecare_service) {
    manage_homecare_service.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (e.target.id === 'update_service') {
            const form = new FormData();
            if (
                !!document.getElementById(
                    'serviceImage-' + e.target.dataset.index
                ).files[0]
            ) {
                form.append(
                    'bannerImage',
                    document.getElementById(
                        'serviceImage-' + e.target.dataset.index
                    ).files[0]
                );
            }
            form.append(
                'serviceName',
                document.getElementById('serviceName-' + e.target.dataset.index)
                    .value
            );
            form.append(
                'description',
                document.getElementById('description-' + e.target.dataset.index)
                    .value
            );
            form.append(
                'priceTo',
                document.getElementById('endPrice-' + e.target.dataset.index)
                    .value
            );
            form.append(
                'priceFrom',
                document.getElementById('startPrice-' + e.target.dataset.index)
                    .value
            );
            await Promise.all(
                Object.entries(
                    document.getElementById(
                        'serviceImages-' + e.target.dataset.index
                    ).files
                ).map(([key, value]) => {
                    return form.append('serviceImages', value);
                })
            );

            form.append(
                'latitude',
                document.getElementById('latitude-' + e.target.dataset.index)
                    .value
            );
            form.append(
                'longitude',
                document.getElementById('longitude-' + e.target.dataset.index)
                    .value
            );
            form.append('statusType', 'update');
            return updateHomecareService(form, e.target.dataset.serviceid);
        }
    });
}

// create facilities
if (create_homecare_facilities) {
    create_homecare_facilities.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('descriptions').value;
        return manageHomecareFacilities(
            title,
            description,
            'manage',
            e.target.dataset.partner
        );
    });
}

// manage homecare faciliteis
if (manage_homecare_facilities) {
    manage_homecare_facilities.addEventListener('click', (e) => {
        if (e.target.id === 'update_facilities') {
            const title = document.getElementById(
                `title-${e.target.dataset.index}`
            ).value;
            const description = document.getElementById(
                `description-${e.target.dataset.index}`
            ).value;

            return manageHomecareFacilities(
                title,
                description,
                'manage',
                e.target.dataset.partner,
                e.target.dataset.facility
            );
        }
    });
}

// set status of homecare booking
if (homecare_booking_status) {
    homecare_booking_status.addEventListener('change', (e) => {
        if (e.target.classList.contains('update_status')) {
            const status = document.getElementById(
                `updateStatus-${e.target.dataset.index}`
            ).value;
            return homecareStatusUpdate(status, e.target.dataset.apply);
        }
    });
}

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// deaddiction
// create deaddiction service
if (create_deaddiction_service) {
    create_deaddiction_service.addEventListener('submit', async (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('image', document.getElementById('image').files[0]);
        form.append(
            'serviceName',
            document.getElementById('serviceName').value
        );
        form.append(
            'description',
            document.getElementById('description').value
        );
        form.append('priceTo', document.getElementById('endPrice').value);
        form.append('priceFrom', document.getElementById('startPrice').value);
        await Promise.all(
            Object.entries(document.getElementById('imageGallery').files).map(
                ([key, value]) => {
                    return form.append('imageGallery', value);
                }
            )
        );

        form.append('latitude', document.getElementById('latitude').value);
        form.append('city', document.getElementById('city').value);
        form.append('longitude', document.getElementById('longitude').value);
        form.append('statusType', 'create');
        return createDeaddictionServices(form, e.target.dataset.partner);
    });
}
// update deaddiction service
if (manage_deaddiction_service) {
    manage_deaddiction_service.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (e.target.id === 'update_service') {
            const form = new FormData();
            if (
                !!document.getElementById(
                    'serviceImage-' + e.target.dataset.index
                ).files[0]
            ) {
                form.append(
                    'image',
                    document.getElementById(
                        'serviceImage-' + e.target.dataset.index
                    ).files[0]
                );
            }
            form.append(
                'serviceName',
                document.getElementById('serviceName-' + e.target.dataset.index)
                    .value
            );
            form.append(
                'description',
                document.getElementById('description-' + e.target.dataset.index)
                    .value
            );
            form.append(
                'city',
                document.getElementById('city-' + e.target.dataset.index).value
            );
            form.append(
                'priceTo',
                document.getElementById('endPrice-' + e.target.dataset.index)
                    .value
            );
            form.append(
                'priceFrom',
                document.getElementById('startPrice-' + e.target.dataset.index)
                    .value
            );
            await Promise.all(
                Object.entries(
                    document.getElementById(
                        'serviceImages-' + e.target.dataset.index
                    ).files
                ).map(([key, value]) => {
                    return form.append('imageGallery', value);
                })
            );

            form.append(
                'latitude',
                document.getElementById('latitude-' + e.target.dataset.index)
                    .value
            );
            form.append(
                'longitude',
                document.getElementById('longitude-' + e.target.dataset.index)
                    .value
            );
            form.append('statusType', 'update');
            return updateDeaddictionService(form, e.target.dataset.serviceid);
        }
    });
}

// create deaddiction facilities
if (create_deaddiction_facilities) {
    create_deaddiction_facilities.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('descriptions').value;
        return manageDeaddictionFacilities(
            title,
            description,
            'manage',
            e.target.dataset.partner
        );
    });
}

// manage deaddiction faciliteis
if (manage_deaddiction_facilities) {
    manage_deaddiction_facilities.addEventListener('click', (e) => {
        if (e.target.id === 'update_facilities') {
            const title = document.getElementById(
                `title-${e.target.dataset.index}`
            ).value;
            const description = document.getElementById(
                `description-${e.target.dataset.index}`
            ).value;

            return manageDeaddictionFacilities(
                title,
                description,
                'manage',
                e.target.dataset.partner,
                e.target.dataset.facility
            );
        }
    });
}

// set status of deaddiction booking
if (deaddiction_booking_status) {
    deaddiction_booking_status.addEventListener('change', (e) => {
        if (e.target.classList.contains('update_status')) {
            const status = document.getElementById(
                `updateStatus-${e.target.dataset.index}`
            ).value;

            return deaddictionStatusUpdate(status, e.target.dataset.apply);
        }
    });
}

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ambulance driver
if (create_ambulance_driver) {
    create_ambulance_driver.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', document.getElementById('name').value);
        form.append('phone', document.getElementById('phone').value);
        form.append(
            'driverProfile',
            document.getElementById('driverProfile').files[0]
        );
        form.append('statusType', 'create');
        return manageAmbulaceDrivers(
            form,
            'drivers',
            'manage',
            e.target.dataset.partner
        );
    });
}

// manage ambulance driver
if (manage_ambulance_drivers) {
    manage_ambulance_drivers.addEventListener('submit', (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append(
            'name',
            document.getElementById(`name-${e.target.dataset.index}`).value
        );
        form.append(
            'phone',
            document.getElementById(`phone-${e.target.dataset.index}`).value
        );
        form.append(
            'driverProfile',
            document.getElementById(`driverProfile-${e.target.dataset.index}`)
                .files[0]
        );
        form.append('statusType', 'update');

        return manageAmbulaceDrivers(
            form,
            'drivers',
            'manage',
            e.target.dataset.partner,
            e.target.dataset.driver
        );
    });
}

if (create_ambulance_facilities) {
    create_ambulance_facilities.addEventListener('submit', (e) => {
        e.preventDefault();
        const ambulanceNumber =
            document.getElementById('ambulanceNumber').value;
        const latitude = document.getElementById('latitude').value;
        const longitude = document.getElementById('longitude').value;
        let services = document.getElementById('services');
        services = [...services.selectedOptions].map((option) => option.value);
        return manageAmbulacServices(
            {
                ambulanceNumber,
                latitude,
                longitude,
                services,
                statusType: 'update'
            },
            'services',
            'manage',
            e.target.dataset.partner
        );
    });
}
if (update_ambulance_facilities) {
    update_ambulance_facilities.addEventListener('submit', (e) => {
        e.preventDefault();

        const ambulanceNumber = document.getElementById(
            `ambulanceNumber-${e.target.dataset.index}`
        ).value;
        const latitude = document.getElementById(
            `latitude-${e.target.dataset.index}`
        ).value;
        const longitude = document.getElementById(
            `longitude-${e.target.dataset.index}`
        ).value;
        let services = document.getElementById(
            `services-${e.target.dataset.index}`
        );
        services = [...services.selectedOptions].map((option) => option.value);

        return manageAmbulacServices(
            {
                ambulanceNumber,
                latitude,
                longitude,
                services,
                statusType: 'create'
            },
            'services',
            'manage',
            e.target.dataset.partner,
            e.target.dataset.facilities
        );
    });
}
const setDirection = async (map, startLocation, endLocation) => {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);
    await directionsService
        .route({
            origin: {
                query: startLocation.join(',')
            },
            destination: {
                query: endLocation.join(',')
            },
            travelMode: google.maps.TravelMode.DRIVING
        })
        .then((response) => {
            directionsRenderer.setDirections(response);
        })
        .catch((e) => window.alert('Directions request failed due to ' + e));
};
function initMap() {
    setTimeout(() => {
        if (activeAmbulanceMapStart.length) {
            [...activeAmbulanceMapStart].map(async (el) => {
                const startLocation = JSON.parse(el.dataset.startlocation);
                const endLocation = JSON.parse(el.dataset.endlocation);

                const map = new google.maps.Map(
                    document.getElementById(
                        `activeAmbulanceId-${el.dataset.index}`
                    ),
                    {
                        zoom: 4,
                        fullscreenControl: true,
                        center: {
                            lat: startLocation[0],
                            lng: startLocation[1]
                        }
                    }
                );
                return await setDirection(map, startLocation, endLocation);
            });
        }
        if (historyAmbulanceMapStart.length) {
            [...historyAmbulanceMapStart].map(async (el) => {
                const startLocation = JSON.parse(el.dataset.startlocation);
                const endLocation = JSON.parse(el.dataset.endlocation);
                const map = new google.maps.Map(
                    document.getElementById(
                        `historyAmbulanceId-${el.dataset.index}`
                    ),
                    {
                        zoom: 4,
                        fullscreenControl: true,
                        center: {
                            lat: startLocation[0],
                            lng: startLocation[1]
                        }
                    }
                );
                return await setDirection(map, startLocation, endLocation);
            });
        }

        if (activeAmbulanceMapStartUser.length) {
            [...activeAmbulanceMapStartUser].map(async (el) => {
                const startLocation = JSON.parse(el.dataset.startlocation);
                const endLocation = JSON.parse(el.dataset.endlocation);
                const map = new google.maps.Map(
                    document.getElementById(
                        `activeAmbulanceId-${el.dataset.index0}-${el.dataset.index}`
                    ),
                    {
                        zoom: 4,
                        fullscreenControl: true,
                        center: {
                            lat: startLocation[0],
                            lng: startLocation[1]
                        }
                    }
                );
                return await setDirection(map, startLocation, endLocation);
            });
        }
        if (historyAmbulanceMapStartUser.length) {
            [...historyAmbulanceMapStartUser].map(async (el) => {
                const startLocation = JSON.parse(el.dataset.startlocation);
                const endLocation = JSON.parse(el.dataset.endlocation);
                const map = new google.maps.Map(
                    document.getElementById(
                        `historyAmbulanceId-${el.dataset.index0}-${el.dataset.index}`
                    ),
                    {
                        zoom: 4,
                        fullscreenControl: true,
                        center: {
                            lat: startLocation[0],
                            lng: startLocation[1]
                        }
                    }
                );
                return await setDirection(map, startLocation, endLocation);
            });
        }
        if (activeDeaddictionCenter.length) {
            [...activeDeaddictionCenter].map(async (el) => {
                const location = JSON.parse(el.dataset.location);
                const map = new google.maps.Map(
                    document.getElementById(
                        `activeDaddictionCenter-${el.dataset.index}`
                    ),
                    {
                        zoom: 4,
                        fullscreenControl: true,
                        center: {
                            lat: location[0],
                            lng: location[1]
                        }
                    }
                );
                return await new google.maps.Marker({
                    position: {
                        lat: location[0],
                        lng: location[1]
                    },
                    map,
                    title: 'Hello World!'
                });
            });
        }
        if (historyDeaddictionCenter.length) {
            [...historyDeaddictionCenter].map(async (el) => {
                const location = JSON.parse(el.dataset.location);
                const map = new google.maps.Map(
                    document.getElementById(
                        `histortyDeaddictionCenter-${el.dataset.index}`
                    ),
                    {
                        zoom: 4,
                        fullscreenControl: true,
                        center: {
                            lat: location[0],
                            lng: location[1]
                        }
                    }
                );
                return await new google.maps.Marker({
                    position: {
                        lat: location[0],
                        lng: location[1]
                    },
                    map,
                    title: 'Hello World!'
                });
            });
        }

        if (newRequestPatientLocation.length) {
            [...newRequestPatientLocation].map(async (el) => {
                const location = JSON.parse(el.dataset.location);
                const map = await new google.maps.Map(
                    document.getElementById(
                        `newRequestPatientLocation-${el.dataset.index}`
                    ),
                    {
                        zoom: 15,

                        fullscreenControl: true,
                        center: {
                            lat: location[0],
                            lng: location[1]
                        }
                    }
                );
                return await new google.maps.Marker({
                    position: {
                        lat: location[0],
                        lng: location[1]
                    },
                    map,
                    title: 'Hello World!'
                });
            });
        }
    }, 2000);
    // Initialize and add the map
}
window.initMap = initMap;

// vendor ambulnce update
if (ambulance_quote_status) {
    ambulance_quote_status.addEventListener('change', (e) => {
        e.preventDefault();
        console.log(e.target.id);
        if (e.target.classList.contains('update_status')) {
            const status = document.getElementById(
                `updateStatus-${e.target.dataset.index}`
            ).value;
            return updateAmbulanceStatus(
                status,
                ambulance_quote_status.dataset.id,
                e.target.dataset.apply
            );
        }
    });
    ambulance_quote_status.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('hi');
        if (e.target.id === 'assign_driver') {
            const driver = document.getElementById(
                `ambulanceDriver${e.target.dataset.index}`
            ).value;
            const ambulance = document.getElementById(
                `ambulanceAssign${e.target.dataset.index}`
            ).value;
            return assignPrivateAmbulanceDriver(
                e.target.dataset.id,
                ambulance_quote_status.dataset.id2,
                driver,
                ambulance
            );
        }
    });
}
// user ambulance update
if (ambulance_quote_status_user) {
    ambulance_quote_status_user.addEventListener('change', (e) => {
        e.preventDefault();

        const status = document.getElementById(
            `updateStatus-${e.target.dataset.index}`
        ).value;
        return updateUserAmbulanceStatus(
            status,
            ambulance_quote_status_user.dataset.id,
            e.target.dataset.apply
        );
    });
}

// cancel quote status

if (cancel_quotes_user) {
    cancel_quotes_user.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.id === 'cance_quote')
            return cancelQuoteUser(
                cancel_quotes_user.dataset.id,
                e.target.dataset.quote
            );
    });
}

// set status of homecare booking
if (homecare_quote_status_user) {
    homecare_quote_status_user.addEventListener('change', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('update_status')) {
            const status = document.getElementById(
                `updateStatus-${e.target.dataset.index}`
            ).value;
            return homecareStatusUpdateUser(status, e.target.dataset.apply);
        }
    });
}
// set status of homecare booking
if (deaddiction_quote_status_user) {
    deaddiction_quote_status_user.addEventListener('change', (e) => {
        e.preventDefault();

        if (e.target.classList.contains('update_status')) {
            const status = document.getElementById(
                `updateStatus-${e.target.dataset.index}`
            ).value;
            return deaddictionStatusUpdateUser(status, e.target.dataset.apply);
        }
    });
}

// update partner status
if (update_partner_request_status) {
    update_partner_request_status.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.id === 'updateStatus') {
            const description = document.getElementById(
                `status_description-${e.target.dataset.index}`
            ).value;
            return upodatePartnerStatus(
                e.target.dataset.status,
                e.target.dataset.partner,
                description
            );
        }
    });
}

// create new homecare root service
if (create_new_homecare_service) {
    create_new_homecare_service.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', document.getElementById('name').value);
        form.append(
            'description',
            document.getElementById('description').value
        );
        form.append(
            'bannerImage',
            document.getElementById('serviceImage').files[0]
        );
        form.append('statusType', 'create');
        return createHomecareService(form);
    });
}

// update deaddiction root service
if (update_homecare_service) {
    update_homecare_service.addEventListener('submit', (e) => {
        e.preventDefault();
        if (e.target.id === 'update_service') {
            const form = new FormData();
            form.append(
                'name',
                document.getElementById(`name-${e.target.dataset.index}`).value
            );
            form.append(
                'description',
                document.getElementById(`description-${e.target.dataset.index}`)
                    .value
            );

            if (
                !!document.getElementById(
                    `serviceImage-${e.target.dataset.index}`
                ).files[0]
            ) {
                form.append(
                    'bannerImage',
                    document.getElementById(
                        `serviceImage-${e.target.dataset.index}`
                    ).files[0]
                );
            }
            form.append('statusType', 'update');
            return updatehomecaresService(form, e.target.dataset.service);
        }
    });
}

// careate new deaddiction root service
if (create_new_deaddiction_service) {
    create_new_deaddiction_service.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', document.getElementById('name').value);
        form.append(
            'description',
            document.getElementById('description').value
        );
        form.append(
            'bannerImage',
            document.getElementById('serviceImage').files[0]
        );
        form.append('statusType', 'create');
        return createDeaddictionService(form);
    });
}
if (update_deaddiction_service) {
    update_deaddiction_service.addEventListener('submit', (e) => {
        e.preventDefault();
        if (e.target.id === 'update_service') {
            const form = new FormData();
            form.append(
                'name',
                document.getElementById(`name-${e.target.dataset.index}`).value
            );
            form.append(
                'description',
                document.getElementById(`description-${e.target.dataset.index}`)
                    .value
            );

            if (
                !!document.getElementById(
                    `serviceImage-${e.target.dataset.index}`
                ).files[0]
            ) {
                form.append(
                    'bannerImage',
                    document.getElementById(
                        `serviceImage-${e.target.dataset.index}`
                    ).files[0]
                );
            }
            form.append('statusType', 'update');
            return updateDeaddictionServices(form, e.target.dataset.service);
        }
    });
}
// careate new ambulance root service
if (create_new_ambulance_service) {
    create_new_ambulance_service.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', document.getElementById('name').value);
        form.append(
            'description',
            document.getElementById('description').value
        );
        form.append(
            'bannerImage',
            document.getElementById('serviceImage').files[0]
        );
        form.append('statusType', 'create');
        return createAmbulanceService(form);
    });
}
if (update_ambulance_service) {
    update_ambulance_service.addEventListener('submit', (e) => {
        e.preventDefault();
        if (e.target.id === 'update_service') {
            const form = new FormData();
            form.append(
                'name',
                document.getElementById(`name-${e.target.dataset.index}`).value
            );
            form.append(
                'description',
                document.getElementById(`description-${e.target.dataset.index}`)
                    .value
            );

            if (
                !!document.getElementById(
                    `serviceImage-${e.target.dataset.index}`
                ).files[0]
            ) {
                form.append(
                    'bannerImage',
                    document.getElementById(
                        `serviceImage-${e.target.dataset.index}`
                    ).files[0]
                );
            }
            form.append('statusType', 'update');
            return updateAmbualnceServices(form, e.target.dataset.service);
        }
    });
}

// add new blood
if (available_blood_units) {
    available_blood_units.addEventListener('submit', (e) => {
        e.preventDefault();
        const bloodType = document.getElementById('newBloodGroup').value;
        const availableUnits = document.getElementById('newUnit').value;
        return bloodManage(
            bloodType,
            availableUnits,
            'manage',
            e.target.dataset.partner
        );
    });
}
// update blood
if (update_blood_units) {
    update_blood_units.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.id === 'updateBlood') {
            const bloodType = document.getElementById(
                `bloodType-${e.target.dataset.index}`
            ).value;
            const unit = document.getElementById(
                `bloodUnit-${e.target.dataset.index}`
            ).value;
            const serviceId = e.target.dataset.bloodid;
            return bloodManage(
                bloodType,
                unit,
                'manage',
                e.target.dataset.partner,
                serviceId
            );
        }
    });
}

// create new expert services
if (create_expert_provide_services) {
    create_expert_provide_services.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('expertType', document.getElementById('expertType').value);
        form.append(
            'description',
            document.getElementById('description').value
        );
        form.append('priceFrom', document.getElementById('priceFrom').value);
        form.append('priceTo', document.getElementById('priceTo').value);
        form.append(
            'workingTimeFrom',
            document.getElementById('workingTimeFrom').value
        );
        form.append(
            'workingTimeTo',
            document.getElementById('workingTimeTo').value
        );
        form.append(
            'serviceImage',
            document.getElementById('serviceImage').files[0]
        );
        form.append('statusType', 'create');
        return createMeetTheExpertServices(form, e.target.dataset.partner);
    });
}
// update new expert services
if (update_expert_provide_service) {
    update_expert_provide_service.addEventListener('submit', (e) => {
        e.preventDefault();
        if (e.target.id === 'update_service') {
            const form = new FormData();
            form.append(
                'expertType',
                document.getElementById(`expertType-${e.target.dataset.index}`)
                    .value
            );
            form.append(
                'description',
                document.getElementById(`description-${e.target.dataset.index}`)
                    .value
            );
            form.append(
                'priceFrom',
                document.getElementById(`priceFrom-${e.target.dataset.index}`)
                    .value
            );
            form.append(
                'priceTo',
                document.getElementById(`priceTo-${e.target.dataset.index}`)
                    .value
            );
            form.append(
                'workingTimeFrom',
                document.getElementById(
                    `workingTimeFrom-${e.target.dataset.index}`
                ).value
            );
            form.append(
                'workingTimeTo',
                document.getElementById(
                    `workingTimeTo-${e.target.dataset.index}`
                ).value
            );
            if (
                document.getElementById(
                    `serviceImage-${e.target.dataset.index}`
                ).files[0]
            )
                form.append(
                    'serviceImage',
                    document.getElementById(
                        `serviceImage-${e.target.dataset.index}`
                    ).files[0]
                );
            form.append('statusType', 'update');
            return updateMeetTheExpertServices(
                form,
                e.target.dataset.partner,
                e.target.dataset.service
            );
        }
    });
}

// create facilities
if (create_expter_facilities) {
    create_expter_facilities.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('descriptions').value;
        return manageExpertFacilities(
            title,
            description,
            'create',
            e.target.dataset.partner
        );
    });
}

// update facilties
if (update_expert_facilities) {
    update_expert_facilities.addEventListener('submit', (e) => {
        e.preventDefault();
        if (e.target.id === 'update_status') {
            const description = document.getElementById(
                `descriptions-${e.target.dataset.index}`
            ).value;
            const title = document.getElementById(
                `title-${e.target.dataset.index}`
            ).value;
            return manageExpertFacilities(
                title,
                description,
                'manage',
                e.target.dataset.partner,
                e.target.dataset.service
            );
        }
    });
}
// set status of expert booking
if (expert_booking_status) {
    expert_booking_status.addEventListener('change', (e) => {
        if (e.target.classList.contains('update_status')) {
            const status = document.getElementById(
                `updateStatus-${e.target.dataset.index}`
            ).value;
            return expertStatusUpdate(status, e.target.dataset.apply);
        }
    });
}

// set status of homecare booking
if (expert_quote_status_user) {
    expert_quote_status_user.addEventListener('change', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('update_status')) {
            const status = document.getElementById(
                `updateStatus-${e.target.dataset.index}`
            ).value;
            return expertStatusUpdateUser(status, e.target.dataset.apply);
        }
    });
}

// create new blood donner
if (create_new_blood_donner) {
    create_new_blood_donner.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('donnerName', document.getElementById('name').value);
        form.append('donnerPhone', document.getElementById('phone').value);
        form.append('bloodGroup', document.getElementById('bloodGroup').value);
        form.append(
            'lastDonatedDate',
            document.getElementById('lastDate').value
        );
        form.append('latitude', document.getElementById('latitude').value);
        form.append('longitude', document.getElementById('longitude').value);
        form.append(
            'donnerAddress',
            document.getElementById('donnerAddress').value
        );
        form.append('statusType', 'create');

        form.append('idProof', document.getElementById('image').files[0]);
        return createNewBloodDonner(form, e.target.dataset.user);
    });
}

// update blood donner
if (update_blood_donner) {
    update_blood_donner.addEventListener('submit', (e) => {
        e.preventDefault();
        if (e.target.id === 'update-donner') {
            const form = new FormData();
            form.append(
                'donnerName',
                document.getElementById(`name-${e.target.dataset.index}`).value
            );
            form.append(
                'donnerPhone',
                document.getElementById(`phone-${e.target.dataset.index}`).value
            );
            form.append(
                'bloodGroup',
                document.getElementById(`bloodGroup-${e.target.dataset.index}`)
                    .value
            );
            form.append(
                'lastDonatedDate',
                document.getElementById(`lastDate-${e.target.dataset.index}`)
                    .value
            );
            form.append(
                'latitude',
                document.getElementById(`latitude-${e.target.dataset.index}`)
                    .value
            );
            form.append(
                'longitude',
                document.getElementById(`longitude-${e.target.dataset.index}`)
                    .value
            );
            form.append(
                'donnerAddress',
                document.getElementById(
                    `donnerAddress-${e.target.dataset.index}`
                ).value
            );
            if (
                document.getElementById(`image-${e.target.dataset.index}`)
                    .files[0]
            )
                form.append(
                    'idProof',
                    document.getElementById(`image-${e.target.dataset.index}`)
                        .files[0]
                );
            form.append('statusType', 'update');
            return updateBloodDonner(
                form,
                e.target.dataset.user,
                e.target.dataset.donner
            );
        }
    });
}

// update blood requester
if (update_blood_requester) {
    update_blood_requester.addEventListener('change', (e) => {
        e.preventDefault();
        const status = update_blood_requester.value;
        return updateBloodRequesterUpdate(
            status,
            e.target.dataset.user,
            e.target.dataset.requester
        );
    });
}

// update blood request
if (update_blood_request) {
    update_blood_request.addEventListener('change', (e) => {
        e.preventDefault();

        if (e.target.classList.contains('update_status')) {
            const status = document.getElementById(
                `update_blood_request-${e.target.dataset.index}`
            ).value;

            return updateUserBloodRequest(
                status,
                e.target.dataset.user,
                e.target.dataset.request
            );
        }
    });
}

// create ambulance driver
if (create_Ambulance_driver) {
    create_Ambulance_driver.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('driverName', document.getElementById('name').value);
        form.append('phone', document.getElementById('phone').value);
        form.append('profileImage', document.getElementById('image').files[0]);
        form.append('verified', document.getElementById('verified').checked);
        form.append('statusType', 'create');
        return createNewAmbulancedriver(form);
    });
}
// update ambulance driver
if (update_ambulance_driver) {
    update_ambulance_driver.addEventListener('submit', (e) => {
        e.preventDefault();
        if (e.target.id === 'update_driver') {
            const form = new FormData();
            form.append(
                'driverName',
                document.getElementById(`name-${e.target.dataset.index}`).value
            );
            form.append(
                'phone',
                document.getElementById(`phone-${e.target.dataset.index}`).value
            );
            if (
                document.getElementById(`image-${e.target.dataset.index}`)
                    .files[0]
            )
                form.append(
                    'profileImage',
                    document.getElementById(`image-${e.target.dataset.index}`)
                        .files[0]
                );
            form.append(
                'verified',
                document.getElementById(`verified-${e.target.dataset.index}`)
                    .checked
            );
            form.append('statusType', 'update');
            return updateNewAmbulancedriver(form, e.target.dataset.driver);
        }
    });
}
// create traffic police
if (create_traffic_police) {
    create_traffic_police.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', document.getElementById('name').value);
        form.append('phone', document.getElementById('phone').value);
        form.append('profileImage', document.getElementById('image').files[0]);
        form.append('statusType', 'create');
        return createNewTrafficPolice(form);
    });
}
// update traffic police
if (update_traffic_police) {
    update_traffic_police.addEventListener('submit', (e) => {
        e.preventDefault();
        if (e.target.id === 'update_police') {
            const form = new FormData();
            form.append(
                'name',
                document.getElementById(`name-${e.target.dataset.index}`).value
            );
            form.append(
                'phone',
                document.getElementById(`phone-${e.target.dataset.index}`).value
            );
            if (
                document.getElementById(`image-${e.target.dataset.index}`)
                    .files[0]
            )
                form.append(
                    'profileImage',
                    document.getElementById(`image-${e.target.dataset.index}`)
                        .files[0]
                );
            form.append('statusType', 'update');
            return updateTrafficPolice(form, e.target.dataset.service);
        }
    });
}

// assign ambulace status
if (assign_ambulance_drivers) {
    assign_ambulance_drivers.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('assignAmbulanceDriver')) {
            return assignAmbulanceDriver(
                e.target.dataset.request,
                e.target.dataset.driver
            );
        }
    });
}

if (update_ambulance_driver_request) {
    update_ambulance_driver_request.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.id === 'updateStatus') {
            return updateAmbulanceRequestStatus(
                e.target.dataset.status,
                e.target.dataset.driver,
                e.target.dataset.service
            );
        }
    });
}

// add sports
if (addSport) {
    addSport.addEventListener('click', (e) => {
        e.preventDefault();
        const html = `<input class="form-control bg-li sportsActivity mt-3" type="text" placeholder="Sports/ Indoor Activities"  />`;
        const idEl = document.getElementById('addNewSprots');
        return idEl.insertAdjacentHTML('beforeend', html);
    });
}

// update study abroad college details
if (update_studyabroad_collegedetails) {
    update_studyabroad_collegedetails.addEventListener('submit', async (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append(
            'establishedYear',
            document.getElementById('estalisedYear').value
        );
        form.append('universityType', document.getElementById('uniType').value);
        form.append('affliation', document.getElementById('affliiation').value);
        form.append(
            'teachingLanguage',
            document.getElementById('teachingLanguage').value
        );
        form.append('syllabus', document.getElementById('syllabus').value);
        form.append(
            'availableHospitalBeds',
            document.getElementById('availHospitalBedsClg').value
        );
        form.append(
            'majorityStrudentsFrom',
            document.getElementById('majaorStrudentFrom').value
        );
        if (document.getElementById('infraStructureVideo').files[0])
            form.append(
                'collegeInfraStructureVideo',
                document.getElementById('infraStructureVideo').files[0]
            );

        const courses = [];
        [...document.querySelectorAll('input[name=couseAvai]:checked')].map(
            (el) => courses.push(el.value)
        );
        const ugCour = [];

        [...document.getElementById('ugcourse').options].map(
            (el) => el.selected && ugCour.push(el.value)
        );
        const pgCour = [];

        [...document.getElementById('pgcourse').options].map(
            (el) => el.selected && pgCour.push(el.value)
        );
        const sports = [...document.querySelectorAll('.sportsActivity')].map(
            (el) => {
                return el.value;
            }
        );
        form.append(
            'availableSeatsinUG',
            document.getElementById('totalUGSeats').value
        );
        form.append(
            'availableSeatsinPG',
            document.getElementById('totalPGSeats').value
        );
        if (document.getElementById('hotelImages').files)
            await Promise.all(
                Object.entries(
                    document.getElementById('hotelImages').files
                ).map(([key, value]) => {
                    console.log(value);
                    return form.append('hostelImages', value);
                })
            );
        form.append(
            'withFood',
            !document.querySelector('input[name="foodFacilityRadio"]:checked')
                .value
        );

        form.append(
            'cookingFacilites',
            !document.querySelector(
                'input[name="cookingFacilityRadio"]:checked'
            ).value
        );
        form.append(
            'proximityFromCollegetoHostel',
            document.getElementById('collegeToHostelDistance').value
        );
        form.append(
            'libraryFacilities',
            !document.querySelector('input[name="libraryFacility"]:checked')
                .value
        );
        if (document.getElementById('libraryImages').files)
            await Promise.all(
                Object.entries(
                    document.getElementById('libraryImages').files
                ).map(([key, value]) => {
                    console.log(value);
                    return form.append('libraryImages', value);
                })
            );
        form.append('sportIndoorActivities', sports);
        form.append('ugCourses', ugCour);
        form.append('pgCourses', pgCour);
        form.append('courseAvailable', courses);

        return updateStudyAbroadcollegeDetails(form, e.target.dataset.id);
    });
}

// add pg course
if (addPgCourse) {
    addPgCourse.addEventListener('click', (e) => {
        const html = `<input class="form-control mb-2 bg-li postGraduateCourses" id="uniType" type="text" placeholder="Post graduation course">`;
        const idEl = document.getElementById('addPGCourseText');
        idEl.insertAdjacentHTML('beforeend', html);
    });
}

// add year in ug cours
if (addyear) {
    addyear.addEventListener('click', (e) => {
        e.preventDefault();
        const length = document.querySelectorAll('.ugCourseList').length;
        const year = length + 1;
        const semester2 = year * 2;
        const semester1 = semester2 - 1;
        const html = `
          <div class="mb-3 row pd-5 g-1 ps-5 ugCourseList">
                <label class="col-sm-3 col-form-label fw-bold" for="foodFacility">Year ${year}</label>
                <div class="col-sm-7">
                    <div class="mb-4" id="year${year}sem${semester1}">Semester ${semester1}
                        <input class="form-control bg-li mb-2 year${year}sem${semester1}Course" type="text" placeholder="Subject ">
                    </div>
                    <div class="d-flex justify-content-center"><button class="btn btn-primary addCourse" id="addYear${year}Semester${semester1}Course" type="button" data-sem="${semester1}" data-year="${year}">Add Subject</button></div>
                    <div id="year${year}sem${semester2}">Semester ${semester2}
                        <input class="form-control bg-li mb-2 year${year}sem${semester2}Course" type="text" placeholder="Subject"></div>
                    <div class="d-flex justify-content-center"><button class="btn btn-primary addCourse" id="addYear${year}Semester${semester2}Course" type="button" data-sem="${semester2}" data-year="${year}">Add Subject</button></div>
                </div>
            </div>
        `;
        const idEl = document.getElementById('ugCourses');
        idEl.insertAdjacentHTML('beforeend', html);
    });
}
// add event lister
if (ugCourses) {
    ugCourses.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('addCourse')) {
            const html = `<input class="form-control bg-li mb-2 year${e.target.dataset.year}sem${e.target.dataset.sem}Course" type="text" placeholder="Subject ">`;
            const idEl = document.getElementById(
                `year${e.target.dataset.year}sem${e.target.dataset.sem}`
            );
            idEl.insertAdjacentHTML('beforeend', html);
        }
    });
}

// update study abroad course details
if (update_studyabroad_coursedetails) {
    update_studyabroad_coursedetails.addEventListener('submit', async (e) => {
        e.preventDefault();
        const underGraduateCourses = document.getElementById(
            'underGradationCourse'
        ).value;
        const postGraduateCourses = await Promise.all(
            [...document.querySelectorAll('.postGraduateCourses')].map(
                (el) => el.value
            )
        );
        const minimumPercentage =
            document.getElementById('minimumPercentage').value;
        const entranceExam = document.getElementById('entranceExam').value;
        const tutionFees = document.getElementById('tudtionFees1yearUSD').value;
        const tutionFeesHostel = document.getElementById(
            'tudtionFeesWithHostel1yearUSD'
        ).value;
        const tutionFeesACHostel = document.getElementById(
            'tudtionFees1yearAcHostelUSD'
        ).value;
        const totalTutionFees = document.getElementById(
            'tudtionFees5yearUSD'
        ).value;
        const totalTutionFeesHostel = document.getElementById(
            'tudtionFeesWithHostel5yearUSD'
        ).value;
        const totalTutionFeesACHostel = document.getElementById(
            'tudtionFee5yearsAcHostelUSD'
        ).value;
        const underGraduationCourseSyllabus = [];
        const length = document.querySelectorAll('.ugCourseList').length;

        for (let i = 0; i < length; i++) {
            const docs = document.querySelectorAll('.year1sem1Course');
            const year = i + 1;
            const semester2 = year * 2;
            const semester1 = semester2 - 1;
            const courses1 = document.querySelectorAll(
                `.year${year}sem${semester1}Course`
            );
            const semester1Course = await Promise.all(
                [...courses1].map((el) => el.value)
            );
            const courses2 = document.querySelectorAll(
                `.year${year}sem${semester2}Course`
            );
            const semester2Course = await Promise.all(
                [...courses2].map((el) => el.value)
            );
            underGraduationCourseSyllabus.push({
                year,
                semester1: semester1Course,
                semester2: semester2Course
            });
        }
        const firtTermFees = document.getElementById('firtTermFees').value;
        const reminFeesPaitWithin = document.getElementById(
            'reminFeesPaitWithin'
        ).value;
        const courseDuration = document.getElementById('courseDuration').value;
        const labDetails = document.getElementById('labDetails').value;
        const scholrshipAvailablity = !document.querySelector(
            'input[name="scholarshipAvail"]:checked'
        ).value;

        return studyAbroadCourseUpdate(
            {
                underGraduateCourses,
                postGraduateCourses,
                minimumPercentage,
                entranceExam,
                tutionFees,
                tutionFeesHostel,
                tutionFeesACHostel,
                totalTutionFees,
                totalTutionFeesHostel,
                totalTutionFeesACHostel,
                underGraduationCourseSyllabus,
                firtTermFees,
                reminFeesPaitWithin,
                courseDuration,
                labDetails,
                scholrshipAvailablity
            },
            e.target.dataset.id
        );
    });
}

// add embassy
if (addEmbassy) {
    addEmbassy.addEventListener('click', (e) => {
        e.preventDefault();
        const id = Date.now();
        const html = `
                    <hr>
                    <div class=oEmbassyDeatils data-id=${id}>
                        <div class="mb-3 row pd-5 g-1 ps-5">
                            <label class="col-sm-3 col-form-label fw-bold" for="oEmbassyAddress-${id}">Address  </label>
                            <div class="col-sm-7">
                            <input class="form-control bg-li" id="oEmbassyAddress-${id}" type="text" value="" placeholder="Address  "></div>
                        </div>
                        <div class="mb-3 row pd-5 g-1 ps-5">
                            <label class="col-sm-3 col-form-label fw-bold" for="oEmbassyPhone-${id}">Phone</label>
                            <div class="col-sm-7"><input class="form-control bg-li" id="oEmbassyPhone-${id}" type="text" value="" placeholder="Phone"></div>
                        </div>
                        <div class="mb-3 row pd-5 g-1 ps-5">
                            <label class="col-sm-3 col-form-label fw-bold" for="oEmbassyEmail-${id}">Email</label>
                            <div class="col-sm-7"><input class="form-control bg-li" id="oEmbassyEmail-${id}" type="text" value="" placeholder="Email"></div>
                            <div class="mb-3 row pd-5 g-1 ps-5"></div>
                            <label class="col-sm-3 col-form-label fw-bold" for="oEmbassyWebsite-${id}">Website</label>
                            <div class="col-sm-7"><input class="form-control bg-li" id="oEmbassyWebsite-${id}" type="text" value="" placeholder="Website"></div>
                        </div>
                    </div>`;
        const elID = document.getElementById('addOtherEmbassys');
        elID.insertAdjacentHTML('beforeend', html);
    });
}

// update study abroad Faciliteis
if (update_studyabroad_facilities) {
    update_studyabroad_facilities.addEventListener('submit', async (e) => {
        e.preventDefault();

        const indianFoodAvailablityinHostel = document.getElementById(
            'indianFoodInsideHostel'
        ).value;
        const monthlyRentalAvailablityOutsideCollege = document.getElementById(
            'monthlyHouseRentalOutsideUni'
        ).value;
        const travelExpenditure =
            document.getElementById('dailyTravelExpen').value;
        const nearestAirport = document.getElementById('nearAirport').value;
        const distanceAirporttoCollege = document.getElementById(
            'distanceToArirportToClg'
        ).value;
        const busFacilities = !document.querySelector(
            'input[name="busFacilities"]:checked'
        ).value;
        const proximityFromCollegetoIndianEmbassy = document.getElementById(
            'proxiFromCollegeToEBS'
        ).value;

        const address = document.getElementById('indianEmbassyAddress').value;
        const phone = document.getElementById('indianEmbassyPhone').value;
        const email = document.getElementById('indianEmbassyEmail').value;
        const nearestCountryvaiRoad =
            document.getElementById('nearCountryViaRoad').value;
        const nearbyIndianRestarents =
            document.getElementById('nearIndainRes').value;
        const modeofIndianTransportAvailablity =
            document.getElementById('trsportModeAvail').value;
        const visaFormality = !document.querySelector(
            'input[name="visaFormality"]:checked'
        ).value;
        const politicalStablity = !document.querySelector(
            'input[name="politicalStablity"]:checked'
        ).value;
        const womenSafety = !document.querySelector(
            'input[name="womenSafety"]:checked'
        ).value;
        const length = document.querySelectorAll('.oEmbassyDeatils');
        const otherEmbassy = await Promise.all(
            [...length].map((el) => {
                const id = el.dataset.id;
                return {
                    address: document.getElementById(`oEmbassyAddress-${id}`)
                        .value,
                    phone: document.getElementById(`oEmbassyPhone-${id}`).value,
                    email: document.getElementById(`oEmbassyEmail-${id}`).value,
                    website: document.getElementById(`oEmbassyWebsite-${id}`)
                        .value
                };
            })
        );
        return updateStudyAbroadFacilities(
            {
                indianFoodAvailablityinHostel,
                monthlyRentalAvailablityOutsideCollege,
                travelExpenditure,
                nearestAirport,
                distanceAirporttoCollege,
                busFacilities,
                proximityFromCollegetoIndianEmbassy,
                address,
                phone,
                email,
                nearestCountryvaiRoad,
                nearbyIndianRestarents,
                modeofIndianTransportAvailablity,
                visaFormality,
                politicalStablity,
                womenSafety,
                otherEmbassy
            },
            e.target.dataset.id
        );
    });
}

// update hospital package
// if (update_hospital) {
//     update_hospital.addEventListener('submit', (e) => {
//         e.preventDefault();

//         const name = document.getElementById('contactPerson').value;
//         const phone = document.getElementById('contactpersonPhone').value;
//         const centerPhone = document.getElementById('Phone').value;
//         const centerLandLine = document.getElementById('landline').value;
//         const latitude = document.getElementById('latitude').value;
//         const longtitude = document.getElementById('longtitude').value;
//         const openTime = document.getElementById('openTime').value;
//         const closeTime = document.getElementById('closeTime').value;
//         const address = document.getElementById('Address').value;
//         const city = document.getElementById('city').value;
//         const medicalTourism =
//             document.getElementById('medicalTourism').checked;
//         const hospitalPackage =
//             document.getElementById('hospitalPackage').checked;
//         return updateHospital(
//             name,
//             phone,
//             centerPhone,
//             centerLandLine,
//             latitude,
//             longtitude,
//             openTime,
//             closeTime,
//             address,
//             city,
//             !!medicalTourism,
//             !!hospitalPackage
//         );
//     });
// }

// create hospitalpacage
if (add_new_hospital_package) {
    add_new_hospital_package.addEventListener('submit', (e) => {
        e.preventDefault();
        const packagename = document.getElementById('newPackage').value;
        return manageHopitaPackage(packagename, 'create', e.target.dataset.pid);
    });
}

// update hospital package
if (update_hospital_category) {
    update_hospital_category.addEventListener('submit', (e) => {
        e.preventDefault();
        if (e.target.id === 'update_category') {
            const id = e.target.dataset.key;
            const packageName = document.getElementById(
                `newPackage${id}`
            ).value;
            return manageHopitaPackage(
                packageName,
                'manage',
                e.target.dataset.pid,
                e.target.dataset.id
            );
        }
        if (e.target.id === 'add_sub_category') {
            const id = e.target.dataset.key;
            const subCategoryName = document.getElementById(
                `addNewSubCategory${id}`
            ).value;

            return manageHospitalPackageSubCategory(
                subCategoryName,
                'create',
                e.target.dataset.pid,
                e.target.dataset.id
            );
        }
        if (e.target.id === 'update_sub_category') {
            const subCategoryName = document.getElementById(
                `updateSubCategory${e.target.dataset.key1}${e.target.dataset.key2}`
            ).value;

            return manageHospitalPackageSubCategory(
                subCategoryName,
                'manage',
                e.target.dataset.pid,
                e.target.dataset.id,
                e.target.dataset.sid
            );
        }
        if (e.target.id === 'add_package_type') {
            const packageName = document.getElementById(
                `packageName${e.target.dataset.key1}${e.target.dataset.key2}`
            ).value;
            const recommendAge = document.getElementById(
                `recommendAge${e.target.dataset.key1}${e.target.dataset.key2}`
            ).value;
            const description = document.getElementById(
                `description${e.target.dataset.key1}${e.target.dataset.key2}`
            ).value;
            const price = document.getElementById(
                `price${e.target.dataset.key1}${e.target.dataset.key2}`
            ).value;

            return manageHospitalssPackType(
                {
                    packageName,
                    recommendAge,
                    description,
                    price
                },
                'create',
                e.target.dataset.pid,
                e.target.dataset.id,
                e.target.dataset.sid
            );
        }
        if (e.target.id === 'update_package_type') {
            const packageName = document.getElementById(
                `packageName${e.target.dataset.key1}${e.target.dataset.key2}${e.target.dataset.key3}`
            ).value;
            const recommendAge = document.getElementById(
                `recommendAge${e.target.dataset.key1}${e.target.dataset.key2}${e.target.dataset.key3}`
            ).value;
            const description = document.getElementById(
                `description${e.target.dataset.key1}${e.target.dataset.key2}${e.target.dataset.key3}`
            ).value;
            const price = document.getElementById(
                `price${e.target.dataset.key1}${e.target.dataset.key2}${e.target.dataset.key3}`
            ).value;
            return manageHospitalssPackType(
                {
                    packageName,
                    recommendAge,
                    description,
                    price
                },
                'manage',
                e.target.dataset.pid,
                e.target.dataset.id,
                e.target.dataset.sid,
                e.target.dataset.spid
            );
        }
        if (e.target.id === 'add_service_list') {
            e.preventDefault();
            const serviceTitle = document.getElementById(
                `hospitalServiceName${e.target.dataset.key1}${e.target.dataset.key2}${e.target.dataset.key3}`
            ).value;
            const services = [
                ...document.querySelectorAll(
                    `.hospitalservices${e.target.dataset.key1}${e.target.dataset.key2}${e.target.dataset.key3}`
                )
            ].map((el) => {
                return el.value;
            });
            return manageHospitalServiceList(
                { serviceTitle, services },
                'create',
                e.target.dataset.pid,
                e.target.dataset.id,
                e.target.dataset.sid,
                e.target.dataset.spid
            );
        }
        if (e.target.id === 'update_service_list') {
            e.preventDefault();
            const serviceTitle = document.getElementById(
                `hospitalServiceListUpdateTitle${e.target.dataset.key1}${e.target.dataset.key2}${e.target.dataset.key3}${e.target.dataset.key4}`
            ).value;
            const services = [
                ...document.querySelectorAll(
                    `.hospitalServiceListUpdate${e.target.dataset.key1}${e.target.dataset.key2}${e.target.dataset.key3}${e.target.dataset.key4}`
                )
            ].map((el) => {
                return el.value;
            });
            console.log(services);
            return manageHospitalServiceList(
                { serviceTitle, services },
                'manage',
                e.target.dataset.pid,
                e.target.dataset.id,
                e.target.dataset.sid,
                e.target.dataset.spid,
                e.target.dataset.hsi
            );
        }
    });
}

if (addServiceList.length) {
    [...addServiceList].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const id1 = el.dataset.key1;
            const id2 = el.dataset.key2;
            const id3 = el.dataset.key3;
            const id = Date.now();
            const html = `
            <div class="row g-3 mb-3" id="serviceListItems${id1}${id2}${id3}" data-key=${id} style="width:22%;">
                <div class="col-md-12">
                    <label class="form-label" for="title">Facility Name<span class="text-danger">*</span>
                    </label>
                    <input class="form-control" id="title" type="text" placeholder="Facility Name" required="">
                </div>
                <div class="col-md-12">
                    <label class="form-label" for="description">Description <span class="text-danger">*</span>
                    </label>
                    <input class="form-control" id="description" type="text" placeholder="Description" required="">
                    </div>
                    <div class="col-12 text-center">
                    <button class="btn main-color-background color-white" type="submit">Add Facility
                    </button>
                </div>
            </div>
            `;
        });
    });
}
// add event lister for add hospital service list
if (addServicesForHospitals.length) {
    [...addServicesForHospitals].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const id1 = el.dataset.key1;
            const id2 = el.dataset.key2;
            const id3 = el.dataset.key3;
            const html = `<input class="form-control hospitalservices${id1}${id2}${id3} mt-2" placeholder="List">`;
            const elId = document.getElementById(
                `hospitalServiceAdd${id1}${id2}${id3}`
            );
            return elId.insertAdjacentHTML('beforeend', html);
        });
    });
}

// update event lister for add hospital service list
if (updateServicesForHospitals.length) {
    [...updateServicesForHospitals].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const id1 = el.dataset.key1;
            const id2 = el.dataset.key2;
            const id3 = el.dataset.key3;
            const id4 = el.dataset.key4;
            const html = `<input class="form-control hospitalServiceListUpdate${id1}${id2}${id3}${id4} mt-2" placeholder="List">`;
            const elId = document.getElementById(
                `hospitalServiceUpdate${id1}${id2}${id3}${id4}`
            );
            console.log(elId);
            return elId.insertAdjacentHTML('beforeend', html);
        });
    });
}

// add event of new schedules
if (addSchedules.length) {
    [...addSchedules].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });
}

if (hourlyAdd.length) {
    [...hourlyAdd].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const data = document.getElementById(
                `addHourBasein${el.dataset.in}`
            );

            const html = `
                <div class="ms-2 mb-2">
                    <select class="form-select hour${el.dataset.in}" type="text" placeholder="Another input placeholder">
                        <option value="" selected disabled value="">--Time--</option>
                        <option value="01PM">01PM</option>
                        <option value="02PM">02PM</option>
                        <option value="03PM">03PM</option>
                        <option value="04PM">04PM</option>
                        <option value="05PM">05PM</option>
                        <option value="06PM">06PM</option>
                        <option value="07PM">07PM</option>
                        <option value="08PM">08PM</option>
                        <option value="09PM">09PM</option>
                        <option value="10PM">10PM</option>
                        <option value="11PM">11PM</option>
                        <option value="12PM">12PM</option>
                        <option value="01AM">01AM</option>
                        <option value="02AM">02AM</option>
                        <option value="03AM">03AM</option>
                        <option value="04AM">04AM</option>
                        <option value="05AM">05AM</option>
                        <option value="06AM">06AM</option>
                        <option value="07AM">07AM</option>
                        <option value="08AM">08AM</option>
                        <option value="09AM">09AM</option>
                        <option value="10AM">10AM</option>
                        <option value="11AM">11AM</option>
                        <option value="12AM">12AM</option>
                    </select>
                </div>
            `;
            data.insertAdjacentHTML('beforeend', html);
        });
    });
}

// update schudle
if (update_schudle) {
    update_schudle.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (e.target.id === 'update_schudles') {
            const schules = await Promise.all(
                [
                    ...document.querySelectorAll(
                        `.hour${e.target.dataset.index}`
                    )
                ].map((el) => {
                    return el.value;
                })
            );
            return updateSchudles(
                schules,
                e.target.dataset.index2,
                e.target.dataset.id
            );
        }
    });
}

// update schudle
if (update_consultacy_schudles) {
    update_consultacy_schudles.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (e.target.id === 'update_schudles') {
            const schules = await Promise.all(
                [
                    ...document.querySelectorAll(
                        `.hour${e.target.dataset.index}`
                    )
                ].map((el) => {
                    return el.value;
                })
            );
            const slots = document.getElementById(
                `slot${e.target.dataset.index}`
            ).value;
            const price = document.getElementById(
                `price${e.target.dataset.index}`
            ).value;
            const availablity = document.getElementById(
                `availablity${e.target.dataset.index}`
            ).value;
            return updateConsultancySchudles(
                {
                    availableTime: schules,
                    slotsInHour: slots,
                    pricePerSlot: price,
                    day: e.target.dataset.index2,
                    availablity
                },
                e.target.dataset.id
            );
        }
    });
}

// select active data
if (consultancyBookType) {
    consultancyBookType.addEventListener('change', (e) => {
        e.preventDefault();
        const value = e.target.value;

        if (value === 'online') {
            document.getElementById('activeOnline').classList.remove('d-none');
            document.getElementById('activeOPD').classList.add('d-none');
        } else if (value === 'opd') {
            document.getElementById('activeOnline').classList.add('d-none');
            document.getElementById('activeOPD').classList.remove('d-none');
        }
    });
}

// update online consultant status
if (update_online_consultancy_status) {
    update_online_consultancy_status.addEventListener('change', (e) => {
        e.preventDefault();
        if (e.target.id === 'update_status') {
            return updateConsultantStatus(
                e.target.value,
                update_online_consultancy_status.dataset.id,
                e.target.dataset.id
            );
        }
    });
}
// update online consultant status
if (update_opd_consultancy_status) {
    update_opd_consultancy_status.addEventListener('change', (e) => {
        e.preventDefault();
        if (e.target.id === 'update_status') {
            return updateConsultantStatus(
                e.target.value,
                update_opd_consultancy_status.dataset.id,
                e.target.dataset.id
            );
        }
    });
}
// update online consultant status
if (update_user_online_consultancy_status) {
    update_user_online_consultancy_status.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.id === 'update_status') {
            return updateUserConsultantStatus(
                e.target.value,
                update_user_online_consultancy_status.dataset.id,
                e.target.dataset.id
            );
        }
    });
}
// update online consultant status
if (update_user_opd_consultancy_status) {
    update_user_opd_consultancy_status.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.id === 'update_status') {
            return updateUserConsultantStatus(
                e.target.value,
                update_user_opd_consultancy_status.dataset.id,
                e.target.dataset.id
            );
        }
    });
}

if (counsilarStatus) {
    counsilarStatus.addEventListener('change', (e) => {
        e.preventDefault();
        return counsilarStatusUpdate(e.target.checked, e.target.dataset.id);
    });
}

// careate new ambulance root service
if (create_hospiatl_package_service) {
    create_hospiatl_package_service.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', document.getElementById('name').value);
        form.append(
            'description',
            document.getElementById('description').value
        );
        form.append(
            'bannerImage',
            document.getElementById('serviceImage').files[0]
        );
        form.append('statusType', 'create');
        return createHospitalPackage(form);
    });
}

if (update_hospital_service) {
    update_hospital_service.addEventListener('submit', (e) => {
        e.preventDefault();
        if (e.target.id === 'update_service') {
            const form = new FormData();
            form.append(
                'name',
                document.getElementById(`name-${e.target.dataset.index}`).value
            );
            form.append(
                'description',
                document.getElementById(`description-${e.target.dataset.index}`)
                    .value
            );

            if (
                !!document.getElementById(
                    `serviceImage-${e.target.dataset.index}`
                ).files[0]
            ) {
                form.append(
                    'bannerImage',
                    document.getElementById(
                        `serviceImage-${e.target.dataset.index}`
                    ).files[0]
                );
            }
            form.append('statusType', 'update');
            return updateHospitalPackageList(form, e.target.dataset.service);
        }
    });
}

// careate new orga
if (create_hospiatl_organs_service) {
    create_hospiatl_organs_service.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', document.getElementById('name').value);
        form.append(
            'description',
            document.getElementById('description').value
        );
        form.append(
            'bannerImage',
            document.getElementById('serviceImage').files[0]
        );
        form.append('statusType', 'create');
        return createHospitalOrgan(form);
    });
}

if (update_hospital_organs_service) {
    update_hospital_organs_service.addEventListener('submit', (e) => {
        e.preventDefault();
        if (e.target.id === 'update_service') {
            const form = new FormData();
            form.append(
                'name',
                document.getElementById(`name-${e.target.dataset.index}`).value
            );
            form.append(
                'description',
                document.getElementById(`description-${e.target.dataset.index}`)
                    .value
            );

            if (
                !!document.getElementById(
                    `serviceImage-${e.target.dataset.index}`
                ).files[0]
            ) {
                form.append(
                    'bannerImage',
                    document.getElementById(
                        `serviceImage-${e.target.dataset.index}`
                    ).files[0]
                );
            }
            form.append('statusType', 'update');
            return updateHospitalOrganList(form, e.target.dataset.service);
        }
    });
}

// update opticals
if (update_opticals) {
    update_opticals.addEventListener('submit', (e) => {
        e.preventDefault();

        const contactPersonName =
            document.getElementById('contactPerson').value;
        const contactPersonPhone =
            document.getElementById('contactpersonPhone').value;
        const Phone = document.getElementById('Phone').value;
        const Landline = document.getElementById('landline').value;
        const latitude = document.getElementById('latitude').value;
        const longtitude = document.getElementById('longtitude').value;
        const openTime = document.getElementById('openTime').value;
        const closeTime = document.getElementById('closeTime').value;
        const Address = document.getElementById('Address').value;

        const city = document.getElementById('city').value;

        return updateOpticals(
            contactPersonName,
            contactPersonPhone,
            Phone,
            Landline,
            latitude,
            longtitude,
            openTime,
            closeTime,
            Address,
            city,
            e.target.dataset.opticalsid
        );
    });
}
const create_event_For_close = (id, id2) => {
    document.getElementById(id).addEventListener('click', (e) => {
        document.getElementById(id2).remove();
    });
};
if (addFrameDetails) {
    addFrameDetails.addEventListener('click', (e) => {
        e.preventDefault();
        const addFrameDetails = document.getElementById('newFrameDetails');
        const id = Date.now();
        let html = `
            <div id='newFrameOptions-${id}' class='newFrameDetails' data-index=${id}>
                <a class="btn btn-danger" id='newFrameValues-${id}' data-index=${id}>Delete</a>
                <div class="col-md-12">
                    <label class="col-form-label fw-bold">Frame Type:</label>
                    <select class="form-select border border-2 bg-li" id="frameType-${id}" required>
                        <option>-- Select Frame Type --</option>
                        <option value="rectangle">Rectangle</option>
                        <option value="oval">Oval</option>
                        <option value="round">Round</option>
                        <option value="quare">Quare</option>
                        <option value="large">Large</option>
                        <option value="horn">Horn</option>
                        <option value="browline">Browline</option>
                        <option value="aviator">Aviator</option>
                        <option value="cateye">Cateye</option>
                        <option value="oversized">Oversized</option>
                        <option value="geomateric">Geomateric</option>
                    </select>
                </div>
               <div class="col-md-12">
                    <label class="form-label" for="newColor-${id}">Color<span class="text-danger">*</span></label>
                    <input class="form-control" id="newColor-${id}" type="text" placeholder="Color" required="" />
                </div>
                <div class="col-md-12">
                    <label class="col-form-label fw-bold">Available Size:</label>
                    <select class="form-select border border-2 bg-li" id="newSize-${id}" required>
                        <option>-- Select Frame Type -- </option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </div>
                <div class="col-md-12">
                    <label class="form-label" for="newPrice-${id}">Optical Price<span class="text-danger">*</span></label>
                    <input class="form-control" id="newPrice-${id}" type="text" placeholder="Price" required="" />
                </div>
                <div class="col-md-12">
                    <label class="form-label" for="newDiscountPrice-${id}">Optical Discount Price<span class="text-danger">*</span></label>
                    <input class="form-control" id="newDiscountPrice-${id}" type="text" placeholder="Discount Price" required="" />
                </div>
                <div class="col-md-12">
                    <label class="form-label" for="newFrameImage-${id}">Frame Image<span class="text-danger">*</span></label>
                    <input class="form-control" id="newFrameImage-${id}" type="file"  required="" accept="image/*" required />
                </div>
                <div class="col-md-12">
                    <label class="form-label" for="newFrameImageGallery-${id}">Frame Image Gallery<span class="text-danger">*</span></label>
                    <input class="form-control" id="newFrameImageGallery-${id}" type="file" multiple required="" required accept="image/*"  />
                </div>
            </div>
        `;
        addFrameDetails.insertAdjacentHTML('afterend', html);
        return create_event_For_close(
            `newFrameValues-${id}`,
            `newFrameOptions-${id}`
        );
    });
}

// create new product
if (create_new_optical_product) {
    create_new_optical_product.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('newName').value;
        const glassType = document.getElementById('glassType').value;
        const glassGenderType = document.getElementById('genderType').value;
        const glassFrameType = document.getElementById('frameType').value;
        const materiralType = document.getElementById('materialType').value;
        const description = document.getElementById('newdescription').value;

        const frames = document.querySelectorAll('.newFrameDetails');
        const frameDetails = [];
        await Promise.all(
            [...frames].map(async (el) => {
                const obj = {};
                obj.frameType = document.getElementById(
                    `frameType-${el.dataset.index}`
                ).value;

                obj.color = document.getElementById(
                    `newColor-${el.dataset.index}`
                ).value;

                obj.availableSize = document.getElementById(
                    `newSize-${el.dataset.index}`
                ).value;

                obj.opticalPrice = document.getElementById(
                    `newPrice-${el.dataset.index}`
                ).value;

                obj.opticalDiscountPrice = document.getElementById(
                    `newDiscountPrice-${el.dataset.index}`
                ).value;

                const imageForm = new FormData();
                await Promise.all(
                    Object.entries(
                        document.getElementById(
                            `newFrameImageGallery-${el.dataset.index}`
                        ).files
                    ).map(([key, value]) => {
                        return imageForm.append('imageGallery', value);
                    })
                );

                imageForm.append(
                    'image',
                    document.getElementById(`newFrameImage-${el.dataset.index}`)
                        .files[0]
                );
                imageForm.append('imageStatus', 'create');
                const res = await axios({
                    method: 'POST',
                    url: '/api/v1/opticals/get-images',
                    data: imageForm
                });
                if (res.data.status !== 'Success') {
                    return swal(
                        'Warning',
                        'Something went wrong while processing your reques1t.',
                        'error'
                    );
                }

                obj.frameImage = res.data.image;
                obj.frameImageGallery = res.data.imageGallery;
                frameDetails.push(obj);
            })
        );

        return createNewOpticalProduct(
            {
                name,
                glassType,
                glassGenderType,
                glassFrameType,
                materiralType,
                frameDetails,
                description,
                statusType: 'create'
            },
            e.target.dataset.id
        );
    });
}

// delete opticcal product for update
if (deleteFrameDetailsForUpdate.length) {
    [...deleteFrameDetailsForUpdate].map((el) => {
        console.log(
            document.getElementById(
                `updateFrameValues-${el.dataset.key}-${el.dataset.index}`
            )
        );
        document
            .getElementById(
                `updateFrameValues-${el.dataset.key}-${el.dataset.index}`
            )
            .addEventListener('click', (e) => {
                e.preventDefault();
                document
                    .getElementById(
                        `updateFrameOptions-${el.dataset.key}-${el.dataset.index}`
                    )
                    .remove();
            });
    });
}

// add frame details for update
if (addFrameDetailsForUpdate) {
    [...addFrameDetailsForUpdate].map((el) => {
        document
            .getElementById(`addFrameDetailsForUpdate-${el.dataset.key}`)
            .addEventListener('click', (e) => {
                e.preventDefault();
                const addFrameDetails = document.getElementById(
                    `updateFrameDetails-${e.target.dataset.key}`
                );
                const key = e.target.dataset.key;
                const id = Date.now();
                let html = `
            <div id='updateFrameOptions-${key}-${id}' class='updateFrameDetails-${key}' data-key=${key} data-index=${id}>
                <a class="btn btn-danger" id='updateFrameValues-${key}-${id}' data-key=${key} data-index=${id}>Delete</a>
                <div class="col-md-12">
                    <label class="col-form-label fw-bold">Frame Type:</label>
                    <select class="form-select border border-2 bg-li" id="updateFrameType-${key}-${id}" required>
                        <option>-- Select Frame Type --</option>
                        <option value="rectangle">Rectangle</option>
                        <option value="oval">Oval</option>
                        <option value="round">Round</option>
                        <option value="quare">Quare</option>
                        <option value="large">Large</option>
                        <option value="horn">Horn</option>
                        <option value="browline">Browline</option>
                        <option value="aviator">Aviator</option>
                        <option value="cateye">Cateye</option>
                        <option value="oversized">Oversized</option>
                        <option value="geomateric">Geomateric</option>
                    </select>
                </div>
               <div class="col-md-12">
                    <label class="form-label" for="updateColor-${key}-${id}">Color<span class="text-danger">*</span></label>
                    <input class="form-control" id="updateColor-${key}-${id}" type="text" placeholder="Color" required="" />
                </div>
                <div class="col-md-12">
                    <label class="col-form-label fw-bold">Available Size:</label>
                    <select class="form-select border border-2 bg-li" id="updateSize-${key}-${id}" required>
                        <option>-- Select Frame Type -- </option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </div>
                <div class="col-md-12">
                    <label class="form-label" for="updatePrice-${key}-${id}">Optical Price<span class="text-danger">*</span></label>
                    <input class="form-control" id="updatePrice-${key}-${id}" type="text" placeholder="Price" required="" />
                </div>
                <div class="col-md-12">
                    <label class="form-label" for="updateDiscountPrice-${key}-${id}">Optical Discount Price<span class="text-danger">*</span></label>
                    <input class="form-control" id="updateDiscountPrice-${key}-${id}" type="text" placeholder="Discount Price" required="" />
                </div>
                <div class="col-md-12">
                    <label class="form-label" for="updateFrameImage-${key}-${id}">Frame Image<span class="text-danger">*</span></label>
                    <input class="form-control" id="updateFrameImage-${key}-${id}" type="file"  required="" accept="image/*" required />
                </div>
                <div class="col-md-12">
                    <label class="form-label" for="updateFrameImageGallery-${key}-${id}">Frame Image Gallery<span class="text-danger">*</span></label>
                    <input class="form-control" id="updateFrameImageGallery-${key}-${id}" type="file" multiple required="" required accept="image/*"  />
                </div>
            </div>
        `;
                addFrameDetails.insertAdjacentHTML('afterend', html);
                return create_event_For_close(
                    `updateFrameValues-${key}-${id}`,
                    `updateFrameOptions-${key}-${id}`
                );
            });
    });
}

// update optical product
if (update_optical_product) {
    update_optical_product.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (e.target.id === 'update_product') {
            const key = e.target.dataset.key;
            const name = document.getElementById('updateName-' + key).value;
            const glassType = document.getElementById(
                `updateGlassType-${key}`
            ).value;
            const glassGenderType = document.getElementById(
                `updateGenderType-${key}`
            ).value;
            const glassFrameType = document.getElementById(
                `updateFrameType-${key}`
            ).value;
            const materiralType = document.getElementById(
                `updateMaterialType-${key}`
            ).value;
            const description = document.getElementById(
                `updateDescription-${key}`
            ).value;

            const frames = document.querySelectorAll(
                `.updateFrameDetails-${key}`
            );
            const frameDetails = [];

            await Promise.all(
                [...frames].map(async (el) => {
                    const obj = {};
                    const [key, index] = [el.dataset.key, el.dataset.index];
                    obj.frameType = document.getElementById(
                        `updateFrameType-${key}-${index}`
                    ).value;
                    obj.id = el.dataset.id;
                    obj.color = document.getElementById(
                        `updateColor-${key}-${index}`
                    ).value;

                    obj.availableSize = document.getElementById(
                        `updateSize-${key}-${index}`
                    ).value;

                    obj.opticalPrice = document.getElementById(
                        `updatePrice-${key}-${index}`
                    ).value;

                    obj.opticalDiscountPrice = document.getElementById(
                        `updateDiscountPrice-${key}-${index}`
                    ).value;

                    const imageForm = new FormData();
                    imageForm.append(
                        'image',
                        document.getElementById(
                            `updateFrameImage-${key}-${index}`
                        ).files[0]
                    );
                    await Promise.all(
                        Object.entries(
                            document.getElementById(
                                `updateFrameImageGallery-${key}-${index}`
                            ).files
                        ).map(([key, value]) => {
                            return imageForm.append('imageGallery', value);
                        })
                    );
                    imageForm.append('imageStatus', 'update');
                    let res = await axios({
                        method: 'POST',
                        url: '/api/v1/opticals/get-images',
                        data: imageForm
                    });
                    if (res.data.status !== 'Success') {
                        return swal(
                            'Warning',
                            'Something went wrong while processing your reques1t.',
                            'error'
                        );
                    }

                    obj.frameImage = res.data.image;
                    obj.frameImageGallery = res.data.imageGallery;
                    frameDetails.push(obj);
                })
            );

            return updateOpticalProduct(
                {
                    name,
                    glassType,
                    glassGenderType,
                    glassFrameType,
                    materiralType,
                    frameDetails,
                    statusType: 'update',
                    description
                },
                e.target.dataset.optical,
                e.target.dataset.id
            );
        }
    });
}

// update optical products status
if (update_vendor_optical_product_status) {
    update_vendor_optical_product_status.addEventListener('change', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('update_status')) {
            const status = document.getElementById(
                `update_optical_status-${e.target.dataset.index}`
            ).value;
            return updateOpticalProductOrderStatus(
                status,
                e.target.dataset.id,
                e.target.dataset.pid
            );
        }
    });
}
// update optical products status
if (update_user_optical_product_status) {
    update_user_optical_product_status.addEventListener('change', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('update_status')) {
            const status = document.getElementById(
                `update_optical_status-${e.target.dataset.index}`
            ).value;
            const id = update_user_optical_product_status.dataset.id;
            return updateOpticalProductOrderStatusUser(
                status,
                e.target.dataset.id,
                id
            );
        }
    });
}
// update optical products status
if (update_optical_showroom_booking) {
    update_optical_showroom_booking.addEventListener('change', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('update_status')) {
            const status = document.getElementById(
                `update_optical_status-${e.target.dataset.index}`
            ).value;
            const id = update_optical_showroom_booking.dataset.id;
            return updateOpticalShowRoomStatus(status, e.target.dataset.id, id);
        }
    });
}

// update optical booking status
if (update_user_optical_showroom_booking) {
    update_user_optical_showroom_booking.addEventListener('change', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('update_status')) {
            const status = document.getElementById(
                `update_optical_status-${e.target.dataset.index}`
            ).value;
            const id = update_user_optical_showroom_booking.dataset.id;
            return updateOpticalShowRoomStatus(status, e.target.dataset.id, id);
        }
    });
}

// add hospital services
if (add_hospital_service) {
    add_hospital_service.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', document.getElementById('serviceName').value);
        form.append('priceFrom', document.getElementById('priceFrom').value);
        form.append('priceTo', document.getElementById('priceTo').value);
        form.append(
            'description',
            document.getElementById('description').value
        );
        form.append('statusType', 'create');
        return hospitalServiceManagement(form, 'create', e.target.dataset.id);
    });
}

// update hospital services
if (update_hospital_details_service) {
    update_hospital_details_service.addEventListener('submit', (e) => {
        e.preventDefault();
        if (e.target.id === 'update_service') {
            const form = new FormData();
            form.append(
                'name',
                document.getElementById(`serviceName${e.target.dataset.index}`)
                    .value
            );
            form.append(
                'priceFrom',
                document.getElementById(`priceFrom${e.target.dataset.index}`)
                    .value
            );
            form.append(
                'priceTo',
                document.getElementById(`priceTo${e.target.dataset.index}`)
                    .value
            );
            form.append(
                'description',
                document.getElementById(`description${e.target.dataset.index}`)
                    .value
            );
            form.append('statusType', 'update');
            return hospitalServiceManagement(
                form,
                'manage',
                update_hospital_details_service.dataset.id,
                e.target.dataset.id
            );
        }
    });
}

// add hospital services
if (add_hospital_facility) {
    add_hospital_facility.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', document.getElementById('facilityName').value);
        form.append(
            'description',
            document.getElementById('description').value
        );
        form.append('image', document.getElementById('banner').files[0]);
        form.append('statusType', 'create');
        return hospitalFacilityManagement(form, 'create', e.target.dataset.id);
    });
}

// update hospital services
if (update_hospital_facilities) {
    update_hospital_facilities.addEventListener('submit', (e) => {
        e.preventDefault();
        if (e.target.id === 'update_service') {
            const form = new FormData();
            form.append(
                'name',
                document.getElementById(`facilityName${e.target.dataset.index}`)
                    .value
            );
            console.log(
                document.getElementById(`description${e.target.dataset.index}`)
                    .value
            );
            form.append(
                'description',
                document.getElementById(`description${e.target.dataset.index}`)
                    .value
            );
            if (
                document.getElementById(`banner${e.target.dataset.index}`)
                    .files[0]
            )
                form.append(
                    'image',
                    document.getElementById(`banner${e.target.dataset.index}`)
                        .files[0]
                );
            form.append('statusType', 'update');
            return hospitalFacilityManagement(
                form,
                'manage',
                update_hospital_facilities.dataset.id,
                e.target.dataset.id
            );
        }
    });
}

// add doctor details
if (add_doctor_details) {
    add_doctor_details.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', document.getElementById('doctorName').value);
        form.append(
            'successRate',
            document.getElementById('successPercentage').value
        );
        form.append('posistion', document.getElementById('specialist').value);
        form.append('image', document.getElementById('banner').files[0]);
        form.append('statusType', 'create');
        return hospitalDoctorManagement(form, 'create', e.target.dataset.id);
    });
}

// update hospital services
if (update_doctor_details) {
    update_doctor_details.addEventListener('submit', (e) => {
        e.preventDefault();
        if (e.target.id === 'update_service') {
            const form = new FormData();
            form.append(
                'name',
                document.getElementById(`doctorName${e.target.dataset.index}`)
                    .value
            );

            form.append(
                'successRate',
                document.getElementById(
                    `successPercentage${e.target.dataset.index}`
                ).value
            );
            form.append(
                'posistion',
                document.getElementById(`specialist${e.target.dataset.index}`)
                    .value
            );
            if (
                document.getElementById(`banner${e.target.dataset.index}`)
                    .files[0]
            )
                form.append(
                    'image',
                    document.getElementById(`banner${e.target.dataset.index}`)
                        .files[0]
                );
            form.append('statusType', 'update');
            return hospitalDoctorManagement(
                form,
                'manage',
                update_doctor_details.dataset.id,
                e.target.dataset.id
            );
        }
    });
}

// add hospital room facilite
if (add_hospital_room_facility) {
    add_hospital_room_facility.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', document.getElementById('facilityName').value);
        form.append(
            'description',
            document.getElementById('description').value
        );
        form.append('image', document.getElementById('banner').files[0]);
        form.append('statusType', 'create');
        return hospitalRoomFacilityManagement(
            form,
            'create',
            e.target.dataset.id
        );
    });
}

// update hospital services
if (update_hospital_room_facilities) {
    update_hospital_room_facilities.addEventListener('submit', (e) => {
        e.preventDefault();
        if (e.target.id === 'update_service') {
            const form = new FormData();
            form.append(
                'name',
                document.getElementById(`facilityName${e.target.dataset.index}`)
                    .value
            );

            form.append(
                'description',
                document.getElementById(`description${e.target.dataset.index}`)
                    .value
            );
            if (
                document.getElementById(`banner${e.target.dataset.index}`)
                    .files[0]
            )
                form.append(
                    'image',
                    document.getElementById(`banner${e.target.dataset.index}`)
                        .files[0]
                );
            form.append('statusType', 'update');
            return hospitalRoomFacilityManagement(
                form,
                'manage',
                update_hospital_room_facilities.dataset.id,
                e.target.dataset.id
            );
        }
    });
}
// add hospital images
if (add_hospital_images.length) {
    [...add_hospital_images].map((el) => {
        el.addEventListener('submit', async (e) => {
            e.preventDefault();
            const form = new FormData();
            let images = document.getElementById(
                `${e.target.dataset.for}_images`
            ).files;

            await Promise.all(
                Object.entries(
                    document.getElementById(`${e.target.dataset.for}_images`)
                        .files
                ).map(([key, value]) => {
                    return form.append('images', value);
                })
            );
            return hospitalRoomImages(
                form,
                el.dataset.for,
                e.target.dataset.id
            );
        });
    });
}
// delte hospital room images
if (remove_hospital_images.length) {
    [...remove_hospital_images].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.id === 'deleteImages') {
                const img = document
                    .getElementById(
                        `image${e.target.dataset.for}Data${e.target.dataset.index}`
                    )
                    .getAttribute('src');
                return removeHospitalRoomImage(
                    img,
                    e.target.dataset.for,
                    e.target.dataset.id
                );
            }
        });
    });
}
// manage hospital facilites
if (manage_hospital_available_facilities) {
    manage_hospital_available_facilities.addEventListener('submit', (e) => {
        e.preventDefault();

        const numberOfBeds = document.getElementById('totalBeds').value;
        const numberOfOperationTheater = document.getElementById(
            'totalOperationTheater'
        ).value;
        const personalNursingCare = document.querySelector(
            'input[name=personalNursingCare]:checked'
        ).value;
        const numberOfVendilators =
            document.getElementById('totalVentilators').value;
        const numberOfAmbulance =
            document.getElementById('totalAmbulance').value;
        return manageAvailableHospitalFacilities(
            {
                numberOfBeds,
                numberOfOperationTheater,
                personalNursingCare,
                numberOfVendilators,
                numberOfAmbulance
            },
            e.target.dataset.id
        );
    });
}

// update hospital specicalite
if (manage_hospital_available_specialities) {
    manage_hospital_available_specialities.addEventListener('submit', (e) => {
        e.preventDefault();
        const currencyExcanage = document.querySelector(
            'input[name=currencyExcanage]:checked'
        ).value;
        const threadlessPlayingArea = document.querySelector(
            'input[name=threadlessPlayingArea]:checked'
        ).value;
        const hospitalPackages = document.querySelector(
            'input[name=hospitalPackages]:checked'
        ).value;
        const testingLabAvailablit = document.querySelector(
            'input[name=testingLabAvailablit]:checked'
        ).value;
        const secondOption = document.querySelector(
            'input[name=secondOption]:checked'
        ).value;
        const diagnosticMachines =
            document.getElementById('diagnosticMachines').value;
        return manageHospitalSpecialities(
            {
                currencyExcanage,
                threadlessPlayingArea,
                hospitalPackages,
                testingLabAvailablit,
                secondOption,
                diagnosticMachines
            },
            e.target.dataset.id
        );
    });
}

// update newar by faciliteis
if (update_nearby_facilities) {
    update_nearby_facilities.addEventListener('submit', (e) => {
        e.preventDefault();

        const transportationService = document.querySelector(
            'input[name=transportationService]:checked'
        ).value;
        const visaArrangements = document.querySelector(
            'input[name=visaArrangements]:checked'
        ).value;
        const flightArrangeMents = document.querySelector(
            'input[name=flightArrangeMents]:checked'
        ).value;
        const travelDesk = document.querySelector(
            'input[name=travelDesk]:checked'
        ).value;
        const multilingualStaff = document.querySelector(
            'input[name=multilingualStaff]:checked'
        ).value;
        const interpreterService = document.querySelector(
            'input[name=interpreterService]:checked'
        ).value;
        const airportPickupAndDropFacility = document.querySelector(
            'input[name=airportPickupAndDropFacility]:checked'
        ).value;
        const currencyExcanage = document.querySelector(
            'input[name=currencyExcanage]:checked'
        ).value;
        const rentalCarService = document.querySelector(
            'input[name=rentalCarService]:checked'
        ).value;
        const insuranceContidion = document.querySelector(
            'input[name=insuranceContidion]:checked'
        ).value;
        const foodAndDietaryService = document.querySelector(
            'input[name=foodAndDietaryService]:checked'
        ).value;
        const suiteRooms = document.querySelector(
            'input[name=suiteRooms]:checked'
        ).value;
        const laundryAndHouseKeepingService = document.querySelector(
            'input[name=laundryAndHouseKeepingService]:checked'
        ).value;
        const hotelAndGuestHouseAccommodation = document.querySelector(
            'input[name=hotelAndGuestHouseAccommodation]:checked'
        ).value;
        const internationalCuisine = document.querySelector(
            'input[name=internationalCuisine]:checked'
        ).value;
        const specialIndianFoodOrChoiceOfMeals = document.querySelector(
            'input[name=specialIndianFoodOrChoiceOfMeals]:checked'
        ).value;
        const dayCareService = document.querySelector(
            'input[name=dayCareService]:checked'
        ).value;
        const nearByHotels = document.querySelector(
            'input[name=nearByHotels]:checked'
        ).value;
        const parkingFacility = document.querySelector(
            'input[name=parkingFacility]:checked'
        ).value;
        const securityService = document.querySelector(
            'input[name=securityService]:checked'
        ).value;
        const postTravelMedicalCare = document.querySelector(
            'input[name=postTravelMedicalCare]:checked'
        ).value;
        return updateHospitalNearbyFacililities(
            {
                transportationService,
                visaArrangements,
                flightArrangeMents,
                travelDesk,
                multilingualStaff,
                interpreterService,
                airportPickupAndDropFacility,
                currencyExcanage,
                rentalCarService,
                insuranceContidion,
                foodAndDietaryService,
                suiteRooms,
                laundryAndHouseKeepingService,
                hotelAndGuestHouseAccommodation,
                internationalCuisine,
                specialIndianFoodOrChoiceOfMeals,
                dayCareService,
                nearByHotels,
                parkingFacility,
                securityService,
                postTravelMedicalCare
            },
            e.target.dataset.id
        );
    });
}

// add new hospital hotels
if (add_nearby_hospital_hotels_service) {
    add_nearby_hospital_hotels_service.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', document.getElementById('hotelName').value);
        form.append(
            'foodFacility',
            document.querySelector('input[name=foodFacility]:checked').value
        );
        form.append('AC', document.getElementById('acType').value);
        form.append('distance', document.getElementById('distance').value);
        form.append('image', document.getElementById('banner').files[0]);
        form.append('latitude', document.getElementById('latitude').value);
        form.append('longitude', document.getElementById('longitude').value);
        form.append('statusType', 'create');
        return manageNearByHotelsinHospitals(
            form,
            'create',
            e.target.dataset.id
        );
    });
}

// update nearyby hospital
if (update_nearby_hotels_service) {
    update_nearby_hotels_service.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append(
            'name',
            document.getElementById('hotelName' + e.target.dataset.index).value
        );
        form.append(
            'foodFacility',
            document.querySelector(
                `input[name=foodFacility${e.target.dataset.index}]:checked`
            ).value
        );
        form.append(
            'AC',
            document.getElementById('acType' + e.target.dataset.index).value
        );
        form.append(
            'distance',
            document.getElementById('distance' + e.target.dataset.index).value
        );
        form.append(
            'image',
            document.getElementById('banner' + e.target.dataset.index).files[0]
        );
        form.append(
            'latitude',
            document.getElementById('latitude' + e.target.dataset.index).value
        );
        form.append(
            'longitude',
            document.getElementById('longitude' + e.target.dataset.index).value
        );
        form.append('statusType', 'update');
        console.log(
            update_nearby_hotels_service.dataset.id,
            e.target.dataset.id
        );
        return manageNearByHotelsinHospitals(
            form,
            'manage',
            update_nearby_hotels_service.dataset.id,
            e.target.dataset.id
        );
    });
}

// add new hospital hotels
if (add_nearby_hospital_restaurents) {
    add_nearby_hospital_restaurents.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', document.getElementById('resName').value);
        form.append('foodType', document.getElementById('foodType').value);
        form.append('VEG', document.getElementById('vegType').value);
        form.append('distance', document.getElementById('distance').value);
        form.append('image', document.getElementById('banner').files[0]);
        form.append('latitude', document.getElementById('latitude').value);
        form.append('longitude', document.getElementById('longitude').value);
        form.append('statusType', 'create');
        return manageNearByRestaurentsinHospitals(
            form,
            'create',
            e.target.dataset.id
        );
    });
}

// update nearyby hospital restauresnts
if (update_nearby_restaurents_service) {
    update_nearby_restaurents_service.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append(
            'name',
            document.getElementById(`resName${e.target.dataset.index}`).value
        );
        form.append(
            'foodFacility',
            document.getElementById('foodType' + e.target.dataset.index).value
        );
        form.append(
            'VEG',
            document.getElementById('vegType' + e.target.dataset.index).value
        );
        form.append(
            'distance',
            document.getElementById(`distance${e.target.dataset.index}`).value
        );
        form.append(
            'image',
            document.getElementById('banner' + e.target.dataset.index).files[0]
        );
        form.append(
            'latitude',
            document.getElementById('latitude' + e.target.dataset.index).value
        );
        form.append(
            'longitude',
            document.getElementById('longitude' + e.target.dataset.index).value
        );
        form.append('statusType', 'update');
        return manageNearByRestaurentsinHospitals(
            form,
            'manage',
            update_nearby_restaurents_service.dataset.id,
            e.target.dataset.id
        );
    });
}

// add new airports
if (add_nearby_hospital_airport_service) {
    add_nearby_hospital_airport_service.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', document.getElementById('airportName').value);
        form.append('city', document.getElementById('city').value);
        form.append('distance', document.getElementById('distance').value);
        form.append('image', document.getElementById('banner').files[0]);
        form.append('latitude', document.getElementById('latitude').value);
        form.append('longitude', document.getElementById('longitude').value);
        form.append('statusType', 'create');
        return manageNearByAirportsinHospitals(
            form,
            'create',
            e.target.dataset.id
        );
    });
}

// update nearyby hospital restauresnts
if (update_nearby_airport_service) {
    update_nearby_airport_service.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append(
            'name',
            document.getElementById(`airportName${e.target.dataset.index}`)
                .value
        );
        form.append(
            'city',
            document.getElementById('city' + e.target.dataset.index).value
        );
        form.append(
            'distance',
            document.getElementById(`distance${e.target.dataset.index}`).value
        );
        form.append(
            'image',
            document.getElementById('banner' + e.target.dataset.index).files[0]
        );
        form.append(
            'latitude',
            document.getElementById('latitude' + e.target.dataset.index).value
        );
        form.append(
            'longitude',
            document.getElementById('longitude' + e.target.dataset.index).value
        );
        form.append('statusType', 'update');
        return manageNearByAirportsinHospitals(
            form,
            'manage',
            update_nearby_airport_service.dataset.id,
            e.target.dataset.id
        );
    });
}

// add new train
if (add_nearby_hospital_train_service) {
    add_nearby_hospital_train_service.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', document.getElementById('traintName').value);
        form.append('city', document.getElementById('city').value);
        form.append('distance', document.getElementById('distance').value);
        form.append('image', document.getElementById('banner').files[0]);
        form.append('latitude', document.getElementById('latitude').value);
        form.append('longitude', document.getElementById('longitude').value);
        form.append('statusType', 'create');
        return manageNearByTrainInHospitals(
            form,
            'create',
            e.target.dataset.id
        );
    });
}

// update nearyby hospital restauresnts
if (update_nearby_train_service) {
    update_nearby_train_service.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append(
            'name',
            document.getElementById(`traintName${e.target.dataset.index}`).value
        );
        form.append(
            'city',
            document.getElementById('city' + e.target.dataset.index).value
        );
        form.append(
            'distance',
            document.getElementById(`distance${e.target.dataset.index}`).value
        );
        form.append(
            'image',
            document.getElementById('banner' + e.target.dataset.index).files[0]
        );
        form.append(
            'latitude',
            document.getElementById('latitude' + e.target.dataset.index).value
        );
        form.append(
            'longitude',
            document.getElementById('longitude' + e.target.dataset.index).value
        );
        form.append('statusType', 'update');
        return manageNearByTrainInHospitals(
            form,
            'manage',
            update_nearby_train_service.dataset.id,
            e.target.dataset.id
        );
    });
}

// add new bus stops
if (add_nearby_hospital_bus_service) {
    add_nearby_hospital_bus_service.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', document.getElementById('busStopName').value);
        form.append('city', document.getElementById('city').value);
        form.append('distance', document.getElementById('distance').value);
        form.append('image', document.getElementById('banner').files[0]);
        form.append('latitude', document.getElementById('latitude').value);
        form.append('longitude', document.getElementById('longitude').value);
        form.append('statusType', 'create');
        return manageNearByBusInHospitals(form, 'create', e.target.dataset.id);
    });
}

// update nearyby hospital restauresnts
if (update_nearby_bus_service) {
    update_nearby_bus_service.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append(
            'name',
            document.getElementById(`busStopName${e.target.dataset.index}`)
                .value
        );
        form.append(
            'city',
            document.getElementById('city' + e.target.dataset.index).value
        );
        form.append(
            'distance',
            document.getElementById(`distance${e.target.dataset.index}`).value
        );
        form.append(
            'image',
            document.getElementById('banner' + e.target.dataset.index).files[0]
        );
        form.append(
            'latitude',
            document.getElementById('latitude' + e.target.dataset.index).value
        );
        form.append(
            'longitude',
            document.getElementById('longitude' + e.target.dataset.index).value
        );
        form.append('statusType', 'update');
        return manageNearByBusInHospitals(
            form,
            'manage',
            update_nearby_bus_service.dataset.id,
            e.target.dataset.id
        );
    });
}

// create new organ availablity
if (add_organ_availablity) {
    add_organ_availablity.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', document.getElementById('name').value);
        form.append(
            'description',
            document.getElementById('description').value
        );
        form.append(
            'availablity',
            document.querySelector('input[name="availablity"]:checked').value
        );
        form.append('bloodGroup', document.getElementById('bloodGroup').value);
        form.append('statusType', 'create');
        return createNewOrganAvailablity(form, e.target.dataset.id);
    });
}

// create new organ availablity
if (update_organ_availablity) {
    update_organ_availablity.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append(
            'name',
            document.getElementById('name' + e.target.dataset.index).value
        );
        form.append(
            'description',
            document.getElementById('description' + e.target.dataset.index)
                .value
        );

        form.append(
            'availablity',
            document.querySelector(
                `input[name="availablity${e.target.dataset.index}"]:checked`
            ).value
        );
        form.append(
            'bloodGroup',
            document.getElementById('bloodGroup' + e.target.dataset.index).value
        );
        form.append('statusType', 'update');
        return updateOrganAvailablity(
            form,
            update_organ_availablity.dataset.id,
            e.target.dataset.id
        );
    });
}

// set color details
const add_color_details_hearingaid = (fors, to, id) => {
    document.getElementById(fors).addEventListener('click', (e) => {
        e.preventDefault();
        const ids = Date.now();
        const html = `
        <div id='newHearingAidSubProductDetails${id}${ids}' class='newHearingAidSubColorDetails${id} m-2 p-2' data-indexs=${ids}>
            <div class="d-flex justify-content-end">
             <a class="btn btn-danger" id='delelteNewSubProductDetails${id}${ids}' data-index=${id} data-indexs=${ids}>Delete</a>
            </div>
            
                <div class="col-md-12">
                    <label class="form-label" for="newSize${id}${ids}">Size<span class="text-danger">*</span></label>
                    <input class="form-control" id="newSize${id}${ids}" type="text" placeholder="Size" required="" />
                </div>
                <div class="col-md-12">
                    <label class="form-label" for="newPrice${id}${ids}">Price<span class="text-danger">*</span></label>
                    <input class="form-control" id="newPrice${id}${ids}" type="text" placeholder="Price" required="" />
                </div>
                <div class="col-md-12">
                    <label class="form-label" for="newDiscountPrice${id}${ids}">Discount Price<span class="text-danger">*</span></label>
                    <input class="form-control" id="newDiscountPrice${id}${ids}" type="text" placeholder="Discount Price" />
                </div>
     
                </div>
            </div>
        `;
        const elId = document.getElementById(to);
        elId.insertAdjacentHTML('beforeend', html);
        return create_event_For_close(
            `delelteNewSubProductDetails${id}${ids}`,
            `newHearingAidSubProductDetails${id}${ids}`
        );
    });
};

if (add_new_hearingaid_color_details) {
    add_new_hearingaid_color_details.addEventListener('click', (e) => {
        e.preventDefault();
        const addColor = document.getElementById('newProductDetails');
        const id = Date.now();
        const html = `
        <div id='newHearingAidProductDetails${id}' class='newHearingAidSubDetails border m-2 p-3' data-index=${id}>
            <div class='d-flex justify-content-end position-relative'>
                <a class="btn btn-danger" id='delelteNewProductDetails${id}' data-index=${id}>Delete</a>
            </div>
            <div class="col-md-12">
                    <label class="form-label" for="newColor${id}">Color<span class="text-danger">*</span></label>
                    <input class="form-control" id="newColor${id}" type="text" placeholder="Color" required="" />
            </div>
            <div class="col-md-12">
                    <label class="form-label" for="newProductImage${id}">Product Image<span class="text-danger">*</span></label>
                    <input class="form-control" id="newProductImage${id}" type="file"  required="" accept="image/*" required />
                </div>
                <div class="col-md-12">
                    <label class="form-label" for="newProductImageGallery${id}">Product Image Gallery<span class="text-danger">*</span></label>
                    <input class="form-control" id="newProductImageGallery${id}" type="file" multiple required="" required accept="image/*"  />
                </div>
            <div id="hearingaidSubDeatail${id}">
            </div>
            <div class='d-flex justify-content-center mt-2'>
                <button class="btn btn-success" type="button" id="addHearingaidSubDeatail${id}"  >Add Details</button>
            </div>
        </div>
        `;
        addColor.insertAdjacentHTML('beforeend', html);
        create_event_For_close(
            `delelteNewProductDetails${id}`,
            `newHearingAidProductDetails${id}`
        );
        return add_color_details_hearingaid(
            `addHearingaidSubDeatail${id}`,
            `hearingaidSubDeatail${id}`,
            id
        );
    });
}

// chage medical record datas
if (medical_record_change_member) {
    medical_record_change_member.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('slick-arrow')) {
            let active = document.querySelector(
                '.slick-current, .slick-active'
            );
            return getRecordsForMembers(
                medical_record_change_member.dataset.id,
                active.dataset.id
            );
        }
    });
}
// create eequipments
if (create_equipment_details) {
    create_equipment_details.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', document.getElementById('equipName').value);
        form.append(
            'description',
            document.getElementById('description').value
        );
        form.append(
            'bannerImage',
            document.getElementById('equipImg').files[0]
        );
        form.append('statusType', 'create');
        return manageEquipmentImages(
            form,
            'create',
            'equipments',
            e.target.dataset.id
        );
    });
}

// update eqippmenst
if (manage_gym_equipments) {
    manage_gym_equipments.addEventListener('submit', (e) => {
        e.preventDefault();
        if (e.target.id === 'update_service') {
            e.preventDefault();
            const form = new FormData();
            form.append(
                'name',
                document.getElementById(`equipName${e.target.dataset.index}`)
                    .value
            );
            alert(
                document.getElementById(`equipName${e.target.dataset.index}`)
                    .value
            );
            form.append(
                'description',
                document.getElementById(`description${e.target.dataset.index}`)
                    .value
            );
            if (
                document.getElementById(`equipImg${e.target.dataset.index}`)
                    .files[0]
            )
                form.append(
                    'bannerImage',
                    document.getElementById(`equipImg${e.target.dataset.index}`)
                        .files[0]
                );
            form.append('statusType', 'update');
            return manageEquipmentImages(
                form,
                'manage',
                'equipments',
                manage_gym_equipments.dataset.id,
                e.target.dataset.id
            );
        }
    });
}

// create new fitness faciliteis
if (create_fitness_facilities_details) {
    create_fitness_facilities_details.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;

        return manageFacilitiesManagement(
            { title, statusType: 'create', description },
            'create',
            'facilities',
            e.target.dataset.id
        );
    });
}

// create new fitness faciliteis
if (manage_fitness_facilities) {
    manage_fitness_facilities.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById(
            'title' + e.target.dataset.index
        ).value;
        const description = document.getElementById(
            'description' + e.target.dataset.index
        ).value;

        return manageFacilitiesManagement(
            { title, statusType: 'update', description },
            'manage',
            'facilities',
            manage_fitness_facilities.dataset.id,
            e.target.dataset.id
        );
    });
}

// add fitness instruction
if (new_fitnes_video_instructions) {
    new_fitnes_video_instructions.addEventListener('click', (e) => {
        e.preventDefault();
        const elId = document.getElementById('fitnes_video_instructions');
        const html =
            '<input class="form-control fitnessInstruction mt-2" id="description" type="text" placeholder="Instructios" required="">';
        return elId.insertAdjacentHTML('beforeend', html);
    });
}

// add nutritions uses
if (new_food_nutritions_uses) {
    new_food_nutritions_uses.addEventListener('click', (e) => {
        e.preventDefault();
        const elId = document.getElementById('food_nutritions_uses');
        const html =
            '<input class="form-control foodUses mt-2" id="description" type="text" placeholder="uses" required="">';
        return elId.insertAdjacentHTML('beforeend', html);
    });
}

// create fitness video
if (create_fitness_workout_videos) {
    create_fitness_workout_videos.addEventListener('submit', async (e) => {
        e.preventDefault();
        const form = new FormData();

        form.append('name', document.getElementById('name').value);
        form.append(
            'description',
            document.getElementById('description').value
        );
        const inst = await Promise.all(
            [...document.querySelectorAll('.fitnessInstruction')].map(
                (el) => el.value
            )
        );
        form.append('instruction', inst);
        form.append('uses', document.getElementById('uses').value);
        form.append('video', document.getElementById('video').files[0]);
        form.append('statusType', 'create');
        return createNewFitnessVideoFromVendor(form, e.target.dataset.id);
    });
}

// add instructions on update
if (add_update_instruction.length) {
    [...add_update_instruction].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const elId = document.getElementById(
                `fitnes_video_update_instructions${e.target.dataset.index}`
            );
            const html = `<input class="form-control fitnessUpdateInstruction${e.target.dataset.index} mt-2" id="description" type="text" placeholder="Instructios" required="">`;
            return elId.insertAdjacentHTML('beforeend', html);
        });
    });
}
// add instructions on update
if (update_nutrition_uses.length) {
    [...update_nutrition_uses].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const elId = document.getElementById(
                `food_nutritions_uses${e.target.dataset.index}`
            );
            const html = `<input class="form-control foodUses${e.target.dataset.index} mt-2" type="text" placeholder="Instructios" required="">`;
            return elId.insertAdjacentHTML('beforeend', html);
        });
    });
}

// update fitness video
if (manage_fitness_video_upload) {
    manage_fitness_video_upload.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (e.target.id === 'update_service') {
            const form = new FormData();
            const id = e.target.dataset.index;
            form.append('name', document.getElementById(`name${id}`).value);
            form.append(
                'description',
                document.getElementById(`description${id}`).value
            );
            const inst = await Promise.all(
                [
                    ...document.querySelectorAll(
                        `.fitnessUpdateInstruction${id}`
                    )
                ].map((el) => el.value)
            );
            form.append('instruction', inst);
            form.append('uses', document.getElementById(`uses${id}`).value);
            if (document.getElementById(`video${id}`).files[0])
                form.append(
                    'video',
                    document.getElementById(`video${id}`).files[0]
                );
            form.append('statusType', 'update');
            return updatFitnessVideoFromVendor(
                form,
                manage_fitness_video_upload.dataset.id,
                e.target.dataset.id
            );
        }
    });
}

// crate new food nutritions
if (create_new_food_nutritions) {
    create_new_food_nutritions.addEventListener('submit', async (e) => {
        alert('hi');
        e.preventDefault();
        const form = new FormData();
        form.append('name', document.getElementById('name').value);
        form.append('calories', document.getElementById('calories').value);
        const use = await Promise.all(
            [...document.querySelectorAll(`.foodUses`)].map((el) => el.value)
        );
        form.append('uses', use);
        form.append('bannerImage', document.getElementById('image').files[0]);
        form.append('statusType', 'create');
        return createNewNutritions(form);
    });
}

// update food nutrtion details
if (update_Nutrition_food_details) {
    update_Nutrition_food_details.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (e.target.id === 'update_service') {
            const form = new FormData();
            const index = e.target.dataset.index;
            form.append('name', document.getElementById('name' + index).value);
            form.append(
                'calories',
                document.getElementById('calories' + index).value
            );
            const use = await Promise.all(
                [...document.querySelectorAll(`.foodUses${index}`)].map(
                    (el) => el.value
                )
            );
            form.append('uses', use);
            if (document.getElementById('image' + index).files[0])
                form.append(
                    'bannerImage',
                    document.getElementById('image' + index).files[0]
                );
            form.append('statusType', 'update');
            return updateNutritionsFoodDetails(form, e.target.dataset.id);
        }
    });
}

// create new homecare root service
if (create_new_pharmacy_service) {
    create_new_pharmacy_service.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', document.getElementById('name').value);
        form.append(
            'description',
            document.getElementById('description').value
        );
        form.append(
            'bannerImage',
            document.getElementById('serviceImage').files[0]
        );
        form.append('statusType', 'create');
        return createPharmacyService(form);
    });
}

// update deaddiction root service
if (update_pharmacy_service) {
    update_pharmacy_service.addEventListener('submit', (e) => {
        e.preventDefault();
        if (e.target.id === 'update_service') {
            const form = new FormData();
            form.append(
                'name',
                document.getElementById(`name-${e.target.dataset.index}`).value
            );
            form.append(
                'description',
                document.getElementById(`description-${e.target.dataset.index}`)
                    .value
            );

            if (
                !!document.getElementById(
                    `serviceImage-${e.target.dataset.index}`
                ).files[0]
            ) {
                form.append(
                    'bannerImage',
                    document.getElementById(
                        `serviceImage-${e.target.dataset.index}`
                    ).files[0]
                );
            }
            form.append('statusType', 'update');
            return updatePharmacyService(form, e.target.dataset.service);
        }
    });
}

// / create new medince
if (create_new_medicine_service) {
    create_new_medicine_service.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', document.getElementById('name').value);
        form.append('categorie', document.getElementById('categories').value);
        form.append(
            'description',
            document.getElementById('description').value
        );
        form.append('price', document.getElementById('price').value);
        form.append(
            'bannerImage',
            document.getElementById('serviceImage').files[0]
        );
        form.append('statusType', 'create');
        return createPharmacyMedicineService(form);
    });
}

// update deaddiction root service
if (update_pharmacy_medicines) {
    update_pharmacy_medicines.addEventListener('submit', (e) => {
        e.preventDefault();
        if (e.target.id === 'update_service') {
            const form = new FormData();
            form.append(
                'name',
                document.getElementById(`name-${e.target.dataset.index}`).value
            );
            form.append(
                'categorie',
                document.getElementById(`catgories-${e.target.dataset.index}`)
                    .value
            );
            form.append(
                'description',
                document.getElementById(`description-${e.target.dataset.index}`)
                    .value
            );

            if (
                !!document.getElementById(
                    `serviceImage-${e.target.dataset.index}`
                ).files[0]
            ) {
                form.append(
                    'bannerImage',
                    document.getElementById(
                        `serviceImage-${e.target.dataset.index}`
                    ).files[0]
                );
            }
            form.append('statusType', 'update');
            return updatePharmacyMedicines(form, e.target.dataset.service);
        }
    });
}

// create new laboratory categories
if (create_new_laboratory_service) {
    create_new_laboratory_service.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', document.getElementById('name').value);
        form.append(
            'description',
            document.getElementById('description').value
        );
        form.append(
            'bannerImage',
            document.getElementById('serviceImage').files[0]
        );
        form.append('statusType', 'create');
        return createLaboratoryService(form);
    });
}

// update deaddiction root service
if (update_laboratory_service) {
    update_laboratory_service.addEventListener('submit', (e) => {
        e.preventDefault();
        if (e.target.id === 'update_service') {
            const form = new FormData();
            form.append(
                'name',
                document.getElementById(`name-${e.target.dataset.index}`).value
            );
            form.append(
                'description',
                document.getElementById(`description-${e.target.dataset.index}`)
                    .value
            );

            if (
                !!document.getElementById(
                    `serviceImage-${e.target.dataset.index}`
                ).files[0]
            ) {
                form.append(
                    'bannerImage',
                    document.getElementById(
                        `serviceImage-${e.target.dataset.index}`
                    ).files[0]
                );
            }
            form.append('statusType', 'update');
            return updateLaboratoryService(form, e.target.dataset.service);
        }
    });
}

// update opticals
if (update_laboratory) {
    update_laboratory.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('contactPerson').value;
        const phone = document.getElementById('contactpersonPhone').value;
        const centerPhone = document.getElementById('Phone').value;
        const centerLandLine = document.getElementById('landline').value;
        const latitude = document.getElementById('latitude').value;
        const longtitude = document.getElementById('longtitude').value;
        const openTime = document.getElementById('openTime').value;
        const closeTime = document.getElementById('closeTime').value;
        const address = document.getElementById('Address').value;

        const city = document.getElementById('city').value;

        return updateLaboratory({
            name,
            phone,
            centerPhone,
            centerLandLine,
            location: [latitude, longtitude],
            openTime,
            closeTime,
            address,
            city
        });
    });
}

// create laboratory tests
if (create_laboratory_tests) {
    create_laboratory_tests.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const description = document.getElementById('description').value;
        const homeBased = document.getElementById('homeBased').checked;
        return manageLaboratoryTest(
            { name, price, description, homeBased },
            'create',
            create_laboratory_tests.dataset.id
        );
    });
}

// manage laboratory tests
if (manage_laboratory_tests) {
    manage_laboratory_tests.addEventListener('submit', (e) => {
        e.preventDefault();
        if (e.target.id === 'update_service') {
            const name = document.getElementById(
                'name' + e.target.dataset.index
            ).value;
            const price = document.getElementById(
                'price' + +e.target.dataset.index
            ).value;
            const description = document.getElementById(
                'description' + e.target.dataset.index
            ).value;
            const homeBased = document.getElementById(
                'homeBased' + e.target.dataset.index
            ).checked;
            return manageLaboratoryTest(
                { name, price, description, homeBased },
                'manage',
                manage_laboratory_tests.dataset.id,
                e.target.dataset.id
            );
        }
    });
}

// create new pharmacy
if (create_laboratory_facilities) {
    create_laboratory_facilities.addEventListener('submit', (e) => {
        e.preventDefault();

        let form = new FormData();
        form.append('title', document.getElementById('title').value);
        form.append(
            'description',
            document.getElementById('description').value
        );
        form.append('bannerImage', document.getElementById('image').files[0]);
        form.append('statusType', 'create');

        return createNewLaboratoryFacilities(
            form,
            'create',
            e.target.dataset.id
        );
    });
}
// create new pharmacy
// manage pharmacy
if (manage_laboratory_facilities) {
    manage_laboratory_facilities.addEventListener('submit', (e) => {
        e.preventDefault();

        let form = new FormData();
        form.append(
            'title',
            document.getElementById('title' + e.target.dataset.index).value
        );
        form.append(
            'description',
            document.getElementById('description' + e.target.dataset.index)
                .value
        );
        if (document.getElementById('image' + e.target.dataset.index).files[0])
            form.append(
                'bannerImage',
                document.getElementById('image' + e.target.dataset.index)
                    .files[0]
            );
        form.append('statusType', 'update');

        return createNewLaboratoryFacilities(
            form,
            'manage',
            manage_laboratory_facilities.dataset.id,
            e.target.dataset.id
        );
    });
}

// create new marke categories
if (create_new_market_categories) {
    create_new_market_categories.addEventListener('submit', (e) => {
        e.preventDefault();

        let form = new FormData();
        form.append('name', document.getElementById('name').value);
        form.append(
            'description',
            document.getElementById('description').value
        );
        form.append('bannerImage', document.getElementById('image').files[0]);
        form.append('statusType', 'create');

        return createNewLMarketCategorie(form, 'create');
    });
}
// create new pharmacy
// manage pharmacy
if (update_new_market_categories) {
    update_new_market_categories.addEventListener('submit', (e) => {
        e.preventDefault();

        let form = new FormData();
        form.append(
            'name',
            document.getElementById('name' + e.target.dataset.index).value
        );
        form.append(
            'description',
            document.getElementById('description' + e.target.dataset.index)
                .value
        );
        if (
            document.getElementById('serviceImage' + e.target.dataset.index)
                .files[0]
        )
            form.append(
                'bannerImage',
                document.getElementById('serviceImage' + e.target.dataset.index)
                    .files[0]
            );
        form.append('statusType', 'update');

        return updateMarketCategorieList(form, e.target.dataset.id);
    });
}
// create new marke categories
if (create_new_meet_the_expert_categoreis) {
    create_new_meet_the_expert_categoreis.addEventListener('submit', (e) => {
        e.preventDefault();

        let form = new FormData();
        form.append('name', document.getElementById('name').value);
        form.append(
            'serviceType',
            document.getElementById('serviceType').value
        );
        form.append(
            'description',
            document.getElementById('description').value
        );
        form.append(
            'bannerImage',
            document.getElementById('serviceImage').files[0]
        );
        form.append('statusType', 'create');

        return createMeetTheExpertCategories(form, 'create');
    });
}
// create new pharmacy
// manage pharmacy
if (update_meet_the_expert_categoreis) {
    update_meet_the_expert_categoreis.addEventListener('submit', (e) => {
        e.preventDefault();

        let form = new FormData();
        form.append(
            'name',
            document.getElementById('name' + e.target.dataset.index).value
        );
        form.append(
            'serviceType',
            document.getElementById('serviceType' + e.target.dataset.index)
                .value
        );
        form.append(
            'description',
            document.getElementById('description' + e.target.dataset.index)
                .value
        );
        if (
            document.getElementById('serviceImage' + e.target.dataset.index)
                .files[0]
        )
            form.append(
                'bannerImage',
                document.getElementById('serviceImage' + e.target.dataset.index)
                    .files[0]
            );
        form.append('statusType', 'update');

        return updateMeetTheExpertCategories(form, e.target.dataset.id);
    });
}

// laboratory images
if (create_laboratory_images) {
    create_laboratory_images.addEventListener('submit', async (e) => {
        e.preventDefault();
        const form = new FormData();
        await Promise.all(
            Object.entries(
                document.getElementById('laboratoryImages').files
            ).map(([key, value]) => {
                return form.append('images', value);
            })
        );
        return addLaboratoryImages(form, e.target.dataset.id);
    });
}

// delte hospital room images
if (deletePharmacyimages.length) {
    [...deletePharmacyimages].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const img = document
                .getElementById(`imagepharmaceImages${e.target.dataset.index}`)
                .getAttribute('src');
            return removeLaboratoryImages(img, e.target.dataset.id);
        });
    });
}

// update hearinga hosptial booking status
if (update_laboratory_vendor_status) {
    update_laboratory_vendor_status.addEventListener('change', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('update_status')) {
            const status = document.getElementById(
                `laboratory_booking_status${e.target.dataset.index}`
            ).value;
            const form = new FormData();
            return updateLaboratoryBooking(
                status,
                form,
                update_laboratory_vendor_status.dataset.id,
                e.target.dataset.id
            );
        }
    });
}

// update hearinga hosptial booking status
if (update_pharmacy_vendor_status) {
    update_pharmacy_vendor_status.addEventListener('change', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('update_status')) {
            const status = document.getElementById(
                `pharmacy_booking_status${e.target.dataset.index}`
            ).value;
            return updatePharmacyBooking(
                status,
                update_pharmacy_vendor_status.dataset.id,
                e.target.dataset.id
            );
        }
    });
}

// cancel quote status
if (cancel_pharmacy_quote) {
    cancel_pharmacy_quote.addEventListener('click', (e) => {
        e.preventDefault();
        return updatePharmacyQuoteStatusFromUser(
            'canceled',
            e.target.dataset.id2,
            e.target.dataset.id
        );
    });
}

if (add_new_medicines) {
    add_new_medicines.addEventListener('submit', async (e) => {
        e.preventDefault();
        const medicines = [];
        await Promise.all(
            [...document.getElementById('medicines').options].map((el) => {
                if (el.selected) return medicines.push(el.value);
            })
        );
        return addParmacyMedicines(medicines, e.target.dataset.id);
    });
}

// update laboratory status
if (cancel_user_laboratory_booking_status.length) {
    [...cancel_user_laboratory_booking_status].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(e.target.dataset.id, e.target.dataset.id2);
            return cancelUserLaboratoryBookings(
                e.target.dataset.id,
                e.target.dataset.id2
            );
        });
    });
}

// add new job categories
if (add_specialist) {
    add_specialist.addEventListener('click', (e) => {
        e.preventDefault();
        const elID = document.getElementById('newSpecialist');
        const html = `<input class='newspecialist form-control mt-2' type='text'  placeholder='Specialist' required=''>`;
        return elID.insertAdjacentHTML('beforeend', html);
    });
}

// update update job categories
if (add_update_specialist?.length) {
    [...add_update_specialist].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const index = el.dataset.index;
            const elID = document.getElementById(`addUpdateSpecialist${index}`);
            const html = `<input class='updateSpecialist${index} form-control mt-2' type='text'  placeholder='Specialist' required=''>`;
            return elID.insertAdjacentHTML('beforeend', html);
        });
    });
}

// create new joob categories
if (create_new_job_categories) {
    create_new_job_categories.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const specialists = await Promise.all(
            [...document.querySelectorAll('.newspecialist')].map((el) => {
                if (!!el.value) return el.value;
            })
        );
        return createNewJobCategories({ name, specialists });
    });
}

// update4 job categories
if (update_job_categories) {
    update_job_categories.addEventListener('submit', async (e) => {
        if (e.target.id === 'update_service') {
            e.preventDefault();
            const name = document.getElementById(
                'name' + e.target.dataset.index
            ).value;
            const specialists = await Promise.all(
                [
                    ...document.querySelectorAll(
                        '.updateSpecialist' + e.target.dataset.index
                    )
                ].map((el) => {
                    if (!!el.value) return el.value;
                })
            );

            return updateJobCategories(
                { name, specialists },
                e.target.dataset.id
            );
        }
    });
}

// set values
if (jobCategory) {
    jobCategory.addEventListener('change', async (e) => {
        let data = await axios({
            method: 'GET',
            url: `/api/v1/jobportal/get-a-job-categorie/${e.target.value}`
        }).catch((err) => {
            if (err?.response?.data?.message) {
                swal('Warning', err.response.data.message, 'error');
            }
            return swal(
                'Warning',
                'Please select the valid categorie.',
                'error'
            );
        });

        data = data.data.docs;
        const speciality = document.getElementById('jobSpeciality');
        while (speciality.hasChildNodes()) {
            speciality.removeChild(speciality.firstChild);
        }

        let options = await data.specialists.map(
            (el) => `<option value=${el}>${el}</option>`
        );

        speciality.insertAdjacentHTML(
            'beforeend',
            '<option> -- Select your Speciality -- </option>' + options.join('')
        );
    });
}

// post a new job
if (createNewJob) {
    createNewJob.addEventListener('submit', (e) => {
        e.preventDefault();
        const jobTitle = document.getElementById('jobTitle').value;
        const yearOfExperience =
            document.getElementById('yearOfExperience').value;
        const category = document.getElementById('jobCategory').value;
        const speciality = document.getElementById('jobSpeciality').value;
        const jobType = document.getElementById('jobType').value;
        const salaryPerMonth = document.getElementById('salaryPerMonth').value;
        const vacancy = document.getElementById('vacancy').value;
        const latitude = document.getElementById('latitude').value;
        const longitide = document.getElementById('longitide').value;
        const workTimeFrom = document.getElementById('openTime').value;
        const workTimeTo = document.getElementById('closeTime').value;
        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;
        const pincode = document.getElementById('pincode').value;
        const country = document.getElementById('country').value;
        const address = document.getElementById('address').value;
        const description = document.getElementById('description').value;
        return postNewJob(
            {
                jobTitle,
                yearOfExperience,
                category,
                speciality,
                jobType,
                salaryPerMonth,
                vacancy,
                location: [latitude, longitide],
                workTimeFrom,
                workTimeTo,
                city,
                state,
                pincode,
                country,
                address,
                description
            },
            e.target.dataset.id,
            e.target.dataset.from
        );
    });
}
// update a  job
if (updateJob) {
    updateJob.addEventListener('submit', (e) => {
        e.preventDefault();
        const jobTitle = document.getElementById('jobTitle').value;
        const yearOfExperience =
            document.getElementById('yearOfExperience').value;
        const category = document.getElementById('jobCategory').value;
        const speciality = document.getElementById('jobSpeciality').value;
        const jobType = document.getElementById('jobType').value;
        const salaryPerMonth = document.getElementById('salaryPerMonth').value;
        const vacancy = document.getElementById('vacancy').value;
        const latitude = document.getElementById('latitude').value;
        const longitide = document.getElementById('longitide').value;
        const workTimeFrom = document.getElementById('openTime').value;
        const workTimeTo = document.getElementById('closeTime').value;
        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;
        const pincode = document.getElementById('pincode').value;
        const country = document.getElementById('country').value;
        const address = document.getElementById('address').value;
        const description = document.getElementById('description').value;
        return updateMyJob(
            {
                jobTitle,
                yearOfExperience,
                category,
                speciality,
                jobType,
                salaryPerMonth,
                vacancy,
                location: [latitude, longitide],
                workTimeFrom,
                workTimeTo,
                city,
                state,
                pincode,
                country,
                address,
                description
            },
            e.target.dataset.id,
            e.target.dataset.job,
            e.target.dataset.from
        );
    });
}

// post a new job for user
if (createNewUserJob) {
    createNewUserJob.addEventListener('submit', (e) => {
        e.preventDefault();
        const jobTitle = document.getElementById('jobTitle').value;
        const yearOfExperience =
            document.getElementById('yearOfExperience').value;
        const category = document.getElementById('jobCategory').value;
        const speciality = document.getElementById('jobSpeciality').value;
        const jobType = document.getElementById('jobType').value;
        const salaryPerMonth = document.getElementById('salaryPerMonth').value;
        const vacancy = document.getElementById('vacancy').value;
        const latitude = document.getElementById('latitude').value;
        const longitide = document.getElementById('longitide').value;
        const workTimeFrom = document.getElementById('openTime').value;
        const workTimeTo = document.getElementById('closeTime').value;
        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;
        const pincode = document.getElementById('pincode').value;
        const country = document.getElementById('country').value;
        const address = document.getElementById('address').value;
        const description = document.getElementById('description').value;
        return postNewUserJob(
            {
                jobTitle,
                yearOfExperience,
                category,
                speciality,
                jobType,
                salaryPerMonth,
                vacancy,
                location: [latitude, longitide],
                workTimeFrom,
                workTimeTo,
                city,
                state,
                pincode,
                country,
                address,
                description
            },
            e.target.dataset.id
        );
    });
}
// update a  job
if (updateUserJob) {
    updateUserJob.addEventListener('submit', (e) => {
        e.preventDefault();
        const jobTitle = document.getElementById('jobTitle').value;
        const yearOfExperience =
            document.getElementById('yearOfExperience').value;
        const category = document.getElementById('jobCategory').value;
        const speciality = document.getElementById('jobSpeciality').value;
        const jobType = document.getElementById('jobType').value;
        const salaryPerMonth = document.getElementById('salaryPerMonth').value;
        const vacancy = document.getElementById('vacancy').value;
        const latitude = document.getElementById('latitude').value;
        const longitide = document.getElementById('longitide').value;
        const workTimeFrom = document.getElementById('openTime').value;
        const workTimeTo = document.getElementById('closeTime').value;
        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;
        const pincode = document.getElementById('pincode').value;
        const country = document.getElementById('country').value;
        const address = document.getElementById('address').value;
        const description = document.getElementById('description').value;
        return updateNewUserJob(
            {
                jobTitle,
                yearOfExperience,
                category,
                speciality,
                jobType,
                salaryPerMonth,
                vacancy,
                location: [latitude, longitide],
                workTimeFrom,
                workTimeTo,
                city,
                state,
                pincode,
                country,
                address,
                description
            },
            e.target.dataset.id,
            e.target.dataset.job
        );
    });
}

if (create_medical_product) {
    create_medical_product.addEventListener('submit', async (e) => {
        e.preventDefault();
        const productName = document.getElementById('productName').value;
        const productStream = document.getElementById('productStream').value;
        const productType = document.getElementById('marketProductType').value;
        const additionalProductDetailsLength = document.querySelectorAll(
            '.additiionalProductDetailsList'
        ).length;
        const additionalProductDetails = {};
        await Promise.all(
            [...Array(additionalProductDetailsLength)].map((el, index) => {
                const key = document.getElementsByClassName(
                    'newProductAdditionalDetailssTitle'
                )[index].value;
                const value = document.getElementsByClassName(
                    'newProductAdditionalDetailssDetail'
                )[index].value;
                if (!key || !value) {
                    swal(
                        'Warning',
                        'Something went wrong please try again.',
                        'error'
                    );
                }

                return (additionalProductDetails[key] = value);
            })
        );
        const aboutItem = await Promise.all(
            [...document.querySelectorAll('.aboutNewProduct')].map((el) => {
                if (!!el.value) return el.value;
            })
        );
        const description = document.getElementById('productDescription').value;
        const obj = {
            productName,
            productStream,
            productType,
            additionalProductDetails,
            aboutItem,
            description,
            statusType: 'create'
        };
        if (productType === 'single') {
            obj.price = document.getElementById('price').value;
            obj.discountPrice = document.getElementById('discountPrice').value;
            const imageForm = new FormData();
            await Promise.all(
                Object.entries(
                    document.getElementById('imageGallery').files
                ).map(([key, value]) => {
                    return imageForm.append('imageGallery', value);
                })
            );

            imageForm.append(
                'image',
                document.getElementById(`image`).files[0]
            );
            imageForm.append('imageStatus', 'create');
            const res = await axios({
                method: 'POST',
                url: '/api/v1/opticals/get-images',
                data: imageForm
            });
            if (res.data.status !== 'Success') {
                return swal(
                    'Warning',
                    'Something went wrong while processing your reques1t.',
                    'error'
                );
            }

            obj.image = res.data.image;
            obj.imageGallery = res.data.imageGallery;
        } else if (productType === 'colorOnly') {
            const productDetailsList = document.querySelectorAll(
                '.newmarketColorProducts '
            );

            obj.productDetails = await Promise.all(
                [...productDetailsList].map(async (el) => {
                    const index = el.dataset.index;
                    const obj2 = {};
                    obj2.color = document.getElementById(
                        `newColor${index}`
                    ).value;
                    obj2.price = document.getElementById(
                        `newPrice${index}`
                    ).value;
                    obj2.discountPrice = document.getElementById(
                        `discountPrice${index}`
                    ).value;
                    const imageForm = new FormData();
                    await Promise.all(
                        Object.entries(
                            document.getElementById(
                                `newProductImageGallery${el.dataset.index}`
                            ).files
                        ).map(([key, value]) => {
                            return imageForm.append('imageGallery', value);
                        })
                    );

                    imageForm.append(
                        'image',
                        document.getElementById(
                            `newProductImage${el.dataset.index}`
                        ).files[0]
                    );
                    imageForm.append('imageStatus', 'create');
                    const res = await axios({
                        method: 'POST',
                        url: '/api/v1/opticals/get-images',
                        data: imageForm
                    });
                    if (res.data.status !== 'Success') {
                        return swal(
                            'Warning',
                            'Something went wrong while processing your reques1t.',
                            'error'
                        );
                    }

                    obj2.bannerImage = res.data.image;
                    obj2.imageGallery = res.data.imageGallery;
                    return obj2;
                })
            );
        } else if (productType === 'sizeOnly') {
            const imageForm = new FormData();
            await Promise.all(
                Object.entries(
                    document.getElementById('imageGallery').files
                ).map(([key, value]) => {
                    return imageForm.append('imageGallery', value);
                })
            );

            imageForm.append(
                'image',
                document.getElementById(`image`).files[0]
            );
            imageForm.append('imageStatus', 'create');
            const res = await axios({
                method: 'POST',
                url: '/api/v1/opticals/get-images',
                data: imageForm
            });
            if (res.data.status !== 'Success') {
                return swal(
                    'Warning',
                    'Something went wrong while processing your reques1t.',
                    'error'
                );
            }

            obj.image = res.data.image;
            obj.imageGallery = res.data.imageGallery;
            const productData = document.querySelectorAll(
                '.newmarketSizeProducts'
            );

            obj.productDetails = await Promise.all(
                [...productData].map((el) => {
                    const index = el.dataset.index;
                    const obj2 = {};
                    obj2.size = document.getElementById(
                        `newSize${index}`
                    ).value;
                    obj2.price = document.getElementById(
                        `newPrice${index}`
                    ).value;
                    obj2.discountPrice = document.getElementById(
                        `discountPrice${index}`
                    ).value;
                    return obj2;
                })
            );
        } else if (productType === 'colorWithSize') {
            const productDetailList = document.querySelectorAll(
                '.newMarketVariableProducts'
            );
            obj.productDetails = await Promise.all(
                [...productDetailList].map(async (el) => {
                    const obj = {};

                    obj.color = document.getElementById(
                        `newColor${el.dataset.index}`
                    ).value;
                    const imageForm = new FormData();
                    await Promise.all(
                        Object.entries(
                            document.getElementById(
                                `newProductImageGallery${el.dataset.index}`
                            ).files
                        ).map(([key, value]) => {
                            return imageForm.append('imageGallery', value);
                        })
                    );

                    imageForm.append(
                        'image',
                        document.getElementById(
                            `newProductImage${el.dataset.index}`
                        ).files[0]
                    );
                    imageForm.append('imageStatus', 'create');
                    const res = await axios({
                        method: 'POST',
                        url: '/api/v1/opticals/get-images',
                        data: imageForm
                    });
                    if (res.data.status !== 'Success') {
                        return swal(
                            'Warning',
                            'Something went wrong while processing your reques1t.',
                            'error'
                        );
                    }

                    obj.bannerImage = res.data.image;
                    obj.imageGallery = res.data.imageGallery;
                    obj.subDetails = await Promise.all(
                        [
                            ...document.querySelectorAll(
                                `.newVariableProductSizeDetails${el.dataset.index}`
                            )
                        ].map(async (els) => {
                            const subObj = {};
                            subObj.size = document.getElementById(
                                `newSize${el.dataset.index}${els.dataset.indexs}`
                            ).value;

                            subObj.price = document.getElementById(
                                `newPrice${el.dataset.index}${els.dataset.indexs}`
                            ).value;

                            subObj.discountPrice = document.getElementById(
                                `newDiscountPrice${el.dataset.index}${els.dataset.indexs}`
                            ).value;

                            return subObj;
                        })
                    );

                    return obj;
                })
            );
        }
        return createNewMarketProduct(obj, e.target.dataset.id);
    });
}

// update hearingaid products status
if (update_vendor_market_product_status) {
    update_vendor_market_product_status.addEventListener('change', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('update_status')) {
            const status = document.getElementById(
                `update_market_status-${e.target.dataset.index}`
            ).value;
            return updateMarketProductOrderStatus(
                status,
                e.target.dataset.id,
                e.target.dataset.id2
            );
        }
    });
}
// update hearingaid products status
if (update_vendor_market_quote_status) {
    update_vendor_market_quote_status.addEventListener('change', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('update_status')) {
            const status = document.getElementById(
                `update_market_quote_status-${e.target.dataset.index}`
            ).value;
            return updateMarketProductQuoteStatus(
                status,
                e.target.dataset.id,
                e.target.dataset.id2
            );
        }
    });
}
// negotiate response
if (negotiateResponse.length) {
    [...negotiateResponse].map((el) => {
        el.addEventListener('click', (e) => {
            return updateMarketProductQuoteStatus(
                'negotiate',
                e.target.dataset.id,
                e.target.dataset.id2
            );
        });
    });
}
if (update_medical_product) {
    update_medical_product.addEventListener('submit', async (e) => {
        e.preventDefault();
        const index = e.target.dataset.index;
        const productName = document.getElementById(
            'productName' + index
        ).value;
        const productStream = document.getElementById(
            'productStream' + index
        ).value;
        const productType = document.getElementById(
            'marketProductType' + index
        ).value;
        const additionalProductDetailsLength = document.querySelectorAll(
            '.additiionalProductDetailsList' + index
        ).length;
        const additionalProductDetails = {};
        await Promise.all(
            [...Array(additionalProductDetailsLength)].map((el, i) => {
                const key = document.getElementsByClassName(
                    'updateProductAdditionalDetailssTitle' + index
                )[i].value;
                const value = document.getElementsByClassName(
                    'updateProductAdditionalDetailssDetail' + index
                )[i].value;
                if (!key || !value) {
                    swal(
                        'Warning',
                        'Something went wrong please try again.',
                        'error'
                    );
                }
                console.log(key, value);
                return (additionalProductDetails[key] = value);
            })
        );
        const aboutItem = await Promise.all(
            [...document.querySelectorAll('.aboutUpdateProduct' + index)].map(
                (el) => {
                    if (!!el.value) return el.value;
                }
            )
        );
        const description = document.getElementById(
            'productDescription' + index
        ).value;
        const obj = {
            productName,
            productStream,

            productType,
            additionalProductDetails,
            aboutItem,
            description,
            statusType: 'update'
        };
        if (productType === 'single') {
            obj.price = document.getElementById('price' + index).value;
            obj.discountPrice = document.getElementById(
                'discountPrice' + index
            ).value;
            const imageForm = new FormData();
            const img = document.getElementById(`image` + index).files[0];
            const imgGal = document.getElementById(
                'imageGallery' + index
            ).files;
            if (imgGal.length)
                await Promise.all(
                    Object.entries(imgGal).map(([key, value]) => {
                        return imageForm.append('imageGallery', value);
                    })
                );
            if (img) imageForm.append('image', img);
            imageForm.append('imageStatus', 'update');
            let res = {};
            if (img || imgGal.length) {
                res = await axios({
                    method: 'POST',
                    url: '/api/v1/opticals/get-images',
                    data: imageForm
                });
                if (res.data.status !== 'Success') {
                    return swal(
                        'Warning',
                        'Something went wrong while processing your reques1t.',
                        'error'
                    );
                }
            }

            obj.image = res?.data?.image ?? undefined;
            obj.imageGallery = res?.data?.imageGallery ?? undefined;
        } else if (productType === 'colorOnly') {
            const productDetailsList = document.querySelectorAll(
                `.newmarketColorProducts${index}`
            );

            obj.productDetails = await Promise.all(
                [...productDetailsList].map(async (el) => {
                    const index2 = el.dataset.index2;
                    const obj2 = {};
                    obj2.color = document.getElementById(
                        `newColor${index}${index2}`
                    ).value;
                    obj2.price = document.getElementById(
                        `newPrice${index}${index2}`
                    ).value;
                    obj2.discountPrice = document.getElementById(
                        `discountPrice${index}${index2}`
                    ).value;
                    obj2.id = el.dataset.id;
                    const imageForm = new FormData();
                    const img = document.getElementById(
                        `newProductImage${index}${index2}`
                    ).files[0];
                    const imgGal = document.getElementById(
                        `newProductImageGallery${index}${index2}`
                    ).files;
                    if (imgGal.length)
                        await Promise.all(
                            Object.entries(imgGal).map(([key, value]) => {
                                return imageForm.append('imageGallery', value);
                            })
                        );
                    if (img) imageForm.append('image', img);

                    imageForm.append('imageStatus', 'update');
                    let res = {};
                    if (img || imgGal.length) {
                        res = await axios({
                            method: 'POST',
                            url: '/api/v1/opticals/get-images',
                            data: imageForm
                        });
                        if (res.data.status !== 'Success') {
                            return swal(
                                'Warning',
                                'Something went wrong while processing your reques1t.',
                                'error'
                            );
                        }
                    }
                    obj2.bannerImage = res?.data?.image ?? undefined;
                    obj2.imageGallery = res?.data?.imageGallery ?? undefined;
                    return obj2;
                })
            );
        } else if (productType === 'sizeOnly') {
            const img = document.getElementById(`image${index}`).files[0];
            const imgGal = document.getElementById(
                `imageGallery${index}`
            ).files;
            const imageForm = new FormData();
            if (imgGal.length)
                await Promise.all(
                    Object.entries(imgGal).map(([key, value]) => {
                        return imageForm.append('imageGallery', value);
                    })
                );
            if (img) imageForm.append('image', img);
            imageForm.append('imageStatus', 'update');
            let res = {};
            if (img || imgGal.length) {
                res = await axios({
                    method: 'POST',
                    url: '/api/v1/opticals/get-images',
                    data: imageForm
                });
                if (res.data.status !== 'Success') {
                    return swal(
                        'Warning',
                        'Something went wrong while processing your reques1t.',
                        'error'
                    );
                }
            }
            obj.image = res?.data?.image ?? undefined;
            obj.imageGallery = res?.data?.imageGallery ?? undefined;
            const productData = document.querySelectorAll(
                `.newmarketSizeProducts${index}`
            );

            obj.productDetails = await Promise.all(
                [...productData].map((el) => {
                    const index2 = el.dataset.index2;
                    const obj2 = {};
                    obj2.size = document.getElementById(
                        `newSize${index}${index2}`
                    ).value;
                    obj2.price = document.getElementById(
                        `newPrice${index}${index2}`
                    ).value;
                    obj2.discountPrice = document.getElementById(
                        `discountPrice${index}${index2}`
                    ).value;
                    obj2.id = el.dataset.id;
                    return obj2;
                })
            );
        } else if (productType === 'colorWithSize') {
            const productDetailList = document.querySelectorAll(
                `.newMarketVWSubUpdateDetails${index}`
            );
            obj.productDetails = await Promise.all(
                [...productDetailList].map(async (el) => {
                    const obj = {};
                    obj.id = el.dataset.id;
                    obj.color = document.getElementById(
                        `newColor${el.dataset.index}${el.dataset.index2}`
                    ).value;
                    const imageForm = new FormData();
                    await Promise.all(
                        Object.entries(
                            document.getElementById(
                                `newProductImageGallery${el.dataset.index}${el.dataset.index2}`
                            ).files
                        ).map(([key, value]) => {
                            return imageForm.append('imageGallery', value);
                        })
                    );

                    imageForm.append(
                        'image',
                        document.getElementById(
                            `newProductImage${el.dataset.index}${el.dataset.index2}`
                        ).files[0]
                    );
                    imageForm.append('imageStatus', 'update');
                    const res = await axios({
                        method: 'POST',
                        url: '/api/v1/opticals/get-images',
                        data: imageForm
                    });
                    if (res.data.status !== 'Success') {
                        return swal(
                            'Warning',
                            'Something went wrong while processing your reques1t.',
                            'error'
                        );
                    }

                    obj.bannerImage = res.data.image;
                    obj.imageGallery = res.data.imageGallery;
                    obj.subDetails = await Promise.all(
                        [
                            ...document.querySelectorAll(
                                `.updateMarketSubColorDetails${el.dataset.index}${el.dataset.index2}`
                            )
                        ].map(async (els) => {
                            const subObj = {};
                            subObj.id = els.dataset.id;
                            subObj.size = document.getElementById(
                                `newSize${el.dataset.index}${els.dataset.index2}${els.dataset.index3}`
                            ).value;

                            subObj.price = document.getElementById(
                                `newPrice${el.dataset.index}${els.dataset.index2}${els.dataset.index3}`
                            ).value;

                            subObj.discountPrice = document.getElementById(
                                `newDiscountPrice${el.dataset.index}${els.dataset.index2}${els.dataset.index3}`
                            ).value;

                            return subObj;
                        })
                    );
                    console.log(obj);
                    return obj;
                })
            );
        }

        return updateMarketProduct(
            obj,
            e.target.dataset.id,
            e.target.dataset.id2
        );
    });
}

// add color only product
const addColorOnlyMarketProduct = (colorId, elId) => {
    document.getElementById(colorId).addEventListener('click', (e) => {
        const id = Date.now();
        const html = `
        <div id='newMarketColorProduct${id}' class='newmarketColorProducts border m-2 p-3' data-index=${id}>
            <div class='d-flex justify-content-end position-relative'>
                <a class="btn btn-danger" id='delelteNewProductDetails${id}' data-index=${id}>Delete</a>
            </div>
            <div class="col-md-12">
                    <label class="form-label" for="newColor${id}">Color<span class="text-danger">*</span></label>
                    <input class="form-control" id="newColor${id}" type="text" placeholder="Color" required="" />
            </div>
             <div class="col-md-12">
                <label class="form-label" for="price">Price<span class="text-danger">*</span></label>
                <input class="form-control" id="newPrice${id}" type="text" placeholder="Price" required="" />
            </div>
            <div class="col-md-12">
                <label class="form-label" for="price">Discount Price<span class="text-danger">*</span></label>
                <input class="form-control" id="discountPrice${id}" type="text" placeholder="Discount Price"  />
            </div>
            <div class="col-md-12">
                    <label class="form-label" for="newProductImage${id}">Product Image<span class="text-danger">*</span></label>
                    <input class="form-control" id="newProductImage${id}" type="file"  required="" accept="image/*" required />
            </div>
            <div class="col-md-12">
                <label class="form-label" for="newProductImageGallery${id}">Product Image Gallery<span class="text-danger">*</span></label>
                <input class="form-control" id="newProductImageGallery${id}" type="file" multiple required="" required accept="image/*"  />
            </div>
        </div>
        `;
        document.getElementById(elId).insertAdjacentHTML(`beforebegin`, html);
        return create_event_For_close(
            `delelteNewProductDetails${id}`,
            `newMarketColorProduct${id}`
        );
    });
};

// add size only product
const addSizeOnlyMarketProduct = (sizeId, elId) => {
    document.getElementById(sizeId).addEventListener('click', (e) => {
        const id = Date.now();
        const html = `
        <div id='newMarketSizeProduct${id}' class='newmarketSizeProducts border m-2 p-3' data-index=${id}>
            <div class='d-flex justify-content-end position-relative'>
                <a class="btn btn-danger" id='delelteNewSizeProductDetails${id}' data-index=${id}>Delete</a>
            </div>
            <div class="col-md-12">
                    <label class="form-label" for="newSize${id}">Size<span class="text-danger">*</span></label>
                    <input class="form-control" id="newSize${id}" type="text" placeholder="Size" required="" />
            </div>
             <div class="col-md-12">
                <label class="form-label" for="price">Price<span class="text-danger">*</span></label>
                <input class="form-control" id="newPrice${id}" type="text" placeholder="Price" required="" />
            </div>
            <div class="col-md-12">
                <label class="form-label" for="price">Discount Price<span class="text-danger">*</span></label>
                <input class="form-control" id="discountPrice${id}" type="text" placeholder="Discount Price"  />
            </div>
        </div>
        `;
        document.getElementById(elId).insertAdjacentHTML('beforebegin', html);
        return create_event_For_close(
            `delelteNewSizeProductDetails${id}`,
            `newMarketSizeProduct${id}`
        );
    });
};
const add_new_market_variable_color = (colorId, elId) => {
    document.getElementById(colorId).addEventListener('click', (e) => {
        const id = Date.now();
        const html = `
        <div id='newMarketVariableProducts${id}' class='newMarketVariableProducts border m-2 p-3' data-index=${id}>
            <div class='d-flex justify-content-end position-relative'>
                <a class="btn btn-danger" id='delelteNewVeriableProductDetails${id}' data-index=${id}>Delete</a>
            </div>
            <div class="col-md-12">
                    <label class="form-label" for="newColor${id}">Color<span class="text-danger">*</span></label>
                    <input class="form-control" id="newColor${id}" type="text" placeholder="Color" required="" />
            </div>
            <div class="col-md-12">
                    <label class="form-label" for="newProductImage${id}">Product Image<span class="text-danger">*</span></label>
                    <input class="form-control" id="newProductImage${id}" type="file"  required="" accept="image/*" required />
                </div>
                <div class="col-md-12">
                    <label class="form-label" for="newProductImageGallery${id}">Product Image Gallery<span class="text-danger">*</span></label>
                    <input class="form-control" id="newProductImageGallery${id}" type="file" multiple required="" required accept="image/*"  />
                </div>
            <div id="variableProductSizeDetails${id}">
            </div>
            <div class='d-flex justify-content-center mt-2'>
                <button class="btn btn-success" type="button" id="addVariableProductSizeDetails${id}"  >Add Details</button>
            </div>
        </div>
        `;
        document.getElementById(elId).insertAdjacentHTML('beforeend', html);
        create_event_For_close(
            `delelteNewVeriableProductDetails${id}`,
            `newMarketVariableProducts${id}`
        );
        return add_new_varialbe_cws_details(
            `addVariableProductSizeDetails${id}`,
            `variableProductSizeDetails${id}`,
            id
        );
    });
};

const add_new_varialbe_cws_details = (fors, to, id) => {
    document.getElementById(fors).addEventListener('click', (e) => {
        e.preventDefault();
        const ids = Date.now();
        const html = `
        <div id='newVariableProductSizeDetail${id}${ids}' class='newVariableProductSizeDetails${id} m-2 p-2' data-indexs=${ids}>
            <div class="d-flex justify-content-end">
             <a class="btn btn-danger" id='deleteNewProductSizeDetail${id}${ids}' data-index=${id} data-indexs=${ids}>Delete</a>
            </div>
            
                <div class="col-md-12">
                    <label class="form-label" for="newSize${id}${ids}">Size<span class="text-danger">*</span></label>
                    <input class="form-control" id="newSize${id}${ids}" type="text" placeholder="Size" required="" />
                </div>
                <div class="col-md-12">
                    <label class="form-label" for="newPrice${id}${ids}">Price<span class="text-danger">*</span></label>
                    <input class="form-control" id="newPrice${id}${ids}" type="text" placeholder="Price" required="" />
                </div>
                <div class="col-md-12">
                    <label class="form-label" for="newDiscountPrice${id}${ids}">Discount Price<span class="text-danger">*</span></label>
                    <input class="form-control" id="newDiscountPrice${id}${ids}" type="text" placeholder="Discount Price" />
                </div>
     
                </div>
            </div>
        `;
        const elId = document.getElementById(to);
        elId.insertAdjacentHTML('beforeend', html);
        return create_event_For_close(
            `deleteNewProductSizeDetail${id}${ids}`,
            `newVariableProductSizeDetail${id}${ids}`
        );
    });
};
if (marketProductType) {
    // add market product type
    marketProductType.addEventListener('change', (e) => {
        e.preventDefault();
        const elId = document.getElementById('productDetails');
        elId.replaceChildren();
        if (e.target.value === 'single') {
            const html = `
            <div class="col-md-12">
                <label class="form-label" for="price">Price<span class="text-danger">*</span></label>
                <input class="form-control" id="price" type="text" placeholder="Price" required="" />
            </div>
            <div class="col-md-12">
                <label class="form-label" for="price">Discount Price<span class="text-danger">*</span></label>
                <input class="form-control" id="discountPrice" type="text" placeholder="Discount Price"  />
            </div>
            <div class="col-md-12">
                <label class="form-label" for="price">Banner Image<span class="text-danger">*</span></label>
                <input class="form-control" id="image" type="file" required />
            </div>
            <div class="col-md-12">
                <label class="form-label" for="price">Image Gallery<span class="text-danger">*</span></label>
                <input class="form-control" id="imageGallery" type="file" multiple />
            </div>
            `;
            return elId.insertAdjacentHTML('afterbegin', html);
        } else if (e.target.value === 'colorOnly') {
            const html = `
            <div class="d-grid">
                <button class='btn btn-success btn-block' id="add_new_market_o_color" type="button"> Add Color
                </button>
            </div>
            `;
            elId.insertAdjacentHTML('beforeend', html);
            return addColorOnlyMarketProduct(
                'add_new_market_o_color',
                'productDetails'
            );
        } else if (e.target.value === 'sizeOnly') {
            const html = `
            <div class="col-md-12">
                <label class="form-label" for="price">Banner Image<span class="text-danger">*</span></label>
                <input class="form-control" id="image" type="file" required />
            </div>
            <div class="col-md-12">
                <label class="form-label" for="price">Image Gallery<span class="text-danger">*</span></label>
                <input class="form-control" id="imageGallery" type="file" multiple required />
            </div>
            <div id="newSizeOnlyProduct">
            </div>
            <div class="d-grid mt-2">
                <button class='btn btn-success btn-block' id="add_market_o_size" type="button"> Add Size
                </button>
            </div>
            `;
            elId.insertAdjacentHTML('beforeend', html);
            return addSizeOnlyMarketProduct(
                'add_market_o_size',
                'newSizeOnlyProduct'
            );
        } else if (e.target.value === 'colorWithSize') {
            e.preventDefault();
            const html = `
            <div id="variableProductDetails">
            </div>
            <div class="d-grid">
                <button class='btn btn-success btn-block' id="add_new_market_variable_color" type="button"> Add Color
                </button>
            </div>
            `;
            elId.insertAdjacentHTML('beforeend', html);
            return add_new_market_variable_color(
                'add_new_market_variable_color',
                'variableProductDetails'
            );
        }
    });
}
// add color only product
const addColorOnlyMarketProductForUpdate = (colorId, elId, index) => {
    document.getElementById(colorId).addEventListener('click', (e) => {
        const id = Date.now();
        const html = `
        <div id='newMarketColorProduct${index}${id}' class='newmarketColorProducts${index} border m-2 p-3' data-index=${index} data-index2=${id} >
            <div class='d-flex justify-content-end position-relative'>
                <a class="btn btn-danger" id='delelteNewProductDetails${index}${id}' data-index=${index} data-index2=${id} >Delete</a>
            </div>
            <div class="col-md-12">
                    <label class="form-label" for="newColor${index}${id}">Color<span class="text-danger">*</span></label>
                    <input class="form-control" id="newColor${index}${id}" type="text" placeholder="Color" required="" />
            </div>
             <div class="col-md-12">
                <label class="form-label" for="price">Price<span class="text-danger">*</span></label>
                <input class="form-control" id="newPrice${index}${id}" type="text" placeholder="Price" required="" />
            </div>
            <div class="col-md-12">
                <label class="form-label" for="price">Discount Price<span class="text-danger">*</span></label>
                <input class="form-control" id="discountPrice${index}${id}" type="text" placeholder="Discount Price"  />
            </div>
            <div class="col-md-12">
                    <label class="form-label" for="newProductImage${index}${id}">Product Image<span class="text-danger">*</span></label>
                    <input class="form-control" id="newProductImage${index}${id}" type="file"  required="" accept="image/*" required />
            </div>
            <div class="col-md-12">
                <label class="form-label" for="newProductImageGallery${index}${id}">Product Image Gallery<span class="text-danger">*</span></label>
                <input class="form-control" id="newProductImageGallery${index}${id}" type="file" multiple required="" required accept="image/*"  />
            </div>
        </div>
        `;
        document.getElementById(elId).insertAdjacentHTML(`afterbegin`, html);
        return create_event_For_close(
            `delelteNewProductDetails${index}${id}`,
            `newMarketColorProduct${index}${id}`
        );
    });
};
if (addColorOnlyProductDetailsWR.length) {
    [...addColorOnlyProductDetailsWR].map((el) => {
        return addColorOnlyMarketProductForUpdate(
            `add_update_market_o_color${el.dataset.index}`,
            `productDetails${el.dataset.index}`,
            el.dataset.index
        );
    });
}

// add size only product
const addSizeOnlyDataUpdateData = (sizeId, elId, index) => {
    document.getElementById(sizeId).addEventListener('click', (e) => {
        const id = Date.now();
        const html = `
        <div id='newMarketSizeProduct${index}${id}' class='newmarketSizeProducts${index} border m-2 p-3' data-index=${index} data-index2=${id}>
            <div class='d-flex justify-content-end position-relative'>
                <a class="btn btn-danger" id='delelteNewSizeProductDetails${index}${id}' data-index=${index} data-index2=${id}>Delete</a>
            </div>
            <div class="col-md-12">
                    <label class="form-label" for="newSize${index}${id}">Size<span class="text-danger">*</span></label>
                    <input class="form-control" id="newSize${index}${id}" type="text" placeholder="Size" required="" />
            </div>
             <div class="col-md-12">
                <label class="form-label" for="price">Price<span class="text-danger">*</span></label>
                <input class="form-control" id="newPrice${index}${id}" type="text" placeholder="Price" required="" />
            </div>
            <div class="col-md-12">
                <label class="form-label" for="price">Discount Price<span class="text-danger">*</span></label>
                <input class="form-control" id="discountPrice${index}${id}" type="text" placeholder="Discount Price"  />
            </div>
        </div>
        `;
        document.getElementById(sizeId).insertAdjacentHTML('beforebegin', html);
        return create_event_For_close(
            `delelteNewSizeProductDetails${index}${id}`,
            `newMarketSizeProduct${index}${id}`
        );
    });
};
//
if (addSizeOnlyDataUpdate.length) {
    [...addSizeOnlyDataUpdate].map((el) => {
        return addSizeOnlyDataUpdateData(
            `add_market_o_size${el.dataset.index}`,
            `productDetails${el.dataset.index}`,
            el.dataset.index
        );
    });
}

if (marketUpdateProductType.length) {
    // add market product type
    [...marketUpdateProductType].map((el) => {
        el.addEventListener('change', (e) => {
            e.preventDefault();
            const id = el.dataset.index;
            const elId = document.getElementById(`productDetails${id}`);
            elId.replaceChildren();

            if (e.target.value === 'single') {
                const html = `
            <div class="col-md-12">
                <label class="form-label" for="price">Price<span class="text-danger">*</span></label>
                <input class="form-control" id="price${id}" type="text" placeholder="Price" required="" />
            </div>
            <div class="col-md-12">
                <label class="form-label" for="price">Discount Price<span class="text-danger">*</span></label>
                <input class="form-control" id="discountPrice${id}" type="text" placeholder="Discount Price"  />
            </div>
            <div class="col-md-12">
                <label class="form-label" for="price">Banner Image<span class="text-danger">*</span></label>
                <input class="form-control" id="image${id}" type="file" required />
            </div>
            <div class="col-md-12">
                <label class="form-label" for="price">Image Gallery<span class="text-danger">*</span></label>
                <input class="form-control" id="imageGallery${id}" type="file" multiple />
            </div>
            `;
                return elId.insertAdjacentHTML('afterbegin', html);
            } else if (e.target.value === 'colorOnly') {
                const id = el.dataset.index;
                const html = `
            <div class="d-grid">
                <button class='btn btn-success btn-block' id="add_update_market_o_color${id}" type="button"> Add Color
                </button>
            </div>
            `;
                elId.insertAdjacentHTML('beforeend', html);
                return addColorOnlyMarketProductForUpdate(
                    `add_update_market_o_color${id}`,
                    `productDetails${id}`,
                    el.dataset.index
                );
            } else if (e.target.value === 'sizeOnly') {
                const index = el.dataset.index;
                const html = `
            <div class="col-md-12">
                <label class="form-label" for="price">Banner Image<span class="text-danger">*</span></label>
                <input class="form-control" id="image${index}" type="file" required />
            </div>
            <div class="col-md-12">
                <label class="form-label" for="price">Image Gallery<span class="text-danger">*</span></label>
                <input class="form-control" id="imageGallery${index}" type="file" multiple />
            </div>
            <div id="newSizeOnlyProduct${index}">
            </div>
            <div class='d-grid'>
                <button class='btn btn-success btn-block' id="add_market_o_size${index}" type="button"> Add Size
                </button>
            </div>
            `;
                elId.insertAdjacentHTML('beforeend', html);
                return addSizeOnlyDataUpdateData(
                    `add_market_o_size${index}`,
                    `newSizeOnlyProduct${index}`,
                    index
                );
            } else if (e.target.value === 'colorWithSize') {
                e.preventDefault();
                const html = `
            <div id="productVariableMaincolorDetails${e.target.dataset.index}">
            </div>
            <div class="d-grid">
                <button class='btn btn-success btn-block' id="add_update_market_variable_color${e.target.dataset.index}" type="button"> Add Color
                </button>
            </div>
            `;
                elId.insertAdjacentHTML('beforeend', html);
                return addUpdateingMarketVariableProduct(
                    `add_update_market_variable_color${e.target.dataset.index}`,
                    `productVariableMaincolorDetails${e.target.dataset.index}`,
                    e.target.dataset.index
                );
            }
        });
    });
}

// delete add old data
if (deleteUpdatedMarketSubColorDetails?.length) {
    [...deleteUpdatedMarketSubColorDetails].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            document
                .getElementById(
                    `updateMarketVRProductDetails${e.target.dataset.index}${e.target.dataset.index2}`
                )
                .remove();
        });
    });
}

// delete add old data
if (deleteMarketSubDetails?.length) {
    [...deleteMarketSubDetails].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();

            document
                .getElementById(
                    `updateMarketSubProductDetails${e.target.dataset.index}${e.target.dataset.index2}${e.target.dataset.index3}`
                )

                .remove();
        });
    });
}

if (addMarketProductSubUpdateDetails.length) {
    [...addMarketProductSubUpdateDetails].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const { index, index2 } = e.target.dataset,
                index3 = Date.now();

            const html = `
        <div id='updateMarketSubProductDetails${index}${index2}${index3}' class='updateMarketSubColorDetails${index}${index2} m-2 p-2' data-index=${index} data-index2=${index2} data-index3=${index3}>
            <div class="d-flex justify-content-end">
             <a class="btn btn-danger" id='delelteNewSubProductDetails${index}${index2}${index3}' data-index=${index} data-index2=${index2} data-index3=${index3}>Delete</a>
            </div>
            
                <div class="col-md-12">
                    <label class="form-label" for="newSize${index}${index2}${index3}">Size<span class="text-danger">*</span></label>
                    <input class="form-control" id="newSize${index}${index2}${index3}" type="text" placeholder="Size" required="" />
                </div>
                <div class="col-md-12">
                    <label class="form-label" for="newPrice${index}${index2}${index3}">Price<span class="text-danger">*</span></label>
                    <input class="form-control" id="newPrice${index}${index2}${index3}" type="text" placeholder="Price" required="" />
                </div>
                <div class="col-md-12">
                    <label class="form-label" for="newDiscountPrice${index}${index2}${index3}">Discount Price<span class="text-danger">*</span></label>
                    <input class="form-control" id="newDiscountPrice${index}${index2}${index3}" type="text" placeholder="Discount Price" />
                </div>
             
                </div>
            </div>
        `;
            const elId = document.getElementById(
                `marketUpdateSubDeatail${index}${index2}`
            );
            elId.insertAdjacentHTML('beforeend', html);
            return create_event_For_close(
                `delelteNewSubProductDetails${index}${index2}${index3}`,
                `updateMarketSubProductDetails${index}${index2}${index3}`
            );
        });
    });
}

const addUpdateingMarketVariableProduct = (evn, elId, index) => {
    document.getElementById(evn).addEventListener('click', (e) => {
        const addColor = document.getElementById(elId);
        const index2 = Date.now();

        const html = `
            <div id='updateMarketVRProductDetails${index}${index2}' class='newMarketVWSubUpdateDetails${index} border m-2 p-3' data-index=${index} data-index2=${index2}>
                <div class='d-flex justify-content-end position-relative'>
                    <a class="btn btn-danger" id='delelteupdateProductDetails${index}${index2}' data-index=${index} data-index2=${index2}>Delete</a>
                </div>
                <div class="col-md-12">
                        <label class="form-label" for="newColor${index}${index2}">Color<span class="text-danger">*</span></label>
                        <input class="form-control" id="newColor${index}${index2}" type="text" placeholder="Color" required="" />
                </div>
                 <div class="col-md-12">
                        <label class="form-label" for="newProductImage${index}${index2}">Product Image<span class="text-danger">*</span></label>
                        <input class="form-control" id="newProductImage${index}${index2}" type="file"  required="" accept="image/*" required />
                </div>
                <div class="col-md-12">
                        <label class="form-label" for="newProductImageGallery${index}${index2}">Product Image Gallery<span class="text-danger">*</span></label>
                        <input class="form-control" id="newProductImageGallery${index}${index2}" type="file" multiple required="" required accept="image/*"  />
                </div>
                <div id="marketUpdateSubDeatail${index}${index2}">
                </div>
                <div class='d-flex justify-content-center mt-2'>
                    <button class="btn btn-success" type="button" id="addMarketVRNUpdateSubDeatail${index}${index2}"  >Add Details</button>
                </div>
            </div>
            `;
        addColor.insertAdjacentHTML('beforeend', html);
        create_event_For_close(
            `delelteupdateProductDetails${index}${index2}`,
            `updateMarketVRProductDetails${index}${index2}`
        );
        return update_color_details_hearingaid(
            `addMarketVRNUpdateSubDeatail${index}${index2}`,
            `marketUpdateSubDeatail${index}${index2}`,
            index,
            index2
        );
    });
};

// add product detail value for update
if (add_update_market_product_details.length) {
    [...add_update_market_product_details].map((el) => {
        return addUpdateingMarketVariableProduct(
            `addMaindMedicalProductDatas${el.dataset.index}`,
            `productVariableMaincolorDetails${el.dataset.index}`,
            el.dataset.index
        );
    });
}
// add product details
if (newAboutProductDetails) {
    newAboutProductDetails.addEventListener('click', (e) => {
        e.preventDefault();
        const elId = document.getElementById('productAboutDetails');
        const html = `
                <input class="form-control aboutNewProduct mt-2" type="text" placeholder='About' required="" />
        `;
        return elId.insertAdjacentHTML('beforeend', html);
    });
}
// add additional product details
if (newAboutProductAdditionalDetails) {
    newAboutProductAdditionalDetails.addEventListener('click', (e) => {
        e.preventDefault();
        const elId = document.getElementById('productAdditionalDetails');
        const html = `
            <div class="d-flex justify-content-center mt-2 additiionalProductDetailsList">
                <input class="newProductAdditionalDetailssTitle form-control" type="text" placeholder="Title" required="" />
                <p class="ms-5 me-5 lead fw-bold">:</p>
                <input class="newProductAdditionalDetailssDetail form-control" type="text" placeholder="Detail" required="" />
            </div>

        `;
        return elId.insertAdjacentHTML('beforeend', html);
    });
}

// delte color only poruct
if (deleteColorOnlyUpdateData.length) {
    [...deleteColorOnlyUpdateData].map((el) => {
        return create_event_For_close(
            `delelteNewProductDetails${el.dataset.index}${el.dataset.index2}`,
            `newMarketColorProduct${el.dataset.index}${el.dataset.index2}`
        );
    });
}
// delte size only poruct
if (deleteSizeOnlyDataUpdate.length) {
    [...deleteSizeOnlyDataUpdate].map((el) => {
        return create_event_For_close(
            `delelteNewSizeProductDetails${el.dataset.index}${el.dataset.index2}`,
            `newMarketSizeProduct${el.dataset.index}${el.dataset.index2}`
        );
    });
}

// add product details for update
if (updateMarketAboutDetails.length) {
    [...updateMarketAboutDetails].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const id = e.target.dataset.index;
            const elId = document.getElementById(`productAboutDetails${id}`);
            const html = `
                <input class="form-control aboutUpdateProduct${id} mt-2" type="text" placeholder='About' required="" />
        `;
            return elId.insertAdjacentHTML('beforeend', html);
        });
    });
}
// add additional product details
if (updateAboutProductAdditionalDetails.length) {
    [...updateAboutProductAdditionalDetails].map((el) => {
        el.addEventListener('click', (e) => {
            const id = e.target.dataset.index;
            e.preventDefault();
            const elId = document.getElementById(
                `productAdditionalDetails${id}`
            );
            console.log(e.target.dataset);
            const html = `
            <div class="d-flex justify-content-center mt-2 additiionalProductDetailsList${id}">
                <input class="updateProductAdditionalDetailssTitle${id} form-control" type="text" placeholder="Title" required="" />
                <p class="ms-5 me-5 lead fw-bold">:</p>
                <input class="updateProductAdditionalDetailssDetail${id} form-control" type="text" placeholder="Detail" required="" />
            </div>
        `;
            return elId.insertAdjacentHTML('beforeend', html);
        });
    });
}

// cancel medical market product order

// medical market cancel order
if (cancel_medical_marekt_order.length) {
    [...cancel_medical_marekt_order].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            return cancelMedicalMarketOrders(
                e.target.dataset.id,
                e.target.dataset.id2
            );
        });
    });
}

// send new quotes
if (request_quotes) {
    request_quotes.addEventListener('submit', (e) => {
        e.preventDefault();
        const productName = document.getElementById('productName').value;
        const description = document.getElementById('description').value;
        const quantity = document.getElementById('quantity').value;
        return newProductQuote(
            productName,
            description,
            quantity,
            e.target.dataset.for,
            e.target.dataset.id
        );
    });
}
// send new quotes
if (request_user_quotes) {
    request_user_quotes.addEventListener('submit', (e) => {
        e.preventDefault();
        const productName = document.getElementById('productName').value;
        const description = document.getElementById('description').value;
        const quantity = document.getElementById('quantity').value;
        const address = document.getElementById('address').value;
        return newUserProductQuote(
            productName,
            description,
            quantity,
            address,
            e.target.dataset.for,
            e.target.dataset.id
        );
    });
}

// manage quotes
if (manage_quotes) {
    manage_quotes.addEventListener('click', (e) => {
        if (e.target.id === 'cancel_quotes') {
            return cancelAQuotes(
                e.target.dataset.quoteid,
                e.target.dataset.from,
                e.target.dataset.id
            );
        }
    });
}
// manage quotes
if (manage_user_quotes) {
    manage_user_quotes.addEventListener('click', (e) => {
        if (e.target.id === 'cancel_quotes') {
            return cancelAUserQuotes(
                e.target.dataset.quoteid,
                e.target.dataset.from,
                e.target.dataset.id
            );
        }
    });
}
// update proposal
if (proposalUpdate) {
    proposalUpdate.addEventListener('click', (e) => {
        if (e.target.id === 'Accept_Proposal') {
            return updateQuotes(
                'accepted',
                e.target.dataset.proposal,
                e.target.dataset.from,
                e.target.dataset.id
            );
        }
        if (e.target.id === 'Reject_Proposal') {
            return updateQuotes(
                'rejected',
                e.target.dataset.proposal,
                e.target.dataset.from,
                e.target.dataset.id
            );
        }
        if (e.target.id === 'negotiate_Proposal') {
            return updateQuotes(
                'negotiate',
                e.target.dataset.proposal,
                e.target.dataset.from,
                e.target.dataset.id
            );
        }
    });
}

// update proposal user
if (proposalUserUpdate) {
    proposalUserUpdate.addEventListener('click', (e) => {
        if (e.target.id === 'Accept_Proposal') {
            return updateUserQuotes(
                'accepted',
                e.target.dataset.proposal,
                e.target.dataset.from,
                e.target.dataset.id
            );
        }
        if (e.target.id === 'Reject_Proposal') {
            return updateUserQuotes(
                'rejected',
                e.target.dataset.proposal,
                e.target.dataset.from,
                e.target.dataset.id
            );
        }
        if (e.target.id === 'negotiate_Proposal') {
            return updateUserQuotes(
                'negotiate',
                e.target.dataset.proposal,
                e.target.dataset.from,
                e.target.dataset.id
            );
        }
    });
}

// update optinion docut status
if (opinionSponserStatus) {
    opinionSponserStatus.addEventListener('click', (e) => {
        e.preventDefault();
        return updateOpinionDoctorStatus(e.target.dataset.id);
    });
}

if (selectOpnionSponser?.length) {
    [...selectOpnionSponser].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            return updateOpinionSelectedSponser(
                e.target.dataset.id,
                e.target.dataset.id2
            );
        });
    });
}

// update second opinion availalblity
// update schudle
if (update_seconopinion_schudles) {
    update_seconopinion_schudles.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (e.target.id === 'update_schudles') {
            const schules = await Promise.all(
                [
                    ...document.querySelectorAll(
                        `.hour${e.target.dataset.index}`
                    )
                ].map((el) => {
                    return el.value;
                })
            );
            const slots = document.getElementById(
                `slot${e.target.dataset.index}`
            ).value;
            const price = document.getElementById(
                `price${e.target.dataset.index}`
            ).value;
            return updateSecondOpinionSchudles(
                {
                    availableTime: schules,
                    slotsInHour: slots,
                    pricePerSlot: price,
                    day: e.target.dataset.index2
                },
                e.target.dataset.id
            );
        }
    });
}

// update online consultant status
if (update_secons_opinion_status) {
    update_secons_opinion_status.addEventListener('change', (e) => {
        e.preventDefault();
        if (e.target.id === 'update_status') {
            return updateSecondOpinionVendorBookingStatus(
                e.target.value,
                update_secons_opinion_status.dataset.id,
                e.target.dataset.id
            );
        }
    });
}

if (updateOpinorRequest) {
    updateOpinorRequest.addEventListener('change', (e) => {
        e.preventDefault();
        return updateOpinionRequestData(e.target.value, e.target.dataset.id);
    });
}

// create new homecare root service
if (create_new_oneus_blog_categories_module) {
    create_new_oneus_blog_categories_module.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', document.getElementById('name').value);
        form.append(
            'description',
            document.getElementById('description').value
        );
        form.append(
            'bannerImage',
            document.getElementById('serviceImage').files[0]
        );
        form.append('statusType', 'create');
        return createOneUsBlogsCategoreis(form);
    });
}

// update deaddiction root service
if (update_oneus_blog_categories_module) {
    update_oneus_blog_categories_module.addEventListener('submit', (e) => {
        e.preventDefault();
        if (e.target.id === 'update_service') {
            const form = new FormData();
            form.append(
                'name',
                document.getElementById(`name-${e.target.dataset.index}`).value
            );
            form.append(
                'description',
                document.getElementById(`description-${e.target.dataset.index}`)
                    .value
            );

            if (
                !!document.getElementById(
                    `serviceImage-${e.target.dataset.index}`
                ).files[0]
            ) {
                form.append(
                    'bannerImage',
                    document.getElementById(
                        `serviceImage-${e.target.dataset.index}`
                    ).files[0]
                );
            }
            form.append('statusType', 'update');
            return updateOneUsBlogsService(form, e.target.dataset.service);
        }
    });
}



// create new videos
if (create_new_oneus_video) {
    create_new_oneus_video.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('title', document.getElementById('title').value);
        form.append(
            'description',
            document.getElementById('description').value
        );
        form.append('categorie', document.getElementById('categorie').value);
        form.append('videos', document.getElementById('videos').files[0]);
        form.append('statusType', 'create');
        return createOneUsVideos(form);
    });
}
// create new homecare root service
if (create_new_oneus_blogs) {
    create_new_oneus_blogs.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('title', document.getElementById('title').value);
        form.append(
            'description',
            document.getElementById('description').value
        );
        form.append('categorie', document.getElementById('categorie').value);
        form.append(
            'bannerImage',
            document.getElementById('serviceImage').files[0]
        );
        form.append('statusType', 'create');
        return createOneUsBlogs(form);
    });
}
// update deaddiction root service
if (update_oneus_blog) {
    update_oneus_blog.addEventListener('submit', (e) => {
        e.preventDefault();
        if (e.target.id === 'update_service') {
            const form = new FormData();
            form.append(
                'title',
                document.getElementById(`title-${e.target.dataset.index}`).value
            );
            form.append(
                'description',
                document.getElementById(`description-${e.target.dataset.index}`)
                    .value
            );
            form.append(
                'categorie',
                document.getElementById(`categorie-${e.target.dataset.index}`)
                    .value
            );

            if (
                !!document.getElementById(
                    `serviceImage-${e.target.dataset.index}`
                ).files[0]
            ) {
                form.append(
                    'bannerImage',
                    document.getElementById(
                        `serviceImage-${e.target.dataset.index}`
                    ).files[0]
                );
            }
            form.append('statusType', 'update');
            return updateOneUsBlogs(form, e.target.dataset.service);
        }
    });
}

// update deaddiction root service
if (update_oneus_video) {
    update_oneus_video.addEventListener('submit', (e) => {
        e.preventDefault();
        if (e.target.id === 'update_service') {
            const form = new FormData();
            form.append(
                'title',
                document.getElementById(`title-${e.target.dataset.index}`).value
            );
            form.append(
                'description',
                document.getElementById(`description-${e.target.dataset.index}`)
                    .value
            );
            form.append(
                'categorie',
                document.getElementById(`categorie-${e.target.dataset.index}`)
                    .value
            );

            if (
                !!document.getElementById(`videos-${e.target.dataset.index}`)
                    .files[0]
            ) {
                form.append(
                    'videos',
                    document.getElementById(`videos-${e.target.dataset.index}`)
                        .files[0]
                );
            }
            form.append('statusType', 'update');
            return updateOneUsVideos(form, e.target.dataset.service);
        }
    });
}

// create new one us categories
if (create_new_oneus_video_categories_module) {
    create_new_oneus_video_categories_module.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', document.getElementById('name').value);
        form.append(
            'description',
            document.getElementById('description').value
        );
        form.append(
            'bannerImage',
            document.getElementById('serviceImage').files[0]
        );
        form.append('statusType', 'create');
        return createOneUsVideosCategoreis(form);
    });
}

// update deaddiction root service
if (update_oneus_video_categories_module) {
    update_oneus_video_categories_module.addEventListener('submit', (e) => {
        e.preventDefault();
        if (e.target.id === 'update_service') {
            const form = new FormData();
            form.append(
                'name',
                document.getElementById(`name-${e.target.dataset.index}`).value
            );
            form.append(
                'description',
                document.getElementById(`description-${e.target.dataset.index}`)
                    .value
            );

            if (
                !!document.getElementById(
                    `serviceImage-${e.target.dataset.index}`
                ).files[0]
            ) {
                form.append(
                    'bannerImage',
                    document.getElementById(
                        `serviceImage-${e.target.dataset.index}`
                    ).files[0]
                );
            }
            form.append('statusType', 'update');
            return updateOneUsVideosService(form, e.target.dataset.service);
        }
    });
}

// update video status
if (update_oneus_video_status) {
    update_oneus_video_status.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.id === 'accept') {
            return updateOneUsVideoStatus('accepted', e.target.dataset.id);
        } else if (e.target.id === 'reject') {
            return updateOneUsVideoStatus('rejected', e.target.dataset.id);
        }
    });
}
// update video status
if (update_oneus_blog_status) {
    update_oneus_blog_status.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.id === 'accept') {
            return updateOneUsBlogStatus('accepted', e.target.dataset.id);
        } else if (e.target.id === 'reject') {
            return updateOneUsBlogStatus('rejected', e.target.dataset.id);
        }
    });
}
// update video status
if (update_oneus_video_status) {
    update_oneus_video_status.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.id === 'accept') {
            return updateOneUsVideoStatus('accepted', e.target.dataset.id);
        } else if (e.target.id === 'reject') {
            return updateOneUsVideoStatus('rejected', e.target.dataset.id);
        }
    });
}

// add categorie data
if (add_doctor_sub_categories) {
    add_doctor_sub_categories.addEventListener('click', (e) => {
        e.preventDefault();
        const elId = document.getElementById('addDoctorSubCateGories');
        const html = `<input class="form-control newSpecialist mt-2" type="text" placeholder="Features" required="">`;
        return elId.insertAdjacentHTML('beforeend', html);
    });
}

// add sub categorie in docotor specialist
if (addUpdatedSubCategorie.length) {
    [...addUpdatedSubCategorie].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const elId = document.getElementById(
                `addDoctorSubCateGories-${e.target.dataset.index}`
            );
            const html = `<input class="form-control newSpecialist${e.target.dataset.index} mt-2" type="text" placeholder="Features" required="">`;
            return elId.insertAdjacentHTML('beforeend', html);
        });
    });
}

// create new homecare root service
if (create_new_doctory_categorie) {
    create_new_doctory_categorie.addEventListener('submit', async (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', document.getElementById('name').value);
        form.append(
            'description',
            document.getElementById('description').value
        );
        form.append(
            'bannerImage',
            document.getElementById('serviceImage').files[0]
        );
        const specialist = await Promise.all(
            [...document.querySelectorAll('.newSpecialist')].map(
                (el) => el.value
            )
        );
        form.append('specialists', specialist);
        form.append('statusType', 'create');
        return createDoctorCategorie(form);
    });
}

// create new homecare root service
if (update_doctor_category) {
    update_doctor_category.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (e.target.id === 'update_service') {
            const form = new FormData();
            form.append(
                'name',
                document.getElementById(`name-${e.target.dataset.index}`).value
            );
            form.append(
                'description',
                document.getElementById(`description-${e.target.dataset.index}`)
                    .value
            );
            const specialist = await Promise.all(
                [
                    ...document.querySelectorAll(
                        `.newSpecialist${e.target.dataset.index}`
                    )
                ].map((el) => {
                    return { name: el.value, id: el.dataset.id };
                })
            );
            console.log(specialist);
            form.append('specialists', JSON.stringify(specialist));
            if (
                !!document.getElementById(
                    `serviceImage-${e.target.dataset.index}`
                ).files[0]
            ) {
                form.append(
                    'bannerImage',
                    document.getElementById(
                        `serviceImage-${e.target.dataset.index}`
                    ).files[0]
                );
            }
            form.append('statusType', 'update');
            return updateDoctorCategories(form, e.target.dataset.service);
        }
    });
}