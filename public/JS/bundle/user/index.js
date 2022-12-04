import axios from 'axios';
import 'core-js/actual';
import 'regenerator-runtime/runtime.js';
import swal from 'sweetalert';
import twentyfourToTwelve from 'twentyfour-to-twelve';
import {
    cancelQuoteUser,
    requestAmbulanceQuotes,
    sendNewAmbulanceQuotes,
    updateUserAmbulanceStatus
} from './controllers/ambulanceControllers';

// import scripts
import { login, senOTP } from './controllers/auth';
import {
    newBloodDonner,
    newBloodRequest,
    sendBloodRequestStatus,
    sendIndividualBloodRequest,
    updateBloodRequestFromOtherUser,
    verifyBloodRequesters
} from './controllers/bloodDonationControllers';
import {
    bookDeaddictionService,
    canelDeaddictionCenter
} from './controllers/deaddictionControllers';
import {
    cancelDifferentlyAbledOrder,
    differentlyAbledCheckout,
    differentlyAbledPlaceOrder
} from './controllers/differentlyAbledControllers';
import {
    newBulkProductDonner,
    newFundDonation,
    newFundDonationRequester,
    newProductDonation,
    newProductDonationRequester
} from './controllers/donationAndCharityControllers';
import {
    bookHearingAidHospital,
    cancelHearingAidBookings,
    cancelHearingAidOrder,
    getHearinaAidProductPrice,
    hearingaidProductCheckout,
    hearingaidProductOrder
} from './controllers/hearingaidControllers';
import { bookUserHomecare } from './controllers/homecareControllers';
import { getHospitalPakcages } from './controllers/hospitalControllers';
import {
    applyJob,
    postNewUserJob,
    updateNewUserJob,
    updateUserJobDetails
} from './controllers/jobPortalControllers';
import {
    laboratoriesCheckout,
    placeLaboratoryOrder,
    selectLaboratories
} from './controllers/laboratoryControllers';
import {
    getMarketProductPrice,
    marketAddNewCart,
    marketAddNewWishList,
    marketBuyProduct,
    updateMarketCart,
    marketPlaceOrder,
    deleteMarketCart,
    orderProducFromMarketCart,
    moveWishlistToCartInMarket,
    deleteMarketWishlist,
    cancelMedicalMarketOrders,
    newUserProductQuote,
    cancelAUserQuotes,
    updateUserQuotes
} from './controllers/medicalMarketControllers';
import {
    addNewMMedicalRecord,
    getRecordsForMembers
} from './controllers/medicalRecordsControllers';
import {
    bookMeetTheExpert,
    cancelMeetTheExpert,
    meetTheExpertCheckout
} from './controllers/meetTheExpertControllers';
import {
    createOneUsBlogs,
    createOneUsVideos,
    updateOneUsBlogs,
    updateOneUsVideos
} from './controllers/oneUsControllers';
import {
    addPharmacyCart,
    placePharmacyCartOrder,
    placePharmacytOrder,
    updatePharmacyCart
} from './controllers/pharmacyControllers';
import {
    addNewAddress,
    addNewMember,
    deleteAddress
} from './controllers/sharedControllers';

// // import doms
const userLoginFor = document.getElementById('user__login');
const otpButton = document.getElementById('otpButton');

// ============================================================
// ============================================================
// ============================================================
// Ambulance
const select_ambulac_serice = document.querySelectorAll(
    '.select_ambulac_serice'
);
const cancel_quotes_user = document.getElementById('cancel_quotes_user');
const ambulance_quote_status_user = document.getElementById(
    'ambulance_quote_status_user'
);
const send_ambulace_quotes = document.getElementById('send_ambulace_quotes');
const ambulance_start_location = document.getElementById(
    'ambulance_start_location'
);
const ambulance_location_type = document.getElementById(
    'ambulance_location_type'
);
const request_user_ambulance_quote = document.getElementById(
    'request_user_ambulance_quote'
);

// ============================================================
// ============================================================
// ============================================================
// Medical Market
const img_color = document.querySelectorAll('.img_color');
const market_img_size = document.getElementById('market_img_size');
const market_subImage = document.querySelectorAll('.market_subImage');
const market_color_wih_size = document.getElementById('market_color_wih_size');
const market_add_to_cart = document.getElementById('market_add_to_cart');
const market_add_to_wishlist = document.getElementById(
    'market_add_to_wishlist'
);
const market_buy_product = document.getElementById('market_buy_product');
const market_product_checkout = document.getElementById(
    'market_product_checkout'
);
const add_new_address = document.getElementById('add_new_address');
const request_user_quotes = document.getElementById('request_user_quotes');
const request_quotes = document.getElementById('request_quotes');
const manage_quotes = document.getElementById('manage_quotes');
const manage_user_quotes = document.getElementById('manage_user_quotes');
const proposalUpdate = document.getElementById('proposalUpdate');
const proposalUserUpdate = document.getElementById('proposalUserUpdate');
const market_place_order = document.getElementById('marketPlaceOrder');
const placeOrderfromMarketCart = document.getElementById(
    'placeOrderfromMarketCart'
);
const manage_market_cart_quantity = document.querySelectorAll(
    '.manage_market_cart_quantity'
);
const market_wishlist_to_cart = document.querySelectorAll(
    '.market_wishlist_to_cart'
);
const delete_market_cart = document.querySelectorAll('.delete_market_cart');
const delete_market_wishlist = document.querySelectorAll(
    '.delete_market_wishlist'
);
const cancel_medical_marekt_order = document.querySelectorAll(
    '.cancel_medical_marekt_order'
);

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Homecare
const book_user_homecare = document.getElementById('book_user_homecare');
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Deaddiction
const book_deaddiction_service = document.getElementById(
    'book_deaddiction_service'
);
const cancel_deaddicton = document.querySelectorAll('.cancel_deaddicton');

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Differently abled product
const buy_differentlyAbled_product = document.getElementById(
    'buy_differentlyAbled_product'
);
const differently_place_order = document.getElementById(
    'differently_place_order'
);
const cancel_differently_abled_order = document.getElementById(
    'cancel_differently_abled_order'
);

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Pharmacy
const add_pharmacy_medicine_cart = document.querySelectorAll(
    '.add_pharmacy_medicine_cart'
);
const pharmacy_cart_quantity = document.querySelectorAll(
    '.pharmacy_cart_quantity'
);
const place_order_from_pharmacy = document.getElementById(
    'place_order_from_pharmacy'
);
const pharmacy_place_order = document.getElementById('pharmacy_place_order');
const pharmacyLocation = document.getElementById('pharmacyLocation');
const pharmacyMapLocation = document.getElementById('pharmacyMapLocation');
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Laboratory
const select_laboratory_serice = document.querySelectorAll(
    '.select_laboratory_serice'
);
const select_laboratorys = document.getElementById('select_laboratorys');
const laboratory_checkout = document.getElementById('laboratory_checkout');
const laboratory_book_lab = document.getElementById('laboratory_book_lab');

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Meet the experts
const book_meet_the_expert = document.getElementById('book_meet_the_expert');
const expert_book_experts = document.getElementById('expert_book_experts');
const cancel_meet_the_expert = document.querySelectorAll(
    '.cancel_meet_the_expert'
);
const cance_deaddocton = document.querySelectorAll('.cance_deaddocton');

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Blood Donation
const new_blood_donner = document.getElementById('new_blood_donner');
const blood_request = document.getElementById('blood_request');
const blood_request_status = document.getElementById('blood_request_status');
const request_individual_request = document.querySelectorAll(
    '.request_individual_request'
);
const blood_request_from_other_status = document.querySelectorAll(
    '.blood_request_from_other_status'
);
const verify_user_blood_request = document.querySelectorAll(
    '.verify_user_blood_request'
);

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Member
const add_family_memeber = document.getElementById('add_family_memeber');

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// medical records
const medical_record_change_member = document.getElementById(
    'medical_record_change_member'
);

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Hosptial
const check_package_details = document.querySelectorAll(
    '.check_package_details'
);
const add_medical_record = document.getElementById('add_medical_record');
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Hearing aid
const img_hearing_color = document.querySelectorAll('.img_hearing_color');
const hearinagaid_details = document.getElementById('hearinagaid_details');
const hearingaid_checkout = document.getElementById('hearingaid_checkout');
const hearingaid_place_order = document.getElementById(
    'hearingaid_place_order'
);
const confirm_hearingaid_hospital_booking = document.getElementById(
    'confirm_hearingaid_hospital_booking'
);
const cancel_hearing_aid_order = document.getElementById(
    'cancel_hearing_aid_order'
);
const cancel_hearingaid_bookings = document.querySelectorAll(
    '.cancel_hearingaid_bookings'
);

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Job Portal
const update_job_user_personsl_details = document.getElementById(
    'update_job_user_personsl_details'
);
const add_job_experience = document.getElementById('add_job_experience');
const add_job_education = document.getElementById('add_job_education');
const update_job_profile_summary = document.getElementById(
    'update_job_profile_summary'
);
const update_job_experience = document.querySelectorAll(
    '.update_job_experience'
);
const update_job_education = document.querySelectorAll('.update_job_education');
const apply_job = document.getElementById('apply_job');
const jobCategory = document.getElementById('jobCategory');
const createNewJob = document.getElementById('createNewJob');
const updateUserJob = document.getElementById('updateUserJob');

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Donation and Charity
const patient_fund_donation = document.querySelectorAll(
    '.patient_fund_donation'
);
const patient_product_donation = document.querySelectorAll(
    '.patient_product_donation'
);
const common_fund_donation = document.getElementById('common_fund_donation');
const common_product_donation = document.getElementById(
    'common_product_donation'
);
const common_product_donation_request = document.getElementById(
    'common_product_donation_request'
);
const new_fund_donation_request = document.getElementById(
    'new_fund_donation_request'
);

// ==========================================s==================
// ==========================================s==================
// ==========================================s==================
// ==========================================s==================
// ==========================================s==================
// one us
const create_new_oneus_video = document.getElementById(
    'create_new_oneus_video'
);
const update_oneus_video = document.getElementById('update_oneus_video');
const create_new_oneus_blogs = document.getElementById('create_new_oneus_blogs');
const update_oneus_blog = document.getElementById('update_oneus_blog');

// create mangament
if (userLoginFor) {
    userLoginFor.addEventListener('submit', (e) => {
        e.preventDefault();
        const phone = document.getElementById('phone').value;
        const otp = document.getElementById('otp').value;
        return login(phone, otp);
    });
}

// send otp
if (otpButton) {
    otpButton.addEventListener('click', (e) => {
        e.preventDefault();
        const phone = document.getElementById('phone').value;
        return senOTP(phone);
    });
}

// Select ambulance
if (select_ambulac_serice?.length) {
    [...select_ambulac_serice].map((el, index) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const elId = document.getElementsByClassName(
                'select_ambulac_serice'
            )[index];
            if (elId.classList.contains('active')) {
                elId.classList.remove('active', 'shadow-medium');
            } else {
                elId.classList.add('active', 'shadow-medium');
            }
        });
    });
}

// cancel quote status

if (cancel_quotes_user) {
    cancel_quotes_user.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.id === 'cance_quote')
            return cancelQuoteUser(e.target.dataset.quote);
    });
}

// user ambulance update
if (ambulance_quote_status_user) {
    ambulance_quote_status_user.addEventListener('change', (e) => {
        e.preventDefault();

        const status = document.getElementById(
            `updateStatus-${e.target.dataset.index}`
        ).value;
        return updateUserAmbulanceStatus(status, e.target.dataset.apply);
    });
}

// send quotes for ambulace
if (send_ambulace_quotes) {
    send_ambulace_quotes.addEventListener('click', async (e) => {
        e.preventDefault();
        const data = [];
        await Promise.all(
            [...document.querySelectorAll('.select_ambulac_serice')].map(
                (el) => {
                    if (el.classList.contains('active')) {
                        return data.push(el.dataset.id);
                    }
                }
            )
        );
        return sendNewAmbulanceQuotes(data);
    });
}
// set directtion for map
const setDirection = async (map, direction, startLocation, endLocation) => {
    const directionsService = new google.maps.DirectionsService();

    direction.setMap(map);
    direction.setOptions({ suppressMarkers: true });
    console.log(startLocation, endLocation);
    await directionsService
        .route({
            origin: startLocation,
            destination: endLocation,
            travelMode: google.maps.TravelMode.DRIVING
        })
        .then((response) => {
            direction.setDirections(response);
        })
        .catch((e) => window.alert('Directions request failed due to ' + e));
};
function initMap() {
    setTimeout(() => {
        if (ambulance_start_location) {
            const map = new google.maps.Map(ambulance_start_location, {
                center: { lat: 13.065432786943544, lng: 80.24826099794232 },
                zoom: 11
            });
            let markerStart;
            let markerEnd;
            let directionDisplay;
            const checkIfValidMarkers = () => {
                if (markerStart && markerEnd) {
                    const startLocation = {
                        lat: markerStart.getPosition().lat(),
                        lng: markerStart.getPosition().lng()
                    };
                    const endLocation = {
                        lat: markerEnd.getPosition().lat(),
                        lng: markerEnd.getPosition().lng()
                    };
                    if (!directionDisplay) {
                        directionDisplay = new google.maps.DirectionsRenderer();
                    }
                    setDirection(
                        map,
                        directionDisplay,
                        startLocation,
                        endLocation
                    );
                }
            };
            let start, end;
            map.addListener('click', (e) => {
                start = document
                    .getElementById('ambulanceStartLocation')
                    .classList.contains('disabled');
                end = document
                    .getElementById('ambulanceEndLocation')
                    .classList.contains('disabled');

                if (start) {
                    if (!markerStart) {
                        markerStart = new google.maps.Marker({
                            position: e.latLng,
                            map: map,
                            icon: `https://maps.google.com/mapfiles/ms/icons/green.png`
                        });
                        return checkIfValidMarkers();
                    } else {
                        markerStart.setPosition(e.latLng);
                        return checkIfValidMarkers();
                    }
                } else if (end) {
                    if (!markerEnd) {
                        markerEnd = new google.maps.Marker({
                            position: e.latLng,
                            map: map,
                            icon: `https://maps.google.com/mapfiles/ms/icons/red.png`
                        });
                        return checkIfValidMarkers();
                    } else {
                        markerEnd.setPosition(e.latLng);
                        return checkIfValidMarkers();
                    }
                } else {
                    return swal(
                        'warning',
                        'Please select the location type',
                        'error'
                    );
                }
            });
            // request new quotes

            if (request_user_ambulance_quote) {
                request_user_ambulance_quote.addEventListener(
                    'submit',
                    async (e) => {
                        e.preventDefault();
                        if (markerStart && markerEnd) {
                            const bookingDate =
                                document.getElementById('date').value;
                            const bookingTime = twentyfourToTwelve(
                                document.getElementById('time').value
                            );

                            const parts = document.cookie.split(`;`);
                            let [data] = await Promise.all(
                                parts.filter((el) => el.includes('services='))
                            );
                            if (!data.length) {
                                swal(
                                    'warning',
                                    'Please select the services.',
                                    'error'
                                );
                                return location.assign(
                                    '/ambulance/ambulance-service/select-locations'
                                );
                            }

                            const requestedService = JSON.parse(
                                data.substring(
                                    data.indexOf('['),
                                    data.indexOf(']') + 1
                                )
                            );
                            const userStartLocation = [
                                markerStart.getPosition().lat(),
                                markerStart.getPosition().lng()
                            ];
                            const userDestinationLocation = [
                                markerEnd.getPosition().lat(),
                                markerEnd.getPosition().lng()
                            ];
                            return requestAmbulanceQuotes({
                                bookingDate,
                                bookingTime,
                                requestedService,
                                userStartLocation,
                                userDestinationLocation
                            });
                        } else {
                            return swal(
                                'warning',
                                'Start Location and End Location shoule be inlcuded.',
                                'error'
                            );
                        }
                    }
                );
            }
        }
        if (pharmacyLocation) {
            const map = new google.maps.Map(pharmacyLocation, {
                center: { lat: 13.065432786943544, lng: 80.24826099794232 },
                zoom: 11
            });
            let location;
            map.addListener('click', (e) => {
                if (!location) {
                    location = new google.maps.Marker({
                        position: e.latLng,
                        map: map,
                        icon: `https://maps.google.com/mapfiles/ms/icons/green.png`
                    });
                    document.cookie = `ppollId=${JSON.stringify({
                        type: 'medicine',
                        location: [
                            location.getPosition().lat(),
                            location.getPosition().lng()
                        ]
                    })};expires=${new Date(
                        new Date(new Date().toISOString()).valueOf() +
                            1000 * 60 * 5
                    )};path=/`;
                } else {
                    location = location.setPosition(e.latLng);

                    document.cookie = `ppollId=${JSON.stringify({
                        type: 'medicine',
                        location: [
                            location.getPosition().lat(),
                            location.getPosition().lng()
                        ]
                    })};expires=${new Date(
                        new Date(new Date().toISOString()).valueOf() +
                            1000 * 60 * 5
                    )};path=/`;
                }
            });
        }
        if (pharmacyMapLocation) {
            const map = new google.maps.Map(pharmacyMapLocation, {
                center: { lat: 13.065432786943544, lng: 80.24826099794232 },
                zoom: 11
            });
            let location;
            const elLat = document.getElementById('latitude');
            const elLug = document.getElementById('longitude');
            map.addListener('click', (e) => {
                if (!location) {
                    location = new google.maps.Marker({
                        position: e.latLng,
                        map: map,
                        icon: `https://maps.google.com/mapfiles/ms/icons/green.png`
                    });

                    document.cookie = `ppollId=${JSON.stringify({
                        type: 'prescription',
                        location: [
                            location.getPosition().lat(),
                            location.getPosition().lng()
                        ]
                    })};expires=${new Date(
                        new Date(new Date().toISOString()).valueOf() +
                            1000 * 60 * 5
                    )};path=/`;
                } else {
                    document.cookie = `ppollId=${JSON.stringify({
                        type: 'prescription',
                        location: [
                            location.getPosition().lat(),
                            location.getPosition().lng()
                        ]
                    })};expires=${new Date(
                        new Date(new Date().toISOString()).valueOf() +
                            1000 * 60 * 5
                    )};path=/`;
                }
            });
        }
    }, 2000);
    // Initialize and add the map
}
window.initMap = initMap;

// select actice location
if (ambulance_location_type) {
    ambulance_location_type.addEventListener('click', (e) => {
        e.preventDefault();
        const start = document.getElementById('ambulanceStartLocation');
        const end = document.getElementById('ambulanceEndLocation');

        if (e.target.id === 'ambulanceStartLocation') {
            start.classList.add('disabled');
            end.classList.remove('disabled');
        } else {
            end.classList.add('disabled');
            start.classList.remove('disabled');
        }
    });
}

// get image price
if (img_color.length) {
    [...img_color].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const color = e.target.dataset.img;
            return getMarketProductPrice({ color }, img_color);
        });
    });
}
// market sub imaage
if (market_subImage.length) {
    [...market_subImage].map((el, index) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const elId = document.getElementById('main-img');
            [...market_subImage].map((els, ins) => {
                if (index === ins) els.classList.add('active-small-image');
                else els.classList.remove('active-small-image');
            });

            return (elId.src = e.target.src);
        });
    });
}

// check size
if (market_img_size) {
    market_img_size.addEventListener('change', (e) => {
        e.preventDefault();
        const size = e.target.value;
        return getMarketProductPrice({ size });
    });
}

// check color with size
if (market_color_wih_size) {
    market_color_wih_size.addEventListener('change', (e) => {
        e.preventDefault();
        const size = e.target.value;
        const color = document.querySelector('.Active-color.img_color').dataset
            .img;
        return getMarketProductPrice({ size, color }, market_color_wih_size);
    });
}

// add to cart in market
if (market_add_to_cart) {
    market_add_to_cart.addEventListener('click', (e) => {
        e.preventDefault();
        const color =
            document.querySelector('.Active-color.img_color')?.dataset?.img ??
            undefined;
        const size =
            document.querySelector('.market_product_size')?.value ?? undefined;
        const quantity = document.getElementById('market_quantity').value;

        return marketAddNewCart({ color, size, quantity }, e.target.dataset.id);
    });
}

// market add to wish lsit
if (market_add_to_wishlist) {
    market_add_to_wishlist.addEventListener('click', (e) => {
        e.preventDefault();
        return marketAddNewWishList(e.target.dataset.id);
    });
}

// market buy product
if (market_buy_product) {
    market_buy_product.addEventListener('click', (e) => {
        e.preventDefault();
        const color =
            document.querySelector('.Active-color.img_color')?.dataset?.img ??
            undefined;
        const size =
            document.querySelector('.market_product_size')?.value ?? undefined;
        const quantity = document.getElementById('market_quantity').value;
        return marketBuyProduct({ color, size, quantity }, e.target.dataset.id);
    });
}
// event lister for address
if (market_product_checkout) {
    const addressLists = document.querySelectorAll('.address_lists');
    [...addressLists].map((el, index) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();

            [...addressLists].map((els, index2) => {
                if (index2 === index) {
                    els.classList.add('circle-Filled');
                    els.classList.remove('circle-layour');
                    document
                        .getElementsByClassName('market_address_shadow')
                        [index2].classList.add('shadow-medium');
                } else {
                    els.classList.add('circle-layour');
                    els.classList.remove('circle-Filled');
                    document
                        .getElementsByClassName('market_address_shadow')
                        [index2].classList.remove('shadow-medium');
                }
            });
        });
    });
    market_product_checkout.addEventListener('click', (e) => {
        if (e.target.id === 'delete_address') {
            return deleteAddress(e.target.dataset.id);
        }
    });
}
// add new address
if (add_new_address) {
    add_new_address.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('fname').value;
        const address = document.getElementById('address').value;
        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;
        const pincode = document.getElementById('pincode').value;
        const phone1 = document.getElementById('phone1').value;
        const phone2 = document.getElementById('phone2').value;
        return addNewAddress({
            name,
            address,
            city,
            state,
            pincode,
            phone1,
            phone2
        });
    });
}

// place order
if (market_place_order) {
    market_place_order.addEventListener('click', (e) => {
        e.preventDefault();
        const id = document.querySelector('.address_lists.circle-Filled ')
            ?.dataset.id;
        return marketPlaceOrder(id);
    });
}

// update cart quantity
if (manage_market_cart_quantity.length) {
    [...manage_market_cart_quantity].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.id === 'sub_quantity') {
                let sub = document.getElementById(
                    `cart_quantity${e.target.dataset.index}`
                );
                let timer;
                if (sub.innerText * 1 <= 1) {
                    return swal(
                        'warning',
                        'Quantity minimun should be 1.',
                        'error'
                    );
                }
                sub.innerText = sub.innerText * 1 - 1;
                return updateMarketCart(
                    { quantity: sub.innerText },
                    e.target.dataset.id
                );
            } else if (e.target.id === 'add_quantity') {
                let sub = document.getElementById(
                    `cart_quantity${e.target.dataset.index}`
                );
                if (sub.innerText * 1 >= 5) {
                    return swal(
                        'warning',
                        'Quantity maximum should be 5.',
                        'error'
                    );
                }

                sub.innerText = sub.innerText * 1 + 1;
                return updateMarketCart(
                    { quantity: sub.innerText },
                    e.target.dataset.id
                );
            }
        });
    });
}

// delte market cart
if (delete_market_cart.length) {
    [...delete_market_cart].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            return deleteMarketCart(e.target.dataset.id);
        });
    });
}

// delte market wishlist
if (delete_market_wishlist.length) {
    [...delete_market_wishlist].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            return deleteMarketWishlist(e.target.dataset.id);
        });
    });
}

// medical market cancel order
if (cancel_medical_marekt_order.length) {
    [...cancel_medical_marekt_order].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            return cancelMedicalMarketOrders(e.target.dataset.id);
        });
    });
}

// place order from cart
if (placeOrderfromMarketCart) {
    placeOrderfromMarketCart.addEventListener('click', async (e) => {
        e.preventDefault();
        const ids = await Promise.all(
            [...document.querySelectorAll('.market_datas')].map((el) => {
                return el.dataset.id;
            })
        );
        return orderProducFromMarketCart(ids);
    });
}
// move to wishlist
if (market_wishlist_to_cart.length) {
    [...market_wishlist_to_cart].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            return moveWishlistToCartInMarket(e.target.dataset.id);
        });
    });
}

// send new quotes
if (request_user_quotes) {
    request_user_quotes.addEventListener('submit', (e) => {
        e.preventDefault();
        const productName = document.getElementById('productName').value;
        const productDescription = document.getElementById('description').value;
        const quantity = document.getElementById('quantity').value;
        const address = document.getElementById('address').value;
        console.log(description);
        return newUserProductQuote(
            [{ productName, productDescription, quantity }],
            address
        );
    });
}

// manage quotes
if (manage_user_quotes) {
    manage_user_quotes.addEventListener('click', (e) => {
        if (e.target.id === 'cancel_quotes') {
            return cancelAUserQuotes(e.target.dataset.id);
        }
    });
}

// update proposal user
if (proposalUserUpdate) {
    proposalUserUpdate.addEventListener('click', (e) => {
        if (e.target.id === 'Accept_Proposal') {
            return updateUserQuotes('accepted', e.target.dataset.proposal);
        }
        if (e.target.id === 'Reject_Proposal') {
            return updateUserQuotes('rejected', e.target.dataset.proposal);
        }
        if (e.target.id === 'negotiate_Proposal') {
            return updateUserQuotes('negotiate', e.target.dataset.proposal);
        }
    });
}

// Book homecare
if (book_user_homecare) {
    book_user_homecare.addEventListener('submit', (e) => {
        e.preventDefault();
        const address = document.getElementById('address').value;
        return bookUserHomecare(address, e.target.dataset.id);
    });
}

// Book deaddiction
if (book_deaddiction_service) {
    book_deaddiction_service.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const problem = document.getElementById('problem').value;
        return bookDeaddictionService(
            { name, phone, problem },
            e.target.dataset.id
        );
    });
}

// cancel deaddicion
if (cancel_deaddicton.length) {
    [...cancel_deaddicton].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            return canelDeaddictionCenter(e.target.dataset.id);
        });
    });
}

// Book differently abled product
if (buy_differentlyAbled_product) {
    buy_differentlyAbled_product.addEventListener('click', (e) => {
        e.preventDefault();
        const quantity = document.getElementById('diff_quantity').value;
        if (isNaN(quantity)) {
            return swal('Warning', 'Something went wrong.', 'error');
        }
        return differentlyAbledCheckout(quantity, e.target.dataset.id);
    });
}

// Book differently abled product
if (differently_place_order) {
    differently_place_order.addEventListener('click', (e) => {
        e.preventDefault();
        const id = document.querySelector('.address_lists.circle-Filled ')
            ?.dataset.id;
        return differentlyAbledPlaceOrder(id);
    });
}

// cancel differently abled
if (cancel_differently_abled_order) {
    cancel_differently_abled_order.addEventListener('click', (e) => {
        e.preventDefault();
        return cancelDifferentlyAbledOrder(e.target.dataset.id);
    });
}

// add cart
if (add_pharmacy_medicine_cart.length) {
    [...add_pharmacy_medicine_cart].map((el, index) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const id = document.getElementsByClassName(
                'add_pharmacy_medicine_cart'
            )[index].dataset.id;
            return addPharmacyCart(id);
        });
    });
}

// update cart quantity
if (pharmacy_cart_quantity.length) {
    [...pharmacy_cart_quantity].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.id === 'sub_quantity') {
                let sub = document.getElementById(
                    `cart_quantity${e.target.dataset.index}`
                );
                let timer;
                if (sub.innerText * 1 <= 1) {
                    return swal(
                        'warning',
                        'Quantity minimun should be 1.',
                        'error'
                    );
                }
                sub.innerText = sub.innerText * 1 - 1;
                return updatePharmacyCart(
                    { quantity: sub.innerText },
                    e.target.dataset.id
                );
            } else if (e.target.id === 'add_quantity') {
                let sub = document.getElementById(
                    `cart_quantity${e.target.dataset.index}`
                );
                if (sub.innerText * 1 >= 5) {
                    return swal(
                        'warning',
                        'Quantity maximum should be 5.',
                        'error'
                    );
                }

                sub.innerText = sub.innerText * 1 + 1;
                return updatePharmacyCart(
                    { quantity: sub.innerText },
                    e.target.dataset.id
                );
            }
        });
    });
}

// delte market cart
if (delete_market_cart.length) {
    [...delete_market_cart].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            return deleteMarketCart(e.target.dataset.id);
        });
    });
}

// place order from cart
if (place_order_from_pharmacy) {
    place_order_from_pharmacy.addEventListener('click', async (e) => {
        e.preventDefault();
        const ids = await Promise.all(
            [...document.querySelectorAll('.pharmacy_datas')].map((el) => {
                return el.dataset.id;
            })
        );
        return placePharmacyCartOrder(ids);
    });
}

// place order from cart
if (pharmacy_place_order) {
    pharmacy_place_order.addEventListener('click', async (e) => {
        e.preventDefault();
        const id = document.querySelector('.address_lists.circle-Filled ')
            ?.dataset.id;
        return placePharmacytOrder(id);
    });
}

// select laboratory categorie
// Select ambulance
if (select_laboratory_serice?.length) {
    [...select_laboratory_serice].map((el, index) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const elId = document.getElementsByClassName(
                'select_laboratory_serice'
            )[index];
            if (elId.classList.contains('active')) {
                elId.classList.remove('active', 'shadow-medium');
            } else {
                elId.classList.add('active', 'shadow-medium');
            }
        });
    });
}

// send quotes for ambulace
if (select_laboratorys) {
    select_laboratorys.addEventListener('click', async (e) => {
        e.preventDefault();
        const data = [];
        await Promise.all(
            [...document.querySelectorAll('.select_laboratory_serice')].map(
                (el) => {
                    if (el.classList.contains('active')) {
                        return data.push(el.dataset.id);
                    }
                }
            )
        );
        return selectLaboratories(data.join(','));
    });
}

// send quotes for ambulace
if (laboratory_checkout) {
    laboratory_checkout.addEventListener('click', async (e) => {
        e.preventDefault();
        const data = [];
        await Promise.all(
            [...document.querySelectorAll('.select_laboratory_serice')].map(
                (el) => {
                    if (el.classList.contains('active')) {
                        return data.push(el.dataset.id);
                    }
                }
            )
        );
        const date = document.getElementById('selectDate').value;
        return laboratoriesCheckout(data.join(','), date, e.target.dataset.id);
    });
}

// place order from cart
if (laboratory_book_lab) {
    laboratory_book_lab.addEventListener('click', async (e) => {
        e.preventDefault();
        const id = document.querySelector('.address_lists.circle-Filled ')
            ?.dataset.id;
        return placeLaboratoryOrder(id);
    });
}

// meet the expert
if (book_meet_the_expert) {
    book_meet_the_expert.addEventListener('click', (e) => {
        e.preventDefault();
        return meetTheExpertCheckout(e.target.dataset.id);
    });
}
// place order from cart
if (expert_book_experts) {
    expert_book_experts.addEventListener('click', async (e) => {
        e.preventDefault();
        const id = document.querySelector('.address_lists.circle-Filled ')
            ?.dataset.id;
        return bookMeetTheExpert(id);
    });
}
// cancel met the expeort
if (cancel_meet_the_expert.length) {
    [...cancel_meet_the_expert].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            return cancelMeetTheExpert(e.target.dataset.id);
        });
    });
}

// create new blood donnner
if (new_blood_donner) {
    new_blood_donner.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('donnerName', document.getElementById('name').value);
        form.append('donnerPhone', document.getElementById('phone').value);
        form.append('bloodGroup', document.getElementById('blood').value);
        form.append(
            'lastDonatedDate',
            document.getElementById('lastDonated').value
        );
        form.append('donnerAddress', document.getElementById('address').value);
        form.append('latitude', document.getElementById('latitude').value);
        form.append('longitude', document.getElementById('longitude').value);
        form.append('doc', document.getElementById('myfile').files[0]);
        form.append('statusType', 'create');
        return newBloodDonner(form);
    });
}

// new blood requester
if (blood_request) {
    blood_request.addEventListener('submit', (e) => {
        e.preventDefault();
        const patientName = document.getElementById('patientName').value;
        const contactName = document.getElementById('contactName').value;
        const phoneNumber = document.getElementById('mobile').value;
        const bloodGroup = document.getElementById('blood').value;
        const unitsRequird = document.getElementById('units').value;
        const requriedDate = document.getElementById('date').value;
        const hospitalName = document.getElementById('hospitalName').value;
        const hospitalAddress =
            document.getElementById('hospitalAddress').value;
        const opertionType = document.getElementById('operationType').value;
        const description = document.getElementById('description').value;
        const latitude = document.getElementById('latitude').value;
        const longitude = document.getElementById('longitude').value;
        return newBloodRequest(
            {
                patientName,
                contactName,
                phoneNumber,
                bloodGroup,
                unitsRequird,
                requriedDate,
                hospitalName,
                hospitalAddress,
                opertionType,
                description,
                longitude,
                latitude
            },
            blood_request
        );
    });
}

if (request_individual_request.length) {
    [...request_individual_request].map((el, index) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const data = document.getElementsByClassName(
                'request_individual_request'
            )[index].dataset;
            return sendIndividualBloodRequest(data.id, data.id2);
        });
    });
}
if (blood_request_from_other_status.length) {
    [...blood_request_from_other_status].map((el, index) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.id === 'accept') {
                return updateBloodRequestFromOtherUser(
                    'accepted',
                    el.dataset.id,
                    el.dataset.id2
                );
            } else if (e.target.id === 'reject') {
                return updateBloodRequestFromOtherUser(
                    'rejected',
                    el.dataset.id
                );
            }
        });
    });
}

if (blood_request_status) {
    blood_request_status.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(e.target.id);
        if (e.target.id === 'cancel') {
            return sendBloodRequestStatus('canceled');
        } else if (e.target.id === 'received') {
            return sendBloodRequestStatus('received');
        }
    });
}

if (verify_user_blood_request.length) {
    [...verify_user_blood_request].map((el, index) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const elid = document.getElementsByClassName(
                'verify_user_blood_request'
            )[index].dataset.id;
            return verifyBloodRequesters(elid);
        });
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
            return getRecordsForMembers(active.dataset.id);
        }
    });
}

// get family member
if (add_family_memeber) {
    add_family_memeber.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', document.getElementById('name').value);
        form.append('phone', document.getElementById('phone').value);
        form.append('type', document.getElementById('type').value);
        form.append('profile', document.getElementById('myfileMem').files[0]);
        console.log(document.getElementById('myfileMem').files[0]);
        form.append('statusType', 'create');
        return addNewMember(form);
    });
}

// add medical records
if (add_medical_record) {
    add_medical_record.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('recordType', document.getElementById('reportType').value);
        form.append('documentName', document.getElementById('name').value);
        form.append('issuedDate', document.getElementById('date').value);
        form.append('member', document.getElementById('memeber').value);
        form.append(
            'description',
            document.getElementById('description').value
        );
        form.append('docs', document.getElementById('myfile').files[0]);
        form.append('statusType', 'create');
        return addNewMMedicalRecord(form);
    });
}

// hospital package
if (check_package_details.length) {
    [...check_package_details].map((el) => {
        el.addEventListener('change', (e) => {
            e.preventDefault();
            const data = e.target.dataset;
            return getHospitalPakcages(data.id, data.id2, data.id3);
        });
    });
}

// image color in hearing aid
// get image price
if (img_hearing_color.length) {
    [...img_hearing_color].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const color = e.target.dataset.img;
            return getHearinaAidProductPrice({ color }, img_hearing_color);
        });
    });
}
// check color with size
if (hearinagaid_details) {
    hearinagaid_details.addEventListener('change', (e) => {
        e.preventDefault();
        const size = e.target.value;
        const color = document.querySelector('.Active-color.img_hearing_color')
            .dataset.img;
        return getHearinaAidProductPrice({ size, color }, hearinagaid_details);
    });
}

// hearing aid checkout
if (hearingaid_checkout) {
    hearingaid_checkout.addEventListener('click', (e) => {
        e.preventDefault();
        const color = document
            .getElementById('hearingProductColor')
            .innerText.trim();
        let size = document.getElementById('hearinagaid_details');
        size = size.options[size.selectedIndex].text;
        const quantity = document.getElementById('hearingaid_quantity').value;
        return hearingaidProductCheckout({
            color,
            size,
            quantity,
            id: hearingaid_checkout.dataset.id
        });
    });
}

// Book differently abled product
if (hearingaid_place_order) {
    hearingaid_place_order.addEventListener('click', (e) => {
        e.preventDefault();
        const id = document.querySelector('.address_lists.circle-Filled')
            ?.dataset.id;
        return hearingaidProductOrder(id);
    });
}

// booking hearing aid
if (confirm_hearingaid_hospital_booking) {
    confirm_hearingaid_hospital_booking.addEventListener('click', (e) => {
        e.preventDefault();
        let day = document.querySelector('.btn-outline-primary.active').dataset
            .index;
        day = new Date(
            new Date().setDate(new Date().getDate() + day * 1)
        ).toLocaleDateString();
        return bookHearingAidHospital(day);
    });
}

// update user person details
if (update_job_user_personsl_details) {
    update_job_user_personsl_details.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const gender = document.getElementById('gender').value;
        const dateOfBirth = document.getElementById('dateOfBirth').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;

        return updateUserJobDetails({
            personalDetails: {
                name,
                gender,
                dateOfBirth,
                email,
                phone,
                address
            }
        });
    });
}

if (add_job_experience) {
    add_job_experience.addEventListener('submit', (e) => {
        e.preventDefault();
        const designation = document.getElementById('designation').value;
        const workplace = document.getElementById('workplace').value;
        const duration = document.getElementById('duration').value;
        const jobtype = document.getElementById('jobtype').value;
        return updateUserJobDetails({
            employementDetails: {
                designation,
                workplace,
                duration,
                jobtype
            }
        });
    });
}

// update job experience
if (update_job_experience.length) {
    [...update_job_experience].map((el) => {
        el.addEventListener('submit', (e) => {
            e.preventDefault();
            const index = e.target.dataset.index;
            const designation = document.getElementById(
                `designation${index}`
            ).value;
            const workplace = document.getElementById(
                `workplace${index}`
            ).value;
            const duration = document.getElementById(`duration${index}`).value;
            const jobtype = document.getElementById(`jobtype${index}`).value;

            return updateUserJobDetails(
                {
                    employementDetails: {
                        designation,
                        workplace,
                        duration,
                        jobtype
                    }
                },
                el.dataset.id
            );
        });
    });
}

// add job experienc
if (add_job_education) {
    add_job_education.addEventListener('submit', (e) => {
        e.preventDefault();
        const degree = document.getElementById('degree').value;
        const education = document.getElementById('education').value;
        const university = document.getElementById('university').value;
        const yearofpassing = document.getElementById('yearofpassing').value;
        return updateUserJobDetails({
            educationDetails: {
                degree,
                education,
                university,
                yearofpassing
            }
        });
    });
}
// add job experienc
if (update_job_profile_summary) {
    update_job_profile_summary.addEventListener('submit', (e) => {
        e.preventDefault();
        const profileTitle = document.getElementById('profileTitle').value;
        const exprience = document.getElementById('exprience').value;
        const currentLocation =
            document.getElementById('currentLocation').value;
        const currentSalary = document.getElementById('currentSalary').value;
        const category = document.getElementById('category').value;
        const speciality = document.getElementById('speciality').value;
        const expectSalary = document.getElementById('expectSalary').value;
        return updateUserJobDetails({
            educationDetails: {
                profileTitle,
                exprience,
                currentLocation,
                currentSalary,
                category,
                speciality,
                expectSalary
            }
        });
    });
}

// update job experience
if (update_job_education.length) {
    [...update_job_education].map((el) => {
        el.addEventListener('submit', (e) => {
            e.preventDefault();
            const index = e.target.dataset.index;
            const degree = document.getElementById(`degree${index}`).value;
            const education = document.getElementById(
                `education${index}`
            ).value;
            const university = document.getElementById(
                `university${index}`
            ).value;
            const yearofpassing = document.getElementById(
                `yearofpassing${index}`
            ).value;
            return updateUserJobDetails(
                {
                    educationDetails: {
                        degree,
                        education,
                        university,
                        yearofpassing
                    }
                },
                el.dataset.id
            );
        });
    });
}
// update job experience
if (update_job_experience.length) {
    [...update_job_experience].map((el) => {
        el.addEventListener('submit', (e) => {
            e.preventDefault();
            const index = e.target.dataset.index;
            const designation = document.getElementById(
                `designation${index}`
            ).value;
            const workplace = document.getElementById(
                `workplace${index}`
            ).value;
            const duration = document.getElementById(`duration${index}`).value;
            const jobtype = document.getElementById(`jobtype${index}`).value;

            return updateUserJobDetails(
                {
                    employementDetails: {
                        designation,
                        workplace,
                        duration,
                        jobtype
                    }
                },
                el.dataset.id
            );
        });
    });
}

// apply job
if (apply_job) {
    apply_job.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const experience = document.getElementById('experience').value;
        const category = document.getElementById('category').value;
        const speciality = document.getElementById('speciality').value;
        const currentLocation = document.getElementById('location').value;
        const privacyPolicy = true;
        console.log(
            name,
            phone,
            email,
            experience,
            category,
            speciality,
            currentLocation,
            privacyPolicy
        );
        return applyJob(
            {
                name,
                phone,
                email,
                experience,
                category,
                speciality,
                currentLocation,
                privacyPolicy
            },
            e.target.dataset.id
        );
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

// post a new job for user
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
        return postNewUserJob({
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
        });
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

            e.target.dataset.job
        );
    });
}

// cancel hearing aid order
if (cancel_hearing_aid_order) {
    cancel_hearing_aid_order.addEventListener('click', (e) => {
        e.preventDefault();
        return cancelHearingAidOrder(e.target.dataset.id);
    });
}

// cancel hearing aid
if (cancel_hearingaid_bookings.length) {
    [...cancel_hearingaid_bookings].map((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            return cancelHearingAidBookings(e.target.dataset.id);
        });
    });
}

if (common_fund_donation) {
    common_fund_donation.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById(`name`).value;
        const organization = document.getElementById(`organization`).value;
        const email = document.getElementById(`email`).value;
        const phone = document.getElementById(`phone`).value;
        const address = document.getElementById(`address`).value;
        const amount = document.getElementById(`amount`).value;
        console.log(document.querySelector(`.donationView.tab-text-active`));
        const view = document.querySelector(`.donationView.tab-text-active`)
            .dataset.term;
        let about = document.getElementById(`about`).value;

        return newFundDonation({
            name,
            organization,
            email,
            phone,
            address,
            amount,
            view,
            about
        });
    });
}

if (common_product_donation) {
    common_product_donation.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', document.getElementById(`nameAnbd`).value);
        form.append(
            'organization',
            document.getElementById(`organizationAnbd`).value
        );
        form.append('email', document.getElementById(`emailAnbd`).value);
        form.append('phone', document.getElementById(`phoneAnbd`).value);
        form.append('address', document.getElementById(`addressAnbd`).value);
        form.append('product', document.getElementById(`productAnbd`).value);
        form.append(
            'docs',
            document.getElementById(`productBannerAnbd`).files[0]
        );
        form.append(
            'producQuantity',
            document.getElementById(`producQuantityAnbd`).value
        );
        form.append(
            'view',
            document.querySelector(`.productDonationView.tab-text-active`)
                .dataset.term
        );
        form.append('description', document.getElementById(`aboutAnbd`).value);

        return newBulkProductDonner(form);
    });
}

if (common_product_donation_request) {
    common_product_donation_request.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', document.getElementById(`namePdreq`).value);
        form.append('cause', document.getElementById(`causePdreq`).value);
        form.append('email', document.getElementById(`emailPdreq`).value);
        form.append('phone1', document.getElementById(`phone1Pdreq`).value);
        form.append('phone2', document.getElementById(`phone2Pdreq`).value);
        form.append('address', document.getElementById(`addressPdreq`).value);
        form.append(
            'productType',
            document.getElementById(`productPdreq`).value
        );
        form.append('latitude', document.getElementById(`latitudePdreq`).value);
        form.append(
            'longitude',
            document.getElementById(`longitudePdreq`).value
        );
        form.append('docs1', document.getElementById(`profilePdreq`).files[0]);
        form.append('docs2', document.getElementById(`aadhaarPdreq`).files[0]);
        form.append(
            'docs3',
            document.getElementById(`disablityPdreq`).files[0]
        );
        form.append('description', document.getElementById(`aboutPdreq`).value);

        return newProductDonationRequester(form);
    });
}

if (new_fund_donation_request) {
    new_fund_donation_request.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', document.getElementById(`donName`).value);
        form.append(
            'hospitalName',
            document.getElementById(`donHospital`).value
        );
        form.append('cause', document.getElementById(`donIllness`).value);
        form.append('email', document.getElementById(`donEmail`).value);
        form.append('phone1', document.getElementById(`donPhone1`).value);
        form.append('phone2', document.getElementById(`donPhone2`).value);
        form.append(
            'currentAddress',
            document.getElementById(`donCurrentAddress`).value
        );
        form.append(
            'nativeAddress',
            document.getElementById(`donPerAddress`).value
        );
        form.append(
            'hospitalAvailableTimeFrom',
            document.getElementById(`donHospitalOpenTime`).value
        );
        form.append(
            'hospitalAvailableTimeTo',
            document.getElementById(`donHospitalCloseTime`).value
        );

        form.append('photo', document.getElementById(`donProfile`).files[0]);

        form.append(
            'idProof1',
            document.getElementById(`donIdProof1`).files[0]
        );
        form.append(
            'idProof2',
            document.getElementById(`donIdProof2`).files[0]
        );
        form.append(
            'bannerImage',
            document.getElementById(`donBannerImage`).files[0]
        );
        form.append(
            'hospitalContactNumber',
            document.getElementById(`donHosptialContact`).value
        );
        form.append(
            'hospitalAddress',
            document.getElementById(`donHospitalAddrss`).value
        );

        form.append(
            'patientReportSheet',
            document.getElementById(`donReport`).files[0]
        );
        form.append(
            'patientMedicalCertificate',
            document.getElementById(`donMedicalCertificate`).files[0]
        );
        form.append(
            'admitedDate',
            document.getElementById(`donAdmitDate`).value
        );
        form.append(
            'patientDetails',
            document.getElementById(`donPatientDetails`).value
        );
        form.append('amount', document.getElementById(`donAmount`).value);
        return newFundDonationRequester(form);
    });
}

// donation and charity
if (patient_fund_donation.length) {
    [...patient_fund_donation].map((el) => {
        el.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById(
                `name${e.target.dataset.index}`
            ).value;
            const organization = document.getElementById(
                `organization${e.target.dataset.index}`
            ).value;
            const email = document.getElementById(
                `email${e.target.dataset.index}`
            ).value;
            const phone = document.getElementById(
                `phone${e.target.dataset.index}`
            ).value;
            const address = document.getElementById(
                `address${e.target.dataset.index}`
            ).value;
            const amount = document.getElementById(
                `amount${e.target.dataset.index}`
            ).value;
            const view = document.querySelector(
                `.donationView${e.target.dataset.index}.tab-text-active`
            ).dataset.term;

            let about = document.getElementById(
                `about${e.target.dataset.index}`
            ).value;

            return newFundDonation(
                {
                    name,
                    organization,
                    email,
                    phone,
                    address,
                    amount,
                    view,
                    about
                },
                e.target.dataset.id
            );
        });
    });
}

// product fund donation
if (patient_product_donation.length) {
    [...patient_product_donation].map((el) => {
        el.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById(
                `nameP${e.target.dataset.index}`
            ).value;
            const view = document.querySelector(
                `.productDonationView${e.target.dataset.index}.tab-text-active`
            ).dataset.term;
            return newProductDonation({ name, view }, e.target.dataset.id);
        });
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