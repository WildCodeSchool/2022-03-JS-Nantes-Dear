import axios from "axios";
import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import "./styles/PostList.css";

export default function PostList() {
  // const backgroundColorList = [
  //   "#303364",
  //   "#EC4D4D",
  //   "#A7D1CD",
  //   "#F8C053",
  //   "#A098C9",
  // ];
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
        {posts.map((el) => (
          <PostCard key={el.id} post={el} />
        ))}
      </div>
    </div>
  );
}
