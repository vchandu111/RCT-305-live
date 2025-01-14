import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Posts from "./Components/Posts";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import PostsRQ from "./Components/PostsRQ";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts-rq" element={<PostsRQ />} />
      </Routes>
    </>
  );
}

export default App;
