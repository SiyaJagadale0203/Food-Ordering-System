const Order = require('../model/foodOrderingCust');
const FoodItem = require('../model/FoodItem');

// Create a new order
exports.createOrder = async (req, res) => {
  try {
    const { customerId, orderItems, total } = req.body;
    const order = new Order({ customer: customerId, orderItems, total });
    await order.save();
    res.status(201).json({ message: 'Order created successfully', order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create an order' });
  }
};

// Retrieve all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('customer', 'name email phoneNumber').exec();
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve orders' });
  }
};

// Retrieve an order by ID
exports.getOrderById = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findById(orderId).populate('customer', 'name email phoneNumber').exec();

    if (!order) {
      res.status(404).json({ error: 'Order not found' });
    } else {
      res.json(order);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve the order' });
  }
};

// Update the status of an order
exports.updateOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    const order = await Order.findByIdAndUpdate(orderId, { status }, { new: true });

    if (!order) {
      res.status(404).json({ error: 'Order not found' });
    } else {
      res.json({ message: 'Order status updated successfully', order });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update the order status' });
  }
};

// Delete an order by ID
exports.deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.params;

    const order = await Order.findByIdAndRemove(orderId);

    if (!order) {
      res.status(404).json({ error: 'Order not found' });
    } else {
      res.json({ message: 'Order deleted successfully', order });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete the order' });
  }
};
