import React from "react";
import "./blogs.style.css";
import BlogCardList from "../Blog-Card-List/blog-card-list.component";
import Footer from "../Footer/Footer";
import Podcast from "../Podcast/podcast.component";

const Blogs = () => {
  return (
    <div>
      <div className="blog-hero-heading">Blogs</div>
      <BlogCardList />
      <Podcast />
    </div>
  );
};

export default Blogs;
