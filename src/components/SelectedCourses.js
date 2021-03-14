const SelectedCourses = ({courses, isSelected, isVisible, toggleVisibility, toggleSelection}) => {
  return (
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
  )
}

export default SelectedCourses