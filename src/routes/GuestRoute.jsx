import { Navigate } from "react-router-dom";

export default function GuestRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  // ถ้ามี token แล้ว → ห้ามเข้า login → เด้งไป /dashboard
  if (user && user.token) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
