import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Styles/UserDetails.css";
import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  //URLSearchParams , const url = new URLSearchParams, url.get("id")
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  console.log(navigate);
  console.log(useParams());
  const { userID } = useParams();
  console.log(userID);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
    
    // navigate("/")
  return (
    user && (
      <div className="user-details">
        <MoveLeft onClick={() => navigate(-1)} style={{ color: "red" }} />

        <h1>{user.name}</h1>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Address:</strong> {user.address.street}, {user.address.suite},{" "}
          {user.address.city}, {user.address.zipcode}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Website:</strong>{" "}
          <a href={`http://${user.website}`}>{user.website}</a>
        </p>
        <p>
          <strong>Company:</strong> {user.company.name}
        </p>
        <p>
          <strong>Catch Phrase:</strong> {user.company.catchPhrase}
        </p>
        <p>
          <strong>Business Strategy:</strong> {user.company.bs}
        </p>
      </div>
    )
  );
};

export default UserDetails;
