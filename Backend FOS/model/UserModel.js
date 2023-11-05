const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Add other user-related fields as needed (e.g., name, address, etc.)
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
