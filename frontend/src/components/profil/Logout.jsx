/* eslint-disable no-alert */
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ButtonLogout from "./ButtonLogout";

function Logout() {
  const handleLogout = (event) => {
    event.preventDefault();
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/logout`, {
        withCredentials: true,
      })
      .then(() => {
        alert("Successfully logged out");
      })
      .catch((err) => {
        if (err.response.status === 401) {
          alert("You're not authenticated");
        }
      });
  };

  return (
    <div>
      <Link to="/">
        <ButtonLogout handleSubmit={handleLogout} />
      </Link>
    </div>
  );
}

export default Logout;
