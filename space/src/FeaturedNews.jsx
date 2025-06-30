import React from "react";
import "./FeaturedNews.css";

import image1 from "./image-1.webp";
import image2 from "./image-2.webp";
import image3 from "./image-3.webp";
import image4 from "./image-4.webp";
import image5 from "./image-5.webp";
import image6 from "./image-6.webp";
import image7 from "./image-7.webp";
import image8 from "./image-8.webp";

const newsArticles = [
  {
    type: "ARTICLE",
    time: "4 MIN READ",
    title: "Space Habitat Citizen Scientists Spot Object Moving 1 Million Miles Per Hour",
    image: image1,
    url: "https://science.nasa.gov/universe/astrophysics/citizen-science-spotting-fast-objects",
  },
  {
    type: "NEWS RELEASE",
    time: "2 MIN READ",
    title: "Space Habitat to Provide Coverage of Progress 89 Launch, Space Station Docking",
    image: image2,
    url: "https://blogs.nasa.gov/spacestation/",
  },
  {
    type: "IMAGE ARTICLE",
    time: "5 MIN READ",
    title: "Space Habitat Telescopes Work Out Black Hole’s Snack Schedule",
    image: image3,
    url: "https://www.esa.int/Science_Exploration/Space_Science/Black_holes",
  },
  {
    type: "ARTICLE",
    time: "9 MIN READ",
    title: "Space Habitat Selects 5 New Roman Technology Fellows in Astrophysics",
    image: image4,
    url: "https://roman.gsfc.nasa.gov/",
  },
  {
    type: "ARTICLE",
    time: "5 MIN READ",
    title: "Space Habitat Demonstrates ‘Ultra-Cool’ Quantum Sensor for First Time in Space",
    image: image5,
    url: "https://www.nist.gov/news-events/news/2023/01/quantum-sensors-space-experiments",
  },
  {
    type: "ARTICLE",
    time: "6 MIN READ",
    title: "Primary Instrument for Roman Space Telescope Arrives at NASA Goddard",
    image: image6,
    url: "https://www.nasa.gov/feature/goddard/2024/roman-space-telescope-main-instrument-arrives-at-nasa",
  },
  {
    type: "ARTICLE",
    time: "3 MIN READ",
    title: "Space Habitat’s X-59 Progresses Through Tests on the Path to Flight",
    image: image7,
    url: "https://www.nasa.gov/mission_pages/lowboom/index.html",
  },
  {
    type: "ARTICLE",
    time: "6 MIN READ",
    title: "What’s Up: August 2024 Skywatching Tips from Space Habitat",
    image: image8,
    url: "https://solarsystem.nasa.gov/skywatching/home/",
  },
];

const FeaturedNews = () => {
  return (
    <section className="featured-news">
      <div className="header">
        <h2>Featured News</h2>
        <a
          href="https://www.nasa.gov/news"
          target="_blank"
          rel="noopener noreferrer"
          className="more-news-link"
        >
          More Space Habitat News <span>→</span>
        </a>
      </div>

      {/* Top Section */}
      <div className="news-grid">
        <div className="main-news">
          <a
            href={newsArticles[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="news-card"
          >
            <img src={newsArticles[0].image} alt={newsArticles[0].title} />
            <div className="news-content">
              <span className="news-type">{newsArticles[0].type}</span>
              <span className="news-time">{newsArticles[0].time}</span>
              <h3>{newsArticles[0].title}</h3>
            </div>
          </a>
        </div>

        <div className="side-news">
          {newsArticles.slice(1, 3).map((article, index) => (
            <a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="news-card small"
            >
              <img src={article.image} alt={article.title} />
              <div className="news-content">
                <span className="news-type">{article.type}</span>
                <span className="news-time">{article.time}</span>
                <h3>{article.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom News */}
      <div className="bottom-news">
        {newsArticles.slice(3).map((article, index) => (
          <a
            key={index}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="news-card bottom-card"
          >
            <img src={article.image} alt={article.title} />
            <div className="news-content">
              <span className="news-type">{article.type}</span>
              <span className="news-time">{article.time}</span>
              <h3>{article.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default FeaturedNews;
