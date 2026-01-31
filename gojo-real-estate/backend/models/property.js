const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  title: String,
  location: String,
  price: String,
  image: String,
});

module.exports = mongoose.model("Property", propertySchema);
