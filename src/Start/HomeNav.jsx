import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../Styles/Navbar.css";

import { FaBars, FaTimes } from "react-icons/fa";

const HomeNav = () => {

const navigate = useNavigate();

const handleLogout = () => {

localStorage.removeItem("isLogin");
navigate("/login");
};

  const [isOpen, setIsOpen] = useState(false);
  const [shadow, setShadow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShadow(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyle = (path) => ({
    color: location.pathname === path ? "#ffd700" : "white",
    textDecoration: "none",
    fontWeight: "500",
    position: "relative",
  });

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          padding: 25,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#f75200",
          color: "hsl(20, 23%, 95%)",
          boxSizing: "border-box",
          zIndex: 1000,
          transition: "0.3s",
          boxShadow: shadow ? "0 4px 10px rgba(0,0,0,0.2)" : "none",
        }}
      >
        {/* Logo */}
        <div style={{ fontSize: "20px", fontWeight: "bold" }}>
          SMS Portal
        </div>

        {/* Desktop Links */}
        <div
          className="nav-links"
          style={{
            display: "flex",
            gap: "30px",
          }}
        >
          <Link to="/" style={linkStyle("/")}>Home</Link>
          <Link to="/reference" style={linkStyle("/reference")}>Reference</Link>
          <Link to="/about" style={linkStyle("/about")}>About</Link>
          <Link to="/contact" style={linkStyle("/contact")}>Contact</Link>
      <div className="navbar-logo">
      </div>
      <div className="navbar-links">    
      <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
  


        </div>

        {/* Mobile Icon */}
        <div
          className="mobile-icon"
          onClick={() => setIsOpen(!isOpen)}
          style={{ display: "none", cursor: "pointer" }}
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: "60px",
            left: 0,
            width: "100%",
            background: "rgb(241, 74, 3)",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: "20px",
            zIndex: 999,
          }}
        >
          <Link to="/" style={{ color: "white" }} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/reference" style={{ color: "white" }} onClick={() => setIsOpen(false)}>Reference</Link>
          <Link to="/about" style={{ color: "white" }} onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" style={{ color: "white" }} onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/adminlogout" style={{ color: "white" }} onClick={() => setIsOpen(false)}>Logout</Link>
        </div>
      )}

      {/* Spacer so content doesn’t hide behind navbar */}
      <div style={{ height: "70px" }}></div>
    </>
  );
};

export default HomeNav;