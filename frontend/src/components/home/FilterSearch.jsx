import React from "react";
import "./styles/FilterSearch.css";
import logofilter from "../../assets/filter-blue.png";
import logosearch from "../../assets/search.png";

export default function FilterSearch() {
  return (
    <div className="div-filter-search">
      <div className="filter-search">
        <div className="logosearch">
          <img src={logosearch} className="logosearch" alt="logosearch" />
        </div>
        <div className="logofilter">
          <img src={logofilter} className="logofilter" alt="logofilter" />
        </div>
      </div>
    </div>
  );
}
