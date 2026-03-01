import React from 'react'
import { Link } from 'react-router-dom'
import TeachNav from '../Start/TeachNav'

const Leaves = () => {
  return (
    <div>
      <h1>Leaves</h1>
      <TeachNav/>
       <Link to="/teacher" className="btn btn-secondary mt-3">
              Back
            </Link>
    </div>
  )
}

export default Leaves
