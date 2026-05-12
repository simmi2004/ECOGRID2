import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    // Admin login check
    if (email === "simmi2004@gmail.com" && password === "2004") {
      localStorage.setItem("userRole", "ADMIN");
      navigate("/admin-dashboard");
      return;
    }

    // User login / creation
    try {
      const response = await axios.post("http://localhost:3000/api/users/login", {
        email,
        password
      });

      if (response.status === 200 || response.status === 201) {
        localStorage.setItem("userRole", "USER");
        localStorage.setItem("userId", response.data.user._id);
        navigate("/home");
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("An error occurred during login. Please try again.");
      }
    }
  };

  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #f0f4fd 0%, #e1e9f9 100%)",
        padding: "2rem",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          padding: "3rem",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
          width: "100%",
          maxWidth: "450px",
          textAlign: "center",
          animation: "fadeIn 0.5s ease-out",
        }}
      >
        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ color: "#071976", fontWeight: "bold", marginBottom: "0.5rem" }}>
            Welcome Back
          </h2>
          <p style={{ color: "#6c757d" }}>Please enter your details to sign in.</p>
        </div>

        {error && (
          <div style={{ color: "#d9534f", marginBottom: "1.5rem", fontSize: "0.9rem", fontWeight: "500" }}>
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} style={{ textAlign: "left" }}>
          <div style={{ marginBottom: "1.5rem" }}>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                color: "#495057",
                fontWeight: "500",
              }}
            >
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              style={{
                width: "100%",
                padding: "0.85rem 1rem",
                borderRadius: "10px",
                border: "1px solid #ced4da",
                outline: "none",
                transition: "border-color 0.3s ease",
                boxSizing: "border-box",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#071976")}
              onBlur={(e) => (e.target.style.borderColor = "#ced4da")}
            />
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                color: "#495057",
                fontWeight: "500",
              }}
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              style={{
                width: "100%",
                padding: "0.85rem 1rem",
                borderRadius: "10px",
                border: "1px solid #ced4da",
                outline: "none",
                transition: "border-color 0.3s ease",
                boxSizing: "border-box",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#071976")}
              onBlur={(e) => (e.target.style.borderColor = "#ced4da")}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "1rem",
              borderRadius: "10px",
              border: "none",
              background: "linear-gradient(90deg, #121cd6, #071976)",
              color: "#ffffff",
              fontWeight: "bold",
              fontSize: "1rem",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(18, 28, 214, 0.3)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 6px 20px rgba(18, 28, 214, 0.4)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 15px rgba(18, 28, 214, 0.3)";
            }}
          >
            Sign In
          </button>
        </form>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default Login;
