const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
  password: {
    type: String,
  },
});

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User", userSchema);
const userStrategy = User.createStrategy();

module.exports = { User, userStrategy };
