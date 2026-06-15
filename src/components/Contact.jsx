import React from "react";
import HomeNav from "../Start/HomeNav";
import "../Styles/Contact.css";

const Contact = () => {
  // Replace these with your Google Form IDs
  const GOOGLE_FORM_ACTION =
    "https://docs.google.com/forms/d/e/1FAIpQLSdGVhjnszTPfzkKNJlxRPSu_Jt695ZI7COXe5Lod7lB7c8OYg/formResponse";

  return (
    <>
      <HomeNav />

      <div className="contact-wrapper">
        {/* HERO */}
        <section className="contact-hero">
          <h1>Let’s Start a Conversation</h1>
          <p>
            Whether you’re looking for a demo, partnership, or support —
            our team is here to help.
          </p>
        </section>

        {/* MAIN CONTACT SECTION */}
        <section className="contact-main">
          {/* LEFT - FORM */}
          <div className="contact-form">
            <h2>Get in Touch</h2>

            <form action={GOOGLE_FORM_ACTION} method="POST" target="_blank">
              {/* Replace entry IDs with your actual form field IDs */}
              <input name="entry.1234567890" placeholder="Full Name" required />
              <input name="entry.0987654321" placeholder="Email" required />
              <input name="entry.1122334455" placeholder="Institution" />
              <input name="entry.6677889900" placeholder="Phone" />
              <textarea name="entry.5544332211" placeholder="Your Message"></textarea>
              <button type="submit">Submit Inquiry</button>
            </form>
          </div>

          {/* RIGHT - INFO */}
          <div className="contact-info">
            <h2>Contact Information</h2>

            <div className="info-block">
              <h4>Head Office</h4>
              <p>Indore, Madhya Pradesh, India</p>
            </div>

            <div className="info-block">
              <h4>Email</h4>
              <p>support@smsplatform.com</p>
            </div>

            <div className="info-block">
              <h4>Phone</h4>
              <p>+91 98765 43210</p>
            </div>

            <div className="info-block">
              <h4>Business Hours</h4>
              <p>Mon – Sat | 9:30 AM – 6:30 PM</p>
            </div>
          </div>
        </section>

        {/* OFFICE LOCATIONS */}
        <section className="locations-section">
          <h2>Our Presence</h2>
          <div className="locations-grid">
            <div>Mumbai</div>
            <div>Delhi</div>
            <div>Bangalore</div>
            <div>Hyderabad</div>
            <div>Pune</div>
            <div>Dubai (Expansion)</div>
          </div>
        </section>

        {/* MAP SECTION */}
        <section className="map-section">
          <h2>Find Us on Map</h2>
          <div className="map-placeholder">Google Map Integration Area</div>
        </section>

        {/* SUPPORT CTA */}
        <section className="support-section">
          <h2>Need Immediate Assistance?</h2>
          <p>
            Our dedicated support team ensures quick resolution of
            technical and operational queries.
          </p>
          <button className="support-btn">Contact Support</button>
        </section>

        {/* FOOTER */}
        <footer className="contact-footer">
          © 2026 Student Management System | All Rights Reserved
        </footer>
      </div>
    </>
  );
};

export default Contact;