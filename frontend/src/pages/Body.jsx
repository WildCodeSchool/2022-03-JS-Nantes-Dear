import { Routes, Route } from "react-router-dom";
import GoodConduct from "../components/inscription/GoodConduct";
import CardPseudo from "../components/inscription/CardPseudo";
import Login from "../components/inscription/Login";
import Home from "./Home";
import Inscription from "./Inscription";
import Intro from "./Intro";
import IntroAdult from "./IntroAdult";
import SorryNotAdult from "../components/intro/SorryNotAdult";
import Register from "./Register";

export default function Body() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/introAdult" element={<IntroAdult />} />
        <Route path="/sorryNotAdult" element={<SorryNotAdult />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="test1" element={<CardPseudo />} />
        <Route path="/test2" element={<GoodConduct />} />
        <Route path="/test3" element={<Login />} />
        <Route path="/test4" element={<Register />} />
      </Routes>
    </div>
  );
}
