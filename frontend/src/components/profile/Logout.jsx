import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import AuthContext from "../../contexts/AuthContext";
import ButtonLogout from "./ButtonLogout";

function Logout() {
  // const { setLoggedUser } = useContext(AuthContext);

  const handleLogout = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/users/logout`, null, {
        withCredentials: true,
      })
      // .then(() =>
      //   setLoggedUser({
      //     status: false,
      //     user: {},
      //   })
      // )
      .then(() => {
        alert("Successfully logged out");
      })
      .catch((err) => {
        if (err.response.status === 401) {
          alert("You're not authenticated");
        }
      });
  };

  return (
    <div>
      <Link to="/">
        <ButtonLogout handleSubmit={handleLogout} />
      </Link>
    </div>
  );
}

export default Logout;
