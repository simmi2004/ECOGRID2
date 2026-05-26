import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserCrud from "./UserCrud";
import PickupCrud from "./PickupCrud";
import ContactCrud from "./ContactCrud";
import StaffPanel from "./StaffPanel";

const AdminDashboard = () => {
  const [activeTab, setActiveTab]   = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [infoList, setInfoList]     = useState([
    { id: 1, title: "City Center Bin Full", description: "Need pickup at Zone A", date: "2026-05-12" },
    { id: 2, title: "New Recycling Plant",  description: "Operational from next month", date: "2026-05-10" },
  ]);
  const [formData, setFormData] = useState({
    title: "", description: "",
    date: new Date().toISOString().split("T")[0],
  });

  const navigate = useNavigate();

  const handleInfoSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return;
    setInfoList([{ id: Date.now(), ...formData }, ...infoList]);
    setFormData({ title: "", description: "", date: new Date().toISOString().split("T")[0] });
  };

  const deleteInfo = (id) => setInfoList(infoList.filter((item) => item.id !== id));
  const handleLogout = () => navigate("/");

  const navItems = [
    { id: "dashboard",  icon: "📊", label: "Overview"    },
    { id: "storeInfo",  icon: "🗂️", label: "Information" },
    { id: "users",      icon: "👥", label: "Users"       },
    { id: "staff",      icon: "👷", label: "Staff Panel" },
    { id: "pickups",    icon: "🚛", label: "Pickups"     },
    { id: "contacts",   icon: "✉️", label: "Messages"    },
  ];

  const NavButton = ({ id, icon, label }) => (
    <button
      onClick={() => { setActiveTab(id); setSidebarOpen(false); }}
      style={{
        width: "100%", padding: "14px 20px", textAlign: "left",
        background: activeTab === id ? "rgba(16,185,129,0.1)" : "transparent",
        border: "none",
        color: activeTab === id ? "#059669" : "#64748b",
        fontSize: "0.92rem", fontWeight: activeTab === id ? "700" : "600",
        cursor: "pointer", transition: "all 0.2s ease",
        borderRight: activeTab === id ? "3px solid #10b981" : "3px solid transparent",
        display: "flex", alignItems: "center", gap: "12px",
        borderRadius: "0 12px 12px 0", marginBottom: "4px",
      }}
      onMouseOver={(e) => { if (activeTab !== id) { e.currentTarget.style.background = "rgba(0,0,0,0.03)"; e.currentTarget.style.color = "#1e293b"; } }}
      onMouseOut={(e)  => { if (activeTab !== id) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#64748b"; } }}
    >
      <span style={{ fontSize: "18px" }}>{icon}</span>
      {label}
    </button>
  );

  const PageHeader = ({ icon, title, subtitle }) => (
    <div style={{ background: "linear-gradient(135deg,rgba(255,255,255,0.9),rgba(255,255,255,0.5))", backdropFilter: "blur(10px)", borderRadius: "16px", padding: "24px", marginBottom: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.04)", border: "1px solid rgba(255,255,255,0.6)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <div style={{ background: "#10b981", color: "white", width: "46px", height: "46px", borderRadius: "12px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "22px", flexShrink: 0 }}>{icon}</div>
        <div>
          <h2 style={{ margin: 0, color: "#0f172a", fontWeight: "800", fontSize: "clamp(1.1rem,3vw,1.5rem)", letterSpacing: "-0.03em" }}>{title}</h2>
          <p style={{ margin: 0, color: "#64748b", fontSize: "0.88rem" }}>{subtitle}</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        .admin-layout { display:flex; min-height:100vh; background:#f8fafc; font-family:'Inter',sans-serif; position:relative; }

        /* Sidebar */
        .admin-sidebar {
          width: 260px; background:#fff; display:flex; flex-direction:column;
          box-shadow: 4px 0 24px rgba(0,0,0,0.04); border-right:1px solid #f1f5f9;
          z-index: 200; flex-shrink:0; transition: transform 0.3s ease;
        }

        /* Mobile sidebar */
        @media(max-width:768px){
          .admin-sidebar {
            position: fixed; top:0; left:0; height:100vh;
            transform: translateX(-100%);
          }
          .admin-sidebar.open { transform: translateX(0); }
          .admin-main { padding: 16px !important; }
          .admin-overlay { display:block !important; }
          .admin-topbar { display:flex !important; }
          .stat-grid { grid-template-columns: 1fr 1fr !important; gap:12px !important; }
          .info-flex { flex-direction:column !important; }
        }
        @media(max-width:480px){
          .stat-grid { grid-template-columns: 1fr !important; }
        }

        /* Overlay */
        .admin-overlay {
          display:none; position:fixed; inset:0;
          background:rgba(0,0,0,0.45); z-index:199;
        }

        /* Top bar (mobile only) */
        .admin-topbar {
          display:none; align-items:center; justify-content:space-between;
          padding:14px 16px; background:#fff;
          border-bottom:1px solid #f1f5f9;
          box-shadow:0 2px 8px rgba(0,0,0,0.05);
          position:sticky; top:0; z-index:100;
        }
        .hamburger-btn {
          background:none; border:none; cursor:pointer;
          width:38px; height:38px; border-radius:10px;
          background:rgba(16,185,129,0.08);
          display:flex; align-items:center; justify-content:center;
          font-size:1.2rem; color:#10b981;
        }

        /* Main content */
        .admin-main { flex:1; padding:32px; overflow-y:auto; height:100vh; }

        /* Stat cards */
        .stat-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:20px; margin-bottom:32px; }
        .stat-card { background:#fff; padding:24px; border-radius:16px; box-shadow:0 4px 20px rgba(0,0,0,0.04); border:1px solid #f1f5f9; position:relative; overflow:hidden; }

        /* Table responsive */
        .admin-table-wrap { overflow-x:auto; -webkit-overflow-scrolling:touch; }
        .admin-table { width:100%; border-collapse:separate; border-spacing:0 6px; min-width:500px; }
        .admin-table th { background:transparent; color:#64748b; font-size:0.8rem; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; padding:0 14px 10px; border-bottom:2px solid #f1f5f9; white-space:nowrap; }
        .admin-table td { padding:14px; background:#f8fafc; color:#64748b; font-size:0.9rem; }
        .admin-table td:first-child { border-radius:10px 0 0 10px; }
        .admin-table td:last-child  { border-radius:0 10px 10px 0; }

        /* Info flex */
        .info-flex { display:flex; gap:24px; flex-wrap:wrap; }
        .info-form { flex:1 1 340px; background:#fff; padding:28px; border-radius:16px; box-shadow:0 4px 20px rgba(0,0,0,0.04); border:1px solid #f1f5f9; }
        .info-table { flex:2 1 400px; background:#fff; padding:28px; border-radius:16px; box-shadow:0 4px 20px rgba(0,0,0,0.04); border:1px solid #f1f5f9; }

        .admin-input {
          width:100%; padding:11px 14px; border:1.5px solid #e2e8f0;
          border-radius:10px; outline:none; color:#1e293b; font-size:0.9rem;
          transition:border-color 0.2s, box-shadow 0.2s; box-sizing:border-box;
          background:#f8fafc;
        }
        .admin-input:focus { border-color:#10b981; box-shadow:0 0 0 3px rgba(16,185,129,0.12); background:#fff; }

        .admin-save-btn {
          width:100%; padding:13px; border:none; border-radius:10px;
          background:linear-gradient(135deg,#10b981,#059669);
          color:#fff; font-weight:700; font-size:0.95rem; cursor:pointer;
          box-shadow:0 4px 14px rgba(16,185,129,0.3); transition:transform 0.2s,box-shadow 0.2s;
        }
        .admin-save-btn:hover { transform:translateY(-2px); box-shadow:0 6px 20px rgba(16,185,129,0.4); }

        @keyframes fadeUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        .fade-up { animation:fadeUp 0.35s ease forwards; }
      `}</style>

      <div className="admin-layout">

        {/* Mobile overlay */}
        {sidebarOpen && <div className="admin-overlay" onClick={() => setSidebarOpen(false)} />}

        {/* ── SIDEBAR ── */}
        <div className={`admin-sidebar${sidebarOpen ? " open" : ""}`}>
          {/* Brand */}
          <div style={{ padding: "20px 24px 20px", borderBottom: "1px solid #f1f5f9" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ background: "linear-gradient(135deg,#10b981,#059669)", color: "white", width: "40px", height: "40px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", fontWeight: "800", flexShrink: 0 }}>A</div>
              <div>
                <div style={{ fontWeight: "800", color: "#0f172a", fontSize: "1rem" }}>Admin Panel</div>
                <div style={{ fontSize: "0.72rem", color: "#64748b" }}>System Dashboard</div>
              </div>
              {/* Close btn (mobile) */}
              <button onClick={() => setSidebarOpen(false)} style={{ marginLeft: "auto", background: "none", border: "none", cursor: "pointer", fontSize: "1.1rem", color: "#94a3b8", display: "none" }} className="sidebar-close">✕</button>
            </div>
          </div>

          {/* Nav */}
          <div style={{ flex: 1, paddingRight: "16px", paddingTop: "12px" }}>
            {navItems.map((item) => <NavButton key={item.id} {...item} />)}
          </div>

          {/* Logout */}
          <div style={{ padding: "20px 20px 24px", borderTop: "1px solid #f1f5f9" }}>
            <button onClick={handleLogout} style={{ width: "100%", padding: "12px", background: "white", color: "#ef4444", border: "1.5px solid rgba(239,68,68,0.2)", borderRadius: "12px", fontWeight: "700", cursor: "pointer", transition: "all 0.2s", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "0.9rem" }}
              onMouseOver={(e) => { e.currentTarget.style.background = "rgba(239,68,68,0.05)"; e.currentTarget.style.borderColor = "#ef4444"; }}
              onMouseOut={(e)  => { e.currentTarget.style.background = "white"; e.currentTarget.style.borderColor = "rgba(239,68,68,0.2)"; }}
            >
              🚪 Sign Out
            </button>
          </div>
        </div>

        {/* ── RIGHT SIDE ── */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>

          {/* Mobile top bar */}
          <div className="admin-topbar">
            <button className="hamburger-btn" onClick={() => setSidebarOpen(true)}>☰</button>
            <div style={{ fontWeight: "800", color: "#0f172a", fontSize: "1rem" }}>
              {navItems.find(n => n.id === activeTab)?.icon} {navItems.find(n => n.id === activeTab)?.label}
            </div>
            <button onClick={handleLogout} style={{ background: "none", border: "none", cursor: "pointer", color: "#ef4444", fontWeight: "700", fontSize: "0.82rem" }}>Sign Out</button>
          </div>

          {/* Main content */}
          <div className="admin-main">

            {/* ── DASHBOARD ── */}
            {activeTab === "dashboard" && (
              <div className="fade-up">
                <PageHeader icon="📊" title="Dashboard Overview" subtitle="High-level metrics and recent activities." />

                <div className="stat-grid">
                  {[
                    { icon: "👥", label: "Total Users",    value: "1,245", sub: "↑ 12% from last month", subColor: "#10b981" },
                    { icon: "🚛", label: "Active Pickups", value: "48",    sub: "8 pending assignment",  subColor: "#f59e0b" },
                    { icon: "🗂️", label: "Stored Info",    value: infoList.length, sub: "System records", subColor: "#64748b" },
                  ].map((s, i) => (
                    <div key={i} className="stat-card">
                      <div style={{ position: "absolute", top: "-16px", right: "-16px", fontSize: "80px", opacity: 0.05 }}>{s.icon}</div>
                      <div style={{ fontSize: "0.75rem", fontWeight: "700", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "10px" }}>{s.label}</div>
                      <div style={{ fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: "800", color: "#0f172a" }}>{s.value}</div>
                      <div style={{ marginTop: "10px", fontSize: "0.85rem", color: s.subColor, fontWeight: "600" }}>{s.sub}</div>
                    </div>
                  ))}
                </div>

                <div style={{ background: "#fff", padding: "28px", borderRadius: "16px", boxShadow: "0 4px 20px rgba(0,0,0,0.04)", border: "1px solid #f1f5f9" }}>
                  <h5 style={{ color: "#0f172a", marginBottom: "20px", fontWeight: "700" }}>Recent Activity</h5>
                  {[
                    { icon: "✅", bg: "rgba(16,185,129,0.1)", title: "Admin Session Started",         time: "Just now" },
                    { icon: "♻️", bg: "rgba(14,165,233,0.1)", title: "5 new pickup requests received", time: "Today at 9:00 AM" },
                    { icon: "👥", bg: "rgba(245,158,11,0.1)", title: "12 new users registered",        time: "This week" },
                  ].map((a, i) => (
                    <div key={i} style={{ padding: "14px 0", borderBottom: i < 2 ? "1px solid #f1f5f9" : "none", display: "flex", alignItems: "center", gap: "14px" }}>
                      <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: a.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", flexShrink: 0 }}>{a.icon}</div>
                      <div>
                        <div style={{ fontWeight: "600", color: "#1e293b", fontSize: "0.9rem" }}>{a.title}</div>
                        <div style={{ fontSize: "0.8rem", color: "#94a3b8" }}>{a.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── STORE INFO ── */}
            {activeTab === "storeInfo" && (
              <div className="fade-up">
                <PageHeader icon="🗂️" title="Store Information" subtitle="Add and manage operational records and alerts." />
                <div className="info-flex">
                  <div className="info-form">
                    <h5 style={{ marginBottom: "20px", color: "#0f172a", fontWeight: "700" }}>Add New Record</h5>
                    <form onSubmit={handleInfoSubmit}>
                      <div style={{ marginBottom: "16px" }}>
                        <label style={{ display: "block", marginBottom: "6px", fontWeight: "600", color: "#64748b", fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Title</label>
                        <input className="admin-input" type="text" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} placeholder="e.g. New Area Service" required />
                      </div>
                      <div style={{ marginBottom: "16px" }}>
                        <label style={{ display: "block", marginBottom: "6px", fontWeight: "600", color: "#64748b", fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Description</label>
                        <textarea className="admin-input" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} placeholder="Details..." rows="4" style={{ resize: "none" }} required />
                      </div>
                      <div style={{ marginBottom: "20px" }}>
                        <label style={{ display: "block", marginBottom: "6px", fontWeight: "600", color: "#64748b", fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Date</label>
                        <input className="admin-input" type="date" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} />
                      </div>
                      <button type="submit" className="admin-save-btn">💾 Save Record</button>
                    </form>
                  </div>

                  <div className="info-table">
                    <h5 style={{ marginBottom: "20px", color: "#0f172a", fontWeight: "700" }}>Stored Records</h5>
                    {infoList.length === 0 ? (
                      <div style={{ textAlign: "center", padding: "40px 0", color: "#94a3b8" }}>
                        <div style={{ fontSize: "36px", marginBottom: "8px" }}>📭</div>
                        No records found.
                      </div>
                    ) : (
                      <div className="admin-table-wrap">
                        <table className="admin-table">
                          <thead>
                            <tr>
                              <th>Date</th><th>Title</th><th>Description</th><th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {infoList.map((item) => (
                              <tr key={item.id}>
                                <td style={{ whiteSpace: "nowrap" }}>{item.date}</td>
                                <td style={{ fontWeight: "600", color: "#0f172a" }}>{item.title}</td>
                                <td>{item.description}</td>
                                <td>
                                  <button onClick={() => deleteInfo(item.id)} style={{ background: "rgba(239,68,68,0.1)", border: "none", color: "#ef4444", borderRadius: "8px", padding: "6px 12px", cursor: "pointer", fontWeight: "700", fontSize: "0.82rem" }}>🗑️ Delete</button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "users"    && <div className="fade-up"><UserCrud /></div>}
            {activeTab === "staff"    && <div className="fade-up"><StaffPanel /></div>}
            {activeTab === "pickups"  && <div className="fade-up"><PickupCrud /></div>}
            {activeTab === "contacts" && <div className="fade-up"><ContactCrud /></div>}

          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
