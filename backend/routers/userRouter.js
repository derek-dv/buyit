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
      console.log(
        user.name + " login success for user\n" + user.name.split(" ")[0]
      );
      res.send({
        success: "login success",
        token: generateToken(user),
        name: user.name.split(" ")[0],
        isAdmin: user.isAdmin,
        id: user._id,
      });
    } else {
      console.log(user.name + " incorrect password\n");
      res.status(401).send({ error: "Incorrect password" });
    }
  } else {
    console.log("email does not exist\n");
    res.status(401).json({ error: "Email does not exist" });
    return;
  }
});

userRouter.put("/make-admin", async (req, res) => {
  const user = await User.findOne({ _id: req.body.id });
  console.log("working");
  if (user) {
    user.set({ isAdmin: true });
    user.save();
    res.json({ isAdmin: true });
  } else res.status(404).json({ message: "user does not exist" });
});

//Get all users in the system

userRouter.get("/", async (req, res) => {
  const users = await User.find({});
  if (users) res.json(users);
  else res.status(404).send({ error: "No users" });
});

module.exports = userRouter;
