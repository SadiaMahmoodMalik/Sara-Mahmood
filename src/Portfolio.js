import React from "react";
import Contact from "./Contact";
import { Link } from "react-router-dom"; // Import Link
import "./styles.css";

function Portfolio() {
  const portfolio = [
    {
      title: " 01",
      imageUrl: "/images/pic1.jpg",
    },
    {
      title: " 02",
      imageUrl: "/images/pic2.jpg",
    },
    {
      title: " 03",
      imageUrl: "/images/pic3.jpg",
    },
    {
      title: " 04",
      imageUrl: "/images/pic4.jpg",
    },
  ];

  const titleStyle = {
    fontSize: "36px", // Adjust the font size as needed
    fontWeight: "bold",
    color: "#736262",
  };

  return (
    <div className="container mt-5">
      <h1>portfolio</h1>
      <div style={{ marginBottom: "20px" }}>
        <h2>sara mahmood</h2>
      </div>
      <div className="row">
        <div className="col-md-4 mb-4 my-links-container">
          {portfolio.slice(0, 2).map((post, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              <Link to={`/portfolio/${index + 1}`} className="portfolio-link">
                <img
                  src={post.imageUrl}
                  alt={`Image for ${post.title}`}
                  width="200"
                  height="180"
                />
                <h5 style={titleStyle}>{post.title}</h5>
              </Link>
            </div>
          ))}
        </div>
        {/* ... */}
        <div className="col-md-4 mb-4 my-links-container">
          {portfolio.slice(2, 4).map((post, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              <Link to={`/portfolio/${index + 3}`} className="portfolio-link">
                <img
                  src={post.imageUrl}
                  alt={`Image for ${post.title}`}
                  width="200"
                  height="180"
                />
                <h5 style={titleStyle}>{post.title}</h5>
              </Link>
            </div>
          ))}
        </div>
        <div className="contact-info">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
