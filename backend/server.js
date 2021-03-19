const express = require("express");
const mongoose = require("mongoose");
const productRouter = require("./routers/products-router");
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

app.use("/profile", express.static("upload/images/profile"));

app.use("/products", express.static("upload/images/products"));

app.use("/api/profile", profileRouter);

app.use("/api/products", productRouter);

app.listen(5000, () => {
  console.log("All good");
});
