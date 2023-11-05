const express = require('express');
const router = express.Router();

const orderController = require('../controllers/OrderControllerCust');
const Customer = require('../controllers/UserController');

// Create a new food order
router.post('/orders', orderController.createOrder);

// Get a list of all orders
router.get('/get-Orders', orderController.getAllOrders);

// Get a specific order by ID
router.get('/order/:orderId', orderController.getOrderById);

// Update the status of an order
router.put('/update-orders/:orderId', orderController.updateOrder);

// Delete an order by ID
router.delete('/delete-rders/:orderId', orderController.deleteOrder);

module.exports = router;
