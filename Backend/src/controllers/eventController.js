const Event = require('../models/Event');

// ✅ Only admins can create events
async function createEvent(req, res) {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Only admins can create events' });
  }

  const event = await Event.create({ ...req.body, createdBy: req.user._id });
  res.status(201).json(event);
}

// ✅ List all events (sorted by date)
async function listEvents(req, res) {
  const events = await Event.find().sort({ date: 1 });
  res.json(events);
}

// ✅ Get single event
async function getEvent(req, res) {
  const event = await Event.findById(req.params.id);
  if (!event) return res.status(404).json({ message: 'Event not found' });
  res.json(event);
}

// ✅ Attend an event (alumni only, no duplicate attendees)
async function attendEvent(req, res) {
  const event = await Event.findById(req.params.id);
  if (!event) return res.status(404).json({ message: 'Event not found' });

  if (req.user.role !== 'alumni') {
    return res.status(403).json({ message: 'Only alumni can attend events' });
  }

  // Prevent duplicate attendance
  if (!event.attendees.some(att => att.toString() === req.user._id.toString())) {
    event.attendees.push(req.user._id);
    await event.save();
  }

  res.json(event);
}

module.exports = { createEvent, listEvents, getEvent, attendEvent };
