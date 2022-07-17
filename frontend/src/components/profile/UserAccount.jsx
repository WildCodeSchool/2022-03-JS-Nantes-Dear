/* eslint-disable import/no-named-as-default-member */
import React, { useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { BsListTask } from "react-icons/bs";
import { AiFillCustomerService } from "react-icons/ai";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { FiFileText } from "react-icons/fi";
import "./styles/UserAccount.css";
import LegalNotice from "./LegalNotice";
import TrustCharter from "./TrustCharter";
import MyPersonalDatas from "./MyPersonalDatas";
import FaCul from "./FaCul";
import ContactForm from "./ContactForm";
import FooterHome from "../home/FooterHome";
import logoBlue from "../../assets/dear-logo-blue.png";
import Logout from "./Logout";
import ScrollButton from "../home/ScrollButton";

function UserAccount() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="user-account-page">
      <div className="profile-top">
        <div className="pseudo-top">
          <h1>Pseudo</h1>
        </div>
        <img className="logo-user-page" src={logoBlue} alt="logo Dear bleu" />
      </div>
      <div className="container-profile">
        <div className="profile-card">
          <ScrollButton />
          <div className="profile-category">
            <BsListTask className="profile-icon" />
            <h3>Mes données personnelles</h3>
            <button
              type="button"
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              <IoIosArrowDroprightCircle className="arrow-profile" />
            </button>
          </div>
          <div className="profile-category">
            <AiFillCustomerService className="profile-icon" />
            <h3>Contacter Dear</h3>
            <button
              type="button"
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              <IoIosArrowDroprightCircle className="arrow-profile" />
            </button>
          </div>
          <div className="profile-category">
            <VscWorkspaceTrusted className="profile-icon" />
            <h3>Charte de Confiance</h3>
            <button
              type="button"
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              <IoIosArrowDroprightCircle className="arrow-profile" />
            </button>
          </div>
          <div className="profile-category">
            <HiOutlineChatAlt2 className="profile-icon" />
            <h3>F.A.CUL</h3>
            <button
              type="button"
              className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(4)}
            >
              <IoIosArrowDroprightCircle className="arrow-profile" />
            </button>
          </div>
          <div className="profile-category">
            <FiFileText className="profile-icon" />
            <h3>Mentions légales</h3>
            <button
              type="button"
              className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(5)}
            >
              <IoIosArrowDroprightCircle className="arrow-profile" />
            </button>
          </div>
          <div className="profile-logout">
            <Logout />
            <p>Supprimer mon compte</p>
          </div>
        </div>
        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <MyPersonalDatas />
          </div>
          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <ContactForm />
          </div>
          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <TrustCharter />
          </div>
          <div
            className={
              toggleState === 4 ? "content  active-content" : "content"
            }
          >
            <FaCul />
          </div>
          <div
            className={
              toggleState === 5 ? "content  active-content" : "content"
            }
          >
            <LegalNotice />
          </div>
        </div>
      </div>
      <FooterHome />
    </div>
  );
}

export default UserAccount;
