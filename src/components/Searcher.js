import courses from '../data/courses_v2'
import {useEffect, useState} from 'react'

const Searcher = ({isSelected, toggleSelection}) => {
  const [ filter, setFilter ] = useState('')
  const [ focusItem, setFocusItem ] = useState(0)

  let matchedCourses = []
  let nVisibleCourses = 0

  const handleArrowDown = () => {
    setFocusItem((focusItem + 1) % nVisibleCourses)
    console.log('down', nVisibleCourses, focusItem)
  }

  const handleArrowUp = () => {
    setFocusItem((focusItem + nVisibleCourses - 1) % nVisibleCourses)
    console.log('up', nVisibleCourses, focusItem)
  }

  useEffect(() => {
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        setFilter("")
        document.getElementById('search-input').value = ""
      }
    })
  })

  const changeText = (event) => {
    const text = event.target.value;
    setFilter(text);
  }

  // const fieldRef = useRef<HTMLInputElement>(null);
  // const fieldRef2 = useRef<HTMLInputElement>(null);

  const CourseInfo = (course) => {
    return (
      <div className="d-flex flex-row justify-content-between align-items-center">
        <div className="w-75 px-1">{course.course_name}</div>
        <div className="instructor-name w-25 px-1 border-left">{course.instructor_name}</div>
      </div>
    )
  }

  const CourseList = () => {
    matchedCourses = courses.filter((course) => 
      (course.course_name + "|" + course.instructor_name)
      .toLowerCase().includes(filter.toLowerCase())
    )

    console.log('matched courses:', matchedCourses);

    if (matchedCourses.length === 0) {
      return (<button className="list-group-item">No courses matched.</button>)
    } else {
      nVisibleCourses = Math.min(5, matchedCourses.length)
      return matchedCourses
        .slice(0, nVisibleCourses)
        .map((course) => 
          <button 
            className={`
              px-0 list-group-item 
              ${isSelected(course.id) ? "selected" : ""}
              ${isFocused(course.id) ? "focus" : ""}
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

  console.log('matched courses before focus: ', matchedCourses);
  const isFocused = (id) => (matchedCourses[focusItem].id === id)

  return (
    <div class="filter">
      <input 
        className="form-control py-4" 
        id="search-input"
        onChange={changeText} 
        placeholder="Add course to timetable"
        onKeyDown={(event) => {
          if (event.key === 'ArrowUp') {
            handleArrowUp()
          } else if (event.key === 'ArrowDown') {
            handleArrowDown()
          } else if (event.key === 'Enter') {
            if (matchedCourses.length === 0) {
              return 
            }
            toggleSelection(matchedCourses[focusItem].id)
          }
        }}
      />
      {
        filter !== "" ?
          <div className="selecting list-group border rounded shadow">
            <CourseList/>
            {/* <p className="list-group-item"> {matchedCourses.length} courses matched. </p> */}
          </div>
        : <></>
      }
    </div>
  )
}

export default Searcher