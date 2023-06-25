import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className=" flex justify-center">
      <div className="p-2">
        <Link to="/about"> About </Link>
      </div>
      <div className="p-2">
        <Link to="/contact">Contact</Link>
      </div>
      <div className="p-2">
        <Link to="/dashboard">Dashboard</Link>
      </div>

      <div className="p-2">
        <Link to="/login">Login</Link>
      </div>

      <div className="p-2">
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
}
