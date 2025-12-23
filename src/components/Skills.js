import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      "Python",
      "C++",
      "C (basic)",
      "HTML, CSS, JavaScript"
    ]
  },
  {
    category: "Libraries & Frameworks",
    skills: [
      "Python: NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn",
      "Web: React.js, Node.js, Express.js, Streamlit",
      "AI/ML: TensorFlow, PyTorch (if used)"
    ]
  },
  {
    category: "Tools & Platforms",
    skills: [
      "VS Code, PyCharm",
      "Git & GitHub",
      "Canva (for designing SVGs/graphics)",
      "Overleaf (for LaTeX projects)",
      "Deployment: Heroku, Netlify, Vercel"
    ]
  },
  {
    category: "Database",
    skills: [
      "MySQL (basic)",
      "SQLite (small projects)",
      "Firebase (if used)"
    ]
  },
  {
    category: "Backend Expertise",
    skills: [
      "Node.js with Express.js (server-side development, REST APIs)",
      "Python Flask (if used)",
      "Streamlit for deploying Python apps",
      "Deployment experience on Heroku, Netlify, and Vercel"
    ]
  }
];

export default function Skills() {
  return (
    <motion.section
      className="section"
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="heading">Skills</h2>
      <div className="skills-list">
        {skillsData.map((category, idx) => (
          <div className="skill-row" key={idx}>
            <div className="skill-domain">{category.category}</div>
            <div className="skill-items">
              {category.skills.map((skill, index) => (
                <span className="skill-card" key={index}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
