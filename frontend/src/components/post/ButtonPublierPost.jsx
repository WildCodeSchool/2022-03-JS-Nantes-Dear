import React from "react";
import "./styles/ButtonPublierPost.css";
import PropTypes from "prop-types";

function ButtonPublierPost({ handleSubmit }) {
  return (
    <button type="submit" className="buttonpublierpost" onClick={handleSubmit}>
      <h3>Publier</h3>
    </button>
  );
}
ButtonPublierPost.propTypes = {
  handleSubmit: PropTypes.func,
};

ButtonPublierPost.defaultProps = {
  handleSubmit: PropTypes.func,
};

export default ButtonPublierPost;
