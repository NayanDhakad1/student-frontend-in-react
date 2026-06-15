import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const StudentViewTimetable = () => {

  const [timetable, setTimetable] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:8081/Createtimetable/showall");
      setTimetable(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>

      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Student Timetable
      </h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          boxShadow: "0px 0px 10px #ccc"
        }}
      >
        <thead style={{ backgroundColor: "#1976d2", color: "white" }}>
          <tr>
            <th style={thStyle}>Subject</th>
            <th style={thStyle}>Teacher</th>
            <th style={thStyle}>Day</th>
            <th style={thStyle}>Time</th>
          </tr>
        </thead>

        <tbody>
          {timetable.map((item) => (
            <tr key={item.id}>
              <td style={tdStyle}>{item.subject}</td>
              <td style={tdStyle}>{item.teacher}</td>
              <td style={tdStyle}>{item.day}</td>
              <td style={tdStyle}>{item.time}</td>
            </tr>
          ))}
        </tbody>

      </table>
      
      <Link to="/student" className="btn btn-secondary mt-3">
              Back
            </Link>

    </div>
    
  );
};

const thStyle = {
  padding: "12px",
  border: "1px solid #ddd"
};

const tdStyle = {
  padding: "10px",
  border: "1px solid #ddd",
  textAlign: "center"
};

export default StudentViewTimetable;