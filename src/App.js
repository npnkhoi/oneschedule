import courses from './data/courses_v2'
import './App.css';
import React, { useState, useEffect } from 'react'
import Calendar from './components/Calendar'
import Searcher from './components/Searcher'
import SelectedCourses from './components/SelectedCourses'

function usePersistedState(key, defaultValue) {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(key)) || defaultValue
  );
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}

function App() {
  const [ selectedCourses, setSelectedCourses ] = usePersistedState('selectedCourses', [])
  
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
  }
  const toggleVisibility = (id) => {
    setSelectedCourses(selectedCourses.map(
      course => (course.id === id ? {...course, visible: !course.visible} : course)
    ))
}
  const [ filter, setFilter ] = useState('')

  return (
    <div className="App d-flex flex-column container">
      
      <div className="header w-100 flex-row"> 
        <h1 className="app-title ml-4" >FulCourse</h1>
      </div>

      <div className="main mt-4 d-flex flex-row justify-content-between">
        <Calendar 
          selectedCourses={selectedCourses.filter(course => course.visible)} 
          courses={courses}
        />
      
        <div className="right-bar w-50">
          <div className="heading">Spring, 2021</div>

          <Searcher 
            isSelected={isSelected}
            toggleSelection={toggleSelection}
            filter={filter}
            setFilter={setFilter}
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

    </div>
  );
}
export default App;
