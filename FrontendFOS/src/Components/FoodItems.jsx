// src/components/FoodItems.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FoodItems() {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:3002/menu/:food-items')
      .then((response) => {
        setFoodItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching food items: ', error);
      });
  }, []);

  return (
    <div>
      <h2>Our Menu</h2>
      {foodItems.map((foodItem) => (
        <div key={foodItem._id}>
          <h3>{foodItem.name}</h3>
          <p>{foodItem.description}</p>
          <p>Price: {foodItem.price}</p>
          <button>Add to Order</button>
        </div>
      ))}
    </div>
  );
}

export default FoodItems;
