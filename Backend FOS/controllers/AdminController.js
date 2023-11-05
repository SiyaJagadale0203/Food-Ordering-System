// const FoodItem = require('../model/foodOrdering'); // Import the FoodItem model

// // Add a new food item
// exports.addFoodItem = async (req, res) => {
//     try {
//       const { name, quantity, price, description, picture } = req.body;
//       const foodItem = new FoodItem({ name, quantity, price, description, picture });
//       await foodItem.save();
//       res.status(201).json({ message: 'Food item added successfully' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Failed to add food item' });
//     }
// };

// // Update an existing food item
// exports.updateFoodItem = async (req, res) => {
//     try {
//       const { id } = req.params;
//       const { name, quantity, price, description, picture } = req.body;
      
//       // Find the food item by ID
//       const foodItem = await FoodItem.findByIdAndUpdate(
//         id,
//         { name, quantity, price, description, picture },
//         { new: true }
//       );
  
//       res.json({ message: 'Food item updated successfully', updatedItem: foodItem });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Failed to update food item' });
//     }
// };
  
//   // Delete a food item by ID
// exports.deleteFoodItem = async (req, res) => {
//     try {
//       const { id } = req.params;
      
//       // Find and remove the food item by ID
//       const deletedItem = await FoodItem.findByIdAndRemove(id);
  
//       if (deletedItem) {
//         res.json({ message: 'Food item deleted successfully', deletedItem });
//       } else {
//         res.status(404).json({ error: 'Food item not found' });
//       }
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Failed to delete food item' });
//     }
// };




//   // Change the availability/stock of a food item
// exports.changeAvailability = async (req, res) => {
//     try {
//       const { id } = req.params;
//       const { available } = req.body;
  
//       // Find the food item by ID and update the availability/stock
//       const foodItem = await FoodItem.findByIdAndUpdate(
//         id,
//         { available },
//         { new: true }
//       );
  
//       res.json({ message: 'Availability/Stock changed successfully', updatedItem: foodItem });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Failed to change availability/stock' });
//     }
// };
  
//   // Accept an order
// exports.acceptOrder = async (req, res) => {
//     try {
//       const { orderId } = req.params;
  
//       // You can implement your logic here to process and accept the order
//       // This may involve updating the order status, inventory, or other actions.
  
//       res.json({ message: 'Order accepted successfully', orderId });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Failed to accept the order' });
//     }
// };
  


const Admin = require('../model/Admin'); // Import the Admin model

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
 const secret = "mysecret";
// Register a new admin
const registerAdmin = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the email is already in use
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new Admin({
      username,
      email,
      password: hashedPassword,
      // Add other admin-related fields as needed
    });

    await newAdmin.save();

    res.status(201).json({ message: 'Admin registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Registration failed' });
  }
};

// Login an admin
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({ error: 'Admin not found' });
    }

    const passwordMatch = await bcrypt.compare(password, admin.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Incorrect password' });
    }

    // Generate and return a JWT token for authentication
    const token = jwt.sign({ adminId: admin._id }, secret, { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Login failed' });
  }
};




module.exports = {
  registerAdmin,
  loginAdmin,
  
};
