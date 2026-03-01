import React from "react";
import { Link } from "react-router-dom";
import HomeNav from "../Start/HomeNav";
import Login from "../Login";

function Home() {
  return (
    <>
     <HomeNav/>
   
      <div>

      <h1
  style={{
    position: "fixed",        // top pe fix rahega
    top: "0",
    left: "0",
    width: "100%",
    margin: "0",
    padding: "18px 0",
    textAlign: "center",
    backgroundColor: "hsl(20, 2%, 73%)",
    color: "ActiveBorder",
    fontSize: "28px",
    fontWeight: "600",
    letterSpacing: "1px",
    zIndex: "1000"
  }}
>
  Student Management System
</h1>
 
        <Link to="/admin">Admin</Link>
        <br />
        <Link to="/teacher">Teacher</Link>
        <br />
        <Link to="/student">Student</Link>
      
      </div>
    </>
  );
}

export default Home;