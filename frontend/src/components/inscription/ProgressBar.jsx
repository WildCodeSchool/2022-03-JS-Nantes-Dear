import React from "react";
import "./styles/ProgressBar.css";

function ProgressBar(percent) {
  

  return (
    <div className="progressbar">
      <div className={`progressbar${percent}`} />
    </div>
  );
}

export default ProgressBar;
