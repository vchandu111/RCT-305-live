import { createStore, applyMiddleware, compose } from "redux";
import { todoReducer } from "./todoReducer";
import { thunk } from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  todoReducer,
  composeEnhancers(applyMiddleware(thunk))
);
