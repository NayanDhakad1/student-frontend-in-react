import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import HomeNav from "../Start/HomeNav";

const Registeacher = () => {
  const navigate = useNavigate();

  const [teacher, setTeacher] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "",
    address: "",
  });

  const handleChange = (e) => {
    setTeacher({
      ...teacher,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     await axios.post("http://localhost:8081/register/add", teacher);

      alert("Teacher Created Successfully");

      setTeacher({
        name: "",
        mobile: "",
        email: "",
        subject: "",
        address: "",
      });

      navigate("/viewteacher");
    } catch (error) {
      console.error(error);
      alert("Error creating teacher");
    }
  };

  return (
    

    <div style={containerStyle}>
      <div style={cardStyle}>
        
        <h2 style={{ textAlign: "center" }}>Create Teacher</h2>

        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" value={teacher.name} onChange={handleChange} required style={inputStyle} />
          <input name="mobile" placeholder="Mobile" value={teacher.mobile} onChange={handleChange} required style={inputStyle} />
          <input name="email" placeholder="Email" value={teacher.email} onChange={handleChange} required style={inputStyle} />
          <input name="subject" placeholder="Subject" value={teacher.subject} onChange={handleChange} required style={inputStyle} />
          <input name="address" placeholder="Address" value={teacher.address} onChange={handleChange} required style={inputStyle} />

          <button type="submit" style={buttonStyle}>Submit</button>
        </form>

        
        <Link to="/teacher" style={{ display: "block", textAlign: "center", marginTop: "15px" }}>
          Back Teacher Dashboard
        </Link>

        <Link to="/admin" style={{ display: "block", textAlign: "center", marginTop: "15px" }}>
          Back Admin Dashboard
        </Link>
        
      </div>
      
    </div>
   
  );
};

const containerStyle = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const cardStyle = {
  width: "400px",
  padding: "30px",
  borderRadius: "12px",
  background: "hsl(222, 32%, 74%)",
  boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
};

const inputStyle = {
  width: "100%",
  padding: "8px",
  marginBottom: "12px",
  borderRadius: "6px",
  border: "none",
  background: "#e3e4ec",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "6px",
  border: "none",
  background: "#4e73df",
  color: "white",
  cursor: "pointer",
  fontWeight: "bold",
};

export default Registeacher;