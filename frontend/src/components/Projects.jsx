import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = ({ projects }) => {
  const defaultProjects = [
    {
      title: "Blog Management Website [Frontend]",
      description: "Full-featured blog platform with user authentication, blog management, and AI-powered chat assistance",
      tech: "MERN Stack",
      github: "https://github.com/mohammedashiqueofficial7/BlogProject",
      features: [
        "User authentication with JWT tokens",
        "Rich text editor for blog creation",
        "AI-powered chat assistance for content",
        "Responsive design with modern UI"
      ]
    },
    {
      title: "Blog Management Website [Backend]",
      description: "Robust backend API for blog management with advanced features and security",
      tech: "MERN Stack",
      github: "https://github.com/mohammedashiqueofficial7/BlogBackend",
      features: [
        "RESTful API architecture",
        "JWT authentication & authorization",
        "MongoDB database with Mongoose ODM",
        "File upload handling for images"
      ]
    },
    {
      title: "E-Commerce Website",
      description: "Complete online shopping platform with user authentication and product management",
      tech: "MERN Stack",
      github: "https://github.com/mohammedashiqueofficial7",
      features: [
        "User registration and authentication",
        "Product catalog with categories",
        "Shopping cart functionality",
        "Secure payment integration"
      ]
    },
    {
      title: "Simple Blog Website",
      description: "Blog management system for posting and managing content with clean, minimal design",
      tech: "React.js",
      github: "https://github.com/mohammedashiqueofficial7/Blog-Website",
      features: [
        "Clean and minimal user interface",
        "Responsive design for all devices",
        "Dynamic content rendering",
        "SEO-friendly structure"
      ]
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcasing projects, skills, and professional experience",
      tech: "React.js",
      github: "https://github.com/mohammedashiqueofficial7/My-new-Portfolio",
      features: [
        "Modern responsive design",
        "Dark/Light mode toggle",
        "Smooth animations and transitions",
        "Contact form with email integration"
      ]
    }
  ];

  const projectList = projects || defaultProjects;

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          <FaGithub className="section-icon" />
          Projects
        </h2>
        <p className="projects-intro">
          Here are some of my recent projects that showcase my skills and passion for development
        </p>
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  <span className="tech-badge">{project.tech}</span>
                </div>
                {project.features && (
                  <div className="project-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github">
                    <FaGithub /> Code
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link demo">
                      <FaExternalLinkAlt /> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <h3>Want to see more?</h3>
          <p>Check out my GitHub for additional projects and contributions</p>
          <a href="https://github.com/mohammedashiqueofficial7" target="_blank" rel="noopener noreferrer" className="cta-button">
            <FaGithub /> View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
