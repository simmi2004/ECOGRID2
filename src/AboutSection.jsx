import React from 'react'

const AboutSection = () => {
  return (
    <section className="container mt-5">
      <div className="row align-items-center">

        {/* IMAGE SIDE */}
        <div className="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
            alt="Waste Management"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* TEXT SIDE */}
        <div className="col-md-6">
         <h5 className="text-primary fw-bold" style={{ fontSize: "85px", fontWeight: "bold" , fontcolor: "#101492"}}>
            ABOUT US
          </h5>
          <h2 className="mb-4">Building a Cleaner & Greener Future 🌱</h2>

          <p>
            We are committed to providing smart and sustainable waste management
            solutions. Our goal is to reduce pollution, promote recycling, and
            create a cleaner environment for future generations.
          </p>

          <p>
            From household waste collection to industrial waste disposal, we
            ensure safe and eco-friendly processes. We believe that proper waste
            management is the key to a healthy and sustainable world.
          </p>

          {/* FEATURES */}
          <ul className="list-unstyled mt-3">
            <li>✔ Door-to-door waste collection</li>
            <li>✔ Recycling & reuse programs</li>
            <li>✔ Safe hazardous waste disposal</li>
          </ul>

          {/* <button className="btn btn-primary mt-3">
            Learn More
          </button> */}

          <button
  className="btn btn-primary mt-3"
  onClick={() => window.open("https://www.epa.gov/recycle", "_blank")}
>
  Learn More
</button>
        </div>

      </div>
    </section>
  )
}

export default AboutSection