import React from "react";
import img1 from "../assets/about1.jpeg";
import img2 from "../assets/about2.jpeg";
import img3 from "../assets/about3.jpeg";
import img4 from "../assets/about4.jpeg";

const About = () => {
  return (
    <section id="about" className="section about">
      <h2 className="section-title">About Me</h2>

      <div className="about-wrapper">
        {/* ROW 1 */}
        <img src={img1} alt="about 1" className="about-img" />

        <div className="about-card">
          <p>
            I am a Computer Science Engineering student specializing in Artificial
            Intelligence and Machine Learning, with a strong interest in building
            meaningful and user-focused digital experiences. I enjoy learning
            continuously, experimenting with ideas, and improving through
            consistent practice.
          </p>
        </div>

        <img src={img2} alt="about 2" className="about-img" />

        {/* ROW 2 */}
        <img src={img3} alt="about 3" className="about-img" />

        <div className="about-card">
          <p>
            Beyond academics, I enjoy dancing and unwinding by watching horror
            and mystery series that keep me curious and engaged. I love capturing
            moments, exploring new places, and finding joy in small experiences
            that help me stay creative, balanced, and grounded.
          </p>
        </div>

        <img src={img4} alt="about 4" className="about-img" />
      </div>
    </section>
  );
};

export default About;
