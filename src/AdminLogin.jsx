import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "simmi2004@gmail.com" && password === "2004") {
      navigate("/admin-dashboard");
    } else {
      alert("Invalid Admin Credentials");
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
            Admin Login
          </h2>
          <p style={{ color: "#6c757d" }}>Please enter admin credentials.</p>
        </div>

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
              placeholder="Enter admin email"
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
              placeholder="Enter admin password"
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
            Login to Dashboard
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

export default AdminLogin;
