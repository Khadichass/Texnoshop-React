import React from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/images/photo_2022-11-20_12-15-08-removebg-preview.png";
import cards from "../assets/images/card_img.png";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  const loc = useLocation();

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
            <li>
              <Link
                to={"/"}
                style={
                  loc.pathname == "/"
                    ? { color: "#1C64F2", textDecoration: "none" }
                    : { color: "6B7280", textDecoration: "none" }
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                style={
                  loc.pathname == "/about"
                    ? { color: "#1C64F2" }
                    : { color: "6B7280" }
                }
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/products"}
                style={
                  loc.pathname == "/about"
                    ? { color: "#1C64F2" }
                    : { color: "6B7280" }
                }
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                style={
                  loc.pathname == "/about"
                    ? { color: "#1C64F2" }
                    : { color: "6B7280" }
                }
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to={"/login"}
                style={
                  loc.pathname == "/about"
                    ? { color: "#1C64F2" }
                    : { color: "6B7280" }
                }
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to={"/register"}
                style={
                  loc.pathname == "/about"
                    ? { color: "#1C64F2" }
                    : { color: "6B7280" }
                }
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                to={"/cart"}
                style={
                  loc.pathname == "/about"
                    ? { color: "#1C64F2" }
                    : { color: "6B7280" }
                }
              >
                Cart
              </Link>
            </li>
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
        <div className="lastText">
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
