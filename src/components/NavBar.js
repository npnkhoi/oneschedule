import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import logoSVG from '../assets/Logo.svg'

const NavBtn = ({label, path, icon, currentView, setCurrentView}) => {
  return (
    <Link to={path} 
      className={`navbar-btn text-decoration-none align-self-stretch d-flex flex-column align-items-center p-2
        ${(currentView === label ? 'current' : '')}
      `}
      onClick={() => {setCurrentView(label)}}
    >
      <i className={`${icon} fa-2x mb-1`}/>
      <p >{label}</p>
    </Link>
  )
}

const Logo = () => (
  <Link to='/'>
    <img src={logoSVG} alt='bookmark with OneSchedule text on it' />
  </Link>
)

const NavBar = () => {
  const [currentView, setCurrentView] = useState('Schedule')
  
  return (
    <div className='wrapper d-flex flex-column align-items-center text-center sticky-top'>
      <Logo />
      <NavBtn label='Schedule' path='/' icon='far fa-calendar' setCurrentView={setCurrentView} currentView={currentView}/>
      <NavBtn label='Offerings' path='/courses' icon='far fa-list-alt' setCurrentView={setCurrentView} currentView={currentView}/>
      <NavBtn label='Contribute' path='/contribute' icon='far fa-star' setCurrentView={setCurrentView} currentView={currentView}/>
      <NavBtn label='Help' path='/help' icon='fas fa-question' setCurrentView={setCurrentView} currentView={currentView}/>
      <NavBtn label='About' path='/about' icon='fas fa-info' setCurrentView={setCurrentView} currentView={currentView}/>
    </div>
  )
}

export default NavBar
