import React from "react";
import logo from "../assets/images/photo_2022-11-20_12-15-08-removebg-preview.png";

import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      {/* Logo and text side */}
      <div className="logoText">
        <img src={logo} className="logo" alt="logo" />
        <h1>Texno Shop</h1>
      </div>
      {/* Logo and text side */}

      {/* Search side */}
      <div className="searchContainer">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="search here..."
        />
        <FaSearch className="search" />
      </div>
      {/* Search side */}

      {/* Icons side */}
      <div className="icons">
        <FaBars className="bars" />
        <FaUserAlt className="user" />
        <FaHeart className="heart" />
        <FaShoppingCart className="cart" />
      </div>
      {/* Icons side */}
    </div>
  );
}

export default Header;
