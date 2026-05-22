import React, { useEffect, useState } from "react";
import axios from "axios";
const api = import.meta.env.VITE_API_URL

const UserCrud = () => {
  const [users, setUsers] = useState([]);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "USER",
    isActive: true,
  });

  const [editingId, setEditingId] = useState(null);

  const API = `${api}/api/users`;



  // FETCH USERS
  const fetchUsers = async () => {
    try {
      const res = await axios.get(API);
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    fetchUsers();
  }, []);



  // HANDLE INPUT
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };



  // CREATE / UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await axios.put(`${API}/${editingId}`, formData);
        alert("User Updated");
      } else {
        await axios.post(API, formData);
        alert("User Created");
      }

      setFormData({
        fullname: "",
        email: "",
        password: "",
        role: "USER",
        isActive: true,
      });

      setEditingId(null);

      fetchUsers();
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "An error occurred");
    }
  };



  // DELETE
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`${API}/${id}`);
        fetchUsers();
      } catch (error) {
        console.log(error);
      }
    }
  };



  // EDIT
  const handleEdit = (user) => {
    setFormData({
      fullname: user.fullname || "",
      email: user.email || "",
      password: user.password || "",
      role: user.role || "USER",
      isActive: user.isActive !== undefined ? user.isActive : true,
    });

    setEditingId(user._id);
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
            👥
          </div>
          <h2 className="m-0" style={{ color: "var(--secondary-color)", fontWeight: "800", letterSpacing: "-0.5px" }}>
            User Management
          </h2>
        </div>
        <p style={{ color: "var(--text-muted)", margin: "0", fontSize: "1.1rem", paddingLeft: "65px" }}>
          Manage platform users, including customers, admins, and staff members.
        </p>
      </div>

      {/* FORM SECTION */}
      <div style={{ 
        background: "white", 
        borderRadius: "20px", 
        padding: "30px",
        marginBottom: "30px",
        boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
        border: "1px solid #f1f5f9"
      }}>
        <h4 style={{ marginBottom: "20px", color: "var(--secondary-color)", fontWeight: "700" }}>
          {editingId ? "Edit User Record" : "Add New User"}
        </h4>
        <form onSubmit={handleSubmit}>
          <div className="row g-4">
            <div className="col-md-6">
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
            <div className="col-md-6">
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
            <div className="col-md-6">
              <label className="form-label text-muted fw-bold mb-2">Password</label>
              <input
                type="password"
                name="password"
                placeholder={editingId ? "Leave blank to keep current" : "Enter Password"}
                className="form-control"
                value={formData.password}
                onChange={handleChange}
                required={!editingId}
                style={{ borderRadius: "10px", padding: "12px 15px", border: "1.5px solid #e2e8f0" }}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label text-muted fw-bold mb-2">Assign Role</label>
              <select
                name="role"
                className="form-select"
                value={formData.role}
                onChange={handleChange}
                style={{ borderRadius: "10px", padding: "12px 15px", border: "1.5px solid #e2e8f0" }}
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="STAFF">Staff</option>
              </select>
            </div>
          </div>

          <div className="form-check mt-4 mb-4">
            <input
              type="checkbox"
              name="isActive"
              className="form-check-input"
              checked={formData.isActive}
              onChange={handleChange}
              id="isActiveCheck"
              style={{ transform: "scale(1.2)", cursor: "pointer" }}
            />
            <label className="form-check-label ms-2 fw-bold text-muted" htmlFor="isActiveCheck" style={{ cursor: "pointer" }}>
              Account is Active
            </label>
          </div>

          <div className="d-flex gap-2">
            <button className="btn btn-primary" style={{ padding: "10px 25px", borderRadius: "10px" }}>
              {editingId ? "Update User" : "Add User"}
            </button>
            {editingId && (
              <button 
                type="button" 
                className="btn btn-light border" 
                style={{ padding: "10px 25px", borderRadius: "10px" }}
                onClick={() => {
                  setEditingId(null);
                  setFormData({ fullname: "", email: "", password: "", role: "USER", isActive: true });
                }}
              >
                Cancel Edit
              </button>
            )}
          </div>
        </form>
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
              <th style={{ background: "transparent", color: "var(--text-muted)", fontSize: "0.85rem", padding: "0 15px 10px", borderBottom: "2px solid #f1f5f9" }}>Full Name</th>
              <th style={{ background: "transparent", color: "var(--text-muted)", fontSize: "0.85rem", padding: "0 15px 10px", borderBottom: "2px solid #f1f5f9" }}>Email</th>
              <th style={{ background: "transparent", color: "var(--text-muted)", fontSize: "0.85rem", padding: "0 15px 10px", borderBottom: "2px solid #f1f5f9" }}>Role</th>
              <th style={{ background: "transparent", color: "var(--text-muted)", fontSize: "0.85rem", padding: "0 15px 10px", borderBottom: "2px solid #f1f5f9" }}>Status</th>
              <th style={{ background: "transparent", color: "var(--text-muted)", fontSize: "0.85rem", padding: "0 15px 10px", borderBottom: "2px solid #f1f5f9" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-5 text-muted">
                  <div style={{ fontSize: "40px", marginBottom: "10px", opacity: 0.5 }}>📭</div>
                  No users found.
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user._id} style={{ transition: "all 0.3s ease" }}>
                  <td style={{ padding: "20px 15px", background: "#f8fafc", borderRadius: "12px 0 0 12px", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9", borderLeft: "1px solid #f1f5f9" }}>
                    <div style={{ fontWeight: "600", color: "var(--text-main)", fontSize: "1.05rem" }}>{user.fullname}</div>
                  </td>
                  <td style={{ padding: "20px 15px", background: "#f8fafc", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9", color: "var(--text-muted)" }}>
                    📧 {user.email}
                  </td>
                  <td style={{ padding: "20px 15px", background: "#f8fafc", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9" }}>
                    <span style={{ 
                      padding: "6px 12px", 
                      background: user.role === 'ADMIN' ? "rgba(239, 68, 68, 0.1)" : user.role === 'STAFF' ? "rgba(245, 158, 11, 0.1)" : "rgba(14, 165, 233, 0.1)", 
                      color: user.role === 'ADMIN' ? "var(--danger)" : user.role === 'STAFF' ? "var(--warning)" : "var(--primary-color)", 
                      borderRadius: "8px",
                      fontWeight: "600",
                      fontSize: "0.85rem"
                    }}>
                      {user.role}
                    </span>
                  </td>
                  <td style={{ padding: "20px 15px", background: "#f8fafc", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9" }}>
                    <span className={`badge ${user.isActive ? 'bg-success' : 'bg-secondary'}`} style={{ padding: "8px 12px", borderRadius: "8px" }}>
                      {user.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td style={{ padding: "20px 15px", background: "#f8fafc", borderRadius: "0 12px 12px 0", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9", borderRight: "1px solid #f1f5f9" }}>
                    <div className="d-flex gap-2">
                      <button
                        className="btn btn-sm btn-light border"
                        onClick={() => handleEdit(user)}
                        style={{ borderRadius: "8px", padding: "6px 12px" }}
                      >
                        ✏️ Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger opacity-75"
                        onClick={() => handleDelete(user._id)}
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

      <style>{`
        .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        tr:hover td { background: #ffffff !important; box-shadow: 0 4px 15px rgba(0,0,0,0.03); transform: translateY(-2px); }
      `}</style>
    </div>
  );
};

export default UserCrud;