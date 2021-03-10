const express = require("express");
const path = require("path");
const multer = require("multer");
const Profile = require("../models/profile");

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage });

const profileRouter = express.Router();

profileRouter.post("/upload", upload.single("profile"), (req, res) => {
  const profile = new Profile({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    gender: req.body.gender,
    DOB: req.body.DOB,
    description: req.body.description,
  });

  profile.save().then((created) => {
    res.send({ created });
  });
});

module.exports = profileRouter;
