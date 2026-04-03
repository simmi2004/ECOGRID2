// import React from 'react' 
// import Home from './Home'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Layout from './master/Layout'
// // import BookingSection from './BookingSection'
// // import FeaturedVehicles from './FeaturedVehicles'
// import Services from './Services'
// import AboutSection from './AboutSection'


// function App() {


//   return (
//     <BrowserRouter>
//      <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           {/* <Route index element={<Hero />} /> */}
//           {/* <Route index element={<BookingSection />} /> */}
//             {/* <Route index element={<FeaturedVehicles />} /> */}
//               <Route path='about' element={<AboutSection />}/>
//                 <Route index element={<Services />}/>

              

//         </Route>

        
//       </Routes> 

//     </BrowserRouter>
//   )
// }

// export default App
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import Header from "./master/Header";
import Footer from "./master/Footer";

// Pages
import Home from "./Home";
import AboutSection from "./AboutSection";
import Services from "./Services";
import Recycling from "./Recycling";
import ContactSection from "./ContactSection";
import RequestPickup from "./RequestPickup";

function App() {
  return (
    <BrowserRouter>

      {/* HEADER */}
      <Header />

      {/* ROUTING */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/services" element={<Services />} />
        <Route path="/recycle" element={<Recycling />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/pickup" element={<RequestPickup />} />
      </Routes>

      {/* FOOTER */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;