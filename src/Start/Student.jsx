import React from "react";
import { Link } from "react-router-dom";
import HomeNav from "./HomeNav";

const Student = () => {

  const cardStyle = {
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(6px)",
    padding: "25px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.3)",
    textAlign: "center",
    textDecoration: "none",
    color: "#2e7d32",
    fontWeight: "600",
    fontSize: "18px"
  };

  const container = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "20px",
    padding: "40px"
  };

  return (
    <div>
      <HomeNav />

      <div style={container}>

        <Link to="/create" style={cardStyle}>Registration</Link>

        <Link to="/studentviewtimetable" style={cardStyle}>Timetable</Link>
        
        <Link to="/viewallassignments/1" style={cardStyle}>
          View Assignments
        </Link>

      </div>
    </div>
  );
};

export default Student;