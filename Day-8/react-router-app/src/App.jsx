import "./App.css";
import Navbar from "./Components/Common/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Users from "./Pages/Users";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";
import UserDetails from "./Pages/UserDetails";
import NotFound from "./Pages/NotFound";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users/:userID" element={<UserDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
