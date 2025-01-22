import { createStore } from "redux";
import { expenseReducer } from "./reducer";
export const store = createStore(
  expenseReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
);
