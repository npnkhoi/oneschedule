import React, {useRef} from 'react'
import Calendar from './Calendar'
import SelectedCourses from './SelectedCourses'
import Searcher from './Searcher'
import './index.css'
import { useSelector } from 'react-redux'
<<<<<<< HEAD
import COURSES from '../../data/courses.json'
import ExternalExporter from './ExternalExporter'
=======
import {COURSES} from '../../data/'
>>>>>>> 431eac6c159e5e7f363b110c22a9eddc636dd0e1

const Timetable = () => {
  const selectedCourses = useSelector(state => state.selectedCourses.value)

  const calendarRef = useRef();
  let CalendarComponent = (
    <div className="flex-grow-1">
      <div ref={calendarRef} className="flex-grow-1">
        <Calendar selectedCourses={selectedCourses}/>
      </div>
    </div>)
  return (
    <div className="d-flex flex-row flex-grow-1">
      {CalendarComponent}
      <div className="info-bar">
        <p className="o-title">Fall, 2021</p>

        <Searcher
          courses={COURSES}
        />

        <SelectedCourses
          selectedCourses={selectedCourses}
        />

        <ExternalExporter componentRef={calendarRef} />
      </div>
    </div>

      )
}

export default Timetable
