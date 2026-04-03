import React from "react";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#eef4ff" }}>

      {/* NAVBAR */}
      <nav
        className="navbar navbar-expand-lg shadow-sm"
        style={{ background: "linear-gradient(to right, #0b5ed7, #0a58ca)" }}
      >
        <div className="container-fluid px-4">
          <a className="navbar-brand text-white fw-bold fs-4" href="#">
            <marquee behavior="alternate" direction="center" scrollamount="5">
              <span style={{ color: "#a9c7ff" }}>Eco</span>
              <span style={{ color: "#f9f92e" }}>Waste</span>
            </marquee>
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div
        className="hero-wrap d-flex align-items-center justify-content-center text-center text-white"
        style={{
          backgroundImage:
            'linear-gradient(rgba(120, 172, 240, 0.5), rgba(166, 228, 232, 0.15)), url("https://images.unsplash.com/photo-1581578731548-c64695cc6952")',
          height: "90vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <h1 className="display-3 fw-bold">
             <span style={{ color: "#140a39", fontWeight: "bold" }}>Smart Waste Management 🌍</span>
          </h1>
          <p className="lead">
            Clean Cities | Green Future | Sustainable Living
          </p>
          <button className="btn btn-light px-4 py-2 mt-3 fw-semibold shadow">
            Get Started
          </button>
        </div>
      </div>

      {/* FEATURES */}
      <section className="container-fluid px-5 py-5 text-center">
        {/* <h2 className="text-primary fw-bold mb-5">Why Choose Us</h2> */}
        <h5 className="text-primary fw-bold" style={{ fontSize: "85px", fontWeight: "bold" , fontcolor: "#101492"}}>
          WHY CHOOSE US
          </h5>

        <div className="row">
          {[
            { icon: "♻", title: "Eco Friendly" },
            { icon: "🚛", title: "Fast Pickup" },
            { icon: "📍", title: "Live Tracking" },
            { icon: "📊", title: "Smart Analytics" },
          ].map((item, i) => (
            <div className="col-md-3 mb-4" key={i}>
              <div className="p-4 shadow rounded bg-white h-100 feature-box">
                <h1>{item.icon}</h1>
                <h5 className="fw-bold text-primary">{item.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES IMAGE CARDS */}
      <section className="container-fluid px-5 py-5">
         {/* <h5 className="text-primary fw-bold" style={{ fontSize: "85px", fontWeight: "bold" , fontcolor: "#101492"}}>
            OUR SERVICES
          </h5> */}
           <h2 className="text-center text-primary fw-bold mb-4" style={{ fontSize: "85px", fontWeight: "bold" , fontcolor: "#101492"}}>
            OUR SERVICES
        </h2>

        <div className="row">
          {[
            {
              title: "Garbage Collection",
              img: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807",
            },
            {
              title: "Recycling",
              img: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46",
            },
            {
              title: "E-Waste",
              img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
            },
          ].map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="service-card">
                <img src={item.img} alt={item.title} />
                <div className="overlay">
                  <h4>{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-fluid px-5 py-5 bg-white text-center">
        {/* <h2 className="text-primary fw-bold mb-5">How It Works</h2> */}
        <h5 className="text-primary fw-bold" style={{ fontSize: "85px", fontWeight: "bold" , fontcolor: "#101492"}}>
            HOW IT WORKS
          </h5>

        <div className="row">
          {[
            "Request Pickup 📲",
            "We Collect Waste 🚛",
            "Recycle Process ♻",
            "Clean Environment 🌱",
          ].map((step, i) => (
            <div className="col-md-3" key={i}>
              <div className="p-4 shadow rounded step-box">
                <h5>{step}</h5>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PICKUP FORM */}
      <section className="container-fluid px-5 py-5">
        {/* <h2 className="text-center text-primary fw-bold mb-4">
          Request Waste Pickup
        </h2> */}
        <h2 className="text-center text-primary fw-bold mb-4" style={{ fontSize: "85px", fontWeight: "bold" , fontcolor: "#101492"}}>
            REQUEST WASTE PICK UP
        </h2>

        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1528323273322-d81458248d40"
              className="img-fluid rounded shadow"
              alt="Pickup"
            />
          </div>

          <div className="col-md-6">
            <form className="p-4 shadow rounded bg-white">
              <input className="form-control mb-3" placeholder="Location" />
              <input className="form-control mb-3" placeholder="Waste Type" />
              <input type="date" className="form-control mb-3" />
              <button className="btn btn-primary w-100">
                Schedule Pickup
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section
        className="container-fluid text-center text-white py-5"
        style={{
          background: "linear-gradient(to right, #629cf3, #084298)",
          textcolor: "#f1f8f4",
        }}
      >
        <div className="row , align-items-center, fontcolor: #f1f8f4">
          {[
            { num: "500+", text: "Pickups" },
            { num: "1200+", text: "Customers" },
            { num: "300+", text: "Recycled" },
            { num: "20+", text: "Areas" },
          ].map((item, i) => (
            <div className="col-md-3" key={i}>
              <h2>{item.num}</h2>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-5">
        <h2 className="fw-bold text-primary">
          Join Us for a Cleaner Tomorrow 🌍
        </h2>
        <button className="btn btn-primary mt-3 px-4">
          Get Started
        </button>
      </section>

      {/* FOOTER */}
      <footer
        className="text-white text-center p-3"
        style={{ background: "linear-gradient(to right, #0a58ca, #052c65)" }}
      >
        © 2026 EcoGuard Management
      </footer>

      {/* CSS EFFECTS */}
      <style>
        {`
        .feature-box:hover {
          transform: translateY(-10px);
          transition: 0.3s;
          background: #f9f92e;
        }

        .service-card {
          position: relative;
          overflow: hidden;
          border-radius: 15px;
          cursor: pointer;
        }

        .service-card img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          transition: 0.4s;
        }

        .service-card:hover img {
          transform: scale(1.1);
          background: #f9f92e;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(11,94,215,0.75);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          opacity: 0;
          transition: 0.4s;
        }

        .service-card:hover .overlay {
          opacity: 1;
        }

        .step-box:hover {
          background: #eefc30;
          color: white;
          transition: 0.3s;
        }
        `}
      </style>

    </div>
  );
};

export default Home;