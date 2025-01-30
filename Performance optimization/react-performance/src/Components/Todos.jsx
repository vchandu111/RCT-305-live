import React, { useState, useEffect } from "react";
import useMyFetch from "../Hooks/useMyFetch";

const Todos = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const { data, loading, err } = useMyFetch(url);
  console.log(data, loading, err);
  if (loading) return <div>Loading...........</div>;

  return <div>todos</div>;
};

export default Todos;
