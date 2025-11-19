import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

import { Button, Input, Form } from "antd";

export default function Login() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");

  const handleSubmit = () => {
    login(username, "password");
  };

  return (
    <div style={{ width: 300, margin: "50px auto" }}>
      <h2>Login</h2>

      <Form onFinish={handleSubmit}>
        <Form.Item>
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
