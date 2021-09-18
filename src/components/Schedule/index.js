import React, { useEffect } from 'react'
import Calendar from './Calendar'
import SelectedCourses from './SelectedCourses'
import Searcher from './Searcher'
import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import {COURSES} from '../../data/'
import { toggleSelection } from '../../store/selectedCoursesSlice'

const Timetable = () => {
  const selectedCourses = useSelector(state => state.selectedCourses.value)
  const dispatch = useDispatch()

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
      </div>
    </div>

  )
}

export default Timetable
