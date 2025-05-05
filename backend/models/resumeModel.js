const mongoose = require('mongoose');

const resumeSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  personalInfo: {
    name: String,
    email: String,
    phone: String,
    address: String,
    summary: String
  },
  education: [{
    institution: String,
    degree: String,
    field: String,
    startDate: Date,
    endDate: Date
  }],
  experience: [{
    company: String,
    position: String,
    startDate: Date,
    endDate: Date,
    description: String
  }],
  skills: [String],
  projects: [{
    title: String,
    description: String,
    technologies: [String],
    link: String
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Resume', resumeSchema);