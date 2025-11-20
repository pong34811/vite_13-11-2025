// src/context/AuthContext.jsx
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ref, get, child, query, orderByChild, equalTo } from "firebase/database"; // เพิ่ม query imports
import { db } from "../firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const handleLogin = async (values) => {
    const gmail = values.gmail.trim();
    setError(""); // เคลียร์ Error เก่าก่อน

    try {
      const dbRef = ref(db);
      const snapshot = await get(child(dbRef, "users"));

      if (!snapshot.exists()) {
        setError("ไม่พบข้อมูลผู้ใช้งาน (Database Empty)");
        return false; // ส่งค่ากลับว่าไม่สำเร็จ
      }

      const users = snapshot.val();
      // ค้นหา User (ถ้าข้อมูลเยอะแนะนำให้ใช้ Query แทนการโหลดทั้งหมด)
      const foundUser = Object.values(users).find((u) => u.gmail === gmail);

      if (!foundUser) {
        setError("ไม่พบผู้ใช้งานในระบบ");
        return false;
      }

      // --- Login Successful ---
      const userData = {
        ...foundUser, // เก็บข้อมูลจริงจาก DB (เช่น ชื่อ, role)
        token: crypto.randomUUID() // สร้าง Token
      };

      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      navigate("/dashboard");
      return true;

    } catch (err) {
      console.error("Login Error:", err);
      setError("เกิดข้อผิดพลาดในการเชื่อมต่อ");
      return false;
    }
  };

  // 3. ฟังก์ชัน Logout
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setError("");
    navigate("/"); // หรือ /login
  };

  const value = {
    user,
    handleLogin, 
    logout,
    error, // ส่ง Error ออกไปให้หน้า Login แสดงผล
    isAuthenticated: !!user,
  };

  if (loading) {
     return <div>Loading...</div>; 
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};