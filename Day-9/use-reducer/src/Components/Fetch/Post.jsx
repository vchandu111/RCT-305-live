import React, { useEffect, useState } from "react";
import axios from "axios";
const Post = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        setLoading(false);
        setPost(res.data);
        setErr("");
      })
      .catch((err) => {
        setLoading(false);
        setPost(null);
        setErr("Something went wrong");
      });
  }, []);
  if (loading) {
    return <div>....loading</div>;
  }
  if (err) {
    return <div>{err}</div>;
  }
  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
};

export default Post;
