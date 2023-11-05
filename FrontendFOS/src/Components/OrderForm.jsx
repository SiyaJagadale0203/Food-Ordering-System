// src/components/OrderForm.js
import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function OrderForm() {
  const [foodItems, setFoodItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Fetch food items from the backend
    axios.get('http://127.0.0.1:3002/admin-food-router/:add-food-item')
      .then((response) => {
        setFoodItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching food items: ', error);
      });
  }, []);

  const handleFoodItemSelection = (foodItem) => {
    // Add the selected food item to the order
    setSelectedItems([...selectedItems, foodItem]);
    setTotalPrice(totalPrice + foodItem.price);
  };

  const handleSubmitOrder = () => {
    // Send the order to the backend
    const orderData = {
      customerId: 'customer_id', // Replace with the actual customer ID
      orderItems: selectedItems,
      total: totalPrice,
    };

    axios.post('http://127.0.0.1:3002/restaurantorders/orders', orderData)
      .then((response) => {
        console.log('Order created successfully:', response.data);
        // Reset the order form or navigate to a confirmation page
      })
      .catch((error) => {
        console.error('Error creating the order: ', error);
      });
  };

  return (
    <div>
      <h2>Create Your Order</h2>
      <div>
        <h3>Select Food Items</h3>
        <ul>
          {foodItems.map((foodItem) => (
            <li key={foodItem._id}>
              {foodItem.name} - ${foodItem.price}
              <button onClick={() => handleFoodItemSelection(foodItem)}>Add to Order</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Your Order</h3>
        <ul>
          {selectedItems.map((foodItem) => (
            <li key={foodItem._id}>
              {foodItem.name} - ${foodItem.price}
            </li>
          ))}
        </ul>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
        <button onClick={handleSubmitOrder}>Place Order</button>
      </div>
    </div>
  );
}

export default OrderForm;
