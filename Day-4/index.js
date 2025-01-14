function App() {
  const [formData, setFormData] = React.useState({
    username: "",
    email: "",
    phone: "",
  });
  const [users, setUsers] = React.useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFetchData = async () => {
    const res = await axios.get(
      "https://lms-project-e36ba-default-rtdb.firebaseio.com/users.json"
    );
    const out = Object.entries(res.data);
    setUsers(out);
  };

  console.log(users);

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      username: formData.username,
      email: formData.email,
      phone: formData.phone,
    };
    const res = axios.post(
      "https://lms-project-e36ba-default-rtdb.firebaseio.com/users.json",
      postData
    );
    console.log(res);
    setFormData({
      username: "",
      email: "",
      phone: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter username"
          name="username"
          onChange={handleChange}
          value={formData.username}
        />
        <input
          type="email"
          placeholder="enter email"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="number"
          placeholder="enter Phone number"
          name="phone"
          onChange={handleChange}
          value={formData.phone}
        />
        <input type="submit" />
      </form>
      <button onClick={handleFetchData} style={{ marginTop: "20px" }}>
        FetchData
      </button>
      <div className="container">
        {users.map((elem) => (
          <DisplayData data={elem} handleFetchData={handleFetchData} />
        ))}
      </div>
    </>
  );
}

function DisplayData(props) {
  const { data, handleFetchData } = props;
  console.log(props);
  const handleDelete = async (id) => {
    const res = await axios.delete(
      `https://lms-project-e36ba-default-rtdb.firebaseio.com/users/${id}.json`
    );
    console.log(res);
    handleFetchData();
  };
  console.log(props, "props");
  return (
    <>
      <div className="card">
        <h3>{data[1].username}</h3>
        <h3>{data[1].email}</h3>
        <h3>{data[1].phone}</h3>
        <button onClick={() => handleDelete(props.data[0])}>Delete</button>
        <button>Edit</button>
      </div>
    </>
  );
}

const data = [
  {
    id: 0,
    name: "User 0",
  },
  {
    id: 1,
    name: "User 1",
  },
  {
    id: 2,
    name: "User 2",
  },
  {
    id: 3,
    name: "User 3",
  },
  {
    id: 4,
    name: "User 4",
  },
  {
    id: 5,
    name: "User 5",
  },
  {
    id: 6,
    name: "User 6",
  },
  {
    id: 7,
    name: "User 7",
  },
  {
    id: 8,
    name: "User 8",
  },
  {
    id: 9,
    name: "User 9",
  },
];

function Demo() {
  const [users, setUsers] = React.useState(data);
  const handleRemove = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {users.map((user, index) => (
          <button
            key={index}
            onClick={() => handleRemove(user.id)}
            style={{ width: "100px" }}
          >
            {user.name}
          </button>
        ))}
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Demo />);

  // <button key="0">User 0</button>
  // <button key="1">User 1</button>
  // <button key="2">User 2</button>
  // <button key="3">User 3</button>
 
  // <button key="4">User 5</button>
  // <button key="5">User 6</button>
  // <button key="6">User 7</button>
  // <button key="7">User 9</button>
