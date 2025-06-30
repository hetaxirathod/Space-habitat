import React from "react";
import "./Footer.css";
import nasaLogo from "./nasa-logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
        
          <p className="footer-mission">
              Space Habitat
          </p>
          <p className="footer-text">
            Space Habitat explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery.
          </p>
          <a href="#" className="footer-link">
            About our's Mission
          </a>
          <a href="#" className="footer-cta">
            Join Us <span>→</span>
          </a>
        </div>

        <div className="footer-middle">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">News & Events</a></li>
            <li><a href="#">Multimedia</a></li>
            <li><a href="#">Space Habita+ <span className="live">LIVE</span></a></li>
            <li><a href="#">Missions</a></li>
          </ul>
          <ul>
            <li><a href="#">Humans in Space</a></li>
            <li><a href="#">Earth & Climate</a></li>
            <li><a href="#">The Solar System</a></li>
            <li><a href="#">The Universe</a></li>
            <li><a href="#">Science</a></li>
          </ul>
          <ul>
            <li><a href="#">Aeronautics</a></li>
            <li><a href="#">Technology</a></li>
            <li><a href="#">Learning Resources</a></li>
            <li><a href="#">About Space Habitat</a></li>
            <li><a href="#">Space Habitat en Español</a></li>
          </ul>
        </div>

        <div className="footer-right">
          <p className="footer-follow">Follow Space Habitat</p>
          <div className="footer-social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
          <a href="#" className="footer-link">
            More Space Habitat Social Accounts
          </a>
          <a href="#" className="footer-link">
            Space Habitat Newsletters
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        
        <p>Team Member Name :
                              <div>Hetaxi Shreya  Prachi  Nikhil  Krunal</div>
                              </p>
        <p>Page Last Updated: March 26, 2025</p>
    
      </div>
      <img src="https://cdn-icons-png.flaticon.com/512/4616/4616271.png" class="chat-boat" ></img>
    </footer>
  );
};

export default Footer;
