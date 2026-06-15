import React from "react";
import { Link } from "react-router-dom";
import TeachNav from "./TeachNav";
import HomeNav from "./HomeNav";

const Teacher = () => {

  const cardStyle = {
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
    padding: "25px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.3)",
    textAlign: "center",
    textDecoration: "none",
    color: "#2e7d32",
    fontWeight: "600",
    transition: "0.3s",
    fontSize: "18px"
  };

  return (
    <div style={{ minHeight: "100vh" }}>
     <HomeNav/>

      {/* Title */}
      <h2 style={{ textAlign: "center", margin: "30px 0" }}>
        Teacher Dashboard
      </h2>

      {/* Cards */}
      <div style={{
        width: "90%",
        margin: "auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px"
      }}>


         <Link to="/registeacher" style={cardStyle}>
          Registration Teacher
        </Link>

        <Link to="/createtimetable" style={cardStyle}>
          Timetable
        </Link>

        
        <Link to="/allstudents" style={cardStyle}>
        Student Details
        </Link>

        <Link to="/assignments" style={cardStyle}>
          View Assignments
        </Link>

      </div>
    </div>
  );
};

export default Teacher;