import React from 'react'
import { Link } from 'react-router-dom'

const ViewAssignment = () => {
  return (
    <div>
      <h1>View Assignment</h1>
       <Link to="/admin" className="btn btn-secondary mt-3">
                    Back
                  </Link>
    </div>
  )
}

export default ViewAssignment
