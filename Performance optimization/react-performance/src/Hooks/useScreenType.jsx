import React, { useEffect, useState } from "react";

const getScreenType = (width) => {
  if (width < 640) {
    return "mobile";
  } else if (width >= 640 && width < 1024) {
    return "tablet";
  } else {
    return "desktop";
  }
};

const useScreenType = () => {
  const [screenType, setScreenType] = useState(
    getScreenType(window.innerWidth)
  );
  useEffect(() => {
    const handleResize = () => {
      setScreenType(getScreenType(window.innerWidth));
    };
    window.addEventListener("resize", handleResize);
  }, []);
  return screenType;
};

export default useScreenType;
