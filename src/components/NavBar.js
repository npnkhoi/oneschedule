import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import logoSVG from '../assets/Logo.svg'

const NavBtn = ({label, path, icon}) => (
  <Link to={path} className='nav-btn text-decoration-none text-muted align-self-stretch d-flex flex-column align-items-center p-2'>
    <i className={`${icon} fa-2x mb-1`}/>
    <p >{label}</p>
  </Link>
)

const Logo = () => (
  <img src={logoSVG} alt='bookmark with OneSchedule text on it' />
)

const NavBar = () => {
  return (
    <div className='wrapper d-flex flex-column align-items-center text-center'>
      <Logo />
      <NavBtn label='Timetable' path='/' icon='far fa-calendar'/>
      <NavBtn label='Courses' path='/courses' icon='far fa-list-alt'/>
      <NavBtn label='Contribute' path='/contribute' icon='far fa-star'/>
      <NavBtn label='Help' path='/help' icon='fas fa-question'/>
      <NavBtn label='About' path='/about' icon='fas fa-info'/>
    </div>
  )
}

export default NavBar
