import React from "react";
import Contact from "./Contact";
import "./styles.css";

function About() {
  return (
    <div className="container mt-5">
      <div style={{ marginBottom: "20px" }}>
        <h1>about me</h1>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2>sara mahmood</h2>
      </div>

      <div className="row">
        <div className="col-md-8">
          <div className="responsive-box">
            <p>Hey there, I'm Sara Mahmood! 🌟</p>
            <p>
              I'm all about bringing awesome designs to life! 🎨✨ Currently
              diving into the world of interior design as a student, I'm
              absolutely smitten by how spaces can tell stories and create
              vibes. 🏠❤️
            </p>
            <p>
              And guess what? Graphic design totally has my heart too! 🎉🎨
              Playing with colors, shapes, and ideas to make visuals that pop is
              my jam.
            </p>
            <p>
              What makes me tick? Blending my interior flair with graphics –
              it's like giving a sprinkle of magic to everything I do. ✨
            </p>
            <p>
              Every project is a new adventure, a chance to learn, grow, and add
              some creative flair. Let's make spaces more awesome and visuals
              more captivating, one design at a time! 🚀🎉
            </p>
          </div>
        </div>
      </div>
      <div className="contact-info">
        <Contact />
      </div>
    </div>
  );
}

export default About;
