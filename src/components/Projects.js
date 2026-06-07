import { motion } from "framer-motion";
import Context_AI from "../assets/context_ai.png";
import Prepwise from "../assets/prepwise.png";
import Mysticflow from "../assets/mysticflow.png";
import Mailmuse from "../assets/mailmuse.png";
import QR_App from "../assets/qr_app.png";
import Registration from "../assets/registration_app.png";

const projectsData = [
  {
    title: "Technical-Content-summarizer",
    description: "An AI-powered platform that summarizes text, documents, and research papers while enabling intelligent chat-based interaction with uploaded content.",
    image: Context_AI,
    link: "https://github.com/mishita27twr/Technical-Content-summarizer",
    "live link": "https://technical-content-summarizer-j146-k2twop66e.vercel.app/"
  },
  {
    title: "Ai-Interview-Copilot",
    description: "An AI-powered mock interview platform that analyzes resumes, conducts personalized video/text interviews, and provides real-time feedback to help users improve their interview skills.",
    image: Prepwise,
    link: "https://github.com/mishita27twr/Ai-Interview-Copilot",
    "live link": "https://ai-interview-copilot-zb7b.vercel.app/"
  },
  {
    title: "AI-Story-Teller",
    description: "An AI-powered interactive storytelling platform that generates immersive, personalized stories across multiple genres with dynamic narratives and engaging reading experiences.",
    image: Mysticflow,
    link: "https://github.com/mishita27twr/AI-Story-Teller",
    "live link": "https://ai-story-teller-two.vercel.app/"
  },
  {
    title: "Email-Subject-generator",
    description: "An AI-powered tool that creates clear, professional, and engaging email subject lines tailored to the content and purpose of your message.",
    image: Mailmuse,
    link: "https://github.com/mishita27twr/Email-Subject-generator",
    "live link": "https://email-subject-generator-t22b.vercel.app/"
  },
  {
    title: "QR-Code-Utility-App",
    description: "A user-friendly application that generates and scans QR codes instantly, making it easy to share and access information through a simple and efficient interface.",
    image: QR_App,
    link: "https://github.com/mishita27twr/QR-Code-Utility-App",
    "live link": "https://qr-utility-app-g1y3.vercel.app/"
  },
  {
    title: "Company-registration-portal",
    description: "A web-based platform that streamlines the company registration process by allowing users to submit, manage, and track business registration details efficiently.",
    image: Registration,
    link: "https://github.com/mishita27twr/Company-registration-portal",
    "live link": "https://company-registration-module-mauve.vercel.app/"
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
            <a href={project["live link"]} target="_blank" rel="noopener noreferrer">
              Live Demo
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
