import { useState } from 'react';
import './App.css'
import './index.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Switch, Route } from 'react-router-dom';

import HomePage from './Components/pages/HomePage';
import FoodItems from './Components/FoodItems';
import OrderForm from './Components/OrderForm';
import CustomerInfo from './Components/CustomerInfo';
import Navbar from './Components/Navbar';
// import LandingPage from './LandingPage';
import About from './Components/pages/About';
import Restaurants from './Components/pages/Restaurant';
import Login from './Components/pages/Login';
import Register from './Components/pages/Register';
import UserDashboard from './Components/pages/Dashboard/UserDashboard';
import AdminDashboard from './Components/pages/Dashboard/AdminDashboard';
import Dashboard from './Components/pages/Dashboard/Dashboard';

function App() {

  return (
     <BrowserRouter>
     <Navbar />
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/login" element={<Login />} />
        <Route path='/register' Component={Register} />
        <Route path='/dashboard' Component={Dashboard} />
        <Route path='/user/dashboard' Component={UserDashboard} />
        <Route path='/admin/dashboard' Component={AdminDashboard} />
        <Route path="/food" elementt={<FoodItems />} />
        <Route path="/order" element={<OrderForm />} />
        <Route path="/customer"element={<CustomerInfo />} />
      
    </Routes>

    </BrowserRouter>

  ); 
}

export default App;
