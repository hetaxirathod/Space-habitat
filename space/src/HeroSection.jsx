import React from "react";
import "./HeroSection.css";
import backgroundImage from "./Herosection-1.gif";

const HeroSection = () => {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="content">
        <h1>Full-Stream Ahead</h1>
        <p>
          This summer, Space Habitat will take its next giant leap by cutting the cord
          and going full-stream ahead for the benefit of all. Watch on-demand
          launch coverage, inspiring stories, and exploration for the next
          generation on one platform, Space Habitat+.
        </p>

        {/* Change button to a link */}
        <a
          href="https://www.nasa.gov/news/all-news/"  // ← Replace with your real news/article link
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          The Universe at Your Fingertips
        </a>
      </div>

      <div className="series-container">
        <div className="series-item">
          <span className="series-title">Space Habitat+ SERIES</span>
          <span className="series-name">Other Worlds</span>
          <span className="arrow">→</span>
        </div>
        <div className="series-item">
          <span className="series-title">Space Habitat+ SERIES</span>
          <span className="series-name">Space Out</span>
          <span className="arrow">→</span>
        </div>
        <div className="series-item">
          <span className="series-title">Space Habitat+ SERIES</span>
          <span className="series-name">The Color of Space</span>
          <span className="arrow">→</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
