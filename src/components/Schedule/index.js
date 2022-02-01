import React, {useRef} from 'react'
import Calendar from './Calendar'
import './index.scss'
import { selectCurrentCourseSelection } from '../../store/selectors'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'
import InfoBar from './InfoBar'

const Schedule = () => {
  const currentCourseSelection = useSelector(selectCurrentCourseSelection)
  const calendarRef = useRef()

  return (
    <div className='row w-100 m-0'>
      <Helmet>
        <title>OneSchedule</title>
      </Helmet>

      {/* COLLAPSABLE INFO BAR - FOR SMALL DEVICES */}
      <div className="d-lg-none d-block mb-3">
        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapsable-info-bar" aria-expanded="false" aria-controls="collapsable-info-bar">
          Edit schedule
        </button>
        <div className="collapse mt-3" id="collapsable-info-bar">
          <InfoBar
            selectedCourses={currentCourseSelection}
          />
        </div>
      </div>

      {/* CALENDAR  */}
      <div ref={calendarRef} className="col-lg-9">
        <Calendar
          selectedCourses={currentCourseSelection} 
        />
      </div>
      
      {/* PERSISTENT INFO BAR - FOR LARGE DEVICES */}
      <div className="d-lg-inline-block d-none col-3">
        <InfoBar
          selectedCourses={currentCourseSelection}
        />
      </div>
    </div>
  )
}

export default Schedule
