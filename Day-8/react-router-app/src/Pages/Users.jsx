import React, { useEffect, useState } from "react";
import "../Styles/Users.css";
import { Link } from "react-router-dom";
const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  console.log(users);
  return (
    <div className="user-list-container">
      <h1 className="title">Users</h1>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            <strong>{user.name}</strong> <span>({user.email})</span>
            <button>
              <Link to={`/users/${user.id}`}>View Details</Link>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
