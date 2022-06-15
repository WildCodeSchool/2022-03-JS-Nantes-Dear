import React from "react";
// eslint-disable-next-line import/no-unresolved
import ReactModal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function ModalHome() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(true);

  const afterOpenModal = () => {
    subtitle.style.color = "#f00";
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="ModalHome">
      <ReactModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Bienvenue"
      >
        <h2 ref={subtitle}> Hello </h2>
        <button type="button" onClick={closeModal}>
          close
        </button>
        <div> I am a modal </div>
      </ReactModal>
    </div>
  );
}
