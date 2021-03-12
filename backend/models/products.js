const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  description: { type: String, required: false },
  available: { type: Boolean, required: true },
  price: { type: String, required: true },
  inStock: { type: String, required: true },
  dateUpdated: { type: String, required: true },
  imgUrl: { type: String, required: true },
});

const Product = mongoose.model("Product", schema);

module.exports = Product;
