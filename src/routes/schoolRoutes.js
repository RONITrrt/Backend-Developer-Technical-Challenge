const express = require('express');
const { createSchool, getSchools } = require('../controllers/schoolController');
const authenticate = require('../middleware/auth');

const router = express.Router();

router.post('/', authenticate, createSchool);
router.get('/', authenticate, getSchools);

module.exports = router;
