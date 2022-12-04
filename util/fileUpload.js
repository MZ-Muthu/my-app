// ============================================================
// import packages
const multer = require('multer');
const sharp = require('sharp');
const AWS = require('aws-sdk');

// ============================================================
// import utlities
const AppError = require('./AppError');
const catchAsync = require('./catchAsync');

const multerStorage = multer.memoryStorage();

function multerFilter(req, file, cb) {
    if (file.mimetype.startsWith('image')) {
        cb(null, true);
    } else {
        cb(
            new AppError('Not a image type please upload the image', 400),
            false
        );
    }
}

function multerFilterForVideo(req, file, cb) {
    if (file.mimetype.startsWith('video')) {
        cb(null, true);
    } else {
        cb(
            new AppError('Not a video type please upload the video', 400),
            false
        );
    }
}

function multerFilterForDocument(req, file, cb) {
    if (file.mimetype.startsWith('application/pdf')) {
        cb(null, true);
    } else {
        cb(new AppError('Pdf only accepted.', 400), false);
    }
}
const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
});
const uploadVideo = multer({
    storage: multerStorage,
    fileFilter: multerFilterForVideo
});
const uploadDocument = multer({
    storage: multerStorage,
    fileFilter: multerFilterForDocument
});
// singleImage
exports.uploadSingleImage = (name) => upload.single(name);

// single video
exports.uploadSingleVideo = (name) => uploadVideo.single(name);

// single video
exports.uploadSingleDocument = (name) => uploadDocument.single(name);

// upload multiple images
exports.uploadMultipleImages = (name, maxCount) =>
    upload.fields([{ name, maxCount }]);

// resize userphoto
exports.resizeSingleImage = catchAsync(async (req, res, next) => {
    if (req.from === 'mobile') return next();
    if (req.body.statusType === 'create') {
        if (!req.file)
            return next(new AppError('Image should be included.', 400));
    }
    if (!req.file) return next();

    let data = '';
    if (req.file.mimetype !== 'image/png')
        data = sharp(req.file.buffer)
            .resize(req.image.resizeW * 1, req.image.resizeH * 1)
            .toFormat('jpeg')
            .jpeg({ quality: 90 });
    else
        data = sharp(req.file.buffer)
            .resize(req.image.resizeW * 1, req.image.resizeH * 1)
            .png();
    req.image.data = data;
    next();
});

// resize multiple iamges
exports.resizeMultipleImages = catchAsync(async (req, res, next) => {
    req.image.imageGallery = [];

    await Promise.all(
        req.files[req.image.multiImageName].map(async (el, i) => {
            const data = sharp(el.buffer)
                .resize(req.image.resizeW, req.image.resizeH)
                .toFormat('jpeg')
                .jpeg({ quality: 90 });

            req.image.imageGallery.push(data);
        })
    );

    next();
});

// upload multiple images
exports.uploadMultipleImageOnAWS = catchAsync(async (req, res, next) => {
    req.body[req.image.gallery] = [];
    const s3 = new AWS.S3({
        accessKeyId: process.env.AWS_ACCESSKEY,
        secretAccessKey: process.env.AWS_SECRETKEY,
        region: process.env.AWS_REGION
    });
    await Promise.all(
        req.image.imageGallery.map(async (el, i) => {
            const params = {
                Bucket: process.env.AWS_BUCKET,
                Key: `${req.image.galleryImagename}-${i + 1}.jpeg`,
                ContentType: 'image/jpeg',
                Body: el
            };
            try {
                const a = await s3.upload(params).promise();
                return req.body[req.image.gallery].push(a.Location);
            } catch (err) {
                console.log(err);
                return next(
                    new AppError(
                        'Somehing went wrong while processing your request.Ptry again.',
                        401
                    )
                );
            }
        })
    );
    console.log(req.body);
    return next();
});

// upload files in s3
exports.uploadFilesinAWS = catchAsync(async (req, res, next) => {
    if (req.from === 'mobile') return next();
    if (!req.image.data) {
        return next();
    }
    const s3 = new AWS.S3({
        accessKeyId: process.env.AWS_ACCESSKEY,
        secretAccessKey: process.env.AWS_SECRETKEY,
        region: process.env.AWS_REGION
    });
    const imageFormat = req.file.mimetype === 'image/png' ? 'png' : 'jpeg';
    const params = {
        Bucket: process.env.AWS_BUCKET,
        Key: `${req.image.imagename}.${imageFormat}`,
        Body: req.image.data,
        ContentType: `image/${imageFormat}`
    };
    s3.upload(params, (err, data) => {
        if (err) {
            return next(
                new AppError(
                    'Somehing went wrong while processing your request.Please try again.',
                    401
                )
            );
        }
        req.body[req.image.name] = data.Location;

        return next();
    });
});

// upload files in s3
exports.uploadVideoinAWS = catchAsync(async (req, res, next) => {
    if (req.from === 'mobile') return next();
    if (!req.file) {
        return next();
    }
    const s3 = new AWS.S3({
        accessKeyId: process.env.AWS_ACCESSKEY,
        secretAccessKey: process.env.AWS_SECRETKEY,
        region: process.env.AWS_REGION
    });
    const params = {
        Bucket: process.env.AWS_BUCKET,
        Key: `${req.video.videoname}.mp4`,
        ContentType: 'video/mp4',
        Body: req.file.buffer
    };
    s3.upload(params, (err, data) => {
        if (err) {
            return next(
                new AppError(
                    'Somehing went wrong while processing your request.Please try again.',
                    401
                )
            );
        }
        req.body[req.video.name] = data.Location;

        return next();
    });
});

// upload document in s3
exports.uploadDocumentinAWS = catchAsync(async (req, res, next) => {
    if (req.from === 'mobile') return next();
    if (!req.file) {
        return next();
    }
    const s3 = new AWS.S3({
        accessKeyId: process.env.AWS_ACCESSKEY,
        secretAccessKey: process.env.AWS_SECRETKEY,
        region: process.env.AWS_REGION
    });
    const params = {
        Bucket: process.env.AWS_BUCKET,
        Key: `${req.pdf.docname}.pdf`,
        ContentType: 'application/pdf',
        Body: req.file.buffer
    };
    try {
        const video = await s3.upload(params).promise();
        req.body[req.pdf.name] = video.Location;
    } catch (err) {
        // ******************
        return next(
            new AppError(
                'Somehing went wrong while processing your request.Please try again.',
                401
            )
        );
    }
    return next();
});

// single image and multiple images
exports.uploadSinglAndMultipleImage = upload.fields([
    {
        name: 'image',
        maxCount: 1
    },
    {
        name: 'imageGallery',
        maxCount: 8
    }
]);

exports.resizeImageAndGallerys = catchAsync(async (req, res, next) => {
    if (req.body.statusType === 'create') {
        if (!req.files.image.length || !req.files.imageGallery.length)
            return next(
                new AppError(
                    'Banner image and service image should be included.',
                    400
                )
            );
    }
    // image cover
    if (req.files.image)
        req.image.image = sharp(req.files.image[0].buffer)
            .resize(req.image.resizeW, req.image.resizeH)
            .png();

    // images
    if (req.files?.imageGallery?.length) {
        req.image.imageGallery = [];
        await Promise.all(
            req.files.imageGallery.map(async (el, i) => {
                const data = sharp(el.buffer)
                    .resize(req.image.resizeW, req.image.resizeH)
                    .png();

                req.image.imageGallery.push(data);
            })
        );
    }
    return next();
});

// upload files in aws
exports.uploadFilesinAWSVariable = catchAsync(async (req, res, next) => {
    const s3 = new AWS.S3({
        accessKeyId: process.env.AWS_ACCESSKEY,
        secretAccessKey: process.env.AWS_SECRETKEY,
        region: process.env.AWS_REGION
    });
    if (req.image.image) {
        const params = {
            Bucket: process.env.AWS_BUCKET,
            Key: `${req.image.imagename}.png`,
            ContentType: 'image/png',
            Body: req.image.image
        };
        try {
            console.log(req.image.name);
            const bannerImage = await s3.upload(params).promise();
            req.body[req.image.name] = bannerImage.Location;
        } catch (err) {
            return next(
                new AppError(
                    'Somehing went wrong while processing your request.Please try again.',
                    401
                )
            );
        }
    }
    if (req.image.imageGallery?.length) {
        req.body[req.image.gallery] = [];
        await Promise.all(
            req.image.imageGallery.map(async (el, i) => {
                const params = {
                    Bucket: process.env.AWS_BUCKET,
                    Key: `${req.image.galleryName}-${i + 1}.png`,
                    ContentType: 'image/png',
                    Body: el
                };
                try {
                    const a = await s3.upload(params).promise();
                    return req.body[req.image.gallery].push(a.Location);
                } catch (err) {
                    return next(
                        new AppError(
                            'Somehing went wrong while processing your request.Please try again.',
                            401
                        )
                    );
                }
            })
        );
    }
    return next();
});
