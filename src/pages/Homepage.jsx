import React from "react";
import Header from "../layouts/Header";

import logo from "../assets/images/photo_2022-11-20_12-15-08-removebg-preview.png";
import mainPhone from "../assets/images/home-img-1.jpg";
import banner1 from "../assets/images/banner-1.jpg";
import banner2 from "../assets/images/banner-2.jpg";
import banner3 from "../assets/images/banner-3.jpg";
import arrival1 from "../assets/images/arrival-1.jpg";
import arrival2 from "../assets/images/arrival-2.jpg";
import arrival3 from "../assets/images/arrival-3.jpg";
import arrival4 from "../assets/images/arrival-4.jpg";
import arrival5 from "../assets/images/arrival-5.jpg";
import arrival6 from "../assets/images/arrival-6.jpg";
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

      <div className="secondSection">
        {/* Offer section */}
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
        {/* Offer section */}

        {/* New Arrivals section */}
        <h2 className="arrivalsText">
          New <span>Arrivals</span>
        </h2>
        <div>
          <div className="arrivalContainer">
            <img src={arrival1} alt="" />
            <div className="arrivaltext">
              <h3>HD television</h3>
              <p>
                $249.99{" "}
                <span>
                  <del>$399.99</del>
                </span>
              </p>
            </div>
          </div>
          <div className="arrivalContainer">
            <img src={arrival2} alt="" />
            <h3>HD television</h3>
            <p>
              $249.99{" "}
              <span>
                <del>$399.99</del>
              </span>
            </p>
          </div>
          <div className="arrivalContainer">
            <img src={arrival3} alt="" />
            <h3>HD television</h3>
            <p>
              $249.99{" "}
              <span>
                <del>$399.99</del>
              </span>
            </p>
          </div>
          <div>
            <img src={arrival4} alt="" />
            <h3>HD television</h3>
            <p>
              $249.99{" "}
              <span>
                <del>$399.99</del>
              </span>
            </p>
          </div>
          <div>
            <img src={arrival6} alt="" />
            <h3>HD television</h3>
            <p>
              $249.99{" "}
              <span>
                <del>$399.99</del>
              </span>
            </p>
          </div>
          <div>
            <img src={arrival5} alt="" />
            <h3>HD television</h3>
            <p>
              $249.99{" "}
              <span>
                <del>$399.99</del>
              </span>
            </p>
          </div>
          <div>
            <img src={arrival1} alt="" />
            <h3>HD television</h3>
            <p>
              $249.99{" "}
              <span>
                <del>$399.99</del>
              </span>
            </p>
          </div>
        </div>
        {/* New Arrivals section */}
      </div>
    </div>
  );
}

export default Homepage;
