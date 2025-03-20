import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center p-10">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl">Страница не найдена</p>
      <Link to="/users" className="mt-4 text-blue-500">↩ Вернуться на главную</Link>
    </div>
  );
}

export default NotFound;
