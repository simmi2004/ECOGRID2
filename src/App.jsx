
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Admin";
import Login from "./Login";
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";
import RoleSelection from "./RoleSelection";
import AdminLogin from "./AdminLogin";
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
import UserCrud from "./UserCrud";

function App() {
  return (
    <BrowserRouter>

      {/* HEADER */}
      <Header />

      {/* ROUTING */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/services" element={<Services />} />
        <Route path="/recycle" element={<Recycling />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/pickup" element={<RequestPickup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user-crud" element={<UserCrud />} />
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/role-selection" element={<RoleSelection />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />  
      </Routes>

      {/* FOOTER */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;