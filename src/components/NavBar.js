import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './NavBar.css'
import logoSVG from '../assets/Logo.svg'

const NavBtn = ({label, path, icon}) => {
  const location = useLocation()
  
  // Detect current view for highlighting
  const currentView = location.pathname.split('/')[1]

  return (
    <Link to={path} 
      className={`navbar-btn d-flex flex-column align-items-center p-2 text-decoration-none 
        ${('/' + currentView === path ? 'current' : '')}
      `}
    >
      <i className={`${icon} fa-2x mb-1`}/>
      <p className='d-none d-xl-block'>{label}</p>
    </Link>
  )
}

const ExternalNavBtn = ({label, url, icon}) => {
  const externalIcon = 'fas fa-external-link-alt'
  const [currentIcon, setCurrentIcon] = useState(icon)

  return (
    <a href={url} target='_blank' rel="noreferrer"
      onMouseEnter={() => setCurrentIcon(externalIcon)}
      onMouseLeave={() => setCurrentIcon(icon)}
      className="navbar-btn d-flex flex-column align-items-center p-2 text-decoration-none"

    >
      <i className={`${currentIcon} fa-2x mb-1`}/>
      <p className='d-none d-xl-block'>{label}</p>
    </a>
  )
}

const Logo = () => (
  <Link to='/'>
    <img className="d-none d-xl-block" src={logoSVG} alt='Bookmark with OneSchedule text on it' />
  </Link>
)

const NavBar = () => {
  return (
      <div className='wrapper d-flex flex-row flex-lg-column align-items-center text-center 
              justify-content-between justify-content-lg-start px-5 px-lg-0 sticky-top'>
        <Logo />
        <NavBtn label='Schedule' path='/' icon='far fa-calendar'/>
        <NavBtn label='Offerings' path='/courses' icon='far fa-list-alt'/>
        <NavBtn label='Contribute' path='/contribute' icon='far fa-star'/>
        <NavBtn label='About' path='/about' icon='fas fa-info'/>
        <ExternalNavBtn label='Updates' icon='fas fa-bell'
          url='https://npnkhoi.notion.site/OneSchedule-Updates-c3ce635ee748488a9fa33ecb925e3bdb' 
        />
        </div>
  )
}

export default NavBar
