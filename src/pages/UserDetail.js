import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const API_URL = "https://fakestoreapi.com/users";

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) return <p className="text-center p-4">Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">{user.name.firstname} {user.name.lastname}</h1>
      <p>📞 {user.phone}</p>
      <p>🏠 {user.address.street}, {user.address.number}, {user.address.city}, {user.address.zipcode}</p>
      <p>🌍 Lat: {user.address.geolocation.lat}, Lng: {user.address.geolocation.long}</p>
      <p>🔐 Username: {user.username}</p>
      <p>
        🔑 Password: {showPassword ? user.password : "******"} 
        <button onClick={() => setShowPassword(!showPassword)} className="ml-2 text-blue-500">
          {showPassword ? "Скрыть" : "Показать"}
        </button>
      </p>
      <Link to="/users" className="block mt-4 text-blue-500">↩ Назад к списку пользователей</Link>
    </div>
  );
}

export default UserDetail;
