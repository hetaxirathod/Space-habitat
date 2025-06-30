import React from "react";
import "./NasaTopics.css";
import missionsImage from "./rocket.jpg";
import humansInSpaceImage from "./human.jpg";
import climateChangeImage from "./climate.jpeg";
import solarSystemImage from "./solar.webp";
import galaxyImage from "./galaxy.jpeg";
import earthImage from "./earth.jpeg";
import marsImage from "./mars.jpeg";
import moonImage from "./moonjpg.jpg";

const NasaTopics = () => {
  return (
    <section className="nasa-topics">
      <h2>More Topics from Space Habitat</h2>
      <div className="topics-grid">
        {/* Top Row */}
        <div className="topic-row">
          <a
            href="https://www.nasa.gov/missions/"
            target="_blank"
            rel="noopener noreferrer"
            className="topic-card"
          >
            <img src={missionsImage} alt="Missions" />
            <div className="topic-info">
              <h3>Missions</h3>
              <span className="arrow">→</span>
            </div>
          </a>

          <a
            href="https://www.nasa.gov/humans-in-space/"
            target="_blank"
            rel="noopener noreferrer"
            className="topic-card"
          >
            <img src={humansInSpaceImage} alt="Humans In Space" />
            <div className="topic-info">
              <h3>Humans In Space</h3>
              <span className="arrow">→</span>
            </div>
          </a>

          <a
            href="https://climate.nasa.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="topic-card"
          >
            <img src={climateChangeImage} alt="Climate Change" />
            <div className="topic-info">
              <h3>Climate Change</h3>
              <span className="arrow">→</span>
            </div>
          </a>

          <a
            href="https://solarsystem.nasa.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="topic-card"
          >
            <img src={solarSystemImage} alt="Our Solar System" />
            <div className="topic-info">
              <h3>Our Solar System</h3>
              <span className="arrow">→</span>
            </div>
          </a>
        </div>

        {/* Bottom Row */}
        <div className="topic-row">
          <a
            href="https://science.nasa.gov/astrophysics/focus-areas/what-is-the-universe/"
            target="_blank"
            rel="noopener noreferrer"
            className="topic-card"
          >
            <img src={galaxyImage} alt="Galaxy" />
            <div className="topic-info">
              <h3>Galaxy</h3>
              <span className="arrow">→</span>
            </div>
          </a>

          <a
            href="https://science.nasa.gov/earth/"
            target="_blank"
            rel="noopener noreferrer"
            className="topic-card"
          >
            <img src={earthImage} alt="Earth" />
            <div className="topic-info">
              <h3>Earth</h3>
              <span className="arrow">→</span>
            </div>
          </a>

          <a
            href="https://mars.nasa.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="topic-card"
          >
            <img src={marsImage} alt="Mars" />
            <div className="topic-info">
              <h3>Mars</h3>
              <span className="arrow">→</span>
            </div>
          </a>

          <a
            href="https://moon.nasa.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="topic-card"
          >
            <img src={moonImage} alt="Moon" />
            <div className="topic-info">
              <h3>Moon</h3>
              <span className="arrow">→</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NasaTopics;
