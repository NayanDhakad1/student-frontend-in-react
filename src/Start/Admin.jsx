import React from "react";
import { Link } from "react-router-dom";
import HomeNav from "./HomeNav";
import Teacher from "./Teacher";
import Login from "../Login";

const Admin = () => {

  const cardStyle = {
    background: "#c5bdbdc9",   // transparent white
    backdropFilter: "blur(10px)",            // 👈 blur effect
    WebkitBackdropFilter: "blur(10px)",      // safari support
    padding: "25px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.3)",
    textAlign: "center",
    textDecoration: "none",
    color: "#000000",
    fontWeight: "500",
   
  };

  return (
    <div style={{ minHeight: "100vh" }}>

     <HomeNav/>
   
      <div style={{
        color:"Highlight,blue",
        width: "90%",
        padding:50,
        margin: "auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px"
      }}>
         <Link to="/registeacher" style={cardStyle}>Register Teacher</Link>
         <Link to="/viewteacher" style={cardStyle}>View Teacher</Link>
        <Link to="/viewstudents" style={cardStyle}>View Students</Link>
        <Link to="/assignments" style={cardStyle}>View Assignments</Link>
        <Link to="/viewexam" style={cardStyle}>View Exams</Link>
         <Link to="/adminlogout" style={cardStyle}>Logout</Link>
      </div>

    </div>
  );
};

export default Admin;