import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserCrud from "./UserCrud";
import PickupCrud from "./PickupCrud";
import ContactCrud from "./ContactCrud";
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

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f4f7f6", fontFamily: "'Inter', sans-serif" }}>
      
      {/* SIDEBAR */}
      <div style={{
        width: "260px",
        background: "linear-gradient(180deg, #071976 0%, #121cd6 100%)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        boxShadow: "4px 0 15px rgba(0,0,0,0.1)",
      }}>
        <div style={{ padding: "30px 20px", textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <h3 style={{ margin: 0, fontWeight: "bold", color: "#ade6f0" }}>Admin Panel</h3>
          <p style={{ margin: "5px 0 0", fontSize: "14px", color: "#b9f5e8" }}>Welcome, Admin</p>
        </div>
        
        <div style={{ flex: 1, padding: "20px 0" }}>
          <button
            onClick={() => setActiveTab("dashboard")}
            style={{
              width: "100%", padding: "15px 25px", textAlign: "left", background: activeTab === "dashboard" ? "rgba(255,255,255,0.15)" : "transparent",
              border: "none", color: "white", fontSize: "16px", cursor: "pointer", transition: "0.3s",
              borderLeft: activeTab === "dashboard" ? "4px solid #ade6f0" : "4px solid transparent"
            }}
          >
            📊 Dashboard Overview
          </button>
          <button
            onClick={() => setActiveTab("storeInfo")}
            style={{
              width: "100%", padding: "15px 25px", textAlign: "left", background: activeTab === "storeInfo" ? "rgba(255,255,255,0.15)" : "transparent",
              border: "none", color: "white", fontSize: "16px", cursor: "pointer", transition: "0.3s",
              borderLeft: activeTab === "storeInfo" ? "4px solid #ade6f0" : "4px solid transparent"
            }}
          >
            🗂️ Store Information
          </button>
          <button
            onClick={() => setActiveTab("users")}
            style={{
              width: "100%", padding: "15px 25px", textAlign: "left", background: activeTab === "users" ? "rgba(255,255,255,0.15)" : "transparent",
              border: "none", color: "white", fontSize: "16px", cursor: "pointer", transition: "0.3s",
              borderLeft: activeTab === "users" ? "4px solid #ade6f0" : "4px solid transparent"
            }}
          >
            👥 Manage Users
          </button>
          <button
            onClick={() => setActiveTab("pickups")}
            style={{
              width: "100%", padding: "15px 25px", textAlign: "left", background: activeTab === "pickups" ? "rgba(255,255,255,0.15)" : "transparent",
              border: "none", color: "white", fontSize: "16px", cursor: "pointer", transition: "0.3s",
              borderLeft: activeTab === "pickups" ? "4px solid #ade6f0" : "4px solid transparent"
            }}
          >
            🚛 Manage Pickups
          </button>
          <button
            onClick={() => setActiveTab("contacts")}
            style={{
              width: "100%", padding: "15px 25px", textAlign: "left", background: activeTab === "contacts" ? "rgba(255,255,255,0.15)" : "transparent",
              border: "none", color: "white", fontSize: "16px", cursor: "pointer", transition: "0.3s",
              borderLeft: activeTab === "contacts" ? "4px solid #ade6f0" : "4px solid transparent"
            }}
          >
            ✉️ Manage Contacts
          </button>
        </div>

        <div style={{ padding: "20px" }}>
          <button
            onClick={handleLogout}
            style={{
              width: "100%", padding: "12px", background: "#ff4d4d", color: "white", border: "none",
              borderRadius: "8px", fontWeight: "bold", cursor: "pointer", transition: "0.3s"
            }}
            onMouseOver={(e) => e.target.style.background = "#e60000"}
            onMouseOut={(e) => e.target.style.background = "#ff4d4d"}
          >
            🚪 Logout
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ flex: 1, padding: "40px", overflowY: "auto" }}>
        
        {/* TAB: DASHBOARD */}
        {activeTab === "dashboard" && (
          <div className="animate-fade-in">
            <h2 style={{ color: "#071976", fontWeight: "bold", marginBottom: "30px" }}>Dashboard Overview</h2>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginBottom: "40px" }}>
              <div style={{ background: "white", padding: "25px", borderRadius: "15px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)", borderLeft: "5px solid #121cd6" }}>
                <h4 style={{ color: "#6c757d", margin: "0 0 10px", fontSize: "16px" }}>Total Users</h4>
                <h1 style={{ color: "#071976", margin: 0, fontSize: "36px" }}>1,245</h1>
              </div>
              <div style={{ background: "white", padding: "25px", borderRadius: "15px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)", borderLeft: "5px solid #198754" }}>
                <h4 style={{ color: "#6c757d", margin: "0 0 10px", fontSize: "16px" }}>Active Pickups</h4>
                <h1 style={{ color: "#198754", margin: 0, fontSize: "36px" }}>48</h1>
              </div>
              <div style={{ background: "white", padding: "25px", borderRadius: "15px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)", borderLeft: "5px solid #ffc107" }}>
                <h4 style={{ color: "#6c757d", margin: "0 0 10px", fontSize: "16px" }}>Pending Info</h4>
                <h1 style={{ color: "#ffc107", margin: 0, fontSize: "36px" }}>{infoList.length}</h1>
              </div>
            </div>

            <div style={{ background: "white", padding: "30px", borderRadius: "15px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
              <h4 style={{ color: "#071976", marginBottom: "20px" }}>Recent System Activity</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ padding: "15px 0", borderBottom: "1px solid #eee", color: "#495057" }}>✅ Admin logged in successfully</li>
                <li style={{ padding: "15px 0", borderBottom: "1px solid #eee", color: "#495057" }}>♻️ 5 new pickup requests received today</li>
                <li style={{ padding: "15px 0", color: "#495057" }}>👥 12 new users registered this week</li>
              </ul>
            </div>
          </div>
        )}

        {/* TAB: STORE INFORMATION */}
        {activeTab === "storeInfo" && (
          <div className="animate-fade-in">
            <h2 style={{ color: "#071976", fontWeight: "bold", marginBottom: "30px" }}>Store Information</h2>
            
            <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
              {/* Form Section */}
              <div style={{ flex: "1 1 400px", background: "white", padding: "30px", borderRadius: "15px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
                <h4 style={{ marginBottom: "20px", color: "#121cd6" }}>Add New Record</h4>
                <form onSubmit={handleInfoSubmit}>
                  <div style={{ marginBottom: "15px" }}>
                    <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#495057" }}>Record Title</label>
                    <input 
                      type="text" 
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      placeholder="e.g. New Area Service"
                      style={{ width: "100%", padding: "12px", border: "1px solid #ced4da", borderRadius: "8px", outline: "none" }}
                      required
                    />
                  </div>
                  <div style={{ marginBottom: "15px" }}>
                    <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#495057" }}>Description</label>
                    <textarea 
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      placeholder="Details about the record..."
                      rows="4"
                      style={{ width: "100%", padding: "12px", border: "1px solid #ced4da", borderRadius: "8px", outline: "none", resize: "none" }}
                      required
                    />
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#495057" }}>Date</label>
                    <input 
                      type="date" 
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      style={{ width: "100%", padding: "12px", border: "1px solid #ced4da", borderRadius: "8px", outline: "none" }}
                    />
                  </div>
                  <button type="submit" style={{
                    width: "100%", padding: "12px", background: "#198754", color: "white", border: "none",
                    borderRadius: "8px", fontWeight: "bold", fontSize: "16px", cursor: "pointer", transition: "0.3s"
                  }}
                  onMouseOver={(e) => e.target.style.background = "#157347"}
                  onMouseOut={(e) => e.target.style.background = "#198754"}
                  >
                    💾 Save Information
                  </button>
                </form>
              </div>

              {/* Data Table Section */}
              <div style={{ flex: "2 1 500px", background: "white", padding: "30px", borderRadius: "15px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
                <h4 style={{ marginBottom: "20px", color: "#121cd6" }}>Stored Records</h4>
                {infoList.length === 0 ? (
                  <p style={{ color: "#6c757d" }}>No information stored yet.</p>
                ) : (
                  <div style={{ overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                      <thead>
                        <tr style={{ background: "#f8f9fa", borderBottom: "2px solid #dee2e6" }}>
                          <th style={{ padding: "12px", textAlign: "left", color: "#495057" }}>Date</th>
                          <th style={{ padding: "12px", textAlign: "left", color: "#495057" }}>Title</th>
                          <th style={{ padding: "12px", textAlign: "left", color: "#495057" }}>Description</th>
                          <th style={{ padding: "12px", textAlign: "center", color: "#495057" }}>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {infoList.map((item) => (
                          <tr key={item.id} style={{ borderBottom: "1px solid #eee" }}>
                            <td style={{ padding: "12px", color: "#6c757d", whiteSpace: "nowrap" }}>{item.date}</td>
                            <td style={{ padding: "12px", fontWeight: "500", color: "#071976" }}>{item.title}</td>
                            <td style={{ padding: "12px", color: "#6c757d" }}>{item.description}</td>
                            <td style={{ padding: "12px", textAlign: "center" }}>
                              <button 
                                onClick={() => deleteInfo(item.id)}
                                style={{ background: "#ff4d4d", color: "white", border: "none", padding: "6px 12px", borderRadius: "5px", cursor: "pointer" }}
                              >
                                Delete
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

        {/* TAB: USERS */}
        {activeTab === "users" && (
          <div className="animate-fade-in">
            <UserCrud />
          </div>
        )}

        {/* TAB: PICKUPS */}
        {activeTab === "pickups" && (
          <div className="animate-fade-in">
            <PickupCrud />
          </div>
        )}

        {/* TAB: CONTACTS */}
        {activeTab === "contacts" && (
          <div className="animate-fade-in">
            <ContactCrud />
          </div>
        )}

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
        `}
      </style>
    </div>
  );
};

export default AdminDashboard;