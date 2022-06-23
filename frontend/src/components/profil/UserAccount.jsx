import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { BsListTask } from "react-icons/bs";
import { AiFillCustomerService } from "react-icons/ai";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { FiFileText } from "react-icons/fi";
import "./styles/UserAccount.css";

function UserAccount() {
  return (
    <div className="user-account-page">
      <div className="profile-top">
        <h1>Pseudo</h1>
        <button type="button">Modifier mon profil</button>
      </div>
      <div className="profile-card">
        <div className="profile-category">
          <BsListTask className="profile-icon" />
          <h3>Mes données personnelles</h3>
          <IoIosArrowDroprightCircle className="arrow-profile" />
        </div>
        <div className="profile-category">
          <AiFillCustomerService className="profile-icon" />
          <h3>Contacter Dear</h3>
          <IoIosArrowDroprightCircle className="arrow-profile" />
        </div>
        <div className="profile-category">
          <VscWorkspaceTrusted className="profile-icon" />
          <h3>Charte de Confiance</h3>
          <IoIosArrowDroprightCircle className="arrow-profile" />
        </div>
        <div className="profile-category">
          <HiOutlineChatAlt2 className="profile-icon" />
          <h3>F.A.CUL</h3>
          <IoIosArrowDroprightCircle className="arrow-profile" />
        </div>
        <div className="profile-category">
          <FiFileText className="profile-icon" />
          <h3>Mentions légales</h3>
          <IoIosArrowDroprightCircle className="arrow-profile" />
        </div>
      </div>
      <div className="profile-logout">
        <h4>Me déconnecter</h4>
        <p>Supprimer mon compte</p>
      </div>
    </div>
  );
}

export default UserAccount;
