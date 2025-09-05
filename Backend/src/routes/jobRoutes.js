const express = require('express');
const { body } = require('express-validator');
const validate = require('../middlewares/validate');
const { protect } = require('../middlewares/auth');
const {
  createJob,
  listJobs,
  getJob,
  deleteJob,
} = require('../controllers/jobController');

const router = express.Router();

// 🔹 List all jobs
router.get('/', listJobs);

// 🔹 Create a job (protected)
router.post(
  '/',
  protect,
  [
    body('title').notEmpty().withMessage('Job title is required'),
    body('company').notEmpty().withMessage('Company is required'),
    body('url').optional().isURL().withMessage('URL must be valid'),
  ],
  validate,
  createJob
);

// 🔹 Get job by ID
router.get('/:id', getJob);

// 🔹 Delete job (protected + checks in controller)
router.delete('/:id', protect, deleteJob);

module.exports = router;
