import { useState } from "react";
import "../Styles/Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && password) {
      console.log(email, password);
    } else {
      alert("Please specify both email and password");
    }
  };

  return (
    <div className="form">
      <h4>Procédons ensemble à ton inscription</h4>
      <form onSubmit={handleSubmit}>
        <input
          className="inputEmail"
          type="email"
          name="email"
          id="email"
          placeholder="Adresse email"
        />
        <input
          className="inputPassword"
          type="password"
          name="password"
          id="password"
          placeholder="Mot de passe"
        />
        <input
          className="inputConfirmPassword"
          type="password"
          name="password"
          id="password"
          placeholder="Confirmation du mot de passe"
        />
        <input className="inputSubmit" type="submit" value="CONTINUE" />
      </form>
    </div>
  );
}
export default Register;
