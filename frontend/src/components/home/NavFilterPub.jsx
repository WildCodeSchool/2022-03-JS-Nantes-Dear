import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/NavFilterPub.css";
import filter from "../../assets/filter-blue.png";
import FilterCategories from "./FilterCategories";
import PostCard from "../post/CardPost/PostCard";

export default function NavFilterPub() {
  const [inactive, setInactive] = useState(true);
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);

  const handleShowNav = () => {
    setInactive(!inactive);
  };
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/category`)
      .then((res) => res.data)
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  return (
    <nav className="menuResearch">
      <div className="filter-container">
        <button
          className="navfilter"
          type="button"
          style={{ cursor: "pointer" }}
          onClick={handleShowNav}
        >
          <img src={filter} className="logofilter" alt="filter" />
        </button>
      </div>
      <div className={`categorie-container ${inactive ? "inactive" : ""}`}>
        <h4> Catégories </h4>
        <div className="checkbox-container">
          {categories.map((e) => (
            <FilterCategories key={e.id} category={e} />
          ))}
        </div>
        <div className="confirm-filter-container">
          <button
            id="confirmFilter"
            type="button"
            style={{ cursor: "pointer" }}
            onClick={handleShowNav}
          >
            VALIDER LES FILTRES
          </button>
          {posts
            .filter((post) =>
              categories === "" ? true : post.content.includes(setPosts())
            )
            .map((post) => (
              <PostCard post={post} key={post.id} />
            ))}
        </div>
      </div>
    </nav>
  );
}
