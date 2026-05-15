import React from 'react';

const AboutSection = () => {
  return (
    <div className="page-enter">
      {/* HERO SECTION */}
      <section className="hero-section text-center text-white" style={{ 
        background: 'linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url("https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop") center/cover',
        padding: '6rem 2rem'
      }}>
        <div className="container hero-content">
          <h1 className="display-3 fw-bold text-white mb-3" style={{ letterSpacing: '-0.05em' }}>ABOUT US</h1>
          <p className="lead fs-4 mx-auto text-light" style={{ maxWidth: '800px' }}>
            Building a Cleaner & Greener Future 🌱
          </p>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="container py-5 mt-4">
        <div className="row align-items-center mb-5 pb-4 border-bottom">
          <div className="col-lg-6 mb-4 mb-lg-0 pe-lg-5">
            <h2 className="text-primary fw-bold mb-4" style={{ fontSize: '2.5rem' }}>Our Mission</h2>
            <p className="text-muted fs-5 mb-4" style={{ lineHeight: '1.8' }}>
              We are committed to providing smart and sustainable waste management
              solutions. Our goal is to reduce pollution, promote recycling, and
              create a cleaner environment for future generations.
            </p>
            <p className="text-muted fs-5 mb-4" style={{ lineHeight: '1.8' }}>
              From household waste collection to industrial waste disposal, we
              ensure safe and eco-friendly processes. We believe that proper waste
              management is the key to a healthy and sustainable world.
            </p>
            <button
              className="btn btn-primary btn-lg mt-2"
              onClick={() => window.open("https://www.epa.gov/recycle", "_blank")}
            >
              Learn More About Recycling <span className="ms-2">→</span>
            </button>
          </div>
          <div className="col-lg-6">
            <div className="img-hover-zoom shadow-lg rounded-4 overflow-hidden position-relative">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop"
                alt="Clean Nature and Renewable Energy"
                className="img-fluid w-100"
                style={{ objectFit: 'cover', height: '450px' }}
              />
            </div>
          </div>
        </div>

        {/* CORE VALUES GRID */}
        <div className="text-center mb-5 pt-4">
          <h2 className="fw-bold text-secondary mb-3">Our Core Services</h2>
          <p className="text-muted mx-auto mb-5" style={{ maxWidth: '600px' }}>
            We leverage modern techniques and community engagement to ensure the most effective waste management protocols.
          </p>

          <div className="row g-4">
            
            {/* Value 1 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="img-hover-zoom rounded-circle mx-auto mb-4" style={{ width: '120px', height: '120px' }}>
                  <img src="https://images.unsplash.com/photo-1604187351574-c75ca79f5807?q=80&w=2070&auto=format&fit=crop" alt="Door to Door" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                </div>
                <h4 className="fw-bold mb-3">Door-to-door Collection</h4>
                <p className="text-muted">
                  Reliable and timely waste collection directly from your doorstep, ensuring maximum convenience for households.
                </p>
              </div>
            </div>

            {/* Value 2 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="img-hover-zoom rounded-circle mx-auto mb-4" style={{ width: '120px', height: '120px' }}>
                  <img src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1974&auto=format&fit=crop" alt="Recycling" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                </div>
                <h4 className="fw-bold mb-3">Recycling & Reuse</h4>
                <p className="text-muted">
                  State-of-the-art sorting and recycling programs that give waste a second life and reduce landfill dependency.
                </p>
              </div>
            </div>

            {/* Value 3 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="img-hover-zoom rounded-circle mx-auto mb-4" style={{ width: '120px', height: '120px' }}>
                  <img src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=2070&auto=format&fit=crop" alt="Hazardous Waste" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                </div>
                <h4 className="fw-bold mb-3">Safe Disposal</h4>
                <p className="text-muted">
                  Environmentally compliant processing and safe disposal methods for hazardous and industrial waste.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutSection;