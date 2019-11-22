const express = require('express');

const example = require('./example.route');

const router = express.Router();

router.use('/example', example);

module.exports = router;
