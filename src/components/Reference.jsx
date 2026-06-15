import React from "react";
import { Link } from "react-router-dom";
import HomeNav from "../Start/HomeNav";

const Reference = () => {
  const headerStyle = {
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "white",
    padding: "50px 20px",
    borderRadius: "12px",
    textAlign: "center",
  };

  const cardStyle = {
    border: "none",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  };

  return (
    <>
    <HomeNav/>
    <div className="container mt-4 mb-5">

      {/* Header */}
      <div style={headerStyle}>
        <h1 className="fw-bold">Student Management System</h1>
        <p className="mb-0">
          A Full Stack Web Application built with React & Spring Boot
        </p>
      </div>

      {/* About Project */}
      <div className="mt-5">
        <h3 className="fw-bold"> About the Project</h3>
        <p>
          The Student Management System is a full-stack web application designed 
          to manage student records efficiently. It allows administrators to 
          perform CRUD operations, manage academic data, and monitor student 
          information in a structured way.
        </p>
      </div>

      {/* Key Features */}
      <div className="row mt-4">

        <div className="col-md-6 mb-4">
          <div className="card p-4" style={cardStyle}>
            <h4 className="fw-bold">Core Features</h4>
            <ul>
              <li>Add, Update, Delete Students</li>
              <li>View Student Details</li>
              <li>Search & Filter Students</li>
              <li>Pagination Support</li>
              <li>Form Validation</li>
              <li>Error Handling</li>
            </ul>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card p-4" style={cardStyle}>
            <h4 className="fw-bold"> Security Features</h4>
            <ul>
              <li>JWT Authentication</li>
              <li>Role-Based Access (Admin/Teacher)</li>
              <li>Protected Routes</li>
              <li>Password Encryption</li>
            </ul>
          </div>
        </div>

      </div>

      {/* Tech Stack */}
      <div className="row mt-3">

        <div className="col-md-4 mb-4">
          <div className="card p-4" style={cardStyle}>
            <h5 className="fw-bold">Frontend</h5>
            <ul>
              <li>React.js</li>
              <li>React Router</li>
              <li>Axios</li>
              <li>Bootstrap 5</li>
            </ul>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card p-4" style={cardStyle}>
            <h5 className="fw-bold">Backend</h5>
            <ul>
              <li>Spring Boot</li>
              <li>Spring Security</li>
              <li>JPA + Hibernate</li>
              <li>REST APIs</li>
            </ul>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card p-4" style={cardStyle}>
            <h5 className="fw-bold">Database</h5>
            <ul>
              <li>MySQL</li>
              <li>Relational Schema Design</li>
              <li>Entity Relationships</li>
            </ul>
          </div>
        </div>

      </div>

      {/* Future Enhancements */}
      <div className="mt-4">
        <h3 className="fw-bold">🔮 Future Enhancements</h3>
        <ul>
          <li>Attendance Management</li>
          <li>Exam & Grade System</li>
          <li>Email Notification System</li>
          <li>Cloud Deployment</li>
          <li>Admin Dashboard Analytics</li>
        </ul>
      </div>
      <section className="leadership-section">
  <h2>A Message From Our Founder</h2>
  <p>
    When we started this journey, we had one belief — education deserves
    technology that understands it deeply. Institutions were forced to use
    generic CRM tools that were never designed for academic workflows.
  </p>
  <p>
    Our mission is simple: build purpose-driven systems that empower
    institutions to focus on outcomes, not operations.
  </p>
  <h4>— Nandu, Founder</h4>
</section>

<section className="tech-section">
  <h2>Built on Modern Technology</h2>
  <p>
    Our platform leverages cutting-edge technologies to ensure performance,
    scalability, and security.
  </p>

  <div className="tech-grid">
    <div>
      <h4>Frontend</h4>
      <p>React.js with responsive UI architecture</p>
    </div>
    <div>
      <h4>Backend</h4>
      <p>Spring Boot REST APIs with secure authentication</p>
    </div>
    <div>
      <h4>Database</h4>
      <p>Optimized relational database design</p>
    </div>
    <div>
      <h4>Cloud Ready</h4>
      <p>Scalable deployment infrastructure</p>
    </div>
  </div>
</section>


<section className="security-section">
  <h2>Security & Compliance</h2>
  <p>
    We understand that student data is sensitive. That’s why security is
    built into our foundation.
  </p>

  <ul>
    <li>✔ Role-based access control</li>
    <li>✔ Encrypted data storage</li>
    <li>✔ Secure authentication mechanisms</li>
    <li>✔ Regular system audits</li>
  </ul>
</section>


<section className="success-section">
  <h2>Success Stories</h2>

  <div className="success-card">
    <h4>ABC University</h4>
    <p>
      Reduced enrollment processing time by 45% using our automated
      admission workflow.
    </p>
  </div>

  <div className="success-card">
    <h4>XYZ Coaching Institute</h4>
    <p>
      Increased student conversion rate by 30% through better
      lead tracking and analytics.
    </p>
  </div>
</section>


<section className="roadmap-section">
  <h2>Innovation Roadmap</h2>
  <p>
    We continuously evolve our platform with AI-driven insights,
    predictive analytics, and mobile-first architecture.
  </p>

  <ul>
    <li>🚀 AI-based performance prediction</li>
    <li>📱 Mobile App Launch</li>
    <li>☁ Cloud-native deployment</li>
    <li>🌍 Global expansion support</li>
  </ul>
</section>

<section className="culture-section">
  <h2>Our Culture</h2>
  <p>
    We believe innovation thrives in collaborative environments.
    Our team values transparency, experimentation, and continuous learning.
  </p>

  <p>
    From knowledge-sharing sessions to celebrating milestones,
    we foster a culture that supports both professional growth
    and personal well-being.
  </p>
</section>


<section className="final-cta">
  <h2>Built for Institutions That Aim Higher</h2>
  <p>
    Join hundreds of institutions transforming their academic
    operations with our intelligent enrollment platform.
  </p>
  <button className="cta-btn">Schedule a Demo</button>
</section>




      {/* Footer Button */}
      <div className="text-center mt-5">
        <Link to="/" className="btn btn-primary px-4">
          Back to Dashboard
        </Link>
      </div>

    </div>
    </>
  );
};

export default Reference;