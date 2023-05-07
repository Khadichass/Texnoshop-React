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
        <div>
          <div></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
