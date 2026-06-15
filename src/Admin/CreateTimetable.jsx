import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/CreateTimetable.css";
import { Link } from "react-router-dom";
import HomeNav from "../Start/HomeNav";
 

const CreateTimetable = () => {


  const [timetable, setTimetable] = useState({
    subject: "",
    teacher: "",
    day: "",
    time: ""
  });

  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setTimetable({ ...timetable, [e.target.name]: e.target.value });
  };

  const fetchData = async () => {
    const res = await axios.get("http://localhost:8081/Createtimetable/showall");
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await axios.put(
        `http://localhost:8081/Createtimetable/update/${editId}`,
        timetable
      );
      setEditId(null);
    } else {
      await axios.post(
        "http://localhost:8081/Createtimetable/add",
        timetable
      );
    }

    setTimetable({
      subject: "",
      teacher: "",
      day: "",
      time: ""
    });

    fetchData();
  };

  const handleEdit = (item) => {
    setTimetable(item);
    setEditId(item.id);
  };

  const handleDelete = async (id) => {
    await axios.delete(
      `http://localhost:8081/Createtimetable/delete/${id}`
    );
    fetchData();
  };

  return (
   <>
   <HomeNav/>

    <div className="container">

     

      <form onSubmit={handleSubmit} className="form">

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={timetable.subject}
          onChange={handleChange}
        />

        <input
          type="text"
          name="teacher"
          placeholder="Teacher"
          value={timetable.teacher}
          onChange={handleChange}
        />

        <select name="day" value={timetable.day} onChange={handleChange}>
          <option value="">Select Day</option>
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thursday</option>
          <option>Friday</option>
        </select>

        <input
          type="text"
          name="time"
          placeholder="Time"
          value={timetable.time}
          onChange={handleChange}
        />

        <button type="submit">
          {editId ? "Update" : "Add"}
        </button>

      </form>

      

      <table>

        <thead>
          <tr>
            <th>Subject</th>
            <th>Teacher</th>
            <th>Day</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.subject}</td>
              <td>{item.teacher}</td>
              <td>{item.day}</td>
              <td>{item.time}</td>

              <td>
                <button
                  className="edit"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>

                <button
                  className="delete"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
        <Link to="/teacher" className="btn btn-secondary mt-3"> Back to Teacher</Link>
        <br/>
          <Link to="/admin" className="btn btn-secondary mt-3"> Back to Admin</Link>
    </>
  );
};

export default CreateTimetable;