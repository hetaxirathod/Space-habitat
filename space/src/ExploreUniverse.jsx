import React from "react";
import "./ExploreUniverse.css";
import universeImage from "./exploreuniverse.png";

const ExploreUniverse = () => {
  return (
    <section
      className="explore-universe"
      style={{ backgroundImage: `url(${universeImage})` }}
    >
      <div className="content">
        <h1>Explore the Universe from your Inbox</h1>
        <p>
          Stay up-to-date on the latest news from Space Habitat—from Earth to the Moon,
          the Solar System and beyond. We will never share your email address.{" "}
          <a
            href="https://www.nasa.gov/about/highlights/HP_Privacy.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </p>

        <a
          href="https://www.cnbctv18.com/india/science/want-to-go-to-space-blue-origin-sera-reality-tv-show-offers-indian-citizens-a-chance-how-to-apply-19470919.htm"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          Sign Up <span>→</span>
        </a>
      </div>
    </section>
  );
};

export default ExploreUniverse;
