// ============================================================
const { default: mongoose } = require('mongoose');
const twentyfourToTwelve = require('twentyfour-to-twelve');

// import controllers
const factoryControllers = require('./factoryControllers');

// ============================================================
// import models
const partnerModel = require('../models/shared/partnerModel');
const seconndOpinionSponsorModel = require('../models/secondOpinion/seconsOpinionSponserModel');
const secondOpinionAvailablityModel = require('../models/secondOpinion/secondOpinionAvailblityModel');
const seconOpinonCallLogsModel = require('../models/secondOpinion/seconsOpinionCallLogsModel');

// ============================================================
// import utilities
const catchAsync = require('../util/catchAsync');
const encryptID = require('../util/uuid');
const AppError = require('../util/AppError');
const filerDataFromRequest = require('../util/filterObjects');
const doctoryCategoriesModel = require('../models/shared/doctoryCategoriesModel');

// ============================================================
// create controllers
// assign partner search data
exports.assignDataForCreateNewOpinionSponser = catchAsync(
    async (req, res, next) => {
        req.body.createdAt = Date.now();
        req.body.hiwsosmID = await encryptID(process.env.SPEAK_TO_US_SECRET);
        req.body.partnerId = req.docs._id;
        req.body.partnerEId = req.docs.hiwpmID;
        return next();
    }
);

// create new partner
exports.createNewOpinionSponser = factoryControllers.createOne(
    seconndOpinionSponsorModel
);

// send josn for creeate onew
exports.sendJsonForCreateOne = factoryControllers.sendJson();

// assing data for get a proater
exports.assignDataForGetPartner = (req, res, next) => {
    req.searchQuery = {
        userId: req.user._id,
        for: 'Second Opinion',
        status: 'accepted'
    };

    return next();
};

// verify valid paorter
exports.verifyValidParter = factoryControllers.findOne(partnerModel);

// delete sponser
exports.deleteSponser = catchAsync(async (req, res, next) => {
    const data = await seconndOpinionSponsorModel.findOneAndDelete();
});

// select  sponser and valid sponser
exports.verifyAndSelectSponser = catchAsync(async (req, res, next) => {
    const sponser = await seconndOpinionSponsorModel.findOne({
        partnerId: req.docs._id,
        partnerEId: req.docs.hiwpmID,
        hiwsosmID: req.params.sponserId
    });

    if (!sponser) {
        return next(new AppError('Sponser not found.', 404));
    }
    if (sponser.status !== 'accepted' || sponser.callLimit <= sponser.called) {
        return next(new AppError('Sponsor not found.', 404));
    }
    const sponsers = await seconndOpinionSponsorModel.updateMany(
        {
            partnerId: req.docs._id,
            partnerEId: req.docs.hiwpmID
        },
        [
            {
                $set: {
                    select: {
                        $eq: ['$hiwsosmID', req.params.sponserId]
                    }
                }
            }
        ],
        {
            multi: true
        }
    );
    return res.status(200).json({ status: 'Success' });
});

// get all docutor
exports.getOpininionAlldoctors = catchAsync(async (req, res, next) => {
    const doctors = await secondOpinionAvailablityModel.aggregate([
        {
            $lookup: {
                from: 'partners',
                localField: 'partnerId',
                foreignField: '_id',
                pipeline: [
                    {
                        $match: {
                            status: 'accepted',
                            'secondOpinion.category': req.params.category
                        }
                    },
                    {
                        $group: {
                            _id: '$_id',
                            category: { $first: '$secondOpinion.category' },
                            speciality: {
                                $first: '$secondOpinion.speciality'
                            },
                            company: { $first: '$company' },
                            name: { $first: '$name' },
                            experience: {
                                $first: '$secondOpinion.experience'
                            },
                            profileImage: {
                                $first: '$profileImage'
                            }
                        }
                    }
                ],
                as: 'partner'
            }
        },
        {
            $unwind: '$partner'
        },
        {
            $project: {
                category: '$partner.category',
                speciality: '$partner.speciality',
                company: '$partner.company',
                name: '$partner.name',
                experience: '$partner.experience',
                profileImage: '$partner.profileImage',
                availableQuota: '$availableQuota',
                _id: '$hiwsoscmmID'
            }
        },
        {
            $unwind: '$availableQuota'
        },

        { $sort: { 'availableQuota.day': -1 } }
    ]);

    if (!doctors.length) {
        return next(
            new AppError(
                'There are no doctors currently avialale. Please try again later.',
                404
            )
        );
    }

    return res.status(200).json({
        status: 'Success',
        docs: doctors
    });
    // return next();
});

// get all random available doctors
exports.getAvailableDoctorsSpecilits = catchAsync(async (req, res, next) => {
    const doctors = await partnerModel.aggregate([
        {
            $match: {
                for: 'Second Opinion',
                status: 'accepted',
                'secondOpinion.status': true,
                'secondOpinion.valid': true,
                'secondOpinion.category': req.params.categorie
            }
        },
        {
            $lookup: {
                from: 'second opinion sponsors',
                localField: '_id',
                foreignField: 'partnerId',
                pipeline: [
                    {
                        $match: {
                            select: true,
                            status: 'accepted',
                            $expr: { $gt: ['$callLimit', '$called'] }
                        }
                    },
                    {
                        $limit: 1
                    }
                ],
                as: 'sponser'
            }
        },
        {
            $unwind: '$sponser'
        }
    ]);
    res.status(200).json({ status: 'Success', doctors });
});

// get a doctor
exports.getADoctorDetails = catchAsync(async (req, res, next) => {
    const [data] = await partnerModel.aggregate([
        {
            $match: {
                for: 'Second Opinion',
                status: 'accepted',
                hiwpmID: req.params.doctorId
            }
        },
        {
            $lookup: {
                from: 'second opinion sponsors',
                localField: '_id',
                foreignField: 'partnerId',
                pipeline: [
                    {
                        $match: {
                            select: true,
                            status: 'accepted',
                            $expr: { $gt: ['$callLimit', '$called'] }
                        }
                    },
                    {
                        $limit: 1
                    }
                ],
                as: 'sponser'
            }
        },
        {
            $unwind: '$sponser'
        }
    ]);
    if (!data) {
        return next(new AppError('Doctor not found', 404));
    }
    res.status(200).json({ status: 'Success', doctor: data });
});

// assignd data for updat the status
exports.assignDataForUpdateTheStatus = (req, res, next) => {
    req.updateByIdQuery = req.docs._id;
    req.updateQuery = [
        {
            $set: {
                'secondOpinion.status': {
                    $eq: ['$secondOpinion.status', false]
                }
            }
        }
    ];
    return next();
};

// update status
exports.updateOpinionStatus = factoryControllers.updateById(partnerModel);

// send json fro update onew
exports.sendJsonForUpdateOne = factoryControllers.sendJsonForUpdateOne();

// assignd data for get all the the data
exports.assignDataForgetMySponserList = (req, res, next) => {
    req.searchQuery = {
        partnerId: req.docs._id,
        $expr: { $gt: ['$callLimit', '$called'] }
    };
    return next();
};

// get all the the data
exports.getAllOpinionSponcers = factoryControllers.findAllData(
    seconndOpinionSponsorModel
);

// send json for get all
exports.sendJsonForGetAll = factoryControllers.sendJsonForAll();

// check valid date and time
exports.checkTheDateandTimeisvalid = catchAsync(async (req, res, next) => {
    req.body.availableQuota = await Promise.all(
        req.body.availableQuota.map(async (el) => {
            // if (
            //     JSON.stringify(req.body.availableQuota).split(`"day":${el.day}`)
            //         .length > 2
            // ) {
            //     return next(new AppError('Select the valid date .', 401));
            // }
            // const checkDate =
            //     new Date(el.date) <
            //         new Date(Date.now() + 1000 * 60 * 60 * 24 * 8) &&
            //     new Date(el.date) > new Date(Date.now() + 1000 * 3600 * 24);
            // if (!checkDate) {
            //     return next(new AppError('Please selct the valide date', 401));
            // }

            const availableTimes = [
                '01AM',
                '01PM',
                '02AM',
                '02PM',
                '03AM',
                '03PM',
                '04AM',
                '04PM',
                '05AM',
                '05PM',
                '06AM',
                '06PM',
                '07AM',
                '07PM',
                '08AM',
                '08PM',
                '09AM',
                '09PM',
                '10AM',
                '10PM',
                '11AM',
                '11PM',
                '12AM',
                '12PM'
            ];
            [el.availableTime] = await Promise.all([
                el.availableTime.map((els) => {
                    const a = els.toUpperCase();

                    if (!availableTimes.includes(a)) {
                        return next(
                            new AppError('Please select the valid time.', 400)
                        );
                    }
                    return a;
                })
            ]);
            return { ...el, availableTime: [...new Set(el.availableTime)] };
        })
    );
    return next();
});

// get doctors
exports.getAvailableDoctors = catchAsync(async (req, res, next) => {
    if (!req.query.type) {
        return next(
            new AppError(
                'Something went wrong while processing your request.',
                401
            )
        );
    }
    const doctors = await secondOpinionAvailablityModel.aggregate([
        {
            $lookup: {
                from: 'partners',
                localField: 'partnerId',
                foreignField: '_id',
                pipeline: [
                    {
                        $match: {
                            status: 'accepted',
                            'secondOpinion.speciality': req.params.category
                        }
                    },
                    {
                        $group: {
                            _id: '$_id',
                            category: { $first: '$secondOpinion.category' },
                            speciality: {
                                $first: '$secondOpinion.speciality'
                            },
                            company: { $first: '$company' },
                            name: { $first: '$name' },
                            experience: {
                                $first: '$secondOpinion.experience'
                            },
                            profileImage: {
                                $first: '$profileImage'
                            }
                        }
                    }
                ],
                as: 'partner'
            }
        },
        {
            $unwind: '$partner'
        },
        {
            $project: {
                category: '$partner.category',
                speciality: '$partner.speciality',
                company: '$partner.company',
                name: '$partner.name',
                experience: '$partner.experience',
                profileImage: '$partner.profileImage',
                availableQuota: '$availableQuota',
                _id: '$hiwdocboID'
            }
        },
        {
            $unwind: '$availableQuota'
        },
        {
            $match: {
                'availableQuota.availablity': req.query.type
            }
        },
        { $sort: { 'availableQuota.day': -1 } }
    ]);

    if (!doctors.length) {
        return next(
            new AppError(
                'There are no doctors currently avialale. Please try again later.',
                404
            )
        );
    }
    req.query.type = undefined;
    req.searchQuery = doctors;
    return res.status(200).json({
        status: 'Success',
        docs: doctors
    });
    // return next();
});

// check the partner and councilar
exports.checkValidVendorandPartner = catchAsync(async (req, res, next) => {
    const [partner] = await Promise.all([
        partnerModel.findOne({
            userId: req.user._id,
            status: 'accepted',
            for: 'Second Opinion'
        })
    ]);
    if (!partner) {
        return next(new AppError('Partner not found.', 404));
    }

    req.body.partnerId = partner._id;
    req.body.speciality = partner.secondOpinion.speciality;
    req.body.category = partner.secondOpinion.category;
    req.body.experience = partner.secondOpinion.experience;
    req.docs = partner;
    return next();
});

// assign data for Expert reivews
exports.assingConsultancyAvailablityData = catchAsync(
    async (req, res, next) => {
        await Promise.all(
            req.body.availableQuota.map(async (el) => {
                const a = await secondOpinionAvailablityModel.updateOne(
                    {
                        userId: req.user._id,
                        partnerId: req.docs._id
                    },
                    {
                        $pull: {
                            availableQuota: {
                                day: el.day
                            }
                        }
                    }
                );
                await secondOpinionAvailablityModel.updateOne(
                    {
                        userId: req.user._id,
                        partnerId: req.docs._id
                    },
                    {
                        $push: {
                            availableQuota: {
                                day: el.day,
                                availableTime: el.availableTime,
                                slotsInHour: el.slotsInHour,
                                pricePerSlot: el.pricePerSlot,
                                availablity: el.availablity
                            }
                        }
                    },
                    {
                        new: true,
                        runValidators: true
                    }
                );
            })
        );
        return res.json({
            status: 'Success'
        });
    }
);

// get a doctor
exports.getaDoctor = catchAsync(async (req, res, next) => {
    const doctors = await secondOpinionAvailablityModel.aggregate([
        {
            $match: {
                hiwsoscmmID: req.params.serviceId
            }
        },
        {
            $lookup: {
                from: 'partners',
                localField: 'partnerId',
                foreignField: '_id',
                pipeline: [
                    {
                        $match: {
                            status: 'accepted',
                            for: 'Second Opinion',
                            'secondOpinion.valid': true
                        }
                    }
                ],
                as: 'partner'
            }
        },
        { $unwind: '$partner' }
    ]);

    if (!doctors.length) {
        return next(new AppError('Doctor not found.', 404));
    }
    req.body.docs = doctors;
    next();
});

exports.sendJsonForDocs = (req, res) =>
    res.status(200).json({ status: 'Success', docs: req.body.docs });

// assign data for find my availablity
exports.assignDataForFindMyAvailablitySlots = (req, res, next) => {
    req.searchQuery = {
        userId: req.user._id,
        partnerId: req.body.partnerId
    };
    return next();
};

// assign dat for partner
exports.assignPartnerBody = (req, res, next) => {
    req.body.partnerId = req.docs._id;
    return next();
};

// get ambualace bookingse
exports.getSecondOpinionServiceBookings = catchAsync(async (req, res, next) => {
    const [docs] = await seconOpinonCallLogsModel.aggregate([
        {
            $match: {
                partnerId: req.docs._id
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
                            phone: 1
                        }
                    }
                ],
                as: 'user'
            }
        },
        {
            $unwind: '$user'
        },
        {
            $facet: {
                active: [
                    {
                        $match: {
                            $and: [
                                {
                                    status: { $ne: 'canceled' }
                                },
                                {
                                    status: { $ne: 'rejected' }
                                },
                                {
                                    status: { $ne: 'completed' }
                                },
                                {
                                    status: { $ne: 'not-arrived' }
                                }
                            ]
                        }
                    }
                ],
                history: [
                    {
                        $match: {
                            $or: [
                                {
                                    status: 'canceled'
                                },
                                {
                                    status: 'rejected'
                                },
                                {
                                    status: 'completed'
                                },
                                {
                                    status: 'not-arrived'
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]);

    req.body.docs = docs;
    return next();
});

// get my availablity
exports.getMyAvailablity = factoryControllers.findOne(
    secondOpinionAvailablityModel
);

// get my avaialablity
exports.getSecondOpinionBookingList = catchAsync(async (req, res, next) => {});

// get availablity datays
exports.getAvailablityDays = catchAsync(async (req, res, next) => {
    const days = await Promise.all(req.docs.availableQuota.map((el) => el.day));
    req.body.days = days;

    return next();
});

// get vendor slots
exports.sendJsonForGetVendorSlots = (req, res) =>
    res
        .status(200)
        .json({ status: 'Success', slots: req.docs, days: req.body.days });

// get check doctor and doctor appointment
exports.checkDoctorandDoctorAppoinment = catchAsync(async (req, res, next) => {
    const startDate = new Date(new Date(req.body.date).setHours(0, 0, 0, 0));
    const endDate = new Date(new Date(req.body.date).setHours(23, 59, 59, 999));

    const day = new Date(req.body.date).getDay();
    const check7Days =
        endDate <=
            new Date(Date.now() + 1000 * 3600 * 24 * 6).setHours(
                23,
                59,
                59,
                999
            ) && startDate >= new Date(new Date().setHours(0, 0, 0, 0));
    if (!check7Days) {
        return next(new AppError('Please enter the valid date', 400));
    }
    const reg = new RegExp(req.body.time, 'ig');
    const [[datacheck], slotcheck] = await Promise.all([
        secondOpinionAvailablityModel.aggregate([
            {
                $match: { hiwsoscmmID: req.params.serviceId }
            },
            {
                $unwind: '$availableQuota'
            },
            {
                $match: {
                    'availableQuota.day': day,
                    'availableQuota.availableTime': { $in: [reg] }
                }
            },
            {
                $lookup: {
                    from: 'partners',
                    localField: 'partnerId',
                    foreignField: '_id',
                    pipeline: [
                        {
                            $match: {
                                status: 'accepted',
                                for: 'Second Opinion',
                                'secondOpinion.valid': true
                            }
                        },
                        {
                            $limit: 1
                        }
                    ],
                    as: 'partner'
                }
            },
            {
                $unwind: '$partner'
            }
        ]),
        seconOpinonCallLogsModel.aggregate([
            {
                $match: {
                    slotEID: req.params.serviceId,
                    time: req.body.time,
                    date: {
                        $gte: startDate,
                        $lte: endDate
                    },
                    $and: [
                        { status: { $ne: 'canceled' } },
                        { status: { $ne: 'rejected' } }
                    ]
                }
            }
        ])
    ]);
    const [checkUser] = await Promise.all([
        slotcheck.some((el) => el.userId.toString() === req.user._id.toString())
    ]);
    if (checkUser) {
        return next(new AppError('You already booked this slot', 400));
    }
    if (!datacheck) {
        return next(new AppError('Consultant not found.', 400));
    }

    if (slotcheck.length >= datacheck.availableQuota.slotsInHour) {
        return next(new AppError('All slots are already booked.', 400));
    }
    console.log(datacheck.partner);
    req.body = {
        hiwsoclmsID: await encryptID(process.env.ONLINE_CONSULTANT_SECRET),
        partnerEID: datacheck.partner.hiwpmID,
        partnerId: datacheck.partner._id,
        slotEID: datacheck.hiwsoscmmID,
        date: req.body.date,
        time: req.body.time,
        price: datacheck.availableQuota.pricePerSlot,
        createdAt: Date.now(),
        userId: req.user._id,
        description: req.body.description,
        bookType: 'online'
    };
    return next();
});

exports.bookSecondOpinioncall = factoryControllers.createOne(
    seconOpinonCallLogsModel
);

// cancel requester request
exports.assignDataForCancelSecondOpinionSlot = catchAsync(
    async (req, res, next) => {
        req.updateOneSearch = {
            hiwsoclmsID: req.params.slotId,
            userId: req.user._id,
            $or: [{ status: 'requested' }, { status: 'accepted' }]
        };
        req.body.cancelTime = Date.now();
        req.body.status = 'canceled';
        return next();
    }
);

// cancel secon onpinion call
exports.updateSecondOpininCall = factoryControllers.findOneAndUpdate(
    seconOpinonCallLogsModel
);

// assign data for slots
exports.getMyBookingHistory = catchAsync(async (req, res, next) => {
    const [docs] = await seconOpinonCallLogsModel.aggregate([
        {
            $match: {
                userId: req.user._id
            }
        },
        {
            $lookup: {
                from: 'partners',
                localField: 'partnerId',
                foreignField: '_id',
                pipeline: [
                    {
                        $project: {
                            name: 1,
                            phone: '$centerPhone',
                            city: 1,
                            secondOpinion: 1,
                            profileImage: 1
                        }
                    }
                ],
                as: 'partner'
            }
        },
        {
            $unwind: '$partner'
        },
        {
            $facet: {
                active: [
                    {
                        $match: {
                            $and: [
                                {
                                    status: { $ne: 'canceled' }
                                },
                                {
                                    status: { $ne: 'rejected' }
                                },
                                {
                                    status: { $ne: 'completed' }
                                },
                                {
                                    status: { $ne: 'not-arrived' }
                                }
                            ]
                        }
                    }
                ],
                history: [
                    {
                        $match: {
                            $or: [
                                {
                                    status: 'canceled'
                                },
                                {
                                    status: 'rejected'
                                },
                                {
                                    status: 'completed'
                                },
                                {
                                    status: 'not-arrived'
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]);
    req.body.docs = docs;
    return next();
});

// update second opinio Bookling status
exports.assignDataforUpdateSecondOpinionBookingStatus = catchAsync(
    async (req, res, next) => {
        const booking = await seconOpinonCallLogsModel.findOne({
            partnerId: req.docs._id,
            hiwsoclmsID: req.params.bookingId
        });

        if (!booking) {
            return next(new AppError('Booking data not found', 404));
        }
        const { status } = req.params;
        const obj = {};
        if (status === 'accepted') {
            if (booking.status !== 'requested') {
                return next(
                    new AppError(
                        `This Booking status is already ${booking.status}. So, we can't accept your request.`
                    )
                );
            }
            obj.acceptedDate = Date.now();
        } else if (status === 'rejected') {
            if (booking.status !== 'accepted' && booking.status !== 'pending') {
                return next(
                    new AppError(
                        `This booking status is already ${booking.status}. So, we can't accept your request.`
                    )
                );
            }
            obj.rejectedDate = Date.now();
        } else if (status === 'completed') {
            if (booking.status !== 'accepted') {
                return next(
                    new AppError(
                        `This Booking status is already ${booking.status}. So, we can't accept your request.`
                    )
                );
            }
            obj.completedDate = Date.now();
        } else if (status === 'not-arrived') {
            if (booking.status !== 'accepted') {
                return next(
                    new AppError(
                        `This Booking status is already ${booking.status}. So, we can't accept your request.`
                    )
                );
            }
            obj.notArrivedDate = Date.now();
        } else if (status === 'canceled') {
            return next(new AppError(`This option only for user`));
        } else {
            return next(new AppError('Please select valid status.', 400));
        }
        req.updateOneSearch = {
            partnerId: req.docs._id,
            hiwsoclmsID: req.params.bookingId
        };
        req.body = { status, ...obj };
        return next();
    }
);

// filter new blood bank data
exports.filterSecondOpinionData = catchAsync(async (req, res, next) => {
    [req.body] = await Promise.all([
        filerDataFromRequest(
            req.body,
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
            'experience'
        )
    ]);

    return next();
});

// assign partner search data
exports.assignPartnerSearchData = catchAsync(async (req, res, next) => {
    const data = await doctoryCategoriesModel.findOne({
        name: req.body.category,
        'specialists.name': req.body.speciality
    });
    if (!data) {
        return next(new AppError('Doctor Categorie Found.', 404));
    }
    req.updateOneSearch = {
        userId: req.user._id,
        status: 'accepted',
        for: 'Second Opinion'
    };
    req.body.location = {
        type: 'Point',
        coordinates: [req.body.longtitude, req.body.latitude]
    };
    req.body = {
        ...req.body,
        'secondOpinion.speciality': req.body.speciality,
        'secondOpinion.category': req.body.category,
        'secondOpinion.experience': req.body.experience
    };
    req.body.userId = req.user._id;

    req.body = { $set: req.body };
    return next();
});

// update second opinion
exports.updateSecondOpinion = factoryControllers.updateOne(partnerModel);
