import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CollegeInvolvements from "./components/CollegeInvolvements";
import Contact from "./components/Contact";
import GitHubStats from "./components/GitHubStats";
import Footer from "./components/footer";
import "./App.css";

function App() {
  useEffect(() => {
    // Set custom page title
    document.title = "Mishita Portfolio.com";

    // Favicon files
    const favicons = [
      { rel: "icon", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "icon", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", sizes: "48x48", href: "/favicon-48x48.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
    ];

    favicons.forEach(({ rel, sizes, href }) => {
      let link =
        document.querySelector(`link[rel='${rel}'][sizes='${sizes}']`) ||
        document.createElement("link");
      link.rel = rel;
      link.sizes = sizes;
      link.href = href;
      document.head.appendChild(link);
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <GitHubStats />
      <About />
      <CollegeInvolvements />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
