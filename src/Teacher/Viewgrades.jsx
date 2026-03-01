import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ViewGrades = () => {

  const [grades, setGrades] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/register/all")
      .then((res) => {
        setGrades(res.data);
      })
      .catch((err) => {
        setError("Failed to load grades");
        console.error(err);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Teacher - View Grades</h2>

      {error && <p className="text-danger">{error}</p>}

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Student Name</th>
            <th>Subject</th>
            <th>Marks</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {grades.length > 0 ? (
            grades.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.studentName}</td>
                <td>{item.subject}</td>
                <td>{item.marks}</td>
                <td>{item.grade}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No Grades Found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <Link to="/teacher" className="btn btn-primary">
        Back
      </Link>
    </div>
  );
};

export default ViewGrades;