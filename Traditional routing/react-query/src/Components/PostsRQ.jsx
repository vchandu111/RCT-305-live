import React from "react";
import '../Styles/post.css'

import { useQuery } from "@tanstack/react-query";
import axios from 'axios'
const PostsRQ = () => {
  //posts -> ["posts"]
  //posts/2 -> ["posts",posts.id]
  //posts/1/commenst -> ["posts",posts.id,"comments"]
  const { data, isError, isLoading, error,isFetching,refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: () => {
      // callback that always returns a promise
      return axios.get("https://jsonplaceholder.typicode.com/posts");
    },
    enabled:false
  });

  if (isLoading) {
    return <div>Page is loading....</div>;
  }
  if (isError) {
    return <div>Error has occured....</div>;
  }

  console.log(isLoading,isFetching)


  return <div className="container">
    <button onClick={refetch}>Fetch Data</button>
  {data.data.map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  ))}
</div>;
};

export default PostsRQ;
