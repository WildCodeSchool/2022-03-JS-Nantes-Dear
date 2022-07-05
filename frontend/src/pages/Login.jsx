import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Login.css";
import axios from "axios";
import Swal from "sweetalert";
import ButtonReturn from "../components/home/ButtonReturn";
import ButtonContinue from "../components/registration/ButtonContinue";

function Login() {
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pseudo || !password) {
      Swal.fire({
        title: "Error!",
        text: "Merci de spécifier votre pseudo Et votre email",
        icon: "error",
        confirmButtonText: "Cool",
      });
    } else {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/users/login`,
          { pseudo, password },
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
    <div className="login">
      <ButtonReturn />
      <form className="form-login">
        <input
          className="inputPseudo"
          type="text"
          name="pseudo"
          id="pseudo"
          placeholder="supertomate27"
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
        />
        <input
          className="inputLogPassword"
          type="password"
          name="password"
          id="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to="/connection/bonjour">
          <ButtonContinue handleSubmit={handleSubmit} />
        </Link>
      </form>
    </div>
  );
}

export default Login;
