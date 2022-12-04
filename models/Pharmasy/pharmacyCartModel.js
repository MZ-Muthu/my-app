// ============================================================
// import libraries
const mongoose = require('mongoose');

// ============================================================
// crete mongoose schema
const medicineCart1Schema = new mongoose.Schema({
    medicineId: {
        type: mongoose.Schema.ObjectId,
        required: [true, 'Name should be included. ']
    },
    medicineEId: {
        type: String,
        required: [true, 'Short description is should be included.']
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Users',
        required: true
    },
    createdAt: {
        type: Date,
        required: [true, 'Date should be included.']
    },
    hiwpmpcdmID: {
        type: String,
        required: true,
        unique: [true, 'Something went wrong please try again.']
    }
});

// create mongoose model
const pharmacyMedicinesCartModel = mongoose.model(
    'Pharmacy Medicines Cart',
    medicineCart1Schema
);

// export mongoose schema
module.exports = pharmacyMedicinesCartModel;
