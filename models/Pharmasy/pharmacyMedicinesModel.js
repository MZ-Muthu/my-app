// ============================================================
// import libraries
const mongoose = require('mongoose');

// ============================================================
// crete mongoose schema
const medicinesSchema = new mongoose.Schema(
    {
        pharmacyID: {
            type: mongoose.Schema.ObjectId,
            ref: 'Partner',
            required: [true, 'opticals must contain partner.'],
            select: false
        },
        pharmacyEID: {
            type: String,
            required: true
        },
        medicineEID: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            required: true
        },
        hiwpmmmID: {
            type: String,
            required: true,
            unique: [true, 'Something went wrong please try again.']
        }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

// create index
medicinesSchema.index({ pharmacyEID: 1, medicineEID: 1 }, { unique: true });

// virtual populate
medicinesSchema.virtual('medicine', {
    localField: 'medicineEID',
    foreignField: 'hiwpmmdsID',
    ref: 'Pharmacy Medicines List'
});
// create mongoose model
const medicinesModel = mongoose.model('Pharmacy Medicines', medicinesSchema);

// export mongoose schema
module.exports = medicinesModel;
