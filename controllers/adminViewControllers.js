// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// home
exports.adminHome = (req, res) =>
    res.status(200).render('admin/index', {
        activeService: 'home',
        userCount: req.body.userCount,
        vendorCount: req.body.vendorCount
    });

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// vendor management
// module name
exports.getVendorHome = (req, res) =>
    res.status(200).render('admin/vendor/vendorHome', {
        activeService: 'vendors'
    });
// requested  vendor list
exports.getRequesterVendorList = (req, res) =>
    res.status(200).render('admin/vendor/newPartnerRequests', {
        activeService: 'vendors',
        vendors: req.body.findDocs
    });
// vendor list
exports.getVendorList = (req, res) =>
    res.status(200).render('admin/vendor/vendorList', {
        activeService: 'vendors',
        vendors: req.body.findAllFilter
    });

// get a vendor with activity details
exports.getAVendor = (req, res) =>
    res.status(200).render('admin/vendor/aVendor', {
        activeService: 'vendors',
        vendor: req.body.vendor
    });

// get a vendor
exports.getAVendorDetails = (req, res) =>
    res.status(200).render('admin/vendor/vendorPersonalDetails', {
        activeService: 'vendors',
        activeList: 'personal',
        partner: req.docs,
        additional: req.body.additional ?? undefined
    });

// get a vendor facilites
exports.getAVendorServiceDetails = (req, res) =>
    res.status(200).render('admin/vendor/serviceandFacilities', {
        activeService: 'vendors',
        activeList: 'service',
        module: req.query.module,
        services: req.body.services,
        facilities: req.body.facilities,
        partner: req.body.partner,
        serviceList: req.body.serviceList
    });

// get a vendor booking management
exports.getAVendorBookingManagement = (req, res) =>
    res.status(200).render(req.query.destination, {
        activeService: 'vendors',
        activeList: 'booking',
        module: req.body.module,
        partner: req.body.applicants
    });

// ambulance driver
exports.getAAmbulanceDrivers = (req, res) =>
    res.status(200).render('admin/vendor/ambulance/ambulanceDrivers', {
        partner: req.docs,
        activeService: 'vendors',
        activeList: 'ambulance-driver'
    });

// ambulance facilities
exports.getAAmbulanceFacilities = (req, res) =>
    res.status(200).render('admin/vendor/ambulance/ambulanceFacilities', {
        partner: req.body.partner,
        services: req.body.services,
        activeService: 'vendors',
        activeList: 'ambulance-facilities'
    });
// ambulance facilities
exports.getAAmbulanceBooking = (req, res) =>
    res.status(200).render('admin/vendor/ambulance/ambulanceQuotes', {
        partner: req.body.partner,
        activeService: 'vendors',
        activeList: 'ambulance-quotes'
    });
// blood bank blood details
exports.getABloodbankBloodManage = (req, res) =>
    res.status(200).render('admin/vendor/bloodbank/bloodbankBloods', {
        partner: req.docs,
        activeService: 'vendors',
        activeList: 'bloodbank-bloods'
    });
// meet the expert service details
exports.getAExpertServiceManage = (req, res) =>
    res.status(200).render('admin/vendor/expert/expertServices', {
        partner: req.docs,
        list: req.body.list,
        services: req.body.services,
        activeService: 'vendors',
        activeList: 'expert-services'
    });

// meet the expert booking
exports.getAExpertsBooking = (req, res) =>
    res.status(200).render('admin/vendor/expert/expertBooking', {
        partner: req.body.booking,
        activeService: 'vendors',
        activeList: 'expert-booking'
    });

// ============================================================
// ============================================================
// ============================================================
// study abroad
// study abroad College management
exports.getStudyAboradCollegeDetailsManagement = (req, res) =>
    res
        .status(200)
        .render('admin/vendor/studyAbroad/collegeDetailsManagement', {
            partner: req.body.partner,
            activeList: 'college',
            activeService: 'vendors',
            college: req.docs.collegeDetails
        });
// study abroad course management
exports.getStudyAboradCourseDetailsManagement = (req, res) =>
    res.status(200).render('admin/vendor/studyAbroad/courseManagement', {
        partner: req.body.partner,
        activeList: 'course',
        activeService: 'vendors',
        college: req.docs.courseDetails
    });

// study abroad facilitie management
exports.getStudyAboradFacilitieManagement = (req, res) =>
    res.status(200).render('admin/vendor/studyAbroad/facilitieManagement', {
        partner: req.body.partner,
        activeList: 'facilities',
        activeService: 'vendors',
        college: req.docs.faciliteisAvailable
    });
// ============================================================
// ============================================================
// ============================================================
// job management
// get all jobs
exports.getJobLists = (req, res) =>
    res.status(200).render('admin/vendor/jobportal/job', {
        activeService: 'vendors',
        activeList: 'jobs',
        jobs: req.body.findDocs,
        partner: req.docs
    });

// post a job
exports.postAJob = (req, res) =>
    res.status(200).render('admin/vendor/jobportal/postJob', {
        activeService: 'vendors',
        activeList: 'jobs',
        partner: req.docs,
        categories: req.body.getAllData
    });

// post a job
exports.updateAJob = (req, res) =>
    res.status(200).render('admin/vendor/jobportal/updateJob', {
        activeService: 'vendors',
        activeList: 'jobs',
        partner: req.docs,
        categories: req.body.categories,
        job: req.body.job
    });

// view a job
exports.viewAJob = (req, res) =>
    res.status(200).render('admin/vendor/jobportal/viewJob', {
        activeService: 'vendors',
        partner: req.docs,
        job: req.body.findOnePopulateDocs
    });

// view a applicant
exports.viewAApplicant = (req, res) =>
    res.status(200).render('admin/vendor/jobportal/viewProfile', {
        activeService: 'vendors',
        partner: req.docs,
        applicant: req.body.applicant
    });

// ============================================================
// ============================================================
// ============================================================
// quotes
exports.getQuotesDetails = (req, res) =>
    res.status(200).render('admin/vendor/quotes/quotes', {
        activeService: 'vendors',
        activeLists: 'quotes',
        partner: req.docs,
        names: req.body.names,
        request: req.body.request,
        activeList: req.body.activeList,
        history: req.body.history
    });

// lowest quote details
exports.getRespondQuotesDetails = (req, res) =>
    res.status(200).render('admin/user/quotes/lowestQuotesList', {
        activeService: 'vendors',
        partner: req.docs,
        quotes: req.body.lowest,
        from: req.params.moduleName
    });

// ============================================================
// ============================================================
// ============================================================
// Hospital
// Hospital package managemment
exports.getHospitalPackageManagement = (req, res) =>
    res.status(200).render('admin/vendor/hospital/packageManagements', {
        partner: req.docs,
        activeList: 'package',
        activeService: 'vendors',
        packages: req.body.packages,
        packs: req.body.packs
    });

// Hospital service managemment
exports.getHospitalServiceManagement = (req, res) =>
    res.status(200).render('admin/vendor/hospital/services', {
        partner: req.body.partner,
        activeList: 'service',
        activeService: 'vendors',
        services: req.body.service.hospitalServices,
        packs: req.body.pack
    });
// Hospital facilite managemment
exports.getHospitalFacilitieManagement = (req, res) =>
    res.status(200).render('admin/vendor/hospital/facilities', {
        partner: req.body.partner,
        activeList: 'facilitie',
        activeService: 'vendors',
        facilities: req.docs.hospitalFacilities
    });

// Hospital speicalist managemment
exports.getHospitalSpecialManagement = (req, res) =>
    res.status(200).render('admin/vendor/hospital/specialist', {
        partner: req.body.partner,
        activeList: 'specialist',
        activeService: 'vendors',
        specialist: req.docs.specialist
    });

// Hospital room facilites managemment
exports.getHospitalRoomFacilitiesManagement = (req, res) =>
    res.status(200).render('admin/vendor/hospital/hospitalRoomFacilities', {
        partner: req.body.partner,
        activeList: 'room',
        activeService: 'vendors',
        room: req.docs.hospitalRoomFacilities ?? [],
        roomImages: req.docs.hospitalRoomImags ?? [],
        canteenImages: req.docs.hospitalCanteenImags ?? [],
        guestRoomImages: req.docs.hospitalGuestRoomImags ?? [],
        availableFacilities: req.docs.hospitalAvailableFacilities ?? {},
        speciality: req.docs.specialitiesDetails ?? {}
    });

// Hospital nearby facilities managemetn
exports.getHospitalNearbyFacilitiesManagemant = (req, res) => {
    res.status(200).render('admin/vendor/hospital/tourism/nearByFacilities', {
        activeList: 'nearby',
        activeService: 'vendors',
        activeSubList: 'nearbyfac',
        partner: req.body.partner,
        nearby: req.docs.nearbyFacilities
    });
};

// Hospital nearby hotels managemetn
exports.getHospitalNearbyHotelsManagemant = (req, res) => {
    res.status(200).render('admin/vendor/hospital/tourism/nearByHotels', {
        activeList: 'nearby',
        activeService: 'vendors',
        activeSubList: 'hotels',
        partner: req.body.partner,
        hotels: req.docs.nearBy?.hotels ?? []
    });
};

// Hospital nearby reaustarents managemetn
exports.getHospitalNearbyReastaurentsManagemant = (req, res) => {
    res.status(200).render('admin/vendor/hospital/tourism/nearByRestaurents', {
        activeList: 'nearby',
        activeService: 'vendors',
        activeSubList: 'restaurants',
        partner: req.body.partner,
        restaurants: req.docs.nearBy.restaurants ?? []
    });
};
// Hospital nearby airports managemetn
exports.getHospitalNearbyAirportsManagemant = (req, res) => {
    res.status(200).render('admin/vendor/hospital/tourism/nearByAirports', {
        activeList: 'nearby',
        activeService: 'vendors',
        activeSubList: 'airports',
        partner: req.body.partner,
        airports: req.docs.nearBy.airports ?? []
    });
};
// Hospital nearby train managemetn
exports.getHospitalNearbyTrainsManagemant = (req, res) => {
    res.status(200).render('admin/vendor/hospital/tourism/nearByTrain', {
        activeList: 'nearby',
        activeService: 'vendors',
        activeSubList: 'train',
        partner: req.body.partner,
        railwayStation: req.docs.nearBy.railwayStation ?? []
    });
};
// Hospital nearby reaustarents managemetn
exports.getHospitalNearbyBussManagemant = (req, res) => {
    res.status(200).render('admin/vendor/hospital/tourism/nearByBus', {
        activeList: 'nearby',
        activeService: 'vendors',
        activeSubList: 'bus',
        partner: req.body.partner,
        bus: req.docs.nearBy.busStop ?? []
    });
};
// Hospital nearby reaustarents managemetn
exports.getHospitalOrganAvailablity = (req, res) => {
    res.status(200).render(
        'admin/vendor/hospital/organManagement/organDonationManagement',
        {
            activeList: 'nearby',
            activeService: 'vendors',
            activeSubList: 'organs',
            partner: req.docs,
            organs: req.body.findDocs,
            organLists: req.body.organs
        }
    );
};
// ============================================================
// ============================================================
// ============================================================
// Speak to Us
// get my slots
exports.getSpeakToUsSlots = (req, res) =>
    res.status(200).render('admin/vendor/speekToUs/mySlots', {
        partner: req.partner,
        activeList: 'slots',
        activeService: 'vendors',
        slots: req.docs
    });

// ============================================================
// ============================================================
// ============================================================
// Online Consultancy
// get my slots
exports.getConsultancyToUsSlots = (req, res) =>
    res.status(200).render('admin/vendor/onlineConsultancy/mySlots', {
        partner: req.partner,
        activeList: 'slots',
        activeService: 'vendors',
        slots: req.docs,
        days: req.body.days
    });

// get booking slots
exports.getConsultancyBooking = (req, res) =>
    res.status(200).render('admin/vendor/onlineConsultancy/bookingManagement', {
        partner: req.docs,
        activeList: 'booking',
        activeService: 'vendors',
        booking: req.body.docs
    });

// ============================================================
// ============================================================
// ============================================================
// opticals
exports.getOpticalsProductsManagement = (req, res) =>
    res.status(200).render('admin/vendor/opticals/opticalProductsManagement', {
        partner: req.docs,
        products: req.body.products,
        orders: req.body.orders,
        activeList: 'products',
        activeService: 'vendors'
    });
// opticals bookig
exports.getOpticalsBookingManagement = (req, res) =>
    res.status(200).render('admin/vendor/opticals/opticalsBookingManagement', {
        partner: req.docs,
        active: req.body.active,
        history: req.body.history,
        activeList: 'booking',
        activeService: 'vendors'
    });
// ============================================================
// ============================================================
// ============================================================
// Hearinga id
// heaaringa id product management
exports.getHearingAidProductManagement = (req, res) =>
    res.status(200).render('admin/vendor/hearingaid/hearingaidShop', {
        activeList: 'hearingaidProduct',
        activeService: 'vendors',
        partner: req.docs,
        products: req.body.products,
        orders: req.body.orders
    });

// differetly abled product management
exports.getDifferentlyAbledProductManagement = (req, res) =>
    res
        .status(200)
        .render('admin/vendor/differentlyAbled/differentlyAbledShop', {
            activeList: 'differentlyProduct',
            activeService: 'vendors',
            partner: req.docs,
            products: req.body.products,
            orders: req.body.orders
        });

// hearing aid hospital booking
exports.getHearingAidHospitalProductManagement = (req, res) =>
    res.status(200).render('admin/vendor/hearingaid/hearingaidHospital', {
        activeList: 'booking',
        activeService: 'vendors',
        partner: req.docs,
        active: req.body.booking.active,
        history: req.body.booking.history
    });

// ============================================================
// ============================================================
// ============================================================
// Fitness
// Equipment managemnt
exports.getAEquidmentManagement = (req, res) =>
    res.status(200).render('admin/vendor/fitness/equipmentManagement', {
        activeList: 'equip',
        activeService: 'vendors',
        partner: req.docs
    });

// facilities management
exports.getFacilitiesManagement = (req, res) =>
    res.status(200).render('admin/vendor/fitness/facilitiesManagement', {
        activeList: 'facilities',
        activeService: 'vendors',
        partner: req.docs
    });

// video management
exports.getVideoManagement = (req, res) =>
    res.status(200).render('admin/vendor/fitness/videoManagement', {
        activeList: 'videos',
        activeService: 'vendors',
        partner: req.docs,
        videos: req.body.findDocs
    });

// ============================================================
// ============================================================
// ============================================================
// Laboratory
// get all laboratory
exports.getLaboratoryBooking = (req, res) =>
    res.status(200).render('admin/vendor/laboratory/laboratoryBookings', {
        activeList: 'bookings',
        activeService: 'vendors',
        partner: req.docs,
        booking: req.body.booking
    });

// get all services
exports.getLaboratoryServices = (req, res) =>
    res.status(200).render('admin/vendor/laboratory/laboratoryServices', {
        activeList: 'services',
        activeService: 'vendors',
        partner: req.docs,
        services: req.body.services
    });

// get all facilities
exports.getLaboratoryFacilities = (req, res) =>
    res.status(200).render('admin/vendor/laboratory/laboratoryFacilities', {
        activeList: 'facilities',
        activeService: 'vendors',
        partner: req.docs
    });

// get all lab images
exports.getLaboratoryImages = (req, res) =>
    res.status(200).render('admin/vendor/laboratory/laboratoryImages', {
        activeList: 'images',
        activeService: 'vendors',
        partner: req.docs
    });

// ============================================================
// ============================================================
// ============================================================
// pharmacy
// get all lab images
exports.getPharmacyView = (req, res) =>
    res.status(200).render('admin/vendor/pharmacy/pharmacyQuotes', {
        activeList: 'quotes',
        activeService: 'vendors',
        partner: req.docs,
        quotes: req.body.docs
    });

// get all products
exports.getPharmacyProductsView = (req, res) =>
    res.status(200).render('admin/vendor/pharmacy/pharmacyProducts', {
        activeList: 'products',
        activeService: 'vendors',
        partner: req.docs,
        products: req.body.docs,
        medicines: req.body.medicines
    });

// ============================================================
// ============================================================
// ============================================================
// medical market
// get all lab images
exports.getMedicalMarketManageProduct = (req, res) =>
    res.status(200).render('admin/vendor/market/marketProductAndOrders', {
        activeList: 'products',
        activeService: 'vendors',
        partner: req.docs,
        categories: req.body.categories,
        products: req.body.product,
        orders: req.body.orders
    });
// get all lab images
exports.getMedicalMarketManageQuotes = (req, res) =>
    res.status(200).render('admin/vendor/market/marketQuotes', {
        activeList: 'quotes',
        activeService: 'vendors',
        partner: req.docs,
        requested: req.body.quotes.requested,
        negotiate: req.body.quotes.negotiate,
        history: req.body.quotes.history
    });

// ============================================================
// ============================================================
// ============================================================
// Second opinion
// Secondd Opinion spensers
exports.getVendorOpinionList = (req, res) =>
    res.status(200).render('admin/vendor/secondOpinion/sponnserManagement', {
        activeList: 'sponsers',
        activeService: 'vendors',
        partner: req.docs,
        sponsers: req.body.findDocs
    });

// Secondd Opinion slots management
exports.getVendorSecondOpinionSlots = (req, res) =>
    res.status(200).render('admin/vendor/secondOpinion/mySlots', {
        activeList: 'slots',
        activeService: 'vendors',
        partner: req.partner,
        slots: req.docs,
        days: req.body.days
    });

// Secondd Opinion Booking management
exports.getVendorSecondOpinionBookingManagement = (req, res) =>
    res.status(200).render('admin/vendor/secondOpinion/bookingManagement', {
        activeList: 'bookings',
        activeService: 'vendors',
        partner: req.partner,
        booking: req.body.docs
    });

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// user management
// user home
exports.getAlluserHome = (req, res) =>
    res.status(200).render('admin/user/userHome', {
        activeService: 'user',
        users: req.body.findDocs
    });

// get a user
exports.getAUser = (req, res) => {
    res.status(200).render('admin/user/aUser', {
        activeService: 'user',
        user: req.docs
    });
};

// ============================================================
// ============================================================
// ============================================================
// ambulance
// user ambulance home
exports.getUserAmbulanceHome = (req, res) =>
    res.status(200).render('admin/user/ambulance/ambulanceHome', {
        activeService: 'user',
        quotes: req.body.quotes,
        user: {
            name: req.docs.name,
            id: req.user.hiwuueidmID,
            profileImage: req.user.profileImage,
            phone: req.docs.phone
        }
    });

// ============================================================
// ============================================================
// ============================================================
// homecare
// user homecare home
exports.getUserHomecareHome = (req, res) =>
    res.status(200).render('admin/user/homecare/homecareHome', {
        activeService: 'user',
        books: req.body.books,
        user: {
            name: req.docs.name,
            id: req.user.hiwuueidmID,
            profileImage: req.user.profileImage,
            phone: req.docs.phone
        }
    });
// ============================================================
// ============================================================
// ============================================================
// expert
// user expert home
exports.getUserExpertHome = (req, res) =>
    res.status(200).render('admin/user/expert/expertHome', {
        activeService: 'user',
        books: req.body.books,
        user: {
            name: req.docs.name,
            id: req.user.hiwuueidmID,
            profileImage: req.user.profileImage,
            phone: req.docs.phone
        }
    });

// ============================================================
// ============================================================
// ============================================================
// deaddiction
// user deaddiction home
exports.getUserDeaddictionHome = (req, res) =>
    res.status(200).render('admin/user/deaddiction/deaddictionHome', {
        activeService: 'user',
        books: req.body.books,
        user: {
            name: req.docs.name,
            id: req.user.hiwuueidmID,
            profileImage: req.user.profileImage,
            phone: req.docs.phone
        }
    });
// ============================================================
// ============================================================
// ============================================================
// blood donation
// user blood donation donners
exports.getUserBloodDonationHome = (req, res) =>
    res.status(200).render('admin/user/blooddonation/bloodDonner', {
        activeService: 'user',
        activeList: 'donners',
        donner: req.body.findDocs,
        user: {
            name: req.docs.name,
            id: req.docs.hiwuueidmID,
            profileImage: req.docs.profileImage,
            phone: req.docs.phone
        }
    });

// user blood donation requester
exports.getUserBloodDonationRequester = (req, res) =>
    res.status(200).render('admin/user/blooddonation/bloodRequester', {
        activeService: 'user',
        activeList: 'requesters',
        requester: req.body.requester,
        user: {
            name: req.docs.name,
            id: req.docs.hiwuueidmID,
            profileImage: req.docs.profileImage,
            phone: req.docs.phone
        }
    });

// user blood donation request
exports.getUserBloodDonationRequest = (req, res) =>
    res.status(200).render('admin/user/blooddonation/bloodRequest', {
        activeService: 'user',
        activeList: 'request',
        request: req.body.requester,
        user: {
            name: req.docs.name,
            id: req.docs.hiwuueidmID,
            profileImage: req.docs.profileImage,
            phone: req.docs.phone
        }
    });

// ============================================================
// ============================================================
// ============================================================
// opticals
// orders
exports.getUserOpticalsOrders = (req, res) =>
    res.status(200).render('admin/user/opticals/orderManagement', {
        activeService: 'user',
        activeList: 'orders',
        orders: req.body.orders,
        user: {
            name: req.docs.name,
            id: req.docs.hiwuueidmID,
            profileImage: req.docs.profileImage,
            phone: req.docs.phone
        }
    });

// booking
exports.getUserOpticalsBooking = (req, res) =>
    res.status(200).render('admin/user/opticals/bookingManagement', {
        activeService: 'user',
        activeList: 'booking',
        booking: req.body.booking,
        user: {
            name: req.docs.name,
            id: req.docs.hiwuueidmID,
            profileImage: req.docs.profileImage,
            phone: req.docs.phone
        }
    });

// ============================================================
// ============================================================
// ============================================================
// hearing aid
// hearing aid booking
exports.getUserHearingAidBookingHospital = (req, res) =>
    res.status(200).render('admin/user/hearingaid/hearingaidHospital', {
        activeService: 'user',
        activeList: 'booking',
        booking: req.body.booking,
        user: {
            name: req.docs.name,
            id: req.docs.hiwuueidmID,
            profileImage: req.docs.profileImage,
            phone: req.docs.phone
        }
    });

// hearing aid orders
exports.getUserHearingAidOrdes = (req, res) =>
    res.status(200).render('admin/user/hearingaid/hearingaidShop', {
        activeService: 'user',
        activeList: 'hearingaidOrder',
        orders: req.body.orders,
        user: {
            name: req.docs.name,
            id: req.docs.hiwuueidmID,
            profileImage: req.docs.profileImage,
            phone: req.docs.phone
        }
    });

// differently abled orders
exports.getUserDifferentlyabliedOrdes = (req, res) =>
    res.status(200).render('admin/user/differentlyAbled/differentlyAbledShop', {
        activeService: 'user',
        activeList: 'differOrder',
        orders: req.body.orders,
        user: {
            name: req.docs.name,
            id: req.docs.hiwuueidmID,
            profileImage: req.docs.profileImage,
            phone: req.docs.phone
        }
    });

// ============================================================
// ============================================================
// ============================================================
// donation and charity
// get all donation and charity
exports.getUserFundDonations = (req, res) =>
    res.status(200).render('admin/user/donationAndCharity/userFundDonation', {
        activeService: 'user',
        activeList: 'fund',
        funds: req.body.findAllFilter,
        user: {
            name: req.docs.name,
            id: req.docs.hiwuueidmID,
            profileImage: req.docs.profileImage,
            phone: req.docs.phone
        }
    });

// get all donation request hisotry
exports.getAllDonationRequestHistory = (req, res) =>
    res
        .status(200)
        .render('admin/user/donationAndCharity/userFundDonationRequest', {
            activeService: 'user',
            activeList: 'fundreq',
            fundreq: req.body.findDocs,
            user: {
                name: req.docs.name,
                id: req.docs.hiwuueidmID,
                profileImage: req.docs.profileImage,
                phone: req.docs.phone
            }
        });

// get all user proudct donation
exports.getAllUserProductDonationHistory = (req, res) =>
    res
        .status(200)
        .render('admin/user/donationAndCharity/userProductDonation', {
            activeService: 'user',
            activeList: 'product-donation',
            productDonations: req.body.docs,
            individual: req.body.individual,
            bulk: req.body.bulk,
            requests: req.body.requests,
            user: {
                name: req.docs.name,
                id: req.docs.hiwuueidmID,
                profileImage: req.docs.profileImage,
                phone: req.docs.phone
            }
        });

// ============================================================
// ============================================================
// ============================================================
// medical records
exports.getMedicalRecords = (req, res) =>
    res.status(200).render('admin/user/medicalRecords/medicalRecords', {
        activeService: 'user',
        records: req.body.records,
        user: {
            name: req.docs.name,
            id: req.docs.hiwuueidmID,
            profileImage: req.docs.profileImage,
            phone: req.docs.phone
        }
    });

// ============================================================
// ============================================================
// ============================================================
// pharmacy
exports.getPharmacyQuotes = (req, res) =>
    res.status(200).render('admin/user/pharmacy/pharmacyRecords', {
        activeService: 'user',
        quotes: req.body.docs,
        user: {
            name: req.docs.name,
            id: req.docs.hiwuueidmID,
            profileImage: req.docs.profileImage,
            phone: req.docs.phone
        }
    });

// get a pharmacy
exports.getPharmacyAQuotes = (req, res) =>
    res.status(200).render('admin/user/pharmacy/pharmacyAQuote', {
        activeService: 'user',
        quotes: req.body.docs,
        user: {
            name: req.docs.name,
            id: req.docs.hiwuueidmID,
            profileImage: req.docs.profileImage,
            phone: req.docs.phone
        }
    });

// ============================================================
// ============================================================
// ============================================================
// job portal
//  my jjob applications
exports.getJobApplications = (req, res) =>
    res.status(200).render('admin/user/jobportal/jobApplications', {
        activeService: 'user',
        activeList: 'applications',
        application: req.body.docs,
        user: {
            name: req.docs.name,
            id: req.docs.hiwuueidmID,
            profileImage: req.docs.profileImage,
            phone: req.docs.phone
        }
    });

//  user jobs
exports.getUserJobs = (req, res) =>
    res.status(200).render('admin/user/jobportal/job', {
        activeService: 'user',
        activeList: 'jobs',
        jobs: req.body.docs,
        user: {
            name: req.docs.name,
            id: req.docs.hiwuueidmID,
            profileImage: req.docs.profileImage,
            phone: req.docs.phone
        }
    });

//  post new jobs
exports.postUserJob = (req, res) =>
    res.status(200).render('admin/user/jobportal/postJob', {
        activeService: 'user',
        activeList: 'jobs',
        categories: req.body.getAllData,
        user: {
            name: req.docs.name,
            id: req.docs.hiwuueidmID,
            profileImage: req.docs.profileImage,
            phone: req.docs.phone
        }
    });

//  updateuser  jobs
exports.updateUserJob = (req, res) =>
    res.status(200).render('admin/user/jobportal/updateJob', {
        activeService: 'user',
        activeList: 'jobs',
        categories: req.body.categories,
        job: req.body.job,
        user: {
            name: req.docs.name,
            id: req.docs.hiwuueidmID,
            profileImage: req.docs.profileImage,
            phone: req.docs.phone
        }
    });

//  updateuser  jobs
exports.viewAUserJob = (req, res) =>
    res.status(200).render('admin/user/jobportal/viewJob', {
        activeService: 'user',
        activeList: 'jobs',
        job: req.body.findOnePopulateDocs,
        user: {
            name: req.docs.name,
            id: req.docs.hiwuueidmID,
            profileImage: req.docs.profileImage,
            phone: req.docs.phone
        }
    });

//  view a applicant
exports.viewAUserApplicant = (req, res) =>
    res.status(200).render('admin/user/jobportal/viewProfile', {
        activeService: 'user',
        activeList: 'jobs',
        applicant: req.body.applicant,
        user: {
            name: req.docs.name,
            id: req.docs.hiwuueidmID,
            profileImage: req.docs.profileImage,
            phone: req.docs.phone
        }
    });

// ============================================================
// ============================================================
// ============================================================
// Medical market
exports.getMedicalMarketOrders = (req, res) =>
    res.status(200).render('admin/user/medicalMarket/marketOrders', {
        orders: req.body.orders,
        activeService: 'user',
        activeList: 'orders',
        user: {
            name: req.docs.name,
            id: req.docs.hiwuueidmID,
            profileImage: req.docs.profileImage,
            phone: req.docs.phone
        }
    });
// view a order
exports.getAMedicalMarketOrderList = (req, res) =>
    res.status(200).render('admin/user/medicalMarket/marketViewAOrders', {
        orders: req.body.findDocs,
        activeService: 'user',
        activeList: 'orders',
        user: {
            name: req.docs.name,
            id: req.docs.hiwuueidmID,
            profileImage: req.docs.profileImage,
            phone: req.docs.phone
        }
    });

// quotes
exports.getMedicalMarketQuotes = (req, res) => {
    console.log(req.body.activeList);
    res.status(200).render('admin/user/medicalMarket/marketQuotes', {
        names: req.body.names,
        request: req.body.request,
        negotiate: req.body.negotiate,
        history: req.body.history,
        address: req.body.address,
        activeService: 'user',
        activeList: 'quotes',
        user: {
            name: req.docs.name,
            id: req.docs.hiwuueidmID,
            profileImage: req.docs.profileImage,
            phone: req.docs.phone
        }
    });
};
exports.getUserRespondQuotesDetails = (req, res) =>
    res.status(200).render('admin/user/medicalMarket/lowestQuotesList', {
        activeService: 'user',
        partner: req.docs,
        quotes: req.body.lowest,
        from: req.params.moduleName,
        user: {
            name: req.docs.name,
            id: req.docs.hiwuueidmID,
            profileImage: req.docs.profileImage,
            phone: req.docs.phone
        }
    });

// ============================================================
// ============================================================
// ============================================================
// online consultacy
// get booking slots
exports.getUserConsulatacyBooking = (req, res) =>
    res.status(200).render('admin/user/onlineConsultancy/bookingManagement', {
        partner: req.docs,
        activeList: 'booking',
        activeService: 'user',
        booking: req.body.docs,
        user: {
            name: req.docs.name,
            id: req.docs.hiwuueidmID,
            profileImage: req.docs.profileImage,
            phone: req.docs.phone
        }
    });

// ============================================================
// ============================================================
// ============================================================
// laboratory
exports.getUserLaboratoryBooking = (req, res) =>
    res.status(200).render('admin/user/laboratory/laboratoryBookings', {
        partner: req.docs,
        activeList: 'booking',
        activeService: 'user',
        booking: req.body.docs,
        user: {
            name: req.docs.name,
            id: req.docs.hiwuueidmID,
            profileImage: req.docs.profileImage,
            phone: req.docs.phone
        }
    });

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// modulesmanagement
// Module home
exports.getModuleHome = (req, res) =>
    res.status(200).render('admin/module/moduleHome', {
        activeService: 'module'
    });

// ============================================================
// ============================================================
// ============================================================
// homecare module
exports.getModuleHomecareHome = (req, res) =>
    res.status(200).render('admin/module/homecare/homecareModuleHome', {
        activeService: 'module',
        modules: req.body.getAllData
    });
// ============================================================
// ============================================================
// ============================================================
// deaddiction module
exports.getModuleDeaddictionHome = (req, res) =>
    res.status(200).render('admin/module/deaddiction/deaddictionModuleHome', {
        activeService: 'module',
        modules: req.body.getAllData
    });
// ============================================================
// ============================================================
// ============================================================
// ambulance module
exports.getModulesAmbulanceHome = (req, res) =>
    res.status(200).render('admin/module/ambulance/ambulanceModuleHome', {
        activeService: 'module',
        modules: req.body.getAllData
    });

// ============================================================
// ============================================================
// ============================================================
// Hospital Packages
exports.getModulesHospitalPackageHome = (req, res) =>
    res.status(200).render('admin/module/hospital/hospitalCategories', {
        activeService: 'module',
        activeList: 'categories',
        modules: req.body.getAllData
    });

// organ lists
exports.getModulesOrgans = (req, res) =>
    res.status(200).render('admin/module/hospital/organManagement', {
        activeService: 'module',
        activeList: 'organs',
        modules: req.body.getAllData
    });

// ============================================================
// ============================================================
// ============================================================
// fitness
exports.getModulesFitnesNutrionsHome = (req, res) =>
    res.status(200).render('admin/module/fitness/fitnessModuleHome', {
        activeService: 'module',
        modules: req.body.findAllFilter ?? []
    });

// ============================================================
// ============================================================
// ============================================================
// pharmacy
// pharmacy categories
exports.getModulesFitnesPharmacyCategories = (req, res) =>
    res.status(200).render('admin/module/pharmacy/pharmcyCategories', {
        activeService: 'module',
        activeList: 'categories',
        modules: req.body.findAllFilter ?? []
    });

// get all medecines
exports.getModulesFitnesPharmacyMedicines = (req, res) =>
    res.status(200).render('admin/module/pharmacy/pharmcyMedicines', {
        activeService: 'module',
        activeList: 'medicines',
        medicines: req.body.medicines ?? [],
        categories: req.body.categories ?? []
    });

// ============================================================
// ============================================================
// ============================================================
// laboratory
exports.getModulesFitnesLaboratoryCategories = (req, res) =>
    res.status(200).render('admin/module/laboratory/laboratoryCategories', {
        activeService: 'module',
        modules: req.body.findAllFilter ?? []
    });

// ============================================================
// ============================================================
// ============================================================
// job portsl
exports.getModuleJobCategories = (req, res) =>
    res.status(200).render(`admin/module/job/jobCategories`, {
        activeService: 'module',
        modules: req.body.getAllData
    });
// ============================================================
// ============================================================
// ============================================================
//second opinion
exports.getAllRequestedOpinionSponsers = (req, res) =>
    res.status(200).render('admin/module/secondOpinion/newRequest', {
        activeService: 'module',
        activeList: 'sponsers',
        sponsers: req.body.docs
    });

// ============================================================
// ============================================================
// ============================================================
// One use
// Blog categories
exports.getAllOneUsBlogCategories = (req, res) =>
    res.status(200).render('admin/module/oneUs/blogCategories', {
        activeService: 'module',
        activeList: 'blog-categories',
        blogs: req.body.getAllData
    });

// Blogs
exports.getAllOneUsBlogs = (req, res) =>
    res.status(200).render('admin/module/oneUs/blogs', {
        activeService: 'module',
        activeList: 'blogs',
        blogs: req.body.blogs,
        categories: req.body.categories
    });
// Blogs requests
exports.getAllOneUsBlogsRequests = (req, res) =>
    res.status(200).render('admin/module/oneUs/blogRequests', {
        activeService: 'module',
        activeList: 'blogs',
        blogs: req.body.findDocs
    });
// video categories
exports.getAllOneUsVideoCategories = (req, res) =>
    res.status(200).render('admin/module/oneUs/videoCategories', {
        activeService: 'module',
        activeList: 'videos-categore',
        videos: req.body.getAllData
    });

// Videos
exports.getAllOneUsVideos = (req, res) =>
    res.status(200).render('admin/module/oneUs/videos', {
        activeService: 'module',
        activeList: 'videos',
        videos: req.body.videos,
        categories: req.body.categories
    });

// Videos requests
exports.getAllOneUsVideoRequests = (req, res) =>
    res.status(200).render('admin/module/oneUs/videosRequests', {
        activeService: 'module',
        activeList: 'videos',
        videos: req.body.findDocs
    });

// ============================================================
// ============================================================
// ============================================================
// Doctor Categorries
exports.getAllDoctorCategories = (req, res) =>
    res.status(200).render('admin/module/doctor/doctorCategories', {
        activeService: 'module',
        activeList: 'doctor-categories',
        doctors: req.body.getAllData ?? []
    });

// ambulance module
// ============================================================
// ============================================================
// ============================================================
// ambulance module
// ambulance home
exports.getModuleAmbulanceHome = (req, res) =>
    res.status(200).render('admin/ambulance/ambulanceHome', {
        activeService: 'ambulance'
    });
// ambulance drivers
exports.getModuleAmbulanceDriver = (req, res) =>
    res.status(200).render('admin/ambulance/ambulanceDrivers', {
        activeService: 'ambulance',
        drivers: req.body.findAllFilter
    });
// traffic police management
exports.getModuleTrafficPolice = (req, res) =>
    res.status(200).render('admin/ambulance/ambulanceTrafficPolice', {
        activeService: 'ambulance',
        police: req.body.findAllFilter
    });

// new ambulance alert management
exports.getModuleAlertNewAlerts = (req, res) =>
    res.status(200).render('admin/ambulance/ambulanceAlertNewAlert', {
        activeService: 'ambulance',
        activeList: 'new-request',
        requests: req.body.requests,
        drivers: req.body.drivers
    });

// verify ambulance alert
exports.getModuleAlertVerifyAlerts = (req, res) =>
    res.status(200).render('admin/ambulance/ambulanceAlertNewVerifyRequest', {
        activeService: 'ambulance',
        activeList: 'verify-request',
        requests: req.body.findDocs
    });

// ============================================================
// ============================================================
// ============================================================
// Medical marekt
exports.getModuleMedicalMarketCategoreis = (req, res) =>
    res
        .status(200)
        .render('admin/module/medicalMarket/medicalMarketCategories', {
            activeService: 'module',
            activeList: 'categories',
            modules: req.body.getAllData
        });

// ============================================================
// ============================================================
// ============================================================
// Medical marekt
exports.getModuleMeetTheeExpertCategoreis = (req, res) =>
    res
        .status(200)
        .render('admin/module/meetTheExperts/meetTheExpertCategories', {
            activeService: 'module',
            activeList: 'categories',
            modules: req.body.getAllData
        });
