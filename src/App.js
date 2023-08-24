import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Blogs from "./Blogs";
import Contact from "./Contact";
import BlogPost from "./BlogPost"; // Create a BlogPost component for individual blog posts
import PdfViewer from "./PdfViewer"; // Your PDF viewer component
import { Document, Page, pdfjs } from "react-pdf";
import PortfolioItem from "./PortfolioItem";

function App() {
  const [pdfUrl, setPdfUrl] = useState(null);
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/pdf-viewer" element={<PdfViewer pdfUrl={pdfUrl} />} />
          <Route path="/portfolio/:id" element={<PortfolioItem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
