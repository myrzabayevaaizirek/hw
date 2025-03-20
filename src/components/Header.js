import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <nav className="container mx-auto flex justify-between">
        <Link to="/users" className="text-xl font-bold">User List</Link>
      </nav>
    </header>
  );
}

export default Header;
