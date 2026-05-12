import React from "react";
import { useNavigate } from "react-router-dom";

const RoleSelection = () => {
  const navigate = useNavigate();

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
          maxWidth: "500px",
          textAlign: "center",
          animation: "fadeIn 0.5s ease-out",
        }}
      >
        <div style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ color: "#071976", fontWeight: "bold", marginBottom: "0.5rem" }}>
            Select Your Role
          </h2>
          <p style={{ color: "#6c757d" }}>Choose how you want to proceed.</p>
        </div>

        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center" }}>
          <button
            onClick={() => navigate("/home")}
            style={{
              flex: 1,
              padding: "1.5rem",
              borderRadius: "15px",
              border: "2px solid #071976",
              background: "transparent",
              color: "#071976",
              fontWeight: "bold",
              fontSize: "1.2rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.background = "#071976";
              e.target.style.color = "#ffffff";
            }}
            onMouseOut={(e) => {
              e.target.style.background = "transparent";
              e.target.style.color = "#071976";
            }}
          >
            User
          </button>

          <button
            onClick={() => navigate("/admin-login")}
            style={{
              flex: 1,
              padding: "1.5rem",
              borderRadius: "15px",
              border: "2px solid #121cd6",
              background: "transparent",
              color: "#121cd6",
              fontWeight: "bold",
              fontSize: "1.2rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.background = "#121cd6";
              e.target.style.color = "#ffffff";
            }}
            onMouseOut={(e) => {
              e.target.style.background = "transparent";
              e.target.style.color = "#121cd6";
            }}
          >
            Admin
          </button>
        </div>
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

export default RoleSelection;
