import React from "react";
import Header from "../layouts/Header";

import logo from "../assets/images/photo_2022-11-20_12-15-08-removebg-preview.png";
import mainPhone from "../assets/images/home-img-1.jpg";
// import mainPhone from "../assets/images/home-img-1.jpg";
// import mainPhone from "../assets/images/home-img-1.jpg";
// import mainPhone from "../assets/images/home-img-1.jpg";
// import mainPhone from "../assets/images/home-img-1.jpg";
// import mainPhone from "../assets/images/home-img-1.jpg";
// import mainPhone from "../assets/images/home-img-1.jpg";
// import mainPhone from "../assets/images/home-img-1.jpg";
// import mainPhone from "../assets/images/home-img-1.jpg";
// import mainPhone from "../assets/images/home-img-1.jpg";
function Homepage() {
  return (
    <div>
      <Header />

      {/* Phone section */}
      <div className="phoneSection">
        <img src={mainPhone} className="logo" alt="phone" />
        <div className="phoneRight">
          <h1>Upto 50% Off </h1>
          <p>Smartphones</p>
          <button type="submit"> Shop Now</button>
        </div>
      </div>
      {/* Phone section */}
    </div>
  );
}

export default Homepage;
