import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Navbar.css";

function AdminLogout() {
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
      <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>

  );
}
export default AdminLogout;