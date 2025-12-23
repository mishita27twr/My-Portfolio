import React, { useState } from "react";
import girlNormal from "../assets/hero-image.png";
import girlSmile from "../assets/hero-image2.png";

function Hero() {
  const [img, setImg] = useState(girlNormal);

  return (
    <>
      <div className="hero" id="home">
        <div className="hero-left">
          <h1>Mishita Tiwari</h1>
          <h2>Developer</h2>
          <p>
            Hi, I’m <span className="highlight-name">Mishita Tiwari</span> — a developer in the making, 
            a tech explorer, and someone who believes good design and good code go hand in hand. 
            I’m building my world, one line of code at a time. Welcome to my portfolio!
          </p>
        </div>

        <div
          className="hero-right"
          onMouseEnter={() => setImg(girlSmile)}
          onMouseLeave={() => setImg(girlNormal)}
        >
          <img src={img} alt="girl illustration" />
        </div>
      </div>

      <div className="hero-divider"></div>
    </>
  );
}

export default Hero;
