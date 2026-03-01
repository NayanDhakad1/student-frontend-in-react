import axios from "axios";
import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Viewteacher1 = () => {
  const { id } = useParams(); // URL se id milegi
  const [teacher, setTeacher] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      axios.get(`http://localhost:8080/register/id/${id}`)

      .then((res) => {
        setTeacher(res.data);
        setError("");
      })
      .catch(() => {
        setTeacher(null);
        setError("Teacher Not Found");
      });
  }, [id]);

  return (
    <div className="container mt-4">
      <h2>Teacher Details</h2>
      
      {error && <p className="text-danger">{error}</p>}

      {register/id && (
        <table className="table table-bordered mt-3">
          <tbody>
            <tr>
              <th>ID</th>
              <td>{register.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{register.name}</td>
            </tr>
            <tr>
              <th>Mobile</th>
              <td>{register.mobile}</td>
            </tr>
             <tr>
              <th>Email</th>
              <td>{register.email}</td>
            </tr>

            <tr>
              <th>Course</th>
              <td>{register.course}</td>
            </tr>
            <tr>
              <th>Branch</th>
              <td>{register.branch}</td>
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

export default Viewteacher1;
