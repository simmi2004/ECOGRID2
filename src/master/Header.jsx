import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const location = useLocation();

  const hideNavPaths = ["/", "/login", "/role-selection", "/admin-login", "/admin-dashboard"];
  const shouldHideNav = hideNavPaths.includes(location.pathname);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const navItems = [
    { name: "Home", path: "/home" },
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
          to="/home"
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
          {!shouldHideNav && (
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

              {/* CTA BUTTONS */}
              <li className="nav-item ms-lg-3 d-flex gap-2">
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
                <Link
                  to="/"
                  onClick={handleNavCollapse}
                  className="btn"
                  style={{
                    backgroundColor: "transparent",
                    color: "#ade6f0",
                    border: "2px solid #ade6f0",
                    fontWeight: "bold",
                    borderRadius: "20px",
                    padding: "4px 15px",
                    transition: "0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#ade6f0";
                    e.target.style.color = "#07065a";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "#ade6f0";
                  }}
                >
                  Logout
                </Link>
              </li>

            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;