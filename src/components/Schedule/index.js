import React from 'react'
import Calendar from './Calendar'
import {SelectedCourses,CreditCount} from './SelectedCourses'
import Searcher from './Searcher'
import './index.css'
import { useSelector } from 'react-redux'
import COURSES from '../../data/courses.json'

const Timetable = () => {
  const selectedCourses = useSelector(state => state.selectedCourses.value)

  return (
    <div className="d-flex flex-row flex-grow-1">
      <Calendar 
        selectedCourses={selectedCourses} 
      />
    
      <div className="info-bar">
        <p className="o-title">Fall, 2021</p>

        <Searcher
          courses={COURSES}
        />

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
