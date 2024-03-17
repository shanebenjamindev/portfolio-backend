const express = require('express');
const router = express.Router();
const ProjectController = require('../controllers/ProjectController');

router.post('/add', ProjectController.addProject)

module.exports = router