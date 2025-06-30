import React from "react";
import "./NasaImagesGallery.css";

import birdsImage1 from "./Nasaimage/bird1.jpg";
import birdsImage2 from "./Nasaimage/bird2.jpg";
import birdsImage3 from "./Nasaimage/bird3.jpg";
import reptilesImage1 from "./Nasaimage/reptile1.jpg";
import reptilesImage2 from "./Nasaimage/reptile2.jpg";
import reptilesImage3 from "./Nasaimage/reptile3.jpg";
import mammalsImage1 from "./Nasaimage/mamma1.jpg";
import mammalsImage2 from "./Nasaimage/mamma2.jpg";
import mammalsImage3 from "./Nasaimage/mamma3.jpg";

const NasaImagesGallery = () => {
  return (
    <section className="nasa-images-gallery">
      <h2>More Space Habitat Images</h2>
      <div className="gallery-container">
        {/* Wildlife Birds Gallery */}
        <div className="gallery-item">
          <div className="images-grid">
            <img src={birdsImage1} alt="Birds" />
            <img src={birdsImage2} alt="Birds" />
            <img src={birdsImage3} alt="Birds" />
          </div>
          <h3>Wildlife Birds Gallery</h3>
          <p>17 Images</p>
        </div>

        {/* Wildlife Reptiles Gallery */}
        <div className="gallery-item">
          <div className="images-grid">
            <img src={reptilesImage1} alt="Reptiles" />
            <img src={reptilesImage2} alt="Reptiles" />
            <img src={reptilesImage3} alt="Reptiles" />
          </div>
          <h3>Wildlife Reptiles Gallery</h3>
          <p>16 Images</p>
        </div>

        {/* Wildlife Mammals Gallery */}
        <div className="gallery-item">
          <div className="images-grid">
            <img src={mammalsImage1} alt="Mammals" />
            <img src={mammalsImage2} alt="Mammals" />
            <img src={mammalsImage3} alt="Mammals" />
          </div>
          <h3>Wildlife Mammals Gallery</h3>
          <p>18 Images</p>
        </div>
      </div>
    </section>
  );
};

export default NasaImagesGallery;
