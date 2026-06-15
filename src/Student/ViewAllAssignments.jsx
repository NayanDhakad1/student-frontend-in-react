import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ViewAllAssignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [error, setError] = useState("");

  const URL = "http://localhost:8081/assignment";

  useEffect(() => {
    axios.get(URL)
      .then(res => {
        setAssignments(res.data);
        setError("");
      })
      .catch(err => {
        console.log(err);
        setError("Failed to load assignments");
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2>Assignments</h2>

      {error && <p className="text-danger">{error}</p>}

      {assignments.length > 0 ? (
        <table className="table table-bordered table-striped shadow">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Subject</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map(a => (
              <tr key={a.id}>
                <td>{a.id}</td>
                <td>{a.title}</td>
                <td>{a.description}</td>
                <td>{a.subject}</td>
                <td>{a.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !error && <p>No Assignments Found</p>
      )}
   <Link to="/student" className="btn btn-secondary mt-3"> Back</Link>

    </div>
  );
};

export default ViewAllAssignments;