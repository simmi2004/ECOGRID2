import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

// ── Theme definitions ──────────────────────────────────────────────────────
const THEMES = [
  { id: "green-blue", label: "Green & Blue", colors: ["#10b981", "#3b82f6"] },
  { id: "purple",     label: "Purple",       colors: ["#8b5cf6", "#ec4899"] },
  { id: "ocean",      label: "Ocean",        colors: ["#0ea5e9", "#06b6d4"] },
  { id: "sunset",     label: "Sunset",       colors: ["#f97316", "#ef4444"] },
  { id: "rose",       label: "Rose",         colors: ["#f43f5e", "#fb7185"] },
  { id: "dark",       label: "Dark",         colors: ["#22d3ee", "#a78bfa"] },
];

function applyTheme(themeId) {
  document.documentElement.setAttribute("data-theme", themeId);
  localStorage.setItem("eco-theme", themeId);
}

function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [scrolled, setScrolled]             = useState(false);
  const [user, setUser]                     = useState(null);
  const [dropdownOpen, setDropdownOpen]     = useState(false);
  const [settingsOpen, setSettingsOpen]     = useState(false);
  const [activeTab, setActiveTab]           = useState("theme"); // "theme" | "profile"
  const [currentTheme, setCurrentTheme]     = useState(localStorage.getItem("eco-theme") || "green-blue");

  // Edit profile state
  const [editName, setEditName]         = useState("");
  const [editPassword, setEditPassword] = useState("");
  const [editSaving, setEditSaving]     = useState(false);
  const [editMsg, setEditMsg]           = useState(null); // {type:"success"|"error", text}

  const dropdownRef = useRef(null);
  const settingsRef = useRef(null);
  const location    = useLocation();
  const navigate    = useNavigate();

  const hideNavPaths = ["/", "/login", "/role-selection", "/admin-login", "/admin-dashboard"];
  const shouldHideNav = hideNavPaths.includes(location.pathname);

  // Apply saved theme on mount
  useEffect(() => { applyTheme(currentTheme); }, []);

  // Fetch user
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      const api = import.meta.env.VITE_API_URL;
      axios.get(`${api}/api/users/${userId}`)
        .then((res) => { setUser(res.data); setEditName(res.data.fullname); })
        .catch(() => setUser(null));
    }
  }, [location.pathname]);

  // Scroll shadow
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close on route change
  useEffect(() => {
    setIsNavCollapsed(true);
    setDropdownOpen(false);
    setSettingsOpen(false);
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const fn = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setDropdownOpen(false);
      if (settingsRef.current && !settingsRef.current.contains(e.target)) setSettingsOpen(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userRole");
    setUser(null);
    setDropdownOpen(false);
    navigate("/");
  };

  const handleThemeChange = (themeId) => {
    setCurrentTheme(themeId);
    applyTheme(themeId);
  };

  const handleProfileSave = async () => {
    if (!editName.trim()) { setEditMsg({ type: "error", text: "Name cannot be empty." }); return; }
    setEditSaving(true);
    setEditMsg(null);
    try {
      const userId = localStorage.getItem("userId");
      const payload = { fullname: editName };
      if (editPassword.trim()) payload.password = editPassword;
      const api = import.meta.env.VITE_API_URL;
      const res = await axios.put(`${api}/api/users/${userId}`, payload);
      setUser(res.data);
      setEditPassword("");
      setEditMsg({ type: "success", text: "Profile updated successfully!" });
    } catch (err) {
      setEditMsg({ type: "error", text: err.response?.data?.message || "Update failed." });
    } finally {
      setEditSaving(false);
    }
  };

  const getInitials = (name) => {
    if (!name) return "U";
    return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
  };

  const navItems = [
    { name: "Home",      path: "/home",     icon: "🏠" },
    { name: "About",     path: "/about",    icon: "🌿" },
    { name: "Services",  path: "/services", icon: "⚙️" },
    { name: "Recycling", path: "/recycle",  icon: "♻️" },
    { name: "Contact",   path: "/contact",  icon: "📬" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <style>{`
        .eco-navbar {
          background: ${scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.78)"};
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(0,0,0,0.07);
          box-shadow: ${scrolled ? "0 4px 24px rgba(0,0,0,0.08)" : "none"};
          transition: all 0.35s ease;
          padding: 0.6rem 0;
          position: sticky; top: 0; z-index: 1000;
        }
        .eco-brand { display:flex; align-items:center; gap:11px; text-decoration:none !important; }
        .eco-brand-icon {
          width:40px; height:40px;
          background: linear-gradient(145deg, var(--btn-grad-start,#0f172a), var(--btn-grad-end,#1e3a5f));
          border-radius:11px;
          display:flex; align-items:center; justify-content:center;
          box-shadow: 0 4px 14px rgba(0,0,0,0.25);
          flex-shrink:0; position:relative; overflow:hidden;
        }
        .eco-brand-title {
          font-size:1.18rem; font-weight:800; letter-spacing:-0.04em;
          color: var(--secondary-color,#0f172a);
        }
        .eco-brand-title span { color: var(--primary-color,#10b981); }
        .eco-brand-subtitle { font-size:0.6rem; font-weight:700; color:#64748b; letter-spacing:0.18em; text-transform:uppercase; }
        .eco-nav-link {
          position:relative; font-weight:600 !important; font-size:0.9rem;
          color:#334155 !important; padding:0.45rem 0.2rem !important;
          margin:0 0.6rem; text-decoration:none; transition:color 0.25s ease; white-space:nowrap;
        }
        .eco-nav-link::after {
          content:""; position:absolute; bottom:-2px; left:0; width:0%;
          height:2.5px; background: var(--primary-color,#10b981);
          border-radius:2px; transition:width 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .eco-nav-link:hover { color: var(--primary-color,#10b981) !important; }
        .eco-nav-link:hover::after, .eco-nav-link.active-link::after { width:100%; }
        .eco-nav-link.active-link { color: var(--primary-dark,#059669) !important; }
        .btn-pickup {
          background: linear-gradient(145deg, var(--btn-grad-start,#0f172a), var(--btn-grad-end,#1e3a5f));
          color:white !important; font-weight:700 !important; font-size:0.85rem !important;
          padding:0.5rem 1.2rem !important; border-radius:50px !important; border:none;
          box-shadow:0 4px 14px rgba(0,0,0,0.2); transition:all 0.3s ease !important;
          text-decoration:none; display:inline-flex; align-items:center; gap:6px;
        }
        .btn-pickup:hover {
          transform:translateY(-2px);
          background: linear-gradient(145deg, var(--btn-grad-end,#1e3a5f), var(--primary-color,#10b981));
          box-shadow:0 6px 20px rgba(0,0,0,0.25) !important; color:white !important;
        }
        .btn-logout {
          background:transparent; color:#334155 !important; font-weight:700 !important;
          font-size:0.85rem !important; padding:0.45rem 1.1rem !important;
          border-radius:50px !important; border:2px solid #cbd5e1 !important;
          transition:all 0.3s ease !important; text-decoration:none;
          display:inline-flex; align-items:center; gap:6px;
        }
        .btn-logout:hover { border-color:#ef4444 !important; color:#ef4444 !important; background:rgba(239,68,68,0.06); }
        .eco-toggler {
          border:2px solid rgba(0,0,0,0.15) !important; border-radius:8px !important;
          padding:0.35rem 0.6rem !important; background:rgba(0,0,0,0.04) !important;
          color:#334155 !important; font-size:1.1rem; transition:all 0.2s ease;
        }
        /* Profile avatar */
        .profile-avatar {
          width:38px; height:38px;
          background: linear-gradient(145deg, var(--btn-grad-start,#0f172a), var(--btn-grad-end,#1e3a5f));
          border-radius:50%; display:flex; align-items:center; justify-content:center;
          font-size:0.8rem; font-weight:700; color: var(--primary-color,#14b8a6);
          cursor:pointer; border:2px solid var(--primary-color,#14b8a6);
          box-shadow:0 2px 10px rgba(0,0,0,0.15); transition:all 0.25s ease;
          flex-shrink:0; user-select:none;
        }
        .profile-avatar:hover { transform:scale(1.07); box-shadow:0 4px 16px rgba(0,0,0,0.2); }
        /* Dropdown */
        .profile-dropdown-wrapper { position:relative; }
        .profile-dropdown {
          position:absolute; right:0; top:calc(100% + 10px); width:260px;
          background:#fff; border-radius:16px;
          box-shadow:0 12px 40px rgba(0,0,0,0.14); border:1px solid rgba(226,232,240,0.8);
          overflow:hidden; z-index:2000;
          animation:dropIn 0.2s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        @keyframes dropIn {
          from { opacity:0; transform:translateY(-8px) scale(0.97); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }
        .pd-header {
          padding:16px;
          background: linear-gradient(135deg, var(--btn-grad-start,#0f172a), var(--btn-grad-end,#1e3a5f));
          display:flex; align-items:center; gap:12px;
        }
        .pd-avatar {
          width:44px; height:44px; border-radius:50%;
          background:rgba(255,255,255,0.15); border:2px solid rgba(255,255,255,0.3);
          display:flex; align-items:center; justify-content:center;
          font-size:1rem; font-weight:700; color:#fff; flex-shrink:0;
        }
        .pd-name { font-weight:700; font-size:0.9rem; color:#fff; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .pd-email { font-size:0.72rem; color:rgba(255,255,255,0.55); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .pd-body { padding:8px; }
        .pd-menu-item {
          display:flex; align-items:center; gap:10px; padding:10px 12px;
          border-radius:9px; font-size:0.85rem; font-weight:600; color:#334155;
          cursor:pointer; transition:background 0.2s; border:none; background:none; width:100%; text-align:left;
        }
        .pd-menu-item:hover { background:#f1f5f9; }
        .pd-menu-item.danger { color:#ef4444; }
        .pd-menu-item.danger:hover { background:rgba(239,68,68,0.07); }
        .pd-divider { height:1px; background:#f1f5f9; margin:4px 8px; }
        /* Settings panel */
        .settings-overlay {
          position:fixed; inset:0; background:rgba(0,0,0,0.4);
          backdrop-filter:blur(4px); z-index:3000;
          animation:fadeIn 0.2s ease;
        }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        .settings-panel {
          position:fixed; top:0; right:0; height:100vh; width:360px; max-width:95vw;
          background:#fff; box-shadow:-8px 0 40px rgba(0,0,0,0.15);
          z-index:3001; display:flex; flex-direction:column;
          animation:slideIn 0.3s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        @keyframes slideIn { from{transform:translateX(100%)} to{transform:translateX(0)} }
        .settings-header {
          padding:20px 20px 0;
          background: linear-gradient(135deg, var(--btn-grad-start,#0f172a), var(--btn-grad-end,#1e3a5f));
          color:#fff;
        }
        .settings-tabs { display:flex; gap:4px; margin-top:16px; }
        .settings-tab {
          flex:1; padding:9px; border:none; border-radius:8px 8px 0 0;
          font-size:0.82rem; font-weight:700; cursor:pointer; transition:all 0.2s;
          background:rgba(255,255,255,0.1); color:rgba(255,255,255,0.65);
        }
        .settings-tab.active { background:#fff; color: var(--btn-grad-start,#0f172a); }
        .settings-body { flex:1; overflow-y:auto; padding:20px; }
        .theme-grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
        .theme-card {
          border:2px solid #e2e8f0; border-radius:12px; padding:12px 10px;
          cursor:pointer; transition:all 0.2s; text-align:center;
          background:#f8fafc;
        }
        .theme-card:hover { border-color: var(--primary-color,#10b981); transform:translateY(-2px); }
        .theme-card.selected { border-color: var(--primary-color,#10b981); background: var(--primary-light,#d1fae5); }
        .theme-swatches { display:flex; gap:4px; justify-content:center; margin-bottom:6px; }
        .theme-swatch { width:18px; height:18px; border-radius:50%; }
        .theme-label { font-size:0.78rem; font-weight:600; color:#334155; }
        .settings-input {
          width:100%; padding:0.75rem 1rem; border-radius:10px;
          border:1.5px solid #e2e8f0; background:#f8fafc; color:#1e293b;
          font-size:0.9rem; outline:none; transition:border-color 0.2s, box-shadow 0.2s;
          box-sizing:border-box;
        }
        .settings-input:focus { border-color: var(--primary-color,#10b981); box-shadow:0 0 0 3px var(--primary-light,#d1fae5); }
        .settings-input:disabled { opacity:0.55; cursor:not-allowed; }
        .settings-save-btn {
          width:100%; padding:0.85rem; border-radius:10px; border:none;
          background: linear-gradient(135deg, var(--btn-grad-start,#0f172a), var(--btn-grad-end,#1e3a5f));
          color:#fff; font-weight:700; font-size:0.92rem; cursor:pointer;
          box-shadow:0 4px 14px rgba(0,0,0,0.2); transition:transform 0.2s, box-shadow 0.2s;
        }
        .settings-save-btn:hover:not(:disabled) { transform:translateY(-2px); box-shadow:0 6px 20px rgba(0,0,0,0.25); }
        .settings-save-btn:disabled { opacity:0.6; cursor:not-allowed; }
        .settings-label { font-size:0.78rem; font-weight:700; color:#64748b; letter-spacing:0.08em; text-transform:uppercase; margin-bottom:6px; display:block; }
        @media(max-width:991px){
          .eco-mobile-menu { background:rgba(255,255,255,0.97); backdrop-filter:blur(16px); border-top:1px solid rgba(0,0,0,0.06); border-radius:0 0 16px 16px; padding:1rem 0.5rem 1.2rem; margin-top:0.5rem; box-shadow:0 12px 32px rgba(0,0,0,0.08); }
          .eco-nav-link { margin:0; padding:0.6rem 0.8rem !important; border-radius:8px; display:block; }
          .eco-nav-link::after { display:none; }
          .mobile-cta { display:flex; flex-direction:column; gap:8px; margin-top:0.8rem; padding:0 0.8rem; }
          .btn-pickup, .btn-logout { justify-content:center; padding:0.65rem 1rem !important; }
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav className="eco-navbar navbar navbar-expand-lg">
        <div className="container">

          {/* LOGO */}
          <Link className="eco-brand navbar-brand" to="/home">
            <div className="eco-brand-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M7 19H4.5C3.12 19 2 17.88 2 16.5C2 15.12 3.12 14 4.5 14H5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M5 14C5 10.13 8.13 7 12 7C14.76 7 17.16 8.48 18.5 10.72" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M17 19L19.5 21.5L22 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.5 21.5V14.5C19.5 12.57 18.07 10.96 16.2 10.56" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M7 19L4.5 16.5L7 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="eco-brand-text">
              <span className="eco-brand-title">Eco<span>Manage</span></span>
              <span className="eco-brand-subtitle">Waste Solutions</span>
            </div>
          </Link>

          {/* MOBILE TOGGLE */}
          <button className="eco-toggler navbar-toggler" type="button"
            onClick={() => setIsNavCollapsed(!isNavCollapsed)} aria-label="Toggle navigation">
            {isNavCollapsed ? "☰" : "✕"}
          </button>

          {/* NAV LINKS */}
          <div className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}>
            {!shouldHideNav && (
              <div className="d-lg-flex align-items-center w-100">
                <ul className="navbar-nav mx-auto align-items-lg-center eco-mobile-menu">
                  {navItems.map((item, index) => (
                    <li className="nav-item" key={index}>
                      <Link to={item.path} className={`eco-nav-link${isActive(item.path) ? " active-link" : ""}`}>
                        <span className="d-lg-none me-1">{item.icon}</span>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* CTA + Profile */}
                <div className="d-flex align-items-center gap-2 mobile-cta">
                  <Link to="/pickup" className="btn-pickup">🚛 Request Pickup</Link>

                  {user && (
                    <div className="profile-dropdown-wrapper" ref={dropdownRef}>
                      {/* Avatar */}
                      <div className="profile-avatar" onClick={() => { setDropdownOpen(!dropdownOpen); setSettingsOpen(false); }} title={user.fullname}>
                        {getInitials(user.fullname)}
                      </div>

                      {/* Dropdown menu */}
                      {dropdownOpen && (
                        <div className="profile-dropdown">
                          <div className="pd-header">
                            <div className="pd-avatar">{getInitials(user.fullname)}</div>
                            <div style={{ overflow: "hidden" }}>
                              <div className="pd-name">{user.fullname}</div>
                              <div className="pd-email">{user.email}</div>
                            </div>
                          </div>
                          <div className="pd-body">
                            {/* Role + Status badges */}
                            <div style={{ display:"flex", gap:"8px", padding:"8px 12px" }}>
                              <span style={{ background: user.role==="ADMIN" ? "rgba(239,68,68,0.1)" : "rgba(16,185,129,0.1)", color: user.role==="ADMIN" ? "#ef4444" : "#059669", padding:"2px 10px", borderRadius:"20px", fontSize:"0.72rem", fontWeight:"700" }}>
                                {user.role}
                              </span>
                              <span style={{ background: user.isActive ? "rgba(16,185,129,0.1)" : "rgba(100,116,139,0.1)", color: user.isActive ? "#059669" : "#64748b", padding:"2px 10px", borderRadius:"20px", fontSize:"0.72rem", fontWeight:"700" }}>
                                {user.isActive ? "● Active" : "○ Inactive"}
                              </span>
                            </div>

                            <div className="pd-divider" />

                            {/* Settings */}
                            <button className="pd-menu-item" onClick={() => { setDropdownOpen(false); setSettingsOpen(true); setActiveTab("theme"); }}>
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                              </svg>
                              Settings
                            </button>

                            <button className="pd-menu-item" onClick={() => { setDropdownOpen(false); setSettingsOpen(true); setActiveTab("profile"); }}>
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                              </svg>
                              Edit Profile
                            </button>

                            <div className="pd-divider" />

                            <button className="pd-menu-item danger" onClick={handleLogout}>
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
                              </svg>
                              Sign Out
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {!user && <Link to="/" className="btn-logout">🚪 Logout</Link>}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* ── SETTINGS PANEL ── */}
      {settingsOpen && (
        <>
          <div className="settings-overlay" onClick={() => setSettingsOpen(false)} />
          <div className="settings-panel" ref={settingsRef}>

            {/* Panel header + tabs */}
            <div className="settings-header">
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                <div>
                  <h5 style={{ margin:0, fontWeight:800, fontSize:"1.05rem" }}>Settings</h5>
                  <p style={{ margin:0, fontSize:"0.78rem", opacity:0.6 }}>Customize your experience</p>
                </div>
                <button onClick={() => setSettingsOpen(false)} style={{ background:"rgba(255,255,255,0.15)", border:"none", borderRadius:"8px", width:"32px", height:"32px", color:"#fff", cursor:"pointer", fontSize:"1rem", display:"flex", alignItems:"center", justifyContent:"center" }}>✕</button>
              </div>
              <div className="settings-tabs">
                <button className={`settings-tab${activeTab==="theme" ? " active" : ""}`} onClick={() => setActiveTab("theme")}>🎨 Theme</button>
                <button className={`settings-tab${activeTab==="profile" ? " active" : ""}`} onClick={() => setActiveTab("profile")}>👤 Profile</button>
              </div>
            </div>

            {/* Panel body */}
            <div className="settings-body">

              {/* ── THEME TAB ── */}
              {activeTab === "theme" && (
                <div>
                  <p style={{ fontSize:"0.82rem", color:"#64748b", marginBottom:"16px" }}>Choose a color theme for the website.</p>
                  <div className="theme-grid">
                    {THEMES.map((t) => (
                      <div key={t.id} className={`theme-card${currentTheme===t.id ? " selected" : ""}`} onClick={() => handleThemeChange(t.id)}>
                        <div className="theme-swatches">
                          {t.colors.map((c, i) => <div key={i} className="theme-swatch" style={{ background: c }} />)}
                        </div>
                        <div className="theme-label">{t.label}</div>
                        {currentTheme===t.id && <div style={{ fontSize:"0.7rem", color:"var(--primary-color,#10b981)", fontWeight:700, marginTop:2 }}>✓ Active</div>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── PROFILE TAB ── */}
              {activeTab === "profile" && (
                <div>
                  <p style={{ fontSize:"0.82rem", color:"#64748b", marginBottom:"20px" }}>Update your name or password. Email cannot be changed.</p>

                  {/* Avatar preview */}
                  <div style={{ display:"flex", justifyContent:"center", marginBottom:"24px" }}>
                    <div style={{ width:"64px", height:"64px", borderRadius:"50%", background:`linear-gradient(145deg, var(--btn-grad-start,#0f172a), var(--btn-grad-end,#1e3a5f))`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.4rem", fontWeight:800, color:"var(--primary-color,#14b8a6)", border:"3px solid var(--primary-color,#14b8a6)" }}>
                      {getInitials(editName || user?.fullname)}
                    </div>
                  </div>

                  {/* Full name */}
                  <div style={{ marginBottom:"16px" }}>
                    <label className="settings-label">Full Name</label>
                    <input className="settings-input" value={editName} onChange={(e) => setEditName(e.target.value)} placeholder="Your full name" />
                  </div>

                  {/* Email (read-only) */}
                  <div style={{ marginBottom:"16px" }}>
                    <label className="settings-label">Email (cannot be changed)</label>
                    <input className="settings-input" value={user?.email || ""} disabled />
                  </div>

                  {/* New password */}
                  <div style={{ marginBottom:"24px" }}>
                    <label className="settings-label">New Password <span style={{ fontWeight:400, textTransform:"none", letterSpacing:0 }}>(leave blank to keep current)</span></label>
                    <input className="settings-input" type="password" value={editPassword} onChange={(e) => setEditPassword(e.target.value)} placeholder="Enter new password" />
                  </div>

                  {/* Feedback message */}
                  {editMsg && (
                    <div style={{ padding:"10px 14px", borderRadius:"10px", marginBottom:"16px", fontSize:"0.85rem", fontWeight:600, background: editMsg.type==="success" ? "rgba(16,185,129,0.1)" : "rgba(239,68,68,0.1)", color: editMsg.type==="success" ? "#059669" : "#ef4444", border: `1px solid ${editMsg.type==="success" ? "rgba(16,185,129,0.25)" : "rgba(239,68,68,0.25)"}` }}>
                      {editMsg.type==="success" ? "✅" : "⚠️"} {editMsg.text}
                    </div>
                  )}

                  <button className="settings-save-btn" onClick={handleProfileSave} disabled={editSaving}>
                    {editSaving ? "Saving..." : "Save Changes"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Header;
