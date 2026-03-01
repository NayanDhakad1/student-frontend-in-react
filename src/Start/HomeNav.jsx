import React from 'react'
import { BiFullscreen } from 'react-icons/bi'
import { BsFullscreen } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const HomeNav = () => {
  return (
      <>
      
      <nav
    style={{
    background: "#333",
    padding:11,

    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    boxSizing: "border-box"
  }}
>
  <div style={{ color: "white" }}>:-:</div>

  <div style={{ display: "flex", gap: "20px" }}>
    <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
     <Link to="/reference" style={{ color: "white", textDecoration: "none" }}>Reference</Link>
    <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About Us</Link>
     <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact Us</Link>
    <Link to="/adminlogout" style={{ color: "white", textDecoration: "none" }}>Logout</Link>
  </div>
</nav>
      
      </>
  )
}

export default HomeNav