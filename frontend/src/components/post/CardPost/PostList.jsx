import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "./PostCard";
import FilterSearch from "../../home/FilterSearch";
import "./styles/PostList.css";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/post`)
      .then((res) => res.data)
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);
  return (
    <div className="containerpostList">
      <div className="filtersearch-postList">
        <FilterSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
      <div className="postList">
        <div className="post-filter">
          {posts
            .filter((post) =>
              searchValue === ""
                ? true
                : post.content.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((post) => (
              <PostCard post={post} key={post.id} />
            ))}
        </div>
      </div>
    </div>
  );
}
