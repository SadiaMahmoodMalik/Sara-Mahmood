import React from "react";
import { useParams } from "react-router-dom";

function PortfolioItem() {
  const { id } = useParams(); // Get the portfolio item ID from the URL

  // You can use the portfolio item ID to fetch and display the specific content here

  return (
    <div>
      {/* Display the content for the specific portfolio item */}
      <h2>Portfolio Item {id}</h2>
      {/* ... Other content ... */}
    </div>
  );
}

export default PortfolioItem;
