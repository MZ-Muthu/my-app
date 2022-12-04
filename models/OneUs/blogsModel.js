// ============================================================
// import libraries
const mongoose = require('mongoose');
const slugify = require('slugify');

// ============================================================
// crete mongoose schema
const oneUsBlogsCategoriesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Name should be included. '],
        unique: true
    },
    description: {
        type: String,
        required: [true, 'Short description is should be included.']
    },
    categorie: {
        type: String,
        required: true
    },
    bannerImage: {
        type: String,
        required: [true, 'Banner Image should be included.']
    },
    createdAt: {
        type: Date,
        required: [true, 'Date should be included.']
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        required: true,
        select: false
    },
    userEId: {
        type: String,
        required: [true, 'user must contain userId.']
    },
    userType: {
        type: String,
        required: [true, 'User Type should be included.'],
        enum: ['user', 'admin'],
        default: 'user'
    },
    status: {
        type: String,
        required: true,
        enum: ['requested', 'accepted', 'rejected'],
        default: 'requested'
    },
    views: {
        type: Number,
        required: true,
        default: 0
    },
    slug: {
        type: String,
        unique: [true, 'Name should be unique']
    },
    hiwousvmID: {
        type: String,
        required: true,
        unique: [true, 'Something went wrong please tray again.']
    },
    cause: {
        type: String
    }
});

oneUsBlogsCategoriesSchema.pre('save', async function (next) {
    this.slug = slugify(this.title, { lower: true, trim: true });
    next();
});
oneUsBlogsCategoriesSchema.pre(/update+/gi, async function (next) {
    const data = this.getUpdate();
    if (!data.title) return next();
    this.getUpdate().slug = slugify(data.title, { lower: true, trim: true });
    next();
});

// create mongoose model
const oneUsBlogsCategoriesModel = mongoose.model(
    'One Us Blogs',
    oneUsBlogsCategoriesSchema
);

// export mongoose schema
module.exports = oneUsBlogsCategoriesModel;
