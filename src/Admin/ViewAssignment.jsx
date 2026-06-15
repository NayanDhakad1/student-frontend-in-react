import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import HomeNav from "../Start/HomeNav";

const ViewAssignment = () => {
  const [assignments, setAssignments] = useState([]);
  const [form, setForm] = useState({
    id: null,
    title: "",
    description: "",
    subject: "",
    dueDate: ""
  });

  const [editing, setEditing] = useState(false);

  const URL = "http://localhost:8081/assignment";

  // 🔹 GET ALL
  const fetchAssignments = () => {
    axios.get(URL)
      .then(res => setAssignments(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  // 🔹 Handle Input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 CREATE or UPDATE
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editing) {
      axios.put(`${URL}/${form.id}`, form)
        .then(() => {
          fetchAssignments();
          resetForm();
        });
    } else {
      axios.post(URL, form)
        .then(() => {
          fetchAssignments();
          resetForm();
        });
    }
  };

  // 🔹 DELETE
  const handleDelete = (id) => {
    axios.delete(`${URL}/${id}`)
      .then(() => fetchAssignments());
  };

  // 🔹 EDIT
  const handleEdit = (a) => {
    setForm(a);
    setEditing(true);
  };

  const resetForm = () => {
    setForm({
      id: null,
      title: "",
      description: "",
      subject: "",
      dueDate: ""
    });
    setEditing(false);
  };

  return (
    <>
    <HomeNav/>
    <div className="container mt-4">
      <h2>Assignments</h2>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="bg-white p-3 shadow mb-4">

        <input
          type="text"
          name="title"
          placeholder="Title"
          className="form-control mb-2"
          value={form.title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="description"
          placeholder="Description"
          className="form-control mb-2"
          value={form.description}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="form-control mb-2"
          value={form.subject}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="dueDate"
          className="form-control mb-2"
          value={form.dueDate}
          onChange={handleChange}
          required
        />

        <button className="btn btn-primary">
          {editing ? "Update" : "Add"} Assignment
        </button>

        {editing && (
          <button
            type="button"
            className="btn btn-secondary ms-2"
            onClick={resetForm}
          >
            Cancel
          </button>
        )}
      </form>

      {/* TABLE */}
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Subject</th>
            <th>Due Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {assignments.map((a) => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.title}</td>
              <td>{a.description}</td>
              <td>{a.subject}</td>
              <td>{a.dueDate}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEdit(a)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(a.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
       <Link to="/admin" className="btn btn-secondary mt-3">
                Back Admin Dashbord
              </Link>
              <br/>
               <Link to="/teacher" className="btn btn-secondary mt-3">
                Back Teacher Dashboard
              </Link>
    </div>
    </>
  );
};

export default ViewAssignment;