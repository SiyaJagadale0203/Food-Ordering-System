const Restaurant = require('../model/Restaurant');

// Create a new restaurant
exports.createRestaurant = async (req, res) => {
  try {
    const { name, description, location } = req.body;
    const newRestaurant = new Restaurant({ name, description, location });
    await newRestaurant.save();
    res.status(201).json(newRestaurant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create the restaurant' });
  }
};

// Get a list of all restaurants
exports.getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve restaurants' });
  }
};

// Get a specific restaurant by ID
exports.getRestaurantById = async (req, res) => {
  const { restaurantId } = req.params;

  try {
    const restaurant = await Restaurant.findById(restaurantId);

    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }

    res.json(restaurant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve the restaurant' });
  }
};

// Update restaurant data by ID
exports.updateRestaurant = async (req, res) => {
  const { restaurantId } = req.params;
  const { name, description, location } = req.body;

  try {
    const restaurant = await Restaurant.findById(restaurantId);

    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }

    restaurant.name = name || restaurant.name;
    restaurant.description = description || restaurant.description;
    restaurant.location = location || restaurant.location;

    await restaurant.save();

    res.json(restaurant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update the restaurant' });
  }
};

// Delete a restaurant by ID
exports.deleteRestaurant = async (req, res) => {
  const { restaurantId } = req.params;

  try {
    const restaurant = await Restaurant.findById(restaurantId);

    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }

    await restaurant.remove();

    res.json({ message: 'Restaurant deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete the restaurant' });
  }
};
