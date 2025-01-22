import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "../Redux/actions";
const Todo = () => {
  const [taskInput, setTaskInput] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.task);
  console.log(todos);
  const handleSubmit = (e) => {
    e.preventDefault();
      dispatch(addTask(taskInput));
      setTaskInput("")
  };

  const handleDelete = (index) => {
    dispatch(deleteTask(index));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTaskInput(e.target.value)}
          type="text"
          placeholder="enter new task" value={taskInput}
        />
        <input type="submit" />
      </form>
      <ul>
        {todos.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
