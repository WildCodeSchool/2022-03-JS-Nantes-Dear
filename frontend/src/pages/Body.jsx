import { Routes, Route } from "react-router-dom";
import Intro from "./Intro";
import IntroAdult from "./IntroAdult";
import SorryNotAdult from "../components/intro/SorryNotAdult";
import Registration from "./Registration";
import Register from "./Register";
import CodeMail from "../components/registration/CodeMail";
import Login from "../components/registration/Login";
import Hello from "../components/registration/Hello";
import EditPost from "./EditPost";
import Home from "./Home";
import PostCategory from "../components/post/PostCategory";

export default function Body() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/introadult" element={<IntroAdult />} />
        <Route path="/sorrynotadult" element={<SorryNotAdult />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/registration/register" element={<Register />} />
        <Route path="/registration/register/codemail" element={<CodeMail />} />
        <Route
          path="/registration/register/codemail/hello"
          element={<Hello />}
        />
        <Route path="/home" element={<Home />} />
        <Route path="/connection" element={<Login />} />
        <Route path="/editpost" element={<EditPost />} />
        <Route path="/editpost/postcategory" element={<PostCategory />} />
      </Routes>
    </div>
  );
}
