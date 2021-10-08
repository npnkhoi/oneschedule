import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './NavBar.css'
import logoVertical from '../assets/Logo-Vertical.svg'
import logoHorizontal from '../assets/Logo-Horizontal-full.svg'



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
      <i className={`${icon} d-none d-md-block fa-2x mb-1`}/>
      <p className='d-block d-md-none d-xl-block'>{label}</p>
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
      <i className={`${currentIcon} d-none d-md-block fa-2x mb-1`}/>
      <p className='d-block d-md-none d-xl-block'>{label}</p>
    </a>
  )
}

const Logo = () => (
  <Link to='/'>
    <img className="d-none d-xl-block" src={logoVertical} alt='Bookmark with OneSchedule text on it' />
    <img className="d-block d-lg-none" src={logoHorizontal} alt='Bookmark with OneSchedule text on it' />
  </Link>
)

const NavBar = () => {
  return (
    <div className='wrapper d-flex flex-column flex-md-row flex-lg-column text-center
            justify-content-start px-lg-0 sticky-top'>
      <div className='d-flex flex-row'>
        <Logo />
        
        <div className="d-block d-md-none align-self-strech me-4 ms-auto mt-3 o-heading" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#collapseNav" aria-expanded="false" aria-controls="collapseNav">
          <i className="fas fa-bars"></i>
        </div>
      </div>
      
      <div className="collapse d-md-flex flex-lg-column flex-grow-1 flex-lg-grow-0 
                align-items-center justify-content-around px-4 px-lg-0 pt-2 pt-md-0" id="collapseNav">
        <NavBtn label='Schedule' path='/' icon='far fa-calendar'/>
        <NavBtn label='Offerings' path='/courses' icon='far fa-list-alt'/>
        <NavBtn label='Contribute' path='/contribute' icon='far fa-star'/>
        <NavBtn label='About' path='/about' icon='fas fa-info'/>
        <ExternalNavBtn label='Updates' icon='fas fa-bell'
          url='https://npnkhoi.notion.site/OneSchedule-Updates-c3ce635ee748488a9fa33ecb925e3bdb' 
        />
      </div>

    </div>
  )
}

export default NavBar
