import React, { useState, useEffect, useCallback } from "react";
import { projectData } from "../data/projectData";
import "../styles/Porto2.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import AOS from "aos";

function Porto2() {
  const [index, setIndex] = useState(0);

  const total = projectData.length;

  // ✅ useCallback biar stabil
  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // ✅ auto slide (no warning)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  // ✅ AOS animation
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    AOS.refresh();
  }, []);

  return (
    <section className="project-section" id="project">
      <div className="project-container">

        <div className="project-header" data-aos="fade-up">
          <h5>OUR PROJECTS</h5>
          <hr className="line" />
          <h2>Discover Our Recent Projects And Showcases</h2>
        </div>

        <div className="project-carousel">

          <button className="carousel-btn left" onClick={prevSlide}>
            <FiChevronLeft />
          </button>

          <div className="project-slider">
            <div
              className="project-track-box"
              style={{
                transform: `translateX(-${index * 100}%)`,
              }}
            >
              {projectData.map((project) => (
                <div className="project-slide" key={project.id}>
                  <div className="project-item">

                    <img
                      src={project.img}
                      alt={project.title}
                    />

                    <div className="project-content">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
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