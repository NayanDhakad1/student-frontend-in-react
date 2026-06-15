import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles/Auth.css";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";
import HomeNav from "./Start/HomeNav";

function Register() {

  const navigate = useNavigate();

  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    role: "USER"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8081/api/add", register);
      alert("Registered Successfully");
      navigate("/otp");
    } catch (error) {
      alert("Registration Failed");
    }
  };

  return (
<>
<h1
  style={{
    position: "fixed",
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

<HomeNav/>

<div className="auth-container">
  <div className="auth-card">
    <h2>Register</h2>

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={register.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={register.email}
        onChange={handleChange}
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={register.password}
        onChange={handleChange}
        required
      />

     
      <button type="submit">Register</button>
    </form>

    <span
      className="auth-link"
      onClick={() => navigate("/login")}
    >
      Already have an account? Login
    </span>
    
  <Link to="/otp" className="btn btn-secondary mt-3">
        Back
  </Link>
  </div>

</div>

</>
  );
}

export default Register;