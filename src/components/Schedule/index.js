import React, { useEffect, useRef } from 'react'
import Calendar from './Calendar'
import {SelectedCourses, CreditCount} from './SelectedCourses'
import Searcher from './Searcher'
import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import {COURSES} from '../../data/'
import { toggleSelection } from '../../store/selectedCoursesSlice'
import ExternalExporter from './ExternalExporter'

const Timetable = () => {
  const selectedCourses = useSelector(state => state.selectedCourses.value);
  const dispatch = useDispatch();
  const calendarRef = useRef();
  useEffect(() => {
    // FIXME: This is just a clean up, and cannot replace a proper check
    selectedCourses.forEach(course => {
      if (COURSES.filter(c => c.id === course.id).length == 0) {
        dispatch(toggleSelection({id: course.id}))
      }
    })
  })

  
  return (
    <div className="d-flex flex-row flex-grow-1">
      <div ref={calendarRef} className="flex-grow-1">
        <Calendar selectedCourses={selectedCourses}/>
      </div>
      <div className="info-bar">
        <p className="o-title">Fall, 2021</p>
        <Searcher
          courses={COURSES}
        />

        <div className="row">
          <div className="col-6">
            <ExternalExporter
              className="calendar-exporter" 
              componentRef={calendarRef}
              selectedCourses={selectedCourses}>
            </ExternalExporter>
          </div>
          <div className="col-5">
          </div>
        </div>

        <SelectedCourses
          selectedCourses={selectedCourses}
        />

        <CreditCount 
          selectedCourses={selectedCourses}
        />
      </div>
    </div>

      )
}

export default Timetable
