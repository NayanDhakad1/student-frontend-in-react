import React from "react";
import { Link } from "react-router-dom";
import HomeNav from "../Start/HomeNav";
import "../Styles/Home.css";

function Home() {
  return (
    <div>

      <HomeNav />

      {/* HERO SECTION */}
      <section className="hero">
        <h1>Smart Student Management System</h1>
        <p>
          Complete digital solution to manage students, teachers,
          attendance and examinations efficiently.
        </p>

        <div className="hero-buttons">
          <Link to="/register" className="primary-btn">Get Started</Link>
          <Link to="/login" className="secondary-btn">Login</Link>
        </div>
      </section>

      {/* PANEL SECTION */}
      <section className="panel-section">
        <h2 className="section-title">Access Dashboard Panels</h2>

        <div className="panel-container">

          <Link to="/admin" className="panel-card">
            <h3>Admin Panel</h3>
            <p>Manage students, teachers and full system control.</p>
          </Link>

          <Link to="/teacher" className="panel-card">
            <h3>Teacher Panel</h3>
            <p>Manage attendance, exams and upload marks.</p>
          </Link>

          <Link to="/student" className="panel-card">
            <h3>Student Panel</h3>
            <p>View attendance, results and academic records.</p>
          </Link>

        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features">
        <h2 className="section-title">Core Features</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h4>Student Records</h4>
            <p>Securely manage student data.</p>
          </div>

          <div className="feature-card">
            <h4>Attendance Tracking</h4>
            <p>Automated attendance system.</p>
          </div>

          <div className="feature-card">
            <h4>Exam & Results</h4>
            <p>Create exams and publish results easily.</p>
          </div>

          <div className="feature-card">
            <h4>Dashboard Access</h4>
            <p>Separate dashboards for Admin, Teacher & Student.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 Student Management System | React + Spring Boot
      </footer>

    </div>
  );
}

export default Home;