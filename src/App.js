import courses from './data/courses'
import './App.css';
import React, { useState, useEffect } from 'react'

import Calendar from './components/Calendar'
import LeftBar from './components/LeftBar'
import Footer from './components/Footer'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faStar } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// library.add(faStar)

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
      <LeftBar
        chosenCourses={chosenCourses}
        setChosenCourses={setChosenCourses}
        filter={filter}
        setFilter={setFilter}
        courses={courses}
        chooseCourse={chooseCourse}
      />
      <Calendar chosenCourses={chosenCourses} courses={courses}/>
      <Footer/>
    </div>
  );
}

export default App;
