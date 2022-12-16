import { Link, useLocation } from "react-router-dom"
import TermSwitch from '../utils/TermSwitch'
import './TopNav.scss'

interface NavLinkProps {
  label: string,
  path: string,
  icon: string,
  isNew?: boolean
}

const NavLink = ({label, path, icon, isNew}: NavLinkProps) => {
    const location = useLocation()
    
    // Detect current view for highlighting
    const isCurrentView = ('/' + location.pathname.split('/')[1]) === path

    const RedDot = () => {
      const styles = {
        width: 12,
        height: 12,
        top: -5
      }
      return (
        <div 
          style={styles} 
          className='rounded-circle bg-secondary color-red-300 position-relative'
        />
      )
    }

    return (
      <Link to={path}
        className={`nav-item nav-link text-decoration-none p-2 me-3
          ${(isCurrentView ? 'active' : '')}
        `}
      >
        <div className="d-flex flex-row align-items-center">
          <i className={`${icon} fa me-2 nav-icon text-center`}/>
          <span>{label}</span>
          {isNew ? <RedDot /> : null}
        </div>
      </Link>
    )
  }
  

const TopNav = () => {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
            <Link to='/' className="navbar-brand">OneSchedule</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav">
                    <NavLink label='Schedule' path='/' icon='far fa-calendar'/>
                    <NavLink label='Courses' path='/courses' icon='fas fa-book-open'/>
                    <NavLink label='Contribute' path='/contribute' icon='fas fa-star' isNew/>
                    <NavLink label='About' path='/about' icon='fas fa-info'/>
                    <div className="nav-item">
                      <TermSwitch />
                    </div>
                </div>
            </div>
        </div>
    </nav>
}

export default TopNav