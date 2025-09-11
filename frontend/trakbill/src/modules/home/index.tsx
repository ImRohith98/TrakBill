import React from "react";
import { useAuth } from "../../context/authContext";

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Hello, {user?.name}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
