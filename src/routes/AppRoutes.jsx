import { Routes, Route, Router } from "react-router-dom";
import Login from "../pages/Login";
import Nopage404 from "../pages/Nopage404";
import Dashboard from "../pages/dashboard/Index";
import ProtectedRoute from "./ProtectedRoute";
import GuestRoute from "./GuestRoute";

import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

function AppRoutes() {
  return (
    <Routes>
      <Route
        element={
          <GuestRoute>
            <AuthLayout />
          </GuestRoute>
        }
      >
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      <Route path="*" element={<Nopage404 />} />
    </Routes>
  );
}

export default AppRoutes;
