// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Shared
// home
exports.getHome = (req, res) =>
    res.render('user/home', { user: res.locals.user });

// login
exports.login = (req, res) => res.render('shared/login');
// get thank you
exports.getUserThankyou = (req, res) => res.render('shared/userThankyou');

// get user my account
exports.getUserMyAccount = (req, res) =>
    res.render('user/myAccount', { user: req.user });

// get user my account
exports.getVendorLists = (req, res) =>
    res.render('user/vendorLIsts', { user: req.user, vendors: req.body.docs });

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Ambulance
exports.getUserAmbulanceHome = (req, res) =>
    res.render('user/ambulance/ambulanceHome', {
        user: req.user,
        services: req.body.docs
    });
// select ambulance quote
exports.getUserAmbulanceQuoteSection = (req, res) =>
    res.render('user/ambulance/ambulanceLocations', {
        user: req.user,
        services: req.body.services
    });

// select ambulance bookings
exports.getUserAmbulanceQuoteBookings = (req, res) =>
    res.render('user/ambulance/ambulanceBookings', {
        user: req.user,
        quotes: req.body.quotes
    });

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Medical Market
// Medical Market home
exports.getUserMedicalMarketHome = (req, res) =>
    res.render('user/market/marketPlaceHome', {
        user: req.user,
        docs: req.body.getAllData
    });

// Medical Market categorries
exports.getUserMedicalMarketCategoreis = (req, res) =>
    res.render('user/market/marketPlaceShop', {
        user: req.user,
        products: req.body.findAllFilter,
        categories: req.body.getAllData
    });

// Medical Market View A Product
exports.getUserMedicalMarketViewAProduct = (req, res) =>
    res.render('user/market/marketPlaceViewProduct', {
        user: req.user,
        product: req.body.findOnePopulateDocs
    });

// Medical Market checkout
exports.getUserMedicalMarketCheckout = (req, res) =>
    res.render('user/market/marketPlaceCheckout', {
        user: req.user,
        products: req.body.docs,
        address: req.body.address
    });

// Medical market carts
exports.getUserMedicalMarketCarts = (req, res) =>
    res.render('user/market/marketPlaceCart', {
        user: req.user,
        carts: req.body.docs
    });

// Medical market wishlist
exports.getUserMedicalMarketWishlists = (req, res) =>
    res.render('user/market/marketPlaceWishlist', {
        user: req.user,
        wishlists: req.body.docs
    });

// Medical market orders
exports.getUserMedicalMarketorders = (req, res) =>
    res.render('user/market/marketPlaceMyOrders', {
        user: req.user,
        orders: req.body.orders
    });

// Medical market view a order
exports.getUserMedicalMarketViewAOrders = (req, res) =>
    res.render('user/market/marketPlaceViewOrder', {
        user: req.user,
        orders: req.body.findDocs
    });

// Medical market view a order
exports.getUserMedicalMarketQuotesManagement = (req, res) =>
    res.render('user/market/marketPlaceMyQuotes', {
        user: req.user,
        names: req.body.names,
        request: req.body.request,
        negotiate: req.body.negotiate,
        history: req.body.history,
        address: req.body.address
    });

// Medical market lowest quiotes
exports.getUserMedicalMarketLowestQuotesManagement = (req, res) =>
    res.render('user/market/marketPlaceLowestQuotes', {
        user: req.user,
        quotes: req.body.lowest
    });

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Homecare
// get homecare
exports.getUserHomecareServiceHome = (req, res) =>
    res.render('user/homecare/homecareServiceHome', {
        user: req.user,
        homecare: req.body.getAllData
    });

// get homecare services based services
exports.getUserHomecareServiceServiceList = (req, res) =>
    res.render('user/homecare/homecareServiceServiceList', {
        user: req.user,
        homecare: req.body.getAllData,
        services: req.body.findAllFilter,
        type: req.body.findAllFilter[0]?.serviceType ?? req.query.serviceType,
        name: req.body.findAllFilter[0]?.serviceName ?? req.params.serviceName
    });

// get homecare services
exports.getUserHomecareServiceAService = (req, res) =>
    res.render('user/homecare/homecareServiceAService', {
        status: 'Success',
        user: req.user,
        service: req.body.findOnePopulateDocs,
        related: req.body.relatedData,
        address: req.body.address
    });

// get my homecare bookings
exports.getUserHomecareBookings = (req, res) =>
    res.render('user/homecare/homecareAccount', {
        status: 'Success',
        user: req.user,
        docs: req.body.findAllFilter
    });

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Fitness
// Fitness Home
exports.getUserFitnessHome = (req, res) =>
    res.render('user/fitness/fitnessHome', { user: req.user });

// get fitness work out videos
exports.getUserFitnessWorkoutVideos = (req, res) =>
    res.render('user/fitness/workoutVideos/fitnessWorkoutVideos', {
        user: req.user,
        videos: req.body.docs,
        name: req.params.type
    });

// get s fitness work out video
exports.getUserAFitnessWorkoutVideo = (req, res) =>
    res.render('user/fitness/workoutVideos/fitnessViewWorkoutVideos', {
        user: req.user,
        video: req.body.docs
    });

// get fitness centers
exports.getUserFinessCenters = (req, res) =>
    res.render('user/fitness/centres/fitnessFitnessCentersHome', {
        user: req.user,
        centers: req.body.findAllFilter,
        name: req.params.type
    });

// get a fitness center
exports.getUserAFitnessCenters = (req, res) =>
    res.render('user/fitness/centres/fitnessFitnessViewACenters', {
        user: req.user,
        center: req.docs
    });

// get fitness foods
exports.getUserFitnessFoods = (req, res) =>
    res.render('user/fitness/foods/fitnessFitnessFoods', {
        user: req.user,
        foods: req.body.findAllFilter
    });

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Blood Donation
// Blood donation home
exports.getUserBloodDonationHome = (req, res) =>
    res.render('user/bloodDonation/bloodDonationHome', {
        user: req.user
    });

// Blood Donation Request donner
exports.getUserBloodDonationFindDonner = (req, res) =>
    res.render('user/bloodDonation/bloodDonationFindRelatedDonners', {
        user: req.user,
        donners: req.body.findOnePopulateDocs,
        id: req.docs.hiwnbrID
    });

// Blood Donation Blood Banks
exports.getUserBloodDonationBloodBanks = (req, res) =>
    res.render('user/bloodDonation/bloodDonationBloodBanks', {
        user: req.user,
        bloodbanks: req.body.bloodBanks
    });

// get accepted requests
exports.getUserBloodDonationAcceptedRequests = (req, res) =>
    res.render('user/bloodDonation/bloodDonationAcceptedRequests', {
        user: req.user,
        docs: req.body.findAllFilter
    });

// get my reqeust
exports.getUserBloodDonationMyReqeuests = (req, res) =>
    res.render('user/bloodDonation/bloodDonationMyRequests', {
        user: req.user,
        requester: req.body.requester,
        request: req.body.request,
        acceptedRequest: req.body.acceptedRequest
    });

// get my history
exports.getUserBloodDonationMyHistory = (req, res) =>
    res.render('user/bloodDonation/bloodDonationMyHistory', {
        user: req.user,
        requester: req.body.requester,
        request: req.body.request
    });

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// job protal
exports.getUserJobPortalHome = (req, res) =>
    res.render('user/jobPortal/jobportalHome', {
        user: req.user
    });

// job porrtal job search
exports.getUserJobPortalSearch = (req, res) =>
    res.render('user/jobPortal/jobPortalJobaList', {
        user: req.user,
        jobs: req.body.findAllFilter
    });

// get a job in job portal
exports.getUserJobPortalGetAJob = (req, res) =>
    res.render('user/jobPortal/jobPortalJobGetAJob', {
        user: req.user,
        doc: req.body.docs
    });

// get a job portal profile
exports.getUserJobPortalProfile = (req, res) =>
    res.render('user/jobPortal/jobPortalProfile', {
        user: req.user,
        jobs: req.body.docs,
        profile: req.body.profile
    });

// get a job manage profile
exports.getuserJobPortalManageProfile = (req, res) =>
    res.render('user/jobPortal/jobPortalManageProfile', {
        user: req.user,
        doc: req.body.docs
    });

// get user job
exports.getUsersJob = (req, res) =>
    res.render('user/jobPortal/jobPost/job', {
        user: req.user,
        jobs: req.body.docs
    });

//  post job
exports.getPostNewJob = (req, res) =>
    res.render('user/jobPortal/jobPost/postJob', {
        user: req.user,
        categories: req.body.getAllData
    });
// view job
exports.viewUserJob = (req, res) =>
    res.render('user/jobPortal/jobPost/viewJob', {
        user: req.user,
        job: req.body.findOnePopulateDocs
    });

exports.updateUserJob = (req, res) =>
    res.render('user/jobPortal/jobPost/updateJob', {
        user: req.user,
        categories: req.body.categories,
        job: req.body.job
    });
exports.viewJobApplicant = (req, res) =>
    res.render('user/jobPortal/jobPost/viewProfile', {
        user: req.user,
        applicant: req.body.applicant
    });
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Deaddication
// Deaddiction home
exports.getUserDeaddictionHome = (req, res) => {
    res.render('user/deaddiction/deaddictionHome', {
        user: req.user,
        docs: req.body.findAllFilter
    });
};

// Get a deaddiction service
exports.getUserDeaddictionAService = (req, res) =>
    res.render('user/deaddiction/deaddictionViewDetails', {
        user: req.user,
        doc: req.body.docs
    });

// Get a deaddiction Bookings
exports.getUserDeaddictionHistory = (req, res) =>
    res.render('user/deaddiction/deaddictionBookingDetails', {
        user: req.user,
        docs: req.body.findAllFilter
    });

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Medical records
// Medical records home
exports.getUserMedicalRecordsHome = (req, res) =>
    res.render('user/medicalRecords/medicalRecordHome', {
        user: req.user
    });

// medical record details
exports.getUserMedicalRecordsList = (req, res) =>
    res.render('user/medicalRecords/medicalRecordViewRecords', {
        user: req.user,
        records: req.body.records
    });

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Hospital
// ============================================================
// ============================================================
// ============================================================
// Hopital package
// package home
exports.getUserHospitalPackageHome = (req, res) =>
    res.render('user/hospital/package/hospitalPackageHome', {
        user: req.user,
        packages: req.body.findAllFilter
    });

// package lists
exports.getUserHospitalPackageLists = (req, res) =>
    res.render('user/hospital/package/hospitalPackageList', {
        user: req.user,
        lists: req.body.docs,
        packages: req.body.packages,
        name: req.params.packageName
    });

// package details
exports.getUserHospitalPackageDetails = (req, res) =>
    res.render('user/hospital/package/hospitalPackageViewPackage', {
        user: req.user,
        package: req.body.docs,
        name: req.params.packageName
    });

// ============================================================
// ============================================================
// ============================================================
// Medical Tourism
// tourism home
exports.getUserHospitalTourismHome = (req, res) =>
    res.render('user/hospital/tourism/medicalTourismHome', {
        user: req.user,
        docs: req.body.findAllFilter
    });

// tourism hospital list
exports.getUserHospitalTourismList = (req, res) =>
    res.render('user/hospital/tourism/medicalTourismHospitalList', {
        user: req.user,
        docs: req.body.docs,
        packages: req.body.findAllFilter,
        name: req.params.packageName
    });

// tourism hospital detials
exports.getUserHospitalTousimDetails = (req, res) =>
    res.render('user/hospital/tourism/medicalTourismHospitalDetails', {
        user: req.user,
        doc: req.body.docs
    });

// ============================================================
// ============================================================
// ============================================================
// Hospital list
exports.getUserHospitalDetailsList = (req, res) =>
    res.render('user/hospital/details/hospitalDetailsHome', {
        user: req.user,
        docs: req.body.docs,
        name: req.query.type
    });

// Hospital details
exports.getUserHospitalDetailsListDetails = (req, res) =>
    res.render('user/hospital/details/hospitalDetailsDetails', {
        user: req.user,
        doc: req.body.docs
    });

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Differently abled

// ============================================================
// ============================================================
// ============================================================
// Differetnly Abled products
exports.getUserDifferetnlyAbledProuctLists = (req, res) =>
    res.render('user/differentlyAbled/buy/differentlyAbledHome', {
        user: req.user,
        products: req.body.docs
    });

// get a differetnly abled product
exports.getUserDifferetnlyAbledProuctDetails = (req, res) =>
    res.render('user/differentlyAbled/buy/differentlyAbledProductDetails', {
        user: req.user,
        product: req.body.docs
    });

// get a differetnly abled product checkout
exports.getUserDifferetnlyAbledProuctCheckout = (req, res) =>
    res.render('user/differentlyAbled/buy/differentlyAbledCheckout', {
        user: req.user,
        address: req.body.findDocs
    });

// get a differetnly abled product order
exports.getUserDifferetnlyAbledProuctOrders = (req, res) =>
    res.render('user/differentlyAbled/buy/differentlyAbledAccount', {
        user: req.user,
        orders: req.body.findAllFilter
    });

// get a differetnly abled product order
exports.getUserDifferetnlyAbledProductOrderDetails = (req, res) =>
    res.render('user/differentlyAbled/buy/differentlyAbledViewOrder', {
        user: req.user,
        doc: req.docs
    });

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Donation and Charity
// HOme
exports.getUserDonationAndCharityHome = (req, res) =>
    res.render('user/donationAndCharity/donationAndCharityHome', {
        user: req.user,
        docs: req.body.docs
    });

// History
exports.getUserDonationAndCharityHistory = (req, res) =>
    res.render('user/donationAndCharity/donationAndCharityDonationHistory', {
        user: req.user,
        fund: req.body.fund,
        bulk: req.body.bulk,
        patient: req.body.patient,
        myfundrequests: req.body.myfundrequests,
        myProductRequests: req.body.myProductRequests
    });

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Knoledge base
// konwledge base home
exports.getUserKnowlegeBase = (req, res) =>
    res.render('user/knowledgeBase/knowledgeBaseHome', {
        user: req.user
    });

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Organ Donation
// organ donation home
exports.getUserOrganDonationHOme = (req, res) =>
    res.render('user/organDonation/organDonationHome', {
        user: req.user,
        docs: req.body.organs,
        organs: req.body.lists
    });

// Organ details
exports.getUserOrganDonationDeetails = (req, res) =>
    res.render('user/organDonation/organDonationHospitalDetails', {
        user: req.user,
        doc: req.body.organ
    });

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Study Abroad
// study abroad home
exports.getUserStudyAbroadList = (req, res) =>
    res.render('user/studyAbroad/studyAbroadLists', {
        user: req.user,
        docs: req.body.findAllFilter
    });

// study abroad college details
exports.getUserStudyAbroadCollegeDetails = (req, res) =>
    res.render('user/studyAbroad/studyAbroadCollegeDetails', {
        user: req.user,
        doc: req.docs
    });

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Pharmacy
// pharmacy home
exports.getUserPharmacyHome = (req, res) =>
    res.render('user/pharmacy/pharmacyHome', {
        user: req.user,
        docs: req.body.findAllFilter
    });

// pharmacy medicines
exports.getUserPharmacyMedicines = (req, res) =>
    res.render('user/pharmacy/pharmacyProductLists', {
        user: req.user,
        medicines: req.body.findAllFilter
    });

// pharmacy Carts
exports.getUserPharmacyMyCarts = (req, res) =>
    res.render('user/pharmacy/pharmacyCarts', {
        user: req.user,
        carts: req.body.docs
    });

// checkout
exports.getUserPharmacyCheckout = (req, res) =>
    res.render('user/pharmacy/pharmacyCheckout', {
        user: req.user,
        address: req.body.findDocs
    });

// pharmacy orders
exports.getUserPharmacyMyOrders = (req, res) =>
    res.render('user/pharmacy/pharmacyMyOrders', {
        user: req.user,
        orders: req.body.docs
    });

// get a pharamcy
exports.getAUserPharmacyOrder = (req, res) =>
    res.render('user/pharmacy/pharmacyOrder', {
        user: req.user,
        order: req.docs
    });

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Laboratory
// laboratory home
exports.getUserLaboratoryHome = (req, res) =>
    res.render('user/laboratory/laboratoryHome', {
        user: req.user,
        categories: req.body.findAllFilter
    });

// laboratory lists
exports.getUserLaboratoryLists = (req, res) =>
    res.render('user/laboratory/laboratoryLists', {
        user: req.user,
        labs: req.body.docs,
        services: req.query.services,
        name: req.query.type ?? 'all'
    });

// checkout
exports.getUserLaboratoryCheckout = (req, res) =>
    res.render('user/laboratory/laboratoryCheckout', {
        user: req.user,
        address: req.body.findDocs
    });

// laboratory details
exports.getUserLaboratoryDetails = (req, res) =>
    res.render('user/laboratory/laboratoryDetails', {
        user: req.user,
        doc: req.docs
    });

// laboratory orders
exports.getUserLaboratoryOrders = (req, res) =>
    res.render('user/laboratory/laboratoryBookingDetails', {
        user: req.user,
        laboratory: req.body.docs
    });

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Meet the Experts
// Expert home
exports.getUserMeettheExpertsHome = (req, res) =>
    res.render('user/expert/expertHome', {
        user: req.user,
        categories: req.body.docs
    });

// expert service list
exports.getUserMeettheExpertsLists = (req, res) =>
    res.render('user/expert/expertList', {
        user: req.user,
        experts: req.body.findAllFilter,
        name: req.params.serviceName,
        type: req.query.vendorType
    });

// expert service list
exports.getUserMeettheExpertsDetails = (req, res) =>
    res.render('user/expert/expertDetails', {
        user: req.user,
        doc: req.body.docs
    });

// expert service orders
exports.getUserMeettheExpertsOrders = (req, res) =>
    res.render('user/expert/expertBookings', {
        user: req.user,
        orders: req.body.docs
    });

// checkout
exports.getUserExpertCheckout = (req, res) =>
    res.render('user/expert/expertCheckout', {
        user: req.user,
        address: req.body.findDocs
    });

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// Hearing aid
// hearing aid home
exports.getUserHearingaidHome = (req, res) =>
    res.render(req.body.render, {
        user: req.user,
        hearingaid: req.body.findAllFilter,
        product: req.body.product
    });

// hearing aid products
exports.getUserHearingaidProductDetails = (req, res) =>
    res.render('user/hearingAid/hearingaidProductDetails', {
        user: req.user,
        doc: req.body.docs
    });

// hearing aid hospital
exports.getUserHearingaiHospialDetails = (req, res) =>
    res.render('user/hearingAid/hearingaidHospitalDetails', {
        user: req.user,
        doc: req.docs
    });

// hearing aid shop
exports.getUserHearingaiRepairStoreDetails = (req, res) =>
    res.render('user/hearingAid/hearingaidRepariStoreDetails', {
        user: req.user,
        doc: req.docs
    });

// get a differetnly abled product checkout
exports.getUserHeringAidProuctCheckout = (req, res) =>
    res.render('user/hearingAid/hearingaidCheckout', {
        user: req.user,
        address: req.body.findDocs
    });

// hearing aid bookings
exports.getUserHearingAidAccount = (req, res) =>
    res.render('user/hearingAid/hearingaidAccount', {
        user: req.user,
        bookings: req.body.bookings,
        orders: req.body.findAllFilter
    });

// hearing aid get a order
exports.getUserHearingAidOrders = (req, res) =>
    res.render('user/hearingAid/hearingaidOrderDetails', {
        user: req.user,
        doc: req.docs
    });

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// One Us
// get vidoes
exports.getOneUsVideos = (req, res) =>
    res.render('user/oneUs/videos', {
        user: req.user,
        categories: req.body.categories,
        videos: req.body.videos
    });

// get vidoes
exports.getMyOneUsVideos = (req, res) =>
    res.render('user/oneUs/oneUsVideoManagement', {
        user: req.user,
        categories: req.body.categories,
        videos: req.body.videos
    });
// get blogs management
exports.getMyOneUsBlogs = (req, res) =>
    res.render('user/oneUs/oneUsBlogManagement', {
        user: req.user,
        categories: req.body.categories,
        blogs: req.body.blogs
    });

// get vidoes
exports.getOneUsBlogs = (req, res) =>
    res.render('user/oneUs/blogs', {
        user: req.user,
        categories: req.body.categories,
        blogs: req.body.blogs
    });
