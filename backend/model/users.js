const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  address: String,
  pinCode: String,
  state: String,
  country: String,
  city: String,
  phoneNumber: String,
});

const User = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },

  profile: ProfileSchema,
  active: Boolean,
});

module.exports = mongoose.model("User", User);
