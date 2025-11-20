import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  // ถ้าไม่มี token → Redirect ไป /login
  if (!user || !user.token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
