import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    badge: "🌍 Smart Waste Solutions",
    heading: "Managing Waste,",
    highlight: "Protecting Earth",
    sub: "Join thousands of communities building a cleaner, greener future with intelligent waste management.",
    cta: { label: "Get Started", path: "/pickup" },
    ctaSecondary: { label: "Learn More", path: "/about" },
    bg: "linear-gradient(135deg, rgba(10,20,60,0.82) 0%, rgba(13,148,136,0.55) 100%)",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1600&q=80",
    accent: "#14b8a6",
  },
  {
    id: 2,
    badge: "♻️ Recycling First",
    heading: "Reduce, Reuse,",
    highlight: "Recycle Smart",
    sub: "Small actions create massive impact. Our recycling programs turn waste into valuable resources every day.",
    cta: { label: "Explore Recycling", path: "/recycle" },
    ctaSecondary: { label: "Our Services", path: "/services" },
    bg: "linear-gradient(135deg, rgba(5,30,20,0.85) 0%, rgba(5,150,105,0.6) 100%)",
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&q=80",
    accent: "#10b981",
  },
  {
    id: 3,
    badge: "🚛 Fast & Reliable",
    heading: "Doorstep Pickup,",
    highlight: "Zero Hassle",
    sub: "Schedule a pickup in seconds. Our fleet arrives on time, every time — keeping your space clean effortlessly.",
    cta: { label: "Request Pickup", path: "/pickup" },
    ctaSecondary: { label: "Contact Us", path: "/contact" },
    bg: "linear-gradient(135deg, rgba(15,23,42,0.88) 0%, rgba(30,58,95,0.75) 100%)",
    img: "https://images.unsplash.com/photo-1528323273322-d81458248d40?w=1600&q=80",
    accent: "#60a5fa",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  // Auto-advance every 5s
  useEffect(() => {
    const timer = setInterval(() => goTo((current + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, [current]);

  const goTo = (index) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 400);
  };

  const slide = slides[current];

  return (
    <div style={{ backgroundColor: "#f8fafc" }}>

      {/* ── HERO SLIDER ── */}
      <div style={{ position: "relative", height: "92vh", overflow: "hidden" }}>

        {/* Background image */}
        <div
          key={current}
          style={{
            position: "absolute", inset: 0,
            backgroundImage: `url("${slide.img}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "opacity 0.6s ease",
            opacity: animating ? 0 : 1,
          }}
        />

        {/* Gradient overlay */}
        <div style={{ position: "absolute", inset: 0, background: slide.bg }} />

        {/* Decorative circles */}
        <div style={{
          position: "absolute", top: "-120px", right: "-120px",
          width: "500px", height: "500px", borderRadius: "50%",
          background: `radial-gradient(circle, ${slide.accent}22 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-80px", left: "-80px",
          width: "350px", height: "350px", borderRadius: "50%",
          background: `radial-gradient(circle, ${slide.accent}18 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />

        {/* Slide content */}
        <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", alignItems: "center" }}>
          <div className="container">
            <div style={{
              maxWidth: "680px",
              opacity: animating ? 0 : 1,
              transform: animating ? "translateY(24px)" : "translateY(0)",
              transition: "all 0.55s cubic-bezier(0.16,1,0.3,1)",
            }}>

              {/* Badge */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
                border: `1px solid ${slide.accent}55`,
                borderRadius: "50px",
                padding: "6px 18px",
                fontSize: "0.82rem", fontWeight: "600",
                color: "#fff", letterSpacing: "0.06em",
                marginBottom: "24px",
              }}>
                {slide.badge}
              </div>

              {/* Heading */}
              <h1 style={{
                fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: "800",
                lineHeight: "1.1", color: "#ffffff",
                letterSpacing: "-0.03em", marginBottom: "0",
              }}>
                {slide.heading}
              </h1>
              <h1 style={{
                fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: "800",
                lineHeight: "1.2",
                background: `linear-gradient(90deg, ${slide.accent}, #fff)`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                backgroundClip: "text", letterSpacing: "-0.03em", marginBottom: "20px",
              }}>
                {slide.highlight}
              </h1>

              {/* Subtext */}
              <p style={{
                fontSize: "1.05rem", color: "rgba(255,255,255,0.78)",
                lineHeight: "1.75", maxWidth: "520px", marginBottom: "36px",
              }}>
                {slide.sub}
              </p>

              {/* CTA Buttons */}
              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <Link to={slide.cta.path} style={{
                  background: `linear-gradient(135deg, ${slide.accent}, #0f172a)`,
                  color: "#fff", fontWeight: "700", fontSize: "0.92rem",
                  padding: "13px 28px", borderRadius: "50px", textDecoration: "none",
                  boxShadow: `0 6px 24px ${slide.accent}55`,
                  transition: "transform 0.2s, box-shadow 0.2s",
                  display: "inline-flex", alignItems: "center", gap: "8px",
                }}
                  onMouseOver={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 10px 30px ${slide.accent}66`; }}
                  onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = `0 6px 24px ${slide.accent}55`; }}
                >
                  {slide.cta.label} →
                </Link>
                <Link to={slide.ctaSecondary.path} style={{
                  background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)",
                  color: "#fff", fontWeight: "600", fontSize: "0.92rem",
                  padding: "12px 26px", borderRadius: "50px", textDecoration: "none",
                  border: "1.5px solid rgba(255,255,255,0.3)",
                  transition: "background 0.2s, border-color 0.2s",
                }}
                  onMouseOver={e => { e.currentTarget.style.background = "rgba(255,255,255,0.18)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)"; }}
                  onMouseOut={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; }}
                >
                  {slide.ctaSecondary.label}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Dot indicators */}
        <div style={{
          position: "absolute", bottom: "36px", left: "50%",
          transform: "translateX(-50%)",
          display: "flex", gap: "10px", zIndex: 3,
        }}>
          {slides.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} style={{
              width: i === current ? "32px" : "10px", height: "10px",
              borderRadius: "5px",
              background: i === current ? slide.accent : "rgba(255,255,255,0.4)",
              border: "none", cursor: "pointer",
              transition: "all 0.35s ease", padding: 0,
            }} />
          ))}
        </div>

        {/* Prev / Next arrows */}
        {[
          { dir: "prev", symbol: "‹", pos: { left: "24px" }, idx: (current - 1 + slides.length) % slides.length },
          { dir: "next", symbol: "›", pos: { right: "24px" }, idx: (current + 1) % slides.length },
        ].map(({ dir, symbol, pos, idx }) => (
          <button key={dir} onClick={() => goTo(idx)} style={{
            position: "absolute", top: "50%", transform: "translateY(-50%)", ...pos,
            zIndex: 3, width: "48px", height: "48px", borderRadius: "50%",
            background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)",
            border: "1.5px solid rgba(255,255,255,0.25)", color: "#fff",
            fontSize: "1.6rem", lineHeight: 1, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.2s",
          }}
            onMouseOver={e => e.currentTarget.style.background = "rgba(255,255,255,0.22)"}
            onMouseOut={e => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}
          >
            {symbol}
          </button>
        ))}
      </div>

      {/* ── WHY CHOOSE US ── */}
      <section className="container-fluid px-5 py-5 text-center" style={{ background: "#f8fafc" }}>
        <p style={{ color: "#14b8a6", fontWeight: "700", letterSpacing: "0.15em", fontSize: "0.8rem", textTransform: "uppercase" }}>Our Strengths</p>
        <h2 style={{ fontWeight: "800", color: "#0f172a", fontSize: "2.4rem", letterSpacing: "-0.03em", marginBottom: "48px" }}>Why Choose Us</h2>
        <div className="row g-4">
          {[
            { icon: "♻", title: "Eco Friendly",     desc: "100% sustainable processes that protect the environment." },
            { icon: "🚛", title: "Fast Pickup",      desc: "On-time collection with real-time scheduling." },
            { icon: "📍", title: "Live Tracking",    desc: "Track your pickup from request to completion." },
            { icon: "📊", title: "Smart Analytics",  desc: "Data-driven insights to optimize waste reduction." },
          ].map((item, i) => (
            <div className="col-md-3 mb-2" key={i}>
              <div style={{
                background: "#fff", borderRadius: "20px", padding: "36px 24px",
                boxShadow: "0 4px 24px rgba(15,23,42,0.07)",
                border: "1px solid rgba(15,23,42,0.06)",
                transition: "all 0.3s ease", height: "100%",
              }}
                onMouseOver={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(20,184,166,0.15)"; e.currentTarget.style.borderColor = "#14b8a6"; }}
                onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(15,23,42,0.07)"; e.currentTarget.style.borderColor = "rgba(15,23,42,0.06)"; }}
              >
                <div style={{
                  width: "64px", height: "64px", borderRadius: "16px",
                  background: "linear-gradient(135deg, #f0fdfa, #ccfbf1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "28px", margin: "0 auto 20px",
                }}>
                  {item.icon}
                </div>
                <h5 style={{ fontWeight: "700", color: "#0f172a", marginBottom: "10px" }}>{item.title}</h5>
                <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: "1.6", margin: 0 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── OUR SERVICES ── */}
      <section className="container-fluid px-5 py-5" style={{ background: "#fff" }}>
        <div className="text-center mb-5">
          <p style={{ color: "#14b8a6", fontWeight: "700", letterSpacing: "0.15em", fontSize: "0.8rem", textTransform: "uppercase" }}>What We Do</p>
          <h2 style={{ fontWeight: "800", color: "#0f172a", fontSize: "2.4rem", letterSpacing: "-0.03em" }}>Our Services</h2>
        </div>
        <div className="row g-4">
          {[
            { title: "Garbage Collection",  desc: "Regular doorstep collection for households and businesses.", img: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=800&q=80" },
            { title: "Recycling Programs",  desc: "Turning waste into reusable materials through smart sorting.",  img: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=800&q=80" },
            { title: "E-Waste Disposal",    desc: "Safe and certified disposal of electronic waste.",             img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80" },
          ].map((item, i) => (
            <div className="col-md-4" key={i}>
              <div style={{
                borderRadius: "20px", overflow: "hidden",
                boxShadow: "0 4px 24px rgba(15,23,42,0.1)",
                position: "relative", cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
                onMouseOver={e => e.currentTarget.style.transform = "translateY(-6px)"}
                onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                <img src={item.img} alt={item.title} style={{ width: "100%", height: "280px", objectFit: "cover", display: "block" }} />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(10,20,50,0.88) 0%, transparent 55%)",
                  display: "flex", flexDirection: "column",
                  justifyContent: "flex-end", padding: "24px",
                }}>
                  <h5 style={{ color: "#fff", fontWeight: "700", marginBottom: "6px" }}>{item.title}</h5>
                  <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.85rem", margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="container-fluid px-5 py-5 text-center" style={{ background: "#f8fafc" }}>
        <p style={{ color: "#14b8a6", fontWeight: "700", letterSpacing: "0.15em", fontSize: "0.8rem", textTransform: "uppercase" }}>Simple Process</p>
        <h2 style={{ fontWeight: "800", color: "#0f172a", fontSize: "2.4rem", letterSpacing: "-0.03em", marginBottom: "48px" }}>How It Works</h2>
        <div className="row g-4">
          {[
            { step: "01", icon: "📲", title: "Request Pickup",    desc: "Schedule a pickup from your phone in under a minute." },
            { step: "02", icon: "🚛", title: "We Collect",        desc: "Our team arrives on time and handles everything." },
            { step: "03", icon: "♻",  title: "Recycle & Process", desc: "Waste is sorted and processed responsibly." },
            { step: "04", icon: "🌱", title: "Clean Environment", desc: "Your community stays clean and green." },
          ].map((item, i) => (
            <div className="col-md-3" key={i}>
              <div style={{
                background: "#fff", borderRadius: "20px", padding: "32px 20px",
                boxShadow: "0 4px 20px rgba(15,23,42,0.06)",
                border: "1px solid rgba(15,23,42,0.06)",
                position: "relative", transition: "all 0.3s ease",
              }}
                onMouseOver={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.borderColor = "#14b8a6"; }}
                onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "rgba(15,23,42,0.06)"; }}
              >
                <div style={{
                  position: "absolute", top: "16px", right: "20px",
                  fontSize: "0.75rem", fontWeight: "800",
                  color: "#e2e8f0", letterSpacing: "0.05em",
                }}>{item.step}</div>
                <div style={{ fontSize: "2.4rem", marginBottom: "16px" }}>{item.icon}</div>
                <h6 style={{ fontWeight: "700", color: "#0f172a", marginBottom: "8px" }}>{item.title}</h6>
                <p style={{ color: "#64748b", fontSize: "0.88rem", lineHeight: "1.6", margin: 0 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)",
        padding: "80px 0", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "-100px", right: "-100px",
          width: "400px", height: "400px", borderRadius: "50%",
          background: "rgba(20,184,166,0.08)", pointerEvents: "none",
        }} />
        <div className="container">
          <div className="text-center mb-5">
            <p style={{ color: "#14b8a6", fontWeight: "700", letterSpacing: "0.15em", fontSize: "0.8rem", textTransform: "uppercase" }}>Our Impact</p>
            <h2 style={{ fontWeight: "800", color: "#fff", fontSize: "2.4rem", letterSpacing: "-0.03em" }}>Creating a Cleaner Future</h2>
          </div>
          <div className="row g-4 text-center">
            {[
              { num: "500+",  label: "Successful Pickups", icon: "🚛" },
              { num: "1200+", label: "Happy Customers",    icon: "👨‍👩‍👧" },
              { num: "300+",  label: "Tons Recycled",      icon: "♻️" },
              { num: "20+",   label: "Areas Covered",      icon: "🌍" },
            ].map((item, i) => (
              <div className="col-md-3" key={i}>
                <div style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "20px", padding: "36px 20px",
                  backdropFilter: "blur(10px)",
                }}>
                  <div style={{ fontSize: "2rem", marginBottom: "12px" }}>{item.icon}</div>
                  <h2 style={{ color: "#14b8a6", fontWeight: "800", fontSize: "2.6rem", letterSpacing: "-0.03em", marginBottom: "6px" }}>{item.num}</h2>
                  <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", margin: 0 }}>{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ background: "#f0fdfa", padding: "80px 0", textAlign: "center" }}>
        <div className="container">
          <p style={{ color: "#14b8a6", fontWeight: "700", letterSpacing: "0.15em", fontSize: "0.8rem", textTransform: "uppercase" }}>Take Action</p>
          <h2 style={{ fontWeight: "800", color: "#0f172a", fontSize: "2.4rem", letterSpacing: "-0.03em", marginBottom: "16px" }}>
            Join Us for a Cleaner Tomorrow 🌍
          </h2>
          <p style={{ color: "#64748b", fontSize: "1rem", maxWidth: "480px", margin: "0 auto 32px" }}>
            Schedule your first pickup today and be part of the movement toward a sustainable future.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/pickup" style={{
              background: "linear-gradient(135deg, #0f172a, #1e3a5f)",
              color: "#fff", fontWeight: "700", fontSize: "0.95rem",
              padding: "14px 32px", borderRadius: "50px", textDecoration: "none",
              boxShadow: "0 6px 24px rgba(15,23,42,0.25)", transition: "transform 0.2s",
            }}
              onMouseOver={e => e.currentTarget.style.transform = "translateY(-2px)"}
              onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              🚛 Request Pickup
            </Link>
            <Link to="/contact" style={{
              background: "transparent", color: "#0f172a",
              fontWeight: "600", fontSize: "0.95rem",
              padding: "13px 28px", borderRadius: "50px", textDecoration: "none",
              border: "2px solid #cbd5e1", transition: "border-color 0.2s, color 0.2s",
            }}
              onMouseOver={e => { e.currentTarget.style.borderColor = "#14b8a6"; e.currentTarget.style.color = "#0d9488"; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = "#cbd5e1"; e.currentTarget.style.color = "#0f172a"; }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
