import React from "react";
import HomeNav from "../Start/HomeNav";
import "../Styles/About.css";

const About = () => {
  return (
    <>
      <HomeNav />

      <div className="about-wrapper">

        {/* HERO */}
        <section className="about-hero">
          <h1>Enrollment is our craft.</h1>
          <h2>Outcomes are our measure.</h2>
          <p>
            Education doesn’t need more tools. It needs a complete operating
            system. Our Student Management System is built from the ground up
            to power modern academic institutions.
          </p>
        </section>

        {/* TRUSTED SECTION */}
        <section className="trusted-section">
          <h3>Trusted by 500+ Institutions</h3>
          <div className="logo-grid">
            <span>University A</span>
            <span>Institute B</span>
            <span>Academy C</span>
            <span>School D</span>
            <span>College E</span>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="philosophy-section">
          <h2>Our Philosophy</h2>

          <div className="philosophy-grid">
            <div>
              <h4>Craft over cobbles</h4>
              <p>We design natively for education, not patch generic tools together.</p>
            </div>

            <div>
              <h4>Outcomes over overhaul</h4>
              <p>Every feature must reduce friction and increase conversions.</p>
            </div>

            <div>
              <h4>AI as a teammate</h4>
              <p>Smart automation assists humans — it doesn’t replace them.</p>
            </div>

            <div>
              <h4>Trust by design</h4>
              <p>Security, privacy, and compliance are foundations.</p>
            </div>
          </div>
        </section>

        {/* STORY */}
        <section className="story-section">
          <h2>Our Story</h2>
          <p>
            Founded with a simple belief that education deserves its own
            technology platform, we started building solutions tailored
            specifically for academic institutions.
          </p>
          <p>
            Today, we power revenue-critical operations for institutions
            across multiple cities and help them drive better enrollments,
            optimize marketing efforts, and scale operations.
          </p>
        </section>

        {/* IMPACT */}
        <section className="impact-section">
          <h2>Measured by Impact</h2>
          <div className="impact-grid">
            <div>
              <h3></h3>
              <p>Institutions</p>
            </div>
            <div>
              <h3></h3>
              <p>Student Records Managed</p>
            </div>
            <div>
              <h3></h3>
              <p>Reduction in Manual Work</p>
            </div>
          </div>
        </section>

        {/* PEOPLE & CULTURE */}
        <section className="culture-section">
          <h2>Our People & Culture</h2>
          <p>
            Behind our platform is a team of dreamers, builders, and
            problem-solvers. Innovation, collaboration, and empathy
            drive everything we build.
          </p>
        </section>

        {/* NEWS */}
        <section className="news-section">
          <h2>In the News</h2>
          <div className="news-card">
          
            <p>Recognized for transforming academic enrollment processes.</p>
          </div>

          <div className="news-card">
        
            
          </div>
        </section>

        {/* OFFICES */}
        <section className="office-section">
          <h2>Our Presence</h2>
          <p>Head Office: Indore, Madhya Pradesh</p>
          
        </section>

        {/* FAQ */}
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-item">
            <h4>What is Student Management System?</h4>
            <p>A complete academic operating system for institutions.</p>
          </div>

          <div className="faq-item">
            <h4>Is the system scalable?</h4>
            <p>Yes, it supports small institutes to large universities.</p>
          </div>

          <div className="faq-item">
            <h4>How does AI help?</h4>
            <p>AI assists in automating enrollment tracking and analytics.</p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="about-footer">
          © 2026 Student Management System | All Rights Reserved
        </footer>

      </div>
    </>
  );
};

export default About;