import React from "react";
import "./styles/FilterSearch.css";
import propTypes from "prop-types";
import logosearch from "../../assets/search.png";
import NavFilterPub from "./NavFilterPub";

function FilterSearch({ searchValue, setSearchValue }) {
  return (
    <div className="div-filter-search">
      <div className="filter-search">
        <div className="logosearch">
          <input
            className="inputsearch"
            type="text"
            name="searchbar"
            id="searchbar"
            placeholder="Rechercher"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
          <img src={logosearch} className="logosearch" alt="logosearch" />
        </div>
        <div className="logofilter">
          <NavFilterPub />
        </div>
      </div>
    </div>
  );
}

FilterSearch.propTypes = {
  searchValue: propTypes.string.isRequired,
  setSearchValue: propTypes.func.isRequired,
}.isRequired;

export default FilterSearch;
