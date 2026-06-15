import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../api/axios";

const Editteacher1 = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [teacher, setTeacher] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "",
    address: "",
  });

  // ---------- GET single teacher ----------
  useEffect(() => {
    api
      .get(`/register/id/${id}`)
      .then((res) => setTeacher(res.data))
      .catch(() => alert("Teacher not found"));
  }, [id]);

  const handleChange = (e) => {
    setTeacher({ ...teacher, [e.target.name]: e.target.value });
  };

  // ----------- UPDATE teacher ------------
  const updateTeacher = () => {
    api
      .put(`/register/id/${id}`, teacher)
      .then(() => {
        alert("Teacher Updated Successfully");
        navigate("/viewteacher"); // apna route check kar lena
      })
      .catch(() => alert("Update Failed"));
  };

  return (
    <div className="container mt-5">
      <h2>Edit Teacher</h2>

      <input
        className="form-control mt-2"
        name="name"
        value={teacher.name}
        onChange={handleChange}
        placeholder="Name"
      />

      <input
        className="form-control mt-2"
        name="mobile"
        value={teacher.mobile}
        onChange={handleChange}
        placeholder="Mobile"
      />

      <input
        className="form-control mt-2"
        name="email"
        value={teacher.email}
        onChange={handleChange}
        placeholder="Email"
      />

      <input
        className="form-control mt-2"
        name="subject"
        value={teacher.subject}
        onChange={handleChange}
        placeholder="Subject"
      />

      <input
        className="form-control mt-2"
        name="address"
        value={teacher.address}
        onChange={handleChange}
        placeholder="Address"
      />

      <button onClick={updateTeacher} className="btn btn-success mt-3">
        Save
      </button>
    </div>
  );
};

export default Editteacher1;