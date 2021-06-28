import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {

  return (
    <div className='wrapper d-flex flex-column flex-shrink-1'>
      <button className="btn btn-light">
        <Link to='/'>Timetable</Link>
      </button>
      
      <button className="btn btn-light">
        <Link to='/offerings'>Courses</Link>
      </button>
    </div>
  )
}

export default NavBar
