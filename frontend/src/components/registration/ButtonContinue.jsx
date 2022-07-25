import React from "react";
import "./styles/ButtonContinue.css";
import PropTypes from "prop-types";

function ButtonContinue({ handleSubmit }) {
  return (
    <button
      type="submit"
      className="buttoncontinue"
      style={{ cursor: "pointer" }}
      onClick={handleSubmit}
    >
      <h3>CONTINUE</h3>
    </button>
  );
}

ButtonContinue.propTypes = {
  handleSubmit: PropTypes.func,
};

ButtonContinue.defaultProps = {
  handleSubmit: PropTypes.func,
};

export default ButtonContinue;
