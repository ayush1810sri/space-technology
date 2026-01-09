const mongoose = require('mongoose');

const spaceTechSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  launchDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['Active', 'Development', 'Retired', 'Prototype', 'Testing', 'Research']
  },
  image: {
    type: String,
    required: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('SpaceTech', spaceTechSchema);