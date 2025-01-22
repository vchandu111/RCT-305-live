import { createStore } from "redux";

// Action types
const ADD_TASK = "ADD_TASK";
const DELETE_TASK = "DELETE_TASK";

//action creators
const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

const deleteTask = (index) => ({
  type: DELETE_TASK,
  payload: index,
});

// Initial state
const initialState = {
  task: [],
};

// Reducer function
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        task: [...state.task, action.payload],
      };
    case DELETE_TASK:
      const updatedTask = state.task.filter((curTask, index) => {
        return index !== action.payload;
      });
      return {
        ...state,
        task: updatedTask,
      };
    default:
      return state;
  }
};

const store = createStore(taskReducer);
// console.log(store);
// console.log("initial state", store.getState());
//add todo
store.dispatch(addTask("Do assignment"));
// console.log("updated state after dispatch", store.getState());

//delete todo
store.dispatch(deleteTask(0));
// console.log("updated state after deleting", store.getState());
