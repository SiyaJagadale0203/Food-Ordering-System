const FoodItem = require('../model/FoodItem'); // Import the FoodItem model

// Add a new food item
exports.addFoodItem = async (req, res) => {
    try {
      const { name, price, quantity, description } = req.body;
      const foodItem = new FoodItem({ name, price,quantity, description });
      await foodItem.save();
      res.status(201).json({ message: 'Food item added successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to add food item' });
    }
  };
  
  // Update an existing food item
  exports.updateFoodItem = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, price, description } = req.body;
      const foodItem = await FoodItem.findByIdAndUpdate(id, { name, price, description }, { new: true });
      res.json({ message: 'Food item updated successfully', updatedItem: foodItem });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update food item' });
    }
  };
  
  // Delete a food item by ID
  exports.deleteFoodItem = async (req, res) => {
    try {
      const { id } = req.params;
      await FoodItem.findByIdAndRemove(id);
      res.json({ message: 'Food item deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to delete food item' });
    }
  };
  
  // const FoodItem = require('../models/foodItem');
  
  // Change the availability/stock of a food item
  exports.changeAvailability = async (req, res) => {
    try {
      const { id } = req.params;
      const { available } = req.body;
  
      // Find the food item by ID and update the availability/stock
      const foodItem = await FoodItem.findByIdAndUpdate(
        id,
        { available },
        { new: true }
      );
  
      res.json({ message: 'Availability/Stock changed successfully', updatedItem: foodItem });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to change availability/stock' });
    }
  };
  
  // Accept an order
  exports.acceptOrder = async (req, res) => {
    try {
      const { orderId } = req.params;
  
      // You can implement your logic here to process and accept the order
      // This may involve updating the order status, inventory, or other actions.
  
      res.json({ message: 'Order accepted successfully', orderId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to accept the order' });
    }
  };