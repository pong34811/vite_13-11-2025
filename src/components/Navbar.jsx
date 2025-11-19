import { Menu, Button, Layout } from "antd";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const { Header } = Layout;

export default function Navbar() {
  const { user, logout, isAuthenticated } = useAuth();

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

      {/* Menu */}
      <Menu
        theme="dark"
        mode="horizontal"
        selectable={false}
        style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}
      >
        {isAuthenticated ? (
          <>
            <Menu.Item key="user" disabled>
              <div style={{ color: "#fff" }}>Hi, {user.name}</div>
            </Menu.Item>
            <Menu.Item key="dashboard">
              <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="logout">
              <Button type="primary" onClick={logout}>
                Logout
              </Button>
            </Menu.Item>
          </>
        ) : (
          <Menu.Item key="login">
            <Link to="/login">
              <Button type="primary">Login</Button>
            </Link>
          </Menu.Item>
        )}
      </Menu>
    </Header>
  );
}
