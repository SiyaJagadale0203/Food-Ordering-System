const express = require('express');
const router = express.Router();
const adminFoodController = require('../controllers/AdminFoodController');

// Route to add a new food item
router.post('/add-food-item', adminFoodController.addFoodItem);

// Route to update an existing food item
router.put('/update-food-item/:id', adminFoodController.updateFoodItem);

// Route to delete a food item
router.delete('/delete-food-item/:id', adminFoodController.deleteFoodItem);

// Route to change the availability/stock of a food item
router.put('/change-availability/:id', adminFoodController.changeAvailability);

// Route to accept an order
router.put('/accept-order/:orderId', adminFoodController.acceptOrder);


module.exports = router;