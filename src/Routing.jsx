// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import SignUp from "./pages/auth/signUp";
import Payment from "./pages/payment/Payment";
import Orders from "./pages/orders/Orders";
import Cart from "./pages/cart/Cart";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<SignUp />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
