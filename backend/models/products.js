const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  description: { type: String, required: false },
  category: { type: String, required: true },
  available: { type: Boolean, default: false, required: true },
  price: { type: String, required: true },
  inStock: { type: String, required: true },
  dateUpdated: { type: String, required: true },
  color: { type: String },
  imgUrl: { type: String, required: true },
});

const Product = mongoose.model("Product", schema);

module.exports = Product;
