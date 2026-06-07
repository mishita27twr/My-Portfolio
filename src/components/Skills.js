import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Programming Languages",
    skills: ["Python", "C++"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Flutter", "TypeScript", "JavaScript", "HTML & CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "Python Flask", "Streamlit"],
  },
  {
    category: "Database",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    category: "AI & APIs",
    skills: ["Groq API", "Prompt Engineering"],
  },
  {
    category: "Tools & Deployment",
    skills: ["Git & GitHub", "Vercel", "Render"],
  },
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
                <span className="skill-card" key={index}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}