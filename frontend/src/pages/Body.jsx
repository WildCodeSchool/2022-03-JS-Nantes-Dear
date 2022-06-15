import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Intro from "./Intro";
import Login from "./Login";

export default function Body() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="Home" element={<Home />} />
        <Route path="Login" element={<Login />} />
      </Routes>
    </div>
  );
}
