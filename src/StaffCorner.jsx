import React, { useEffect, useState } from "react";
import axios from "axios";

const api = import.meta.env.VITE_API_URL;

const StaffCorner = () => {
  const [pickups, setPickups] = useState([]);
  const [staffList, setStaffList] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_PICKUPS = `${api}/api/pickup`;
  const API_USERS = `${api}/api/users`;

  const fetchData = async () => {
    try {
      const pickupRes = await axios.get(API_PICKUPS);
      setPickups(pickupRes.data);

      const userRes = await axios.get(API_USERS);
      const staffs = userRes.data.filter((user) => user.role === "STAFF" && user.isActive);
      setStaffList(staffs);

      setLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAssignStaff = async (pickupId, staffId) => {
    try {
      await axios.put(`${API_PICKUPS}/${pickupId}`, { assignedStaff: staffId || null });
      fetchData(); // Refresh silently
    } catch (error) {
      console.log("Error assigning staff:", error);
      alert("Failed to assign staff.");
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in" style={{ padding: "10px" }}>
      {/* HEADER SECTION */}
      <div 
        style={{ 
          background: "linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.4))",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          padding: "30px",
          marginBottom: "30px",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.18)"
        }}
      >
        <div className="d-flex align-items-center gap-3 mb-2">
          <div style={{ 
            background: "var(--primary-color)", 
            color: "white", 
            width: "50px", 
            height: "50px", 
            borderRadius: "12px",
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center",
            fontSize: "24px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
          }}>
            👷
          </div>
          <h2 className="m-0" style={{ color: "var(--secondary-color)", fontWeight: "800", letterSpacing: "-0.5px" }}>
            Staff Allocation
          </h2>
        </div>
        <p style={{ color: "var(--text-muted)", margin: "0", fontSize: "1.1rem", paddingLeft: "65px" }}>
          Manage your workforce and efficiently assign available personnel to pending waste pickup requests.
        </p>
      </div>

      {/* TABLE SECTION */}
      <div className="table-responsive" style={{ 
        background: "white", 
        borderRadius: "20px", 
        padding: "20px",
        boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
        border: "1px solid #f1f5f9"
      }}>
        <table className="table table-hover align-middle mb-0" style={{ borderCollapse: "separate", borderSpacing: "0 10px" }}>
          <thead>
            <tr>
              <th style={{ background: "transparent", color: "var(--text-muted)", fontSize: "0.85rem", padding: "0 15px 10px", borderBottom: "2px solid #f1f5f9" }}>Customer</th>
              <th style={{ background: "transparent", color: "var(--text-muted)", fontSize: "0.85rem", padding: "0 15px 10px", borderBottom: "2px solid #f1f5f9" }}>Address</th>
              <th style={{ background: "transparent", color: "var(--text-muted)", fontSize: "0.85rem", padding: "0 15px 10px", borderBottom: "2px solid #f1f5f9" }}>Waste Type</th>
              <th style={{ background: "transparent", color: "var(--text-muted)", fontSize: "0.85rem", padding: "0 15px 10px", borderBottom: "2px solid #f1f5f9" }}>Status</th>
              <th style={{ background: "transparent", color: "var(--text-muted)", fontSize: "0.85rem", padding: "0 15px 10px", borderBottom: "2px solid #f1f5f9" }}>Assign Personnel</th>
            </tr>
          </thead>
          <tbody>
            {pickups.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-5 text-muted">
                  <div style={{ fontSize: "40px", marginBottom: "10px", opacity: 0.5 }}>🗑️</div>
                  No active pickup requests found.
                </td>
              </tr>
            ) : (
              pickups.map((pickup) => (
                <tr key={pickup._id} style={{ transition: "all 0.3s ease" }}>
                  <td style={{ padding: "20px 15px", background: "#f8fafc", borderRadius: "12px 0 0 12px", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9", borderLeft: "1px solid #f1f5f9" }}>
                    <div style={{ fontWeight: "600", color: "var(--text-main)", fontSize: "1.05rem" }}>{pickup.name}</div>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "4px" }}>📅 {new Date(pickup.pickupDate).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}</div>
                  </td>
                  <td style={{ padding: "20px 15px", background: "#f8fafc", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--text-muted)" }}>
                      <span>📍</span> {pickup.address}
                    </div>
                  </td>
                  <td style={{ padding: "20px 15px", background: "#f8fafc", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9" }}>
                    <span style={{ 
                      padding: "6px 12px", 
                      background: "rgba(16, 185, 129, 0.1)", 
                      color: "var(--primary-dark)", 
                      borderRadius: "8px",
                      fontWeight: "600",
                      fontSize: "0.85rem"
                    }}>
                      {pickup.wasteType}
                    </span>
                  </td>
                  <td style={{ padding: "20px 15px", background: "#f8fafc", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9" }}>
                    <span className={`badge ${
                      pickup.status === "Completed" ? "bg-success" : 
                      pickup.status === "Cancelled" ? "bg-danger" : "bg-warning text-dark"
                    }`} style={{ padding: "8px 12px", borderRadius: "8px" }}>
                      {pickup.status || "Pending"}
                    </span>
                  </td>
                  <td style={{ padding: "20px 15px", background: "#f8fafc", borderRadius: "0 12px 12px 0", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9", borderRight: "1px solid #f1f5f9" }}>
                    <select
                      className="form-select"
                      value={pickup.assignedStaff?._id || pickup.assignedStaff || ""}
                      onChange={(e) => handleAssignStaff(pickup._id, e.target.value)}
                      style={{ 
                        border: "1.5px solid #e2e8f0", 
                        borderRadius: "10px", 
                        padding: "10px 15px",
                        boxShadow: "inset 0 2px 4px rgba(0,0,0,0.02)",
                        fontWeight: "500",
                        color: pickup.assignedStaff ? "var(--primary-dark)" : "var(--text-muted)",
                        background: pickup.assignedStaff ? "rgba(16, 185, 129, 0.05)" : "white"
                      }}
                    >
                      <option value="">+ Assign Staff...</option>
                      {staffList.map((staff) => (
                        <option key={staff._id} value={staff._id}>
                          {staff.fullname}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        tr:hover td {
          background: #ffffff !important;
          box-shadow: 0 4px 15px rgba(0,0,0,0.03);
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};

export default StaffCorner;
