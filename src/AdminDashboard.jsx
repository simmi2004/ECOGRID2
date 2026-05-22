import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserCrud from "./UserCrud";
import PickupCrud from "./PickupCrud";
import ContactCrud from "./ContactCrud";
import StaffCorner from "./StaffCorner";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [infoList, setInfoList] = useState([
    { id: 1, title: "City Center Bin Full", description: "Need pickup at Zone A", date: "2026-05-12" },
    { id: 2, title: "New Recycling Plant", description: "Operational from next month", date: "2026-05-10" },
  ]);
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: new Date().toISOString().split("T")[0],
  });

  const navigate = useNavigate();

  const handleInfoSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return;
    
    setInfoList([{ id: Date.now(), ...formData }, ...infoList]);
    setFormData({ title: "", description: "", date: new Date().toISOString().split("T")[0] });
    alert("Information Stored Successfully!");
  };

  const deleteInfo = (id) => {
    setInfoList(infoList.filter((item) => item.id !== id));
  };

  const handleLogout = () => {
    navigate("/");
  };

  const NavButton = ({ id, icon, label }) => (
    <button
      onClick={() => setActiveTab(id)}
      style={{
        width: "100%", 
        padding: "16px 25px", 
        textAlign: "left", 
        background: activeTab === id ? "rgba(16, 185, 129, 0.1)" : "transparent",
        border: "none", 
        color: activeTab === id ? "var(--primary-dark)" : "var(--text-muted)", 
        fontSize: "16px", 
        fontWeight: activeTab === id ? "700" : "600",
        cursor: "pointer", 
        transition: "all 0.3s ease",
        borderRight: activeTab === id ? "4px solid var(--primary-color)" : "4px solid transparent",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        borderRadius: "0 15px 15px 0",
        marginBottom: "5px"
      }}
      onMouseOver={(e) => {
        if (activeTab !== id) {
          e.currentTarget.style.background = "rgba(0,0,0,0.02)";
          e.currentTarget.style.color = "var(--text-main)";
        }
      }}
      onMouseOut={(e) => {
        if (activeTab !== id) {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = "var(--text-muted)";
        }
      }}
    >
      <span style={{ fontSize: "20px" }}>{icon}</span> {label}
    </button>
  );

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f8fafc", fontFamily: "'Inter', sans-serif" }}>
      
      {/* SIDEBAR */}
      <div style={{
        width: "280px",
        background: "#ffffff",
        color: "var(--text-main)",
        display: "flex",
        flexDirection: "column",
        boxShadow: "4px 0 24px rgba(0,0,0,0.03)",
        borderRight: "1px solid #f1f5f9",
        zIndex: 10,
        paddingTop: "20px"
      }}>
        <div style={{ padding: "10px 30px 30px", borderBottom: "1px solid #f1f5f9", marginBottom: "20px" }}>
          <div className="d-flex align-items-center gap-3">
            <div style={{ 
              background: "var(--primary-color)", 
              color: "white", 
              width: "40px", height: "40px", 
              borderRadius: "10px", 
              display: "flex", alignItems: "center", justifyContent: "center", 
              fontSize: "20px", fontWeight: "bold",
              boxShadow: "0 4px 10px rgba(16, 185, 129, 0.3)"
            }}>
              A
            </div>
            <div>
              <h4 style={{ margin: 0, fontWeight: "800", color: "var(--secondary-color)", fontSize: "1.2rem" }}>Admin Panel</h4>
              <p style={{ margin: "2px 0 0", fontSize: "13px", color: "var(--text-muted)", fontWeight: "500" }}>System Dashboard</p>
            </div>
          </div>
        </div>
        
        <div style={{ flex: 1, paddingRight: "20px" }}>
          <NavButton id="dashboard" icon="📊" label="Overview" />
          <NavButton id="storeInfo" icon="🗂️" label="Information" />
          <NavButton id="users" icon="👥" label="Users" />
          <NavButton id="pickups" icon="🚛" label="Pickups" />
          <NavButton id="staffCorner" icon="👷" label="Staff Corner" />
          <NavButton id="contacts" icon="✉️" label="Messages" />
        </div>

        <div style={{ padding: "30px", borderTop: "1px solid #f1f5f9" }}>
          <button
            onClick={handleLogout}
            style={{
              width: "100%", padding: "14px", background: "white", color: "var(--danger)", 
              border: "1.5px solid rgba(239, 68, 68, 0.2)",
              borderRadius: "12px", fontWeight: "700", cursor: "pointer", transition: "all 0.3s ease",
              display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.02)"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "rgba(239, 68, 68, 0.05)";
              e.currentTarget.style.borderColor = "var(--danger)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "white";
              e.currentTarget.style.borderColor = "rgba(239, 68, 68, 0.2)";
            }}
          >
            🚪 Sign Out
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ flex: 1, padding: "40px", overflowY: "auto", height: "100vh" }}>
        
        {/* TAB: DASHBOARD */}
        {activeTab === "dashboard" && (
          <div className="animate-fade-in" style={{ padding: "10px" }}>
            <div 
              style={{ 
                background: "linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.4))",
                backdropFilter: "blur(10px)",
                borderRadius: "20px", padding: "30px", marginBottom: "30px",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.05)", border: "1px solid rgba(255, 255, 255, 0.18)"
              }}
            >
              <div className="d-flex align-items-center gap-3 mb-2">
                <div style={{ background: "var(--primary-color)", color: "white", width: "50px", height: "50px", borderRadius: "12px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "24px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
                  📊
                </div>
                <h2 className="m-0" style={{ color: "var(--secondary-color)", fontWeight: "800", letterSpacing: "-0.5px" }}>Dashboard Overview</h2>
              </div>
              <p style={{ color: "var(--text-muted)", margin: "0", fontSize: "1.1rem", paddingLeft: "65px" }}>
                High-level metrics and recent activities across the platform.
              </p>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px", marginBottom: "40px" }}>
              <div style={{ background: "white", padding: "30px", borderRadius: "20px", boxShadow: "0 10px 40px rgba(0,0,0,0.04)", border: "1px solid #f1f5f9", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "-20px", right: "-20px", fontSize: "100px", opacity: 0.05 }}>👥</div>
                <h4 style={{ color: "var(--text-muted)", margin: "0 0 15px", fontSize: "1rem", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px" }}>Total Users</h4>
                <h1 style={{ color: "var(--secondary-color)", margin: 0, fontSize: "42px", fontWeight: "800" }}>1,245</h1>
                <div style={{ marginTop: "15px", fontSize: "0.9rem", color: "var(--success)", fontWeight: "600" }}>↑ 12% from last month</div>
              </div>
              <div style={{ background: "white", padding: "30px", borderRadius: "20px", boxShadow: "0 10px 40px rgba(0,0,0,0.04)", border: "1px solid #f1f5f9", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "-20px", right: "-20px", fontSize: "100px", opacity: 0.05 }}>🚛</div>
                <h4 style={{ color: "var(--text-muted)", margin: "0 0 15px", fontSize: "1rem", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px" }}>Active Pickups</h4>
                <h1 style={{ color: "var(--secondary-color)", margin: 0, fontSize: "42px", fontWeight: "800" }}>48</h1>
                <div style={{ marginTop: "15px", fontSize: "0.9rem", color: "var(--warning)", fontWeight: "600" }}>8 pending assignment</div>
              </div>
              <div style={{ background: "white", padding: "30px", borderRadius: "20px", boxShadow: "0 10px 40px rgba(0,0,0,0.04)", border: "1px solid #f1f5f9", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "-20px", right: "-20px", fontSize: "100px", opacity: 0.05 }}>🗂️</div>
                <h4 style={{ color: "var(--text-muted)", margin: "0 0 15px", fontSize: "1rem", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px" }}>Stored Info</h4>
                <h1 style={{ color: "var(--secondary-color)", margin: 0, fontSize: "42px", fontWeight: "800" }}>{infoList.length}</h1>
                <div style={{ marginTop: "15px", fontSize: "0.9rem", color: "var(--text-muted)", fontWeight: "600" }}>System records</div>
              </div>
            </div>

            <div style={{ background: "white", padding: "35px", borderRadius: "20px", boxShadow: "0 10px 40px rgba(0,0,0,0.04)", border: "1px solid #f1f5f9" }}>
              <h4 style={{ color: "var(--secondary-color)", marginBottom: "25px", fontWeight: "700" }}>Recent System Activity</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ padding: "18px 0", borderBottom: "1px solid #f1f5f9", display: "flex", alignItems: "center", gap: "15px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(16, 185, 129, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>✅</div>
                  <div>
                    <div style={{ fontWeight: "600", color: "var(--text-main)" }}>Admin Session Started</div>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Just now</div>
                  </div>
                </li>
                <li style={{ padding: "18px 0", borderBottom: "1px solid #f1f5f9", display: "flex", alignItems: "center", gap: "15px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(14, 165, 233, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>♻️</div>
                  <div>
                    <div style={{ fontWeight: "600", color: "var(--text-main)" }}>5 new pickup requests received</div>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Today at 9:00 AM</div>
                  </div>
                </li>
                <li style={{ padding: "18px 0", display: "flex", alignItems: "center", gap: "15px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(245, 158, 11, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>👥</div>
                  <div>
                    <div style={{ fontWeight: "600", color: "var(--text-main)" }}>12 new users registered</div>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>This week</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* TAB: STORE INFORMATION */}
        {activeTab === "storeInfo" && (
          <div className="animate-fade-in" style={{ padding: "10px" }}>
            <div 
              style={{ 
                background: "linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.4))",
                backdropFilter: "blur(10px)",
                borderRadius: "20px", padding: "30px", marginBottom: "30px",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.05)", border: "1px solid rgba(255, 255, 255, 0.18)"
              }}
            >
              <div className="d-flex align-items-center gap-3 mb-2">
                <div style={{ background: "var(--primary-color)", color: "white", width: "50px", height: "50px", borderRadius: "12px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "24px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
                  🗂️
                </div>
                <h2 className="m-0" style={{ color: "var(--secondary-color)", fontWeight: "800", letterSpacing: "-0.5px" }}>Store Information</h2>
              </div>
              <p style={{ color: "var(--text-muted)", margin: "0", fontSize: "1.1rem", paddingLeft: "65px" }}>
                Add and manage operational records, alerts, and facility status updates.
              </p>
            </div>
            
            <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
              {/* Form Section */}
              <div style={{ flex: "1 1 400px", background: "white", padding: "35px", borderRadius: "20px", boxShadow: "0 10px 40px rgba(0,0,0,0.04)", border: "1px solid #f1f5f9" }}>
                <h4 style={{ marginBottom: "25px", color: "var(--secondary-color)", fontWeight: "700" }}>Add New Record</h4>
                <form onSubmit={handleInfoSubmit}>
                  <div style={{ marginBottom: "20px" }}>
                    <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "var(--text-muted)" }}>Record Title</label>
                    <input 
                      type="text" 
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      placeholder="e.g. New Area Service"
                      style={{ width: "100%", padding: "12px 15px", border: "1.5px solid #e2e8f0", borderRadius: "10px", outline: "none", color: "var(--text-main)" }}
                      required
                    />
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "var(--text-muted)" }}>Description</label>
                    <textarea 
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      placeholder="Details about the record..."
                      rows="4"
                      style={{ width: "100%", padding: "12px 15px", border: "1.5px solid #e2e8f0", borderRadius: "10px", outline: "none", resize: "none", color: "var(--text-main)" }}
                      required
                    />
                  </div>
                  <div style={{ marginBottom: "25px" }}>
                    <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "var(--text-muted)" }}>Date</label>
                    <input 
                      type="date" 
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      style={{ width: "100%", padding: "12px 15px", border: "1.5px solid #e2e8f0", borderRadius: "10px", outline: "none", color: "var(--text-main)" }}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: "100%", padding: "14px", borderRadius: "10px", fontSize: "16px" }}>
                    💾 Save Information
                  </button>
                </form>
              </div>

              {/* Data Table Section */}
              <div style={{ flex: "2 1 500px", background: "white", padding: "35px", borderRadius: "20px", boxShadow: "0 10px 40px rgba(0,0,0,0.04)", border: "1px solid #f1f5f9" }}>
                <h4 style={{ marginBottom: "25px", color: "var(--secondary-color)", fontWeight: "700" }}>Stored Records</h4>
                {infoList.length === 0 ? (
                  <div className="text-center py-5 text-muted">
                    <div style={{ fontSize: "40px", marginBottom: "10px", opacity: 0.5 }}>📭</div>
                    No records found.
                  </div>
                ) : (
                  <div style={{ overflowX: "auto" }}>
                    <table className="table table-hover align-middle mb-0" style={{ borderCollapse: "separate", borderSpacing: "0 8px" }}>
                      <thead>
                        <tr>
                          <th style={{ background: "transparent", color: "var(--text-muted)", fontSize: "0.85rem", padding: "0 15px 10px", borderBottom: "2px solid #f1f5f9" }}>Date</th>
                          <th style={{ background: "transparent", color: "var(--text-muted)", fontSize: "0.85rem", padding: "0 15px 10px", borderBottom: "2px solid #f1f5f9" }}>Title</th>
                          <th style={{ background: "transparent", color: "var(--text-muted)", fontSize: "0.85rem", padding: "0 15px 10px", borderBottom: "2px solid #f1f5f9" }}>Description</th>
                          <th style={{ background: "transparent", color: "var(--text-muted)", fontSize: "0.85rem", padding: "0 15px 10px", borderBottom: "2px solid #f1f5f9" }}>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {infoList.map((item) => (
                          <tr key={item.id} style={{ transition: "all 0.3s ease" }}>
                            <td style={{ padding: "15px", background: "#f8fafc", borderRadius: "10px 0 0 10px", color: "var(--text-muted)", whiteSpace: "nowrap" }}>{item.date}</td>
                            <td style={{ padding: "15px", background: "#f8fafc", fontWeight: "600", color: "var(--secondary-color)" }}>{item.title}</td>
                            <td style={{ padding: "15px", background: "#f8fafc", color: "var(--text-muted)" }}>{item.description}</td>
                            <td style={{ padding: "15px", background: "#f8fafc", borderRadius: "0 10px 10px 0", textAlign: "center" }}>
                              <button 
                                onClick={() => deleteInfo(item.id)}
                                className="btn btn-sm btn-danger opacity-75"
                                style={{ borderRadius: "8px", padding: "6px 12px" }}
                              >
                                🗑️
                              </button>
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

        {/* EXTERNAL TABS */}
        {activeTab === "users" && <UserCrud />}
        {activeTab === "pickups" && <PickupCrud />}
        {activeTab === "contacts" && <ContactCrud />}
        {activeTab === "staffCorner" && <StaffCorner />}

      </div>

      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 0.4s ease-out forwards;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          /* Scrollbar styling for main content area */
          ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
          }
          ::-webkit-scrollbar-track {
            background: #f1f5f9; 
            border-radius: 4px;
          }
          ::-webkit-scrollbar-thumb {
            background: #cbd5e1; 
            border-radius: 4px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #94a3b8; 
          }
        `}
      </style>
    </div>
  );
};

export default AdminDashboard;