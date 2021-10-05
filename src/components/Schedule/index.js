import React, {useRef } from 'react'
import Calendar from './Calendar'
import {SelectedCourses, CreditCount} from './SelectedCourses'
import Searcher from './Searcher'
import './index.css'
import { selectCurrentCourseSelection } from '../../store/selectors'
import { useSelector } from 'react-redux'
import ExternalExporter from './ExternalExporter'
import TermSwitch from '../TermSwitch'
import { Helmet } from 'react-helmet'

const Timetable = () => {
  const currentCourseSelection = useSelector(selectCurrentCourseSelection)
  const calendarRef = useRef()
  
  return (
    <div className="d-flex flex-row flex-grow-1">
      <Helmet>
        <title>OneSchedule</title>
      </Helmet>
      <div ref={calendarRef} className="flex-grow-1">
        <Calendar
          selectedCourses={currentCourseSelection} 
        />
      </div>
      <div className="info-bar">
        
        <TermSwitch />

        <Searcher />

        <SelectedCourses 
          selectedCourses={currentCourseSelection}
        />

      <div className="row">
          <div className="col-6">
            <ExternalExporter
              className="calendar-exporter" 
              componentRef={calendarRef}
              selectedCourses={currentCourseSelection}>
            </ExternalExporter>
          </div>
          <div className="col-6">
            <div className="mt-2">
              <CreditCount 
                selectedCourses={currentCourseSelection}
              />
            </div>
            
          </div>
        </div>
        
      </div>
    </div>

  )
}

export default Timetable
