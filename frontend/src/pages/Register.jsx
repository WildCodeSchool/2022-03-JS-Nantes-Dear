import { useState } from "react";
import "./styles/Register.css";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password || !confirmPassword) {
      alert("Please specify both email and password");
    } else {
      axios.post(`${import.meta.env.VITE_BACKEND_URL}/users/login`);
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
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <input className="inputSubmit" type="submit" value="CONTINUE" />
      </form>
    </div>
  );
}
export default Register;
