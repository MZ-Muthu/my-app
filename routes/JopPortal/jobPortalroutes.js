// ============================================================
// import libraries
const express = require('express');

// create route
const router = express.Router();

// ============================================================
// import controllers
const authControllers = require('../../controllers/authControllers');
const jobPortalControllers = require('../../controllers/jobPortalControllers');

// shared
router.use(authControllers.protect);
// ============================================================
// create job routes

// get all active jobs
router.get(
    '/get-all-jobs',
    jobPortalControllers.assignDataForGetAllJobs,
    jobPortalControllers.getAllJobs,
    jobPortalControllers.filterVerifiedPartners,
    jobPortalControllers.sendJsonForAllFilter
);

// get a job
router.get(
    '/get-a-job/:jobId',
    jobPortalControllers.getAJob,
    jobPortalControllers.sendJsonForAJob
);

//post new job
router.post(
    '/post-new-job/:from',
    jobPortalControllers.filterValidJobData,
    // bloodDonnationControllers.assignDataForGetApplicants,
    jobPortalControllers.checkCategoryandSpecility,
    jobPortalControllers.checkValidVendorandAssignData,
    // bloodDonnationControllers.checkValidVendorandPartner,
    // jobPortalControllers.assignDataForCreateNewJobPostFromBloodBank,
    // jobPortalControllers.checkPartnerIdandPartnerEid,
    jobPortalControllers.createNewPost,
    jobPortalControllers.sendJsonForCreateOne
);

// update job
router.patch(
    '/update-my-job/:from/:jobId',
    jobPortalControllers.filterValidJobData,
    jobPortalControllers.checkCategoryandSpecility,
    jobPortalControllers.assignDataForUpdateJobs,
    jobPortalControllers.updateJob,
    jobPortalControllers.sendJsonForUpdateOne
);

// delete(inactive) job
router.patch(
    '/delete-my-job/:from/:jobId',
    jobPortalControllers.assingDataForDelteAJob,
    jobPortalControllers.deleteJob,
    jobPortalControllers.sendJsonFroDeteleOne
);

// get my job lists
router.get(
    '/get-my-jobs/:from',
    jobPortalControllers.getMyJobList,
    jobPortalControllers.sendJsonForApp
);

// view my job
router.get(
    '/get-job-applicants/:from/:jobId',
    jobPortalControllers.getMyJobApplicants
);
//  get a applicatn
router.get(
    '/get-a-applicant/:from/:jobId/:applicantId',
    jobPortalControllers.getAUserApplicant,
    jobPortalControllers.sendJsonForApp
);

// update applicant status
router.patch(
    '/update-applicant-status/:status/:from/:jobId/:applicantId',
    jobPortalControllers.getAApplicant,
    jobPortalControllers.updateApplicantStatus
);

// get all job categories
router.get(
    '/get-all-job-categories',
    jobPortalControllers.getAllJobcategories,
    jobPortalControllers.sendJsonForAllFilter
);

// get a categorie
router.get(
    '/get-a-job-categorie/:name',
    jobPortalControllers.assignDataforGetAJobCategorie,
    jobPortalControllers.getAJbobCategorie,
    jobPortalControllers.sendJsonforGetOne
);
// ============================================================
// export job rote
module.exports = router;
