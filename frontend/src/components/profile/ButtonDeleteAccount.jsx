import React from "react";
import PropTypes from "prop-types";
import "./styles/ButtonDeleteAccount.css";

function ButtonDeleteAccount({ handleDelete }) {
  return (
    <div>
      <button
        type="button"
        className="profile-delete"
        style={{ cursor: "pointer" }}
        onClick={handleDelete}
      >
        Supprimer mon profil
      </button>
    </div>
  );
}

ButtonDeleteAccount.propTypes = {
  handleDelete: PropTypes.func,
};

ButtonDeleteAccount.defaultProps = {
  handleDelete: PropTypes.func,
};

export default ButtonDeleteAccount;
