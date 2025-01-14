import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const UserProfile = () => {
  const { isAuthenticated, login, logout, userData } = useContext(AuthContext);
  if (!isAuthenticated) {
    return <div>Please login to see profile</div>;
  }
  return (
    <div>
      <h1>UserProfile</h1>
      <p>Name:{userData.name}</p>
      <p>Email:{userData.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default UserProfile;
