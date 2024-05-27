const express = require('express');
const helloRouter = require('./hello');

const router = express.Router();

router.use('/', helloRouter); // Use helloRouter

module.exports = router;
