const express = require("express");
const mongoose = require("mongoose");
const profileRouter = require("./routers/profile-router");
const userRouter = require("./routers/userRouter");

const app = express();

mongoose.connect("mongodb://localhost/buyit", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send({ name: "Test" });
});

app.use("/api/user", userRouter);

app.use("/profile", express.static("upload/images"));

app.use("/api/profile", profileRouter);

app.listen(5000, () => {
  console.log("All good");
});