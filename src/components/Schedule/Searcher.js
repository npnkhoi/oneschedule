import {useEffect, useState} from 'react'

const Searcher = ({courses, isSelected, toggleSelection}) => {
  const [ filter, setFilter ] = useState('')
  const [ focusItem, setFocusItem ] = useState(0)

  let matchedCourses = []
  let nVisibleCourses = 0

  const handleArrowDown = () => {
    setFocusItem((focusItem + 1) % nVisibleCourses)
  }

  const handleArrowUp = () => {
    setFocusItem((focusItem + nVisibleCourses - 1) % nVisibleCourses)
  }

  const collapseSuggestions = () => {
    changeText("")
    document.getElementById('search-input').value = ""
  }

  const handleShortcuts = (event) => {
    if (event.key === 'Escape') {
      collapseSuggestions()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleShortcuts)

    return () => {
      window.removeEventListener('keydown', handleShortcuts)
    }
  })

  const changeText = (text) => {
    setFilter(text);
    setFocusItem(0);
  }

  const onInputChanged = (event) => {
    const text = event.target.value;
    changeText(text);
  }

  const onCourseToggle = (id) => {
    toggleSelection(id);
    collapseSuggestions()
  }

  const CourseInfo = (course) => {
    return (
      <div className="d-flex flex-row justify-content-between align-items-center">
        <div className="w-75 px-1">{course.title}</div>
        <div className="instructor-name w-25 px-1 border-left">{course.instructor}</div>
      </div>
    )
  }

  const CourseList = () => {
    matchedCourses = courses.filter((course) => 
      (course.title + "|" + course.instructor)
      .toLowerCase().includes(filter.toLowerCase())
    )

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
              ${isSelected(course.id) ? "heading-2" : ""}
              ${isFocused(course.id) ? "focus" : ""}
            `}
            onClick={() => onCourseToggle(course.id)}
            key={course.id}
          >
            {CourseInfo(course)}
          </button>
        )
    }
  }

  const isFocused = (id) => (matchedCourses[focusItem].id === id)

  return (
    <div className="filter">
      <input 
        className="form-control py-2" 
        id="search-input"
        placeholder="Add courses to schedule"
        autoComplete="off"
        onChange={onInputChanged} 
        onKeyDown={(event) => {
          // TODO: refactor
          if (event.key === 'ArrowUp') {
            handleArrowUp()
          } else if (event.key === 'ArrowDown') {
            handleArrowDown()
          } else if (event.key === 'Enter') {
            if (matchedCourses.length === 0) {
              return 
            }
            onCourseToggle(matchedCourses[focusItem].id)
          }
        }}
      />
      {
        filter !== "" ?
          <div className="selecting list-group shadow">
            <CourseList/>
            {/* <p className="list-group-item"> {matchedCourses.length} courses matched. </p> */}
          </div>
        : <></>
      }
    </div>
  )
}

export default Searcher