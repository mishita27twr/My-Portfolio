import React from "react";

const About = () => {
  return (
    <section id="about" className="section about">
      <h2 className="section-title">About Me</h2>

      <div className="about-wrapper">
        <div className="about-card card-1">
          <p>
            I am a Computer Science Engineering student specializing in Artificial
            Intelligence and Machine Learning, with a strong interest in building
            meaningful and user-focused digital experiences. I enjoy learning
            continuously, experimenting with ideas, and improving through
            consistent practice.
          </p>
        </div>

        <div className="about-card card-2">
          <p>
            Beyond academics, I enjoy dancing and unwinding by watching horror
            and mystery series that keep me curious and engaged. I love capturing
            moments, exploring new places, and finding joy in small experiences
            that help me stay creative, balanced, and grounded.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;