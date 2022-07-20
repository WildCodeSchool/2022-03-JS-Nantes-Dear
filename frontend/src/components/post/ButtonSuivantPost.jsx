import React from "react";
import "./styles/ButtonSuivantPost.css";
import PropTypes from "prop-types";

function ButtonSuivantPost({ handleSubmit }) {
  return (
    <button type="submit" className="buttonsuivantpost" onClick={handleSubmit}>
      <h3>SUIVANT</h3>
    </button>
  );
}

ButtonSuivantPost.propTypes = {
  handleSubmit: PropTypes.func,
};

ButtonSuivantPost.defaultProps = {
  handleSubmit: PropTypes.func,
};

export default ButtonSuivantPost;
