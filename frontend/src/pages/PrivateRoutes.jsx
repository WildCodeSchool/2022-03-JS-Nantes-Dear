// import axios from "axios";
// import React, { useContext, useEffect, useState } from "react";
// import { Outlet, Navigate } from "react-router-dom";
// import AuthContext from "../contexts/AuthContext";

// export default function PrivateRoutes() {
//   const { loggedUser, setLoggedUser } = useContext(AuthContext);
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     if (!loggedUser.status) {
//       axios
//         .get(`${import.meta.env.VITE_BACKEND_URL}/users/checkToken`, {
//           withCredentials: true,
//         })
//         .then(({ data }) =>
//           setLoggedUser({
//             status: true,
//             user: data,
//           })
//         )
//         .catch((err) => {
//           console.error(err);
//         })
//         .finally(() => {
//           setLoaded(true);
//         });
//     } else {
//       setLoaded(true);
//     }
//   }, []);

//   if (!loaded) return null;

//   return loggedUser.status ? <Outlet /> : <Navigate to="/" />;
// }
