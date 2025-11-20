import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import logo from "../assets/images/logo.webp";

import { Button, Input, Form } from "antd";

export default function Login() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");

  const handleSubmit = () => {
    login(username, "password");
  };

  return (
    <div style={{ width: 300, margin: "50px auto" }}>
      <img
        src={logo}
        alt="Logo"
        style={{
          display: "block",
          margin: "0 auto 20px",
          width: 100,
        }}
      />

      <h2>Login</h2>

      <Form onFinish={handleSubmit}>
        <Form.Item
          rules={[{ required: true, message: "Please input your username!" }]}
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        >
          <Input
            placeholder="Username"
            value={username}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
