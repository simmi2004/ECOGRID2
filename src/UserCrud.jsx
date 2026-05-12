import React, { useEffect, useState } from "react";
import axios from "axios";

const UserCrud = () => {
  const [users, setUsers] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };



  // CREATE / UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await axios.put(`${API}/update/${editingId}`, formData);
        alert("User Updated");
      } else {
        await axios.post(`${API}/create`, formData);
        alert("User Created");
      }

      setFormData({
        name: "",
        email: "",
        phone: "",
      });

      setEditingId(null);

      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };



  // DELETE
  const handleDelete = async (id) => {
    await axios.delete(`${API}/delete/${id}`);
    fetchUsers();
  };



  // EDIT
  const handleEdit = (user) => {
    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone,
    });

    setEditingId(user._id);
  };



  return (
    <div className="container mt-5">

      <h2 className="mb-4 text-primary">
        User CRUD
      </h2>


      {/* FORM */}
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          className="form-control mb-3"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className="form-control mb-3"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Enter Phone"
          className="form-control mb-3"
          value={formData.phone}
          onChange={handleChange}
        />

        <button className="btn btn-primary">
          {editingId ? "Update User" : "Add User"}
        </button>

      </form>


      {/* TABLE */}
      <table className="table table-bordered mt-5">

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {users.map((user) => (
            <tr key={user._id}>

              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>

              <td>
                <button
                  className="btn btn-warning me-2"
                  onClick={() => handleEdit(user)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger"
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
  );
};

export default UserCrud;