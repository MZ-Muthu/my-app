// ============================================================
// import packages
const mongoose = require('mongoose');

// ============================================================
// create schema
const bookSecondOpinionShema = new mongoose.Schema(
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
        hiwsoscmmID: {
            type: String,
            required: true,
            unique: [true, 'Something went wrong please try again.']
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
                        process.env.SECOND_OPINION_SLOTS_LIMIT,
                        `You can only able to set solots ${process.env.SECOND_OPINION_SLOTS_LIMIT}`
                    ]
                },
                pricePerSlot: Number,
                day: Number
            }
        ]
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

bookSecondOpinionShema.virtual('reviews', {
    ref: 'Doctor Online Consultancy Reviews',
    foreignField: 'consultantId',
    localField: '_id'
});
// ============================================================
// populate user id
bookSecondOpinionShema.pre(/^find/, function (next) {
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
const secondOpinionBookModel = mongoose.model(
    'Second Opinion Doctor Slots',
    bookSecondOpinionShema
);

// ============================================================
// export mongoose model
module.exports = secondOpinionBookModel;
