import React from 'react'
import StudNav from './StudNav'
import { Link } from 'react-router-dom'
import HomeNav from './HomeNav';
import Login from '../Login';

const Student = () => {

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
    <div>
     
      <HomeNav/>
      <Login/>
        <br/>
         <br/>
          <br/>
           <br/>
        <Link to="/create" style={cardStyle}>
          Register Details
        </Link>
        
    </div>
  )
}

export default Student
