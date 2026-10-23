
import { useState } from "react";

import {
  BrainCircuit,
  Activity,
  ArrowUpRight,
  ChevronDown,
  Database,
  Target,
  Layers3,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

import "./Projects.css";

const projects = [
  {
    id: 1,
    number: "01",
    category: "MACHINE LEARNING",
    title: "AI Customer Churn Prediction",
    image: "/Projects/churn.jpg",
    icon: BrainCircuit,

    description:
      "Analyzing customer behavior and developing predictive models to identify customers at risk of leaving a service.",

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "EDA",
      "Matplotlib",
    ],

    problem:
      "Customer churn can affect business revenue and customer retention. This project explores customer characteristics and service usage to understand why customers leave.",

    approach: [
      "Clean and preprocess customer records",
      "Perform exploratory data analysis",
      "Explore contract, tenure, and service patterns",
      "Prepare features for predictive modeling",
      "Evaluate models using suitable classification metrics",
    ],

    outcome:
      "Designed to identify churn-related patterns and support data-driven customer retention decisions.",

    github:"https://github.com/yashraghav-dev/AI-Customer-Churn-Prediction",
  },

  {
    id: 2,
    number: "02",
    category: "ARTIFICIAL INTELLIGENCE",
    title: "Lung Cancer Detection",
    image: "/Projects/lung-cancer.jpg",
    icon: Activity,

    description:
      "Exploring machine learning approaches for lung cancer detection through data preprocessing, model development, and predictive analysis.",

    technologies: [
      "Python",
      "Machine Learning",
      "Data Preprocessing",
      "Predictive Modeling",
      "AI",
    ],

    problem:
      "This project investigates how artificial intelligence and machine learning can support the analysis of lung cancer-related data.",

    approach: [
      "Study and prepare the dataset",
      "Perform data preprocessing",
      "Explore important input features",
      "Develop machine learning models",
      "Assess model performance and limitations",
    ],

    outcome:
      "A learning-focused predictive AI project exploring the application of machine learning to healthcare-related data. Not a clinical diagnostic tool.",

    github:"https://github.com/yashraghav-dev/Lung-cancer-detection",
  },
];

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  const Icon = project.icon;

  return (
    <article className="premium-project-card">

      {/* PROJECT IMAGE */}
      <div className="premium-project-visual">
        {!imageFailed ? (
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            className="premium-project-image"
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="premium-project-fallback">
            <Icon size={66} strokeWidth={1.2} />
          </div>
        )}

        <div className="premium-project-overlay" />

        <span className="premium-project-number">
          PROJECT {project.number}
        </span>

        <div className="premium-project-visual-icon">
          <Icon size={26} />
        </div>
      </div>

      {/* PROJECT CONTENT */}
      <div className="premium-project-content">

        <div className="premium-project-category">
          <Icon size={16} />
          <span>{project.category}</span>
        </div>

        <h3>{project.title}</h3>

        <p className="premium-project-description">
          {project.description}
        </p>

        {/* TECHNOLOGIES */}
        <div className="premium-project-technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="premium-project-actions">

          <button
            type="button"
            className="premium-project-details-btn"
            aria-expanded={expanded}
            onClick={() => setExpanded((previous) => !previous)}
          >
            {expanded ? "Hide Details" : "View Details"}

            <ChevronDown
              size={17}
              className={expanded ? "rotated" : ""}
            />
          </button>

          {/* {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-project-github"
            >
              <ExternalLink size={17} />
              GitHub
              <ArrowUpRight size={15} />
            </a>
          ) : (
            <span className="premium-project-coming-soon">
              <ExternalLink size={15} />
              Repository coming soon
            </span>
          )} */}
          {project.github ? (
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="premium-project-github"
  >
    View on GitHub
    <ExternalLink size={16} />
  </a>
) : (
  <span className="premium-project-coming-soon">
    Repository link unavailable
  </span>
)}

        </div>

        {/* EXPANDABLE PROJECT DETAILS */}
        {expanded && (
          <div className="premium-project-expanded">

            {/* PROBLEM */}
            <div className="premium-project-detail">
              <div className="premium-project-detail-title">
                <Target size={17} />
                <h4>Problem Statement</h4>
              </div>

              <p>{project.problem}</p>
            </div>

            {/* WORKFLOW */}
            <div className="premium-project-detail">
              <div className="premium-project-detail-title">
                <Layers3 size={17} />
                <h4>Project Workflow</h4>
              </div>

              <ul>
                {project.approach.map((step) => (
                  <li key={step}>
                    <CheckCircle2 size={15} />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* OBJECTIVE */}
            <div className="premium-project-detail">
              <div className="premium-project-detail-title">
                <Database size={17} />
                <h4>Project Objective</h4>
              </div>

              <p>{project.outcome}</p>
            </div>

          </div>
        )}

      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="premium-projects-section"
    >
      <div className="premium-projects-container">

        {/* SECTION HEADING */}
        <div className="premium-projects-heading">

          <div className="premium-projects-eyebrow">
            <span className="premium-projects-line" />
            03 / SELECTED WORK
          </div>

          <h2>
            FEATURED <span>PROJECTS</span>
          </h2>

          <p>
            Exploring intelligent solutions through machine
            learning, predictive analytics, and data-driven
            innovation.
          </p>

        </div>

        {/* PROJECT CARDS */}
        <div className="premium-projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
