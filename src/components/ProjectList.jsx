import React, { useState } from "react";
import { projectData } from "../data/projectData";
// import "../styles/ProjectLists.css";

function ProjectList() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projectData : projectData.slice(0, 3);

  return (
    <section className="project-section">
      <div className="project-container">

        <div className="project-header">
          <h5>OUR PROJECTS</h5>
          <hr className="line"/>
          <h2>Discover Our Recent Projects And Showcases</h2>
        </div>

        <div className="project-list">
          {visibleProjects.map((project) => (
            <div className="project-item" key={project.id}>

              <div className="project-number">
                {String(project.id).padStart(2, "0")}
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              <div className="project-img">
                <img src={project.img} alt={project.title} />
              </div>

            </div>
          ))}
        </div>

        {projectData.length > 4 && (
          <div className="project-more">
            <button
              className="project-more-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "Show More Projects"}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

export default ProjectList;