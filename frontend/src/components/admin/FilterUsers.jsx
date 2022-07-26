import React from "react";
import "./styles/FilterUsers.css";

function FilterUsers(props) {
  // eslint-disable-next-line react/prop-types
  const { searchValue, setSearchValue } = props;

  return (
    <div className="div-filter-users">
      <div className="filter-users">
        <div className="filtersearchusers">
          <input
            className="inputsearchusers"
            type="text"
            name="searchbar"
            id="searchbar"
            placeholder="Rechercher par nom d'utilisateur"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default FilterUsers;
