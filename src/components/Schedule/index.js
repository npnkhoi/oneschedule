import React, { useEffect } from 'react'
import Calendar from './Calendar'
import {SelectedCourses, CreditCount} from './SelectedCourses'
import Searcher from './Searcher'
import './index.css'
import { selectTerm } from '../../store/selectors'
import { useDispatch, useSelector } from 'react-redux'
import {COURSES} from '../../data/'
import { toggleSelection } from '../../store/selectedCoursesSlice'

const TermSwitch = () => {
  const term = useSelector(selectTerm)
  return <p className="o-title">{term}</p>
}

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
        
        <TermSwitch />

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
