const express = require('express');
const router = express.Router();

// Require the controllers
const enrolData_controller = require('../controller/enrolData_controller');

// a simple test url to check that allof our files are communicating
correctly.router.get('/test', enrolData_controller);

module.exports = router;