import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../api/axios";

import Navbar from "../components/Navbar";


const AllStudents = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await api.get("/student");
      setStudents(response.data);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const deleteHandler = async (student) => {
    if (window.confirm(`Delete ${student.name}?`)) {
      let response = await api.delete(`/student/id/${student.id}`);
      if (response.data) {
        alert("Deleted Successfully");
        window.location.reload();
        fetchStudents();
      } else {
        alert("Delete Failed");
      }
    }
  };

  return (
    <div className="container mt-4">
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Course</th>
            <th>Branch</th>
            <th>View</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.mobile}</td>
              <td>{student.email}</td>
              <td>{student.course}</td>
              <td>{student.branch}</td>

              <td>
                <Link to={`/view/${student.id}`} className="btn btn-primary">
                  View
                </Link>
              </td>

              <td>
                <Link to={`/update/${student.id}`} className="btn btn-warning">
                  Edit
                </Link>
              </td>

              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteHandler(student)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


      <Link to="/teacher" className="btn btn-secondary mt-3">
              Back Teacher Dashbord
            </Link>
    </div>
  );
};

export default AllStudents;
