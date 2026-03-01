import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Otp() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");

  // SEND OTP
  const sendOtp = async () => {
    try {
      const response = await fetch("http://localhost:8081/Otp/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      const data = await response.text();
      setMessage(data);

    } catch (error) {
      setMessage("Error sending OTP");
    }
  };

  // VERIFY OTP
  const verifyOtp = async () => {
    try {
      const response = await fetch("http://localhost:8081/Otp/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          otp: Number(otp)
        })
      });

      const data = await response.text();

      if (data === "OTP Verified Successfully") {
        localStorage.setItem("isVerified", "true");
        navigate("/register");
      } else {
        setMessage("Invalid OTP");
      }

    } catch (error) {
      setMessage("Error verifying OTP");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Email OTP Verification</h2>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <button onClick={sendOtp}>Send OTP</button>

      <br /><br />

      <input
        type="number"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />

      <br /><br />

      <button onClick={verifyOtp}>Verify OTP</button>

      <br /><br />

      <h3>{message}</h3>
      
      <Link to="/" className="btn btn-secondary mt-3">
              Back
            </Link>
    </div>
  );
}

export default Otp;