import React, { useState } from "react";
import HeaderComment from "../components/comments/HeaderComment";
import FooterHome from "../components/home/FooterHome";
import "./styles/Comment.css";
import FilterSearch from "../components/home/FilterSearch";
import InputComment from "../components/comments/InputComment";

export default function Comment() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="Home-container">
      <HeaderComment />
      <FilterSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <InputComment />
      <FooterHome />
    </div>
  );
}
