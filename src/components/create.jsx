import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import HomeNav from "../Start/HomeNav";

  const CreateStudent = () => {
  const navigate = useNavigate();

  const [student, setStudent] = useState({id: "",name: "",mobile: "",email: "",course: "",branch: "",});

  const handleChange = (e) => {
    setStudent({...student,[e.target.name]: e.target.value,});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  try {
  const res = await axios.post( "http://localhost:8080/student",student );

      console.log("Response:", res.data);

      alert("Student Created Successfully");

      // form reset
      setStudent({id: "",name: "",mobile: "",email: "",course: "",branch: "",});

      navigate("/homenav");

    } catch (error) {
      console.error("Error:", error);
      alert("Error creating student ");
    }
  };

  return (
    <>
    <HomeNav/>
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    
      }}
    >
      <div
        style={{
          width: "400px",
          padding: "30px",
          borderRadius: "12px",
          background: "hsl(222, 32%, 74%)",
          color: "white",
          boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Registration
        </h2>

        <form onSubmit={handleSubmit}>
          {Object.keys(student).map((key) => (
            <div key={key} style={{ marginBottom: "12px" }}>
              <input
                type="text"
                name={key}
                placeholder={key.toUpperCase()}
                value={student[key]}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "6px",
                  border: "none",
                  background: "rgb(223, 228, 236)",
                  color: "white",
                }}
              />
            </div>
          ))}

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "none",
              background: "#4e73df",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Submit
          </button>
        </form>

        <Link
          to="/student"
          style={{
            display: "block",
            textAlign: "center",
            marginTop: "15px",
            color: "#1cc88a",
            textDecoration: "none",
          }}
        >
          Back to List
        </Link>
      </div>
    </div>
    </>
  );
};

export default CreateStudent;