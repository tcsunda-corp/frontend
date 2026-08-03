// Small wrapper around fetch() to talk to the Golang backend.
// Base URL is read from .env (REACT_APP_API_URL) so it's easy to change
// between local dev and production without touching the code.

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

async function request(path, { method = "GET", body, token } = {}) {
  const headers = { "Content-Type": "application/json" };
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(`${API_URL}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  let data = null;
  try {
    data = await res.json();
  } catch {
    // response had no JSON body, that's fine for some endpoints
  }

  if (!res.ok) {
    const message = data?.error || `Request failed (${res.status})`;
    throw new Error(message);
  }

  return data;
}

export function registerOwner({ email, password, userName, outletName }) {
  return request("/api/v1/auth/register", {
    method: "POST",
    body: {
      email,
      password,
      user_name: userName,
      outlet_name: outletName,
    },
  });
}

export function checkCredentials({ email, password }) {
  return request("/api/v1/auth/check-credentials", {
    method: "POST",
    body: { email, password },
  });
}

export function login({ email, password, outletId }) {
  return request("/api/v1/auth/login", {
    method: "POST",
    body: {
      email,
      password,
      // omit outlet_id entirely for Owner logins (outletId is undefined/null)
      ...(outletId != null ? { outlet_id: outletId } : {}),
    },
  });
}

export default { registerOwner, checkCredentials, login };
