import React, { useEffect, useReducer } from "react";
import { FETCH_ERROR, FETCH_SUCCESS } from "./Types";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  post: null,
};
const reducer = (currentState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        loading: false,
        error: "",
        post: action.payload,
      };

    case FETCH_ERROR:
      return {
        loading: false,
        post: {},
        error: "Something went wrong",
      };
    default:
      return currentState;
  }
};

const PostReducer = () => {
  const [postTitle, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
      .catch((err) => dispatch({ type: FETCH_ERROR }));
  }, []);
  console.log(postTitle);
  return <div>{postTitle?.post?.body}</div>;
};

export default PostReducer;
