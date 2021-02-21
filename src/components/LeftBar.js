import Tools from './Tools'
import './LeftBar.css'

const LeftBar = ({chosenCourses, setChosenCourses, filter, setFilter, courses, chooseCourse}) => {
  return (
    <div className="left-bar d-flex flex-column align-items-center mr-4">
      <h1 className="app-title" >FulCourse</h1>
      <Tools setChosenCourses={setChosenCourses} setFilter={setFilter}/>
      <div className="course-list list-group border rounded shadow">
        { 
          courses
          .filter((course) => course.name.toLowerCase().includes(filter.toLowerCase()))
          .map((course) => 
            <button 
              className={`
                list-group-item ${chosenCourses.includes(course.id) ? "active" : ""}
                flex flex-row
              `}
              onClick={() => chooseCourse(course.id)}
              key={course.id}
              data-bs-toggle="tooltip" data-bs-placement="right" 
              title={`[${course.id}] From ${course.start_time} to ${course.end_time} on ${course.days}`}
            >
              <div>{course.name}</div>
              {/* <FontAwesomeIcon icon="star"/> */}
            </button>
          )
        }
    </div>
  </div>
  )
}

export default LeftBar