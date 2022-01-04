import React, {useRef} from 'react'
import Calendar from './Calendar'
import './index.scss'
import { selectCurrentCourseSelection } from '../../store/selectors'
import { useSelector } from 'react-redux'
import TermSwitch from '../TermSwitch'
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

      {/* TERMSWITCHER AND COLLAPSABLE INFO BAR - FOR SMALL DEVICES */}
      <div className="d-flex d-md-none flex-column align-items-center">
        <TermSwitch />
      </div>
      <p className="d-md-none d-block">
        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          Edit schedule
        </button>
        <div className="collapse mt-3" id="collapseExample">
          <div className="card card-body">
            <InfoBar
              selectedCourses={currentCourseSelection}
            />
          </div>
        </div>
      </p>

      {/* CALENDAR  */}
      <div ref={calendarRef} className="col-md-9">
        <Calendar
          selectedCourses={currentCourseSelection} 
        />
      </div>
      
      {/* PERSISTENT INFO BAR - FOR LARGE DEVICES */}
      <div className="d-md-inline-block d-none col-3">
        <InfoBar
          selectedCourses={currentCourseSelection}
        />
      </div>
    </div>
  )
}

export default Schedule
