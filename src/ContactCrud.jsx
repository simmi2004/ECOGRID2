import React, { useEffect, useState } from "react";
import axios from "axios";
const api = import.meta.env.VITE_API_URL

const ContactCrud = () => {
  const [contacts, setContacts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    status: "New",
  });
  const [editingId, setEditingId] = useState(null);

  const API = `${api}/api/contact`

  // FETCH CONTACTS
  const fetchContacts = async () => {
    try {
      const res = await axios.get(API);
      setContacts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContacts();
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
        alert("Contact Message Updated");
      } else {
        await axios.post(API, formData);
        alert("Contact Message Created");
      }

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        status: "New",
      });
      setEditingId(null);
      fetchContacts();
    } catch (error) {
      console.log(error);
      alert("Error saving contact message");
    }
  };

  // DELETE
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      fetchContacts();
    } catch (error) {
      console.log(error);
      alert("Error deleting message");
    }
  };

  // EDIT
  const handleEdit = (contact) => {
    setFormData({
      name: contact.name,
      email: contact.email,
      subject: contact.subject,
      message: contact.message,
      status: contact.status || "New",
    });
    setEditingId(contact._id);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-primary">Contact Messages CRUD</h2>

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
          <div className="col-md-8">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="form-control"
              value={formData.subject}
              onChange={handleChange}
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
              <option value="New">New</option>
              <option value="Read">Read</option>
              <option value="Resolved">Resolved</option>
            </select>
          </div>
          <div className="col-md-12">
            <textarea
              name="message"
              placeholder="Message"
              className="form-control"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>
        <button className="btn btn-primary mt-3">
          {editingId ? "Update Message" : "Add Message"}
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
                subject: "",
                message: "",
                status: "New",
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
              <th>Date</th>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact._id}>
                <td>{new Date(contact.createdAt).toLocaleDateString()}</td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.subject}</td>
                <td>{contact.message}</td>
                <td>
                  <span className={`badge ${
                    contact.status === 'Resolved' ? 'bg-success' : 
                    contact.status === 'Read' ? 'bg-info' : 'bg-danger'
                  }`}>
                    {contact.status || 'New'}
                  </span>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-warning me-2 mb-1"
                    onClick={() => handleEdit(contact)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger mb-1"
                    onClick={() => handleDelete(contact._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {contacts.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-4 text-muted">
                  No contact messages found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactCrud;
