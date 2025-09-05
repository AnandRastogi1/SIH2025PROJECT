const express = require('express');
const { body } = require('express-validator');
const validate = require('../middlewares/validate');
const { protect, authorizeRoles } = require('../middlewares/auth');
const asyncHandler = require('../utils/asyncHandler');
const {
  createAlumni,
  getAllAlumni,
  getAlumniById,
  updateAlumni,
  deleteAlumni,
} = require('../controllers/alumniController');

const router = express.Router();

// Public: fetch all alumni
router.get('/', asyncHandler(getAllAlumni));

// Protected: create new alumni (must be logged in)
router.post(
  '/',
  protect,
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('batch').optional().isString().withMessage('Batch must be a string'),
    body('linkedin').optional().isURL().withMessage('Invalid LinkedIn URL'),
  ],
  validate,
  asyncHandler(createAlumni)
);

// Public: fetch single alumni
router.get('/:id', asyncHandler(getAlumniById));

// Protected: update alumni (only owner or admin should be allowed ideally)
router.put('/:id', protect, asyncHandler(updateAlumni));

// Admin only: delete alumni
router.delete('/:id', protect, authorizeRoles('admin'), asyncHandler(deleteAlumni));

module.exports = router;
