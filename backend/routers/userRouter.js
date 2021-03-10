const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const { generateToken } = require("../utils");

const userRouter = express.Router();

/**
 * THE REGISTER ROUTER
 *
 * takes care of register functionality
 *
 * accepts three fields; name, email and password
 */

userRouter.post("/register", async (req, res) => {
  console.log(req);
  const exist = await User.findOne({ email: req.body.email });

  if (!exist) {
    if (req.body.password.length >= 6) {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
      });

      user
        .save()
        .then((created) => {
          console.log("account " + created.name + " created\n");
          res.send({
            id: created._id,
            name: created.name,
            email: created.email,
            isAdmin: created.isAdmin,
          });
        })
        .catch((err) => {
          console.log(err);
          return res.send(err);
        });
    } else {
      return res
        .status(400)
        .json({ response: "error", msg: "The password should be at least 6" });
    }
  } else {
    console.log("Someone has this email\n");
    return res.status(400).send({ error: "Email not unique" });
  }
});

/**
 * THE LOGIN ROUTER
 * This take care of the login functionality
 *
 */

userRouter.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (user) {
    if (bcrypt.compareSync(req.body.password, user.password)) {
      console.log(user.name + " login success for user\n" + user.name);
      return res.send({ success: "login success", token: generateToken(user) });
    } else {
      console.log(user.name + " incorrect password\n");
      return res.status(400).send({ error: "Incorrect password" });
    }
  } else {
    console.log("email does not exist\n");
    return res.status(404).send({ error: "Email does not exist" });
  }
});

/**
 * METHOD FOR HANDLING PROFILE PICTURE UPLOADS
 */

module.exports = userRouter;
