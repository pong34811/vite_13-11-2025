import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Layout } from "antd";

const { Header, Content, Footer: AntFooter } = Layout;

export default function MainLayout() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Navbar */}
      <Header style={{ background: "#fff", padding: 0 }}>
        <Navbar />
      </Header>

      {/* Main Content */}
      <Content style={{ padding: "20px" }}>
        <div className="container">
          <Outlet />
        </div>
      </Content>

      {/* Footer */}
      <AntFooter style={{ background: "#fff", padding: 0 }}>
        <Footer />
      </AntFooter>
    </Layout>
  );
}
