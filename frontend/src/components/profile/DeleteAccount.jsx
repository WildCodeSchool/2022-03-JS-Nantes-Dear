import { React, useParams } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ButtonDeleteAccount from "./ButtonDeleteAccount";

function DeleteAccount() {
  const handleDelete = () => {
    const { userId } = useParams();
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/useraccount/${userId}`)
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
        <ButtonDeleteAccount handleDelete={handleDelete} />
      </Link>
    </div>
  );
}

export default DeleteAccount;
