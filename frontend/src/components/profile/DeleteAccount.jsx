import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ButtonDeleteAccount from "./ButtonDeleteAccount";

function DeleteAccount() {
  const handleDelete = (event) => {
    event.preventDefault();
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/:id"`)
      .then(() => {
        alert("Your account has been successfully deleted");
      })
      .catch((err) => {
        if (err.response.status === 401) {
          alert("Error");
        }
      });
  };

  return (
    <div>
      <Link to="/">
        <ButtonDeleteAccount handleSubmit={handleDelete} />
      </Link>
    </div>
  );
}

export default DeleteAccount;
