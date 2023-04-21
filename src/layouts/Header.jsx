import React from "react";
import logo from "../assets/images/photo_2022-11-20_12-15-08-removebg-preview.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

icon({ name: "user", style: "solid" });
icon({ name: "bars", style: "solid" });
icon({ name: "heart", style: "solid" });
icon({ name: "cart-shopping", style: "solid" });
icon({ name: "magnifying-glass", style: "solid" });
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
        <FontAwesomeIcon
          className="search"
          icon={icon({ name: "magnifying-glass", style: "solid" })}
        />
      </div>
      {/* Search side */}

      {/* Icons side */}
      <div className="icons">
        <FontAwesomeIcon
          className="bars"
          icon={icon({ name: "bars", style: "solid" })}
        />
        <FontAwesomeIcon
          className="user"
          icon={icon({ name: "user", style: "solid" })}
        />
        <FontAwesomeIcon
          className="heart"
          icon={icon({ name: "heart", style: "solid" })}
        />
        <FontAwesomeIcon
          className="cart"
          icon={icon({ name: "cart-shopping", style: "solid" })}
        />
      </div>
      {/* Icons side */}
    </div>
  );
}

export default Header;
