import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", !isDark ? "dark" : "light");
  };

  useEffect(() => {
    // Initialize GSAP animations
    gsap.fromTo(
      ".hero-content",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
    );

    // Scroll-triggered animations
    gsap.utils.toArray(".animate-on-scroll").forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <CustomCursor />
        <Navigation />
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

        <main>
          <section id="home">
            <Hero />
          </section>

          <section id="about" className="animate-on-scroll">
            <About />
          </section>

          <section id="skills" className="animate-on-scroll">
            <Skills />
          </section>

          <section id="projects" className="animate-on-scroll">
            <Projects />
          </section>

          <section id="contact" className="animate-on-scroll">
            <Contact />
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;
