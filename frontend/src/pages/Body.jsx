import { useState, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import UserAccount from "../components/profile/UserAccount";
import Intro from "./Intro";
import IntroAdult from "./IntroAdult";
import SorryNotAdult from "../components/intro/SorryNotAdult";
import Registration from "./Registration";
import Register from "./Register";
import GoodConduct from "../components/registration/GoodConduct";
import Hello from "../components/registration/Hello";
import Bonjour from "../components/connection/Bonjour";
import AddPost from "./AddPost";
import Home from "./Home";
import Connection from "./Connection";
import Comment from "./Comment";
import FACul from "./FACul";
import AdminAccount from "../components/admin/AdminAccount";
import LoginAdmin from "./LoginAdmin";

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
          <Route path="/facul" element={<FACul />} />
          <Route path="/introadult" element={<IntroAdult />} />
          <Route path="/sorrynotadult" element={<SorryNotAdult />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/registration/register" element={<Register />} />
          <Route
            path="/registration/register/goodconduct"
            element={<GoodConduct />}
          />
          <Route
            path="/registration/register/goodconduct/hello"
            element={<Hello />}
          />
          <Route path="/addpost" element={<AddPost />} />
          <Route path="/addpost/home" element={<AddPost />} />
          <Route path="/connection/bonjour" element={<Bonjour />} />
          <Route path="/home" element={<Home />} />
          <Route path="/loginadmin" element={<LoginAdmin />} />
          <Route path="/adminaccount" element={<AdminAccount />} />
          <Route path="/useraccount" element={<UserAccount />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/connection" element={<Connection />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}
