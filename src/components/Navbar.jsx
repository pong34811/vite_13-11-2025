import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";

export default function Navbar() {
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <nav className="navbar">

      {isAuthenticated ? (
        <>
          <span>Hi {user.name}</span>
          <button onClick={logout}>Logout</button>
          <Link to="/dashboard">Dashboard</Link>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}
