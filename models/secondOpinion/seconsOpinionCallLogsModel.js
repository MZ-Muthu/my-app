// ============================================================
// import libraires
const mongoose = require('mongoose');
const validator = require('validator');

// ============================================================
// create spnse shcema
const secondOpinionSponserSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Users',
        required: true
    },
    partnerId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Partner',
        required: true
    },
    partnerEID: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: [
            'requested',
            'accepted',
            'rejected',
            'canceled',
            'completed',
            'unable-connect'
        ],
        default: 'requested'
    },
    slotEID: {
        type: String,
        requried: true
    },
    acceptedDate: Date,
    rejectedDate: Date,
    canceledDate: Date,
    completedDate: Date,
    unableConnectDate: Date,
    logs: [
        {
            time: Date,
            status: String
        }
    ],
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    video: { type: String },
    hiwsoclmsID: {
        type: String,
        unique: true
    }
});

// creeate model
const secondOpinionSponsorModel = mongoose.model(
    'Second Opinion Call Logs',
    secondOpinionSponserSchema
);

// export module
module.exports = secondOpinionSponsorModel;
