import React from "react";

import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

function Products() {
  return (
    <div>
      <Header />
      <div className="products">
        <h1 className="products_h1">
          Your <span>Products</span>
        </h1>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
