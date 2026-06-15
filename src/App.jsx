import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectRoute";

import CreateTimetable from "./Admin/CreateTimetable";

import AllStudents from "./components/allstudents";
import CreateStudent from "./components/create";
import About from "./components/About";
import Update from "./components/Update";
import View from "./components/View";
import Login from "./Login";
import Register from "./Register";
import Otp from "./components/Otp";

import Home from "./components/Home";
import Student from "./Start/Student";
import Admin from "./Start/Admin";
import Teacher from "./Start/Teacher";
import "./Styles/Navbar.css";
import TeachNav from "./Start/TeachNav";

import RegiTeacher from "./Admin/ViewTeacher";
import ViewAssignment from "./Admin/ViewAssignment";
import ViewExam from "./Admin/ViewExam";



import StudNav from "./Start/StudNav";
import AdminNav from "./Start/AdminNav";
import HomeNav from "./Start/HomeNav";
import ViewTeacher from "./Admin/ViewTeacher";
import Registeacher from "./Admin/Registeacher";

import Editteacher1 from "./Admin/Editteacher1";
import Viewteacher1 from "./Admin/Viewteacher1";
import Contact from "./components/Contact";
import Reference from "./components/Reference";

import AdminLogout from "./Admin/AdminLogout";
import ViewAllAssignments from "./Student/ViewAllAssignments";
import StudentViewTimetable from "./Student/StudentViewTimetable";

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
       
       
        
         
       

          <Route path="/registeacher" element={<Registeacher />} />
      
          <Route path="/assignments" element={<ViewAssignment />} />
          <Route path="/createtimetable" element={<CreateTimetable />} />
          <Route path="/viewteacher" element={<ViewTeacher />} />
          
         
         
        
          <Route path="/technav" element={<TeachNav />} />
          <Route path="/studnav" element={<StudNav />} />
          <Route path="/adminnav" element={<AdminNav />} />
          <Route path="/homenav" element={<HomeNav />} />
          <Route path="/otp" element={<Otp/>} />

          <Route path="/viewteacher1/:id" element={<Viewteacher1 />} />
          <Route path="/editteacher1/:id" element={<Editteacher1/>} />

          <Route path="/register"element={isVerified ? <Register /> : <Navigate to="/otp" />}/>

          <Route path="/allstudents"element = { <AllStudents/>}/>
          <Route path="/create"element={ <CreateStudent />}/>  
  
          <Route path="/view/:id"element={ <View />}/>
          <Route path="/update/:id"element={ <Update/>}/>

          <Route path="/studentviewtimetable" element={<StudentViewTimetable />} />

          <Route path="/viewallassignments/:id"element={ <ViewAllAssignments/>}/>
         

          <Route path="/admin"element={<ProtectedRoute><Admin /></ProtectedRoute>}/>

          <Route path="/teacher"element={<ProtectedRoute><Teacher /></ProtectedRoute>}/>

          <Route path="/student"element={<ProtectedRoute><Student /></ProtectedRoute>}/>

        </Routes>  
      </div>
    </>
  );
};
export default App;