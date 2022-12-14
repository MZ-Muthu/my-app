/* eslint-disable no-case-declarations */
// ============================================================
// import packages
const { validate: uuidValidate } = require('uuid');

// ============================================================
// import controllers
const factoryControllers = require('../factoryControllers');

// ============================================================
// import utilities
const AppError = require('../../util/AppError');
const catchAsync = require('../../util/catchAsync');
const encryptID = require('../../util/uuid');
const filterObjects = require('../../util/filterObjects');

// ============================================================
// import models
const partnerModel = require('../../models/shared/partnerModel');
const advetisementModel = require('../../models/shared/advertisementModel');
const advertisementModel = require('../../models/shared/advertisementModel');
const postJobModel = require('../../models/JopPortal/postJobModel');
const applyJobModel = require('../../models/JopPortal/applyJobModel');
const ambulanceQuotesModel = require('../../models/AmbulanceAlert/ambulanceQuotesModel');
const medicalMarketProductsModel = require('../../models/MedicalMarket/medicalMarketProductsModel');
const medicalMarketQuoteRequesterModel = require('../../models/MedicalMarket/medicalMarketQuoteRequesterModel');
const userModel = require('../../models/shared/userModel');
const bloodRequestorModel = require('../../models/BloodDonation/bloodRequestorModel');
const hospitalModel = require('../../models/Hospital/hospitalModel');
const speakToUsAvailablityModel = require('../../models/SpeakToUs/speaktoUsAvailblityModel');
const jobCategoriesModel = require('../../models/JopPortal/jobCategoriesModel');
const onlineConsultancyAvailablityModel = require('../../models/OnlineConsultancy/onlineConsultancyAvailblityModel');
const secondOpinionAvailablityModel = require('../../models/secondOpinion/secondOpinionAvailblityModel');
const doctoryCategoriesModel = require('../../models/shared/doctoryCategoriesModel');
// meet the expert
const meetTheExpertServiceModel = require('../../models/MeetTheExperts/meetTheExpertServiceProvidersModel');
const meetTheExpertListModel = require('../../models/MeetTheExperts/meetTheExpert');
const meetTheExpertBookingModel = require('../../models/MeetTheExperts/bookMeetTheExpertsModel');
// homecare
const homecareServiceModel = require('../../models/Homecare/homecaresModel');
// ambulance
const ambulanceServices = require('../../models/AmbulanceAlert/AmbulanceServiceModel');
// study aborad
const studyAbroadModel = require('../../models/StudyAbroad/studyAbroadModel');
const opticalModel = require('../../models/Opticals/opticalModels');
const opticalOrderModel = require('../../models/Opticals/opticalOrderModel');
const opticalBookingModel = require('../../models/Opticals/bookObticalsStoreModel');
// ============================================================
// create controllers

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// shared
// assign data for update vendor partner
exports.assignDataForUpdatePartner = async (req, res, next) => {
    switch (req.params.moduleName) {
        case 'Ambulance Service':
            // eslint-disable-next-line no-case-declarations
            let check = [
                'name',
                'phone',
                'centerPhone',
                'centerLandLine',
                'latitude',
                'longtitude',
                'address',
                'aboutUs'
            ];
            req.body = filterObjects(req.body, ...check);

            check = check.every((el) => Object.keys(req.body).includes(el));
            if (!check)
                return next(
                    new AppError('Make sure you filled all the values.', 400)
                );
            await Promise.all(
                Object.entries(req.body).map(([key, value]) => {
                    if (!value) {
                        return next(
                            new AppError(`${key} should be included.`, 400)
                        );
                    }
                })
            );

            req.body.location = {
                type: 'Point',
                coordinates: [req.body.longtitude, req.body.latitude]
            };
            break;
        case 'Meet the Expert':
            // eslint-disable-next-line no-case-declarations
            let checkExpert = [
                'name',
                'phone',
                'centerPhone',
                'centerLandLine',
                'city',
                'openTime',
                'closeTime',
                'address',
                'vendorType',
                'latitude',
                'longtitude',
                'aboutUs'
            ];
            req.body = filterObjects(req.body, ...checkExpert);
            // eslint-disable-next-line no-case-declarations
            checkExpert = checkExpert.every((el) =>
                Object.keys(req.body).includes(el)
            );

            if (!checkExpert)
                return next(
                    new AppError('Make sure you filled all the values.', 400)
                );
            await Promise.all(
                Object.entries(req.body).map(([key, value]) => {
                    if (!value) {
                        return next(
                            new AppError(`${key} should be included.`, 400)
                        );
                    }
                })
            );
            req.body.location = {
                type: 'Point',
                coordinates: [req.body.longtitude, req.body.latitude]
            };
            req.body = {
                ...req.body,
                'meettheExperts.vendorType': req.body.vendorType
            };
            break;
        case 'Homecare service':
            // eslint-disable-next-line no-case-declarations
            let checkHome = [
                'name',
                'phone',
                'centerPhone',
                'centerLandLine',
                'city',
                'openTime',
                'closeTime',
                'address',
                'jobType',
                'latitude',
                'longtitude',
                'aboutUs'
            ];
            req.body = filterObjects(req.body, ...checkHome);
            // eslint-disable-next-line no-case-declarations

            checkHome = checkHome.every((el) =>
                Object.keys(req.body).includes(el)
            );

            if (!checkHome)
                return next(
                    new AppError('Make sure you filled all the values.', 400)
                );
            await Promise.all(
                Object.entries(req.body).map(([key, value]) => {
                    if (!value) {
                        return next(
                            new AppError(`${key} should be included.`, 400)
                        );
                    }
                })
            );
            req.body.location = {
                type: 'Point',
                coordinates: [req.body.longtitude, req.body.latitude]
            };
            req.body = {
                ...req.body,
                'homecare.serviceType': req.body.jobType
            };
            break;
        case 'Blood Bank':
            // eslint-disable-next-line no-case-declarations
            let BloodBank = [
                'name',
                'phone',
                'centerPhone',
                'centerLandLine',
                'city',
                'openTime',
                'closeTime',
                'address',
                'latitude',
                'longtitude',
                'aboutUs'
            ];
            req.body = filterObjects(req.body, ...BloodBank);
            // eslint-disable-next-line no-case-declarations

            BloodBank = BloodBank.every((el) =>
                Object.keys(req.body).includes(el)
            );

            if (!BloodBank)
                return next(
                    new AppError('Make sure you filled all the values.', 400)
                );
            await Promise.all(
                Object.entries(req.body).map(([key, value]) => {
                    if (!value) {
                        return next(
                            new AppError(`${key} should be included.`, 400)
                        );
                    }
                })
            );
            req.body.location = {
                type: 'Point',
                coordinates: [req.body.longtitude, req.body.latitude]
            };

            break;
        case 'De-Addiction service':
            // eslint-disable-next-line no-case-declarations
            let deAddiction = [
                'name',
                'phone',
                'centerPhone',
                'centerLandLine',
                'city',
                'openTime',
                'closeTime',
                'address',
                'latitude',
                'longtitude',
                'aboutUs'
            ];
            req.body = filterObjects(req.body, ...deAddiction);
            // eslint-disable-next-line no-case-declarations

            deAddiction = deAddiction.every((el) =>
                Object.keys(req.body).includes(el)
            );

            if (!deAddiction)
                return next(
                    new AppError('Make sure you filled all the values.', 400)
                );
            await Promise.all(
                Object.entries(req.body).map(([key, value]) => {
                    if (!value) {
                        return next(
                            new AppError(`${key} should be included.`, 400)
                        );
                    }
                })
            );
            req.body.location = {
                type: 'Point',
                coordinates: [req.body.longtitude, req.body.latitude]
            };

            break;
        case 'Hospital':
            // eslint-disable-next-line no-case-declarations
            let hospital = [
                'name',
                'phone',
                'centerPhone',
                'centerLandLine',
                'city',
                'openTime',
                'aboutUs',
                'closeTime',
                'address',
                'latitude',
                'longtitude'
            ];
            // eslint-disable-next-line no-case-declarations
            const medicalTourism = req.body.medicalTourism
                ? req.body.medicalTourism
                : false;
            const hospitalPackage = req.body.hospitalPackage
                ? req.body.hospitalPackage
                : false;
            req.body = filterObjects(req.body, ...hospital);
            hospital = hospital.every((el) =>
                Object.keys(req.body).includes(el)
            );

            if (!hospital)
                return next(
                    new AppError('Make sure you filled all the values.', 400)
                );
            await Promise.all(
                Object.entries(req.body).map(([key, value]) => {
                    if (!value) {
                        return next(
                            new AppError(`${key} should be included.`, 400)
                        );
                    }
                })
            );
            req.body.location = {
                type: 'Point',
                coordinates: [req.body.longtitude, req.body.latitude]
            };
            req.body = {
                ...req.body,
                'hospital.medicalTourism': medicalTourism,
                'hospital.hospitalPackage': hospitalPackage
            };
            req.body = { $set: req.body };
            break;
        case 'Speak To Us':
            // eslint-disable-next-line no-case-declarations
            let speak = [
                'name',
                'phone',
                'centerPhone',
                'centerLandLine',
                'city',
                'openTime',
                'closeTime',
                'address',
                'latitude',
                'longtitude',
                'conNumber',
                'aboutUs'
            ];

            req.body = filterObjects(req.body, ...speak);
            // eslint-disable-next-line no-case-declarations

            speak = speak.every((el) => Object.keys(req.body).includes(el));

            if (!speak)
                return next(
                    new AppError('Make sure you filled all the values.', 400)
                );
            await Promise.all(
                Object.entries(req.body).map(([key, value]) => {
                    if (!value) {
                        return next(
                            new AppError(`${key} should be included.`, 400)
                        );
                    }
                })
            );
            req.body.location = {
                type: 'Point',
                coordinates: [req.body.longtitude, req.body.latitude]
            };
            req.body.speakToUs = {
                counselingNumber: req.body.conNumber
            };
            break;
        case 'Opticals':
            // eslint-disable-next-line no-case-declarations
            let opticals = [
                'name',
                'phone',
                'centerPhone',
                'centerLandLine',
                'city',
                'openTime',
                'closeTime',
                'address',
                'latitude',
                'longtitude',
                'aboutUs'
            ];
            req.body = filterObjects(req.body, ...opticals);
            opticals = opticals.every((el) =>
                Object.keys(req.body).includes(el)
            );

            if (!opticals)
                return next(
                    new AppError('Make sure you filled all the values.', 400)
                );
            await Promise.all(
                Object.entries(req.body).map(([key, value]) => {
                    if (!value) {
                        return next(
                            new AppError(`${key} should be included.`, 400)
                        );
                    }
                })
            );
            req.body.location = {
                type: 'Point',
                coordinates: [req.body.longtitude, req.body.latitude]
            };

            break;
        case 'Fitness':
            // eslint-disable-next-line no-case-declarations
            let fitness = [
                'name',
                'phone',
                'centerPhone',
                'centerLandLine',
                'city',
                'openTime',
                'closeTime',
                'address',
                'latitude',
                'longtitude',
                'price',
                'aboutUs'
            ];
            req.body = filterObjects(req.body, ...fitness);
            fitness = fitness.every((el) => Object.keys(req.body).includes(el));

            if (!fitness)
                return next(
                    new AppError('Make sure you filled all the values.', 400)
                );
            await Promise.all(
                Object.entries(req.body).map(([key, value]) => {
                    if (!value) {
                        return next(
                            new AppError(`${key} should be included.`, 400)
                        );
                    }
                })
            );
            req.body.location = {
                type: 'Point',
                coordinates: [req.body.longtitude, req.body.latitude]
            };

            req.body = {
                ...req.body,

                'fitness.price': req.body.price
            };
            req.body = { $set: req.body };
            break;
        case 'Hearing AID':
            let arr = [];
            if (req.body.batteryChanging) {
                arr = ['batteryChanging', 'noiceFixing', 'cleaningCharge'];
            }
            // eslint-disable-next-line no-case-declarations
            let hearingAid = [
                'name',
                'phone',
                'centerPhone',
                'centerLandLine',
                'city',
                'openTime',
                'closeTime',
                ...arr,
                'address',
                'latitude',
                'longtitude',
                'aboutUs'
            ];
            req.body = filterObjects(req.body, ...hearingAid);
            hearingAid = hearingAid.every((el) =>
                Object.keys(req.body).includes(el)
            );

            if (!hearingAid)
                return next(
                    new AppError('Make sure you filled all the values.', 400)
                );
            await Promise.all(
                Object.entries(req.body).map(([key, value]) => {
                    if (!value) {
                        return next(
                            new AppError(`${key} should be included.`, 400)
                        );
                    }
                })
            );
            req.body.location = {
                type: 'Point',
                coordinates: [req.body.longtitude, req.body.latitude]
            };
            if (req.body.batteryChanging)
                req.body = {
                    ...req.body,
                    'hearingAid.batteryChangeCharge': req.body.batteryChanging,
                    'hearingAid.noiseFixCharge': req.body.noiceFixing,
                    'hearingAid.cleaningCharge': req.body.cleaningCharge * 1
                };
            req.body = { $set: req.body };
            break;
        case 'Differently Abled':
            // eslint-disable-next-line no-case-declarations
            let differ = [
                'name',
                'phone',
                'centerPhone',
                'centerLandLine',
                'city',
                'openTime',
                'closeTime',
                'address',
                'latitude',
                'longtitude',
                'aboutUs'
            ];
            req.body = filterObjects(req.body, ...differ);
            differ = differ.every((el) => Object.keys(req.body).includes(el));

            if (!differ)
                return next(
                    new AppError('Make sure you filled all the values.', 400)
                );
            await Promise.all(
                Object.entries(req.body).map(([key, value]) => {
                    if (!value) {
                        return next(
                            new AppError(`${key} should be included.`, 400)
                        );
                    }
                })
            );
            req.body.location = {
                type: 'Point',
                coordinates: [req.body.longtitude, req.body.latitude]
            };

            req.body = { $set: req.body };
            break;
        case 'Laboratory':
            // eslint-disable-next-line no-case-declarations
            let lab = [
                'name',
                'phone',
                'centerPhone',
                'centerLandLine',
                'city',
                'openTime',
                'closeTime',
                'address',
                'latitude',
                'longtitude',
                'aboutUs'
            ];
            req.body = filterObjects(req.body, ...lab);
            lab = lab.every((el) => Object.keys(req.body).includes(el));

            if (!lab)
                return next(
                    new AppError('Make sure you filled all the values.', 400)
                );
            await Promise.all(
                Object.entries(req.body).map(([key, value]) => {
                    if (!value) {
                        return next(
                            new AppError(`${key} should be included.`, 400)
                        );
                    }
                })
            );
            req.body.location = {
                type: 'Point',
                coordinates: [req.body.longtitude, req.body.latitude]
            };

            req.body = { $set: req.body };
            break;
        case 'Pharmacy':
            // eslint-disable-next-line no-case-declarations
            let pharmacy = [
                'name',
                'phone',
                'centerPhone',
                'centerLandLine',
                'city',
                'openTime',
                'closeTime',
                'address',
                'latitude',
                'longtitude',
                'aboutUs'
            ];
            req.body = filterObjects(req.body, ...pharmacy);
            pharmacy = pharmacy.every((el) =>
                Object.keys(req.body).includes(el)
            );

            if (!pharmacy)
                return next(
                    new AppError('Make sure you filled all the values.', 400)
                );
            await Promise.all(
                Object.entries(req.body).map(([key, value]) => {
                    if (!value) {
                        return next(
                            new AppError(`${key} should be included.`, 400)
                        );
                    }
                })
            );
            req.body.location = {
                type: 'Point',
                coordinates: [req.body.longtitude, req.body.latitude]
            };

            req.body = { $set: req.body };
            break;
        case 'Medical Market':
            // eslint-disable-next-line no-case-declarations
            let market = [
                'name',
                'phone',
                'centerPhone',
                'centerLandLine',
                'city',
                'openTime',
                'closeTime',
                'address',
                'latitude',
                'longtitude',
                'aboutUs'
            ];
            req.body = filterObjects(req.body, ...market);
            market = market.every((el) => Object.keys(req.body).includes(el));

            if (!market)
                return next(
                    new AppError('Make sure you filled all the values.', 400)
                );
            await Promise.all(
                Object.entries(req.body).map(([key, value]) => {
                    if (!value) {
                        return next(
                            new AppError(`${key} should be included.`, 400)
                        );
                    }
                })
            );
            req.body.location = {
                type: 'Point',
                coordinates: [req.body.longtitude, req.body.latitude]
            };

            req.body = { $set: req.body };
            break;
        case 'Online Consultancy':
            const data = await doctoryCategoriesModel.findOne({
                name: req.body.category,
                'specialists.name': req.body.speciality
            });
            if (!data) {
                return next(new AppError('Doctor Categorie Found.', 404));
            }
            let consultancy = [
                'name',
                'phone',
                'centerPhone',
                'centerLandLine',
                'city',
                'openTime',
                'closeTime',
                'address',
                'latitude',
                'longtitude',
                'speciality',
                'category',
                'experience',
                'aboutUs'
            ];
            req.body = filterObjects(req.body, ...consultancy);
            consultancy = consultancy.every((el) =>
                Object.keys(req.body).includes(el)
            );

            if (!consultancy)
                return next(
                    new AppError('Make sure you filled all the values.', 400)
                );
            await Promise.all(
                Object.entries(req.body).map(([key, value]) => {
                    if (!value) {
                        return next(
                            new AppError(`${key} should be included.`, 400)
                        );
                    }
                })
            );
            req.body.location = {
                type: 'Point',
                coordinates: [req.body.longtitude, req.body.latitude]
            };

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
            req.body.onlineConsultancy = {};
            req.body.onlineConsultancy.speciality = req.body.speciality;
            req.body.onlineConsultancy.category = req.body.category;
            req.body.onlineConsultancy.experience = req.body.experience;
            break;
        case 'Second Opinion':
            const ubData = await doctoryCategoriesModel.findOne({
                name: req.body.category,
                'specialists.name': req.body.speciality
            });
            console.log(req.body.category, req.body.speciality);
            if (!ubData) {
                return next(new AppError('Doctor Categorie Found.', 404));
            }
            let opinion = [
                'name',
                'phone',
                'centerPhone',
                'centerLandLine',
                'city',
                'openTime',
                'closeTime',
                'address',
                'latitude',
                'longtitude',
                'speciality',
                'category',
                'experience',
                'aboutUs'
            ];
            req.body = filterObjects(req.body, ...opinion);
            opinion = opinion.every((el) => Object.keys(req.body).includes(el));

            if (!opinion)
                return next(
                    new AppError('Make sure you filled all the values.', 400)
                );
            await Promise.all(
                Object.entries(req.body).map(([key, value]) => {
                    if (!value) {
                        return next(
                            new AppError(`${key} should be included.`, 400)
                        );
                    }
                })
            );
            req.body.location = {
                type: 'Point',
                coordinates: [req.body.longtitude, req.body.latitude]
            };

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
            req.body.secondOpinion = {};
            req.body.secondOpinion.speciality = req.body.speciality;
            req.body.secondOpinion.category = req.body.category;
            req.body.secondOpinion.experience = req.body.experience;
            break;

        default:
            return next(new AppError(`undefined url ${req.originalUrl}`, 404));
    }
    return next();
};
// assign Data for get all vendors
exports.assignDataForGetAllVendors = (req, res, next) => {
    req.searchQuery = { for: req.params.moduleName };
    req.selectedData = 'profileImage name createdAt hiwpmID';
    return next();
};

// assign data for update partner's profile details
exports.assignDataForUpdateProfileDetails = (req, res, next) => {
    req.updateOneSearch = {
        hiwpmID: req.params.vendorId,
        for: req.params.moduleName
    };

    return next();
};
// update related homecare service
const updateRelatedHomecareService = catchAsync(async (req, res, next) => {
    await homecareServiceModel.updateMany(
        {
            partnerId: req.body.partner
        },
        {
            serviceType: req.body.jobType
        },
        {
            new: true,
            runValidators: true
        }
    );

    return next();
});

// update related expert service
const updateRelatedExpertService = catchAsync(async (req, res, next) => {
    await meetTheExpertServiceModel.updateMany(
        {
            partnerId: req.body.partner
        },
        { vendorType: req.body.vendorType },
        { runValidators: true }
    );
    return next();
});

// update partner
exports.updatePartner = catchAsync(async (req, res, next) => {
    const partner = await partnerModel
        .findOneAndUpdate(
            {
                hiwpmID: req.params.vendorId,
                for: req.params.moduleName
            },
            req.body,
            {
                new: true,
                runValidators: true
            }
        )
        .lean();
    if (!partner) {
        return next(new AppError('No related partner available', 404));
    }

    switch (partner.for) {
        case 'Homecare service':
            if (partner.homecare.serviceType !== req.body.jobType) {
                req.body.partner = partner._id;
                return updateRelatedHomecareService(req, res, next);
            }
            next();
            break;
        case 'Meet the Expert':
            if (partner.meettheExperts.vendorType !== req.body.vendorType) {
                req.body.partner = partner._id;
                return updateRelatedExpertService(req, res, next);
            }
            next();
            break;
        case 'Online Consultancy':
            const data = await partnerModel.findOneAndUpdate(
                {
                    userId: partner.userId,
                    for: 'Second Opinion'
                },
                {
                    ...req.body,
                    onlineConsultancy: {},
                    'secondOpinion.speciality':
                        partner.onlineConsultancy.speciality,
                    'secondOpinion.category':
                        partner.onlineConsultancy.category,
                    'secondOpinion.experience':
                        partner.onlineConsultancy.experience
                },
                { new: true, runValidators: true }
            );
            return next();
        default:
            return next();
    }
});

// send json for update one
exports.sendJsonForUpdateOne = factoryControllers.sendJsonForUpdateOne();
// get all vendors
exports.getAllVendors =
    factoryControllers.getFindAllFilterWithSelectedFields(partnerModel);

// send json for get all vendors
exports.sendJsonForFilter = factoryControllers.sendAllFilter();

// get a vendor
exports.getAVendor = catchAsync(async (req, res, next) => {
    const [partner] = await partnerModel.aggregate([
        {
            $match: {
                hiwpmID: req.params.vendorId
            }
        },
        {
            $lookup: {
                from: 'partners',
                localField: 'userId',
                foreignField: 'userId',
                pipeline: [
                    {
                        $group: {
                            _id: '$userId',
                            otherVendors: {
                                $push: { name: '$for', id: '$hiwpmID' }
                            }
                        }
                    }
                ],
                as: 'partner'
            }
        },
        {
            $unwind: '$partner'
        }
    ]);

    if (!partner) {
        return next(
            new AppError('There is no partner was available for this id.', 404)
        );
    }
    partner.otherVendors = partner.partner.otherVendors;
    partner.partner = undefined;
    req.body.vendor = partner;
    return next();
});
// send json for get one data
exports.sendJsonForFindOne = factoryControllers.sendJsonForFindOne();

// assign data for get advetisemetns
exports.assignDataForGetAdvetisement = catchAsync(async (req, res, next) => {
    req.searchQuery = {
        from: req.params.moduleName,
        partnerEID: req.params.vendorId
    };
    return next();
});

// get advertisements
exports.getAdvetisement = factoryControllers.findAllData(advertisementModel);

// send json for get all
exports.sendJsonForGetAll = factoryControllers.sendJsonForAll();

// assign data for get all jobs
exports.assignDataForGetAllJobs = (req, res, next) => {
    req.searchQuery = {
        from: req.params.moduleName,
        partnerEID: req.params.vendorId
    };
    req.selectedData = '+';
    return next();
};

// get all jobs
exports.getAllJobs = factoryControllers.findAllData(postJobModel);

// assign Data for get a job
exports.getAJobs = catchAsync(async (req, res, next) => {
    const [applicants] = await postJobModel.aggregate([
        {
            $match: {
                partner: true,
                from: req.params.moduleName,
                hiwjbmID: req.params.jobId
            }
        },
        {
            $lookup: {
                from: 'job applies',
                localField: 'hiwjbmID',
                foreignField: 'jobEId',
                as: 'applicants'
            }
        }
    ]);

    return res.status(200).json({
        status: 'Success',
        docs: applicants
    });
});

// get a applicant
exports.getAAppliant = catchAsync(async (req, res, next) => {
    const [applicants] = await applyJobModel.aggregate([
        {
            $match: {
                hiwnjasID: req.params.applicantId,
                'jobDetails.userId': req.user._id
            }
        }
    ]);

    if (!applicants) {
        return next(new AppError('Cannot able to find appliant.', 404));
    }
    return res.status(200).json({
        status: 'Success',
        docs: applicants
    });
});
//
exports.getDataForQuoteFromAmbulance = catchAsync(async (req, res, next) => {
    const docs = await Promise.all(
        req.body.map(async (el) => {
            const uuid = await encryptID(process.env.MEDICAL_MARKET_SECRET);

            const datas = await medicalMarketProductsModel.aggregate([
                {
                    $match: {
                        productStream: el.productName
                    }
                },
                {
                    $group: { _id: '$partnerId' }
                },
                {
                    $lookup: {
                        from: 'partners',
                        localField: '_id',
                        foreignField: '_id',
                        as: 'partners'
                    }
                },
                {
                    $unwind: '$partners'
                },
                {
                    $match: { 'partners.status': 'accepted' }
                },
                {
                    $group: {
                        _id: '$partners._id'
                    }
                }
            ]);

            return await Promise.all(
                datas.map(async (els) => {
                    const reqs = {
                        productName: el.productName,
                        proposalDate: el.proposalDate,
                        productDescription: el.productDescription,
                        quantity: el.quantity,
                        hiwmmqrrsID: await encryptID(
                            process.env.MEDICAL_MARKET_SECRET
                        ),
                        userId: req.user._id,
                        for: uuid,
                        from: 'Ambulance Service',
                        requestPartner: els._id,
                        createdAt: Date.now()
                    };
                    return await Promise.all([
                        medicalMarketQuoteRequesterModel.create(reqs)
                    ]);
                })
            );
        })
    );

    const check = docs.some((el) => !!el);
    if (!check) {
        return next(
            new AppError('No related vendors found in your search.', 404)
        );
    }
    return res.status(200).json({ status: 'Success' });
});

// get vendor quotes
// get my active quoetes
exports.getvendorActiveQuotes = catchAsync(async (req, res, next) => {
    const quotes = await medicalMarketQuoteRequesterModel.aggregate([
        {
            $match: {
                requestedPartnerEID: req.params.vendorId,
                from: req.params.moduleName,
                $and: [
                    {
                        proposeStatus: { $ne: 'completed' }
                    },
                    {
                        proposeStatus: { $ne: 'canceled' }
                    }
                ]
            }
        },
        {
            $group: {
                _id: '$for',
                productName: { $first: '$productName' },
                proposalDate: { $first: '$proposalDate' },
                productDescription: { $first: '$productDescription' },
                quantity: { $first: '$quantity' }
            }
        }
    ]);
    return res.status(200).json({
        status: 'Success',
        docs: quotes
    });
});

// ============================================================
// assign data for get all user

// get blood requests
exports.getBloodRequest = catchAsync(async (req, res, next) => {
    const requests = await userModel.aggregate([
        {
            $match: {
                email: req.params.email
            }
        },
        {
            $lookup: {
                from: 'blood donation blood requesters',
                localField: '_id',
                foreignField: 'userId',
                pipeline: [
                    {
                        $facet: {
                            activeRequests: [
                                {
                                    $match: {
                                        status: 'active'
                                    }
                                }
                            ],
                            requestHistory: [
                                {
                                    $match: {
                                        $or: [
                                            { status: 'inActive' },
                                            { status: 'completed' }
                                        ]
                                    }
                                }
                            ]
                            // requestFromOthers: [
                            //     {
                            //         $lookup: {
                            //             from: 'blood donation blood requests',
                            //             localField: ''
                            //         }
                            //     }
                            // ]
                        }
                    }
                ],
                as: 'requester'
            }
        }
        // {
        //     $lookup: {
        //         from: 'blood donation blood requests'
        //     }
        // }
    ]);
    console.log(JSON.stringify(requests));
});

// assignd data for get vendor
exports.assignDataForGetAVendorPersonalDetails = (req, res, next) => {
    req.searchQuery = {
        hiwpmID: req.params.vendorId,
        for: req.params.moduleName
    };
    req.selectedData =
        '+verificationVideo +idProof +addressProof +aadharId +gstNumber +licence';
    return next();
};

// get additional data
exports.getAddidionalData = catchAsync(async (req, res, next) => {
    switch (req.params.moduleName) {
        case 'Online Consultancy':
        case 'Second Opinion':
            req.body.additional = await doctoryCategoriesModel.find();
            break;
        default:
            return next();
    }
    return next();
});

// assign data for get vendor details
exports.assignDataForGetVendorDetails = catchAsync(async (req, res, next) => {
    req.searchQuery = {
        hiwpmID: req.params.vendorId,
        for: req.params.moduleName
    };
    return next();
});

// assign  data for get vendor detaile
exports.assignDataForGetVendorOpinionDetails = (req, res, next) => {
    req.searchQuery = {
        userId: req.user._id,
        for: 'Second Opinion'
    };
    return next();
};

// check vendor only second opinion
exports.assingDataForCheckSecondOpinion = (req, res, next) => {
    if (req.params.moduleName !== 'Second Opinion') {
        return next(new AppError(`undefined url ${req.originalUrl}`, 404));
    }
    return next();
};

// assign data for secondopiton
exports.assignDataForOptionion = (req, res, next) => {
    req.params.moduleName = 'Second Opinion';
    return next();
};

// get a vendor
exports.getVendorADeatails =
    factoryControllers.findOneWithSelectedData(partnerModel);

// assign data for get vendor avaliablity
exports.assignDataForGetSpeakToUsAvailablity = (req, res, next) => {
    req.body = {
        partnerEId: req.docs.hiwpmID,
        partnerId: req.docs._id
    };
    req.partner = req.docs;
    req.user = { _id: req.docs.userId };
    return next();
};

// assign data for get vendor avaliablity
exports.assignDataForGetOnlineConsultancyAvailablity = (req, res, next) => {
    req.body = {
        partnerEId: req.docs.hiwpmID,
        partnerId: req.docs._id
    };
    req.partner = req.docs;
    req.user = { _id: req.docs.userId };
    return next();
};

// assign data of expert bookin list
exports.setSearchForExportBookingList = (req, res, next) => {
    req.search = { hiwpmID: req.params.vendorId, for: 'Meet the Expert' };
    return next();
};
exports.setSearchForExportBookingListData = (req, res, next) => {
    req.searchQuery = { hiwpmID: req.params.vendorId, for: 'Meet the Expert' };
    return next();
};

// assign data and ambulance services
exports.getPartnerAndAmbulanceServices = catchAsync(async (req, res, next) => {
    const [partner, services] = await Promise.all([
        partnerModel.findOne({
            hiwpmID: req.params.vendorId,
            for: req.params.moduleName
        }),
        ambulanceServices.find().distinct('name')
    ]);
    if (!partner) {
        return next(new AppError('Partner not found.', 404));
    }
    req.body.partner = partner;
    req.body.services = services;
    return next();
});

// get vendor facilities and services
exports.vendorFacilitiesandServices = catchAsync(async (req, res, next) => {
    // eslint-disable-next-line one-var
    let forW, facilities, services, serviceNames;
    // eslint-disable-next-line default-case
    switch (req.params.moduleName) {
        case 'Homecare service':
            forW = 'Homecare service';
            facilities = '$homecare.facilities';
            services = 'homecare services';
            serviceNames = 'homecare service lists';
            req.query.module = 'homecare';
            break;
        case 'De-Addiction service':
            forW = 'De-Addiction service';
            facilities = '$deaddiction.fecilities';
            services = 'de-addiction centers';
            serviceNames = 'de-addiction services';
            req.query.module = 'deaddiction';
            break;
    }

    const [fac] = await partnerModel.aggregate([
        {
            $match: {
                for: forW,
                hiwpmID: req.params.vendorId
            }
        },
        {
            $group: {
                _id: '$hiwpmID',
                for: { $first: '$for' },
                profileImage: { $first: '$profileImage' },
                name: { $first: '$name' },
                location: { $first: '$location' },
                bannerImage: { $first: '$bannerImage' },
                userId: { $first: '$userId' },
                facilities: { $first: facilities }
            }
        },
        {
            $lookup: {
                from: services,
                localField: 'userId',
                foreignField: 'userId',
                as: 'services'
            }
        },
        {
            $lookup: {
                from: serviceNames,
                pipeline: [
                    {
                        $group: {
                            _id: null,
                            names: { $push: '$name' }
                        }
                    }
                ],
                as: 'serviceList'
            }
        },
        {
            $unwind: `$serviceList`
        }
    ]);
    // fac._id = undefined;
    fac.userId = undefined;
    req.body.services = fac.services;
    req.body.facilities = fac.facilities;
    fac.services = undefined;
    fac.facilities = undefined;
    req.body.serviceList = fac.serviceList.names;
    fac.homecareservices = undefined;
    req.body.partner = fac;
    console.log(JSON.stringify(fac));
    return next();
});

// get homecare applicatnts
exports.getAppliants = catchAsync(async (req, res, next) => {
    // eslint-disable-next-line one-var
    let forW, applicant;
    // eslint-disable-next-line default-case
    switch (req.params.moduleName) {
        case 'Homecare service':
            forW = 'Homecare service';
            applicant = 'home care service applications';
            req.query.module = 'homecare';
            req.query.destination = 'admin/vendor/homecare/homecareBooking';
            break;
        case 'De-Addiction service':
            forW = 'De-Addiction service';
            applicant = 'book de-addiction centers';
            req.query.module = 'deaddiction';
            req.query.destination =
                'admin/vendor/deaddiction/deaddictionBooking';
            break;
    }

    const [applicants] = await partnerModel.aggregate([
        {
            $match: { hiwpmID: req.params.vendorId, for: forW }
        },
        {
            $lookup: {
                from: applicant,
                localField: '_id',
                foreignField: 'partnerId',
                pipeline: [
                    {
                        $facet: {
                            active: [
                                {
                                    $match: {
                                        $or: [
                                            {
                                                status: 'pending'
                                            },
                                            {
                                                status: 'accepted'
                                            }
                                        ]
                                    }
                                }
                            ],
                            history: [
                                {
                                    $match: {
                                        $and: [
                                            {
                                                status: { $ne: 'pending' }
                                            },
                                            {
                                                status: { $ne: 'accepted' }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ],
                as: 'applicants'
            }
        },
        {
            $unwind: '$applicants'
        }
    ]);
    req.body.applicants = applicants;
    return next();
});

// count number of collection documents
exports.countNumberOfDocuments = catchAsync(async (req, res, next) => {
    if (res.locals.user) {
        return res.redirect('/');
    }
    const [vendors, users] = await Promise.all([
        partnerModel.count(),
        userModel.count({ role: { $ne: 'admin' } })
    ]);
    req.body.userCount = users;
    req.body.vendorCount = vendors;
    return next();
});

// get all users
exports.assignDataForFindUsers = (req, res, next) => {
    req.searchQuery = { role: { $ne: 'admin' } };
    return next();
};

// find all user
exports.getAllUsers = factoryControllers.findAllData(userModel);

// assign Data for get a user
exports.assignDataForGetAUser = (req, res, next) => {
    req.searchQuery = { hiwuueidmID: req.params.userEId };
    return next();
};

// get a user
exports.getAUser = factoryControllers.findOne(userModel, 'User not found!');

// assign data for get all request vendor
exports.assignDataForGetRequestedPartners = (req, res, next) => {
    req.searchQuery = {
        $or: [{ status: 'pending' }, { status: 'resubmited' }]
    };
    return next();
};

// get requested partners
exports.getRequestedPartner = factoryControllers.findAllData(partnerModel);

// assign data for update partner status
exports.assignDataForUpdatePartnerStatus = (req, res, next) => {
    req.updateOneSearch = { hiwpmID: req.params.partnerId };
    req.body = {
        status: req.params.status,
        cause: req.body.description,
        role: 'partner'
    };
    return next();
};

// update partner status
exports.updatePartnerStatus =
    factoryControllers.findOneAndUpdateWithOld(partnerModel);

// create depending modules
exports.createDependingModules = catchAsync(async (req, res, next) => {
    if (req.params.status === 'rejected') {
        return res.status(200).json({
            status: 'Success'
        });
    }

    const eID = await encryptID(process.env.PARTNER_SECRET);
    switch (req.body.UOdocs.for) {
        case 'Hospital':
            const { userId, city } = req.body.UOdocs;
            if (req.body.UOdocs.status === 'pending') {
                await hospitalModel.create({
                    userId,
                    city,
                    name: req.body.UOdocs.company,
                    partnerId: req.body.UOdocs._id,
                    partnerEId: req.body.UOdocs.hiwpmID,
                    createdAt: Date.now(),
                    hiwhppsID: eID,
                    stream: req.body.vendorSubtype
                });
            }
            break;
        case 'Speak To Us':
            const data = {
                partnerEId: req.body.UOdocs.hiwpmID,
                partnerId: req.body.UOdocs._id,
                userId: req.body.UOdocs.userId,
                hiwstpasID: eID,
                createdAt: Date.now()
            };
            await speakToUsAvailablityModel.create(data);
            break;
        case 'Online Consultancy':
            const consutancy = {
                partnerEId: req.body.UOdocs.hiwpmID,
                partnerId: req.body.UOdocs._id,
                userId: req.body.UOdocs.userId,
                hiwdocboID: eID,
                createdAt: Date.now()
            };

            await onlineConsultancyAvailablityModel.create(consutancy);

            break;

        case 'Second Opinion':
            const secondOpinion = {
                partnerEId: req.body.UOdocs.hiwpmID,
                partnerId: req.body.UOdocs._id,
                userId: req.body.UOdocs.userId,
                hiwsoscmmID: eID,
                createdAt: Date.now()
            };
            await secondOpinionAvailablityModel.create(secondOpinion);
            break;

        default:
            return res.status(200).json({
                status: 'Success'
            });
    }
    return res.status(200).json({
        status: 'Success'
    });
});

// check the aborad aleady created
exports.checkIfDataAlreadyCreated = (req, res, next) => {
    if (req.docs.studyAbroad.status) {
        return next();
    }
    return res.redirect(
        `/admin/vendor-management/vendor-details/Study%20Abroad/${req.params.vendorId}/college-management`
    );
};

// create new suudy abroad details
exports.createStudyAbroadDetailsidItNew = catchAsync(async (req, res, next) => {
    if (req.docs.studyAbroad.status) {
        return next();
    }
    const eID = await encryptID(process.env.DONNATION_SECRET);
    const studyaboroad = await studyAbroadModel.create({
        userId: req.docs.userId,
        partnerId: req.docs._id,
        partnerEId: req.docs.hiwpmID,
        hiwsabmID: eID,
        country: req.docs.country,
        createdAt: Date.now(),
        name: req.docs.company
    });
    if (!studyaboroad) {
        return next(new AppError('Something went wrong please try again'));
    }
    await partnerModel.findByIdAndUpdate(req.docs._id, {
        studyAbroad: { status: true }
    });
    return next();
});

// assing data for get study abroad
exports.assignDataForGetStudyAbroad = (req, res, next) => {
    req.searchQuery = {
        userId: req.docs.userId,
        partnerId: req.docs._id
    };
    req.body.partner = req.docs;
    return next();
};

// assign data for details for vendor in study abroad
exports.assignDataForStudyAboradVendor = catchAsync(async (req, res, next) => {
    const [partner, abroad] = await Promise.all([
        partnerModel.findOne({
            hiwpmID: req.params.vendorId,
            for: 'Study Abroad'
        }),
        studyAbroadModel.findOne({ partnerEId: req.params.vendorId })
    ]);
    if (!partner) {
        return next(new AppError('Invalid partner', 400));
    }
    if (!abroad) {
        return next(new AppError('College not found', 404));
    }
    req.data = {};
    req.data.partner = partner;
    req.data.college = abroad;
    return next();
});

// exports college details for stude aborad
exports.assignDataForStudyAbraoadCourseDetails = (req, res, next) => {
    req.user._id = req.data.partner.userId;
    req.docs = { _id: req.data.college.partnerId };
    req.data.partner = undefined;
    req.data.college = undefined;
    return next();
};
// assign data for find hospiatl pacakge
exports.assignDataForFindHospitalPackageDetail = (req, res, next) => {
    req.searchQuery = {
        hiwpmID: req.params.vendorId,
        for: 'Hospital'
    };
    return next();
};
// assign data for find hospiatl pacakge
exports.assignDataForFindHospitalOrgaDetail = (req, res, next) => {
    req.searchQuery = {
        hiwpmID: req.params.vendorId,
        for: 'Hospital',
        'hospital.organDonation': true
    };
    return next();
};
// assign data for find hospiatl pacakge
exports.assignDataForFindOpticalPartner = (req, res, next) => {
    req.searchQuery = {
        hiwpmID: req.params.vendorId,
        for: 'Opticals'
    };
    return next();
};

// assign data for find pharmacy
exports.assignDataForFindPharmacyPartner = (req, res, next) => {
    req.searchQuery = {
        hiwpmID: req.params.vendorId,
        for: 'Pharmacy'
    };
    return next();
};
// assign data for find hospiatl pacakge
exports.assignDataForFindHearingaidPartner = (req, res, next) => {
    req.searchQuery = {
        hiwpmID: req.params.vendorId,
        for: 'Hearing AID',
        'hearingAid.serviceType': 'shop'
    };

    return next();
};

// assign data for find hospiatl pacakge
exports.assignDataForFindHearingaidPartnerHospital = (req, res, next) => {
    req.searchQuery = {
        hiwpmID: req.params.vendorId,
        for: 'Hearing AID',
        'hearingAid.serviceType': 'hospital'
    };

    return next();
};

// assign data for find differently abled
exports.assignDataForFindDifferentlyAbled = (req, res, next) => {
    req.searchQuery = {
        hiwpmID: req.params.vendorId,
        status: 'accepted',
        for: 'Differently Abled'
    };

    return next();
};

// assign data for find ambulance serivices
exports.assignDataForFindAmbualnceServices = (req, res, next) => {
    req.searchQuery = {
        hiwpmID: req.params.vendorId,
        status: 'accepted',
        for: 'Ambulance Service'
    };

    return next();
};
// assign data for find differently abled
exports.assignDataForFindFitnesGym = (req, res, next) => {
    req.searchQuery = {
        hiwpmID: req.params.vendorId,
        for: 'Fitness',
        status: 'accepted'
    };

    return next();
};

// assign data for speak to use
exports.assignDataForFindSpeakToUs = (req, res, next) => {
    req.searchQuery = {
        hiwpmID: req.params.vendorId,
        for: 'Speak To Us'
    };
    return next();
};
// assign data for speak to use
exports.assignDataForFindOnlineConsultancy = (req, res, next) => {
    req.searchQuery = {
        hiwpmID: req.params.vendorId,
        for: 'Online Consultancy'
    };
    return next();
};
// assign Data for hopital package udpate
exports.assignDataForUpdateHospitalPackage = (req, res, next) => {
    req.user = { _id: req.docs.userId };
    return next();
};

// assign data for speak to us
exports.assignDataforGetProperData = (req, res, next) => {
    req.user = { _id: req.docs.userId };
    req.body.partnerId = req.docs._id;
    return next();
};

// get all products ans orders
exports.getOpticalProductandOrders = catchAsync(async (req, res, next) => {
    const [products, [orders]] = await Promise.all([
        opticalModel.find({ userId: req.docs.userId }),
        opticalOrderModel.aggregate([
            {
                $match: {
                    partnerId: req.docs._id
                }
            },
            {
                $facet: {
                    active: [
                        {
                            $match: {
                                orderStatus: {
                                    $ne: 'delivered'
                                },
                                status: 'pending'
                            }
                        }
                    ],
                    history: [
                        {
                            $match: {
                                orderStatus: 'delivered',
                                status: { $ne: 'pending' }
                            }
                        }
                    ]
                }
            }
        ])
    ]);
    req.body.products = products;
    req.body.orders = orders;

    return next();
});

// get all booking data
exports.getAllBookinOpticalBookingdata = catchAsync(async (req, res, next) => {
    const [{ active, history }] = await opticalBookingModel.aggregate([
        {
            $match: {
                partnerId: req.docs._id
            }
        },
        {
            $facet: {
                active: [
                    {
                        $match: {
                            $or: [
                                {
                                    status: 'pending'
                                },
                                {
                                    status: 'accepted'
                                }
                            ]
                        }
                    },
                    {
                        $lookup: {
                            from: 'users',
                            localField: 'userId',
                            foreignField: '_id',
                            pipeline: [
                                {
                                    $project: {
                                        name: 1,
                                        phone: 1,
                                        profileImage: 1
                                    }
                                }
                            ],
                            as: 'user'
                        }
                    },
                    {
                        $unwind: '$user'
                    }
                ],
                history: [
                    {
                        $match: {
                            $and: [
                                {
                                    status: { $ne: 'pending' }
                                },
                                {
                                    status: { $ne: 'accepted' }
                                }
                            ]
                        }
                    },
                    {
                        $lookup: {
                            from: 'users',
                            localField: 'userId',
                            foreignField: '_id',
                            pipeline: [
                                {
                                    $project: {
                                        name: 1,
                                        phone: 1,
                                        profileImage: 1
                                    }
                                }
                            ],
                            as: 'user'
                        }
                    },
                    {
                        $unwind: '$user'
                    }
                ]
            }
        }
    ]);
    req.body.active = active;
    req.body.history = history;
    return next();
});

// assing data for create new optical product
exports.assignDataForCreateNewOpticalProduct = catchAsync(
    async (req, res, next) => {
        req.body.partnerId = req.docs._id;
        req.user._id = req.docs.userId;
        if (req.body.statusType === 'create') {
            req.body.createdAt = Date.now();
            req.body.hiwnopmID = await encryptID(process.env.OPTICAL_SECRET);
        } else if (req.body.statusType !== 'update') {
            return next(
                new AppError(
                    'Something went wrong while processing your request',
                    400
                )
            );
        }
        return next();
    }
);

// assign user id and partnerid
exports.assignUserIdAndPartnerId = (req, res, next) => {
    req.user = { _id: req.docs.userId };

    return next();
};

// assin user id  for user
exports.assignUserIdForUser = (req, res, next) => {
    req.user = { _id: req.docs._id, role: req.user.role };
    return next();
};

// assign data fo r update user id
exports.assignDataforDocsUserId = (req, res, next) => {
    req.docs.userId = req.docs._id;
    return next();
};

// assin user data for get user jobs
exports.assignDataForGetJobs = (req, res, next) => {
    req.params.from = 'user';
    return next();
};

// set module name for fitness
exports.setModuleNameForFitness = (req, res, next) => {
    req.params.moduleName = 'Fitness';
    return next();
};

// set module name for laboratory
exports.setModuleNameForLaboratory = (req, res, next) => {
    req.params.moduleName = 'Laboratory';
    return next();
};

// set module name for pharmacy
exports.setModuleNameForPharmacy = (req, res, next) => {
    req.params.moduleName = 'Pharmacy';
    return next();
};
// set module name for pharmacy
exports.setModuleNameForMarket = (req, res, next) => {
    req.params.moduleName = 'Medical Market';
    return next();
};

// set ambulance quotes serach management
exports.setSearchqueryForAmbulanceQuotes = (req, res, next) => {
    req.search = { hiwpmID: req.params.vendorId };
    return next();
};

// set laborator chekc
exports.setSearchForLaboratoryService = (req, res, next) => {
    req.search = {
        hiwpmID: req.params.vendorId,
        status: 'accepted',
        for: 'Laboratory'
    };
    return next();
};

// assign data for partner jbo
exports.assignDataforPostNewJob = catchAsync(async (req, res, next) => {
    req.body.userId = req.docs.userId;
    req.body.partner = true;
    req.body.hiwjbmID = await encryptID(process.env.SPEAK_TO_US_SECRET);
    req.body.createdAt = Date.now();
    req.body.expiredOn = new Date(Date.now() + 7 * 1000 * 3600 * 24).setHours(
        23,
        59,
        59,
        999
    );
    req.body.partnerId = req.docs._id;
    req.body.partnerEID = req.docs.hiwpmID;
    req.body.from = req.docs.for;
    req.body.email = req.docs.email;
    req.body.phone = req.docs.centerPhone;
    req.body.location = {
        type: 'Point',
        coordinates: [req.body.location[1], req.body.location[0]]
    };
    return next();
});

// assign data for get partner job and categories
exports.assignDataForGetJobAndCategories = catchAsync(
    async (req, res, next) => {
        const [categories, job] = await Promise.all([
            jobCategoriesModel.find(),
            postJobModel.findOne({
                userId: req.docs.userId,
                hiwjbmID: req.params.jobId
            })
        ]);
        if (!job) {
            return next(new AppError('Job not found.', 404));
        }
        req.body.categories = categories;
        req.body.job = job;
        return next();
    }
);

// assign data for update job
exports.assignDataForUpdateVendorJobs = (req, res, next) => {
    req.updateOneSearch = {
        userId: req.user._id,
        from: req.params.moduleName,
        hiwjbmID: req.params.jobId,
        status: 'active'
    };
    req.body.location = {
        type: 'Point',
        coordinates: [req.body.location[1], req.body.location[0]]
    };
    return next();
};

// assign data for update user job
exports.assignDataForUpdateUserJobs = (req, res, next) => {
    req.updateOneSearch = {
        userId: req.docs._id,
        from: 'user',
        hiwjbmID: req.params.jobId,
        status: 'active'
    };
    req.body.location = {
        type: 'Point',
        coordinates: [req.body.location[1], req.body.location[0]]
    };
    return next();
};

// assign data post job for user
exports.asssignDataForPostNewJob = catchAsync(async (req, res, next) => {
    req.body.from = 'user';
    req.body.userId = req.docs._id;
    req.body.hiwjbmID = await encryptID(process.env.SPEAK_TO_US_SECRET);
    req.body.createdAt = Date.now();
    req.body.partner = false;
    req.body.expiredOn = new Date(Date.now() + 7 * 1000 * 3600 * 24).setHours(
        23,
        59,
        59,
        999
    );
    req.body.location = {
        type: 'Point',
        coordinates: [req.body.location[1], req.body.location[0]]
    };
    req.body.phone = req.docs.phone;
    return next();
});

// check abbsoule module for market
exports.checkAbsoluteModuleForMarket = (req, res, next) => {
    if (req.params.moduleName !== 'Medical Market') {
        next(new AppError(`undefined url ${req.originalUrl}`, 404));
    }
    return next();
};

// check abbsoule module for market
exports.checkAbsoluteModuleForConsultancy = (req, res, next) => {
    if (req.params.moduleName !== 'Online Consultancy') {
        next(new AppError(`undefined url ${req.originalUrl}`, 404));
    }

    return next();
};
