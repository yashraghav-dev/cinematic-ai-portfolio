
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Database,
  BarChart3,
  Code2,
  ArrowUpRight,
  GraduationCap,
  Sparkles,
} from "lucide-react";

import "./About.css";

const expertise = [
  {
    icon: BrainCircuit,
    title: "AI Engineering",
    description:
      "Developing intelligent solutions using machine learning, predictive models, and AI technologies.",
    number: "01",
  },
  {
    icon: Database,
    title: "Data Science",
    description:
      "Exploring datasets, applying statistics, and building models that reveal meaningful patterns.",
    number: "02",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Transforming raw data into actionable insights using SQL, Python, Excel, and Power BI.",
    number: "03",
  },
  {
    icon: Code2,
    title: "Development",
    description:
      "Building practical applications and integrating data-driven solutions into real-world projects.",
    number: "04",
  },
];

const technologies = [
  "Python",
  "SQL",
  "Power BI",
  "Excel",
  "Pandas",
  "NumPy",
  "Machine Learning",
  "Statistics",
  "EDA",
  "Data Visualization",
];

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  visible: { opacity: 1, y: 0 },
};

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-ambient" />

      <div className="about-wrapper">
        <motion.div
          className="about-heading"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="about-eyebrow">
            <span className="about-line" />
            01 / WHO I AM
          </div>

          <h2>
            ABOUT <span>ME</span>
          </h2>

          <p>
            Driven by curiosity. Powered by data.
            Focused on intelligent solutions.
          </p>
        </motion.div>

        <div className="about-main">
          <motion.div
            className="about-introduction"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-label">
              <Sparkles size={17} />
              MY INTRODUCTION
            </div>

            <h3>
              Turning Data Into
              <br />
              <span>Intelligence.</span>
            </h3>

              <p>
  I'm Yash Raghav, a Computer Science and Data
  Science graduate passionate about Artificial
  Intelligence, Machine Learning, and Data Analytics.
  I focus on transforming complex data into
  intelligent, practical solutions.
</p>
 

            <p>
              I work with Python, SQL, Power BI, and
              machine learning techniques to explore
              complex datasets, develop predictive
              solutions, and communicate meaningful
              business insights.
            </p>

            <p>
              <p>
  My project experience includes AI Customer
  Churn Prediction and Lung Cancer Detection,
  where I apply machine learning, data analysis,
  and predictive modeling techniques to solve
  real-world problems.
</p>
            </p>

            <div className="about-education">
              <div className="about-education-icon">
                <GraduationCap size={24} />
              </div>

              <div>
                <strong>
                  Computer Science & Data Science
                </strong>
                <span>Graduate • Academic Background</span>
              </div>
            </div>

            <a href="#projects" className="about-project-link">
              Explore My Projects
              <ArrowUpRight size={18} />
            </a>
          </motion.div>

          <div className="about-expertise">
            {expertise.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  className="about-card"
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -7,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="about-card-top">
                    <div className="about-card-icon">
                      <Icon size={25} />
                    </div>
                    <span>{item.number}</span>
                  </div>

                  <h4>{item.title}</h4>
                  <p>{item.description}</p>

                  <div className="about-card-accent" />
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          className="about-tech"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-tech-heading">
            <span>TECHNOLOGIES I WORK WITH</span>
            <span className="about-tech-decoration">
              CORE TOOLKIT
            </span>
          </div>

          <div className="about-tech-tags">
            {technologies.map((technology) => (
              <span key={technology} className="about-tech-tag">
                {technology}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
