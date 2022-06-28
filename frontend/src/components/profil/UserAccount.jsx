import React, { useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { BsListTask } from "react-icons/bs";
import { AiFillCustomerService } from "react-icons/ai";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { FiFileText } from "react-icons/fi";
import "./styles/UserAccount.css";

function UserAccount() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="user-account-page">
      <div className="profile-top">
        <h1>Pseudo</h1>
        <button type="button">Modifier mon profil</button>
      </div>
      <div className="container-profile">
        <div className="profile-card">
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
            <h4>Me déconnecter</h4>
            <p>Supprimer mon compte</p>
          </div>
        </div>
        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <h2>Mes données personnelles</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              praesentium incidunt quia aspernatur quasi quidem facilis quo
              nihil vel voluptatum?
            </p>
          </div>
          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <h2>Contacter Dear</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              voluptatum qui adipisci.
            </p>
          </div>
          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <h2>Charte de Confiance</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
              nostrum rerum laudantium totam unde adipisci incidunt modi alias!
              Accusamus in quia odit aspernatur provident et ad vel distinctio
              recusandae totam quidem repudiandae omnis veritatis nostrum
              laboriosam architecto optio rem, dignissimos voluptatum beatae
              aperiam voluptatem atque. Beatae rerum dolores sunt.
            </p>
          </div>
          <div
            className={
              toggleState === 4 ? "content  active-content" : "content"
            }
          >
            <h2>F.A.CUL</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              praesentium incidunt quia aspernatur quasi quidem facilis quo
              nihil vel voluptatum?
            </p>
          </div>
          <div
            className={
              toggleState === 5 ? "content  active-content" : "content"
            }
          >
            <h2>Mentions légales</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              praesentium incidunt quia aspernatur quasi quidem facilis quo
              nihil vel voluptatum?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAccount;
