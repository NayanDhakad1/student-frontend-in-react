import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const AddAttendance = () => {

  const navigate = useNavigate();

  const [attendance, setAttendance] = useState({
    studentName: "",
    subject: "",
    date: "",
    status: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setAttendance({
      ...attendance,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8081/attendance/add", attendance)
      .then(() => {
        alert("Attendance Marked Successfully");
        navigate("/teacher-dashboard");
      })
      .catch((err) => {
        setError("Failed to mark attendance");
        console.error(err);
      });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Mark Attendance</h2>

      {error && <p className="text-danger">{error}</p>}

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label className="form-label">Student Name</label>
          <input
            type="text"
            name="studentName"
            className="form-control"
            value={attendance.studentName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Subject</label>
          <input
            type="text"
            name="subject"
            className="form-control"
            value={attendance.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            type="date"
            name="date"
            className="form-control"
            value={attendance.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            name="status"
            className="form-control"
            value={attendance.status}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
          </select>
        </div>

        <button type="submit" className="btn btn-success">
          Submit
        </button>

        <Link to="/teacher" className="btn btn-secondary ms-2">
          Cancel
        </Link>

      </form>
    </div>
  );
};

export default AddAttendance;