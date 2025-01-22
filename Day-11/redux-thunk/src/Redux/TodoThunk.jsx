import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./actions";
const TodoThunk = () => {
  const dispatch = useDispatch();
  const { loading, todos, error } = useSelector((state) => state);
  console.log(todos);
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  if (loading) return <div>.....loading</div>;
  if (error) return <div>Error loading todos</div>;
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoThunk;
