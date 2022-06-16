import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Inscription from "./Inscription";
import Intro from "./Intro";
import IntroAdult from "./IntroAdult";
import SorryNotAdult from "../components/intro/SorryNotAdult";


export default function Body() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/introAdult" element={<IntroAdult />} />
        <Route path="/sorryNotAdult" element={<SorryNotAdult />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/test" element={<Register />} /> 
      </Routes>
    </div>
  );
}
