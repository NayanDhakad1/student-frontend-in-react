import React from "react";
import "../styles/About.css";
import { Link } from "react-router-dom";
import HomeNav from "../Start/HomeNav";
import Home from "./Home";

function About() {
  return (
    <>
    <HomeNav/>
    <div className="about-container">
      <div className="about-card">
        <h1>About Student Portal</h1>

        <p>
          Student Portal ek simple aur powerful web application hai jisme
          students ka data manage kiya jata hai. Is project me aap student
          details add, update, delete aur view kar sakte ho.
        </p>

        <div className="about-features">
          <div className="feature-box">
            <h3>Add Students</h3>
            <p>Naye students ka record create kar sakte ho.</p>
          </div>

          <div className="feature-box">
            <h3>Edit Details</h3>
            <p>Existing student ki information update kar sakte ho.</p>
          </div>

          <div className="feature-box">
            <h3>Delete Record</h3>
            <p>Student data remove kar sakte ho.</p>
          </div>

          <div className="feature-box">
            <h3>View Students</h3>
            <p>Saare students ka list dekh sakte ho.</p>
          </div>
        </div>

        <p className="about-footer">
          Developed for learning React + Spring Boot Full Stack Project.
        </p>
         <Link to="/" className="btn btn-secondary mt-3">
              Back
            </Link>
      </div>
      
    </div>
    </>
    
  );
}

export default About;