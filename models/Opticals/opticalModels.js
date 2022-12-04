// ============================================================
// import libraires
const mongoose = require('mongoose');

// ============================================================
// create mongoose schema
const opticalSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name should be included.']
        },
        glassType: {
            type: String,
            required: true,
            enum: ['sun', 'power', 'read', 'computer']
        },
        glassGenderType: {
            type: String,
            required: true,
            enum: ['male', 'female']
        },
        glassRimType: {
            type: String,
            required: true,
            enum: ['full-rim', 'semi-rimless', 'rimless', 'low-brideg', 'wire']
        },
        frameType: {
            type: String,
            required: true,
            enum: [
                'rectangle',
                'oval',
                'round',
                'quare',
                'large',
                'horn',
                'browline',
                'aviator',
                'cateye',
                'oversized',
                'geomateric'
            ]
        },
        frameImage: {
            type: String,
            required: true
        },
        productDetails: [
            {
                color: {
                    type: String,
                    required: true
                },
                bannerImage: {
                    type: String,
                    required: [true, 'Banner image should be included.']
                },
                frameImage: {
                    type: String,
                    required: true
                },
                imageGallery: [String],
                subDetails: [
                    {
                        size: {
                            type: String,
                            enum: ['small', 'medium', 'large']
                        },
                        price: {
                            type: Number,
                            required: true
                        },
                        discountPrice: {
                            type: Number
                        },

                        hiwoppspdsID: {
                            type: String,
                            required: true
                        }
                    }
                ],
                hiwopptmID: {
                    type: String,
                    required: true
                }
            }
        ],
        materiralType: {
            type: String,
            required: true,
            enum: ['plastic', 'acetate', 'wood', 'metal', 'taitanium']
        },

        bannerImage: {
            type: String,
            required: true
        },
        imageGallery: {
            type: Array,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        userId: {
            type: mongoose.Schema.ObjectId,
            ref: 'Users',
            required: [true, 'opticals must contain userId.']
        },

        partnerId: {
            type: mongoose.Schema.ObjectId,
            ref: 'Partner',
            required: [true, 'opticals must contain partner.']
        },
        ratingsAverage: {
            type: Number,
            default: 0,
            max: 5,
            set: (val) => Math.round(val * 10) / 10
        },
        city: {
            type: String,
            required: [true, 'Store city should be included.']
        },
        price: {
            type: Number,
            required: true
        },
        discountPrice: {
            type: Number,
            default: 0
        },
        ratingsQuantity: {
            type: Number,
            default: 0
        },
        hiwnopmID: {
            type: String,
            required: true
        },
        createdBy: {
            type: String,
            required: true,
            enum: ['admin', 'vendor'],
            default: 'vendor'
        },
        createdAt: {
            type: Date,
            required: true
        }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);
// create virtual populate
opticalSchema.virtual('reviews', {
    ref: 'Opticals Reviews',
    foreignField: 'opticalsId',
    localField: '_id'
});

// create virtual populate
opticalSchema.virtual('partner', {
    ref: 'Partner',
    foreignField: '_id',
    localField: 'partnerId'
});

// ============================================================
// create model
const opticalModel = mongoose.model('Opticals', opticalSchema);

// ============================================================
// export optical model
module.exports = opticalModel;
