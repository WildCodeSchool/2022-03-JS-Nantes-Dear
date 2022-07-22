import React from "react";
import ReactModal from "react-modal";
import "./styles/ModalHome.css";

export default function ModalHome() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="modal-container">
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        ariaHideApp={false}
      >
        <div className="text-modal-container">
          <h2 className="welcome" ref={subtitle}>
            WELCOME !
          </h2>
          <div className="text-container">
            <div className="first-paragraph">
              <p>
                <span>Toute la TEAM DEAR est </span>
                <span>
                  super<span className="wordbold"> heureuse </span>de te savoir
                  membre de notre communauté !
                </span>
              </p>
            </div>
          </div>
          <div className="text-container">
            <div className="second-paragraph">
              <p>
                <span> Bon vent sur l'application DEAR ! </span>
                <span> Envie de partager ton expérience ? </span>
                <span>Envie de poser tes questions ? </span>
                <span> Envie de t'éveiller ? </span>
                <span> Tu es au bon endroit ! </span>
              </p>
            </div>
          </div>
          <div className="text-container">
            <div className="third-paragraph">
              <p>
                Ici pas de tabou, simplement du respect, de la bienveillance et
                des pros à ton écoute
              </p>
            </div>
          </div>
          <div className="text-container">
            <div className="last-paragraph">
              <p>
                <span>On t'embête pas plus longtemps!</span>
                <span>Have fun !</span>
              </p>
            </div>
          </div>
        </div>
        <div className="button-container">
          <button
            className="exit-button"
            type="button"
            style={{ cursor: "pointer" }}
            onClick={closeModal}
          >
            GO
          </button>
        </div>
      </ReactModal>
    </div>
  );
}
