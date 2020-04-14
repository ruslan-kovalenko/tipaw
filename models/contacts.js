const mongoose = require("mongoose");
const validator = require('validator');

const ContactsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 30
  },
  surname: {
    type: String,
    required: true,
    maxlength: 30
  },
  email: {
    type: String,
    required: true,
    validate:{
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email',
      isAsync: false
    }    
  },
  phone: {
    type: String,
    required: true,
    maxlength: 20
  },
  subject: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Contact", ContactsSchema);
