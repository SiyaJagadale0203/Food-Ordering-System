const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  location: {
    type: String,
  },
  // Add more fields as needed
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
