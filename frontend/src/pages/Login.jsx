import React, { useContext } from "react";
import "./styles/Login.css";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import ButtonReturn from "../components/home/ButtonReturn";
import ButtonContinue from "../components/registration/ButtonContinue";
import AuthContext from "../contexts/AuthContext";

function Login() {
  const { register, setRegister } = useContext(UserContext);

  const navigate = useNavigate();

  const { setLoggedUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!register.pseudo || !register.password) {
      swal({
        title: "Error!",
        text: "Merci de renseigner votre pseudo ET votre email",
        icon: "error",
        confirmButtonText: "Cool",
      });
    } else {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/users/login`, register, {
          withCredentials: true,
        })
        .then(({ data }) =>
          setLoggedUser({
            status: true,
            user: data,
          })
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
            onChange={(e) =>
              setRegister({ ...register, pseudo: e.target.value })
            }
          />
          <input
            className="inputLogPassword"
            type="password"
            name="password"
            id="password"
            placeholder="Mot de passe"
            onChange={(e) =>
              setRegister({ ...register, password: e.target.value })
            }
          />
          <ButtonContinue handleSubmit={handleSubmit} />
        </form>
      </div>
    </div>
  );
}

export default Login;
