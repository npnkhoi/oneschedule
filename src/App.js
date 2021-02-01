import courses from './data/courses.json'
import './App.css';
import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';

function App() {
  const [ chosenCourses, setChosenCourses ] = useState([])
  const dayId = {
    'Sunday': 0,
    'Monday': 1,
    'Tuesday': 2,
    'Wednesday': 3,
    'Thursday': 4, 
    'Friday': 5,
    'Saturday': 6
  }
  const chooseCourse = (id) => {
    if (chosenCourses.includes(id)) {
      setChosenCourses(chosenCourses.filter(course => course !== id));
    } else {
      setChosenCourses([...chosenCourses, id]);
    }
  } 

  return (
    <div className="App d-flex container">
      <div class="left-bar">
        <h1>Fulcourse</h1>
        <div className="courses list-group mr-2">
          { 
            courses.slice(0, 9).map((course) => 
              <button 
                className={`list-group-item ${chosenCourses.includes(course.id) ? "active" : ""}`}
                onClick={() => chooseCourse(course.id)}
                key={course.id}
              >
                {course.id}
              </button>
            )
          }
        </div>
      </div>
      <div class="calendar">
        <FullCalendar
          plugins={[ timeGridPlugin ]}
          initialView="timeGridWeek"
          events= {courses
            .filter(course => chosenCourses.includes(course.id))
            .map(course => ({
              title: course.id,
              startTime: course.start_time,
              endTime: course.end_time,
              daysOfWeek: course.days.split(/[ ,]+/).map(day => dayId[day])
            }))
          }
        />
      </div>
    </div>
  );
}

export default App;
