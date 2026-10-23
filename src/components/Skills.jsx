
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BrainCircuit,
  Database,
  BarChart3,
  Code2,
  Sparkles,
  ChevronDown,
  ArrowUpRight,
  Workflow,
  CheckCircle2,
} from "lucide-react";

import "./Skills.css";

const categories = [
  { id: "all", label: "All Skills" },
  { id: "programming", label: "Programming" },
  { id: "analytics", label: "Data Analytics" },
  { id: "ai", label: "AI & Machine Learning" },
  { id: "tools", label: "Tools & Visualization" },
];

const skills = [
  {
    name: "Python",
    category: "programming",
    symbol: "Py",
    color: "#facc15",
    description:
      "Programming for data processing, automation, and AI applications.",
    capabilities: ["Data Processing", "Automation", "Python Libraries"],
    application:
      "Used for exploring customer churn datasets, cleaning data, and building analytical workflows.",
  },
  {
    name: "SQL",
    category: "programming",
    symbol: "SQL",
    color: "#60a5fa",
    description:
      "Retrieving, filtering, joining, and analyzing relational data.",
    capabilities: ["Joins", "GROUP BY", "Subqueries"],
    application:
      "Useful for extracting customer records, combining tables, and creating business reports.",
  },
//   {
//     name: "Java",
//     category: "programming",
//     symbol: "J",
//     color: "#fb923c",
//     description:
//       "Object-oriented programming and application development.",
//     capabilities: ["OOP", "Data Structures", "Problem Solving"],
//     application:
//       "Supports software development and programming fundamentals.",
//   },
  {
    name: "Microsoft Excel",
    category: "analytics",
    symbol: "XL",
    color: "#4ade80",
    description:
      "Organizing, cleaning, analyzing, and reporting structured data.",
    capabilities: ["Pivot Tables", "Formulas", "Reporting"],
    application:
      "Useful for data cleaning, summaries, and business performance analysis.",
  },
  {
    name: "Power BI",
    category: "analytics",
    symbol: "BI",
    color: "#facc15",
    description:
      "Creating interactive dashboards and business intelligence reports.",
    capabilities: ["Dashboards", "KPIs", "Visualizations"],
    application:
      "Can be used to visualize customer behavior, sales performance, and churn patterns.",
  },
  {
    name: "Pandas",
    category: "analytics",
    symbol: "Pd",
    color: "#c084fc",
    description:
      "Data manipulation, cleaning, and exploratory analysis in Python.",
    capabilities: ["DataFrames", "Missing Values", "GroupBy"],
    application:
      "Used for preparing and investigating customer churn datasets.",
  },
  {
    name: "NumPy",
    category: "analytics",
    symbol: "Np",
    color: "#38bdf8",
    description:
      "Numerical computing and efficient array-based operations.",
    capabilities: ["Arrays", "Calculations", "Numerical Analysis"],
    application:
      "Supports numerical processing and statistical computations.",
  },
  {
    name: "Machine Learning",
    category: "ai",
    symbol: "ML",
    color: "#a78bfa",
    description:
      "Learning patterns from data to generate predictions.",
    capabilities: ["Classification", "Regression", "Prediction"],
    application:
      "Relevant to customer churn prediction and disease prediction applications.",
  },
  {
    name: "Scikit-learn",
    category: "ai",
    symbol: "SK",
    color: "#fb923c",
    description:
      "A Python library for training and evaluating machine learning models.",
    capabilities: ["Model Training", "Preprocessing", "Evaluation"],
    application:
      "Useful for comparing classification models and evaluating predictions.",
  },
  {
    name: "Statistics",
    category: "ai",
    symbol: "Σ",
    color: "#f9a8d4",
    description:
      "Understanding data distributions, relationships, and uncertainty.",
    capabilities: ["Probability", "Correlation", "Distributions"],
    application:
      "Helps explain relationships between customer characteristics and outcomes.",
  },
  {
    name: "Exploratory Data Analysis",
    category: "ai",
    symbol: "EDA",
    color: "#67e8f9",
    description:
      "Discovering patterns, anomalies, and trends in datasets.",
    capabilities: ["Data Quality", "Outliers", "Trend Analysis"],
    application:
      "Used to analyze churn rates, tenure, contract types, and customer charges.",
  },
  {
    name: "Matplotlib",
    category: "tools",
    symbol: "Mp",
    color: "#93c5fd",
    description:
      "Creating customizable data visualizations using Python.",
    capabilities: ["Bar Charts", "Histograms", "Line Charts"],
    application:
      "Used to communicate trends, comparisons, and data distributions.",
  },
  {
    name: "Seaborn",
    category: "tools",
    symbol: "Sb",
    color: "#5eead4",
    description:
      "Creating statistical visualizations with Python.",
    capabilities: ["Heatmaps", "Box Plots", "Distribution Plots"],
    application:
      "Useful for examining correlations and customer behavior patterns.",
  },
  {
    name: "Git & GitHub",
    category: "tools",
    symbol: "Git",
    color: "#fb7185",
    description:
      "Tracking code changes and managing project repositories.",
    capabilities: ["Version Control", "Repositories", "Commits"],
    application:
      "Used to organize, maintain, and publish portfolio projects.",
  },
  {
    name: "VS Code",
    category: "tools",
    symbol: "VS",
    color: "#38bdf8",
    description:
      "Development environment for programming and debugging.",
    capabilities: ["Code Editing", "Terminal", "Debugging"],
    application:
      "Used to develop Python applications and this React portfolio.",
  },
  {
    name: "Jupyter Notebook",
    category: "tools",
    symbol: "Jn",
    color: "#fdba74",
    description:
      "Interactive environment for Python analysis and experimentation.",
    capabilities: ["Notebooks", "EDA", "Visualization"],
    application:
      "Supports iterative analysis, experiments, and documentation.",
  },
];

const focusAreas = [
  {
    icon: BrainCircuit,
    title: "AI Engineering",
    description:
      "Predictive modeling and intelligent applications.",
  },
  {
    icon: Database,
    title: "Data Science",
    description:
      "Statistics, exploration, and data-driven modeling.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Dashboards, KPIs, and actionable business insights.",
  },
  {
    icon: Code2,
    title: "Development",
    description:
      "Programming and practical software solutions.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Data Collection",
    detail: "Gather relevant datasets",
  },
  {
    number: "02",
    title: "Data Cleaning",
    detail: "Prepare and validate data",
  },
  {
    number: "03",
    title: "Data Analysis",
    detail: "Explore trends and patterns",
  },
  {
    number: "04",
    title: "Model Building",
    detail: "Train and evaluate models",
  },
  {
    number: "05",
    title: "Visualization",
    detail: "Communicate useful insights",
  },
];

function SkillCard({ skill }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      layout
      className="skill-detail-card"
      style={{ "--skill-accent": skill.color }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.25 }}
      whileHover={{ y: -4 }}
    >
      <div className="skill-detail-top">
        <div className="skill-detail-logo">
          {skill.symbol}
        </div>

        <CheckCircle2
          size={18}
          className="skill-detail-check"
        />
      </div>

      <h3>{skill.name}</h3>

      <p className="skill-detail-description">
        {skill.description}
      </p>

      <div className="skill-detail-tags">
        {skill.capabilities.map((capability) => (
          <span key={capability}>{capability}</span>
        ))}
      </div>

      <button
        type="button"
        className="skill-detail-toggle"
        onClick={() => setExpanded((previous) => !previous)}
        aria-expanded={expanded}
      >
        {expanded ? "Show Less" : "Practical Application"}

        <ChevronDown
          size={17}
          className={expanded ? "rotated" : ""}
        />
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            className="skill-detail-extra"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p>{skill.application}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter(
          (skill) => skill.category === activeCategory
        );

  return (
    <section className="skills-section" id="skills">
      <div className="skills-background-glow" />

      <div className="skills-wrapper">
        <motion.div
          className="skills-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="skills-eyebrow">
            <span className="skills-line" />
            02 / TECHNICAL EXPERTISE
          </div>

          <h2>
            MY <span>SKILLS</span>
          </h2>

          <p>
            Exploring the technologies behind intelligent
            systems, predictive analytics, and data-driven
            business decisions.
          </p>
        </motion.div>

        <motion.div
          className="skills-focus-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {focusAreas.map((area) => {
            const Icon = area.icon;

            return (
              <div
                className="skills-focus-card"
                key={area.title}
              >
                <div className="skills-focus-icon">
                  <Icon size={24} />
                </div>

                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>
            );
          })}
        </motion.div>

        <div className="skills-library">
          <div className="skills-library-heading">
            <div>
              <div className="skills-small-label">
                <Sparkles size={17} />
                TECHNOLOGY STACK
              </div>

              <h3>
                Tools & <span>Technologies</span>
              </h3>
            </div>

            <span className="skills-count">
              {skills.length} Technologies
            </span>
          </div>

          <div className="skills-filters">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={`skills-filter ${
                  activeCategory === category.id
                    ? "active"
                    : ""
                }`}
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={activeCategory === category.id}
              >
                {category.label}
              </button>
            ))}
          </div>

          <motion.div layout className="skills-grid">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        <motion.div
          className="skills-workflow"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="skills-small-label">
            <Workflow size={18} />
            MY DATA PROJECT WORKFLOW
          </div>

          <h3>
            From Raw Data to <span>Insights</span>
          </h3>

          <div className="skills-workflow-steps">
            {workflow.map((step) => (
              <div
                className="skills-workflow-step"
                key={step.number}
              >
                <span className="workflow-number">
                  {step.number}
                </span>

                <strong>{step.title}</strong>
                <p>{step.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="skills-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="skills-bottom-icon">
            <Sparkles size={24} />
          </div>

          <div className="skills-bottom-text">
            <h3>Learning. Building. Improving.</h3>

            <p>
              Strengthening my AI, machine learning,
              and analytics skills through practical projects.
            </p>
          </div>

          <a
            href="#projects"
            className="skills-project-button"
          >
            View Projects
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
