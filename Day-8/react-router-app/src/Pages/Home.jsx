import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    let i = 0;
   let interval = setInterval(() => {
      console.log("hello-" + i);
      i++;
    }, 1000);
    return () => {
        console.log("Unmouted");
        clearInterval(interval)
    };
  }, []);
  return <div className="content">Home</div>;
};

export default Home;
