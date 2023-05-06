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

        <div className="secondpart">
          <h2>
            Question & <span>Answers</span>
          </h2>

          <form>
            <select name="question1" id="question1">
              <option value="How To Make Websites?">
                How To Make Websites?
              </option>
            </select>

            <select name="question2" id="question2">
              <option value="How To Place Order Online?">
                How To Place Order Online?
              </option>
            </select>

            <select name="question3" id="question3">
              <option value="How To Pay Online?">How To Pay Online?</option>
            </select>

            <select name="question4" id="question4">
              <option value="Is Online Payment Safe?">
                Is Online Payment Safe?
              </option>
            </select>

            <select name="question5" id="question5">
              <option value="How To Contact Servise Canter?">
                How To Contact Servise Canter?
              </option>
            </select>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
