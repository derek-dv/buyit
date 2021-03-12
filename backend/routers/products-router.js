const express = require("express");
const Product = require("../models/products");

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

module.exports = productRouter;
