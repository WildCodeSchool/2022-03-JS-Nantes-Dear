import "./styles/ButtonReturnGreen.css";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/arrow-return-white.png";

export default function ButtonReturnGreen() {
  const navigate = useNavigate();

  return (
    <div className="returnbuttongreen">
      <button
        className="button-return-green"
        type="button"
        onClick={() => navigate(-1)}
      >
        <img
          className="arrow-return-green"
          src={arrow}
          alt="arrow-return-white"
        />
      </button>
    </div>
  );
}
