const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 30,
  },

  imgURL: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: [true, "Enter price : "],
  },

  description: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;