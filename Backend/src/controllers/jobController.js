const Job = require('../models/Job');

// ✅ Only admins can post jobs
async function createJob(req, res) {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Only admins can post jobs' });
  }

  const job = await Job.create({ ...req.body, postedBy: req.user._id });
  res.status(201).json(job);
}

// ✅ List jobs (latest first)
async function listJobs(req, res) {
  const jobs = await Job.find().sort({ createdAt: -1 });
  res.json(jobs);
}

// ✅ Get single job by ID
async function getJob(req, res) {
  const job = await Job.findById(req.params.id);
  if (!job) return res.status(404).json({ message: 'Job not found' });
  res.json(job);
}

// ✅ Delete job (only admin or job owner)
async function deleteJob(req, res) {
  const job = await Job.findById(req.params.id);
  if (!job) return res.status(404).json({ message: 'Not found' });

  if (
    job.postedBy.toString() !== req.user._id.toString() &&
    req.user.role !== 'admin'
  ) {
    return res.status(403).json({ message: 'Not allowed' });
  }

  await job.deleteOne();
  res.json({ message: 'Job deleted successfully' });
}

module.exports = { createJob, listJobs, getJob, deleteJob };
