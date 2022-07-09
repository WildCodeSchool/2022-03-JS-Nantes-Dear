import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./styles/Register.css";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import ButtonContinue from "../components/registration/ButtonContinue";
import ButtonReturn from "../components/home/ButtonReturn";

function Register() {
  const { initialRegister, register, setRegister } = useContext(UserContext);

  const handleRegister = () => {
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/users/register`,
        { data: register },

        { withCredentials: true }
      )

      // eslint-disable-next-line no-restricted-syntax
      .then((response) => console.log(response.data))
      .catch((err) => {
        // alert(err.response.data.error);
        console.error(err);
      });
    setRegister(initialRegister);
  };

  return (
    <div className="register">
      <div className="div-arrow-return">
        <ButtonReturn />
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
            value={register.setPasswordverified}
            onChange={(e) =>
              setRegister({ ...register, passwordverified: e.target.value })
            }
          />
          <Link to="/registration/register/codemail">
            <ButtonContinue onClick={handleRegister} />
          </Link>
        </form>
      </div>
    </div>
  );
}
export default Register;
