import 'core-js/actual';
import 'regenerator-runtime/runtime.js';

import axios from 'axios';
// ============================================================
// import controller
import {
    createBloodBank,
    updateBloodBank,
    bloodManage,
    myAdvertisement,
    deleteBloodBankAd
} from './controllers/bloodBankControllers';

import {
    postNewJob,
    updateMyJob,
    deleteMyJob
} from './controllers/jobControllers';

import {
    createNewMarketProduct,
    updateMarketProduct,
    updateMarketProductOrderStatus,
    updateMarketProductQuoteStatus,
    updateMedicalMarket
} from './controllers/medicalMarketControllers';
update_medical_product;

import {
    createHomcecare,
    updateHomecare,
    createHomecareServices,
    updateHomecareService,
    manageFacilities,
    homecareStatusUpdate
} from './controllers/homecareControllers';

import {
    createDeaddictionServices,
    updateDeaddiction,
    updateDeaddictionService,
    manageDeaddictionFacilities,
    deaddictionStatusUpdate
} from './controllers/deaddictionControllers';

import { logMeout } from './controllers/authControllers';
import {
    createNewOpticalProduct,
    updateOpticals,
    updateOpticalProduct,
    updateOpticalProductOrderStatus,
    updateOpticalShowRoomStatus
} from './controllers/opticalsControllers';

import {
    createNewHearingAidProduct,
    updateHearingAid,
    updateHearingAidHospitalBookingStatus,
    updateHearingAidProduct,
    updateHearingaidProductOrderStatus
} from './controllers/hearingaidControllers';
import {
    studyAbroadCourseUpdate,
    updateStudyAbroad,
    updateStudyAbroadcollegeDetails,
    updateStudyAbroadFacilities
} from './controllers/studyAbroadControllers';
import {
    createNewOrganAvailablity,
    hospitalDoctorManagement,
    hospitalFacilityManagement,
    hospitalImages,
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
    createNewDiffProduct,
    updateDifferentlyAbled,
    updateNewDiffProduct,
    updateDiffOrderProductOrderStatus
} from './controllers/differentlyAbledControllers';
import {
    addLaboratoryImages,
    createNewLaboratoryFacilities,
    manageLaboratoryTest,
    removeLaboratoryImages,
    updateLaboratory,
    updateLaboratoryBooking
} from './controllers/laboratoryControllers';
import {
    addParmacyMedicines,
    updatePharmacy,
    updatePharmacyBooking
} from './controllers/pharmacyControllers.';
import swal from 'sweetalert';
import {
    cancelAQuotes,
    newProductQuote,
    updateQuotes
} from './controllers/quotesControllers';

// ============================================================
// import dom

// bloodbank
const create_bloodbank = document.getElementById('create_bloodbank');
const update_bloodbank = document.getElementById('update_bloodBank');
const add_new_blood = document.getElementById('add_new_blood');
const update_blood = document.getElementById('update_blood');
const request_quotes = document.getElementById('request_quotes');
const manage_quotes = document.getElementById('manage_quotes');
const proposalUpdate = document.getElementById('proposalUpdate');
const createNewJob = document.getElementById('createNewJob');
const updateJob = document.getElementById('updateJob');
const jobCategory = document.getElementById('jobCategory');
const blood_bank_deletejob = document.querySelector('#manage_data');
const blood_bank_newadvertisement = document.querySelector(
    '#createNewAdvertisement'
);
const bloodbank_manage_ads = document.getElementById('manageAds');
const bloodbank_update_ads = document.getElementById('updateAdvertisement');
const logoutM = document.getElementById('logoutM');
const logoutW = document.getElementById('logoutW');

// medical market
const create_medical_market = document.getElementById('create_medical_market');
const update_market = document.getElementById('update_market');
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

// homecare
const create_homecare = document.getElementById('create_homecare');
const update_homecare = document.getElementById('update_homecare');
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

// homecare
// const create_homecare = document.getElementById('create_homecare');
const update_deaddiction = document.getElementById('update_deaddiction');
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

//  opticals
const update_opticals = document.getElementById('update_opticals');
const add_new_Opticals_color_details = document.getElementById(
    'add_new_Opticals_color_details'
);
const add_update_opticals_product_details = document.querySelectorAll(
    '.add_update_opticals_product_details'
);
const addOpticalsProductSubUpdateDetails = document.querySelectorAll(
    '.addOpticalsProductSubUpdateDetails'
);
const deleteOpticalsSubDetails = document.querySelectorAll(
    '.deleteOpticalsSubDetails'
);
const create_new_optical_product = document.getElementById(
    'create_new_optical_product'
);
// const deleteOpticalsSubDetails = document.getElementById(
//     'deleteOpticalsSubDetails'
// );
const deleteUpdatedSubColorDetailsOpticals = document.querySelectorAll(
    '.deleteUpdatedSubColorDetailsOpticals'
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
const update_optical_showroom_booking = document.getElementById(
    'update_optical_showroom_booking'
);

// hearinga aid
const update_hearingaid = document.getElementById('update_hearingaid');
const update_hearingaid_vendor_hospital_booking_status =
    document.getElementById('update_hearingaid_vendor_hospital_booking_status');
const add_new_features = document.getElementById('add_new_features');
const add_update_features = document.querySelectorAll('.add_update_features');
const add_new_hearingaid_product_details = document.getElementById(
    'add_new_hearingaid_product_details'
);
const add_new_hearingaid_color_details = document.getElementById(
    'add_new_hearingaid_color_details'
);
const addHearingAidProductSubUpdateDetails = document.querySelectorAll(
    '.addHearingAidProductSubUpdateDetails'
);
const add_update_hearingaid_product_details = document.querySelectorAll(
    '.add_update_hearingaid_product_details'
);
const deleteUpdatedSubColorDetails = document.querySelectorAll(
    '.deleteUpdatedSubColorDetails'
);
const deleteUpdateProductDetails = document.querySelectorAll(
    '.deleteUpdateProductDetails'
);
const deleteHearingaidSubDetails = document.querySelectorAll(
    '.deleteHearingaidSubDetails'
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
const update_vendor_diffable_product_status = document.getElementById(
    'update_vendor_diffable_product_status'
);
const addHearingaAidProductUpdatedDetails = document.querySelectorAll(
    '.addHearingaAidProductUpdatedDetails'
);
// differently ablie product
const update_differently_abled = document.getElementById(
    'update_differently_abled'
);
const newProductType = document.getElementById('newProductType');
const updateProdutType = document.querySelectorAll('.updateProdutType');
const create_new_differently_product = document.getElementById(
    'create_new_differently_product'
);
const update_differenly_product = document.getElementById(
    'update_differenly_product'
);

// study abroad
const update_studyabroad = document.getElementById('update_studyabroad');
const update_studyabroad_collegedetails = document.getElementById(
    'update_studyabroad_collegedetails'
);
const addSport = document.getElementById('addSport');
const addPgCourse = document.getElementById('addPgCourse');
const ugCourses = document.getElementById('ugCourses');
const addyear = document.getElementById('addyear');
const update_studyabroad_coursedetails = document.getElementById(
    'update_studyabroad_coursedetails'
);
const addEmbassy = document.getElementById('addEmbassy');
const update_studyabroad_facilities = document.getElementById(
    'update_studyabroad_facilities'
);

// hospital
// pacakges
const update_hospital = document.getElementById('update_hospital');
const addOrganDonationDocs = document.getElementById('organDonation');
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
// hospital services
const add_hospital_service = document.getElementById('add_hospital_service');
const update_hospital_service = document.getElementById(
    'update_hospital_service'
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
// ============================================================
// ============================================================
// ============================================================
// pharmacy
const update_pharmacy = document.getElementById('update_pharmacy');
const update_pharmacy_vendor_status = document.getElementById(
    'update_pharmacy_vendor_status'
);
const add_new_medicines = document.getElementById('add_new_medicines');
// ============================================================
// create models
const create_event_For_close = (id, id2) => {
    document.getElementById(id).addEventListener('click', (e) => {
        document.getElementById(id2).remove();
    });
};
// update blood bank
if (update_bloodbank) {
    update_bloodbank.addEventListener('submit', (e) => {
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

        return updateBloodBank(
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
            aboutUs
        );
    });
}

// add new blood
if (add_new_blood) {
    add_new_blood.addEventListener('submit', (e) => {
        e.preventDefault();
        const bloodType = document.getElementById('newBloodGroup').value;
        const availableUnits = document.getElementById('newUnit').value;
        return bloodManage(bloodType, availableUnits, 'manage');
    });
}

// update blood
if (update_blood) {
    update_blood.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.id === 'updateBlood') {
            const bloodType = document.getElementById(
                `bloodType-${e.target.dataset.index}`
            ).value;
            const unit = document.getElementById(
                `bloodUnit-${e.target.dataset.index}`
            ).value;
            const serviceId = e.target.dataset.bloodid;
            return bloodManage(bloodType, unit, 'manage', serviceId);
        }
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
            e.target.dataset.for
        );
    });
}

// manage quotes
if (manage_quotes) {
    manage_quotes.addEventListener('click', (e) => {
        if (e.target.id === 'cancel_quotes') {
            return cancelAQuotes(
                e.target.dataset.quoteid,
                e.target.dataset.from
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
                e.target.dataset.from
            );
        }
        if (e.target.id === 'Reject_Proposal') {
            return updateQuotes(
                'rejected',
                e.target.dataset.proposal,
                e.target.dataset.from
            );
        }
        if (e.target.id === 'negotiate_Proposal') {
            return updateQuotes(
                'negotiate',
                e.target.dataset.proposal,
                e.target.dataset.from
            );
        }
    });
}

if (createNewJob) {
    // post a new job
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
            e.target.dataset.job,
            e.target.dataset.from
        );
    });
}

// delet a job
if (blood_bank_deletejob) {
    blood_bank_deletejob.addEventListener('click', (e) => {
        if (e.target.id === 'deletejob') {
            return deleteMyJob(e.target.dataset.job, e.target.dataset.from);
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
            (el) => `<option value="${el}">${el}</option>`
        );

        speciality.insertAdjacentHTML(
            'beforeend',
            '<option> -- Select your Speciality -- </option>' + options.join('')
        );
    });
}

// create new advertisement
if (blood_bank_newadvertisement) {
    blood_bank_newadvertisement.addEventListener('submit', (e) => {
        e.preventDefault();

        let form = new FormData();
        form.append('startDate', document.getElementById('startDate').value);
        form.append('endDate', document.getElementById('endDate').value);
        form.append('latitude', document.getElementById('latitude').value);
        form.append('longitude', document.getElementById('longitude').value);
        form.append(
            'advertisement',
            document.getElementById('advertisement').files[0]
        );
        form.append('statusType', 'create');

        return myAdvertisement(form, 'create', e.target.dataset.advertisement);
    });
}

// manage ads
if (bloodbank_manage_ads) {
    bloodbank_manage_ads.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.id === 'delete_ads') {
            return deleteBloodBankAd(e.target.dataset.ads);
        }
    });
}
// update ads
if (bloodbank_update_ads) {
    bloodbank_update_ads.addEventListener('submit', (e) => {
        e.preventDefault();

        let form = new FormData();
        form.append(
            'advertisement',
            document.getElementById('advertisement').files[0]
        );
        form.append('statusType', 'update');

        return myAdvertisement(form, 'update', e.target.dataset.advertisement);
    });
}

// logout
if (logoutM || logoutW) {
    logoutM.addEventListener('click', (e) => {
        return logMeout();
    });
    logoutW.addEventListener('click', (e) => {
        return logMeout();
    });
}

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// medical market

// update blood bank
if (update_market) {
    update_market.addEventListener('submit', (e) => {
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

        return updateMedicalMarket({
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
            aboutUs
        });
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
        return createNewMarketProduct(obj);
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
            return updateMarketProductOrderStatus(status, e.target.dataset.id);
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
            return updateMarketProductQuoteStatus(status, e.target.dataset.id);
        }
    });
}
// negotiate response
if (negotiateResponse.length) {
    [...negotiateResponse].map((el) => {
        el.addEventListener('click', (e) => {
            return updateMarketProductQuoteStatus(
                'negotiate',
                e.target.dataset.id
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

        return updateMarketProduct(obj, e.target.dataset.id);
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
if (addColorOnlyProductDetailsWR.length) {
    [...addColorOnlyProductDetailsWR].map((el) => {
        return addColorOnlyMarketProductForUpdate(
            `add_update_market_o_color${el.dataset.index}`,
            `productDetails${el.dataset.index}`,
            el.dataset.index
        );
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
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// homecare

// update homecare
if (update_homecare) {
    update_homecare.addEventListener('submit', (e) => {
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
        const jobType = document.getElementById('jobType').value;
        const city = document.getElementById('city').value;
        const aboutUs = document.getElementById('aboutUs').value;

        return updateHomecare(
            contactPersonName,
            contactPersonPhone,
            Phone,
            Landline,
            latitude,
            longtitude,
            openTime,
            closeTime,
            Address,
            jobType,
            city,
            aboutUs
        );
    });
}

// create homecare service
if (create_homecare_service) {
    create_homecare_service.addEventListener('submit', async (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append(
            'bannerImage',
            document.getElementById('serviceImage').files[0]
        );
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
            Object.entries(document.getElementById('serviceImages').files).map(
                ([key, value]) => {
                    return form.append('serviceImages', value);
                }
            )
        );

        form.append('latitude', document.getElementById('latitude').value);
        form.append('longitude', document.getElementById('longitude').value);
        form.append('statusType', 'create');
        return createHomecareServices(form);
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
                    console.log(value);
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
            console.log(e.target.dataset.serviceid);
            return updateHomecareService(form, e.target.dataset.serviceid);
        }
    });
}

// create facilities
if (create_homecare_facilities) {
    console.log('e.target');
    create_homecare_facilities.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        return manageFacilities(title, description, 'manage');
    });
}

// manage homecare faciliteis
if (manage_homecare_facilities) {
    manage_homecare_facilities.addEventListener('click', (e) => {
        if (e.target.id === 'update_facilities') {
            console.log('a');
            const title = document.getElementById(
                `title-${e.target.dataset.index}`
            ).value;
            const description = document.getElementById(
                `description-${e.target.dataset.index}`
            ).value;

            return manageFacilities(
                title,
                description,
                'manage',
                e.target.dataset.facility
            );
        }
    });
}

// set status of homecare booking
if (homecare_booking_status) {
    homecare_booking_status.addEventListener('change', (e) => {
        // alert(e.target.classList.contains);
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
// deaddiction
// if (create_deaddiction) {
//     create_deaddiction.addEventListener('submit', (e) => {
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

//         return createDeaddiction(
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

// update homecare
if (update_deaddiction) {
    update_deaddiction.addEventListener('submit', (e) => {
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
        const aboutUs = document.getElementById('aboutUs').value;
        return updateDeaddiction(
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
            aboutUs,
            e.target.dataset.deaddictionid
        );
    });
}

// create homecare service
if (create_deaddiction_service) {
    create_deaddiction_service.addEventListener('submit', async (e) => {
        e.preventDefault();
        const form = new FormData();

        form.append(
            'serviceName',
            document.getElementById('serviceName').value
        );
        form.append(
            'description',
            document.getElementById('description').value
        );
        form.append('city', document.getElementById('city').value);
        form.append('priceTo', document.getElementById('endPrice').value);
        form.append('priceFrom', document.getElementById('startPrice').value);
        form.append('image', document.getElementById('image').files[0]);
        await Promise.all(
            Object.entries(document.getElementById('imageGallery').files).map(
                ([key, value]) => {
                    return form.append('imageGallery', value);
                }
            )
        );

        form.append('latitude', document.getElementById('latitude').value);
        form.append('longitude', document.getElementById('longitude').value);
        form.append('statusType', 'create');
        return createDeaddictionServices(form);
    });
}

// update homecare service
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
                'priceTo',
                document.getElementById('endPrice-' + e.target.dataset.index)
                    .value
            );
            form.append(
                'priceFrom',
                document.getElementById('startPrice-' + e.target.dataset.index)
                    .value
            );
            form.append(
                'city',
                document.getElementById('city-' + e.target.dataset.index).value
            );
            console.log(
                document.getElementById('city-' + e.target.dataset.index).value
            );
            await Promise.all(
                Object.entries(
                    document.getElementById(
                        'imageGallery-' + e.target.dataset.index
                    ).files
                ).map(([key, value]) => {
                    console.log(value);
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

// create facilities
if (create_deaddiction_facilities) {
    create_deaddiction_facilities.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('hi');
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        return manageDeaddictionFacilities(title, description, 'manage');
    });
}

// manage homecare faciliteis
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
                e.target.dataset.facility
            );
        }
    });
}

// set status of homecare booking
if (deaddiction_booking_status) {
    deaddiction_booking_status.addEventListener('change', (e) => {
        // alert(e.target.classList.contains);
        if (e.target.classList.contains('update_status')) {
            const status = document.getElementById(
                `updateStatus-${e.target.dataset.index}`
            ).value;
            return deaddictionStatusUpdate(
                status,
                e.target.dataset.apply,
                e.target.dataset.center
            );
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
        const aboutUs = document.getElementById('aboutUs').value;

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
            aboutUs,
            e.target.dataset.opticalsid
        );
    });
}

const add_color_details_opticals = (fors, to, id) => {
    document.getElementById(fors).addEventListener('click', (e) => {
        e.preventDefault();
        const ids = Date.now();
        const html = `
        <div id='newOpticalsSubProductDetails${id}${ids}' class='newOpticalsSubColorDetails${id} m-2 p-2' data-indexs=${ids}>
            <div class="d-flex justify-content-end">
             <a class="btn btn-danger" id='delelteNewSubProductDetails${id}${ids}' data-index=${id} data-indexs=${ids}>Delete</a>
            </div>
            
                <div class="col-md-12">
                    <label class="form-label" for="newSize${id}${ids}">Size<span class="text-danger">*</span></label>
                     <select class="form-select border border-2 bg-li" id="newSize${id}${ids}" required>
                        <option>-- Select Frame Size -- </option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
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
            `newOpticalsSubProductDetails${id}${ids}`
        );
    });
};

//  add color details in opticals
if (add_new_Opticals_color_details) {
    add_new_Opticals_color_details.addEventListener('click', (e) => {
        e.preventDefault();
        const addColor = document.getElementById('newProductDetails');
        const id = Date.now();
        const html = `
        <div id='newOpticalsProductDetails${id}' class='newOpticalsSubDetails border m-2 p-3' data-index=${id}>
            <div class='d-flex justify-content-end position-relative'>
                <a class="btn btn-danger" id='delelteNewProductDetails${id}' data-index=${id}>Delete</a>
            </div>
            <div class="col-md-12">
                    <label class="form-label" for="newColor${id}">Color<span class="text-danger">*</span></label>
                    <input class="form-control" id="newColor${id}" type="text" placeholder="Color" required="" />
            </div>
            <div class="col-md-12 mt-2">
                    <label class="form-label" for="newProductImage${id}">Optical Image<span class="text-danger">*</span></label>
                    <input class="form-control" id="newProductImage${id}" type="file"  required="" accept="image/*" required />
                </div>
            <div class="col-md-12 mt-2">
                    <label class="form-label" for="newFrameImage${id}">Optical Tranparant Image(This will be used for User live demo)<span class="text-danger">*</span></label>
                    <input class="form-control" id="newFrameImage${id}" type="file"  required="" accept="image/png" required />
                </div>
                <div class="col-md-12">
                    <label class="form-label" for="newProductImageGallery${id}">Product Image Gallery<span class="text-danger">*</span></label>
                    <input class="form-control" id="newProductImageGallery${id}" type="file" multiple required="" required accept="image/*"  />
                </div>
            <div id="OpticalsSubDeatail${id}">
            </div>
            <div class='d-flex justify-content-center mt-2'>
                <button class="btn btn-success" type="button" id="addOpticalsSubDeatail${id}"  >Add Details</button>
            </div>
        </div>
        `;
        addColor.insertAdjacentHTML('beforeend', html);
        create_event_For_close(
            `delelteNewProductDetails${id}`,
            `newOpticalsProductDetails${id}`
        );
        return add_color_details_opticals(
            `addOpticalsSubDeatail${id}`,
            `OpticalsSubDeatail${id}`,
            id
        );
    });
}

const update_color_details_opticals = (fors, to, id, ids) => {
    document.getElementById(fors).addEventListener('click', (e) => {
        e.preventDefault();
        const id3 = Date.now();
        const html = `
        <div id='updateOpticalsSubProductDetails${id}${ids}${id3}' class='updateOpticalsSubColorDetails${id}${ids} m-2 p-2' data-index=${id} data-index2=${ids} data-index3=${id3}>
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
            `updateOpticalsSubProductDetails${id}${ids}${id3}`
        );
    });
};

// add product detail value for update
if (add_update_opticals_product_details.length) {
    [...add_update_opticals_product_details].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const addColor = document.getElementById(
                `updateProductUpdateDetails${e.target.dataset.index}`
            );
            const index2 = Date.now(),
                index = e.target.dataset.index;
            const html = `
        <div id='updateopticalsProductDetails${index}${index2}' class='newopticalsSubUpdateDetails${index} border m-2 p-3' data-index=${index} data-index2=${index2}>
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
                    <label class="form-label" for="newFrameImage${index}${index2}">Product Image<span class="text-danger">*</span></label>
                    <input class="form-control" id="newFrameImage${index}${index2}" type="file"  required="" accept="image/*" required />
            </div>
            <div class="col-md-12">
                    <label class="form-label" for="newProductImageGallery${index}${index2}">Product Image Gallery<span class="text-danger">*</span></label>
                    <input class="form-control" id="newProductImageGallery${index}${index2}" type="file" multiple required="" required accept="image/*"  />
            </div>
            <div id="opticalsUpdateSubDeatail${index}${index2}">
            </div>
            <div class='d-flex justify-content-center mt-2'>
                <button class="btn btn-success" type="button" id="addopticalsUpdateSubDeatail${index}${index2}"  >Add Details</button>
            </div>
        </div>
        `;
            addColor.insertAdjacentHTML('beforeend', html);
            create_event_For_close(
                `delelteupdateProductDetails${index}${index2}`,
                `updateopticalsProductDetails${index}${index2}`
            );
            return update_color_details_opticals(
                `addopticalsUpdateSubDeatail${index}${index2}`,
                `opticalsUpdateSubDeatail${index}${index2}`,
                index,
                index2
            );
        });
    });
}

if (addOpticalsProductSubUpdateDetails.length) {
    [...addOpticalsProductSubUpdateDetails].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const { index, index2 } = e.target.dataset,
                index3 = Date.now();

            const html = `
        <div id='updateOpticalsSubProductDetails${index}${index2}${index3}' class='updateOpticalsSubColorDetails${index}${index2} m-2 p-2' data-index=${index} data-index2=${index2} data-index3=${index3}>
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
                `OpticalsUpdateSubDeatail${index}${index2}`
            );
            elId.insertAdjacentHTML('beforeend', html);
            return create_event_For_close(
                `delelteNewSubProductDetails${index}${index2}${index3}`,
                `updateOpticalsSubProductDetails${index}${index2}${index3}`
            );
        });
    });
}

// delete add old data
if (deleteOpticalsSubDetails?.length) {
    [...deleteOpticalsSubDetails].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();

            document
                .getElementById(
                    `updateOpticalsSubProductDetails${e.target.dataset.index}${e.target.dataset.index2}${e.target.dataset.index3}`
                )

                .remove();
        });
    });
}

// delete add old data
if (deleteUpdatedSubColorDetailsOpticals?.length) {
    [...deleteUpdatedSubColorDetailsOpticals].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            document
                .getElementById(
                    `updateopticalsProductDetails${e.target.dataset.index}${e.target.dataset.index2}`
                )
                .remove();
        });
    });
}

// create new product
if (create_new_optical_product) {
    create_new_optical_product.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('newName').value;
        const glassType = document.getElementById('glassType').value;
        const glassGenderType = document.getElementById('genderType').value;
        const glassRimType = document.getElementById('rimType').value;
        const materiralType = document.getElementById('materialType').value;
        const frameType = document.getElementById('frameType').value;
        const description = document.getElementById('newdescription').value;

        const productDetailList = document.querySelectorAll(
            '.newOpticalsSubDetails'
        );
        const productDetails = await Promise.all(
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
                imageForm.append(
                    'frame',
                    document.getElementById(`newFrameImage${el.dataset.index}`)
                        .files[0]
                );
                console.log(
                    document.getElementById(`newFrameImage${el.dataset.index}`)
                        .files[0]
                );
                imageForm.append('imageStatus', 'create');
                const res = await axios({
                    method: 'POST',
                    url: '/api/v1/opticals/get-images-for-opticals',
                    data: imageForm
                });
                if (res.data.status !== 'Success') {
                    return swal(
                        'Warning',
                        'Something went wrong while processing your request.',
                        'error'
                    );
                }

                obj.bannerImage = res.data.image;
                obj.imageGallery = res.data.imageGallery;
                obj.frameImage = res.data.frame;
                obj.subDetails = await Promise.all(
                    [
                        ...document.querySelectorAll(
                            `.newOpticalsSubColorDetails${el.dataset.index}`
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

        return createNewOpticalProduct({
            name,
            glassType,
            glassGenderType,
            glassRimType,
            materiralType,
            frameType,
            productDetails,
            description,
            statusType: 'create'
        });
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
            const frameType = document.getElementById(`frameType-${key}`).value;
            const glassRimType = document.getElementById(
                `glassRimType-${key}`
            ).value;
            const materiralType = document.getElementById(
                `updateMaterialType-${key}`
            ).value;
            const description = document.getElementById(
                `updateDescription-${key}`
            ).value;
            const productDetailList = document.querySelectorAll(
                `.newopticalsSubUpdateDetails${key}`
            );
            console.log(productDetailList);
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
                    imageForm.append(
                        'frame',
                        document.getElementById(
                            `newFrameImage${el.dataset.index}${el.dataset.index2}`
                        ).files[0]
                    );
                    imageForm.append('imageStatus', 'update');
                    const res = await axios({
                        method: 'POST',
                        url: '/api/v1/opticals/get-images-for-opticals',
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
                    obj.frameImage = res.data.frame;
                    obj.subDetails = [];
                    await Promise.all(
                        [
                            ...document.querySelectorAll(
                                `.updateOpticalsSubColorDetails${el.dataset.index}${el.dataset.index2}`
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
            return updateOpticalProduct(
                {
                    name,
                    glassType,
                    glassGenderType,
                    frameType,
                    materiralType,
                    productDetails,
                    glassRimType,
                    statusType: 'update',
                    description
                },
                e.target.dataset.optical
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
            return updateOpticalProductOrderStatus(status, e.target.dataset.id);
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
            return updateOpticalShowRoomStatus(status, e.target.dataset.id);
        }
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
        return updateNewDiffProduct(form, e.target.dataset.id);
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
        return createNewDiffProduct(form);
    });
}

// update opticals
if (update_hearingaid) {
    update_hearingaid.addEventListener('submit', (e) => {
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
        const aboutUs = document.getElementById('aboutUs').value;

        const city = document.getElementById('city').value;
        let [batteryChanging, noiceFixing, cleaningCharge] = [undefined];
        if (document.getElementById('batteryChanging')) {
            batteryChanging = document.getElementById('batteryChanging').value;
            noiceFixing = document.getElementById('noiceFixing').value;
            cleaningCharge = document.getElementById('cleaningCharge').value;
        }
        return updateHearingAid(
            {
                name: contactPersonName,
                phone: contactPersonPhone,
                centerPhone: Phone,
                centerLandLine: Landline,
                latitude: latitude,
                longtitude: longtitude,
                address: Address,
                openTime,
                city: city,
                closeTime,
                batteryChanging,
                noiceFixing,
                cleaningCharge,
                aboutUs
            },
            e.target.dataset.hearingid
        );
    });
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
                    e.target.dataset.id
                );
            }
        }
    );
}

// add new features
if (add_new_features) {
    add_new_features.addEventListener('click', (e) => {
        e.preventDefault();
        const html = `<input class="form-control newFeatures mt-2" type="text" placeholder="Features" required="">`;
        const elId = document.getElementById('newFeatures');
        return elId.insertAdjacentHTML('beforeend', html);
    });
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
}

// delete add old data
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
                e.target.dataset.id
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
        const productDetails = await Promise.all(
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

                return obj;
            })
        );

        return createNewHearingAidProduct({
            productName,
            description,
            features,
            productType,
            productDetails,
            statusType: 'create'
        });
    });
}

// update study abroad
if (update_studyabroad) {
    update_studyabroad.addEventListener('submit', (e) => {
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
        const aboutUs = document.getElementById('aboutUs').value;

        return updateStudyAbroad(
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
            aboutUs
        );
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

        return updateStudyAbroadcollegeDetails(form);
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
// add pg course
if (addPgCourse) {
    addPgCourse.addEventListener('click', (e) => {
        const html = `<input class="form-control mb-2 bg-li postGraduateCourses" id="uniType" type="text" placeholder="Post graduation course">`;
        const idEl = document.getElementById('addPGCourseText');
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
        return studyAbroadCourseUpdate({
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
        });
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
        return updateStudyAbroadFacilities({
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
        });
    });
}

// add file uploading option for pdf
if (addOrganDonationDocs) {
    addOrganDonationDocs.addEventListener('change', (e) => {
        e.preventDefault();
        const organDonation = e.target.checked;
        if (organDonation) {
            const checkData = !!document.getElementById('organDonationDoc');
            if (!checkData) {
                const elId = document.getElementById('organ_donation_licence');
                const html = `
                <div class='form-control'>
                    <label class="col-form-label fw-bold" for="Hospital Sub Type">Upload Organ Donation Licence :</label>
                    <input class="form-control" id="organDonationDoc" type="file" value="option2">
                </div>
            `;

                return elId.insertAdjacentHTML('beforeend', html);
            }
        }
    });
}
if (update_hospital) {
    // update hospital package
    update_hospital.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', document.getElementById('contactPerson').value);
        form.append(
            'phone',
            document.getElementById('contactpersonPhone').value
        );
        form.append('centerPhone', document.getElementById('Phone').value);
        form.append(
            'centerLandLine',
            document.getElementById('landline').value
        );
        form.append('latitude', document.getElementById('latitude').value);
        form.append('longtitude', document.getElementById('longtitude').value);
        form.append('openTime', document.getElementById('openTime').value);
        form.append('closeTime', document.getElementById('closeTime').value);
        form.append('address', document.getElementById('Address').value);
        form.append('city', document.getElementById('city').value);
        form.append(
            'medicalTourism',
            document.getElementById('medicalTourism').checked
        );
        form.append(
            'hospitalPackage',
            document.getElementById('hospitalPackage').checked
        );
        form.append(
            'organDonation',
            document.getElementById('organDonation').checked
        );
        form.append('aboutUs', document.getElementById('aboutUs').value);
        if (document.getElementById('organDonationDoc')?.files[0]) {
            form.append(
                'docs',
                document.getElementById('organDonationDoc').files[0]
            );
        }
        return updateHospital(form);
    });
}

// create hospitalpacage
if (add_new_hospital_package) {
    add_new_hospital_package.addEventListener('submit', (e) => {
        e.preventDefault();
        const packagename = document.getElementById('newPackage').value;
        return manageHopitaPackage(packagename, 'create');
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
        return hospitalServiceManagement(form, 'create');
    });
}

// update hospital services
if (update_hospital_service) {
    update_hospital_service.addEventListener('submit', (e) => {
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
        return hospitalFacilityManagement(form, 'create');
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
        return hospitalDoctorManagement(form, 'create');
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
        return hospitalRoomFacilityManagement(form, 'create');
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
            return hospitalImages(form, el.dataset.for);
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
                return removeHospitalRoomImage(img, e.target.dataset.for);
            }
        });
    });
}

// manage hospital facilites
if (manage_hospital_available_facilities) {
    manage_hospital_available_facilities.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('personalNursingCare');
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
        return manageAvailableHospitalFacilities({
            numberOfBeds,
            numberOfOperationTheater,
            personalNursingCare,
            numberOfVendilators,
            numberOfAmbulance
        });
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
        return manageHospitalSpecialities({
            currencyExcanage,
            threadlessPlayingArea,
            hospitalPackages,
            testingLabAvailablit,
            secondOption,
            diagnosticMachines
        });
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
        return updateHospitalNearbyFacililities({
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
        });
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
        return manageNearByHotelsinHospitals(form, 'create');
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
        return manageNearByHotelsinHospitals(
            form,
            'manage',
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
        return manageNearByRestaurentsinHospitals(form, 'create');
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
        return manageNearByAirportsinHospitals(form, 'create');
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
        return manageNearByTrainInHospitals(form, 'create');
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
        return manageNearByBusInHospitals(form, 'create');
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
        return manageNearByBusInHospitals(form, 'manage', e.target.dataset.id);
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
        return createNewOrganAvailablity(form);
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
        return updateOrganAvailablity(form, e.target.dataset.id);
    });
}

// update differently ableble product
// update blood bank
if (update_differently_abled) {
    update_differently_abled.addEventListener('submit', (e) => {
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

        return updateDifferentlyAbled(
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
            aboutUs
        );
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
        const aboutUs = document.getElementById('aboutUs').value;

        return updateLaboratory({
            name,
            phone,
            centerPhone,
            centerLandLine,
            location: [latitude, longtitude],
            openTime,
            closeTime,
            address,
            city,
            aboutUs
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
            'create'
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

        return createNewLaboratoryFacilities(form, 'create');
    });
}

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
        form.append('statusType', 'manage');

        return createNewLaboratoryFacilities(
            form,
            'manage',
            e.target.dataset.id
        );
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
        return addLaboratoryImages(form);
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
            return removeLaboratoryImages(img);
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
            return updateLaboratoryBooking(status, form, e.target.dataset.id);
        }
    });
}

// update opticals
if (update_pharmacy) {
    update_pharmacy.addEventListener('submit', (e) => {
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

        return updatePharmacy({
            name,
            phone,
            centerPhone,
            centerLandLine,
            location: [latitude, longtitude],
            openTime,
            closeTime,
            address,
            city,
            aboutUs
        });
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
            return updatePharmacyBooking(status, e.target.dataset.id);
        }
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
        return addParmacyMedicines(medicines);
    });
}
