// ============================================================
// import libraries
const mongoose = require('mongoose');

// ============================================================
// create mongoose schema
const medicalMarketListSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Users',
        required: [true, 'User id should be included.']
    },
    productEID: {
        type: String,
        required: [true, 'Product E-id should be included.']
    },
    productId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Medical Market Products',
        required: [true, 'product id should be included.'],
        select: false
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity should be included.'],
        default: 1,
        min: 1,
        max: 5
    },
    productType: {
        type: String,
        enum: ['single', 'colorOnly', 'sizeOnly', 'colorWithSize']
    },
    color: {
        type: String
    },
    size: {
        type: String
    },
    hiwmmpcsID: {
        required: true,
        type: String
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    },
    cartType: {
        type: String,
        enum: ['order', 'cart'],
        default: 'cart'
    },
    price: {
        type: Number
    },
    discountPrice: Number,
    bannerImage: { type: String }
});

// ============================================================
// create model
const medicalMarketProductCartModel = mongoose.model(
    'Medical Market Product Cart',
    medicalMarketListSchema
);

// ============================================================
// export model
module.exports = medicalMarketProductCartModel;
