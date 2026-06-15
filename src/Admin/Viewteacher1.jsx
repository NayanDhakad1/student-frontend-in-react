import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { api } from "../api/axios";

const Viewteacher1 = () => {
  const { id } = useParams();
  const [teacher, setTeacher] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchTeacher();
  }, [id]);

  const fetchTeacher = async () => {
    try {
      const res = await api.get(`/register/id/${id}`);
      setTeacher(res.data);
      setError("");
    } catch (err) {
      setTeacher(null);
      setError("Teacher Not Found");
    }
  };

  const thStyle = {
    fontWeight: "bold",
    color: "#000",
    backgroundColor: "#f1f1f1",
    width: "200px"
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Teacher Details</h2>

      {error && <p className="text-danger">{error}</p>}

      {teacher && (
        <table className="table table-bordered bg-white shadow">
          <tbody>
            <tr>
              <th style={thStyle}>ID</th>
              <td>{teacher.id}</td>
            </tr>
            <tr>
              <th style={thStyle}>Name</th>
              <td>{teacher.name}</td>
            </tr>
            <tr>
              <th style={thStyle}>Mobile</th>
              <td>{teacher.mobile}</td>
            </tr>
            <tr>
              <th style={thStyle}>Email</th>
              <td>{teacher.email}</td>
            </tr>
            <tr>
              <th style={thStyle}>Subject</th>
              <td>{teacher.subject}</td>
            </tr>
            <tr>
              <th style={thStyle}>Address</th>
              <td>{teacher.address}</td>
            </tr>
          </tbody>
        </table>
      )}

      <Link to="/admin" className="btn btn-secondary mt-3">
        Back
      </Link>
    </div>
  );
};

export default Viewteacher1;