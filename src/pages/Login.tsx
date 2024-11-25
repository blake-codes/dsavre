import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext"; // Import useAuth

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { login } = useAuth(); // Access the login function from AuthContext

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data: { message?: string; token?: string } = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to login");
      }

      console.log("Login successful:", data);
      localStorage.setItem("token", data.token || ""); // Save token
      login(); // Update authentication state
      navigate("/messages"); // Navigate to messages page
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          width: "300px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          backgroundColor: "#fff",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Login</h2>

        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", marginBottom: "8px" }}>
            Username:
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", marginBottom: "8px" }}>
            Password:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: loading ? "#cccccc" : "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
