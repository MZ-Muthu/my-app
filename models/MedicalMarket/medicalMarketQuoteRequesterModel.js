// ============================================================
// import libraries
const mongoose = require('mongoose');

// ============================================================
// create mongoose schema
const medicalMarketQuoteSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        lowercase: true
    },
    proposalDate: {
        type: Date,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Users',
        required: [true, 'User id should be included.']
    },
    hiwmmqrrsID: {
        type: String,
        required: true,
        unique: true
    },
    for: {
        type: String,
        required: true
    },
    estimateCost: {
        type: Number
    },
    limit: {
        type: Number
    },
    address: {
        type: String,
        required: [true, 'Address should be included.']
    },
    from: {
        type: String,
        required: true
    },
    proposeStatus: {
        type: String,
        required: true,
        enum: [
            'requested',
            'proposal-submited',
            'accepted',
            'negotiate',
            'rejected-by-user',
            'rejected-by-vendor',
            'canceled',
            'completed'
        ],
        default: 'requested'
    },
    completedDate: Date,
    completedDescription: String,
    vendorRejectDescription: String,
    vendorRejectDate: Date,
    negotiateDate: Date,
    negotiateDescription: String,
    negotiateDetails: [Object],
    requestdescription: {
        type: String
    },
    submitDescription: {
        type: String
    },
    submitDate: {
        type: Date
    },
    userDescription: {
        type: String
    },
    requestPartnerID: {
        type: mongoose.Schema.ObjectId,
        ref: 'Partner',
        required: [true, 'product must contain partner.']
    },
    requestedPartnerEID: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    sampleImage: [String],
    vendorActionDate: {
        type: Date
    },
    userActionDate: {
        type: Date
    }
});

// ============================================================
// create model
const medicalMarketQuoteRequestorModel = mongoose.model(
    'Medical Market Quote Request',
    medicalMarketQuoteSchema
);

// ============================================================
// export model
module.exports = medicalMarketQuoteRequestorModel;
