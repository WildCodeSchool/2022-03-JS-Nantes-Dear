import React from "react";
import PostList from "../post/CardPost/PostList";
import ScrollButton from "../home/ScrollButton";
import "./styles/FilActu.css";

function FilActu() {
  return (
    <div className="contain-filactu">
      <div className="title-filactu">
        <h1 className="title-fil-actu">Le fil d'actualités</h1>
      </div>
      <div className="filactu-posts">
        <ScrollButton />
        <PostList />
      </div>
    </div>
  );
}

export default FilActu;
