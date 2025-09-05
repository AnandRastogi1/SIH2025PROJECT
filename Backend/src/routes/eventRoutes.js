const express = require('express');
const { body } = require('express-validator');
const validate = require('../middlewares/validate');
const { protect } = require('../middlewares/auth');
const {
  createEvent,
  listEvents,
  getEvent,
  attendEvent,
} = require('../controllers/eventController');

const router = express.Router();

// 🔹 Get all events
router.get('/', listEvents);

// 🔹 Create a new event (protected)
router.post(
  '/',
  protect,
  [
    body('title').notEmpty().withMessage('Title is required'),
    body('date').isISO8601().withMessage('Valid date is required'),
  ],
  validate,
  createEvent
);

// 🔹 Get single event by ID
router.get('/:id', getEvent);

// 🔹 Attend an event (protected)
router.post('/:id/attend', protect, attendEvent);

module.exports = router;
