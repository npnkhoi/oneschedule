import courses from '../data/courses_v2'
import React, { useState, useEffect } from 'react'
import Calendar from './Calendar'
import SelectedCourses from './SelectedCourses'
import Searcher from './Searcher'
import {toast} from 'react-toastify'

function usePersistedState(key, defaultValue) {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(key)) || defaultValue
  );
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}

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
    // TODO: reconsider the interval
    if (toggleCount > 0 && toggleCount % 10 === 0) {
      toast.info(`Wowww, you have interacted ${toggleCount} times with OneSchedule. Wanna support me? Click the burger button at the top-right corner and "buy me a coffee"`, {
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
