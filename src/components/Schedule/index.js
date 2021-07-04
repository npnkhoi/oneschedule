import courses from '../../data/courses.json'
import React, { useState } from 'react'
import Calendar from './Calendar'
import SelectedCourses from './SelectedCourses'
import Searcher from './Searcher'
import {toast} from 'react-toastify'
import { usePersistedState } from '../../hooks'

const Timetable = () => {
  const [ selectedCourses, setSelectedCourses ] = usePersistedState('selectedCourses', [])
  const [ scheduleOverlap, setScheduleOverlap ] = useState(false)
  const [toggleCount, setToggleCount] = usePersistedState('toggleCount', 0)
  
  const isSelected = (courseId) => (selectedCourses.filter((course) => course.id === courseId).length > 0);
  const isVisible = (courseId) => {
    const val = selectedCourses.filter((course) => course.id === courseId)
    return (val.length > 0 && val[0].visible)
  }
  const toggleSelection = (id) => {
    if (isSelected(id)) {
      setSelectedCourses(selectedCourses.filter(course => course.id !== id));
    } else {
      setSelectedCourses([...selectedCourses, {id: id, visible: true}]);
    }
    if (toggleCount > 0 && toggleCount % 50 === 0) {
      toast.info(`Hi! You have interacted ${toggleCount} times with OneSchedule. Let's contribute to us in the Contribute tab`, {
        autoClose: false
      })
    }
    setToggleCount(toggleCount + 1)
  }
  const toggleVisibility = (id) => {
    setSelectedCourses(selectedCourses.map(
      course => (course.id === id ? {...course, visible: !course.visible} : course)
    ))
  }

  return (
    <div className="d-flex flex-row flex-grow-1">
      <Calendar 
        selectedCourses={selectedCourses.filter(course => course.visible)} 
        courses={courses}
        scheduleOverlap={scheduleOverlap}
        setScheduleOverlap={setScheduleOverlap}
      />
    
      <div className="right-bar">
        <div className="heading-1">Spring, 2021</div>

        <Searcher
          isSelected={isSelected}
          toggleSelection={toggleSelection}
        />

        <SelectedCourses 
          courses={courses} 
          isSelected={isSelected}
          isVisible={isVisible}
          toggleVisibility={toggleVisibility}
          toggleSelection={toggleSelection}
        />
      </div>
    </div>

  )
}

export default Timetable
