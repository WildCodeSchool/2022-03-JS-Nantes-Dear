import { React, useState } from "react";
import { Link } from "react-router-dom";
import ButtonSuivant from "./ButtonSuivant";
import ButtonReturn from "../home/ButtonReturn";
import "./styles/CodeMail.css";

export default function CodeMail() {
  const [code, setCode] = useState("");

  return (
    <div className="bloc-code-mail">
      <div className="div-arrow-return">
        <ButtonReturn />
      </div>
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
        <Link to="goodconduct">
          <ButtonSuivant />
        </Link>
      </div>
    </div>
  );
}
