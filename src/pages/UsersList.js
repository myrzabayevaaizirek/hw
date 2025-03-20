import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://fakestoreapi.com/users";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {users.map((user) => (
        <div key={user.id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl hover:scale-105 transition-transform">
          <img src={`https://i.pravatar.cc/150?img=${user.id}`} alt="avatar" className="rounded-full mx-auto mb-4" />
          <h2 className="text-lg font-bold">{user.name.firstname} {user.name.lastname}</h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-500">{user.address.city}, {user.address.street}</p>
          <Link to={`/users/${user.id}`} className="mt-2 block text-blue-500">Подробнее</Link>
        </div>
      ))}
    </div>
  );
}

export default UsersList;
