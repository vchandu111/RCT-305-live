import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext(null);
const details = {
  name: "chandra",
  email: "vchandu@gmail.com",
};
const AuthProvider = ({ children }) => {
  console.log(children);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);
  const login = () => {
    setIsAuthenticated(true);
    setUserData(details);
  };
  const logout = () => {
    setIsAuthenticated(false);
    setUserData(null);
  };
  return (
    <>
      <AuthContext.Provider value={{ isAuthenticated, login, logout, userData }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
