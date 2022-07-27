import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/UserList.css";
import ScrollButton from "../home/ScrollButton";

import User from "./User";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users`, {
        withCredentials: true,
      })
      .then((res) => setUsers(res.data))
      .catch((err) => {
        console.warn(err.response.data.error);
      });
  }, []);

  return (
    <div className="container-user-list">
      <div className="users-pseudo-list">
        {users.map((e) => (
          <User key={e.id} user={e} />
        ))}
        <ScrollButton />
      </div>
    </div>
  );
}

export default UserList;
