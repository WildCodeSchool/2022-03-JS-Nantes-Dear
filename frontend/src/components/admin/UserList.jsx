import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./styles/UserList.css";
import iconcross from "../../assets/icon-cross.png";
import iconeye from "../../assets/icon-eye.png";

function UserList() {
  const [userlist, setUserlist] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users`)
      .then((res) => setUserlist(res.data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="container-user-list">
      <div className="align-pseudo-pictos">
        <div className="user-list">
          <ul>
            {userlist.map((user) => (
              <li key={user.id}>pseudo: {user.pseudo}</li>
            ))}
          </ul>
        </div>
        <div className="pictos-list-user">
          <Link to="/useractivities">
            <img className="iconeye" src={iconeye} alt="icon-eye" />
          </Link>
          <Link to="/userdelete">
            <img className="iconcross" src={iconcross} alt="icon-cross" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserList;
