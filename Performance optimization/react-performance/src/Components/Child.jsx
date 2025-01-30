import React, { memo } from "react";

const Child = memo(({ details, test }) => {
  //large API calls
  console.log("child is rendered");
  return <div>{details.name}</div>;
});

export default Child;
