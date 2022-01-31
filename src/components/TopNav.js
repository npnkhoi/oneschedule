import { Link, useLocation } from "react-router-dom"

const NavLink = ({label, path, icon}) => {
    const location = useLocation()
    
    // Detect current view for highlighting
    const currentView = location.pathname.split('/')[1]
  
    return (
      <Link to={path} 
        className={`navbar-btn d-flex flex-row align-items-center text-decoration-none p-2 flex-grow-1
          ${('/' + currentView === path ? 'current' : '')} text-white
        `}
      >
        <i className={`${icon} fa me-2`}/>
        <span>{label}</span>
      </Link>
    )
  }
  

const TopNav = () => {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link to='/' className="navbar-brand">Certainty</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav">
                    <NavLink label='Schedule' path='/' icon='far fa-calendar'/>
                    <NavLink label='Courses' path='/courses' icon='fas fa-book-open'/>
                    <NavLink label='More' path='/about' icon='fas fa-bars'/>
                    {/* <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Disabled</a>
                    </li> */}
                </div>
            </div>
        </div>
    </nav>
}

export default TopNav