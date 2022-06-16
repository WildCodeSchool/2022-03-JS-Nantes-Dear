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
        <Route path="/IntroAdult" element={<IntroAdult />} />
        <Route path="/SorryNotAdult" element={<SorryNotAdult />} />
        <Route path="Home" element={<Home />} />
        <Route path="Inscription" element={<Inscription />} />
      </Routes>
    </div>
  );
}
