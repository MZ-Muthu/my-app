// ============================================================
// import libraries
const mongoose = require('mongoose');
const validator = require('validator');

// ============================================================
// crete mongoose schema
const bookLaboratorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name should be included.']
    },
    status: {
        type: String,
        required: [true, 'Status should be included.'],
        enum: [
            'requested',
            'accepted',
            'rejected',
            'completed',
            'not-arrived',
            'canceled'
        ],
        default: 'requested'
    },
    createdAt: {
        type: Date,
        required: [true, 'Created date should be included.']
    },
    acceptedDate: {
        type: Date
    },
    bookingType: {
        type: String,
        required: true,
        enum: ['home', 'lab']
    },
    vendorAcceptDescription: String,
    rejectedDate: Date,
    rejectedResponse: String,
    completedDate: Date,
    completedResponse: String,
    notArrivedDate: Date,
    notArrivedResponse: String,
    cancelDate: Date,
    cancelDescription: String,
    requestDate: {
        type: Date,
        required: [true, 'Requesting date should be included.']
    },
    scheduleTime: {
        type: String
    },
    askedService: [
        {
            name: { type: String, required: true },
            price: { type: Number, required: true },
            homeBased: { type: String, required: true }
        }
    ],
    report: {
        type: String
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Users',
        required: true
    },
    labId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Partner',
        required: true,
        select: false
    },
    labEId: {
        type: String,
        required: true
    },
    hiwlbbssID: {
        type: String,
        required: [true],
        unique: [true, 'Something went wrong, please try again.']
    },
    address: {
        type: Object
    }
});

// create mongoose model
const laboratoryBookingModel = mongoose.model(
    'Laboratory Booking',
    bookLaboratorySchema
);

// export mongoose schema
module.exports = laboratoryBookingModel;
