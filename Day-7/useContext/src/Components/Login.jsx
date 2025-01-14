import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
  const { login } = useContext(AuthContext);
  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
