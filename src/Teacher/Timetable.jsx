import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Timetable = () => {

  const [timetable, setTimetable] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8081/timetable/add",timetable)
      .then((res) => {
        setTimetable(res.data);
      })
      .catch((err) => {
        setError("Failed to load timetable");
        console.error(err);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Teacher Timetable</h2>

      {error && <p className="text-danger">{error}</p>}

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Teacher Name</th>
            <th>Subject</th>
            <th>Day</th>
            <th>Time</th>
            <th>Classroom</th>
          </tr>
        </thead>
        <tbody>
          {timetable.length > 0 ? (
            timetable.map((timetable) => (
              <tr key={timetable.id}>
                <td>{timetable.id}</td>
                <td>{timetable.teacherName}</td>
                <td>{timetable.subject}</td>
                <td>{timetable.day}</td>
                <td>{timetable.time}</td>
                <td>{timetable.classroom}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                No Timetable Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <Link to="/teacher" className="btn btn-primary">
        Back
      </Link>
    </div>
  );
};

export default Timetable;