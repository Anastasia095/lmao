// index.js
const express = require('express');
const helloRouter = require('./hello');

const router = express.Router();

router.use('/', helloRouter); // Use helloRouter instead of hello

module.exports = router;
