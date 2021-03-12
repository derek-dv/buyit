const express = require("express");
const path = require("path");
const multer = require("multer");
const Profile = require("../models/profile");

const storage = multer.diskStorage({
  destination: "./upload/images/profile",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage });

const profileRouter = express.Router();

profileRouter.post("/create", async (req, res) => {
  const exist = await Profile.findOne({ user_id: req.body.user_id });
  if (!exist) {
    const profile = new Profile({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      gender: req.body.gender,
      DOB: req.body.DOB,
      description: req.body.description,
      profile_img: "",
      user_id: req.body.user_id,
    });
    profile
      .save()
      .then((created) => {
        res.send({ user: created });
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    console.log("profile already exist");
    return res
      .status(400)
      .json({ response: "error", msg: "User already has a profile" });
  }
});

profileRouter.post("/upload", upload.single("profile"), async (req, res) => {
  const profile = await Profile.findOne({ _id: req.body.user_id });
  console.log(profile);
  if (profile !== null) {
    profile.set(
      "profile_img",
      "http://localhost:5000/profile/" + req.file.filename
    );
    profile.save();
    return res.json({ profile });
  } else res.status(400).json({ response: "error", msg: "No image uploaded" });
});

module.exports = profileRouter;
