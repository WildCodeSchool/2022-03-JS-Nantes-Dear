import { React, useState } from "react";
import ButtonSuivant from "./ButtonSuivant";
import "./styles/CodeMail.css";

export default function CodeMail() {
  const [code, setCode] = useState("");

  return (
    <div className="bloc-code-mail">
      <div className="title-code">
        <h1>Saisir le code</h1>
        <h2>reçu par mail</h2>
      </div>
      <div className="bloc-code">
        <form className="form-code">
          <label className="codeform" htmlFor="code">
            <input
              className="inputformcode"
              id="code"
              type="text"
              placeholder="0926483"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </label>
        </form>
      </div>
      <div className="button-suivant">
        <ButtonSuivant />
      </div>
    </div>
  );
}
