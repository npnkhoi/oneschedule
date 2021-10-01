import React from 'react'
import Calendar from './Calendar'
import './index.css'
import { selectCurrentCourseSelection } from '../../store/selectors'
import { useSelector } from 'react-redux'
import TermSwitch from '../TermSwitch'
import InfoBar from './InfoBar'
import { Helmet } from 'react-helmet'

const Timetable = () => {
  const currentCourseSelection = useSelector(selectCurrentCourseSelection)

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

          <InfoBar 
            courses={currentCourseSelection}
          />
        </div>
      </div>
    </div>
  )
}

export default Timetable
