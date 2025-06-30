import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="left-section">
        <div className="explore-dropdown">Explore</div>
        <input type="text" className="search-bar" placeholder="Search...." />
      </div>

      <div className="right-section">
        <a
          href="https://www.nasa.gov/news"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-item"
        >
          News & Events
        </a>
        <a
          href="https://www.nasa.gov/multimedia"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-item"
        >
          Multimedia
        </a>
        <a
          href="https://www.nasa.gov/live"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-item nasa-live"
        >
          Space Habitat+ <span className="live">LIVE</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
