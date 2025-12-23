import { motion } from "framer-motion";
import club from "../assets/club.png";
import task from "../assets/task.png";
import gdsc from "../assets/gdsc.png";
import research from "../assets/research.png";

const projectsData = [
  {
    title: "Club Website (Streamlit)",
    description: "Interactive Streamlit website showcasing club events and teams.",
    image: club,
    link: "https://github.com/mishita27twr/Android-Club",
  },
  {
    title: "Task Management App",
    description: "Task app with create, update & real-time tracking.",
    image: task,
    link: "https://github.com/mishita27twr/Android-Club",
  },
  {
    title: "GDSC Galaxy (React)",
    description: "Modern React app highlighting GDSC activities.",
    image: gdsc,
    link: "https://github.com/mishita27twr/GDGC_Club",
  },
  {
    title: "Smart Research Advisor",
    description: "Streamlit-based academic research assistant.[College Group Project]",
    image: research,
    link: "https://github.com/yourusername/research",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="heading">Projects</h2>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>

            {/* Sparkles container */}
            <span className="sparkle sparkle1"></span>
            <span className="sparkle sparkle2"></span>
            <span className="sparkle sparkle3"></span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
