import { useState, useEffect } from "React";

function Counter() {
  const [count, setCount] = useState(0);
  const [countFive, setCountFive] = useState(0);
  console.log("rendering.....");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((out) => console.log(out));
  });

  return (
    <>
      <h1>Counter:{count}</h1>
      <h1>Count Five:{countFive}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCountFive(countFive + 5)}>Increment 5</button>
    </>
  );
}

export default Counter;
