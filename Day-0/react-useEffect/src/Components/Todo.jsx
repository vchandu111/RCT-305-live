import { useEffect } from "React";

function Todo() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((out) => console.log(out));
  }, []);
  return (
    <>
      <h1>Todos</h1>
    </>
  );
}

export default Todo;
