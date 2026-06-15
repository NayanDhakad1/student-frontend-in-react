import React from "react";
import { useNavigate } from "react-router-dom";
import NavbarLinks from "./NavbarLinks";
import "../Styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const isLogin = localStorage.getItem("isLogin");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h2>My App</h2>
      </div>

      <NavbarLinks
        isLogin={isLogin}
        role={role}
        handleLogout={handleLogout}
      />
    </div>
  );
}

export default Navbar;