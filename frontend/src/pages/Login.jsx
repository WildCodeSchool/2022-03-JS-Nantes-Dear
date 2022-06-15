import { useState } from "react";
import "./styles/Login.css";
import axios from "axios";

function Login() {
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!pseudo || !password) {
      alert("Please specify both pseudo and password");
    } else {
      axios.post(`${import.meta.env.VITE_BACKEND_URL}/users/login`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="pseudo">
        Pseudo:
        <input
          type="pseudo"
          name="pseudo"
          id="pseudo"
          placeholder="test@blabla.com"
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="password">
        Password:
        <input
          type="password"
          name="password"
          id="password"
          placeholder="***********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Se connecter</button>
    </form>
  );
}

export default Login;
