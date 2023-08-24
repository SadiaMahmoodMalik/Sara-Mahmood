import React from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams(); 

  return (
    <div>
      {/* Display the content for the specific blog post */}
      <h2>Blog Post {id}</h2>
      {/* ... Other content ... */}
    </div>
  );
}

export default BlogPost;
