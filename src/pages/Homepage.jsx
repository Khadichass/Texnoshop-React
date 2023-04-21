import React from "react";
import Header from "../layouts/Header";

import logo from "../assets/images/photo_2022-11-20_12-15-08-removebg-preview.png";
import mainPhone from "../assets/images/home-img-1.jpg";
import banner1 from "../assets/images/banner-1.jpg";
import banner2 from "../assets/images/banner-2.jpg";
import banner3 from "../assets/images/banner-3.jpg";

function Homepage() {
  return (
    <div>
      <Header />

      {/* Phone section */}
      <div className="phoneSection">
        <img src={mainPhone} className="phone" alt="phone" />
        <div className="phoneRight">
          <h1>Upto 50% Off </h1>
          <p>Smartphones</p>
          <button type="submit"> Shop Now</button>
        </div>
      </div>
      {/* Phone section */}

      {/* Offer section */}
      <div className="offerSection">
        <div className="offerContainers">
          <div className="banner">
            <img src={banner1} alt="banner" />
            <div className="bannerText">
              <h2>Special Offer</h2>
              <p>Upto 50% Off</p>
            </div>
          </div>
          <div className="banner">
            <img src={banner2} alt="banner" />
            <div className="bannerText">
              <h2>Special Offer</h2>
              <p>Upto 50% Off</p>
            </div>
          </div>
          <div className="banner">
            <img src={banner3} alt="banner" />
            <div className="bannerText">
              <h2>Special Offer</h2>
              <p>Upto 50% Off</p>
            </div>
          </div>
        </div>
      </div>
      {/* Offer section */}
    </div>
  );
}

export default Homepage;
