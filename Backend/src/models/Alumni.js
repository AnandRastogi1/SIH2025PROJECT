const mongoose = require('mongoose');

const AlumniSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    batch: { type: String, trim: true }, // e.g., "2018-2022"
    branch: { type: String, trim: true },
     rollNum: {
        type: Number,
        required: true
    },
    bio: { type: String, trim: true, maxlength: 500 },
    linkedin: { type: String, trim: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // optional linking to user
    photo: { type: String, trim: true }, // store URL or path
  },
  { timestamps: true } // auto adds createdAt & updatedAt
);

module.exports = mongoose.model('Alumni', AlumniSchema);
