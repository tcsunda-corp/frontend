import { Navigate } from "react-router-dom";
import { useAuth } from "context/AuthContext";

// Wrap any route element with this to require a logged-in user.
// If not authenticated, it bounces the user to the sign-in page.
export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/auth/sign-in" replace />;
  }

  return children;
}
