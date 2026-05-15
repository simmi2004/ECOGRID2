import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subStatus, setSubStatus] = useState(null); // "success" | "error" | null

  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      setSubStatus({ type: "error", text: "Please enter a valid email address." });
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setSubStatus({ type: "success", text: data.message || "Subscribed successfully!" });
        setEmail("");
      } else {
        setSubStatus({ type: "error", text: data.message || "Something went wrong. Try again." });
      }
    } catch (err) {
      setSubStatus({ type: "error", text: "Cannot connect to server. Make sure the backend is running." });
    }
  };

  const navLinks = [
    { name: "Home",      path: "/home" },
    { name: "About",     path: "/about" },
    { name: "Services",  path: "/services" },
    { name: "Recycling", path: "/recycle" },
    { name: "Contact",   path: "/contact" },
  ];

  const services = [
    "Waste Collection",
    "Recycling Management",
    "Garbage Tracking",
    "Smart Bin System",
    "Eco Awareness",
  ];

  const socials = [
    { icon: "🌐", label: "Website" },
    { icon: "📘", label: "Facebook" },
    { icon: "📷", label: "Instagram" },
    { icon: "🐦", label: "Twitter" },
  ];

  return (
    <>
      <style>{`
        .footer-link {
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          font-size: 0.88rem;
          transition: color 0.2s, padding-left 0.2s;
          display: inline-block;
        }
        .footer-link:hover {
          color: #14b8a6;
          padding-left: 4px;
        }
        .footer-service-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,0.6);
          font-size: 0.88rem;
          padding: 4px 0;
          transition: color 0.2s;
        }
        .footer-service-item:hover { color: #14b8a6; }
        .footer-social-btn {
          width: 38px; height: 38px;
          border-radius: 10px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem; cursor: pointer;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .footer-social-btn:hover {
          background: rgba(20,184,166,0.2);
          border-color: rgba(20,184,166,0.4);
          transform: translateY(-3px);
        }
        .footer-sub-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 10px;
          border: 1.5px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.07);
          color: #fff;
          font-size: 0.88rem;
          outline: none;
          transition: border-color 0.25s, background 0.25s;
          box-sizing: border-box;
        }
        .footer-sub-input::placeholder { color: rgba(255,255,255,0.35); }
        .footer-sub-input:focus {
          border-color: #14b8a6;
          background: rgba(255,255,255,0.11);
        }
        .footer-sub-btn {
          width: 100%;
          padding: 0.75rem;
          border-radius: 10px;
          border: none;
          background: linear-gradient(135deg, #14b8a6, #0f172a);
          color: #fff;
          font-weight: 700;
          font-size: 0.88rem;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(20,184,166,0.3);
          transition: transform 0.2s, box-shadow 0.2s;
          letter-spacing: 0.03em;
        }
        .footer-sub-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(20,184,166,0.4);
        }
        .footer-col-title {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #14b8a6;
          margin-bottom: 20px;
        }
      `}</style>

      <footer style={{
        background: "linear-gradient(160deg, #0a0f1e 0%, #0f172a 50%, #0d1f1a 100%)",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}>

        {/* Decorative blobs */}
        <div style={{
          position: "absolute", top: "-80px", left: "-80px",
          width: "300px", height: "300px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(20,184,166,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-60px", right: "-60px",
          width: "260px", height: "260px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(96,165,250,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Top accent line */}
        <div style={{
          height: "3px",
          background: "linear-gradient(90deg, transparent, #14b8a6, #60a5fa, transparent)",
        }} />

        <div className="container" style={{ position: "relative", zIndex: 1, padding: "60px 16px 0" }}>
          <div className="row">

            {/* ── Brand ── */}
            <div className="col-lg-4 col-md-6 mb-5">
              {/* Logo */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{
                  width: "44px", height: "44px",
                  background: "linear-gradient(145deg, #0f172a, #1e3a5f)",
                  borderRadius: "12px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "20px",
                  boxShadow: "0 4px 14px rgba(20,184,166,0.25)",
                  border: "1px solid rgba(20,184,166,0.25)",
                }}>♻</div>
                <div>
                  <div style={{ fontSize: "1.1rem", fontWeight: "800", color: "#fff", letterSpacing: "-0.03em" }}>
                    Eco<span style={{ color: "#14b8a6" }}>Manage</span>
                  </div>
                  <div style={{ fontSize: "0.58rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                    Waste Solutions
                  </div>
                </div>
              </div>

              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.88rem", lineHeight: "1.75", marginBottom: "24px", maxWidth: "300px" }}>
                Smart and eco-friendly waste solutions to keep our planet clean and green for future generations.
              </p>

              {/* Socials */}
              <div style={{ display: "flex", gap: "10px" }}>
                {socials.map((s, i) => (
                  <div key={i} className="footer-social-btn" title={s.label}>
                    {s.icon}
                  </div>
                ))}
              </div>
            </div>

            {/* ── Quick Links ── */}
            <div className="col-lg-2 col-md-6 mb-5">
              <div className="footer-col-title">Quick Links</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {navLinks.map((item, i) => (
                  <li key={i} style={{ marginBottom: "10px" }}>
                    <Link to={item.path} className="footer-link">
                      → {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Services ── */}
            <div className="col-lg-3 col-md-6 mb-5">
              <div className="footer-col-title">Our Services</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {services.map((s, i) => (
                  <li key={i} className="footer-service-item">
                    <span style={{
                      width: "6px", height: "6px", borderRadius: "50%",
                      background: "#14b8a6", flexShrink: 0,
                    }} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Contact + Newsletter ── */}
            <div className="col-lg-3 col-md-6 mb-5">
              <div className="footer-col-title">Stay Connected</div>

              {/* Contact info */}
              <div style={{ marginBottom: "24px" }}>
                {[
                  { icon: "📍", text: "Punjab, India" },
                  { icon: "📞", text: "+91 1234567890" },
                  { icon: "📧", text: "ecoguard@management.com" },
                ].map((c, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", gap: "10px",
                    color: "rgba(255,255,255,0.55)", fontSize: "0.85rem",
                    marginBottom: "10px",
                  }}>
                    <span style={{ fontSize: "1rem" }}>{c.icon}</span>
                    {c.text}
                  </div>
                ))}
              </div>

              {/* Newsletter */}
              <div style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "14px",
                padding: "16px",
              }}>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8rem", marginBottom: "12px" }}>
                  Get updates in your inbox
                </p>
                <input
                  type="email"
                  className="footer-sub-input"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setSubStatus(null); }}
                  style={{ marginBottom: "10px" }}
                />
                <button className="footer-sub-btn" onClick={handleSubscribe}>
                  Subscribe →
                </button>

                {subStatus && (
                  <p style={{
                    color: subStatus.type === "success" ? "#4ade80" : "#f87171",
                    fontSize: "0.78rem", marginTop: "10px", marginBottom: 0,
                    background: subStatus.type === "success" ? "rgba(74,222,128,0.1)" : "rgba(248,113,113,0.1)",
                    border: `1px solid ${subStatus.type === "success" ? "rgba(74,222,128,0.25)" : "rgba(248,113,113,0.25)"}`,
                    borderRadius: "8px", padding: "8px 10px",
                  }}>
                    {subStatus.type === "success" ? "✅" : "⚠️"} {subStatus.text}
                  </p>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          marginTop: "8px",
        }}>
          <div className="container" style={{ padding: "20px 16px" }}>
            <div style={{
              display: "flex", alignItems: "center",
              justifyContent: "space-between", flexWrap: "wrap", gap: "12px",
            }}>
              <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem", margin: 0 }}>
                © {currentYear} EcoManage — Waste Management System. Made with ♻ for Clean Earth 🌍
              </p>
              <div style={{ display: "flex", gap: "20px" }}>
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((t, i) => (
                  <span key={i} style={{
                    color: "rgba(255,255,255,0.35)", fontSize: "0.78rem",
                    cursor: "pointer", transition: "color 0.2s",
                  }}
                    onMouseOver={e => e.currentTarget.style.color = "#14b8a6"}
                    onMouseOut={e => e.currentTarget.style.color = "rgba(255,255,255,0.35)"}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </footer>
    </>
  );
};

export default Footer;
