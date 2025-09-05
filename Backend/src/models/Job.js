const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    company: { type: String, required: true, trim: true },
    location: { type: String, trim: true },
    description: { type: String, trim: true, maxlength: 2000 },
    url: { type: String, trim: true, match: [/^https?:\/\/.+/, 'Invalid URL format'] },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  { timestamps: true } // handles createdAt & updatedAt automatically
);

module.exports = mongoose.model('Job', JobSchema);
