import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./styles/UserList.css";
import ScrollButton from "../home/ScrollButton";
import iconcross from "../../assets/icon-cross.png";
import iconeye from "../../assets/icon-eye.png";
import User from "./User";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users`)
      // .then((res) => console.log(res.data))
      .then((res) => setUsers(res.data))
      .catch((err) => {
        console.warn(err.response.data.error);
      });
  }, []);

  return (
    <div className="container-user-list">
      <div className="align-pseudo-pictos">
        <div className="user-pseudo-exemple">
          {users.map((e) => (
            <User key={e.id} user={e} />
          ))}

          <div className="pictos-list-user">
            <Link to="/useractivities">
              <img className="iconeye" src={iconeye} alt="icon-eye" />
            </Link>
            <Link to="/userdelete">
              <img className="iconcross" src={iconcross} alt="icon-cross" />
            </Link>
            <ScrollButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserList;
