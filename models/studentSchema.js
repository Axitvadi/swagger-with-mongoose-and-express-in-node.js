"use strict";
var mongoose = require("mongoose");
// const validator = require("validator");
// var pass;
var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};
var passwordvalid = function (pass) {
  var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  return re.test(pass)
};

var StudentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 4,
    trim: true,

  },
  lastName: {
    type: String,
    required: true,
    minlength: 4,
    trim: true,
  },
  age: {
    type: Number,
    min: 18,
    max: 150,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: false,
    required: 'Email address is required',
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  phoneno: {
    type: String,
    minlength: 10,
    maxlength: 10,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    validate: [passwordvalid, 'Please fill a strog password'],
    trim: true,
  },
  confirmpassword: {
    type: String,
    required: true,
    trim: true,
  }
}, {
  timestamps: true,
});

var student = mongoose.model("student", StudentSchema);
module.exports = student;