import axios from "axios";
import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const View = () => {
  const { id } = useParams(); // URL se id milegi
  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      axios.get(`http://localhost:8080/student/id/${id}`)

      .then((res) => {
        setStudent(res.data);
        setError("");
      })
      .catch(() => {
        setStudent(null);
        setError("Student Not Found");
      });
  }, [id]);

  return (
    <div className="container mt-4">
      <h2>Student Details</h2>
      
      {error && <p className="text-danger">{error}</p>}

      {student && (
        <table className="table table-bordered mt-3">
          <tbody>
            <tr>
              <th>ID</th>
              <td>{student.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{student.name}</td>
            </tr>
            <tr>
              <th>Mobile</th>
              <td>{student.mobile}</td>
            </tr>
             <tr>
              <th>Email</th>
              <td>{student.email}</td>
            </tr>

            <tr>
              <th>Course</th>
              <td>{student.course}</td>
            </tr>
            <tr>
              <th>Branch</th>
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
