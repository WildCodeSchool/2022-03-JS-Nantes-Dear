import React from "react";
import { Link } from "react-router-dom";
import "./styles/UserList.css";
import iconcross from "../../assets/icon-cross.png";
import iconeye from "../../assets/icon-eye.png";

// eslint-disable-next-line react/prop-types
function UserList({ pseudo }) {
  return (
    <div className="container-user-list">
      <div className="align-pseudo-pictos">
        <div className="user-list">
          <p className="user-pseudo">{pseudo}</p>
          <p className="user-pseudo-exemple">Petitfenouil10</p>
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
