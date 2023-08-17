import React from "react";
import Contact from "./Contact";
import "./styles.css";
import { queries } from "@testing-library/react";

function blog() {
  const blog = [
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
  };

  return (
    <div className="container mt-5">
      <h1>blogs</h1>
      <div style={{ marginBottom: "20px" }}>
        <h2>sara mahmood</h2>
      </div>
      <div className="row">
        <div className="col-md-4 mb-4">
          {blog.slice(0, 2).map((post, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              <img
                src={post.imageUrl}
                alt={`Image for ${post.title}`}
                width="200"
                height="180"
              />
              <h5 style={titleStyle}>{post.title}</h5>
            </div>
          ))}
        </div>
        <div className="col-md-4 mb-4">
          {blog.slice(2, 4).map((post, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              <img
                src={post.imageUrl}
                alt={`Image for ${post.title}`}
                width="200"
                height="180"
              />
              <h5 style={titleStyle}>{post.title}</h5>
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

export default blog;
