const express = require('express');

const tasksController = require('../controllers/example.controller');

const router = express.Router();

router.route('/').get(tasksController.getExample);

router.route('/:id').get(tasksController.getExampleByID);

module.exports = router;
