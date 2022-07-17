import React from "react";
import PostText from "../components/post/PostText";

import "./styles/AddPost.css";

export default function AddPost() {
  return (
    <div className="div-bloc-post">
      <div className="/bloc-edit-post">
        <PostText />
      </div>
    </div>
  );
}
