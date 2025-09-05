const Alumni = require('../models/Alumni');

async function createAlumni(req, res) {
  try {
    const data = req.body;

    // Ensure only alumni role is allowed
    if (data.role !== 'alumni') {
      return res.status(400).json({ message: 'Only alumni can be created here' });
    }

    // Validate required alumni fields
    if (!data.graduationYear || !data.city) {
      return res.status(400).json({ message: 'Graduation year and city are required for alumni' });
    }

    const alumni = await Alumni.create({
      ...data,
      user: req.user ? req.user._id : null,
    });

    res.status(201).json(alumni);
  } catch (err) {
    console.error('Error creating alumni:', err);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getAllAlumni(req, res) {
  try {
    const alumni = await Alumni.find()
      .sort({ createdAt: -1 })
      .limit(200);
    res.json(alumni);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
}

async function getAlumniById(req, res) {
  try {
    const a = await Alumni.findById(req.params.id);
    if (!a) return res.status(404).json({ message: 'Alumni not found' });
    res.json(a);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
}

async function updateAlumni(req, res) {
  try {
    const updated = await Alumni.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) return res.status(404).json({ message: 'Not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
}

async function deleteAlumni(req, res) {
  try {
    const d = await Alumni.findByIdAndDelete(req.params.id);
    if (!d) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports = {
  createAlumni,
  getAllAlumni,
  getAlumniById,
  updateAlumni,
  deleteAlumni,
};
