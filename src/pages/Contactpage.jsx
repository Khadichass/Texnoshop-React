/* eslint-disable jsx-a11y/iframe-has-title */
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
        <div>
          <div className="formSection">
            <h1>GET IN TOUCH</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              rem cumque odit, voluptates perferendis accusantium consequatur
              tempora velit ratione et nesciunt.
            </p>
            <div></div>
            <div></div>
          </div>
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                class="gmap_iframe"
                width="100%"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Tashkent&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
