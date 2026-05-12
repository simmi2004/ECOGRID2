import React from "react";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      title: "Waste Collection",
      description:
        "Efficient doorstep waste collection services for homes and businesses with timely pickups.",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
    },
    {
      id: 2,
      title: "Recycling Services",
      description:
        "We recycle plastic, paper, and metal waste to promote a sustainable environment.",
      image:
        "https://images.unsplash.com/photo-1604187351574-c75ca79f5807",
    },
    {
      id: 3,
      title: "Organic Waste Management",
      description:
        "Convert organic waste into compost and reduce landfill impact effectively.",
      image:
        "https://th.bing.com/th/id/OIP.8CL_SMkzpggpbiUFCI5J2QHaEc?w=317&h=190&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
    {
      id: 4,
      title: "Industrial Waste Handling",
      description:
        "Safe and eco-friendly disposal of industrial waste with compliance standards.",
      image:
        "https://th.bing.com/th/id/OIP.NRVYHswQPWcn-mEIHcdV1AHaE9?w=265&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
  ];

  return (
    <section className="py-5" style={{ background: "#f8f9fa" }}>
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h5 style={{ color: "#071057", fontWeight: "bold", fontSize: "85px" }}>
            SERVICES
          </h5>
          <h2 className="fw-bold">
            Smart Waste Management Solutions
          </h2>
          <p className="text-muted">
            We provide eco-friendly and efficient waste handling services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="row">
          {serviceData.map((service) => (
            <div className="col-md-3 mb-4" key={service.id}>
              
              <div
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                  transition: "0.3s",
                  background: "#fff",
                }}
              >
                
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />

                {/* Content */}
                <div className="p-3 text-center">
                  <h5 className="fw-bold">{service.title}</h5>
                  <p className="text-muted" style={{ fontSize: "14px" }}>
                    {service.description}
                  </p>

                  {/* Button */}
                  {/* <button
                    className="btn btn-primary btn-sm"
                    style={{ borderRadius: "20px" }}
                  >
                    Learn More
                  </button> */}


                   
                  {/* <button
  className="btn mt-3"
  style={{
    background: "linear-gradient(90deg, #00c6ff, #0072ff)",
    color: "white",
    borderRadius: "30px",
    padding: "10px 28px",
    border: "none",
    fontWeight: "600",
  }}
>
  Learn More
</button> */}
                </div>

              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;