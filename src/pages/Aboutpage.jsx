import React from "react";

import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

import about from "../assets/images/about-img.png";
function About() {
  return (
    <div>
      <Header />
      <div className="about">
        <div className="firstpart">
          <div className="firstpart_left">
            <img src={about} alt="about " />
          </div>
          <div className="firstpart_right">
            <h1>OUR STORY</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              illo eos deserunt natus distinctio odio aspernatur minima alias
              dolor ut. Explicabo natus ullam facilis consectetur quae possimus
              ducimus similique, tempore quo animi omnis magnam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              illo eos deserunt natus distinctio odio aspernatur minima alias
              dolor ut. Explicabo natus ullam facilis consectetur quae possimus
              ducimus similique, tempore quo animi omnis magnam.
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
