const express = require('express');
const helloRouter = require('./hello');
const moonRouter = require('./moon'); // Import moonRouter

const router = express.Router();

router.use('/', helloRouter); // Use helloRouter for the root route
router.use('/moon-phase', moonRouter); // Use moonRouter for the /moon-phase route

module.exports = router;
