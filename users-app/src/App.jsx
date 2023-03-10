import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Users from "./Users";
import Header from "./Header";

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
        console.log("Users not found", users);
      }
    };
    fetchApi();
  }, []);

  if (loading) {
    return <h2 className="text-white-50 m-5">Loading...</h2>;
  }

  return (
    <div>
      <Header />
      <div className="d-flex flex-row flex-wrap justify-content-around align-items-center">
        {users.map((user) => (
          <Users user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
