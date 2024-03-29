import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../post/CardPost/PostCard";
import "./styles/PostListAdmin.css";

export default function PostListAdmin() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/post`)
      .then((res) => setPosts(res.data))
      .catch((err) => {
        console.warn(err.response.data.error);
      });
  }, []);
  return (
    <div className="postList">
      <div className="post">
        {posts.map((post) => (
          <PostCard key={post.id} post={post.id} />
        ))}
      </div>
    </div>
  );
}
