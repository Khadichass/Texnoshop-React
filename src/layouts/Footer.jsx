import React from "react";
import logo from "../assets/images/photo_2022-11-20_12-15-08-removebg-preview.png";
import cards from "../assets/images/card_img.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer">
      <div className="linkSection">
        {/* Logo and text side */}
        <div className="logoText">
          <img src={logo} className="logo" alt="logo" />
          <h1>Texno Shop</h1>
        </div>
        {/* Logo and text side */}

        {/* Links */}
        <div className="pageLinks">
          <ul className="ulLinks">
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Contact</li>
            <li>Login</li>
            <li>Register</li>
            <li>Cart</li>
          </ul>
        </div>
        {/* Links */}

        {/* Social Media icons */}
        <div className="socialMedia">
          <FaFacebookF className="facebook" />
          <FaTwitter className="twitter" />
          <FaInstagram className="instagram" />
          <FaLinkedin className="linkedin" />
        </div>
        {/* Social Media icons */}
      </div>
      <div className="lastSection">
        {/* Text Section */}
        <div>
          <h1>
            Created By <span>MagicSoft Group </span>| All Rights Reserved!
          </h1>
        </div>
        {/* Text Section */}

        <div>
          <img src={cards} alt="cards" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
