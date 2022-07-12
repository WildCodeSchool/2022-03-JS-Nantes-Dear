import { useState, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import UserAccount from "../components/profil/UserAccount";
import Intro from "./Intro";
import IntroAdult from "./IntroAdult";
import SorryNotAdult from "../components/intro/SorryNotAdult";
import Registration from "./Registration";
import Register from "./Register";
import CodeMail from "../components/registration/CodeMail";
import GoodConduct from "../components/registration/GoodConduct";
import Hello from "../components/registration/Hello";
import Bonjour from "../components/connection/Bonjour";
import EditPost from "./EditPost";
import Home from "./Home";
import PostCategory from "../components/post/PostCategory";
import Connection from "./Connection";
import Comment from "./Comment";
import FACul from "./FACul";
import AdminAccount from "../components/admin/AdminAccount";

export default function Body() {
  const initialRegister = {
    pseudo: "",
    age: "",
    email: "",
    password: "",
    passwordverified: "",
    role: "ROLE_USER",
  };
  const [register, setRegister] = useState(initialRegister);

  const values = useMemo(
    () => ({ initialRegister, register, setRegister }),
    [register]
  );

  return (
    <div>
      <UserContext.Provider value={values}>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/useraccount" element={<UserAccount />} />
          <Route path="/facul" element={<FACul />} />
          <Route path="/introadult" element={<IntroAdult />} />
          <Route path="/sorrynotadult" element={<SorryNotAdult />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/registration/register" element={<Register />} />
          <Route
            path="/registration/register/codemail"
            element={<CodeMail />}
          />
          <Route path="/adminaccount" element={<AdminAccount />} />
          <Route
            path="/registration/register/codemail/goodconduct"
            element={<GoodConduct />}
          />
          <Route
            path="/registration/register/codemail/goodconduct/hello"
            element={<Hello />}
          />
          <Route path="/home" element={<Home />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/connection" element={<Connection />} />
          <Route path="/connection/bonjour" element={<Bonjour />} />
          <Route path="/editpost" element={<EditPost />} />
          <Route path="/editpost/postcategory" element={<PostCategory />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}
