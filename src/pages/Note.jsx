import React, { useState, useEffect } from "react";
import { projectData } from "../data/projectData";
import "../styles/ProjectLists.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Porto2() {
  const [index, setIndex] = useState(0);

  const total = projectData.length;

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  // auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="project-section">
      <div className="project-container">

        <div className="project-header">
          <h5>OUR PROJECTS</h5>
          <hr className="line"/>
          <h2>Discover Our Recent Projects And Showcases</h2>
        </div>

        <div className="project-carousel">

          <button className="carousel-btn left" onClick={prevSlide}>
            <FiChevronLeft />
          </button>

          <div className="project-slider">
            <div
              className="project-track"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {projectData.map((project) => (
                <div className="project-slide" key={project.id}>
                  <div className="project-item">

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
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-btn right" onClick={nextSlide}>
            <FiChevronRight />
          </button>

        </div>

      </div>
    </section>
  );
}

export default Porto2;