import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [role, setRole] = useState("user");
  const [showPopup, setShowPopup] = useState(true);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Save role
    localStorage.setItem("role", role);

    // Navigate according to role
    if (role === "admin") {
      navigate("/admin-dashboard");
    } else {
      navigate("/user-dashboard");
    }

    setShowPopup(false);
  };

  return (
    <div>
      {/* LOGIN POPUP */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              width: "400px",
              background: "#fff",
              borderRadius: "15px",
              padding: "30px",
              boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
              position: "relative",
            }}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setShowPopup(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "15px",
                border: "none",
                background: "transparent",
                fontSize: "22px",
                cursor: "pointer",
              }}
            >
              ✖
            </button>

            <h2 className="text-center mb-4 text-primary fw-bold">
              Login Portal
            </h2>

            {/* ROLE SELECT */}
            <div className="mb-3">
              <label className="form-label fw-bold">
                Login As
              </label>

              <select
                className="form-select"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            {/* LOGIN FORM */}
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  required
                />
              </div>

              <button className="btn btn-primary w-100">
                Login
              </button>
            </form>
          </div>
        </div>
      )}

      {/* HOME PAGE CONTENT */}
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          background: "linear-gradient(135deg,#dbeafe,#eff6ff)",
        }}
      >
        <h1 className="fw-bold text-primary">
          Waste Management Website
        </h1>

        <p className="text-secondary">
          Welcome to Smart Recycling System
        </p>
      </div>
    </div>
  );
};

export default Admin;