import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles/Auth.css";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";
import HomeNav from "./Start/HomeNav";



function Login() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { name, password };
    console.log("sending login data", data);

    try {
      const response = await axios.post(
        "http://localhost:8081/api/login",
        data
      );

      if (response.data) {
        localStorage.setItem("isLogin", "true");
        navigate("/admin");
      } else {
        alert("Invalid Name or Password");
      }
    } catch (error) {
      // show server validation error if available
      if (error.response) {
        console.error("backend error", error.response.data);
        alert("Login failed: " + JSON.stringify(error.response.data));
      } else {
        alert("Login Failed: " + error.message);
      }
    }
  };

  return (
<>
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


<HomeNav/>


    <div  className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        <span
          className="auth-link"
          onClick={() => navigate("/register")}
        >
          Don't have an account? Register
        </span>
         <Link to="/homenav" className="btn btn-secondary mt-3">
              Back
            </Link>
      </div>
      
     
    </div>

    </>
  );
}

export default Login;