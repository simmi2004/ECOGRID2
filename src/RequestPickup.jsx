// import React from "react";

// const RequestPickup = () => {
//   return (
//     <section
//       className="py-5"
//       style={{
//         background: "linear-gradient(135deg, #e9f7ef, #ffffff)",
//       }}
//     >
//       <div className="container">

//         {/* Heading */}
//         <div className="text-center mb-5">
//           <h5 style={{ color: "#198754", fontWeight: "600" }}>
//             Request Pickup
//           </h5>
//           <h2 className="fw-bold">
//             Schedule Your Waste Pickup Easily
//           </h2>
//           <p className="text-muted">
//             Fill the form below and our team will collect your waste at your convenience.
//           </p>
//         </div>

//         <div className="row align-items-center">

//           {/* LEFT IMAGE */}
//           <div className="col-md-6 mb-4">
//             <div
//               style={{
//                 borderRadius: "15px",
//                 overflow: "hidden",
//                 boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
//               }}
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1621451537084-482c73073a0f"
//                 alt="pickup"
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                   transition: "0.4s",
//                 }}
//               />
//             </div>
//           </div>

//           {/* RIGHT FORM */}
//           <div className="col-md-6">
//             <div
//               style={{
//                 background: "#fff",
//                 padding: "30px",
//                 borderRadius: "15px",
//                 boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
//               }}
//             >
//               <form>

//                 {/* Name */}
//                 <div className="mb-3">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Full Name"
//                     required
//                   />
//                 </div>

//                 {/* Phone */}
//                 <div className="mb-3">
//                   <input
//                     type="tel"
//                     className="form-control"
//                     placeholder="Phone Number"
//                     required
//                   />
//                 </div>

//                 {/* Address */}
//                 <div className="mb-3">
//                   <textarea
//                     className="form-control"
//                     rows="2"
//                     placeholder="Pickup Address"
//                     required
//                   ></textarea>
//                 </div>

//                 {/* Waste Type */}
//                 <div className="mb-3">
//                   <select className="form-control">
//                     <option>Select Waste Type</option>
//                     <option>Plastic</option>
//                     <option>Paper</option>
//                     <option>Organic</option>
//                     <option>E-Waste</option>
//                   </select>
//                 </div>

//                 {/* Date */}
//                 <div className="mb-3">
//                   <input
//                     type="date"
//                     className="form-control"
//                     required
//                   />
//                 </div>

//                 {/* Button */}
//                 <button
//                   type="submit"
//                   className="btn btn-success w-100"
//                   style={{
//                     borderRadius: "25px",
//                     fontWeight: "600",
//                     padding: "10px",
//                   }}
//                 >
//                   🚛 Book Pickup
//                 </button>

//               </form>
//             </div>
//           </div>
//         </div>

//         {/* EXTRA FEATURES */}
//         <div className="row mt-5 text-center">

//           {[
//             {
//               icon: "♻️",
//               title: "Eco Friendly",
//               desc: "We follow sustainable waste management practices.",
//             },
//             {
//               icon: "⏱️",
//               title: "Quick Service",
//               desc: "Fast and reliable pickup at your doorstep.",
//             },
//             {
//               icon: "💰",
//               title: "Affordable",
//               desc: "Cost-effective solutions for all users.",
//             },
//           ].map((item, index) => (
//             <div className="col-md-4 mb-3" key={index}>
              
//               <div
//                 style={{
//                   background: "#fff",
//                   padding: "20px",
//                   borderRadius: "12px",
//                   boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
//                   transition: "0.3s",
//                 }}
//                 onMouseEnter={(e) =>
//                   (e.currentTarget.style.transform = "translateY(-10px)")
//                 }
//                 onMouseLeave={(e) =>
//                   (e.currentTarget.style.transform = "translateY(0)")
//                 }
//               >
//                 <h3>{item.icon}</h3>
//                 <h5 className="fw-bold">{item.title}</h5>
//                 <p className="text-muted">{item.desc}</p>
//               </div>

//             </div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// };

// export default RequestPickup;
import React, { useState } from "react";
import axios from "axios";

const RequestPickup = () => {
  // ================= STATES =================
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    wasteType: "",
    pickupDate: "",
  });

  const [message, setMessage] = useState("");

  // ================= HANDLE INPUT =================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ================= HANDLE SUBMIT =================
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     // BACKEND API CALL
  //     const response = await axios.post(
  //       "http://localhost:3000/api/pickup",
  //       formData
  //     );

  //     console.log(response)
  //     // SEND EMAIL TO ADMIN
  //     await emailjs.send(
  //       "service_dges4zb",
  //       "template_fyn9pdj",
  //       {
  //         user_name: formData.name,
  //         phone: formData.phone,
  //         address: formData.address,
  //         wasteType: formData.wasteType,
  //         pickupDate: formData.pickupDate,
  //         message: `New pickup request from ${formData.name}. Phone: ${formData.phone}. Address: ${formData.address}. Waste Type: ${formData.wasteType}. Date: ${formData.pickupDate}`,
  //         to_email: "snipersjptg09@gmail.com"
  //       },
  //       "Fm9TRrLFwjOV7suw-"
  //     );

  //     setMessage(response.data.message);

  //     // CLEAR FORM
  //     setFormData({
  //       name: "",
  //       phone: "",
  //       address: "",
  //       wasteType: "",
  //       pickupDate: "",
  //     });

  //   } catch (error) {
  //     console.log(error);
  //     setMessage("Failed to book pickup");
  //   }
  // };
// ================= HANDLE SUBMIT =================
const handleSubmit = async (e) => {
  e.preventDefault();

  try {

    // SEND DATA TO BACKEND
    const response = await axios.post(
      "http://localhost:3000/api/pickup",
      formData
    );

    console.log(response);

    // SUCCESS MESSAGE
    setMessage(response.data.message);

    // CLEAR FORM
    setFormData({
      name: "",
      phone: "",
      address: "",
      wasteType: "",
      pickupDate: "",
    });

  } catch (error) {

    console.log(error);

    // ERROR MESSAGE
    setMessage(
      error.response?.data?.message ||
      "Failed to book pickup"
    );
  }
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

              {/* SUCCESS / ERROR MESSAGE */}
              {message && (
                <div className="alert alert-info">
                  {message}
                </div>
              )}

              <form onSubmit={handleSubmit}>

                {/* Name */}
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Phone */}
                <div className="mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Address */}
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="2"
                    placeholder="Pickup Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                {/* Waste Type */}
                <div className="mb-3">
                  <select
                    className="form-control"
                    name="wasteType"
                    value={formData.wasteType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Waste Type</option>
                    <option value="Plastic">Plastic</option>
                    <option value="Paper">Paper</option>
                    <option value="Organic">Organic</option>
                    <option value="E-Waste">E-Waste</option>
                  </select>
                </div>

                {/* Date */}
                <div className="mb-3">
                  <input
                    type="date"
                    className="form-control"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleChange}
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