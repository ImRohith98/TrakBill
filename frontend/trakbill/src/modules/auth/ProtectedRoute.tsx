import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useAuth();
  return user ? <>{children}</> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
