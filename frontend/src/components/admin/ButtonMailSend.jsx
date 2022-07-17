import React from "react";
import PropTypes from "prop-types";
import "./styles/ButtonMailSend.css";

function ButtonMailSend({ handleClick }) {
  return (
    <div className="containbuttonmailsend">
      <button
        type="submit"
        className="buttonmailsend"
        value="submit"
        onClick={handleClick}
      >
        <h3>Envoyer</h3>
      </button>
    </div>
  );
}

ButtonMailSend.propTypes = {
  handleClick: PropTypes.func,
};

ButtonMailSend.defaultProps = {
  handleClick: PropTypes.func,
};

export default ButtonMailSend;
