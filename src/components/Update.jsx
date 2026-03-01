import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    mobile: "",
    course: "",
    branch: "",
  });

  // ---------- GET single student ----------
  useEffect(() => {
    axios
      .get(`http://localhost:8080/student/id/${id}`)
      .then((res) => setStudent(res.data))
      .catch(() => alert("Student not found"));
  }, [id]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  // ----------- UPDATE student ------------
  const updateStudent = () => {
    axios
      .put(`http://localhost:8080/student/id/${id}`, student)
      .then(() => {
        alert("Student Updated");
        navigate("/");
      })
      .catch(() => alert("Update Failed"));
  };

  return (
    <div className="container mt-5">
      <h2>Edit Student</h2>

      <input
        className="form-control mt-2"
        name="name"
        value={student.name}
        onChange={handleChange}
        placeholder="Name"
      />

      <input
        className="form-control mt-2"
        name="mobile"
        value={student.mobile}
        onChange={handleChange}
        placeholder="Mobile"
      />

      <input
        className="form-control mt-2"
        name="course"
        value={student.course}
        onChange={handleChange}
        placeholder="Course"
      />

      <input
        className="form-control mt-2"
        name="branch"
        value={student.branch}
        onChange={handleChange}
        placeholder="Branch"
      />

      <button onClick={updateStudent} className="btn btn-success mt-3">
        Save
      </button>
    </div>
  );
};

export default Update;
