import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBtn = ({label, path, icon}) => (
  <Link to={path} className='text-decoration-none align-self-stretch d-flex flex-column align-items-center p-2'>
    <i className={`fas fa-${icon} fa-3x`}/>
    <p >{label}</p>
  </Link>
)

const Logo = () => (
  <p className='fw-bold'>ONE SCHEDULE</p>
)

const NavBar = () => {
  return (
    <div className='wrapper d-flex flex-column align-items-center text-center'>
      <Logo />
      <NavBtn label='Timetable' path='/' icon='calendar-alt'/>
      <NavBtn label='Courses' path='/courses' icon='list-alt'/>
      <NavBtn label='Help' path='/help' icon='question'/>
      <NavBtn label='Contribute' path='/contribute' icon='star'/>
      <NavBtn label='About' path='/about' icon='info'/>
    </div>
  )
}

export default NavBar
