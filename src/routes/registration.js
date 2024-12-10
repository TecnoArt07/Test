const express = require('express');
const { registerInstitute, getMetadata } = require('../controllers/registrationController');
const checkEducationBoardId = require('../middlware/educationBoardId');
const router = express.Router();

// Fetch metadata for UI dropdowns
router.get('/metadata', getMetadata);

// Register an institute
router.post('/register',checkEducationBoardId, registerInstitute);

module.exports = router;
