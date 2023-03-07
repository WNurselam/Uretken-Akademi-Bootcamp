import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Users from "./Users";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users`
        );
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Users not foun", users);
      }
    };
    fetchApi();
  }, []);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      {users.map((user) => (
        <Users user={user} key={user.id} />
      ))}
    </div>
  );
}

export default App;
