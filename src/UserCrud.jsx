import React, { useEffect, useState } from "react";
import axios from "axios";

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

  const API = "http://localhost:3000/api/users";



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
    <div className="container mt-5">

      <h2 className="mb-4 text-primary">
        User CRUD
      </h2>


      {/* FORM */}
      <form onSubmit={handleSubmit} className="mb-5 bg-light p-4 rounded shadow-sm">

        <div className="row">
          <div className="col-md-6">
            <input
              type="text"
              name="fullname"
              placeholder="Enter Full Name"
              className="form-control mb-3"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="form-control mb-3"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="form-control mb-3"
              value={formData.password}
              onChange={handleChange}
              required={!editingId} // Password usually required on create, might be optional on edit
            />
          </div>

          <div className="col-md-6">
            <select
              name="role"
              className="form-select mb-3"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>
        </div>

        <div className="form-check mb-3">
          <input
            type="checkbox"
            name="isActive"
            className="form-check-input"
            checked={formData.isActive}
            onChange={handleChange}
            id="isActiveCheck"
          />
          <label className="form-check-label" htmlFor="isActiveCheck">
            Is Active
          </label>
        </div>

        <button className="btn btn-primary">
          {editingId ? "Update User" : "Add User"}
        </button>
        {editingId && (
          <button 
            type="button" 
            className="btn btn-secondary ms-2" 
            onClick={() => {
              setEditingId(null);
              setFormData({ fullname: "", email: "", password: "", role: "USER", isActive: true });
            }}
          >
            Cancel Edit
          </button>
        )}

      </form>


      {/* TABLE */}
      <div className="table-responsive">
        <table className="table table-hover table-bordered align-middle">

          <thead className="table-dark">
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {users.map((user) => (
              <tr key={user._id}>

                <td>{user.fullname}</td>
                <td>{user.email}</td>
                <td>
                  <span className={`badge ${user.role === 'ADMIN' ? 'bg-danger' : 'bg-primary'}`}>
                    {user.role}
                  </span>
                </td>
                <td>
                  <span className={`badge ${user.isActive ? 'bg-success' : 'bg-secondary'}`}>
                    {user.isActive ? 'Active' : 'Inactive'}
                  </span>
                </td>

                <td>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}

          </tbody>
        </table>
      </div>

    </div>
  );
};

export default UserCrud;