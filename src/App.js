import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import About from "./pages/Aboutpage";

import "./assets/styles/Header.css";
import "./assets/styles/Homepage.css";
import "./assets/styles/Footer.css";
import Products from "./pages/Productspage";
import Register from "./pages/Registerpage";
import Contact from "./pages/Contactpage";
import Login from "./pages/Loginpage";
import Cart from "./pages/Cartpage";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
