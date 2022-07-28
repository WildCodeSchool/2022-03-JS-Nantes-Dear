import React from "react";
import PropTypes from "prop-types";
import "./styles/UserAccount.css";

function ButtonLogout({ handleLogout }) {
  return (
    <button
      type="submit"
      className="profile-logout"
      style={{ cursor: "pointer" }}
      onClick={handleLogout}
    >
      Me déconnecter
    </button>
  );
}

ButtonLogout.propTypes = {
  handleLogout: PropTypes.func,
};

ButtonLogout.defaultProps = {
  handleLogout: PropTypes.func,
};

export default ButtonLogout;
