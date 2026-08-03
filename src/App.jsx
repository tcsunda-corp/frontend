import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import { AuthProvider } from "context/AuthContext";
import ProtectedRoute from "components/auth/ProtectedRoute";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="auth/*" element={<AuthLayout />} />
        <Route
          path="admin/*"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        />
        <Route
          path="rtl/*"
          element={
            <ProtectedRoute>
              <RtlLayout />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to="/admin" replace />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
