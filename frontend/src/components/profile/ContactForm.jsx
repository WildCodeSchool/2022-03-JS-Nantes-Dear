import { useState } from "react";
import ContactMessage from "./ContactMessage";
import "./styles/ContactForm.css";

export default function ContactForm() {
  const MAX_LENGTH = 30;

  const [email, setEmail] = useState("");
  const [objet, setObjet] = useState("");
  const [message, setMessage] = useState("");

  const [content, setContent] = useState("");
  const handleChange = (event) => {
    if (event.target.value.length <= MAX_LENGTH) {
      setContent(event.target.value);
    }
  };

  const [isUserClick, setIsUserClick] = useState(false);
  function handleClick(e) {
    e.preventDefault();
    setIsUserClick(!isUserClick);

    fetch(`${import.meta.env.VITE_BACKEND_URL}/sendmail`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ email, objet, message }),
    }).then((response) => {
      if (response.status === 200) {
        setEmail("");
        setObjet("");
        setMessage("");
      }
      return response.json();
    });
  }

  const maximumReached = content.length >= MAX_LENGTH;

  return (
    <div className="contact">
      <form name="contact" method="post">
        <h1 className="contact-title">Nous contacter</h1>
        <label htmlFor="name">
          Nom - Société *
          <input
            className={maximumReached ? "length-maximum-reached" : "length-ok"}
            id="name"
            name="name"
            type="text"
            value={content}
            placeholder="Champ obligatoire"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="email">
          Email *
          <input
            className={maximumReached ? "length-maximum-reached" : "length-ok"}
            id="email"
            type="email"
            value={email}
            name="email"
            placeholder="Champ obligatoire"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="objet">
          Objet *
          <input
            className={maximumReached ? "length-maximum-reached" : "length-ok"}
            id="objet"
            type="text"
            name="objet"
            value={objet}
            placeholder="Champ obligatoire"
            onChange={(e) => setObjet(e.target.value)}
          />
        </label>

        <label htmlFor="message">
          Message
          <textarea
            id="message"
            name="message"
            value={message}
            placeholder="Dis-nous tout"
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>

        <button
          className="contactButton"
          type="submit"
          value="submit"
          style={{ cursor: "pointer" }}
          onClick={handleClick}
        >
          Envoyer
        </button>
        {isUserClick && <ContactMessage />}
      </form>
    </div>
  );
}
