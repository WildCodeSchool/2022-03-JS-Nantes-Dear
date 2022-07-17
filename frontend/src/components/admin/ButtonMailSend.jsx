import React, { useState } from "react";
import MessageMailDelete from "./MessageMailDelete";
import "./styles/ButtonMailSend.css";

function ButtonMailSend() {
  const [isAdminClick, setIsAdminClick] = useState(false);
  function handleClick(e) {
    e.preventDefault();
    setIsAdminClick(!isAdminClick);

    fetch(`${import.meta.env.VITE_BACKEND_URL}/sendsorrymail`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(),
    }).then((response) => {
      if (response.status === 200);
      return response.json();
    });
  }
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
      {isAdminClick && <MessageMailDelete />}
    </div>
  );
}

export default ButtonMailSend;
