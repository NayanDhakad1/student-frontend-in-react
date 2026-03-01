import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";

import AllStudents from "./components/allstudents";
import CreateStudent from "./components/create";
import About from "./components/About";
import Update from "./components/Update";
import View from "./components/View";
import Login from "./Login";
import Register from "./Register";
import Otp from "./components/Otp";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import Student from "./Start/Student";
import Admin from "./Start/Admin";
import Teacher from "./Start/Teacher";
import "./styles/Navbar.css";
import TeachNav from "./Start/TeachNav";

import RegiTeacher from "./Admin/ViewTeacher";
import ViewAssignment from "./Admin/ViewAssignment";
import ViewExam from "./Admin/ViewExam";
import ViewStudents from "./Admin/ViewStudents";

import Timetable from "./Teacher/Timetable";
import Attendence from "./Teacher/Attendence";
import Leaves from "./Teacher/Leaves";
import Addexam from "./Teacher/Addexam";
import Viewgrades from "./Teacher/Viewgrades";
import Viewproject from "./Teacher/Viewproject";
import StudNav from "./Start/StudNav";
import AdminNav from "./Start/AdminNav";
import HomeNav from "./Start/HomeNav";
import ViewTeacher from "./Admin/ViewTeacher";
import Registeacher from "./Admin/Registeacher";

import Editteacher1 from "./Admin/Editteacher1";
import Viewteacher1 from "./Admin/viewteacher1";
import Contact from "./components/Contact";
import Reference from "./components/Reference";

import AdminLogout from "./Admin/AdminLogout";

const App = () => {
const navigate = useNavigate();

const [isLogin, setIsLogin] = useState(false);
const [isVerified, setIsVerified] = useState(false);

useEffect(() => {
setIsLogin(localStorage.getItem("isLogin") === "true");
setIsVerified(localStorage.getItem("isVerified") === "true");
}, []);

const handleLogout = () => {
localStorage.clear();
setIsLogin(false);
navigate("/login");
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "16px"
};
  return (
    <>
         <div className="content">
         <Routes>
          
          <Route path="/adminlogout" element={<AdminLogout />} />

          <Route path="/login" element={<Login />} />

          <Route path="/reference" element={<Reference />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/attendance" element={<Attendence />} />
          <Route path="/leaves" element={<Leaves />} />
          <Route path="/addexam" element={<Addexam/>} />
        
          <Route path="/viewgrades" element={<Viewgrades />} />
          <Route path="/project" element={<Viewproject />} />

          <Route path="/registeacher" element={<Registeacher />} />
          <Route path="/viewstudents" element={<ViewStudents />} />
          <Route path="/assignments" element={<ViewAssignment />} />
          <Route path="/viewexam" element={<ViewExam />} />
          <Route path="/viewteacher" element={<ViewTeacher />} />
          
          <Route path="/addexam" element={<Addexam />} />
          <Route path="/attendence" element={<Attendence />} />
          <Route path="/leaves" element={<Leaves />} />
          <Route path="/viewgrades" element={<Viewgrades />} />
          <Route path="/viewproject" element={<Viewproject />} />
          <Route path="/timetable" element={<Timetable />} />
        
          <Route path="/technav" element={<TeachNav />} />
          <Route path="/studnav" element={<StudNav />} />
          <Route path="/adminnav" element={<AdminNav />} />
          <Route path="/homenav" element={<HomeNav />} />
          <Route path="/otp" element={<Otp/>} />

          <Route path="/viewteacher1" element={<Viewteacher1/>} />
          <Route path="/editteacher1" element={<Editteacher1/>} />

          <Route path="/register"element={isVerified ? <Register /> : <Navigate to="/otp" />}/>

          <Route path="/allstudents"element = { <AllStudents/>}/>
          <Route path="/create"element={ <CreateStudent />}/>  
  
          <Route path="/view/:id"element={ <View />}/>
          <Route path="/update/:id"element={ <Update/>}/>
         
          <Route path="/admin"element={<ProtectedRoute><Admin /></ProtectedRoute>}/>
          <Route path="/student"element={<ProtectedRoute><Student /></ProtectedRoute>}/>
          <Route path="/teacher"element={<ProtectedRoute><Teacher/></ProtectedRoute>}/>

        </Routes>  
      </div>
    </>
  );
};
export default App;