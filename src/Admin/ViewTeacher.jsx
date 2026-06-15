import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../api/axios";
import HomeNav from "../Start/HomeNav";

const ViewTeacher = () => {
  const [teacher, setTeacher] = useState([]);
  const [error, setError] = useState("");

  // ---------------- FETCH ALL TEACHERS ----------------
  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await api.get("/register/all");
      setTeacher(response.data);
      setError("");
    } catch (err) {
      console.log("Fetch Error:", err);
      setError("Failed to load teachers");
    }
  };

  // ---------------- DELETE TEACHER ----------------
  const deleteHandler = async (register) => {
    if (window.confirm(`Delete ${register.name}?`)) {
      try {
        await api.delete(`/register/id/${register.id}`);

        alert("Deleted Successfully");

        // Remove deleted teacher from UI
        setTeacher((prev) =>
          prev.filter((t) => t.id !== register.id)
        );

      } catch (error) {
        console.log("Delete Error:", error);
        alert("Delete Failed");
      }
    }
  };

  return (
    <>
      <HomeNav />

      <div className="container mt-4">
        <h3 className="mb-3">All Teachers</h3>

        {error && <p className="text-danger">{error}</p>}

        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Address</th>
              <th>View</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {teacher.length > 0 ? (
              teacher.map((register) => (
                <tr key={register.id}>
                  <td>{register.id}</td>
                  <td>{register.name}</td>
                  <td>{register.mobile}</td>
                  <td>{register.email}</td>
                  <td>{register.subject}</td>
                  <td>{register.address}</td>

                  <td>
                    <Link
                      to={`/viewteacher1/${register.id}`}
                      className="btn btn-primary btn-sm"
                    >
                      View
                    </Link>
                  </td>

                  <td>
                    <Link
                      to={`/editteacher1/${register.id}`}
                      className="btn btn-warning btn-sm"
                    >
                      Edit
                    </Link>
                  </td>

                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteHandler(register)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center">
                  No Teachers Found
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <Link to="/admin" className="btn btn-secondary mt-3">
          Back
        </Link>
      </div>
    </>
  );
};

export default ViewTeacher;