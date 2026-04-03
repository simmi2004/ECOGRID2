import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const location = useLocation();

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Recycling", path: "/recycle" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        background: "linear-gradient(90deg, #121cd6, #071976)",
        boxShadow: "0 2px 10px rgba(144, 130, 204, 0.2)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div className="container">

        {/* LOGO */}
        <Link
          className="navbar-brand fw-bold"
          to="/"
          style={{ fontSize: "22px" }}
        >
           <span className="text-success">♻</span>
          Waste <span style={{ color: "#ade6f0", fontWeight: "bold" }}>  Management</span>
        </Link>

        {/* TOGGLE */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavCollapse}
        >
          ☰
        </button>

        {/* NAV LINKS */}
        <div className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}>
          <ul className="navbar-nav ms-auto align-items-lg-center">

            {navItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <Link
                  to={item.path}
                  onClick={handleNavCollapse}
                  className="nav-link"
                  style={{
                    margin: "0 10px",
                    fontWeight: "500",
                    color:
                      location.pathname === item.path
                        ? "#0dccfb"
                        : "white",
                    borderBottom:
                      location.pathname === item.path
                        ? "2px solid #b9f5e8"
                        : "none",
                    transition: "0.3s",
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* CTA BUTTON */}
            <li className="nav-item ms-lg-3">
              <Link
                to="/pickup"
                onClick={handleNavCollapse}
                className="btn"
                style={{
                  backgroundColor: "#84e4eb",
                  color: "#07065a",
                  fontWeight: "bold",
                  borderRadius: "20px",
                  padding: "6px 15px",
                }}
              >
                Request Pickup
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;