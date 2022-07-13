import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/LoginAdmin.css";
import axios from "axios";
import swal from "sweetalert";
import ButtonConnexion from "../components/admin/ButtonConnexion";
import logoCircle from "../assets/logo-dear-rond.png";

function LoginAdmin() {
  const [pseudoAdmin, setPseudoAdmin] = useState("");
  const [passwordAdmin, setPasswordAdmin] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pseudoAdmin || !passwordAdmin) {
      swal({
        title: "Error!",
        text: "Merci de renseigner votre pseudo ET votre email",
        icon: "error",
        confirmButtonText: "Cool",
      });
    } else {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/users/login`,
          { pseudoAdmin, passwordAdmin },
          { withCredentials: true }
        )
        // eslint-disable-next-line no-restricted-syntax
        .then((response) => console.log(response.data))
        .catch((err) => {
          // alert(err.response.data.error);
          console.error(err);
        });
    }
  };

  return (
    <div className="loginadmin">
      <div className="admin-login-top">
        <h1>Bienvenue Aline et Lila</h1>
        <img
          className="logo-admin-rond-login"
          src={logoCircle}
          alt="logo Dear rond"
        />
      </div>
      <div className="formloginadmin">
        <form className="form-login-admin">
          <input
            className="inputPseudoAdmin"
            type="text"
            name="pseudo"
            id="pseudo"
            placeholder="Lila ou Aline"
            value={pseudoAdmin}
            onChange={(e) => setPseudoAdmin(e.target.value)}
          />
          <input
            className="inputLogPasswordAdmin"
            type="password"
            name="password"
            id="password"
            placeholder="Mot de passe"
            value={passwordAdmin}
            onChange={(e) => setPasswordAdmin(e.target.value)}
          />
          <div className="buttoncontinueadmin">
            <Link to="/accountadmin">
              <ButtonConnexion handleSubmit={handleSubmit} />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginAdmin;
