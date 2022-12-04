// ============================================================
// import controllers
const factoryController = require('./factoryControllers');

// ==============================+==============================
// import model
const partnerModel = require('../models/shared/partnerModel');
const docotorCategorieModel = require('../models/shared/doctoryCategoriesModel');

// import utlitieis
const encryptID = require('../util/uuid');
const catchAsync = require('../util/catchAsync');
const AppError = require('../util/AppError');
const doctoryCategoriesModel = require('../models/shared/doctoryCategoriesModel');

//// create new partner
// create partner
exports.createPartner = factoryController.createOne(partnerModel);
// send created json partner to client
exports.sendJsoCreatedPartner = factoryController.sendJson();

// Assign data for new partner data
exports.assignNewPartnerData = catchAsync(async (req, res, next) => {
    if (req.for === 'Online Consultancy') {
        return next();
    }
    req.body.userId = req.user._id;
    req.body.hiwpmID = await encryptID(process.env.PARTNER_SECRET);
    req.body.location = {
        type: 'Point',
        coordinates: [req.body.location[1], req.body.location[0]]
    };
    req.body.userEId = req.user.hiwuueidmID;
    req.body.createdAt = Date.now();
    req.body.phone = req.user.phone;
    return next();
});

// validate partner data
exports.validatePartnerData = async (req, res, next) => {
    // eslint-disable-next-line default-case
    switch (req.body.for) {
        case 'Blood Bank':
            if (!req.body.profileImage) {
                return next(
                    new AppError('Profile image should be included.', 400)
                );
            }
            if (!req.body.bannerImage) {
                return next(
                    new AppError('Blood Bank banner should be included.', 400)
                );
            }
            if (!req.body.imageGallery) {
                return next(
                    new AppError("Blood bank's images should be included.", 400)
                );
            }
            if (!req.body.location || req.body.location.length !== 2) {
                return next(
                    new AppError(
                        'Location should be included or enter valid location.',
                        400
                    )
                );
            }
            if (!req.body.openTime || !req.body.closeTime) {
                return next(
                    new AppError(
                        'open time and close time should be included.',
                        400
                    )
                );
            }
            break;
        case 'Ambulance Service':
            if (!req.body.profileImage) {
                return next(
                    new AppError('Profile image should be included.', 400)
                );
            }
            if (!req.body.bannerImage) {
                return next(new AppError('Banner should be included.', 400));
            }
            if (!req.body.imageGallery) {
                return next(
                    new AppError("Center's images should be included.", 400)
                );
            }
            if (!req.body.location || req.body.location.length !== 2) {
                return next(
                    new AppError(
                        'Location should be included or enter valid location.',
                        400
                    )
                );
            }
            break;
        case 'De-Addiction service':
            if (!req.body.profileImage) {
                return next(
                    new AppError('Profile image should be included.', 400)
                );
            }
            if (!req.body.bannerImage) {
                return next(new AppError('Banner should be included.', 400));
            }
            if (!req.body.imageGallery) {
                return next(
                    new AppError("Center's images should be included.", 400)
                );
            }
            if (!req.body.location || req.body.location.length !== 2) {
                return next(
                    new AppError(
                        'Location should be included or enter valid location.',
                        400
                    )
                );
            }
            if (!req.body.openTime || !req.body.closeTime) {
                return next(
                    new AppError(
                        'open time and close time should be included.',
                        400
                    )
                );
            }
            if (!req.body.description) {
                return next(
                    new AppError(
                        'Please write short description about your deaddication center',
                        400
                    )
                );
            }
            req.body.deaddiction = {};
            req.body.deaddiction.aboutus = req.body.description;
            break;
        case 'Fitness':
            if (!req.body.profileImage) {
                return next(
                    new AppError('Profile image should be included.', 400)
                );
            }
            if (!req.body.bannerImage) {
                return next(new AppError('Banner should be included.', 400));
            }
            if (!req.body.imageGallery) {
                return next(
                    new AppError("Center's images should be included.", 400)
                );
            }
            if (!req.body.location || req.body.location.length !== 2) {
                return next(
                    new AppError(
                        'Location should be included or enter valid location.',
                        400
                    )
                );
            }
            if (!req.body.openTime || !req.body.closeTime) {
                return next(
                    new AppError(
                        'open time and close time should be included.',
                        400
                    )
                );
            }
            if (!req.body.description) {
                return next(
                    new AppError(
                        'Please write short description about your deaddication center',
                        400
                    )
                );
            }
            if (!req.body.serviceType) {
                return next(
                    new AppError('Service type should be included.', 400)
                );
            }
            if (
                req.body.serviceType !== 'gym' &&
                req.body.serviceType !== 'yoga' &&
                req.body.serviceType !== 'meditation'
            ) {
                return next(new AppError('Invali service type', 400));
            }
            req.body.fitness = {};
            req.body.fitness.serviceType = req.body.serviceType;
            req.body.fitness.aboutus = req.body.description;
            req.body.serviceType = req.body.description = undefined;
            break;
        case 'Hearing AID':
            if (!req.body.profileImage) {
                return next(
                    new AppError('Profile image should be included.', 400)
                );
            }
            if (!req.body.bannerImage) {
                return next(new AppError('Banner should be included.', 400));
            }
            if (!req.body.imageGallery) {
                return next(
                    new AppError("Center's images should be included.", 400)
                );
            }
            if (!req.body.location || req.body.location.length !== 2) {
                return next(
                    new AppError(
                        'Location should be included or enter valid location.',
                        400
                    )
                );
            }
            if (!req.body.openTime || !req.body.closeTime) {
                return next(
                    new AppError(
                        'open time and close time should be included.',
                        400
                    )
                );
            }
            if (!req.body.description) {
                return next(
                    new AppError(
                        'Please write short description about your deaddication center',
                        400
                    )
                );
            }
            if (!req.body.serviceType) {
                return next(
                    new AppError('Service type should be included.', 400)
                );
            }
            if (req.body.serviceType === 'hospital') {
                if (!req.body.availableDoctors) {
                    return next(
                        new AppError(
                            'Available doctors should be included.',
                            400
                        )
                    );
                }
                if (!req.body.price) {
                    return next(
                        new AppError('Charging cost should be included.', 400)
                    );
                }
                req.body.hearingAid = {};
                req.body.hearingAid.serviceType = 'hospital';
                req.body.hearingAid.price = req.body.price;
                req.body.hearingAid.availableDoctors =
                    req.body.availableDoctors;
            } else if (req.body.serviceType === 'repairStore') {
                if (
                    !req.body.batteryChangeCharge ||
                    !req.body.noiseFixCharge ||
                    !req.body.cleaningCharge
                ) {
                    return next(
                        new AppError('Chatges details should be inlcuded.', 400)
                    );
                }
                req.body.hearingAid = {};
                req.body.hearingAid.serviceType = 'repairStore';
                req.body.hearingAid.batteryChangeCharge =
                    req.body.batteryChangeCharge;
                req.body.hearingAid.noiseFixCharge = req.body.noiseFixCharge;
                req.body.hearingAid.cleaningCharge = req.body.cleaningCharge;
            } else if (req.body.serviceType === 'shop') {
                req.body.hearingAid = {};
                req.body.hearingAid.serviceType = 'shop';
            } else {
                return next(
                    new AppError('Please select the valide servicet type.', 400)
                );
            }
            break;
        case 'Homecare service':
            if (!req.body.profileImage) {
                return next(
                    new AppError('Profile image should be included.', 400)
                );
            }
            if (!req.body.bannerImage) {
                return next(new AppError('Banner should be included.', 400));
            }
            if (!req.body.imageGallery) {
                return next(
                    new AppError("Center's images should be included.", 400)
                );
            }
            if (!req.body.location || req.body.location.length !== 2) {
                return next(
                    new AppError(
                        'Location should be included or enter valid location.',
                        400
                    )
                );
            }
            if (!req.body.openTime || !req.body.closeTime) {
                return next(
                    new AppError(
                        'open time and close time should be included.',
                        400
                    )
                );
            }
            if (!req.body.serviceType) {
                return next(
                    new AppError('Service type should be included.', 400)
                );
            }
            if (
                req.body.serviceType !== 'individual' &&
                req.body.serviceType !== 'company'
            ) {
                return next(
                    new AppError('Please select the valid servicetype', 400)
                );
            }
            req.body.homecare = {};
            req.body.homecare.serviceType = req.body.serviceType;
            break;
        case 'Hospital':
            if (!req.body.profileImage) {
                return next(
                    new AppError('Profile image should be included.', 400)
                );
            }
            if (!req.body.bannerImage) {
                return next(new AppError('Banner should be included.', 400));
            }
            if (!req.body.imageGallery) {
                return next(
                    new AppError("Center's images should be included.", 400)
                );
            }
            if (!req.body.location || req.body.location.length !== 2) {
                return next(
                    new AppError(
                        'Location should be included or enter valid location.',
                        400
                    )
                );
            }
            if (!req.body.openTime || !req.body.closeTime) {
                return next(
                    new AppError(
                        'open time and close time should be included.',
                        400
                    )
                );
            }

            if (!req.body.vendorSubtype) {
                return next(
                    new AppError('Vendor subtype should be included.', 400)
                );
            }
            if (
                req.body.vendorSubtype !== 'clinic' &&
                req.body.vendorSubtype !== 'nursing-home' &&
                req.body.vendorSubtype !== 'hospitals' &&
                req.body.vendorSubtype !== 'muti-speciality-hospital' &&
                req.body.vendorSubtype !== 'medical-college'
            ) {
                return next(new AppError('Select valid vendor subtype', 400));
            }
            if (!req.body.organDonation) {
                if (
                    req.body.vendorSubtype !== 'hospitals' &&
                    req.body.vendorSubtype !== 'muti-speciality-hospital' &&
                    req.body.vendorSubtype !== 'medical-college'
                ) {
                    return next(
                        new AppError(
                            "You don't have the rights to do the organ donation.",
                            400
                        )
                    );
                }
                if (!req.body.organDonationDocument) {
                    return next(
                        new AppError(
                            'Organ Donation Licence should be included.',
                            400
                        )
                    );
                }
            }
            req.body.hospital = {};
            req.body.hospital.aboutUs = req.body.description;
            req.body.hospital.stream = req.body.vendorSubtype;
            req.body.hospital.medicalTourism = req.body.medicalTourism ?? false;
            req.body.hospital.hospitalPackage =
                req.body.hospitalPackage ?? false;
            req.body.hospital.organDonation =
                req.body.hospital.organDonation ?? false;
            req.body.hospital.organDonationVerificationDocument =
                req.body.organDonationDocument;
            break;
        case 'Meet the Expert':
            if (!req.body.profileImage) {
                return next(
                    new AppError('Profile image should be included.', 400)
                );
            }
            if (!req.body.bannerImage) {
                return next(new AppError('Banner should be included.', 400));
            }
            if (!req.body.imageGallery) {
                return next(
                    new AppError("Center's images should be included.", 400)
                );
            }
            if (!req.body.location || req.body.location.length !== 2) {
                return next(
                    new AppError(
                        'Location should be included or enter valid location.',
                        400
                    )
                );
            }
            if (!req.body.openTime || !req.body.closeTime) {
                return next(
                    new AppError(
                        'open time and close time should be included.',
                        400
                    )
                );
            }
            if (!req.body.serviceType) {
                return next(
                    new AppError('Please select the service type', 400)
                );
            }
            if (
                req.body.serviceType !== 'contractors' &&
                req.body.serviceType !== 'service' &&
                req.body.serviceType !== 'consultants'
            ) {
                return next(
                    new AppError('Please select the valid service type.')
                );
            }
            if (!req.body.vendorType) {
                return next(
                    new AppError('Vendor type should be included.', 400)
                );
            }
            if (
                req.body.vendorType !== 'company' &&
                req.body.vendortype !== 'individual'
            ) {
                return next(
                    new AppError('Please select the valid vendor type.')
                );
            }
            req.body.meettheExperts = {};
            req.body.meettheExperts.vendorType = req.body.vendorType;
            break;
        case 'Online Consultancy':
            if (!req.body.profileImage) {
                return next(
                    new AppError('Profile image should be included.', 400)
                );
            }
            if (!req.body.bannerImage) {
                return next(new AppError('Banner should be included.', 400));
            }
            if (!req.body.imageGallery) {
                return next(
                    new AppError("Center's images should be included.", 400)
                );
            }
            if (!req.body.location || req.body.location.length !== 2) {
                return next(
                    new AppError(
                        'Location should be included or enter valid location.',
                        400
                    )
                );
            }
            if (!req.body.speciality) {
                return next(
                    new AppError('speciality should be included.', 400)
                );
            }
            if (!req.body.category) {
                return next(new AppError('category should be included.', 400));
            }
            if (!req.body.experience) {
                return next(
                    new AppError('experience should be included.', 400)
                );
            }
            const data = await doctoryCategoriesModel.findOne({
                name: req.body.category,
                'specialists.name': req.body.speciality
            });
            if (!data) {
                return next(new AppError('Doctor Categorie Found.', 404));
            }
            const id = await encryptID(process.env.PARTNER_SECRET);
            const id2 = await encryptID(process.env.PARTNER_SECRET);
            req.body = [
                {
                    ...req.body,
                    for: 'Online Consultancy',
                    location: {
                        type: 'Point',
                        coordinates: [
                            req.body.location[1],
                            req.body.location[0]
                        ]
                    },
                    createdAt: Date.now(),
                    phone: req.user.phone,
                    userId: req.user.Id,
                    onlineConsultancy: {
                        speciality: req.body.speciality,
                        category: req.body.category,
                        experience: req.body.experience
                    },
                    hiwpmID: id,
                    userEId: req.user.hiwuueidmID,
                    userId: req.user._id
                },
                {
                    ...req.body,
                    for: 'Second Opinion',
                    location: {
                        type: 'Point',
                        coordinates: [
                            req.body.location[1],
                            req.body.location[0]
                        ]
                    },
                    createdAt: Date.now(),
                    phone: req.user.phone,
                    userId: req.user.Id,
                    secondOpinion: {
                        speciality: req.body.speciality,
                        category: req.body.category,
                        experience: req.body.experience,
                        valid: true
                    },
                    hiwpmID: id2,
                    userEId: req.user.hiwuueidmID,
                    userId: req.user._id
                }
            ];
            req.for = 'Online Consultancy';
            break;
        // case 'Second Opinion':
        //     if (!req.body.profileImage) {
        //         return next(
        //             new AppError('Profile image should be included.', 400)
        //         );
        //     }
        //     if (!req.body.bannerImage) {
        //         return next(new AppError('Banner should be included.', 400));
        //     }
        //     if (!req.body.imageGallery) {
        //         return next(
        //             new AppError("Center's images should be included.", 400)
        //         );
        //     }
        //     if (!req.body.location || req.body.location.length !== 2) {
        //         return next(
        //             new AppError(
        //                 'Location should be included or enter valid location.',
        //                 400
        //             )
        //         );
        //     }
        //     if (!req.body.speciality) {
        //         return next(
        //             new AppError('speciality should be included.', 400)
        //         );
        //     }
        //     if (!req.body.category) {
        //         return next(new AppError('category should be included.', 400));
        //     }
        //     if (!req.body.experience) {
        //         return next(
        //             new AppError('experience should be included.', 400)
        //         );
        //     }
        //     req.body.secondOpinion = {};
        //     req.body.secondOpinion.speciality = req.body.speciality;
        //     req.body.secondOpinion.category = req.body.category;
        //     req.body.secondOpinion.experience = req.body.experience;
        //     // if the doctor didn't pay for app
        //     req.body.secondOpinion.valid = true;
        //     break;

        case 'Opticals':
            if (!req.body.profileImage) {
                return next(
                    new AppError('Profile image should be included.', 400)
                );
            }
            if (!req.body.bannerImage) {
                return next(new AppError('Banner should be included.', 400));
            }
            if (!req.body.imageGallery) {
                return next(
                    new AppError("Center's images should be included.", 400)
                );
            }
            if (!req.body.location || req.body.location.length !== 2) {
                return next(
                    new AppError(
                        'Location should be included or enter valid location.',
                        400
                    )
                );
            }
            break;
        case 'Laboratory':
            if (!req.body.profileImage) {
                return next(
                    new AppError('Profile image should be included.', 400)
                );
            }
            if (!req.body.bannerImage) {
                return next(new AppError('Banner should be included.', 400));
            }
            if (!req.body.imageGallery) {
                return next(
                    new AppError("Center's images should be included.", 400)
                );
            }
            if (!req.body.location || req.body.location.length !== 2) {
                return next(
                    new AppError(
                        'Location should be included or enter valid location.',
                        400
                    )
                );
            }
            break;
        case 'Pharmacy':
            if (!req.body.profileImage) {
                return next(
                    new AppError('Profile image should be included.', 400)
                );
            }
            if (!req.body.bannerImage) {
                return next(new AppError('Banner should be included.', 400));
            }
            if (!req.body.imageGallery) {
                return next(
                    new AppError("Center's images should be included.", 400)
                );
            }
            if (!req.body.location || req.body.location.length !== 2) {
                return next(
                    new AppError(
                        'Location should be included or enter valid location.',
                        400
                    )
                );
            }
            break;
        case 'Speak To Us':
            if (!req.body.profileImage) {
                return next(
                    new AppError('Profile image should be included.', 400)
                );
            }
            if (!req.body.bannerImage) {
                return next(new AppError('Banner should be included.', 400));
            }
            if (!req.body.imageGallery) {
                return next(
                    new AppError("Center's images should be included.", 400)
                );
            }
            if (!req.body.location || req.body.location.length !== 2) {
                return next(
                    new AppError(
                        'Location should be included or enter valid location.',
                        400
                    )
                );
            }
            if (!req.body.counselingNumber) {
                return next(
                    new AppError('counseling bumber should be inluded', 400)
                );
            }
            req.body.speakToUs = {
                counselingNumber: req.body.counselingNumber
            };
            break;
        case 'Study Abroad':
            if (!req.body.profileImage) {
                return next(
                    new AppError('Profile image should be included.', 400)
                );
            }
            if (!req.body.bannerImage) {
                return next(new AppError('Banner should be included.', 400));
            }
            if (!req.body.imageGallery) {
                return next(
                    new AppError("Center's images should be included.", 400)
                );
            }
            if (!req.body.location || req.body.location.length !== 2) {
                return next(
                    new AppError(
                        'Location should be included or enter valid location.',
                        400
                    )
                );
            }
            if (!req.body.openTime || !req.body.closeTime) {
                return next(
                    new AppError(
                        'open time and close time should be included.',
                        400
                    )
                );
            }
            break;
        case 'Medical Market':
            if (!req.body.profileImage) {
                return next(
                    new AppError('Profile image should be included.', 400)
                );
            }
            if (!req.body.bannerImage) {
                return next(new AppError('Banner should be included.', 400));
            }
            if (!req.body.imageGallery) {
                return next(
                    new AppError("Center's images should be included.", 400)
                );
            }
            if (!req.body.location || req.body.location.length !== 2) {
                return next(
                    new AppError(
                        'Location should be included or enter valid location.',
                        400
                    )
                );
            }
            if (!req.body.openTime || !req.body.closeTime) {
                return next(
                    new AppError(
                        'open time and close time should be included.',
                        400
                    )
                );
            }
            break;
    }
    return next();
};

exports.checkAlreadyExistPartner = catchAsync(async (req, res, next) => {
    const partner = await partnerModel.findOne({
        userId: req.user._id,
        for: req.body.for
    });
    if (partner) {
        return next(
            new AppError(
                'You already created a partner service on this option',
                400
            )
        );
    }
    return next();
});

// assign data for get parters
exports.assignDataForGetPartners = (req, res, next) => {
    req.filterQuery = { userId: req.user._id, status: 'accepted' };
    req.selectedata = 'for hiwpmID profileImage address company';
    return next();
};

// get all partners
exports.getAllAcceptedPartners = factoryController.findAllData(partnerModel);

// send json for get all selecter data with query exports
exports.sendJsonForGetAllSelectedquery = factoryController.sendJsonForAll();

// assign data for get a partner
exports.assignDataForGetAPartner = (req, res, next) => {
    req.searchQuery = { userId: req.user._id, hiwpmID: req.params.partnerId };
    return next();
};

// get a partnere
exports.getAPartner = factoryController.findOne(partnerModel);

// send json for get one partner
exports.sendJsonForGetOne = factoryController.sendJsonForFindOne();

// assign data for get a categorire
exports.assingDataforGetADoctorCategorie = (req, res, next) => {
    req.searchQuery = { name: req.params.name };
    return next();
};

// get a categorie
exports.GetADoctorCategorie = factoryController.findOne(docotorCategorieModel);

// assign data for get doctors
exports.getDoctors = factoryController.getAll(docotorCategorieModel);

// send json for get all query
exports.sendJsonForGetAllQuery = factoryController.sendJsonForFindAll();

// get user partner
exports.getMyPartners = catchAsync(async (req, res, next) => {
    const partners = await partnerModel
        .find({
            userId: req.user._id,
            status: 'accepted'
        })
        .distinct('for');

    req.body.docs = partners;
    return next();
});
