import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/Users.css";
import ButtonRechercher from "./ButtonRechercher";
import ScrollButton from "../home/ScrollButton";
import UserList from "./UserList";
import FilterUsers from "./FilterUsers";

function Users() {
  const [users, setUsers] = useState([]);
  const [searchUser, setSearchUser] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users`)
      .then((res) => res.data)
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  return (
    <div className="container-page-users">
      <ScrollButton />
      <div className="tilte-userspage">
        <h1 className="tilte-users-page">Les utilisateurs</h1>
      </div>
      <div className="subtilte-userspage">
        <h1 className="subtilteuserspage">Les utilisateurs DEAR</h1>
      </div>
      <div className="filter-search-users">
        <FilterUsers searchUser={searchUser} setSearchUser={setSearchUser} />
        <ButtonRechercher />
      </div>
      <div className="search-result-users">
        {users
          .filter((user) =>
            searchUser === ""
              ? true
              : user.pseudo.toLowerCase().includes(searchUser.toLowerCase())
          )
          .map((user) => (
            <UserList user={user} key={users.id} />
          ))}
      </div>
    </div>
  );
}

export default Users;
