import React,{useContext} from "react";
import Unit5 from "./Unit5";
import { UserContext } from "../App";

const Unit4 = () => {
    const user = useContext(UserContext)
  return (
      <div className="box">
          Congrats {user} you are half way in unit4
      <Unit5  />
    </div>
  );
};

export default Unit4;
