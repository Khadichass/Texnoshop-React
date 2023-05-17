import React from "react";

import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

function Contact() {
  return (
    <div>
      <Header />
      <div>
        <div>
          <div>
            <h2>Address</h2>
            <p>Mumbai, India - 400104</p>
          </div>
          <div>
            <h2>Email</h2>
            <p>Shaikhanas@Gmail.Com</p>
            <p>Anasbhai@Gmail.Com</p>
          </div>
          <div>
            <h2>Number</h2>
            <p>+123-456-7890</p>
            <p>+111-222-3333</p>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
