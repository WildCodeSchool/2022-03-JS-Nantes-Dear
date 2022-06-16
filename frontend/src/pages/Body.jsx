import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Inscription from "./Inscription";
import Intro from "./Intro";

export default function Body() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="Home" element={<Home />} />
        <Route path="Inscription" element={<Inscription />} />
      </Routes>
    </div>
  );
}
