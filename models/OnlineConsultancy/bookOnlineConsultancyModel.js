// ============================================================
// import packages
const mongoose = require('mongoose');

// ============================================================
// create schema
const bookDoctorOnlineConsultancyShema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Users',
        required: [true, 'speaktous must contain userId.']
    },
    hiwdocboID: {
        type: String,
        required: true
    },
    patientName: {
        type: String,
        required: [true, 'Patient name should be included.']
    },
    partnerId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Partner',
        required: true,
        select: false
    },
    partnerEID: {
        type: String,
        required: true
    },
    slotEID: {
        type: String,
        required: true
    },
    slotId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Partner',
        required: true,
        select: false
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    via: {
        type: String,
        enum: ['online', 'opd'],
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
            'not-arrived'
        ],
        default: 'requested'
    },
    description: {
        type: String
    },
    acceptedDate: Date,
    rejectedDate: Date,
    canceledDate: Date,
    completedDate: Date,
    notArrivedDate: Date,
    createdAt: {
        type: Date,
        required: true
    },
    cancelTime: {
        type: Date
    },
    cancelCause: String,
    rejectedCause: String,
    acceptedCause: String,
    bookType: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

// ============================================================
// create model
const bookDoctorOnlineConsultancyModel = mongoose.model(
    'Doctor Online Consultant Slot Booking',
    bookDoctorOnlineConsultancyShema
);

// ============================================================
// export model
module.exports = bookDoctorOnlineConsultancyModel;
