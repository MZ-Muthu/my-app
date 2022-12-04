// ============================================================
// import libraires
const mongoose = require('mongoose');
const validator = require('validator');

// ============================================================
// create spnse shcema
const secondOpinionSponserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'sponsor name should be included.']
    },
    phone: {
        type: String,
        required: [true, 'phone should be included.']
    },
    callLimit: {
        type: Number,
        required: [true, 'Call limit should be included.']
    },
    called: {
        type: Number,
        default: 0
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please Enter the valide Email.']
    },
    verificationDocument: {
        type: String,
        required: [true, 'verification document should be included.']
    },
    hiwsosmID: {
        type: String,
        required: [true]
    },
    partnerId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Partner',
        required: true
    },
    partnerEId: {
        type: String,
        required: true
    },
    select: {
        type: Boolean,
        required: true,
        default: false
    },
    status: {
        type: String,
        required: true,
        enum: ['pending', 'accepted', 'rejected', 'fulfilled', 'completed'],
        default: 'pending'
    },
    createdAt: {
        type: Date,
        required: true
    },
    acceptedDate: Date,
    rejectedDate: Date,
    fulfilledDate: Date,
    completedDate: Date
});

// creeate model
const secondOpinionSponsorModel = mongoose.model(
    'Second Opinion Sponsors',
    secondOpinionSponserSchema
);

// export module
module.exports = secondOpinionSponsorModel;
