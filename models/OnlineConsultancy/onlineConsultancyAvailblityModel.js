// ============================================================
// import packages
const mongoose = require('mongoose');

// ============================================================
// create schema
const bookDoctorOnlineConsultancyShema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.ObjectId,
            ref: 'Users',
            required: [true, 'speaktous must contain userId.'],
            unique: true
        },
        createdAt: {
            type: Date,
            required: true
        },

        partnerId: {
            type: mongoose.Schema.ObjectId,
            ref: 'Partner',
            required: [true, 'Application must contain partner id.'],
            unique: true
        },
        hiwdocboID: {
            type: String,
            required: true
        },
        ratingsAverage: {
            type: Number,
            default: 0,
            max: 5,
            set: (val) => Math.round(val * 10) / 10
        },
        ratingsQuantity: {
            type: Number,
            default: 0
        },
        availableQuota: [
            {
                availableTime: [
                    {
                        type: String
                    }
                ],
                slotsInHour: {
                    type: Number,
                    min: 1,
                    max: [
                        process.env.ONLINE_CONSULTANCY_SLOTS_LIMIT,
                        `You can only able to set solots ${process.env.ONLINE_CONSULTANCY_SLOTS_LIMIT}`
                    ]
                },
                pricePerSlot: {
                    type: Number
                },
                availablity: {
                    type: String,
                    enum: ['online', 'opd']
                },
                day: Number
            }
        ]
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

bookDoctorOnlineConsultancyShema.virtual('reviews', {
    ref: 'Doctor Online Consultancy Reviews',
    foreignField: 'consultantId',
    localField: '_id'
});
// ============================================================
// populate user id
bookDoctorOnlineConsultancyShema.pre(/^find/, function (next) {
    this.populate([
        {
            path: 'partnerId',
            select: 'status'
        }
    ]);
    next();
});

// ============================================================
// create mongoose model
const doctorOnlineConsultancyBookModel = mongoose.model(
    'Doctor Online Consultancy Doctor Slots',
    bookDoctorOnlineConsultancyShema
);

// ============================================================
// export mongoose model
module.exports = doctorOnlineConsultancyBookModel;
