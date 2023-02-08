import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Register.css";
import axios from "axios";
import swal from "sweetalert";
import ProgressBar from "../components/registration/ProgressBar";
import UserContext from "../contexts/UserContext";
import ButtonContinue from "../components/registration/ButtonContinue";
import ButtonReturn from "../components/home/ButtonReturn";
import closeEye from "../assets/closed-eye.svg";
import openEye from "../assets/opened-eye.svg";
import PswValidator from "../utils/PswValidator";

export default function Register() {
  const { initialRegister, register, setRegister } = useContext(UserContext);
  const [psw, setPsw] = useState("");
  const [pswIsVisible, setPswIsVisible] = useState("false");
  const pswValidator = new PswValidator(psw);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!register.email || !register.password || !register.passwordverified) {
      swal({
        title: "error!",
        text: "Merci de renseigner tous les champs",
        icon: "error",
      });
    } else {
      axios
        .get(
          `${import.meta.env.VITE_BACKEND_URL}/users/email?email=${
            register.email // vérifie que ce mail n'existe pas dans la db
          }`
        )
        .then(() => {
          if (register.password !== register.passwordverified) {
            swal({
              title: "Error!",
              text: "Les mots de passe sont différents",
              icon: "error",
            });
          } else {
            axios
              .post(
                `${import.meta.env.VITE_BACKEND_URL}/users/register`,
                register,
                { withCredentials: true }
              )

              .then(() => {
                setRegister(initialRegister);
                navigate("/registration/register/goodconduct", {
                  replace: true,
                });
              })

              .catch(() => {
                swal({
                  title: "error!",
                  text: "Erreur lors de l'enregistrement de l'utilisateur",
                  icon: "error",
                  // confirmButtonText: "Ok",
                });
              });
          }
        })
        .catch(() => {
          swal({
            title: "Error!",
            text: "Cet email existe déjà",
            icon: "error",
            // confirmButtonText: "ok",
          });
        });
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
            type={pswIsVisible ? "text" : `password`}
            name="password"
            id="password"
            placeholder="Mot de passe"
            value={register.password}
            onChange={(e) =>
              setRegister({ ...register, password: e.target.value }) ||
              setPsw(e.target.value)
            }
          />
          <input
            className="inputConfirmPassword"
            type={pswIsVisible ? "text" : `password`}
            name="password"
            id="password"
            placeholder="Confirmation du mot de passe"
            value={register.passwordverified}
            onChange={(e) =>
              setRegister({ ...register, passwordverified: e.target.value })
            }
          />

          <div className="eye">
            <span
              onClick={() => setPswIsVisible((prevState) => !prevState)}
              role="presentation"
            >
              <img
                src={pswIsVisible ? closeEye : openEye}
                alt={pswIsVisible ? "closed Eye" : "open Eye"}
                width="32"
              />
            </span>
          </div>

          <div className="pswValidation">
            <ul>
              <li
                style={{
                  color: pswValidator.hasLowerCase() ? "green" : "red",
                }}
              >
                1 lowercase letter
              </li>
              <li
                style={{
                  color: pswValidator.hasUpperCase() ? "green" : "red",
                }}
              >
                1 Uppercase letter
              </li>
              <li style={{ color: pswValidator.hasNumber() ? "green" : "red" }}>
                1 number
              </li>
              <li
                style={{
                  color: pswValidator.hasSpecialChar() ? "green" : "red",
                }}
              >
                1 special character
              </li>
              <li
                style={{
                  color: pswValidator.hasValidLength() ? "green" : "red",
                }}
              >
                Minimum 8 characters
              </li>
            </ul>
          </div>

          <div className="button-continue">
            <ButtonContinue handleSubmit={handleSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
}
