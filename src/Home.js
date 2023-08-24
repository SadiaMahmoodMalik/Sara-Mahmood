import React, { useState } from "react";
import Contact from "./Contact";
import { Link } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import "./styles.css";

function Home() {
  // Initialize PDF.js worker
  pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  // State to manage PDF URL
  const [pdfUrl, setPdfUrl] = useState(null);

  const openPdf = (url) => {
    setPdfUrl(url);
  };

  const generateBoxes = () => {
    const boxes = [];
    const pdfUrls = [
      "/pdfs/pdf1.pdf",
      null, // Box 2 - No PDF
      null, // Box 3 - No PDF
      "/pdfs/pdf2.pdf",
      "/pdfs/pdf3.pdf",
      null, // Box 6 - No PDF
      "/pdfs/pdf4.pdf",
      "/pdfs/pdf5.pdf",
      null, // Box 9 - No PDF
    ];

    for (let i = 0; i < 9; i++) {
      boxes.push(
        <div className="col-md-4" key={i}>
          {pdfUrls[i] ? (
            <Link to="/pdf-viewer" onClick={() => openPdf(pdfUrls[i])}>
              <div className="boxes"></div>
            </Link>
          ) : (
            <div className="boxes"></div>
          )}
        </div>
      );
    }
    return boxes;
  };

  return (
    <div className="container mt-5">
      <div style={{ marginBottom: "20px" }}>
        <h1>
          Sara <br /> Mahmood
        </h1>
      </div>

      <div className="row">
        <div className="col-md-8">
          <div className="response-box">
            <div className="row boxed">{generateBoxes()}</div>
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
