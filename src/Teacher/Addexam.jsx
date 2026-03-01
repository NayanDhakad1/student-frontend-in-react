import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const AddExam = () => {

  const navigate = useNavigate();

  const [exam, setExam] = useState({
    subject: "",
    examDate: "",
    totalMarks: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setExam({
      ...exam,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8080/exam/add", exam)
      .then(() => {
        alert("Exam Added Successfully");
        navigate("/teacher-dashboard");
      })
      .catch((err) => {
        setError("Failed to add exam");
        console.error(err);
      });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Add New Exam</h2>

      {error && <p className="text-danger">{error}</p>}

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label className="form-label">Subject</label>
          <input
            type="text"
            name="subject"
            className="form-control"
            value={exam.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Exam Date</label>
          <input
            type="date"
            name="examDate"
            className="form-control"
            value={exam.examDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Total Marks</label>
          <input
            type="number"
            name="totalMarks"
            className="form-control"
            value={exam.totalMarks}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-success">
          Add Exam
        </button>

        <Link to="/teacher" className="btn btn-secondary ms-2">
          Cancel
        </Link>

      </form>
    </div>
  );
};

export default AddExam;