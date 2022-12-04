/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const sanitization = require('express-mongo-sanitize');
const cookieParser = require('cookie-parser');
const AppError = require('./util/AppError');

dotenv.config({ path: './env/config.env' });
const app = express();

// ============================================================
// import controllers
const globalErrorController = require('./controllers/errorControllers');

// ============================================================
// schedulers
const schedulers = require('./controllers/schedulterControllers/schedulter');

// ============================================================
// import route
const insuraceRouter = require('./routes/insuranceRoutes');
const userRouter = require('./routes/userRoutes');
const partnerRouter = require('./routes/partnerRoute');
const HomeCareServiceRouter = require('./routes/homecareServiceRoutes');
const MeetTheExpertRouter = require('./routes/meetTheExpertsRoute');
const deAddictionRouter = require('./routes/deaddictionRoutes');
const donnerRouter = require('./routes/donnerRoutes');
const hearingaid = require('./routes/hearingAidRoutes');
const orgonroutes = require('./routes/orgaonRoutes');
const fitnessRouter = require('./routes/fitnessRoutes');
const hospitalToursumRouter = require('./routes/hospitalTourismRoute');
const hospitalDetailsRouter = require('./routes/hospitalDetails');
const hospitalPackage = require('./routes/hospitalPackageRoutes');
const medicalRecordRouter = require('./routes/medicalRecordRoutes');
const studyAbroadRouter = require('./routes/studyAboadRoutes');
const speakToUsRouter = require('./routes/speakToUs/vendorRoutes');
const opticalRouter = require('./routes/Opticals/opticalsRoutes');
const marketPlaceRouter = require('./routes/MedicalMarket/medicalMarketRoutes');
const onlineConsultancyRouter = require('./routes/OnlineConsultancy/vendorRoutes');
const bloodDonationRouter = require('./routes/BloodDonation/bloodDonationRoutes');
const jobPortalRouter = require('./routes/JopPortal/jobPortalroutes');
const differentlyAbledRouter = require('./routes/differentlyAbledProductRoutes');
const ambulanceRouter = require('./routes/ambulanceRotes/ambulanceRoutes');
const vendorRouter = require('./routes/viewRoutes/vendor');
const adminViewRouter = require('./routes/viewRoutes/admin');
const userViewRouter = require('./routes/viewRoutes/user');
const pharmacyRouter = require('./routes/pharmacy/pharmacyRoutes');
const laboratoryRouter = require('./routes/laboratory/laboratoryRoutes');
const quotesRouter = require('./routes/quotes/quotesRoutes');
const secondOpinionRouter = require('./routes/secondOpinion/vendorRoutes');
const oneUsRouter = require('./routes/oneUs/oneUsRoutes');

// admin route
// vendor router
const vendroAdminRouter = require('./routes/admin/vendorRou');
const adminAmbulanceRouter = require('./routes/admin/vendor/ambulanceVendorRouter');
const adminBloodDonation = require('./routes/admin/vendor/bloodDonnationVendorRouter');
const adminHomecare = require('./routes/admin/vendor/homcareVendorRouter');
const adminDeaddiction = require('./routes/admin/vendor/deaddictionVendorRouter');
const adminVendorExpertRouter = require('./routes/admin/vendor/meetTheExpertVendorRouter');
const adminVendorStudyAbroudRouter = require('./routes/admin/vendor/studyAbroadVendorRouter');
const adminVendorHospitalRouter = require('./routes/admin/vendor/hospitalVendorRouter');
const adminVendorspeakToUsRouter = require('./routes/admin/vendor/speaktoUsVendorRoutes');
const adminVendorOpticalsRouter = require('./routes/admin/vendor/opticalVendorRouter');
const adminVendorHearingaidRouter = require('./routes/admin/vendor/hearingaidVendorRoutes');
const adminVendorDifferentlyRouter = require('./routes/admin/vendor/differendAbledProdctRoutes');
const adminVendorFitnessRouter = require('./routes/admin/vendor/fitnessVendorRouter');
const adminVendorLaboratoryRouter = require('./routes/admin/vendor/laboratoryVendorRoutes');
const adminVendorPharmacyRouter = require('./routes/admin/vendor/pharmacyVendorRouter');
const adminVendorMarketRouter = require('./routes/admin/vendor/marketVendorRoutes');
const adminVendorContactRouter = require('./routes/admin/vendor/onlineConsultancyVendorRoutes');
const adminVendroSecondOpinionRouter = require('./routes/admin/vendor/secondOpinionVendorRouter');

// user router
const adminUser = require('./routes/admin/userRou');
const adminUserAmbulanceRouter = require('./routes/admin/user/ambulanceUserRou');
const adminUserHomecareRouter = require('./routes/admin/user/homecareUserRou');
const adminUserDeaddictionRouter = require('./routes/admin/user/deaddictionUserRou');
const adminUserBloodDaontionRouter = require('./routes/admin/user/bloodDonation');
const adminUserMeetTheExpertRouter = require('./routes/admin/user/expertRoutes');
const adminUserOpticals = require('./routes/admin/user/opticalsUserRouter');
const adminUserHearingaidRouter = require('./routes/admin/user/hearingAidUserRoutes');
const adminUserDifferentlyRouter = require('./routes/admin/user/differenlyAbledRoutes');
const adminMedicalRecordsRouter = require('./routes/admin/user/medicalRecordsUserRoutes');
const adminPharmacyRouter = require('./routes/admin/user/pharmacyUserRoutes');
const adminUserJobportalRouter = require('./routes/admin/user/jobPortalRouter');
const adminUserMarketRouter = require('./routes/admin/user/medicalMarketUserRouter');
const adminUserOnlineConsultancyRouter = require('./routes/admin/user/onlineConsultacyUserRouter');
const adminUserLaboratoryRouter = require('./routes/admin/user/laboratoryUserRoutes');

// module router
const adminModuleRouter = require('./routes/admin/moduleRou');

// ambulance alert router
const ambulancAlertRouter = require('./routes/admin/ambulanceAlertRou');

// send data via json format
app.use(express.json({ limit: '100mb' }));
// app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.set('view engine', 'pug');
// set view path
app.set('views', path.join(__dirname, 'views'));
// set assets path
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(sanitization());
app.use((req, res, next) => {
    res.set(
        'Cache-Control',
        'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0'
    );
    next();
});
// ============================================================
// initialize routes
app.use('/', userViewRouter);
app.use('/vendor/', vendorRouter);
app.use('/admin/', adminViewRouter);
app.use('/api/v1/insurance', insuraceRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/partner', partnerRouter);
app.use('/api/v1/homecare', HomeCareServiceRouter);
app.use('/api/v1/experts', MeetTheExpertRouter);
app.use('/api/v1/deaddiction', deAddictionRouter);
app.use('/api/v1/donnation', donnerRouter);
app.use('/api/v1/hearingaid', hearingaid);
app.use('/api/v1/orgon', orgonroutes);
app.use('/api/v1/fitness', fitnessRouter);
app.use('/api/v1/tourism', hospitalToursumRouter);
app.use('/api/v1/hospitaldetails', hospitalDetailsRouter);
app.use('/api/v1/hospital', hospitalPackage);
app.use('/api/v1/records', medicalRecordRouter);
app.use('/api/v1/studyabroad', studyAbroadRouter);
app.use('/api/v1/speaktous', speakToUsRouter);
app.use('/api/v1/opticals', opticalRouter);
app.use('/api/v1/market', marketPlaceRouter);
app.use('/api/v1/onlineconsultancy', onlineConsultancyRouter);
app.use('/api/v1/blooddonation', bloodDonationRouter);
app.use('/api/v1/jobportal', jobPortalRouter);
app.use('/api/v1/ambulance', ambulanceRouter);
app.use('/api/v1/differentlyabled', differentlyAbledRouter);
app.use('/api/v1/pharmacy', pharmacyRouter);
app.use('/api/v1/laboratory', laboratoryRouter);
app.use('/api/v1/quotes', quotesRouter);
app.use('/api/v1/second-opinion', secondOpinionRouter);
app.use('/api/v1/oneus', oneUsRouter);

// admin
app.use('/api/v1/admin', vendroAdminRouter);

// admin-vendor
app.use('/api/v1/admin/vendor-management', vendroAdminRouter);
app.use('/api/v1/admin/module-management', adminModuleRouter);
app.use(
    '/api/v1/admin/vendor-management/ambulance-services',
    adminAmbulanceRouter
);
app.use('/api/v1/admin/vendor-management/blood-donation', adminBloodDonation);
app.use('/api/v1/admin/vendor-management/homecare-services', adminHomecare);
app.use(
    '/api/v1/admin/vendor-management/meet-the-expert',
    adminVendorExpertRouter
);
app.use(
    '/api/v1/admin/vendor-management/deaddiction-services',
    adminDeaddiction
);
app.use(
    '/api/v1/admin/vendor-management/study-abroad',
    adminVendorStudyAbroudRouter
);
app.use('/api/v1/admin/vendor-management/hospital', adminVendorHospitalRouter);
app.use(
    '/api/v1/admin/vendor-management/speaktous',
    adminVendorspeakToUsRouter
);
app.use('/api/v1/admin/vendor-management/opticals', adminVendorOpticalsRouter);
app.use(
    '/api/v1/admin/vendor-management/hearingaid',
    adminVendorHearingaidRouter
);
app.use(
    '/api/v1/admin/vendor-management/differentlyabled',
    adminVendorDifferentlyRouter
);
app.use('/api/v1/admin/vendor-management/fitness', adminVendorFitnessRouter);
app.use(
    '/api/v1/admin/vendor-management/laboratory',
    adminVendorLaboratoryRouter
);
app.use('/api/v1/admin/vendor-management/pharmacy', adminVendorPharmacyRouter);
app.use('/api/v1/admin/vendor-management/market', adminVendorMarketRouter);
app.use(
    '/api/v1/admin/vendor-management/online-consultancy',
    adminVendorContactRouter
);
app.use(
    '/api/v1/admin/vendor-management/second-opinion',
    adminVendroSecondOpinionRouter
);

// admin-user
app.use('/api/v1/admin/user-management/', adminUser);
app.use(
    '/api/v1/admin/user-management/ambulance-services/',
    adminUserAmbulanceRouter
);
app.use(
    '/api/v1/admin/user-management/homecare-services/',
    adminUserHomecareRouter
);
app.use(
    '/api/v1/admin/user-management/deaddiction-services/',
    adminUserDeaddictionRouter
);
app.use(
    '/api/v1/admin/user-management/meet-the-expert-services/',
    adminUserMeetTheExpertRouter
);
app.use(
    '/api/v1/admin/user-management/blood-donation-services/',
    adminUserBloodDaontionRouter
);
app.use('/api/v1/admin/user-management/opticals-service/', adminUserOpticals);

app.use('/api/v1/admin/user-management/hearingaid/', adminUserHearingaidRouter);
app.use(
    '/api/v1/admin/user-management/differentlyabled/',
    adminUserDifferentlyRouter
);
app.use(
    '/api/v1/admin/user-management/medical-records/',
    adminMedicalRecordsRouter
);
app.use('/api/v1/admin/user-management/pharmacy/', adminPharmacyRouter);
app.use('/api/v1/admin/user-management/jobportal/', adminUserJobportalRouter);
app.use('/api/v1/admin/user-management/market/', adminUserMarketRouter);
app.use(
    '/api/v1/admin/user-management/online-consultancy/',
    adminUserOnlineConsultancyRouter
);
app.use('/api/v1/admin/user-management/laboratory/', adminUserLaboratoryRouter);
// ambulance
app.use('/api/v1/admin/ambulance-alert-management/', ambulancAlertRouter);

mongoose
    .connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,

        useUnifiedTopology: true
    })
    .then(() => {
        console.log('connection was successfull');
    });
// mongoose.connection.on('open', async () => {
//     await Promise.all([schedulers()]);
// });

app.all('*', (req, res, next) => {
    next(new AppError(`undefined url ${req.originalUrl}`, 404));
});
app.use(globalErrorController);
const server = app.listen(process.env.PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Port listen in ${process.env.PORT}`);
});

process.on('unhandledRejection', (err) => {
    console.log(err.name, err.message);
    console.log('Unhandled Rejection... Server is Shutting Down');
    server.close(() => {
        process.exit(1);
    });
});
