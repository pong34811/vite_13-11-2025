import { Menu, Button, Layout } from "antd";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const { Header } = Layout;

export default function Navbar() {
  const { user, logout, isAuthenticated } = useAuth();

  // 1. สร้าง Array ของ items ตามเงื่อนไข isAuthenticated
  const menuItems = isAuthenticated
    ? [
        {
          key: "user",
          label: (
            <span style={{ color: "#fff", cursor: "default" }}>
              Hi, {user?.gmail}
            </span>
          ),
          disabled: true, // ทำให้กดไม่ได้ (เพราะเป็นแค่ป้ายชื่อ)
        },
        {
          key: "dashboard",
          label: <Link to="/dashboard">Dashboard</Link>,
        },
        {
          key: "logout",
          label: (
            <Button type="primary" onClick={logout} danger>
              Logout
            </Button>
          ),
        },
      ]
    : [
        {
          key: "login",
          label: (
            <Link to="/login">
              <Button type="primary">Login</Button>
            </Link>
          ),
        },
      ];

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Logo / ชื่อเว็บไซต์ */}
      <div style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
        My App
      </div>

      {/* Menu แบบใหม่ ใช้ prop 'items' */}
      <Menu
        theme="dark"
        mode="horizontal"
        selectable={false}
        items={menuItems}
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "flex-end",
          minWidth: 0,
        }}
      />
    </Header>
  );
}
