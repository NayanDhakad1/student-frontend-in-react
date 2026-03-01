import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../api/axios";

import Navbar from "../components/Navbar";


const Viewregister = () => {
  const [teacher, setTeacher] = useState([]);

  const fetchteacher = async () => {
    try {
      const response = await api.get("/register/all");
      setTeacher(response.data);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  useEffect(() => {
    fetchteacher();
  }, []);

  const deleteHandler = async (register) => {
    if (window.confirm(`Delete ${register.name}?`)) {
      let response = await api.delete(`/register/id/${register.id}`);
      if (response.data) {
        alert("Deleted Successfully");
        window.location.reload();
        fetchregister();
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
            <th>subject</th>
            <th>address</th>
            <th>View</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {teacher.map((register) => (
            <tr key={register.id}>
              <td>{register.id}</td>
              <td>{register.name}</td>
              <td>{register.mobile}</td>
              <td>{register.email}</td>
              <td>{register.subject}</td>
              <td>{register.address}</td>

              <td>
                <Link to={`/viewteacher1/${register.id}`} className="btn btn-primary">
                  View
                </Link>
              </td>

              <td>
                <Link to={`/editteacher1/${register.id}`} className="btn btn-warning">
                  Edit
                </Link>
              </td>

              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteHandler(register)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


      <Link to="/admin" className="btn btn-secondary mt-3">
              Back
            </Link>
    </div>
  );
};

export default Viewregister;
