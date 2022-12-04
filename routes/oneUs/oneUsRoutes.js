// ============================================================
// import libraries
const express = require('express');

// create route
const router = express.Router();

// ============================================================
// utilities
const fileUpload = require('../../util/fileUpload');

// ============================================================
// import controllers
const authControllers = require('../../controllers/authControllers');
const oneUsControllers = require('../../controllers/oneUsControllers');

// ============================================================
// shared
router.use(authControllers.protect);

// ============================================================
// create routes
// get one us videos
router.get(
    '/videos',
    oneUsControllers.getOneUsVideos,
    oneUsControllers.sendJsonFroGetVideos
);

// ============================================================
// export route
module.exports = router;
