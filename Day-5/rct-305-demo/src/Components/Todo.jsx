import { useEffect, useState } from "React";
import axios from "axios";
function Todo() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchTodos = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      setTodos(res);
    };
    fetchTodos();
  }, []);
  return (
    <>
      <h1>Todos</h1>
      {todos.map((todo) => (
        <DisplayTodo data={todo} />
      ))}
    </>
  );
}

export default Todo;
