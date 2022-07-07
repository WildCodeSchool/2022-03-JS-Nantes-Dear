import React, { useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { BsListTask, BsPencilSquare } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import FooterHome from "../home/FooterHome";
import Moderation from "./Moderation";
import Users from "./Users";
import ManageFaCul from "./ManageFaCul";
import logoBlue from "../../assets/dear-logo-blue.png";
import logoCircle from "../../assets/logo-dear-rond.png";
import "./styles/AdminAccount.css";

function AdminAccount() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="admin-account-page">
      <div className="admin-top">
        <div className="backoffice-top">
          <h1>Hello la team</h1>
          <h2>Back-office</h2>
        </div>
        <img className="logo-admin-page" src={logoBlue} alt="logo Dear bleu" />
        <img
          className="logo-admin-rond"
          src={logoCircle}
          alt="logo Dear rond"
        />
      </div>
      <div className="container-admin">
        <div className="container-cat-admin">
          <div className="admin-card">
            <div className="admin-category">
              <BsListTask className="admin-icon" />
              <h3>La modération</h3>
              <button
                type="button"
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                <IoIosArrowDroprightCircle className="arrow-admin" />
              </button>
            </div>
            <div className="admin-category">
              <FaUserFriends className="admin-icon" />
              <h3>Les utilisateurs</h3>
              <button
                type="button"
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                <IoIosArrowDroprightCircle className="arrow-admin" />
              </button>
            </div>
            <div className="admin-category">
              <BsPencilSquare className="admin-icon" />
              <h3>Gérer la FACul</h3>
              <button
                type="button"
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
              >
                <IoIosArrowDroprightCircle className="arrow-admin" />
              </button>
            </div>
          </div>
          <div className="admin-logout">
            <h4>Me déconnecter</h4>
          </div>
        </div>
        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <Moderation />
          </div>
          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <Users />
          </div>
          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <ManageFaCul />
          </div>
        </div>
        <FooterHome />
      </div>
    </div>
  );
}

export default AdminAccount;
