// ============================================================
// import libraries
const mongoose = require('mongoose');

// ============================================================
// crete mongoose schema
const pharmacyMedicineRequestSchema = new mongoose.Schema({
    requestType: {
        type: String,
        required: [true, 'Request type should be included.'],
        enum: ['medicine', 'prescription']
    },
    medicines: {
        type: [Object]
    },
    prescription: {
        type: String
    },
    partnerId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Partner',
        required: true
    },
    address: {
        type: Object,
        required: [true, 'Address should be included.']
    },
    location: {
        type: {
            type: String,
            default: 'Point',
            enum: ['Point']
        },
        coordinates: [Number]
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    partnerEId: {
        type: String,
        required: true
    },
    hiwnpmrsmsID: {
        type: String,
        required: [true],
        unique: [true, 'Somehting went wrong please try again.']
    },
    createdAt: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: [true],
        enum: [
            'pending',
            'accepted',
            'packed',
            'outofdelivery',
            'completed',
            'missed',
            'canceled',
            'rejected'
        ],
        default: 'pending'
    },
    respondedTime: Date,
    acceptedTime: Date,
    packedTime: Date,
    outofdeliveryTime: Date,
    completedTime: Date,
    canceledTime: Date,
    missedTime: Date,
    rejectedTime: Date,
    batch: {
        type: String,
        required: true
    }
});

// create mongoose model
const pharmacyMedicineRequestModel = mongoose.model(
    'Pharmacy Medicine Request',
    pharmacyMedicineRequestSchema
);

// export mongoose schema
module.exports = pharmacyMedicineRequestModel;
