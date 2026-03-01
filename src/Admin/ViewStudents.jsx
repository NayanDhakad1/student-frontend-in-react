import React from 'react'
import { Link } from 'react-router-dom'
import View from '../components/View'
import AllStudents from '../components/allstudents'

const ViewStudents = () => {
  return (
    <div>
      <AllStudents/>

       <Link to="/admin" className="btn btn-secondary mt-3">
              Back Admin Dashboard
            </Link>
    </div>
  )
}

export default ViewStudents
