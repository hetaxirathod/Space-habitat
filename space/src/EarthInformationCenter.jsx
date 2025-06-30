import React from "react";
import "./EarthInformationCenter.css";
import earthImage from "./Earthcenter.webp";

const EarthInformationCenter = () => {
  return (
    <section
      className="earth-information-center"
      style={{ backgroundImage: `url(${earthImage})` }}
    >
      <div className="content">
        <h1>Earth Information Center</h1>
        <p>
          For more than 50 years, Space Habitat satellites have provided data on Earth's
          land, water, air, temperature, and climate. Space Habitat's Earth Information
          Center allows visitors to see how our planet is changing in six key
          areas: sea level rise and coastal impacts, health and air quality,
          wildfires, greenhouse gases, sustainable energy, and agriculture.
        </p>

        <a
          href="https://earth.gov/stories/immersive_earth"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          Start Exploring <span>→</span>
        </a>
      </div>
    </section>
  );
};

export default EarthInformationCenter;
