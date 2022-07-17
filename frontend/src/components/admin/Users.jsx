import React, { useState, useEffect } from "react";
import "./styles/User.css";
import ButtonRechercher from "./ButtonRechercher";
import UserList from "./UserList";

function Users() {
  const [datas, setDatas] = useState([]);
  const [searchUsers, setSearchUsers] = useState("");
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/users`)
      .then((response) => response.json())
      .then((json) => setDatas(json));
  }, []);

  const handleSearchUsers = (e) => {
    const { value } = e.target;
    // eslint-disable-next-line no-unused-expressions
    value.length > 2 && setSearchUsers(value);
  };

  return (
    <div className="container-page-users">
      <div className="tilte-userspage">
        <h1 className="tilte-users-page">Les utilisateurs</h1>
      </div>
      <div className="subtilte-userspage">
        <h1 className="subtilteuserspage">Les utilisateurs DEAR</h1>
      </div>
      <div className="filter-search-users">
        <input
          className="inputsearchusers"
          type="text"
          name="searchbar"
          id="searchbar"
          placeholder="Recherche utillisateurs"
          onChange={handleSearchUsers}
        />
        <ButtonRechercher />
      </div>
      <div className="search-result-users">
        {datas
          .filter((val) => {
            return val.post.toLowerCase().includes(searchUsers.toLowerCase());
          })
          .map((val) => {
            return (
              <div className="search-result-users" key={val.id}>
                {val.post}
              </div>
            );
          })}
      </div>
      <div className="users-list">
        {datas.map((user) => (
          <UserList pseudo={user.pseudo} />
        ))}
      </div>
      <div className="users-list-test">
        <UserList />
      </div>
    </div>
  );
}

export default Users;
