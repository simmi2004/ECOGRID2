// import React from "react";

// const Recycling = () => {
//   const recycleData = [
//     {
//       id: 1,
//       title: "Plastic Recycling",
//       description:
//         "We collect and recycle plastic waste to reduce pollution and reuse materials efficiently.",
//       image:
//         "https://images.unsplash.com/photo-1604187351574-c75ca79f5807",
//     },
//     {
//       id: 2,
//       title: "Paper Recycling",
//       description:
//         "Paper waste is processed and reused to save trees and reduce environmental impact.",
//       image:
//         "https://images.unsplash.com/photo-1504718855392-c0f33b372e72",
//     },
//     {
//       id: 3,
//       title: "E-Waste Recycling",
//       description:
//         "Safe disposal and recycling of electronic waste to prevent toxic hazards.",
//       image:
//         "https://images.unsplash.com/photo-1518770660439-4636190af475",
//     },
//     {
//       id: 4,
//       title: "Glass Recycling",
//       description:
//         "We recycle glass waste into reusable materials for construction and packaging.",
//       image:
//         "https://th.bing.com/th/id/OIP.Rh8JHt9guOaZQUUyifwAsgHaEK?w=286&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
//     },
//   ];

//   return (
//     <section
//       className="py-5"
//       style={{
//         background: "linear-gradient(to right, #e8f5e9, #f1f8f4)",
//         width: "100%",
//       }}
//     >
//       <div className="container-fluid px-5">

//         {/* 🔥 Heading */}
//         <div className="text-center mb-5">
//           <h5 className="text-primary fw-bold" style={{ fontSize: "85px", fontWeight: "bold" , fontcolor: "#101492"}}>
//             ♻ RECYCLING  PROCESS
//           </h5>
//           <h2 className="fw-bold">Recycle Today for a Better Tomorrow</h2>
//           <p className="text-muted">
//             Our recycling services help reduce waste and protect the environment.
//           </p>
//         </div>

//         {/* 🚀 Cards */}
//         <div className="row">
//           {recycleData.map((item) => (
//             <div className="col-lg-3 col-md-6 mb-4" key={item.id}>
              
//               <div
//                 className="recycle-card"
//                 style={{
//                   borderRadius: "15px",
//                   overflow: "hidden",
//                   position: "relative",
//                   cursor: "pointer",
//                   boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
//                   transition: "all 0.4s ease",
//                 }}
//               >

//                 {/* Image */}
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   style={{
//                     width: "100%",
//                     height: "250px",
//                     objectFit: "cover",
//                     transition: "0.4s",
//                   }}
//                 />

//                 {/* Overlay Effect */}
//                 <div
//                   style={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     width: "100%",
//                     height: "100%",
//                     background:
//                       "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
//                     opacity: 0,
//                     transition: "0.4s",
//                   }}
//                   className="overlay"
//                 ></div>

//                 {/* Content */}
//                 <div
//                   style={{
//                     position: "absolute",
//                     bottom: "20px",
//                     left: "20px",
//                     color: "#fff",
//                     transform: "translateY(20px)",
//                     opacity: 0,
//                     transition: "0.4s",
//                   }}
//                   className="content"
//                 >
//                   <h5 className="fw-bold">{item.title}</h5>
//                   <p style={{ fontSize: "14px" }}>{item.description}</p>
//                   <button className="btn btn-success btn-sm rounded-pill">
//                     Recycle Now
//                   </button>
//                 </div>

//               </div>
//             </div>
//           ))}
//         </div>

//       </div>

//       {/* 🔥 Custom Hover Effects */}
//       <style>
//         {`
//         .recycle-card:hover img {
//           transform: scale(1.1);
//         }

//         .recycle-card:hover .overlay {
//           opacity: 1;
//         }

//         .recycle-card:hover .content {
//           opacity: 1;
//           transform: translateY(0);
//         }
//         `}
//       </style>

//     </section>
//   );
// };

// export default Recycling;
// import React from "react";

// const Recycling = () => {
//   // ================= RECYCLING DATA =================
//   const recycleData = [
//     {
//       id: 1,
//       title: "Plastic Recycling",
//       description:
//         "We collect and recycle plastic waste to reduce pollution and reuse materials efficiently.",
//       image:
//         "https://images.unsplash.com/photo-1604187351574-c75ca79f5807",
//     },
//     {
//       id: 2,
//       title: "Paper Recycling",
//       description:
//         "Paper waste is processed and reused to save trees and reduce environmental impact.",
//       image:
//         "https://images.unsplash.com/photo-1504718855392-c0f33b372e72",
//     },
//     {
//       id: 3,
//       title: "E-Waste Recycling",
//       description:
//         "Safe disposal and recycling of electronic waste to prevent toxic hazards.",
//       image:
//         "https://images.unsplash.com/photo-1518770660439-4636190af475",
//     },
//     {
//       id: 4,
//       title: "Glass Recycling",
//       description:
//         "We recycle glass waste into reusable materials for construction and packaging.",
//       image:
//         "https://th.bing.com/th/id/OIP.Rh8JHt9guOaZQUUyifwAsgHaEK?w=286&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
//     },
//   ];

//   // ================= STEP BY STEP IDEAS =================
//   const recyclingSteps = [
//     {
//       id: 1,
//       step: "Step 1",
//       title: "Collect Plastic Bottles",
//       description:
//         "Gather used plastic bottles from your home instead of throwing them away.",
//       image:
//         "https://images.unsplash.com/photo-1528323273322-d81458248d40",
//     },
//     {
//       id: 2,
//       step: "Step 2",
//       title: "Clean The Waste",
//       description:
//         "Wash bottles, cans, and containers properly before recycling them.",
//       image:
//         "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b",
//     },
//     {
//       id: 3,
//       step: "Step 3",
//       title: "Reuse Creatively",
//       description:
//         "Convert waste materials into useful home decor or storage products.",
//       image:
//         "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
//     },
//     {
//       id: 4,
//       step: "Step 4",
//       title: "Save Environment",
//       description:
//         "Recycling reduces pollution and helps create a cleaner and greener Earth.",
//       image:
//         "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1",
//     },
//   ];

//   return (
//     <section
//       className="py-5"
//       style={{
//         background: "linear-gradient(to right, #e8f5e9, #f1f8f4)",
//         width: "100%",
//       }}
//     >
//       <div className="container-fluid px-5">

//         {/* ================= HEADING ================= */}
//         <div className="text-center mb-5">
//           <h5
//             className="text-primary fw-bold"
//             style={{
//               fontSize: "clamp(40px, 8vw, 85px)",
//               fontWeight: "bold",
//             }}
//           >
//             ♻ RECYCLING PROCESS
//           </h5>

//           <h2 className="fw-bold">
//             Recycle Today for a Better Tomorrow
//           </h2>

//           <p className="text-muted">
//             Our recycling services help reduce waste and protect the environment.
//           </p>
//         </div>

//         {/* ================= RECYCLING CARDS ================= */}
//         <div className="row">
//           {recycleData.map((item) => (
//             <div className="col-lg-3 col-md-6 mb-4" key={item.id}>

//               <div
//                 className="recycle-card"
//                 style={{
//                   borderRadius: "15px",
//                   overflow: "hidden",
//                   position: "relative",
//                   cursor: "pointer",
//                   boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
//                   transition: "all 0.4s ease",
//                 }}
//               >

//                 {/* Image */}
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   style={{
//                     width: "100%",
//                     height: "250px",
//                     objectFit: "cover",
//                     transition: "0.4s",
//                   }}
//                 />

//                 {/* Overlay */}
//                 <div
//                   className="overlay"
//                   style={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     width: "100%",
//                     height: "100%",
//                     background:
//                       "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
//                     opacity: 0,
//                     transition: "0.4s",
//                   }}
//                 ></div>

//                 {/* Content */}
//                 <div
//                   className="content"
//                   style={{
//                     position: "absolute",
//                     bottom: "20px",
//                     left: "20px",
//                     color: "#fff",
//                     transform: "translateY(20px)",
//                     opacity: 0,
//                     transition: "0.4s",
//                   }}
//                 >
//                   <h5 className="fw-bold">
//                     {item.title}
//                   </h5>

//                   <p style={{ fontSize: "14px" }}>
//                     {item.description}
//                   </p>

//                   <button className="btn btn-success btn-sm rounded-pill">
//                     Recycle Now
//                   </button>
//                 </div>

//               </div>

//             </div>
//           ))}
//         </div>

//         {/* ================= STEP BY STEP RECYCLING IDEAS ================= */}
//         <div className="mt-5">

//           {/* Section Heading */}
//           <div className="text-center mb-5">
//             <h2
//               className="fw-bold"
//               style={{
//                 color: "#071057",
//                 fontSize: "clamp(35px, 6vw, 60px)",
//               }}
//             >
//               Step By Step Recycling Ideas
//             </h2>

//             <p className="text-muted">
//               Learn easy and creative ways to recycle waste materials at home.
//             </p>
//           </div>

//           {/* Step Cards */}
//           <div className="row">

//             {recyclingSteps.map((step) => (
//               <div
//                 className="col-lg-3 col-md-6 mb-4"
//                 key={step.id}
//               >

//                 <div
//                   style={{
//                     background: "#fff",
//                     borderRadius: "15px",
//                     overflow: "hidden",
//                     boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
//                     height: "100%",
//                     transition: "0.3s",
//                   }}
//                   className="idea-card"
//                 >

//                   {/* Step Image */}
//                   <img
//                     src={step.image}
//                     alt={step.title}
//                     style={{
//                       width: "100%",
//                       height: "220px",
//                       objectFit: "cover",
//                     }}
//                   />

//                   {/* Step Content */}
//                   <div className="p-4">

//                     <h4 className="fw-bold text-success">
//                       {step.step}
//                     </h4>

//                     <h5 className="fw-bold">
//                       {step.title}
//                     </h5>

//                     <p className="text-muted">
//                       {step.description}
//                     </p>

//                     <button className="btn btn-outline-success rounded-pill btn-sm">
//                       Learn More
//                     </button>

//                   </div>

//                 </div>

//               </div>
//             ))}

//           </div>

//         </div>

//       </div>

//       {/* ================= CUSTOM HOVER EFFECTS ================= */}
//       <style>
//         {`
//         .recycle-card:hover img {
//           transform: scale(1.1);
//         }

//         .recycle-card:hover .overlay {
//           opacity: 1;
//         }

//         .recycle-card:hover .content {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .idea-card:hover {
//           transform: translateY(-10px);
//         }
//         `}
//       </style>

//     </section>
//   );
// };

// export default Recycling;
import React, { useState } from "react";

const Recycling = () => {
  const [activeStepId, setActiveStepId] = useState(null);

  const stepByStepIdeas = [
    {
      id: 1,
      title: "Plastic Bottles",
      icon: "🧴",
      steps: [
        "Empty and rinse the bottle.",
        "Crush the bottle to save space.",
        "Keep the cap on or recycle separately based on local rules.",
        "Place in the designated plastics recycling bin."
      ]
    },
    {
      id: 2,
      title: "Paper & Cardboard",
      icon: "📦",
      steps: [
        "Remove any tape, staples, or plastic labels.",
        "Flatten all cardboard boxes completely.",
        "Ensure paper is dry and free from food grease.",
        "Place in the paper recycling container."
      ]
    },
    {
      id: 3,
      title: "Glass Jars & Bottles",
      icon: "🫙",
      steps: [
        "Empty contents and rinse the glass lightly.",
        "Remove metal or plastic lids.",
        "Sort by color if required by your recycling facility.",
        "Carefully place in the glass bin to avoid breaking."
      ]
    },
    {
      id: 4,
      title: "E-Waste",
      icon: "💻",
      steps: [
        "Backup and erase all personal data from devices.",
        "Remove any batteries if possible (recycle separately).",
        "Find a certified e-waste recycling drop-off point.",
        "Drop off the device for safe material recovery."
      ]
    }
  ];

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: "Poppins", sans-serif;
          background: #f4fff7;
        }

        .recycling-page {
          width: 100%;
          overflow-x: hidden;
        }

        /* HERO SECTION */

        .hero-section {
          height: 100vh;
          background: url("https://images.unsplash.com/photo-1532996122724-e3c354a0b15b")
            center/cover no-repeat;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(108, 111, 132, 0.55);
        }

        .hero-content {
          position: relative;
          text-align: center;
          color: white;
          max-width: 750px;
          padding: 20px;
          z-index: 2;
          animation: fadeIn 2s ease;
        }

        .hero-content h1 {
          font-size: 72px;
          margin-bottom: 20px;
          font-weight: bold;
          line-height: 1.2;
        }

        .hero-content p {
          font-size: 24px;
          line-height: 1.8;
          margin-bottom: 35px;
        }

        .hero-btn {
          padding: 15px 38px;
          border: none;
          background: #1700c8;
          color: white;
          font-size: 18px;
          border-radius: 40px;
          cursor: pointer;
          transition: 0.4s;
          font-weight: bold;
          box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        }

        .hero-btn:hover {
          background: #a5cd14;
          transform: scale(1.08);
        }

        /* ABOUT */

        .about-section {
          padding: 90px 10%;
          text-align: center;
        }

        .about-section h2 {
          font-size: 45px;
          color: #00796b;
          margin-bottom: 25px;
        }

        .about-section p {
          font-size: 20px;
          line-height: 1.9;
          max-width: 950px;
          margin: auto;
          color: #444;
        }

        /* BENEFITS */

        .benefits-section {
          padding: 90px 8%;
          background: #ffffff;
        }

        .benefits-section h2 {
          text-align: center;
          font-size: 48px;
          margin-bottom: 55px;
          color: #00695c;
        }

        /* STEP-BY-STEP SECTION */
        .step-by-step-section {
          padding: 90px 8%;
          background: #e8f5e9;
          text-align: center;
        }

        .step-by-step-section h2 {
          font-size: 48px;
          margin-bottom: 15px;
          color: #1b5e20;
        }

        .section-subtitle {
          font-size: 20px;
          color: #555;
          margin-bottom: 55px;
        }

        .step-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .step-tile {
          perspective: 1000px;
          height: 320px;
          cursor: pointer;
        }

        .step-tile .tile-front,
        .step-tile .tile-back {
          width: 100%;
          height: 100%;
          position: absolute;
          backface-visibility: hidden;
          transition: transform 0.8s cubic-bezier(0.4, 0.2, 0.2, 1);
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .step-tile .tile-front {
          background: white;
          transform: rotateY(0deg);
        }

        .step-tile .tile-back {
          background: #1b5e20;
          color: white;
          transform: rotateY(180deg);
          align-items: flex-start;
          justify-content: flex-start;
          overflow-y: auto;
          text-align: left;
        }

        .step-tile.active .tile-front {
          transform: rotateY(-180deg);
        }

        .step-tile.active .tile-back {
          transform: rotateY(0deg);
        }

        .tile-front .icon {
          font-size: 70px;
          margin-bottom: 20px;
        }

        .tile-front h3 {
          font-size: 26px;
          color: #333;
          margin-bottom: 15px;
        }

        .tile-front .click-hint {
          background: #f0f0f0;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          color: #666;
          font-weight: 600;
          transition: 0.3s;
        }
        
        .step-tile:hover .click-hint {
          background: #a5cd14;
          color: #1b5e20;
        }

        .tile-back h3 {
          font-size: 22px;
          margin-bottom: 20px;
          border-bottom: 2px solid rgba(255,255,255,0.3);
          padding-bottom: 10px;
          width: 100%;
        }

        .tile-back ul {
          list-style: none;
          padding: 0;
          margin: 0;
          width: 100%;
        }

        .tile-back li {
          display: flex;
          align-items: flex-start;
          margin-bottom: 15px;
          font-size: 15px;
          line-height: 1.5;
          opacity: 0;
          transform: translateX(-20px);
          transition: all 0.4s ease;
        }

        .step-tile.active .tile-back li {
          opacity: 1;
          transform: translateX(0);
          transition-delay: var(--delay);
        }

        .step-num {
          background: #a5cd14;
          color: #1b5e20;
          min-width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: bold;
          margin-right: 12px;
          flex-shrink: 0;
        }

        .tile-back::-webkit-scrollbar {
          width: 6px;
        }
        .tile-back::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.3);
          border-radius: 10px;
        }

        .benefits-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 30px;
        }

        .benefit-box {
          background: #f9f9f9;
          padding: 35px;
          border-radius: 20px;
          text-align: center;
          transition: 0.4s;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        }

        .benefit-box:hover {
          transform: scale(1.05);
          background: #00796b;
          color: white;
        }

        .benefit-box h3 {
          margin-bottom: 15px;
          font-size: 25px;
        }

        .benefit-box p {
          font-size: 17px;
          line-height: 1.7;
        }

        /* QUOTE */

        .quote-section {
          padding: 110px 10%;
          background: linear-gradient(to right, #00796b, #00c853);
          text-align: center;
          color: white;
        }

        .quote-section h2 {
          font-size: 44px;
          line-height: 1.7;
          font-weight: bold;
        }

        /* ANIMATION */

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(40px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* RESPONSIVE */

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 46px;
          }

          .hero-content p {
            font-size: 18px;
          }

          .benefits-section h2,
          .about-section h2,
          .step-by-step-section h2 {
            font-size: 34px;
          }

          .quote-section h2 {
            font-size: 28px;
          }
        }
      `}</style>

      <div className="recycling-page">
        
        {/* HERO SECTION */}
        <section className="hero-section">
          <div className="overlay"></div>

          <div className="hero-content">
            <h1>♻️ Recycle Today, Save Tomorrow</h1>

            <p>
              Small recycling habits can create a cleaner planet and a brighter
              future for everyone.
            </p>

            <button className="hero-btn">Start Recycling</button>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="about-section">
          <h2>Why Recycling Matters?</h2>

          <p>
            Recycling helps reduce pollution, conserve natural resources, save
            energy, and protect wildlife. Reusing waste materials creatively
            also reduces landfill waste and promotes sustainability.
          </p>
        </section>

        {/* STEP-BY-STEP RECYCLING SECTION */}
        <section className="step-by-step-section">
          <h2>🔄 Step-by-Step Recycling Guides</h2>
          <p className="section-subtitle">Click a tile to view the recycling process</p>
          
          <div className="step-grid">
            {stepByStepIdeas.map((item) => (
              <div 
                key={item.id} 
                className={`step-tile ${activeStepId === item.id ? 'active' : ''}`}
                onClick={() => setActiveStepId(activeStepId === item.id ? null : item.id)}
              >
                <div className="tile-front">
                  <div className="icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <span className="click-hint">Click to see steps</span>
                </div>
                
                <div className="tile-back">
                  <h3>{item.title} Steps:</h3>
                  <ul>
                    {item.steps.map((step, idx) => (
                      <li key={idx} style={{ '--delay': `${idx * 0.15}s` }}>
                        <span className="step-num">{idx + 1}</span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="benefits-section">
          <h2>♻️ Benefits of Recycling</h2>

          <div className="benefits-container">
            <div className="benefit-box">
              <h3>🌍 Cleaner Environment</h3>
              <p>Reduces waste pollution in landfills and oceans.</p>
            </div>

            <div className="benefit-box">
              <h3>💡 Saves Energy</h3>
              <p>Manufacturing from recycled materials uses less energy.</p>
            </div>

            <div className="benefit-box">
              <h3>🌳 Protects Nature</h3>
              <p>Conserves forests, water, and natural resources.</p>
            </div>

            <div className="benefit-box">
              <h3>🏭 Reduces Pollution</h3>
              <p>Helps lower harmful greenhouse gas emissions.</p>
            </div>
          </div>
        </section>

        {/* QUOTE SECTION */}
        <section className="quote-section">
          <h2>
            “The Earth is what we all have in common. Let’s protect it
            together.”
          </h2>
        </section>
      </div>
    </>
  );
};

export default Recycling;