import React from "react";
import Contact from "./Contact";
import "./styles.css";

function Home() {
  return (
    <div className="container mt-5">
      <div style={{ marginBottom: "20px" }}>
        <h1>Sara <br/> Mahmood</h1>
      </div>

      <div className="row">
        <div className="col-md-8">
          <div className="response-box">
            <div class="row boxed">
              <div class="col-md-4">
                <div class="boxes"></div>
              </div>
              <div class="col-md-4">
                
                  <img
                    src="/images/pic1.jpg"
                    alt="Image"
                    className="home-img"
                  />
                
              </div>
              <div class="col-md-4">
                <img src="/images/pic2.jpg" alt="Image" className="home-img" />
              </div>
            </div>
            <div class="row boxed">
              <div class="col-md-4">
                <img src="/images/pic3.jpg" alt="Image" className="home-img" />
              </div>
              <div class="col-md-4">
                <img src="/images/pic4.jpg" alt="Image" className="home-img" />
              </div>
              <div class="col-md-4">
                <div class="boxes"></div>
              </div>
            </div>
            <div class="row boxed">
              <div class="col-md-4">
                <div class="boxes"></div>
              </div>
              <div class="col-md-4">
                <div class="boxes"></div>
              </div>
              <div class="col-md-4">
                <div class="boxes"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-info">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
