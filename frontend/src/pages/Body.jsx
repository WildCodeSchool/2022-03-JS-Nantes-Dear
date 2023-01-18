import { useState, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import UserContext from "../contexts/UserContext";
// import { AuthContextProvider } from "../contexts/AuthContext";
import UserAccount from "../components/profile/UserAccount";
import DeleteAccount from "../components/profile/DeleteAccount";
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
import UserActivities from "../components/admin/UserActivities";
import UserDelete from "../components/admin/UserDelete";
import MailDeleteProfile from "../components/admin/MailDeleteProfile";
import DeleteProfile from "../components/admin/DeleteProfile";
import UserList from "../components/admin/UserList";
import Logout from "../components/profile/Logout";

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
          <Route path="/userlist" element={<UserList />} />
          <Route path="/useractivities" element={<UserActivities />} />
          <Route path="/userdelete" element={<UserDelete />} />
          <Route
            path="/useraccount/deleteaccount/:userId"
            element={<DeleteAccount />}
          />
          <Route path="/maildeleteprofile" element={<MailDeleteProfile />} />
          <Route path="userdelete/deleteprofile" element={<DeleteProfile />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/loginadmin" element={<LoginAdmin />} />
          <Route path="/connection" element={<Connection />} />
          <Route path="/adminaccount" element={<AdminAccount />} />
          <Route path="/useraccount" element={<UserAccount />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}
