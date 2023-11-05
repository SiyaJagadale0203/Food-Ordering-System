// src/components/CustomerInfo.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CustomerInfo() {
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  useEffect(() => {
    // Fetch customer information from the backend
    axios.get('http://127.0.0.1:3002/customers/:customer_id') // Replace 'customer_id' with the actual customer ID
      .then((response) => {
        setCustomer(response.data);
      })
      .catch((error) => {
        console.error('Error fetching customer information: ', error);
      });
  }, []);

  // Function to update customer information
  const updateCustomerInfo = () => {
    axios.put(`http://127.0.0.1:3002/api/customers/:customer_id`, customer) // Replace 'customer_id' with the actual customer ID
      .then((response) => {
        console.log('Customer information updated:', response.data);
      })
      .catch((error) => {
        console.error('Error updating customer information: ', error);
      });
  };

  return (
    <div>
      <h2>Customer Information</h2>
      <form>
        <label>Name:
          <input
            type="text"
            value={customer.name}
            onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
          />
        </label>
        <label>Email:
          <input
            type="email"
            value={customer.email}
            onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
          />
        </label>
        <label>Phone Number:
          <input
            type="tel"
            value={customer.phoneNumber}
            onChange={(e) => setCustomer({ ...customer, phoneNumber: e.target.value })}
          />
        </label>
        <button type="button" onClick={updateCustomerInfo}>Update Information</button>
      </form>
    </div>
  );
}

export default CustomerInfo;
