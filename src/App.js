import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import About from "./pages/Aboutpage";

import "./assets/styles/Header.css";
import "./assets/styles/Homepage.css";
import "./assets/styles/Footer.css";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
