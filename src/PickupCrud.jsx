import React, { useEffect, useState } from "react";
import axios from "axios";
const api = import.meta.env.VITE_API_URL
const PickupCrud = () => {
  const [pickups, setPickups] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    wasteType: "",
    pickupDate: "",
    status: "Pending",
  });
  const [editingId, setEditingId] = useState(null);

  const API = `${api}/api/pickup`;

  // FETCH PICKUPS
  const fetchPickups = async () => {
    try {
      const res = await axios.get(API);
      setPickups(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPickups();
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
        await axios.put(`${API}/${editingId}`, formData);
        alert("Pickup Updated");
      } else {
        await axios.post(API, formData);
        alert("Pickup Created");
      }

      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        wasteType: "",
        pickupDate: "",
        status: "Pending",
      });
      setEditingId(null);
      fetchPickups();
    } catch (error) {
      console.log(error);
      alert("Error saving pickup");
    }
  };

  // DELETE
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      fetchPickups();
    } catch (error) {
      console.log(error);
      alert("Error deleting pickup");
    }
  };

  // EDIT
  const handleEdit = (pickup) => {
    setFormData({
      name: pickup.name,
      email: pickup.email || "",
      phone: pickup.phone,
      address: pickup.address,
      wasteType: pickup.wasteType,
      pickupDate: pickup.pickupDate ? pickup.pickupDate.split("T")[0] : "",
      status: pickup.status || "Pending",
    });
    setEditingId(pickup._id);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-primary">Pickup Requests CRUD</h2>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="mb-5">
        <div className="row g-3">
          <div className="col-md-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="form-control"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-12">
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="form-control"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-12 mb-3">
            <label className="form-label fw-bold">Waste Types</label>
            <div className="d-flex flex-wrap gap-2 p-2 border rounded">
              {["Plastic", "Paper", "Glass", "Metal", "Organic", "E-Waste", "Textiles", "Bulky Waste", "Hazardous", "Mixed"].map((type) => (
                <div key={type} className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={type}
                    id={`crud-waste-${type.replace(/\s+/g, '-')}`}
                    checked={formData.wasteType.split(", ").includes(type)}
                    onChange={(e) => {
                      const { value, checked } = e.target;
                      let currentTypes = formData.wasteType ? formData.wasteType.split(", ").filter(Boolean) : [];
                      if (checked) {
                        if (!currentTypes.includes(value)) currentTypes.push(value);
                      } else {
                        currentTypes = currentTypes.filter((t) => t !== value);
                      }
                      setFormData({ ...formData, wasteType: currentTypes.join(", ") });
                    }}
                  />
                  <label className="form-check-label" htmlFor={`crud-waste-${type.replace(/\s+/g, '-')}`}>
                    {type}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-4">
            <input
              type="date"
              name="pickupDate"
              className="form-control"
              value={formData.pickupDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4">
            <select
              name="status"
              className="form-control"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>
        <button className="btn btn-primary mt-3">
          {editingId ? "Update Pickup" : "Add Pickup"}
        </button>
        {editingId && (
          <button 
            type="button" 
            className="btn btn-secondary mt-3 ms-2"
            onClick={() => {
              setEditingId(null);
              setFormData({
                name: "",
                email: "",
                phone: "",
                address: "",
                wasteType: "",
                pickupDate: "",
                status: "Pending",
              });
            }}
          >
            Cancel Edit
          </button>
        )}
      </form>

      {/* TABLE */}
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Waste Type</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pickups.map((pickup) => (
              <tr key={pickup._id}>
                <td>{pickup.name}</td>
                <td>{pickup.email || "N/A"}</td>
                <td>{pickup.phone}</td>
                <td>{pickup.address}</td>
                <td>{pickup.wasteType}</td>
                <td>{new Date(pickup.pickupDate).toLocaleDateString()}</td>
                <td>
                  <span className={`badge ${
                    pickup.status === 'Completed' ? 'bg-success' : 
                    pickup.status === 'Cancelled' ? 'bg-danger' : 'bg-warning'
                  }`}>
                    {pickup.status || 'Pending'}
                  </span>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => handleEdit(pickup)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(pickup._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {pickups.length === 0 && (
              <tr>
                <td colSpan="8" className="text-center py-4 text-muted">
                  No pickup requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PickupCrud;
