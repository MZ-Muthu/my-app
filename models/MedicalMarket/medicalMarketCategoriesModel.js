// ============================================================
// import libraries
const mongoose = require('mongoose');

// ============================================================
// crete mongoose schema
const medicalMarketCategoriesSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: [true, 'Name should be unique.'],
        required: [true, 'Name should be included. ']
    },
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
    hiwmmcmmID: {
        type: String,
        required: true
    }
});

// create mongoose model
const medicalMarketCategoriesModel = mongoose.model(
    'Medical Market Categories',
    medicalMarketCategoriesSchema
);

// export mongoose schema
module.exports = medicalMarketCategoriesModel;
