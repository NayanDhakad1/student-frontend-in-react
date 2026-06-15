import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Navbar.css";

function TeachNav() {
const navigate = useNavigate();

const handleLogout = () => {

localStorage.removeItem("isLogin");
navigate("/login");
};

return (
    <div className="navbar">
      <div className="navbar-logo">
      </div>
      <div className="navbar-links">
      <a href="/register">Register</a>
      <a href="/login">Login</a>
          
      <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>

    




  );
}
export default TeachNav;