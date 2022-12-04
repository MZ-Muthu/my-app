// ============================================================
// import libraries
const mongoose = require('mongoose');

// ============================================================
// crete mongoose schema
const organDonationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name should be included. ']
    },
    description: {
        type: String,
        required: [true, 'Short description is should be included.']
    },

    createdAt: {
        type: Date,
        required: [true, 'Date should be included.']
    },
    hiwhpdoamID: {
        type: String,
        required: true,
        unique: [true, 'Something went wrong pleay try again.']
    },
    availablity: {
        type: Boolean,
        required: true
    },
    bloodGroup: {
        type: String,
        required: [true, 'Blood Group shoule be included.']
    },
    partnerId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Partner',
        required: [true, 'Hosptial package must contain partner id.']
    },
    partnerEId: {
        type: String,
        required: true
    }
});

// create mongoose model
const organAvailablityModel = mongoose.model(
    'Hospital Organ Availablity',
    organDonationSchema
);

// export mongoose schema
module.exports = organAvailablityModel;
