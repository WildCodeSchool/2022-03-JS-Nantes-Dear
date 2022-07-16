import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles/PostList.css";

export default function PostList() {
  const [/* posts */ setPosts] = useState([]);

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
      <div className="post" />
    </div>
  );
}
