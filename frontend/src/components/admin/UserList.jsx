import React from "react";
import { Link } from "react-router-dom";
import "./styles/UserList.css";
import ScrollButton from "../home/ScrollButton";
import iconcross from "../../assets/icon-cross.png";
import iconeye from "../../assets/icon-eye.png";

function UserList() {
  return (
    <div className="container-user-list">
      <div className="align-pseudo-pictos">
        <div className="user-pseudo-exemple">
          <p>Petitfenouil10</p>
        </div>
        <div className="pictos-list-user">
          <Link to="/useractivities">
            <img
              className="iconeye"
              src={iconeye}
              style={{ cursor: "pointer" }}
              alt="icon-eye"
            />
          </Link>
          <Link to="/userdelete">
            <img
              className="iconcross"
              src={iconcross}
              style={{ cursor: "pointer" }}
              alt="icon-cross"
            />
          </Link>
          <ScrollButton />
        </div>
      </div>
    </div>
  );
}

export default UserList;
