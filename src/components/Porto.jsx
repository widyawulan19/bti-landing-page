import React, { useRef, useState, useEffect } from "react";
import { portfolioData } from "../data/portfolioData";
// import { projectData } from "../data/projectData";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import "../styles/portfolio.css";

function Porto() {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);

  const slides = [
    portfolioData[portfolioData.length - 1],
    ...portfolioData,
    portfolioData[0],
  ];

  const [activeIndex, setActiveIndex] = useState(1);
  const autoSlideDelay = 4500;

  useEffect(() => {
    const container = scrollRef.current;
    container.scrollLeft = container.offsetWidth;
  }, []);

  const scrollToIndex = (index, smooth = true) => {
    const container = scrollRef.current;
    container.scrollTo({
      left: container.offsetWidth * index,
      behavior: smooth ? "smooth" : "auto",
    });
  };

  const handleNext = () => {
    scrollToIndex(activeIndex + 1);
    setActiveIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    scrollToIndex(activeIndex - 1);
    setActiveIndex((prev) => prev - 1);
  };

  const handleScrollEnd = () => {
    const total = portfolioData.length;

    if (activeIndex === total + 1) {
      setActiveIndex(1);
      scrollToIndex(1, false);
    }

    if (activeIndex === 0) {
      setActiveIndex(total);
      scrollToIndex(total, false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(handleScrollEnd, 400);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [activeIndex]);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      handleNext();
    }, autoSlideDelay);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <div
      className="portfolio-wrapper premium"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      <button className="chevron chevron-left" onClick={handlePrev}>
        <IoChevronBack />
      </button>

      <div className="portfolio-carousel" ref={scrollRef}>
        {slides.map((item, index) => (
          <div
            key={index}
            className={`portfolio-card ${
              index === activeIndex ? "active" : ""
            }`}
          >
            <h2>{item.title}</h2>
            <h4>{item.category}</h4>
            <p>{item.description}</p>
            <button className="portfolio-cta">{item.cta}</button>
          </div>
        ))}
      </div>

      <button className="chevron chevron-right" onClick={handleNext}>
        <IoChevronForward />
      </button>

      {/* Gradient Edges */}
      <div className="fade-left"></div>
      <div className="fade-right"></div>
    </div>
  );
}

export default Porto;