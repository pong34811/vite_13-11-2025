import { Routes, Route, Router } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/dashboard/Index";

import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

function AppRoutes() {
  return (

      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>

  );
}

export default AppRoutes;
