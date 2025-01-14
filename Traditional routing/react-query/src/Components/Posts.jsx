import React, { useEffect, useState } from "react";
import '../Styles/post.css'
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const fetchData = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.log(err);
      setIsError(true);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Page is loading....</div>;
  }
  if (isError) {
    return <div>Error has occured....</div>;
  }
  return (
    <div className="container">
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
