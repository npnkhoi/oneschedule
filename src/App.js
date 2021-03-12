import courses from './data/courses_v2'
import './App.css';
import React, { useState, useEffect } from 'react'

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
  const [ selectedCourses, setSelectedCourses ] = usePersistedState('selectedCourses', [])
  const [ filter, setFilter ] = useState('')

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

  const changeText = (event) => {
    const text = event.target.value;
    setFilter(text);
  }

  const CourseInfo = (course) => {
    return (
      <div className="d-flex flex-row justify-content-between align-items-center">
        <div className="w-75 px-1">{course.course_name}</div>
        <div className="instructor-name w-25 px-1 border-left">{course.instructor_name}</div>
      </div>
    )
  }

  let courseList = (null)
  if (filter !== "") {
    const matchedCourses = courses
    .filter((course) => (course.course_name + "|" + course.instructor_name).toLowerCase().includes(filter.toLowerCase()))


    if (matchedCourses.length === 0) {
      courseList = (<button className="list-group-item">No courses matched.</button>)
    } else {
      courseList = matchedCourses
        .map((course) => 
          <button 
            className={`
              px-0
              list-group-item ${isSelected(course.id) ? "active" : ""}
            `}
            onClick={() => toggleSelection(course.id)}
            key={course.id}
            data-bs-toggle="tooltip" data-bs-placement="right" 
            title={`[${course.id}] From ${course.start_time} to ${course.end_time} on ${course.days}`}
          >
            {CourseInfo(course)}
          </button>
        )
    }
  }


  return (
    <div className="App d-flex flex-column container">
      
      <div className="header w-100 flex-row"> 
        <h1 className="app-title ml-4" >FulCourse</h1>
      </div>

      <div className="main mt-4 d-flex flex-row justify-content-between">
        <Calendar selectedCourses={selectedCourses.filter(course => course.visible)} courses={courses}/>
        <div className="right-bar w-50">
          <div className="heading">Spring, 2021</div>
          <input 
            className="form-control py-4" 
            id="search-input"
            onChange={changeText} 
            placeholder="Add course to timetable"
            onKeyDown={(event) => {
              if ( event.key === 'Escape' ) {
                setFilter("")
                document.getElementById('search-input').value = ""
              }
            }}
          />

          <div className="info w-100">
            <div className="selecting course-list list-group border rounded shadow">
              {courseList}
            </div>
            <div className="mt-4 chosen-courses d-flex flex-column">
              {
                courses
                .filter((course) => isSelected(course.id))
                .map((course) => (
                  <div className="selected d-flex flex-row justify-content-between align-items-center" key={course.id}> 
                    <div className="flex-grow-1 px-2">{course.course_name}</div>

                    <div className="toggle-btns d-flex flew-row">
                      <button 
                        className="btn"
                        onClick={() => toggleVisibility(course.id)}
                      >
                        {isVisible(course.id) ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
                        
                      </button>

                      <button 
                        className="btn"
                        onClick={() => toggleSelection(course.id)}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
