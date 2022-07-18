import React, { useState } from "react";
import "./styles/Login.css";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import ButtonReturn from "../components/home/ButtonReturn";
import ButtonContinue from "../components/registration/ButtonContinue";

function Login() {
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pseudo || !password) {
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
          { pseudo, password },
          { withCredentials: true }
        )
        .then(() => navigate("/connection/bonjour", { replace: true }))
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div className="login">
      <div className="buttonreturnlogin">
        <ButtonReturn />
      </div>
      <div className="formlogin">
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
          <ButtonContinue handleSubmit={handleSubmit} />
        </form>
      </div>
    </div>
  );
}

export default Login;
