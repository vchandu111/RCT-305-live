import React from "react";
import useScreenType from "../Hooks/useScreenType";

const Responsive = () => {
  const screen = useScreenType();
  console.log(screen);
  return (
    <h1>
      {screen === "mobile" && <p>you are on mobile</p>}
      {screen === "tablet" && <p>you are on tablet</p>}
      {screen === "desktop" && <p>you are on desktop</p>}
    </h1>
  );
};

export default Responsive;
