import { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>Posts</h1>
    </>
  );
}

export default Posts;
