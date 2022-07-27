import React from "react";
import propTypes from "prop-types";
import "./styles/FilterUsers.css";

function FilterUsers({ searchUser, setSearchUser }) {
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
            value={searchUser}
            onChange={(event) => setSearchUser(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

FilterUsers.propTypes = {
  searchUser: propTypes.string.isRequired,
  setSearchuser: propTypes.func.isRequired,
}.isRequired;

export default FilterUsers;
