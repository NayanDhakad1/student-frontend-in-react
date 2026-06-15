import { NavLink } from "react-router-dom";
import "../Styles/Navbar.css";

function NavbarLinks({ isLogin, role, handleLogout }) {
  return (
    <div className="navbar-links">

      {!isLogin && (
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </>
      )}

      {isLogin && role === "ADMIN" && (
        <>
          <NavLink to="/admin">Dashboard</NavLink>
          <NavLink to="/allstudents">All Students</NavLink>
          <NavLink to="/create">Create</NavLink>
        </>
      )}

      {isLogin && role === "TEACHER" && (
        <>
          <NavLink to="/teacher">Dashboard</NavLink>
          <NavLink to="/attendance">Attendance</NavLink>
        </>
      )}

      {isLogin && role === "STUDENT" && (
        <>
          <NavLink to="/student">Dashboard</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </>
      )}

      {isLogin && (
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      )}

    </div>
  );
}

export default NavbarLinks;