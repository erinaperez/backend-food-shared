const express = require('express');
const router = express.Router();
const submissionController = require('../controllers/submissionController');

// Route for submitting a new resource
router.post('/', submissionController.submitResource);

// Route to get pending submisisons (admin only)
router.get('/pending', auth, submissionController.getPendingSubmissions);

module.exports = router;