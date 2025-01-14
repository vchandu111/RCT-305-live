import React from "react";
import { UserContext } from "../App";
import { useContext } from "react";
const Unit6 = () => {
    const user = useContext(UserContext);
    console.log(user,"in unit-6")
  return (
    <div className="box">Congrats user, you have completed your course</div>
  );
};

export default Unit6;
