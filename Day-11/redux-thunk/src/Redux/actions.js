import {
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_LOADING,
  FETCH_TODOS_SUCCESS,
} from "./actionTypes";
//loading
export const fetchTodoLoading = () => {
  return { type: FETCH_TODOS_LOADING };
};

//success
export const fetchTodoSuccess = (todos) => {
  return {
    type: FETCH_TODOS_SUCCESS,
    payload: todos,
  };
};

//failure
export const fetchTodosFailure = (err) => {
  return {
    type: FETCH_TODOS_FAILURE,
    payload: err,
  };
};

//redux thunk actions

export const fetchTodos = () => {
  return async (dispatch) => {
    dispatch(fetchTodoLoading);
    try {
      const resp = await fetch("https://jsonplaholder.typicode.com/todos");
      const data = await resp.json();
      dispatch(fetchTodoSuccess(data));
    } catch (error) {
      dispatch(fetchTodosFailure(error.message));
    }
  };
};
