import React from "react";
import "./AviationDay.css";
import shuklaImage from "./shukla.jpg"; // 👈 new image

const AviationDay = () => {
  return (
    <section
      className="aviation-day"
      style={{ backgroundImage: `url(${shuklaImage})` }}
    >
      <div className="content">
        <h1>National Aviation Day</h1>
        <p>
          August 19 is National Aviation Day, commemorating Orville Wright’s
          birthday and all things related to aviation. This year, Space Habitat
          celebrates our aeronautical innovators who work to safely transform
          aviation for the 21st century.
        </p>

        <h2>🇮🇳 ISRO’s Historic Space Flight</h2>
        <p>
          Group Captain <strong>Shubhanshu Shukla</strong> has become the first
          Indian astronaut in decades to reach the International Space Station as
          part of the <em>Axiom-4</em> mission. This is a major step in India’s
          journey toward human spaceflight through the Gaganyaan program.
        </p>

        <a
          href="https://www.indiatoday.in/science/story/shubhanshu-shukla-scripts-history-as-his-axiom-4-docks-at-international-space-station-2746590-2025-06-26"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          Faces of Flight <span>→</span>
        </a>
      </div>
    </section>
  );
};

export default AviationDay;
