// import React, { useState } from "react";

// const ContactSection = () => {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);

//     setTimeout(() => {
//       setSubmitted(false);
//     }, 3000);
//   };

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
//           <h5 style={{ color: "#071057", fontWeight: "bold", fontSize: "85px" }}>
//             CONTACT US
//           </h5>
//           <h2 className="fw-bold">Get In Touch For Waste Pickup</h2>
//           <p className="text-muted">
//             Have waste to recycle? Contact us today and help build a cleaner environment.
//           </p>
//         </div>

//         <div className="row align-items-center">

//           {/* IMAGE WITH OVERLAY */}
//           <div className="col-md-6 mb-4">
//             <div
//               style={{
//                 position: "relative",
//                 borderRadius: "15px",
//                 overflow: "hidden",
//                 boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
//               }}
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1604187351574-c75ca79f5807"
//                 alt="contact"
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                 }}
//               />

//               {/* Overlay */}
//               <div
//                 style={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "100%",
//                   background: "rgba(63, 108, 222, 0.19)",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   color: "#fff",
//                   textAlign: "center",
//                   padding: "20px",
//                 }}
//               >
//                 <div>
//                   <h3 className="fw-bold">Clean Earth Mission 🌍</h3>
//                   <p>Join us in making the world waste-free</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* FORM */}
//           {/* <div className="col-md-6">
//             <div
//               style={{
//                 background: "#fff",
//                 padding: "30px",
//                 borderRadius: "15px",
//                 boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
//               }}
//             >
//               <form onSubmit={handleSubmit}>

//                 <div className="mb-3">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Your Name"
//                     required
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <input
//                     type="email"
//                     className="form-control"
//                     placeholder="Your Email"
//                     required
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Subject"
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <textarea
//                     className="form-control"
//                     rows="4"
//                     placeholder="Your Message"
//                     required
//                   ></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   className="btn btn-primary w-100"
//                   style={{
//                     borderRadius: "25px",
//                     fontWeight: "600",
//                     transition: "0.3s",
//                   }}
//                   onMouseEnter={(e) =>
//                     (e.target.style.transform = "scale(1.05)")
//                   }
//                   onMouseLeave={(e) =>
//                     (e.target.style.transform = "scale(1)")
//                   }
//                 >
//                   Send Message
//                 </button>

//                 {/* Success Message */}
//                 {/* {submitted && (
//                   <p className="text-primary mt-3 text-center">
//                     ✅ Message sent successfully!
//                   </p>
//                 )}

//               </form>
//             </div>
//           </div>
//         </div> */} */}
//         <section className="container py-5">
//   <div className="row justify-content-center align-items-center">

//     {/* LEFT SIDE CONTENT */}
//     <div className="col-md-6 mb-4">
//       <h2 className="fw-bold text-primary mb-3">
//         Contact EcoWaste
//       </h2>

//       <p className="text-muted fs-5">
//         Have questions about waste pickup or recycling services?
//         Send us a message and our EcoWaste team will contact you shortly.
//       </p>

//       <img
//         src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a"
//         alt="EcoWaste"
//         className="img-fluid rounded shadow"
//       />
//     </div>

//     {/* RIGHT SIDE FORM */}
//     <div className="col-md-6">
//       <div
//         style={{
//           background: "#fff",
//           padding: "35px",
//           borderRadius: "20px",
//           boxShadow: "0 6px 25px rgba(0,0,0,0.1)",
//         }}
//       >
//         <form onSubmit={handleSubmit}>

//           {/* NAME */}
//           <div className="mb-3">
//             <input
//               type="text"
//               name="name"
//               className="form-control form-control-lg"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* EMAIL */}
//           <div className="mb-3">
//             <input
//               type="email"
//               name="email"
//               className="form-control form-control-lg"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* SUBJECT */}
//           <div className="mb-3">
//             <input
//               type="text"
//               name="subject"
//               className="form-control form-control-lg"
//               placeholder="Subject"
//               value={formData.subject}
//               onChange={handleChange}
//             />
//           </div>

//           {/* MESSAGE */}
//           <div className="mb-4">
//             <textarea
//               name="message"
//               className="form-control form-control-lg"
//               rows="5"
//               placeholder="Your Message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//             ></textarea>
//           </div>

//           {/* BUTTON */}
//           <button
//             type="submit"
//             className="btn btn-primary w-100 py-3"
//             style={{
//               borderRadius: "30px",
//               fontWeight: "600",
//               fontSize: "18px",
//               transition: "0.3s ease",
//             }}
//             onMouseEnter={(e) =>
//               (e.target.style.transform = "scale(1.03)")
//             }
//             onMouseLeave={(e) =>
//               (e.target.style.transform = "scale(1)")
//             }
//           >
//             Send Message
//           </button>

//           {/* SUCCESS MESSAGE */}
//           {submitted && (
//             <div className="alert alert-success mt-4 text-center">
//               ✅ Message sent successfully!
//             </div>
//           )}
//         </form>
//       </div>
//     </div>

//   </div>
// </section>

        

//         {/* CONTACT INFO */}
//         <div className="row mt-5 text-center">
//           {[
//             { icon: "📍", title: "Address", value: "Punjab, India" },
//             { icon: "📞", title: "Phone", value: "+91 628448087*" },
//             { icon: "📧", title: "Email", value: "snipersjptg09@gmail.com" },
//           ].map((item, index) => (
//             <div className="col-md-4 mb-3" key={index}>
//               <div
//                 style={{
//                   background: "#fff",
//                   padding: "20px",
//                   borderRadius: "12px",
//                   boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
//                   transition: "0.3s",
//                   cursor: "pointer",
//                 }}
//                 onMouseEnter={(e) =>
//                   (e.currentTarget.style.transform = "translateY(-10px)")
//                 }
//                 onMouseLeave={(e) =>
//                   (e.currentTarget.style.transform = "translateY(0)")
//                 }
//               >
//                 <h3>{item.icon}</h3>
//                 <h6 className="fw-bold">{item.title}</h6>
//                 <p className="text-muted">{item.value}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* MAP SECTION (IMPORTANT FOR PROJECT) */}
//         <div className="mt-5">
//           <iframe
//             title="map"
//             src="https://maps.google.com/maps?q=punjab&t=&z=13&ie=UTF8&iwloc=&output=embed"
//             style={{
//               width: "100%",
//               height: "300px",
//               border: "0",
//               borderRadius: "15px",
//             }}
//             allowFullScreen=""
//             loading="lazy"
//           ></iframe>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ContactSection;
// // import React, { useState } from "react";
// // import emailjs from "@emailjs/browser";

// // const ContactSection = () => {
// //   const [submitted, setSubmitted] = useState(false);

// //   // ================= SEND EMAIL FUNCTION =================
// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     emailjs
// //       .sendForm(
// //         "service_dges4zb", //  Service ID
// //         "template_fyn9pdj", //  Template ID
// //         e.target,
// //         "Fm9TRrLFwjOV7suw-" //  Public Key
// //       )
// //       .then(
// //         () => {
// //           setSubmitted(true);

// //           setTimeout(() => {
// //             setSubmitted(false);
// //           }, 3000);

// //           e.target.reset();
// //         },
// //         (error) => {
// //           console.log(error.text);
// //           alert("Failed to send message");
// //         }
// //       );
// //   };

// //   return (
// //     <section
// //       className="py-5"
// //       style={{
// //         background: "linear-gradient(135deg, #e9f7ef, #ffffff)",
// //       }}
// //     >
// //       <div className="container">

// //         {/* ================= HEADING ================= */}
// //         <div className="text-center mb-5">
// //           <h5
// //             style={{
// //               color: "#071057",
// //               fontWeight: "bold",
// //               fontSize: "clamp(40px, 8vw, 85px)",
// //             }}
// //           >
// //             CONTACT US
// //           </h5>

// //           <h2 className="fw-bold">
// //             Get In Touch For Waste Pickup
// //           </h2>

// //           <p className="text-muted">
// //             Have waste to recycle? Contact us today and help build a cleaner environment.
// //           </p>
// //         </div>

// //         <div className="row align-items-center">

// //           {/* ================= IMAGE SECTION ================= */}
// //           <div className="col-lg-6 mb-4">

// //             <div
// //               style={{
// //                 position: "relative",
// //                 borderRadius: "15px",
// //                 overflow: "hidden",
// //                 boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
// //                 minHeight: "450px",
// //               }}
// //             >

// //               <img
// //                 src="https://images.unsplash.com/photo-1604187351574-c75ca79f5807"
// //                 alt="contact"
// //                 style={{
// //                   width: "100%",
// //                   height: "100%",
// //                   objectFit: "cover",
// //                 }}
// //               />

// //               {/* Overlay */}
// //               <div
// //                 style={{
// //                   position: "absolute",
// //                   top: 0,
// //                   left: 0,
// //                   width: "100%",
// //                   height: "100%",
// //                   background: "rgba(63, 108, 222, 0.19)",
// //                   display: "flex",
// //                   justifyContent: "center",
// //                   alignItems: "center",
// //                   color: "#fff",
// //                   textAlign: "center",
// //                   padding: "20px",
// //                 }}
// //               >
// //                 <div>
// //                   <h3 className="fw-bold">
// //                     Clean Earth Mission 🌍
// //                   </h3>

// //                   <p>
// //                     Join us in making the world waste-free
// //                   </p>
// //                 </div>
// //               </div>

// //             </div>
// //           </div>

// //           {/* ================= CONTACT FORM ================= */}
// //           <div className="col-lg-6">

// //             <div
// //               style={{
// //                 background: "#fff",
// //                 padding: "30px",
// //                 borderRadius: "15px",
// //                 boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
// //               }}
// //             >

// //               <form onSubmit={handleSubmit}>

// //                 {/* Name */}
// //                 <div className="mb-3">
// //                   <input
// //                     type="text"
// //                     name="user_name"
// //                     className="form-control"
// //                     placeholder="Your Name"
// //                     required
// //                   />
// //                 </div>

// //                 {/* Email */}
// //                 <div className="mb-3">
// //                   <input
// //                     type="email"
// //                     name="user_email"
// //                     className="form-control"
// //                     placeholder="Your Email"
// //                     required
// //                   />
// //                 </div>

// //                 {/* Subject */}
// //                 <div className="mb-3">
// //                   <input
// //                     type="text"
// //                     name="subject"
// //                     className="form-control"
// //                     placeholder="Subject"
// //                   />
// //                 </div>

// //                 {/* Message */}
// //                 <div className="mb-3">
// //                   <textarea
// //                     name="message"
// //                     className="form-control"
// //                     rows="5"
// //                     placeholder="Your Message"
// //                     required
// //                   ></textarea>
// //                 </div>

// //                 {/* Submit Button */}
// //                 <button
// //                   type="submit"
// //                   className="btn btn-primary w-100"
// //                   style={{
// //                     borderRadius: "25px",
// //                     fontWeight: "600",
// //                     transition: "0.3s",
// //                   }}
// //                 >
// //                   Send Message
// //                 </button>

// //                 {/* Success Message */}
// //                 {submitted && (
// //                   <p className="text-success mt-3 text-center fw-bold">
// //                     ✅ Message sent successfully!
// //                   </p>
// //                 )}

// //               </form>

// //             </div>
// //           </div>

// //         </div>

// //         {/* ================= CONTACT INFO ================= */}
// //         <div className="row mt-5 text-center">

// //           {[
// //             {
// //               icon: "📍",
// //               title: "Address",
// //               value: "Punjab, India",
// //             },
// //             {
// //               icon: "📞",
// //               title: "Phone",
// //               value: "+91 62844804..",
// //             },
// //             {
// //               icon: "📧",
// //               title: "Email",
// //               value: "snipersjptg09@gmail.com",
// //             },
// //           ].map((item, index) => (
// //             <div className="col-md-4 mb-3" key={index}>

// //               <div
// //                 style={{
// //                   background: "#fff",
// //                   padding: "20px",
// //                   borderRadius: "12px",
// //                   boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
// //                   transition: "0.3s",
// //                   cursor: "pointer",
// //                   height: "100%",
// //                 }}
// //               >
// //                 <h3>{item.icon}</h3>

// //                 <h6 className="fw-bold">
// //                   {item.title}
// //                 </h6>

// //                 <p className="text-muted">
// //                   {item.value}
// //                 </p>
// //               </div>

// //             </div>
// //           ))}

// //         </div>

// //         {/* ================= GOOGLE MAP ================= */}
// //         <div className="mt-5">
// //           <iframe
// //             title="map"
// //             src="https://maps.google.com/maps?q=punjab&t=&z=13&ie=UTF8&iwloc=&output=embed"
// //             style={{
// //               width: "100%",
// //               height: "300px",
// //               border: "0",
// //               borderRadius: "15px",
// //             }}
// //             allowFullScreen=""
// //             loading="lazy"
// //           ></iframe>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // };

// // export default ContactSection;
import React, { useState } from "react";
import axios from "axios";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // ================= HANDLE INPUT =================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ================= HANDLE SUBMIT =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/api/contact", formData);

      setSubmitted(true);
      setErrorMsg("");
      
      // Clear Form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.log(error);
      setErrorMsg("Failed to send message. Please try again.");
    }
  };

  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #eef4ff, #ffffff)",
      }}
    >
      <div className="container">

        {/* ================= HEADING ================= */}
        <div className="text-center mb-5">

          <h5
            className="fw-bold text-primary"
            style={{
              letterSpacing: "2px",
              fontSize: "18px",
            }}
          >
            CONTACT US
          </h5>

          <h1
            className="fw-bold"
            style={{
              fontSize: "55px",
              color: "#071057",
            }}
          >
            Get In Touch
          </h1>

          <p
            className="text-muted mx-auto"
            style={{
              maxWidth: "700px",
              fontSize: "18px",
            }}
          >
            Have questions about waste pickup or recycling services?
            Our EcoWaste team is ready to help you create a cleaner
            and greener environment.
          </p>
        </div>

        {/* ================= MAIN SECTION ================= */}
        <div className="row align-items-center g-5">

          {/* ================= LEFT IMAGE ================= */}
          <div className="col-lg-6">

            <div
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "25px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1604187351574-c75ca79f5807"
                alt="EcoWaste"
                className="img-fluid"
                style={{
                  width: "100%",
                  height: "600px",
                  objectFit: "cover",
                }}
              />

              {/* OVERLAY */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(rgba(0,0,0,0.4), rgba(13,110,253,0.4))",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  color: "#fff",
                  padding: "30px",
                }}
              >
                <div>

                  <h2 className="fw-bold mb-3">
                    Clean Earth Mission 🌍
                  </h2>

                  <p
                    style={{
                      fontSize: "18px",
                      lineHeight: "1.8",
                    }}
                  >
                    Together we can build a sustainable future
                    through smart waste management and recycling.
                  </p>

                </div>
              </div>
            </div>
          </div>

          {/* ================= CONTACT FORM ================= */}
          <div className="col-lg-6">

            <div
              className="bg-white p-5"
              style={{
                borderRadius: "25px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >

              <h3 className="fw-bold text-primary mb-4">
                Send Message
              </h3>

              <form onSubmit={handleSubmit}>

                {/* NAME */}
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    className="form-control form-control-lg"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* EMAIL */}
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    className="form-control form-control-lg"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* SUBJECT */}
                <div className="mb-4">
                  <input
                    type="text"
                    name="subject"
                    className="form-control form-control-lg"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                {/* MESSAGE */}
                <div className="mb-4">
                  <textarea
                    name="message"
                    rows="5"
                    className="form-control form-control-lg"
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="btn btn-primary w-100 py-3 fw-bold"
                  style={{
                    borderRadius: "50px",
                    fontSize: "18px",
                  }}
                >
                  Send Message
                </button>

                {/* SUCCESS MESSAGE */}
                {submitted && (
                  <div className="alert alert-success mt-4 text-center">
                    ✅ Message Sent Successfully!
                  </div>
                )}

              </form>
            </div>
          </div>
        </div>

        {/* ================= CONTACT INFO ================= */}
        <div className="row mt-5 g-4 text-center">

          {[
            {
              icon: "📍",
              title: "Address",
              value: "Punjab, India",
            },
            {
              icon: "📞",
              title: "Phone",
              value: "+91 6284480870",
            },
            {
              icon: "📧",
              title: "Email",
              value: "snipersjptg09@gmail.com",
            },
          ].map((item, index) => (
            <div className="col-md-4" key={index}>

              <div
                className="h-100 p-4 bg-white"
                style={{
                  borderRadius: "20px",
                  boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
                  transition: "0.3s",
                }}
              >

                <div
                  style={{
                    fontSize: "45px",
                  }}
                >
                  {item.icon}
                </div>

                <h5 className="fw-bold mt-3">
                  {item.title}
                </h5>

                <p className="text-muted mb-0">
                  {item.value}
                </p>

              </div>
            </div>
          ))}
        </div>

        {/* ================= GOOGLE MAP ================= */}
        <div className="mt-5">

          <iframe
            title="map"
            src="https://maps.google.com/maps?q=Punjab&t=&z=13&ie=UTF8&iwloc=&output=embed"
            style={{
              width: "100%",
              height: "350px",
              border: "0",
              borderRadius: "25px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;