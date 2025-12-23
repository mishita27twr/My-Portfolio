import React from "react";
import { FaAndroid, FaTshirt, FaPalette, FaGoogle } from "react-icons/fa";

const College = () => {
  return (
    <section id="college-involvement" className="section college-involvements">
      <h2 className="heading">College Involvements</h2>

      <div className="college-container">
        <div className="college-item">
          <FaAndroid className="college-icon android-icon" />
          <span><strong>Android Club:</strong> Software Development Team (Core Member)</span>
        </div>

        <div className="college-item">
          <FaTshirt className="college-icon tshirt-icon" />
          <span><strong>Fashion Club:</strong> Technical Team (Core Member)</span>
        </div>

        <div className="college-item">
          <FaPalette className="college-icon palette-icon" />
          <span><strong>Vitkult:</strong> Non-Tech Team (Core Member)</span>
        </div>

        <div className="college-item">
          <FaGoogle className="college-icon google-icon" />
          <span><strong>GDSC Club:</strong> Web Development Team (Core Member)</span>
        </div>
      </div>
    </section>
  );
};

export default College;
