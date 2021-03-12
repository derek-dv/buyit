const express = require("express");
const path = require("path");
const multer = require("multer");
const Product = require("../models/products");

/**
 * Multer configuration
 */

const storage = multer.diskStorage({
  destination: "./upload/images/profiles",
  filename: (req, file, cb) =>
    cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    ),
});

const upload = multer({ storage });

const productRouter = express.Router();

/**
 * GET REQUEST FOR ALL PRODUCTS
 */

productRouter.get("/", async (req, res) => {
  const products = await Product.find({});
  console.log(products);
  res.send(products);
});

/**
 * Get product by ID
 */

productRouter.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
});

/**
 * API FOR CREATING NEW PRODUCTS
 *
 */
productRouter.post("/create", (req, res) => {
  let available = false;
  let description = "";
  if (req.body.dexcription) description = req.body.description;
  if (req.body.inStock !== "0") available = true;
  const product = new Product({
    name: req.body.name,
    brand: req.body.brand,
    price: req.body.price,
    category: req.body.category,
    description,
    available: available,
    inStock: req.body.price,
    imgUrl: "empty",
    dateUpdated: Date().toString(),
  });

  product.save();

  return res.json(product);
});

/**
 * Add/update product picture
 */
productRouter.post();

module.exports = productRouter;
