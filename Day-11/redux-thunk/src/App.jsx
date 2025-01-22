import React from "react";
import Todo from "./Components/Todo";
import TodoThunk from "./Redux/TodoThunk";

const App = () => {
  return (
    <div>
      <h1>Redux Thunk</h1>
      {/* <Todo /> */}
      <TodoThunk/>
    </div>
  );
};

export default App;
