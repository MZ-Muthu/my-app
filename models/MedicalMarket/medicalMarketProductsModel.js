// ============================================================
// import libraries
const mongoose = require('mongoose');

// ============================================================
// crete mongoose schema
const medicalMarketListSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
            required: [true, 'Service should be include a name']
        },
        productStream: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: [true, 'Please ellobrate about your service']
        },
        productType: {
            type: String,
            required: [true, 'Please select the product type'],
            enum: ['single', 'colorOnly', 'sizeOnly', 'colorWithSize'],
            default: 'single'
        },
        price: {
            type: Number,
            required: [true, 'Price should be included.']
        },
        discountPrice: {
            type: Number
        },
        bannerImage: {
            type: String,
            required: [true, 'banner image should be incluedd.']
        },
        imageGallery: [String],
        sellerName: {
            type: String,
            required: [true, 'Seller name should be inlcluded.']
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
        color: String,
        size: {
            type: String
        },
        productDetails: [
            {
                color: {
                    type: String,
                    required: true,
                    default: 'not-defined'
                },
                bannerImage: {
                    type: String,
                    required: [true, 'Banner image should be included.']
                },
                imageGallery: [String],
                subDetails: [
                    {
                        size: {
                            type: String,
                            required: true,
                            default: 'not-defined'
                        },
                        price: {
                            type: Number,
                            required: true
                        },
                        discountPrice: {
                            type: Number
                        },

                        hiwmmpdssID: {
                            type: String,
                            required: true
                        }
                    }
                ],
                hiwmmppdsmID: {
                    type: String,
                    required: true
                }
            }
        ],
        additionalProductDetails: {
            type: Object
            // required: true
        },
        aboutItem: {
            type: Array
            // required: true
        },
        partnerEID: {
            type: String,
            required: [true]
        },
        hiwmmpmID: {
            type: String,
            required: true,
            unique: true
        },
        partnerId: {
            type: mongoose.Schema.ObjectId,
            ref: 'Partner',
            required: [true, 'market product must contain partner.']
        }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

// create virtual populate
medicalMarketListSchema.virtual('reviews', {
    ref: 'Medical Market Product Reviews',
    foreignField: 'marketId',
    localField: '_id'
});

// create virtual populate
medicalMarketListSchema.virtual('partner', {
    ref: 'Partner',
    foreignField: '_id',
    localField: 'partnerId',
    match: { status: 'accepted' }
});

// ============================================================
// create model
const medicalMarketProductModel = mongoose.model(
    'Medical Market Products',
    medicalMarketListSchema
);

// ============================================================
// medical market exports
module.exports = medicalMarketProductModel;
