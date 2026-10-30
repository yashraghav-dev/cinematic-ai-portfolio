import { useState } from "react";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Menu,
  X,
} from "lucide-react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          YR<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        <div
          id="mobile-navigation"
          className={`mobile-nav-links ${menuOpen ? "open" : ""}`}
          aria-hidden={!menuOpen}
        >
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="background-glow"></div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="availability">
            <span className="status-dot"></span>
            OPEN TO OPPORTUNITIES
          </div>

          <p className="intro">HELLO, I'M</p>

          <h1>
            YASH <span>RAGHAV</span>
          </h1>

          <h2>
            AI ENGINEER <span>/</span>
            <br />
            DATA SCIENTIST <span>/</span>
            <br />
            DATA ANALYST
          </h2>

          <p className="description">
            Building intelligent AI solutions, uncovering
            meaningful insights from data, and transforming
            complex problems into impactful innovations.
          </p>

          {/* <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore My Work <ArrowUpRight size={18} />
            </a>

          <a
  href="/resume.pdf"
  download="Yash_Raghav_Resume.pdf"
  className="secondary-btn"
>
  Download Resume
</a>
   Download Resume <Download size={17} />
  </a>
          </div> */}
          
<div className="hero-buttons">
  <a href="#projects" className="primary-btn">
    Explore My Work <ArrowUpRight size={18} />
  </a>


<a
  href="YASH RAGHAV.pdf"
  download="YashRaghav.pdf"
  className="resume-btn"
>
  Download Resume <Download size={17} />
</a>
</div>


          <div className="socials">
            <a
              href="https://github.com/yashraghav-dev"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/yash-raghav-bab6a1264/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn ↗
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-photo-container"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="photo-glow"></div>
          <div className="photo-ring"></div>

          <motion.img
            src="/profile-cutout.png"
            alt="Yash Raghav"
            className="profile-photo"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <div className="scroll-text">SCROLL TO EXPLORE ↓</div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
