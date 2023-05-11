import React from "react";

import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

import product1 from "../assets/images/product-1.jpg";
import product2 from "../assets/images/product-2.jpg";
import product3 from "../assets/images/product-3.jpg";
import product4 from "../assets/images/product-4.jpg";
import product5 from "../assets/images/product-6.jpg";
import product6 from "../assets/images/product-7.jpg";

function Products() {
  return (
    <div>
      <Header />
      <div className="products">
        <h1 className="products_h1">
          Your <span>Products</span>
        </h1>
        {/* Products Card */}
        <div className="allcards">
          <div className="productcard">
            <div className="productcard_img">
              <img src={product1} alt="product1" />
            </div>
            <div className="productcard_text">
              <h2>Smartphone</h2>
              <div className="productcard_input">
                <h3>Quantity:</h3>
                <input type="text" />
              </div>
              <p>
                $249.99 <span>$399.99</span>
              </p>
            </div>
          </div>
          <div className="productcard">
            <div className="productcard_img">
              <img src={product2} alt="product1" />
            </div>
            <div className="productcard_text">
              <h2>Smartphone</h2>
              <div className="productcard_input">
                <h3>Quantity:</h3>
                <input type="text" />
              </div>
              <p>
                $249.99 <span>$399.99</span>
              </p>
            </div>
          </div>
          <div className="productcard">
            <div className="productcard_img">
              <img src={product3} alt="product1" />
            </div>
            <div className="productcard_text">
              <h2>Smartphone</h2>
              <div className="productcard_input">
                <h3>Quantity:</h3>
                <input type="text" />
              </div>
              <p>
                $249.99 <span>$399.99</span>
              </p>
            </div>
          </div>
          <div className="productcard">
            <div className="productcard_img">
              <img src={product4} alt="product1" />
            </div>
            <div className="productcard_text">
              <h2>Smartphone</h2>
              <div className="productcard_input">
                <h3>Quantity:</h3>
                <input type="text" />
              </div>
              <p>
                $249.99 <span>$399.99</span>
              </p>
            </div>
          </div>
          <div className="productcard">
            <div className="productcard_img">
              <img src={product5} alt="product1" />
            </div>
            <div className="productcard_text">
              <h2>Smartphone</h2>
              <div className="productcard_input">
                <h3>Quantity:</h3>
                <input type="text" />
              </div>
              <p>
                $249.99 <span>$399.99</span>
              </p>
            </div>
          </div>
          <div className="productcard">
            <div className="productcard_img">
              <img src={product6} alt="product1" />
            </div>
            <div className="productcard_text">
              <h2>Smartphone</h2>
              <div className="productcard_input">
                <h3>Quantity:</h3>
                <input type="text" />
              </div>
              <p>
                $249.99 <span>$399.99</span>
              </p>
            </div>
          </div>
        </div>
        {/* Products Card */}
      </div>

      <Footer />
    </div>
  );
}

export default Products;
