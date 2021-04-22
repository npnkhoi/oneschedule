import courses from './data/courses_v2'
import './App.css';
import React, { useState, useEffect } from 'react'
import Calendar from './components/Calendar'
import Searcher from './components/Searcher'
import Help from './components/Help'
import SelectedCourses from './components/SelectedCourses'
import { CSSTransitionGroup } from 'react-transition-group'

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
  const [showHelp, setShowHelp] = useState(false)
  const toggleHelp = () => {setShowHelp(!showHelp)}

  return (
    <div className="App d-flex flex-column">
      
      {/* Header */}
      <div className="header w-100 d-flex flex-row justify-content-between pl-4"> 
        <h1 className="app-title" >OneSchedule</h1>
        <button className="btn burger" onClick={toggleHelp}>
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Main */}
      <div className="main mt-4 mx-4 d-flex flex-row justify-content-between">

        <div className="d-flex flex-row flex-grow-1">
          <Calendar 
            selectedCourses={selectedCourses.filter(course => course.visible)} 
            courses={courses}
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

        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {showHelp ? <Help key="x"/> : <></>}
        </CSSTransitionGroup>
      </div>
    </div>
  );
}
export default App;
