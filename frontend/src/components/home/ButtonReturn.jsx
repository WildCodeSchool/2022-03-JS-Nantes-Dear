import "./styles/ButtonReturn.css";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/arrow-return-white.png";

export default function ButtonReturn() {
  const navigate = useNavigate();

  return (
    <div className="returnbutton">
      <button
        className="buttonreturn"
        type="button"
        onClick={() => navigate(-1)}
      >
        <img className="arrow-return" src={arrow} alt="arrow-return-white" />
      </button>
    </div>
  );
}
