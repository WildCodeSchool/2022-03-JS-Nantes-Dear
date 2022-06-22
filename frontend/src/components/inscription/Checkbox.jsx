import React from "react";
import "./styles/Checkbox.css";
import PropTypes from "prop-types";

function Checkbox({ id, label, value, onChange }) {
  return (
    <div className="checkbox">
      <input id={id} type="checkbox" checked={value} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
Checkbox.propTypes = {
  id: PropTypes.number,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.string,
};

Checkbox.defaultProps = {
  id: "",
  label: "",
  value: "",
  onChange: "",
};

export default Checkbox;
