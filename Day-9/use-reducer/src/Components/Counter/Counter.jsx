import React, { useReducer } from "react";
const intialValue = {
  counter: 0,
};
const CountReducer = (currentState, action) => {
  //action -> {type:,value:}
  switch (action.type) {
    case "increment":
      return { counter: currentState.counter + action.value };
    case "decrement":
      return { counter: currentState.counter - action.value };
    case "reset":
      return intialValue;
    default:
      return currentState;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(CountReducer, intialValue);
  return (
    <div>
      <h1>Count:{count.counter}</h1>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment By 1
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement By 1
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment by 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement by 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Counter;
