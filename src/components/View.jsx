import axios from "axios";
import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const View = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchStudent();
  }, [id]);

  const fetchStudent = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/student/id/${id}`
      );
      setStudent(res.data);
      setError("");
    } catch (err) {
      setStudent(null);
      setError("Student Not Found");
    }
  };

  const thStyle = {
    fontWeight: "bold",
    color: "#000",
    backgroundColor: "#f8f9fa",
    width: "200px"
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Student Details</h2>

      {error && <p className="text-danger">{error}</p>}

      {student && (
        <table className="table table-bordered bg-white shadow">
          <tbody>
            <tr>
              <th style={thStyle}>ID</th>
              <td>{student.id}</td>
            </tr>
            <tr>
              <th style={thStyle}>Name</th>
              <td>{student.name}</td>
            </tr>
            <tr>
              <th style={thStyle}>Mobile</th>
              <td>{student.mobile}</td>
            </tr>
            <tr>
              <th style={thStyle}>Email</th>
              <td>{student.email}</td>
            </tr>
            <tr>
              <th style={thStyle}>Course</th>
              <td>{student.course}</td>
            </tr>
            <tr>
              <th style={thStyle}>Branch</th>
              <td>{student.branch}</td>
            </tr>
          </tbody>
        </table>
      )}

      <Link to="/allstudents" className="btn btn-secondary mt-3">
        Back
      </Link>
    </div>
  );
};

export default View;