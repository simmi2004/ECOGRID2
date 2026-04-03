import React from "react";

const RequestPickup = () => {
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
          <h5 style={{ color: "#198754", fontWeight: "600" }}>
            Request Pickup
          </h5>
          <h2 className="fw-bold">
            Schedule Your Waste Pickup Easily
          </h2>
          <p className="text-muted">
            Fill the form below and our team will collect your waste at your convenience.
          </p>
        </div>

        <div className="row align-items-center">

          {/* LEFT IMAGE */}
          <div className="col-md-6 mb-4">
            <div
              style={{
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1621451537084-482c73073a0f"
                alt="pickup"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "0.4s",
                }}
              />
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="col-md-6">
            <div
              style={{
                background: "#fff",
                padding: "30px",
                borderRadius: "15px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <form>

                {/* Name */}
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone Number"
                    required
                  />
                </div>

                {/* Address */}
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="2"
                    placeholder="Pickup Address"
                    required
                  ></textarea>
                </div>

                {/* Waste Type */}
                <div className="mb-3">
                  <select className="form-control">
                    <option>Select Waste Type</option>
                    <option>Plastic</option>
                    <option>Paper</option>
                    <option>Organic</option>
                    <option>E-Waste</option>
                  </select>
                </div>

                {/* Date */}
                <div className="mb-3">
                  <input
                    type="date"
                    className="form-control"
                    required
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="btn btn-success w-100"
                  style={{
                    borderRadius: "25px",
                    fontWeight: "600",
                    padding: "10px",
                  }}
                >
                  🚛 Book Pickup
                </button>

              </form>
            </div>
          </div>
        </div>

        {/* EXTRA FEATURES */}
        <div className="row mt-5 text-center">

          {[
            {
              icon: "♻️",
              title: "Eco Friendly",
              desc: "We follow sustainable waste management practices.",
            },
            {
              icon: "⏱️",
              title: "Quick Service",
              desc: "Fast and reliable pickup at your doorstep.",
            },
            {
              icon: "💰",
              title: "Affordable",
              desc: "Cost-effective solutions for all users.",
            },
          ].map((item, index) => (
            <div className="col-md-4 mb-3" key={index}>
              
              <div
                style={{
                  background: "#fff",
                  padding: "20px",
                  borderRadius: "12px",
                  boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-10px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <h3>{item.icon}</h3>
                <h5 className="fw-bold">{item.title}</h5>
                <p className="text-muted">{item.desc}</p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default RequestPickup;