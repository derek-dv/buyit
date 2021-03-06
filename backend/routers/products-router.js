const express = require("express");
const path = require("path");
const multer = require("multer");
const Product = require("../models/products");

/**
 * Multer configuration
 */

const storage = multer.diskStorage({
  destination: "./upload/images/products",
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
    inStock: req.body.inStock,
    imgUrl: "empty",
    dateUpdated: Date().toString(),
    rating: req.body.rating ? req.body.rating : "none",
  });

  product.save();

  return res.json(product);
});

/**
 * Add/update product picture
 */
productRouter.post("/upload", upload.single("product"), async (req, res) => {
  const product = await Product.findOne({ _id: req.body._id });

  // If product exists,
  if (product !== null) {
    product.set({
      imgUrl: "http://localhost:5000/products/" + req.file.filename,
    });
    product.save();
    res.json(product);
  }
});

//Update the product

productRouter.put("/update/:id", (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then((product) => {
      product.set({
        name: req.body.name ? req.body.name : product.name,
        brand: req.body.brand ? req.body.brand : product.brand,
        description: req.body.description
          ? req.body.description
          : product.brand,
        category: req.body.category ? req.body.category : product.category,
        available: req.body.available
          ? req.body.available
          : req.body.inStock === "0"
          ? "false"
          : product.available,
        price: req.body.price ? req.body.price : product.price,
        inStock: req.body.inStock ? req.body.inStock : product.inStock,
        dateUpdated: req.body.dateUpdated
          ? req.body.dateUpdated
          : product.dateUpdated,
        color: req.body.color ? req.body.color : product.color,
        rating: req.body.rating ? req.body.rating : product.rating,
      });

      product.save();
      res.send(product);
    })
    .catch((err) => {
      return res
        .status(404)
        .json({ response: "error", message: "Product does" });
    });
});

module.exports = productRouter;
