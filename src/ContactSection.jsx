import React, { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #e9f7ef, #ffffff)",
      }}
    >
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h5 style={{ color: "#071057", fontWeight: "bold", fontSize: "85px" }}>
            CONTACT US
          </h5>
          <h2 className="fw-bold">Get In Touch For Waste Pickup</h2>
          <p className="text-muted">
            Have waste to recycle? Contact us today and help build a cleaner environment.
          </p>
        </div>

        <div className="row align-items-center">

          {/* IMAGE WITH OVERLAY */}
          <div className="col-md-6 mb-4">
            <div
              style={{
                position: "relative",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1604187351574-c75ca79f5807"
                alt="contact"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              {/* Overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "rgba(63, 108, 222, 0.19)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                <div>
                  <h3 className="fw-bold">Clean Earth Mission 🌍</h3>
                  <p>Join us in making the world waste-free</p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="col-md-6">
            <div
              style={{
                background: "#fff",
                padding: "30px",
                borderRadius: "15px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  style={{
                    borderRadius: "25px",
                    fontWeight: "600",
                    transition: "0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.transform = "scale(1)")
                  }
                >
                  Send Message
                </button>

                {/* Success Message */}
                {submitted && (
                  <p className="text-primary mt-3 text-center">
                    ✅ Message sent successfully!
                  </p>
                )}

              </form>
            </div>
          </div>
        </div>

        {/* CONTACT INFO */}
        <div className="row mt-5 text-center">
          {[
            { icon: "📍", title: "Address", value: "Punjab, India" },
            { icon: "📞", title: "Phone", value: "+91 98765 43210" },
            { icon: "📧", title: "Email", value: "waste@management.com" },
          ].map((item, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div
                style={{
                  background: "#fff",
                  padding: "20px",
                  borderRadius: "12px",
                  boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
                  transition: "0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-10px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <h3>{item.icon}</h3>
                <h6 className="fw-bold">{item.title}</h6>
                <p className="text-muted">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* MAP SECTION (IMPORTANT FOR PROJECT) */}
        <div className="mt-5">
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=punjab&t=&z=13&ie=UTF8&iwloc=&output=embed"
            style={{
              width: "100%",
              height: "300px",
              border: "0",
              borderRadius: "15px",
            }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;