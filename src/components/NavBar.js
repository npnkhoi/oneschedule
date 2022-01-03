import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './NavBar.scss'
import logoVertical from '../assets/VerticalLogo.svg'
import logoHorizontal from '../assets/HorizontalLogo.svg'



const NavBtn = ({label, path, icon}) => {
  const location = useLocation()
  
  // Detect current view for highlighting
  const currentView = location.pathname.split('/')[1]

  return (
    <Link to={path} 
      className={`navbar-btn d-flex flex-column align-items-center 
       text-decoration-none p-2 flex-grow-1
        ${('/' + currentView === path ? 'current' : '')}
      `}
    >
      <i className={`${icon} fa-2x mb-1 nav-icon`}/>
      <p className='d-none d-md-block'>{label}</p>
    </Link>
  )
}

const ExternalNavBtn = ({label, url, icon}) => {
  // TODO: Consider remove the changing icon, because mobile users cannot see the changes
  const externalIcon = 'fas fa-external-link-alt'
  const [currentIcon, setCurrentIcon] = useState(icon)

  return (
    <a href={url}
      onMouseEnter={() => setCurrentIcon(externalIcon)}
      onMouseLeave={() => setCurrentIcon(icon)}
      className="navbar-btn d-flex flex-column align-items-center p-2 
      text-decoration-none flex-grow-1"

    >
      <i className={`${currentIcon} fa-2x mb-1 nav-icon`}/>
      <p className='d-none d-md-block'>{label}</p>
    </a>
  )
}

const Logo = () => (
  <Link to='/'>
    <img className="d-none d-md-block w-100" src={logoVertical} alt='Bookmark with OneSchedule text on it' />
    <img className="d-block d-md-none h-logo" src={logoHorizontal} alt='Bookmark with OneSchedule text on it' />
  </Link>
)

const NavBar = () => {
  return (
    <div className='wrapper d-flex flex-row justify-content-start align-items-center sticky-top text-center
      flex-md-column'>
      <Logo />
      
      <div className='d-flex flex-row
        flex-md-column flex-md-grow-0 
        justify-content-around flex-grow-1'>
        <NavBtn label='Schedule' path='/' icon='far fa-calendar'/>
        <NavBtn label='Offerings' path='/courses' icon='far fa-list-alt'/>
        <NavBtn label='Contribute' path='/contribute' icon='far fa-star'/>
        <NavBtn label='About' path='/about' icon='fas fa-info'/>
        <ExternalNavBtn label='Updates' icon='fas fa-external-link-alt'
          url='https://npnkhoi.notion.site/OneSchedule-Updates-c3ce635ee748488a9fa33ecb925e3bdb' 
        />
      </div>
    </div>
  )
}

export default NavBar
