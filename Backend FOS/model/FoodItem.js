const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  description: String,
  picture: String, // URL to the food item's picture or a placeholder image
});

const FoodItem = mongoose.model('FoodItem', foodItemSchema);

module.exports = FoodItem;
