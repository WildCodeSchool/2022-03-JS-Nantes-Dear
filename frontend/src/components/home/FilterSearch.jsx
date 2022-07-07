import React, { useState, useEffect } from "react";
import "./styles/FilterSearch.css";
import logofilter from "../../assets/filter-blue.png";
import logosearch from "../../assets/search.png";

function FilterSearch() {
  const [datas, setDatas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
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
          <img src={logofilter} className="logofilter" alt="logofilter" />
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
