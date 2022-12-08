import { createContext, useState, useMemo } from "react";

const AuthContext = createContext();
export default AuthContext;

export function AuthContextProvider() {
  const initialAuth = {
    status: false,
    user: {},
  };
  const [loggedUser, setLoggedUser] = useState(initialAuth);

  const values = useMemo(
    () => ({ initialAuth, loggedUser, setLoggedUser }),
    [loggedUser]
  );
  return <AuthContext.Provider value={values} />;
}
