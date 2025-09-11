import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const Login: React.FC = () => {
  const { login } = useAuth();
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ name });
    navigate("/dashboard");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: 300, margin: "2rem auto" }}
    >
      <h1>Login</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        style={{ display: "block", marginBottom: "1rem", width: "100%" }}
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default Login;
