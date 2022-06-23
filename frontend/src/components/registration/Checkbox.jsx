import React from "react";
import "./styles/Checkbox.css";

function Checkbox() {
  return (
    <div className="checkbox">
      <input id={id} type="checkbox" checked={value} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default Checkbox;
