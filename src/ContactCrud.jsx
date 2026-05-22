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
            ✉️
          </div>
          <h2 className="m-0" style={{ color: "var(--secondary-color)", fontWeight: "800", letterSpacing: "-0.5px" }}>
            Contact Messages
          </h2>
        </div>
        <p style={{ color: "var(--text-muted)", margin: "0", fontSize: "1.1rem", paddingLeft: "65px" }}>
          View and manage inquiries, support requests, and feedback from users.
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
          {editingId ? "Edit Contact Message" : "Add New Contact Message"}
        </h4>
        <form onSubmit={handleSubmit}>
          <div className="row g-4">
            <div className="col-md-6">
              <label className="form-label text-muted fw-bold mb-2">Sender Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                className="form-control"
                value={formData.name}
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
            <div className="col-md-8">
              <label className="form-label text-muted fw-bold mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Enter Subject"
                className="form-control"
                value={formData.subject}
                onChange={handleChange}
                style={{ borderRadius: "10px", padding: "12px 15px", border: "1.5px solid #e2e8f0" }}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label text-muted fw-bold mb-2">Status</label>
              <select
                name="status"
                className="form-select"
                value={formData.status}
                onChange={handleChange}
                required
                style={{ borderRadius: "10px", padding: "12px 15px", border: "1.5px solid #e2e8f0" }}
              >
                <option value="New">New</option>
                <option value="Read">Read</option>
                <option value="Resolved">Resolved</option>
              </select>
            </div>
            <div className="col-md-12">
              <label className="form-label text-muted fw-bold mb-2">Message</label>
              <textarea
                name="message"
                placeholder="Type the message details here..."
                className="form-control"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                style={{ borderRadius: "10px", padding: "12px 15px", border: "1.5px solid #e2e8f0", resize: "none" }}
              ></textarea>
            </div>
          </div>

          <div className="d-flex gap-2 mt-4">
            <button className="btn btn-primary" style={{ padding: "10px 25px", borderRadius: "10px" }}>
              {editingId ? "Update Message" : "Add Message"}
            </button>
            {editingId && (
              <button 
                type="button" 
                className="btn btn-light border" 
                style={{ padding: "10px 25px", borderRadius: "10px" }}
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
              <th style={{ background: "transparent", color: "var(--text-muted)", fontSize: "0.85rem", padding: "0 15px 10px", borderBottom: "2px solid #f1f5f9" }}>Sender</th>
              <th style={{ background: "transparent", color: "var(--text-muted)", fontSize: "0.85rem", padding: "0 15px 10px", borderBottom: "2px solid #f1f5f9" }}>Subject</th>
              <th style={{ background: "transparent", color: "var(--text-muted)", fontSize: "0.85rem", padding: "0 15px 10px", borderBottom: "2px solid #f1f5f9" }}>Message</th>
              <th style={{ background: "transparent", color: "var(--text-muted)", fontSize: "0.85rem", padding: "0 15px 10px", borderBottom: "2px solid #f1f5f9" }}>Status</th>
              <th style={{ background: "transparent", color: "var(--text-muted)", fontSize: "0.85rem", padding: "0 15px 10px", borderBottom: "2px solid #f1f5f9" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-5 text-muted">
                  <div style={{ fontSize: "40px", marginBottom: "10px", opacity: 0.5 }}>📭</div>
                  No contact messages found.
                </td>
              </tr>
            ) : (
              contacts.map((contact) => (
                <tr key={contact._id} style={{ transition: "all 0.3s ease" }}>
                  <td style={{ padding: "20px 15px", background: "#f8fafc", borderRadius: "12px 0 0 12px", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9", borderLeft: "1px solid #f1f5f9" }}>
                    <div style={{ fontWeight: "600", color: "var(--text-main)", fontSize: "1.05rem" }}>{contact.name}</div>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "4px" }}>📧 {contact.email}</div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "2px" }}>📅 {new Date(contact.createdAt).toLocaleDateString()}</div>
                  </td>
                  <td style={{ padding: "20px 15px", background: "#f8fafc", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9" }}>
                    <div style={{ fontWeight: "600", color: "var(--secondary-color)" }}>{contact.subject || "(No Subject)"}</div>
                  </td>
                  <td style={{ padding: "20px 15px", background: "#f8fafc", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9", maxWidth: "300px" }}>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.95rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {contact.message}
                    </div>
                  </td>
                  <td style={{ padding: "20px 15px", background: "#f8fafc", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9" }}>
                    <span className={`badge ${
                      contact.status === 'Resolved' ? 'bg-success' : 
                      contact.status === 'Read' ? 'bg-info text-dark' : 'bg-danger'
                    }`} style={{ padding: "8px 12px", borderRadius: "8px" }}>
                      {contact.status || 'New'}
                    </span>
                  </td>
                  <td style={{ padding: "20px 15px", background: "#f8fafc", borderRadius: "0 12px 12px 0", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9", borderRight: "1px solid #f1f5f9" }}>
                    <div className="d-flex gap-2 flex-wrap">
                      <button
                        className="btn btn-sm btn-light border"
                        onClick={() => handleEdit(contact)}
                        style={{ borderRadius: "8px", padding: "6px 12px" }}
                      >
                        ✏️ Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger opacity-75"
                        onClick={() => handleDelete(contact._id)}
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

export default ContactCrud;
