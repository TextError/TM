const mongoose = require('mongoose');
const Scheema = mongoose.Schema;

// Create Scheema

const UserScheema = new Scheema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('users', UserScheema);