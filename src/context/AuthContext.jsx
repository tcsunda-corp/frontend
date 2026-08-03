import React, { createContext, useContext, useState, useEffect } from "react";
import authApi from "api/auth";

const AuthContext = createContext(null);

const STORAGE_KEY = "myapp_auth";

function readStoredAuth() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(() => readStoredAuth());

  useEffect(() => {
    if (auth) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(auth));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [auth]);

  const checkCredentials = async ({ email, password }) => {
    return authApi.checkCredentials({ email, password });
  };

  const login = async ({ email, password, outletId }) => {
    const result = await authApi.login({ email, password, outletId });
    setAuth({ token: result.token, user: result.user });
    return result;
  };

  const registerOwner = async ({ email, password, userName, outletName }) => {
    return authApi.registerOwner({ email, password, userName, outletName });
  };

  const logout = () => {
    setAuth(null);
  };

  const value = {
    token: auth?.token || null,
    user: auth?.user || null,
    isAuthenticated: Boolean(auth?.token),
    login,
    checkCredentials,
    registerOwner,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}
