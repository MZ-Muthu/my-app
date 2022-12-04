// ============================================================
// import libraries
const mongoose = require('mongoose');

// ============================================================
// crete mongoose schema
const doctoryCategoriesSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: [true, 'Name should be unique.'],
        required: [true, 'Name should be included. ']
    },
    specialists: [
        {
            name: { type: String, required: true },
            hiwdcsslsID: { type: String, required: true }
        }
    ],
    description: {
        type: String,
        required: [true, 'Short description is should be included.']
    },
    bannerImage: {
        type: String,
        required: [true, 'Banner Image should be included.']
    },
    createdAt: {
        type: Date,
        required: [true, 'Date should be included.']
    },
    hiwdcmID: {
        type: String,
        required: true,
        unique: [true, 'Something went wrong. Please try again.']
    }
});

// create mongoose model
const doctoryCategoriesModel = mongoose.model(
    'Doctor Categories',
    doctoryCategoriesSchema
);

// export mongoose schema
module.exports = doctoryCategoriesModel;
