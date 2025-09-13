// pages/BlogPost.jsx
import React from "react";
import Navbar from "../shared/Navbar";
import BlogContent from "../components/BlogPost/BlogContent";

const BlogPost = () => {
  return (
    <div className="bg-rich-black min-h-screen">
      <Navbar />
      <BlogContent />
    </div>
  );
};

export default BlogPost;