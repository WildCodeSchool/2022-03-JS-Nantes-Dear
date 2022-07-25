import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Register.css";
import axios from "axios";
import swal from "sweetalert";
import ProgressBar from "../components/registration/ProgressBar";
import UserContext from "../contexts/UserContext";
import ButtonContinue from "../components/registration/ButtonContinue";
import ButtonReturn from "../components/home/ButtonReturn";

export default function Register() {
  const { initialRegister, register, setRegister } = useContext(UserContext);
  const [verifyEmail, setVerifyEmail] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!register.email || !register.password || !register.passwordverified) {
      swal({
        title: "error!",
        text: "Merci de renseigner tous les champs",
        icon: "error",
        confirmButtonText: "Parfait !!",
      });
    } else {
      axios
        .get(
          `${import.meta.env.VITE_BACKEND_URL}/users/email?email=${
            register.email
          }`
        )
        .then(() => setVerifyEmail(true))

        .catch(() => {
          swal({
            title: "Error!",
            text: "Cet email existe déjà",
            icon: "error",
            confirmButtonText: "ok",
          });
        });
    }
    if (verifyEmail && register.password !== register.passwordverified) {
      swal({
        title: "Error!",
        text: "Les mots de passe sont différents",
        icon: "error",
        confirmButtonText: "Match !!",
      });
    } else {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/users/register`, register)

        .then(() =>
          navigate("/registration/register/goodconduct", { replace: true })
        )
        .catch(() => {
          swal({
            title: "error!",
            text: "Cet email existe déjà",
            icon: "error",
            confirmButtonText: "Ok je change",
          });
        });
      setRegister(initialRegister);
    }
  };

  return (
    <div className="register">
      <div className="register-arrow-return">
        <ButtonReturn />
      </div>
      <div className="register-progressbar">
        <ProgressBar color="white" width="80vw" value={66} max={100} />
      </div>
      <div className="register-title">
        <h2>Procédons ensemble à ton inscription</h2>
        <form className="form-register">
          <input
            className="inputEmail"
            type="email"
            name="email"
            id="email"
            placeholder="sophie.durand@gmail.com"
            value={register.email}
            onChange={(e) =>
              setRegister({ ...register, email: e.target.value })
            }
          />
          <input
            className="inputPassword"
            type="password"
            name="password"
            id="password"
            placeholder="Mot de passe"
            value={register.password}
            onChange={(e) =>
              setRegister({ ...register, password: e.target.value })
            }
          />
          <input
            className="inputConfirmPassword"
            type="password"
            name="password"
            id="password"
            placeholder="Confirmation du mot de passe"
            value={register.passwordverified}
            onChange={(e) =>
              setRegister({ ...register, passwordverified: e.target.value })
            }
          />
          <div className="button-continue">
            <ButtonContinue handleSubmit={handleSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
}
