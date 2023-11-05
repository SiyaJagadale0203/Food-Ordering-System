const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true,
  },
  orderItems: [
    {
      foodItem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FoodItem', // Reference to the food item schema (if applicable)
      },
      quantity: Number,
      price: Number,
    },
  ],
  total: Number,
  status: {
    type: String,
    enum: ['pending', 'completed', 'canceled'],
    default: 'pending',
  },
  // Add more order-specific fields as needed
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
