const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
      unique: true,
    },
    profile_img: {
      type: String,
      required: false,
    },
    gender: {
      type: String,
      required: true,
    },
    DOB: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Profile = mongoose.model("Profile", schema);

module.exports = Profile;
