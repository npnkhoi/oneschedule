import courses from './data/courses'
import './App.css';
import React, { useState, useEffect } from 'react'

import Tools from './components/Tools'
import Calendar from './components/Calendar'

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
  const [ chosenCourses, setChosenCourses ] = usePersistedState('chosenCourses', [])
  const [ filter, setFilter ] = useState('')

  const chooseCourse = (id) => {
    if (chosenCourses.includes(id)) {
      setChosenCourses(chosenCourses.filter(course => course !== id));
    } else {
      setChosenCourses([...chosenCourses, id]);
    }
  } 

  return (
    <div className="App d-flex container">
      <div className="left-bar">
        <h1 className="app-title" >FulCourse</h1>
        <Tools setChosenCourses={setChosenCourses} setFilter={setFilter}/>

        <div className="courses list-group mr-4">
          { 
            courses
            .filter((course) => course.name.toLowerCase().includes(filter.toLowerCase()))
            .map((course) => 
              <button 
                className={`list-group-item ${chosenCourses.includes(course.id) ? "active" : ""}`}
                onClick={() => chooseCourse(course.id)}
                key={course.id}
              >
                {course.name}
              </button>
            )
          }
        </div>
      </div>
      <Calendar chosenCourses={chosenCourses} courses={courses}/>
    </div>
  );
}

export default App;
