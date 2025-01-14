// function ArrayExample() {
//   let fruitsArr = ["Apple", "Mango"];
//   const [fruits, setFruits] = React.useState(fruitsArr);

//   function addFruit() {
//     const newFruits = [...fruits];
//     newFruits.push("Banana");
//     setFruits(newFruits);
//   }
//   return (
//     <>
//       <h1>Fruits</h1>
//       <ul>
//         {fruits.map((elem) => (
//           <li>{elem}</li>
//         ))}
//       </ul>
//       <button onClick={addFruit}>Add Banana</button>
//     </>
//   );
// }

// function ObjectExample() {
//   let details = { name: "Suraj", age: 22 };
//   let [user, setUser] = React.useState(details);

//   const increaseAge = () => {
//     setUser({ ...user, age: user.age + 1 });
//   };
//   return (
//     <>
//       <h1>{user.name}</h1>
//       <p>{user.age}</p>
//       <button onClick={increaseAge}>Increase Age by 1 Year</button>
//     </>
//   );
// }

// function BooleanExample() {
//   const [isLoggedIn, setIsLoggedIn] = React.useState(false);

//   const toggleLogin = () => {
//     setIsLoggedIn(!isLoggedIn);
//   };
//   return (
//     <>
//       <h1>{ isLoggedIn?"Welcome Back":"Please login in"}</h1>
//       <button onClick={toggleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
//     </>
//   );
// }

const Todo = () => {
  const [currentTodo, setCurrentTodo] = React.useState("");
  const [todoList, setTodoList] = React.useState([]);
  
  function handleInput(e) {
    setCurrentTodo(e.target.value);
  }
  function handleAddTask() {
    setTodoList([...todoList, currentTodo]);
    setCurrentTodo("");
  }
  function handleDeleteTask(indexToDelete) {
    const updatedList = todoList.filter((_, index) => index !== indexToDelete); // Filter out the task
    setTodoList(updatedList); // Update the state with the filtered array
  }
  return (
    <>
      <h1>Todo</h1>
      <input
        onChange={handleInput}
        value={currentTodo}
        type="text"
        placeholder="Enter task"
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {/* Tasks needs to be updated */}
        {todoList.map((elem,index) => (
          <li>
            {elem}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Todo />);
