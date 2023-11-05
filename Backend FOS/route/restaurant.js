const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/RestaurantController');

// Create a new restaurant
router.post('/restaurants', restaurantController.createRestaurant);

// Get a list of all restaurants
router.get('/restaurants', restaurantController.getAllRestaurants);

// Get a specific restaurant by ID
router.get('/restaurants/:restaurantId', restaurantController.getRestaurantById);

// Update restaurant data by ID
router.put('/restaurants/:restaurantId', restaurantController.updateRestaurant);

// Delete a restaurant by ID
router.delete('/restaurants/:restaurantId', restaurantController.deleteRestaurant);

module.exports = router;
