import React from "react";
import { Document, Page, pdfjs } from "react-pdf";

function PdfViewer({ pdfUrl }) {
  pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  return (
    <div className="pdf-container">
      <Document file={pdfUrl}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

export default PdfViewer;
