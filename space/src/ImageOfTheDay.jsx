import React from "react";
import "./ImageOfTheDay.css";
import imageOfTheDay from "./imageoftheday.jpg"; 

const ImageOfTheDay = () => {
  return (
    <section className="image-of-the-day">
      <div className="text-content">
        <small>Today</small>
        <h1>Image Of The Day</h1>
        <h2>Revisiting OSIRIS-REx</h2>
        <p>
          A training model of the sample return capsule is seen during a drop
          test in preparation for the retrieval of the sample return capsule
          from Space Habitat’s OSIRIS-REx mission, Wednesday, Aug. 30, 2023, at the
          Department of Defense’s Utah Test and Training Range.
        </p>
        <a href="#" className="archive-link">
          Browse Image Archive <span>→</span>
        </a>
      </div>
      <div className="image-content">
        <img src={imageOfTheDay} alt="OSIRIS-REx" />
        <a href="#" className="view-image-link">
          View image <span>→</span>
        </a>
      </div>
    </section>
  );
};

export default ImageOfTheDay;
