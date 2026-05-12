import React from "react";

import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

const handleGetStarted = () => {
  const user = localStorage.getItem("token");

  if (user) {
    navigate("/dashboard");
  } else {
    navigate("/login");
  }
};
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
      {/* <div
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
      </div> */}
      <div
  id="carouselExampleAutoplaying"
  className="carousel slide carousel-fade"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">

    {/* Slide 1 */}
    <div
      className="carousel-item active d-flex align-items-center justify-content-center text-center text-white"
      style={{
        height: "90vh",
        backgroundImage:
          'linear-gradient(rgba(151, 191, 242, 0.5), rgba(43, 18, 18, 0.4)), url("https://images.unsplash.com/photo-1501004318641-b39e6451bec6")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <h1 className="display-3 fw-bold" style={{ color: "#09094b" }}>
          Smart Waste Management 
          <pre>🌍 </pre>
        </h1>
        <p className="lead">Clean Cities | Green Future</p>
        {/* <button className="btn btn-light px-4 py-2 mt-3 fw-semibold">
          Get Started
        </button> */}
        <button
  className="btn btn-light px-4 py-2 mt-3 fw-semibold"
  onClick={handleGetStarted}
>Get Started</button>
      </div>
    </div>

    {/* Slide 2 */}
    <div
      className="carousel-item d-flex align-items-center justify-content-center text-center text-white"
      style={{
        height: "90vh",
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1581578731548-c64695cc6952")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <h1 className="display-3 fw-bold" style={{ color: "#f0f0fa" }}>
          Reduce Waste ♻️
        </h1>
        <p className="lead">Small steps create big impact</p>
        <button className="btn btn-success px-4 py-2 mt-3 fw-semibold">
          Learn More
        </button>
      </div>
    </div>

    {/* Slide 3 */}
    <div
      className="carousel-item d-flex align-items-center justify-content-center text-center text-white"
      style={{
        height: "90vh",
        backgroundImage:
          'linear-gradient(rgba(0,100,0,0.5), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1528323273322-d81458248d40")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <h1 className="display-3 fw-bold" style={{ color: "#f0f0fa" }}>
          Recycle Smart 🌱
        </h1>
        <p className="lead">Build a sustainable future</p>
        <button className="btn btn-warning px-4 py-2 mt-3 fw-semibold">
          Join Now
        </button>
      </div>
    </div>

  </div>

  {/* Controls */}
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon"></span>
  </button>

  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon"></span>
  </button>
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
      {/* <section className="container-fluid px-5 py-5">
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
      {/* </section> */} */}

      {/* STATS */}
      {/* <section
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
      </section> */}
      <section
  className="container-fluid py-5 position-relative overflow-hidden"
  style={{
    background: "linear-gradient(135deg, #123d76, #0d6efd)",
  }}
>
  {/* BACKGROUND CIRCLE EFFECTS */}
  <div
    style={{
      position: "absolute",
      top: "-80px",
      left: "-80px",
      width: "250px",
      height: "250px",
      background: "rgba(255,255,255,0.08)",
      borderRadius: "50%",
    }}
  ></div>

  <div
    style={{
      position: "absolute",
      bottom: "-100px",
      right: "-50px",
      width: "300px",
      height: "300px",
      background: "rgba(255,255,255,0.06)",
      borderRadius: "50%",
    }}
  ></div>

  <div className="container position-relative">

    {/* TOP CONTENT */}
    <div className="text-center text-white mb-5">
      <span
        className="px-3 py-2 rounded-pill"
        style={{
          backgroundColor: "rgba(255,255,255,0.12)",
          fontSize: "14px",
          letterSpacing: "1px",
        }}
      >
        ENOWASTE IMPACT REPORT
      </span>

      <h1
        className="fw-bold mt-4"
        style={{
          fontSize: "55px",
          letterSpacing: "1px",
        }}
      >
        Creating A Cleaner Future
      </h1>

      <p
        className="mx-auto mt-3"
        style={{
          maxWidth: "750px",
          fontSize: "18px",
          color: "rgba(255,255,255,0.8)",
          lineHeight: "1.8",
        }}
      >
        Our waste management solutions are helping communities
        reduce pollution, improve recycling efficiency, and build
        a more sustainable environment for future generations.
      </p>
    </div>

    {/* STATS SECTION */}
    <div className="row g-4">

      {[
        {
          number: "500+",
          title: "Successful Pickups",
          desc: "Daily waste collection services completed efficiently.",
          icon: "🚛",
        },
        {
          number: "1200+",
          title: "Happy Customers",
          desc: "Trusted by households and businesses across regions.",
          icon: "👨‍👩‍👧",
        },
        {
          number: "300+",
          title: "Tons Recycled",
          desc: "Waste processed responsibly through recycling systems.",
          icon: "♻️",
        },
        {
          number: "20+",
          title: "Areas Covered",
          desc: "Expanding eco-friendly services to more communities.",
          icon: "🌍",
        },
      ].map((item, index) => (
        <div className="col-lg-3 col-md-6" key={index}>

          <div
            className="h-100 text-center text-white p-4"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "25px",
              backdropFilter: "blur(12px)",
              transition: "0.4s ease",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            }}
          >
            {/* ICON */}
            <div
              className="mb-4 d-flex align-items-center justify-content-center mx-auto"
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "20px",
                background: "rgba(255,255,255,0.12)",
                fontSize: "38px",
              }}
            >
              {item.icon}
            </div>

            {/* NUMBER */}
            <h2
              className="fw-bold"
              style={{
                fontSize: "45px",
                marginBottom: "10px",
              }}
            >
              {item.number}
            </h2>

            {/* TITLE */}
            <h5
              className="fw-semibold mb-3"
              style={{
                letterSpacing: "0.5px",
              }}
            >
              {item.title}
            </h5>

            {/* DESCRIPTION */}
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "15px",
                lineHeight: "1.7",
              }}
            >
              {item.desc}
            </p>
          </div>

        </div>
      ))}
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="text-center py-5">
        <h2 className="fw-bold text-primary">
          Join Us for a Cleaner Tomorrow 🌍
        </h2>
       <button
  className="btn btn-primary mt-3 px-4"
  onClick={handleGetStarted}
>
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