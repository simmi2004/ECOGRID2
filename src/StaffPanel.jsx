import React, { useEffect, useState } from "react";
import axios from "axios";
const api = import.meta.env.VITE_API_URL;

const StaffPanel = () => {
  const [staffList, setStaffList] = useState([]);
  const [pickups, setPickups] = useState([]);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "STAFF",
    isActive: true,
  });
  const [editingStaffId, setEditingStaffId] = useState(null);

  const fetchStaff = async () => {
    try {
      const res = await axios.get(`${api}/api/users`);
      // Assuming users returns an array of user objects
      setStaffList(res.data.filter((u) => u.role === "STAFF"));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPickups = async () => {
    try {
      const res = await axios.get(`${api}/api/pickup`);
      setPickups(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStaff();
    fetchPickups();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddStaff = async (e) => {
    e.preventDefault();
    try {
      if (editingStaffId) {
        await axios.put(`${api}/api/users/${editingStaffId}`, formData);
        alert("Staff Member Updated Successfully");
      } else {
        await axios.post(`${api}/api/users`, formData);
        alert("Staff Member Added Successfully");
      }
      setFormData({
        fullname: "",
        email: "",
        password: "",
        role: "STAFF",
        isActive: true,
      });
      setEditingStaffId(null);
      fetchStaff();
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "An error occurred while saving staff");
    }
  };

  const handleEditStaff = (staff) => {
    setFormData({
      fullname: staff.fullname,
      email: staff.email,
      password: staff.password || "",
      role: "STAFF",
      isActive: staff.isActive !== undefined ? staff.isActive : true,
    });
    setEditingStaffId(staff._id);
  };

  const handleDeleteStaff = async (id) => {
    if (window.confirm("Are you sure you want to delete this staff member?")) {
      try {
        await axios.delete(`${api}/api/users/${id}`);
        fetchStaff();
      } catch (error) {
        console.log(error);
        alert("Error deleting staff");
      }
    }
  };

  const handleAssignStaff = async (pickupId, staffId) => {
    if (!staffId) return;
    try {
      await axios.put(`${api}/api/pickup/${pickupId}`, { assignedStaff: staffId });
      alert("Staff Member Assigned to Pickup");
      fetchPickups();
    } catch (error) {
      console.log(error);
      alert("Error assigning staff");
    }
  };

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
            background: "var(--primary-color, #10b981)", 
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
          <h2 className="m-0" style={{ color: "var(--secondary-color, #0f172a)", fontWeight: "800", letterSpacing: "-0.5px" }}>
            Staff Allocation Panel
          </h2>
        </div>
        <p style={{ color: "var(--text-muted, #64748b)", margin: "0", fontSize: "1.1rem", paddingLeft: "65px" }}>
          Add new staff members and assign them to pending pickup requests.
        </p>
      </div>

      {/* FORM SECTION: ADD STAFF */}
      <div style={{ 
        background: "white", 
        borderRadius: "20px", 
        padding: "30px",
        marginBottom: "30px",
        boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
        border: "1px solid #f1f5f9"
      }}>
        <h4 style={{ marginBottom: "20px", color: "var(--secondary-color, #0f172a)", fontWeight: "700" }}>
          {editingStaffId ? "Edit Staff Member" : "Register New Staff Member"}
        </h4>
        <form onSubmit={handleAddStaff}>
          <div className="row g-4">
            <div className="col-md-4">
              <label className="form-label text-muted fw-bold mb-2">Full Name</label>
              <input
                type="text"
                name="fullname"
                placeholder="Enter Full Name"
                className="form-control"
                value={formData.fullname}
                onChange={handleChange}
                required
                style={{ borderRadius: "10px", padding: "12px 15px", border: "1.5px solid #e2e8f0" }}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label text-muted fw-bold mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ borderRadius: "10px", padding: "12px 15px", border: "1.5px solid #e2e8f0" }}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label text-muted fw-bold mb-2">Password</label>
              <input
                type="password"
                name="password"
                placeholder={editingStaffId ? "Leave blank to keep current" : "Enter Password"}
                className="form-control"
                value={formData.password}
                onChange={handleChange}
                required={!editingStaffId}
                style={{ borderRadius: "10px", padding: "12px 15px", border: "1.5px solid #e2e8f0" }}
              />
            </div>
          </div>
          <div className="mt-4 d-flex gap-2">
            <button className="btn" style={{ background: "linear-gradient(135deg, #10b981, #059669)", color: "white", padding: "10px 25px", borderRadius: "10px", fontWeight: "600", border: "none" }}>
              {editingStaffId ? "Update Staff" : "➕ Add Staff"}
            </button>
            {editingStaffId && (
              <button 
                type="button" 
                className="btn btn-light border" 
                style={{ padding: "10px 25px", borderRadius: "10px", fontWeight: "600" }}
                onClick={() => {
                  setEditingStaffId(null);
                  setFormData({ fullname: "", email: "", password: "", role: "STAFF", isActive: true });
                }}
              >
                Cancel Edit
              </button>
            )}
          </div>
        </form>
      </div>

      {/* TABLE SECTION: STAFF LIST */}
      <div className="table-responsive" style={{ 
        background: "white", 
        borderRadius: "20px", 
        padding: "20px",
        marginBottom: "30px",
        boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
        border: "1px solid #f1f5f9"
      }}>
        <h4 style={{ marginBottom: "20px", color: "var(--secondary-color, #0f172a)", fontWeight: "700", paddingLeft: "15px" }}>
          Manage Staff Members
        </h4>
        <table className="table table-hover align-middle mb-0" style={{ borderCollapse: "separate", borderSpacing: "0 10px" }}>
          <thead>
            <tr>
              <th style={{ background: "transparent", color: "var(--text-muted, #64748b)", fontSize: "0.85rem", padding: "0 15px 10px", borderBottom: "2px solid #f1f5f9" }}>Full Name</th>
              <th style={{ background: "transparent", color: "var(--text-muted, #64748b)", fontSize: "0.85rem", padding: "0 15px 10px", borderBottom: "2px solid #f1f5f9" }}>Email</th>
              <th style={{ background: "transparent", color: "var(--text-muted, #64748b)", fontSize: "0.85rem", padding: "0 15px 10px", borderBottom: "2px solid #f1f5f9" }}>Status</th>
              <th style={{ background: "transparent", color: "var(--text-muted, #64748b)", fontSize: "0.85rem", padding: "0 15px 10px", borderBottom: "2px solid #f1f5f9" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {staffList.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-5 text-muted">
                  No staff members found.
                </td>
              </tr>
            ) : (
              staffList.map((staff) => (
                <tr key={staff._id} style={{ transition: "all 0.3s ease" }}>
                  <td style={{ padding: "20px 15px", background: "#f8fafc", borderRadius: "12px 0 0 12px", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9", borderLeft: "1px solid #f1f5f9" }}>
                    <div style={{ fontWeight: "600", color: "var(--text-main, #1e293b)", fontSize: "1.05rem" }}>{staff.fullname}</div>
                  </td>
                  <td style={{ padding: "20px 15px", background: "#f8fafc", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9", color: "var(--text-muted, #64748b)" }}>
                    📧 {staff.email}
                  </td>
                  <td style={{ padding: "20px 15px", background: "#f8fafc", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9" }}>
                    <span className={`badge ${staff.isActive ? 'bg-success' : 'bg-secondary'}`} style={{ padding: "8px 12px", borderRadius: "8px" }}>
                      {staff.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td style={{ padding: "20px 15px", background: "#f8fafc", borderRadius: "0 12px 12px 0", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9", borderRight: "1px solid #f1f5f9" }}>
                    <div className="d-flex gap-2">
                      <button
                        className="btn btn-sm btn-light border"
                        onClick={() => handleEditStaff(staff)}
                        style={{ borderRadius: "8px", padding: "6px 12px" }}
                      >
                        ✏️ Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger opacity-75"
                        onClick={() => handleDeleteStaff(staff._id)}
                        style={{ borderRadius: "8px", padding: "6px 12px" }}
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* TABLE SECTION: PICKUP ALLOCATIONS */}
      <div className="table-responsive" style={{ 
        background: "white", 
        borderRadius: "20px", 
        padding: "20px",
        boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
        border: "1px solid #f1f5f9"
      }}>
        <h4 style={{ marginBottom: "20px", color: "var(--secondary-color, #0f172a)", fontWeight: "700", paddingLeft: "15px" }}>
          Assign Staff to Pickups
        </h4>
        <table className="table table-hover align-middle mb-0" style={{ borderCollapse: "separate", borderSpacing: "0 10px" }}>
          <thead>
            <tr>
              <th style={{ background: "transparent", color: "var(--text-muted, #64748b)", fontSize: "0.85rem", padding: "0 15px 10px", borderBottom: "2px solid #f1f5f9" }}>Customer</th>
              <th style={{ background: "transparent", color: "var(--text-muted, #64748b)", fontSize: "0.85rem", padding: "0 15px 10px", borderBottom: "2px solid #f1f5f9" }}>Address</th>
              <th style={{ background: "transparent", color: "var(--text-muted, #64748b)", fontSize: "0.85rem", padding: "0 15px 10px", borderBottom: "2px solid #f1f5f9" }}>Date & Type</th>
              <th style={{ background: "transparent", color: "var(--text-muted, #64748b)", fontSize: "0.85rem", padding: "0 15px 10px", borderBottom: "2px solid #f1f5f9" }}>Status</th>
              <th style={{ background: "transparent", color: "var(--text-muted, #64748b)", fontSize: "0.85rem", padding: "0 15px 10px", borderBottom: "2px solid #f1f5f9" }}>Assigned Staff</th>
              <th style={{ background: "transparent", color: "var(--text-muted, #64748b)", fontSize: "0.85rem", padding: "0 15px 10px", borderBottom: "2px solid #f1f5f9" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {pickups.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-5 text-muted">
                  <div style={{ fontSize: "40px", marginBottom: "10px", opacity: 0.5 }}>📭</div>
                  No pickup requests found.
                </td>
              </tr>
            ) : (
              pickups.map((pickup) => {
                const assignedId = pickup.assignedStaff?._id || pickup.assignedStaff;
                return (
                <tr key={pickup._id} style={{ transition: "all 0.3s ease" }}>
                  <td style={{ padding: "20px 15px", background: "#f8fafc", borderRadius: "12px 0 0 12px", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9", borderLeft: "1px solid #f1f5f9" }}>
                    <div style={{ fontWeight: "600", color: "var(--text-main, #1e293b)", fontSize: "1.05rem" }}>{pickup.name}</div>
                    <div style={{ fontSize: "0.85rem", color: "#64748b" }}>📞 {pickup.phone}</div>
                  </td>
                  <td style={{ padding: "20px 15px", background: "#f8fafc", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9", color: "var(--text-muted, #64748b)" }}>
                    {pickup.address}
                  </td>
                  <td style={{ padding: "20px 15px", background: "#f8fafc", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9" }}>
                    <div style={{ fontWeight: "600", color: "#1e293b" }}>{new Date(pickup.pickupDate).toLocaleDateString()}</div>
                    <span style={{ fontSize: "0.85rem", color: "#10b981", fontWeight: "600" }}>{pickup.wasteType}</span>
                  </td>
                  <td style={{ padding: "20px 15px", background: "#f8fafc", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9" }}>
                    <span className={`badge ${
                      pickup.status === 'Completed' ? 'bg-success' : 
                      pickup.status === 'Cancelled' ? 'bg-danger' : 'bg-warning'
                    }`} style={{ padding: "8px 12px", borderRadius: "8px" }}>
                      {pickup.status || 'Pending'}
                    </span>
                  </td>
                  <td style={{ padding: "20px 15px", background: "#f8fafc", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9" }}>
                    <select 
                      className="form-select"
                      defaultValue={assignedId || ""}
                      onChange={(e) => {
                        const newStaffId = e.target.value;
                        if (newStaffId !== (assignedId || "")) {
                            handleAssignStaff(pickup._id, newStaffId);
                        }
                      }}
                      style={{ borderRadius: "8px", border: "1.5px solid #e2e8f0", minWidth: "140px" }}
                    >
                      <option value="">-- Unassigned --</option>
                      {staffList.map((staff) => (
                        <option key={staff._id} value={staff._id}>{staff.fullname}</option>
                      ))}
                    </select>
                  </td>
                  <td style={{ padding: "20px 15px", background: "#f8fafc", borderRadius: "0 12px 12px 0", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9", borderRight: "1px solid #f1f5f9" }}>
                    <button 
                      className="btn btn-sm btn-light border"
                      onClick={() => {
                        const selectElement = document.querySelector(`select[defaultValue="${assignedId || ""}"]`);
                        if (selectElement && selectElement.value !== (assignedId || "")) {
                           handleAssignStaff(pickup._id, selectElement.value);
                        } else {
                           // Try getting the sibling element if it's rendered slightly differently
                           alert("Staff member is already assigned or please select a staff member first.");
                        }
                      }}
                      style={{ borderRadius: "8px", padding: "6px 12px", fontWeight: "600", color: "#10b981", borderColor: "#10b981" }}
                    >
                      ✓ Update
                    </button>
                  </td>
                </tr>
              )})
            )}
          </tbody>
        </table>
      </div>

      <style>{`
        .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        tr:hover td { background: #ffffff !important; box-shadow: 0 4px 15px rgba(0,0,0,0.03); transform: translateY(-2px); }
      `}</style>
    </div>
  );
};

export default StaffPanel;
