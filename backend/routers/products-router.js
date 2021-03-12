const express = require("express");
const Product = require("../models/products");

const productRouter = express.Router();

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
    description,
    available: available,
    inStock: req.body.price,
    imgUrl: "",
    dateUpdated: req.body.dateUpdated,
  });

  product.save();

  return res.json(product);
});

module.exports = productRouter;
