import { React, useParams } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import ButtonDeleteAccount from "./ButtonDeleteAccount";

function DeleteAccount() {
  const handleDelete = () => {
    const { userId } = useParams();
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/useraccount/${userId}`)
      .then(() => {
        swal({
          title: "Bye !",
          text: "Ton compte a bien été supprimé.",
          icon: "success",
          confirmButtonText: "Bien reçu",
        });
      })
      .catch((err) => {
        if (err.response.status === 401) {
          swal({
            title: "Erreur !",
            text: "Une erreur s'est produite lors de la suppression de ton compte.",
            icon: "error",
            confirmButtonText: "OK",
          });
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
