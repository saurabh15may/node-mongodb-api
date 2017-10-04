var mongoose = require('mongoose');

var Person = mongoose.model('person', {
  first_name: {
    type: String,
    required: true,
    trim: true
  },
  last_name: {
    type: String,
    required: true,
    trim: true
  },
  mobile_number: {
    type: Number,
    minlength: 10,
  },
  email: {
    type: String,
    trim: true,
    minlength: 1
  },
  skills: {
    type: Array
  },
  isProfileComplete: {
    type: Boolean,
    default: false
  }
});

module.exports = {Person};
