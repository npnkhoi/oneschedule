import {React, useState} from 'react'
import Calendar from './Calendar'
import './index.css'
import { selectCurrentCourseSelection } from '../../store/selectors'
import { useSelector } from 'react-redux'
import TermSwitch from '../TermSwitch'
import InfoBar from './InfoBar'
import { Helmet } from 'react-helmet'

const Timetable = () => {
  const [isOpen, setIsOpen] = useState(true)

  const currentCourseSelection = useSelector(selectCurrentCourseSelection)

  const InfoBarCollapse = () => {
    return (
      <div type="button"
        // className='info-bar-btn btn btn-outline-primary py-0 px-1 d-block d-xl-none'
        className='info-bar-btn btn btn-outline-primary py-0 px-1'
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fas fa-arrows-alt-h"></i>
      </div>  
    )
  }

  return (
    <div>
      <Helmet>
        <title>OneSchedule</title>
      </Helmet>
    
      {/* <div className="d-flex flex-column align-items-center"> */}
      <div className="d-flex flex-column">
        <div className="d-flex flex-column align-items-center d-lg-none d-md-block">
          <TermSwitch />
        </div>
      
        <div className="d-flex flex-row flex-grow-1">          
          <Calendar 
            selectedCourses={currentCourseSelection} 
          />
          
          {isOpen ?
            <InfoBar 
              selectedCourses={currentCourseSelection}
            />
          : null }
          
        </div>
      </div>
      
      <InfoBarCollapse/>
    </div>
  )
}

export default Timetable
