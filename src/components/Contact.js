import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2 className="heading">Contact Me</h2>

      <div
        className="contact-icons"
        style={{
          display: "flex",
          gap: "40px",
          marginTop: "30px",
          justifyContent: "center",
        }}
      >
        {/* Email */}
        <a
          href="mailto:mishitatiwari27@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Email"
          className="cute-icon email-icon"
        >
          <FaEnvelope />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/mishita27twr"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          className="cute-icon github-icon"
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/mishita-tiwari-24a986338"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className="cute-icon linkedin-icon"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Contact;
