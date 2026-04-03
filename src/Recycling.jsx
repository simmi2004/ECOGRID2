import React from "react";

const Recycling = () => {
  const recycleData = [
    {
      id: 1,
      title: "Plastic Recycling",
      description:
        "We collect and recycle plastic waste to reduce pollution and reuse materials efficiently.",
      image:
        "https://images.unsplash.com/photo-1604187351574-c75ca79f5807",
    },
    {
      id: 2,
      title: "Paper Recycling",
      description:
        "Paper waste is processed and reused to save trees and reduce environmental impact.",
      image:
        "https://images.unsplash.com/photo-1504718855392-c0f33b372e72",
    },
    {
      id: 3,
      title: "E-Waste Recycling",
      description:
        "Safe disposal and recycling of electronic waste to prevent toxic hazards.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
      id: 4,
      title: "Glass Recycling",
      description:
        "We recycle glass waste into reusable materials for construction and packaging.",
      image:
        "https://th.bing.com/th/id/OIP.Rh8JHt9guOaZQUUyifwAsgHaEK?w=286&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
  ];

  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(to right, #e8f5e9, #f1f8f4)",
        width: "100%",
      }}
    >
      <div className="container-fluid px-5">

        {/* 🔥 Heading */}
        <div className="text-center mb-5">
          <h5 className="text-primary fw-bold" style={{ fontSize: "85px", fontWeight: "bold" , fontcolor: "#101492"}}>
            ♻ RECYCLING  PROCESS
          </h5>
          <h2 className="fw-bold">Recycle Today for a Better Tomorrow</h2>
          <p className="text-muted">
            Our recycling services help reduce waste and protect the environment.
          </p>
        </div>

        {/* 🚀 Cards */}
        <div className="row">
          {recycleData.map((item) => (
            <div className="col-lg-3 col-md-6 mb-4" key={item.id}>
              
              <div
                className="recycle-card"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  position: "relative",
                  cursor: "pointer",
                  boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
                  transition: "all 0.4s ease",
                }}
              >

                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    transition: "0.4s",
                  }}
                />

                {/* Overlay Effect */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                    opacity: 0,
                    transition: "0.4s",
                  }}
                  className="overlay"
                ></div>

                {/* Content */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    color: "#fff",
                    transform: "translateY(20px)",
                    opacity: 0,
                    transition: "0.4s",
                  }}
                  className="content"
                >
                  <h5 className="fw-bold">{item.title}</h5>
                  <p style={{ fontSize: "14px" }}>{item.description}</p>
                  <button className="btn btn-success btn-sm rounded-pill">
                    Recycle Now
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* 🔥 Custom Hover Effects */}
      <style>
        {`
        .recycle-card:hover img {
          transform: scale(1.1);
        }

        .recycle-card:hover .overlay {
          opacity: 1;
        }

        .recycle-card:hover .content {
          opacity: 1;
          transform: translateY(0);
        }
        `}
      </style>

    </section>
  );
};

export default Recycling;