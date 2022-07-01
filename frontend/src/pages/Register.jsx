import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Register.css";
import axios from "axios";
import Swal from "sweetalert2";
import ButtonContinue from "../components/registration/ButtonContinue";
import ButtonReturn from "../components/home/ButtonReturn";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passwordverified, setPasswordVerified] = useState("");
  const role = "ROLE_USER";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !passwordverified) {
      Swal.fire({
        title: "Error!",
        text: "Merci de renseigner tous les champs",
        icon: "error",
        confirmButtonText: "Cool",
      });
    } else if (password !== passwordverified) {
      Swal.fire({
        title: "Error!",
        text: "Les mots de passe sont différents",
        icon: "error",
        confirmButtonText: "Cool",
      });
    } else {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/users/register`,
          { email, password, role },

          { withCredentials: true }
        )
        // eslint-disable-next-line no-restricted-syntax
        .then((response) => console.log(response.data))
        .catch((err) => {
          // eslint-disable-next-line no-alert
          alert(err.response.data.error);
        });
    }
  };

  return (
    <div className="register">
      <div className="div-arrow-return">
        <ButtonReturn />
      </div>
      <div className="register-title">
        <h2>Procédons ensemble à ton inscription</h2>
        <form className="form-register" onSubmit={handleSubmit}>
          <input
            className="inputEmail"
            type="email"
            name="email"
            id="email"
            placeholder="sophie.durand@gmail.coml"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="inputPassword"
            type="password"
            name="password"
            id="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="inputConfirmPassword"
            type="password"
            name="password"
            id="password"
            placeholder="Confirmation du mot de passe"
            value={passwordverified}
            onChange={(e) => setPasswordVerified(e.target.value)}
          />
          <Link to="/registration/register/codemail">
            <ButtonContinue handleSubmit={handleSubmit} />
          </Link>
        </form>
      </div>
    </div>
  );
}
export default Register;
