// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const adminSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   // Add more admin-specific fields as needed
// });

// // Hash the admin's password before saving
// adminSchema.pre('save', async function (next) {
//   const admin = this;
//   if (!admin.isModified('password')) return next();
//   const salt = await bcrypt.genSalt(10);
//   const hash = await bcrypt.hash(admin.password, salt);
//   admin.password = hash;
//   next();
// });

// const Admin = mongoose.model('Admin', adminSchema);

// module.exports = Admin;


const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
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
  // Add other admin-related fields as needed (e.g., role, permissions, etc.)
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
