import courses from '../data/courses_v2'

const Searcher = ({isSelected, toggleSelection, setFilter, filter}) => {
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
    <div class="filter">
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
      <div className="selecting course-list list-group border rounded shadow">
        {courseList}
      </div>
    </div>
  )
}

export default Searcher