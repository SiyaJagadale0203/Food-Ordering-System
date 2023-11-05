// import React, { useState, useEffect } from 'react';

// function OrderPage() {
//   const [restaurants, setRestaurants] = useState([]);
//   const [selectedRestaurant, setSelectedRestaurant] = useState('');
//   const [orderPlaced, setOrderPlaced] = useState(false);

//   useEffect(() => {
//     // Fetch the list of restaurants from your Node.js server
//     fetch('/restaurants')
//       .then((response) => response.json())
//       .then((data) => setRestaurants(data));
//   }, []);

//   const handleOrder = () => {
//     // Send an order request to your Node.js server
//     fetch('/orders', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ restaurant: selectedRestaurant }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Order successfully placed, data.orderId will contain the order ID
//         setOrderPlaced(true);
//       });
//   };

//   return (
//     <div>
//       <h1>Order Food</h1>
//       <p>Select a restaurant:</p>
//       <select onChange={(e) => setSelectedRestaurant(e.target.value)}>
//         <option value="">Select a restaurant</option>
//         {restaurants.map((restaurant) => (
//           <option key={restaurant.id} value={restaurant.name}>
//             {restaurant.name}
//           </option>
//         ))}
//       </select>
//       <br />
//       <button onClick={handleOrder}>Order Now</button>
//       {orderPlaced && <p>Order placed successfully! Your order ID is: 123456</p>}
//     </div>
//   );
// }

// export default OrderPage;
