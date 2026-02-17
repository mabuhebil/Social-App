import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [UserToken, setUserToken] = useState(() => 
    localStorage.getItem("user_token"),
  );


  function saveUserToken(token) {
    setUserToken(token);
    localStorage.setItem("user_token", token);
  }

  function removeToken(){
    setUserToken(null);
    localStorage.removeItem("user_token")
  }

  console.log(UserToken);

  return (
    <AuthContext.Provider
      value={{
        UserToken,
        saveUserToken,
        removeToken
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
