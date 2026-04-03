import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #3027df, #0a0f6d)",
        color: "#fff",
      }}
      className="pt-5"
    >
      <div className="container">
        <div className="row mb-5">

          {/* 🌱 Brand */}
          <div className="col-md-3 mb-4">
            <h2 className="fw-bold">
               {/* ♻ Waste<span style={{ color: "#84dffa", fontWeight: "bold" }}>  Management</span> */}
                <span className="text-success">♻</span>
         <span style={{ color: "#eff9f4", fontWeight: "bold" }}>  WASTE</span>
           <span style={{ color: "#ade6f0", fontWeight: "bold" }}>  MANAGEMENT</span>
            </h2>
            <p style={{ fontSize: "14px", opacity: "0.9" }}>
              Smart and eco-friendly waste solutions to keep our planet clean and green.
            </p>

            {/* Social Icons */}
            <div className="mt-3">
              {["🌐", "📘", "📷"].map((icon, i) => (
                <span
                  key={i}
                  style={{
                    marginRight: "12px",
                    fontSize: "20px",
                    cursor: "pointer",
                    transition: "0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.transform = "scale(1.3)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.transform = "scale(1)")
                  }
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>

          {/* 📌 Quick Links */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">
              <span style={{ color: "#f6fe0df0", fontWeight: "bold" }}>Quick Links</span></h5>
            <ul className="list-unstyled">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Recycling", path: "/recycle" },
                { name: "Contact", path: "/contact" },
              ].map((item, index) => (
                <li key={index} className="mb-2">
                  <Link
                    to={item.path}
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      transition: "0.3s",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.color = "#eeff07")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.color = "#fff")
                    }
                  >
                    ➤ {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ♻️ Services */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3"><span style={{ color: "#e3fb0d", fontWeight: "bold" }}>Our Services</span></h5>
            <ul className="list-unstyled">
              {[
                "Waste Collection",
                "Recycling Management",
                "Garbage Tracking",
                "Smart Bin System",
                "Eco Awareness",
              ].map((service, index) => (
                <li key={index} className="mb-2">
                  ✔ {service}
                </li>
              ))}
            </ul>
          </div>

          {/* 📞 Contact + Newsletter */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3"><span style={{ color: "#f1f919",  fontWeight: "bold" }}>Contact Us</span></h5>
            <ul className="list-unstyled mb-3">
              <li>📍 Punjab, India</li>
              <li>📞 +91 1234567890</li>
              <li>📧 ecoguard@management.com</li>
            </ul>

            {/* Newsletter */}
            <input
              type="email"
              placeholder="Your Email"
              className="form-control mb-2"
              style={{ borderRadius: "20px" }}
            />
            <button
              className="btn w-100"
              style={{
                background: "#eefb36",
                borderRadius: "20px",
                fontWeight: "600",
              }}
            >
              Subscribe
            </button>
          </div>

        </div>

        {/* 🔻 Bottom */}
        <div
          className="text-center py-3"
          style={{
            borderTop: "1px solid rgba(165, 217, 21, 0.2)",
            fontSize: "14px",
          }}
        >
          © {currentYear} Waste Management System | Made with ♻ for Clean Earth 🌍
        </div>
      </div>
    </footer>
  );
};

export default Footer;