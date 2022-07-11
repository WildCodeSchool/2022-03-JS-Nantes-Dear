import React, { useState, useEffect } from "react";
import "./styles/FilterSearch.css";
import logosearch from "../../assets/search.png";
import NavFilterPub from "./NavFilterPub";

function FilterSearch() {
  const [datas, setDatas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/posts`)
      .then((response) => response.json())
      .then((json) => setDatas(json));
  }, []);

  const handleSearchTerm = (e) => {
    const { value } = e.target;
    // eslint-disable-next-line no-unused-expressions
    value.length > 2 && setSearchTerm(value);
  };

  return (
    <div className="div-filter-search">
      <div className="filter-search">
        <div className="logosearch">
          <img src={logosearch} className="logosearch" alt="logosearch" />
          <input
            type="text"
            name="searchbar"
            id="searchbar"
            placeholder="Rechercher"
            onChange={handleSearchTerm}
          />
        </div>
        <div className="logofilter">
          <NavFilterPub />
        </div>
      </div>
      <div className="search-result">
        {datas
          .filter((val) => {
            return val.post.toLowerCase().includes(searchTerm.toLowerCase());
          })
          .map((val) => {
            return (
              <div className="search-result" key={val.id}>
                {val.post}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default FilterSearch;
