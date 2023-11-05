const express = require('express');
const router = express.Router();

// Import the controllers
const { registerAdmin, loginAdmin }= require('../controllers/AdminController');
const { authenticateAdmin } = require('../middleware/authentication');

// // Routes for managing food items
// router.post('/add-food-item', adminAuthentication, adminController.addFoodItem);
// router.put('/update-food-item/:id', adminAuthentication,  adminController.updateFoodItem);
// router.delete('/delete-food-item/:id', adminAuthentication,  adminController.deleteFoodItem);
// router.put('/change-availability/:id', adminAuthentication, adminController.changeAvailability);

// // Route to accept an order
// router.put('/accept-order/:orderId',adminAuthentication, adminController.acceptOrder);
router.post('/admin-register',registerAdmin );
router.post('/admin-login', authenticateAdmin, loginAdmin );
//  router.post("/admin-login", createAdmin);

module.exports = router;
