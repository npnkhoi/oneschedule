const SelectedCourses = ({courses, isSelected, isVisible, toggleVisibility, toggleSelection}) => {
  return (
  <div className="mt-4 chosen-courses d-flex flex-column">
    {
      courses
      .filter((course) => isSelected(course.id))
      .map((course) => (
        <div className="selected-course d-flex flex-row justify-content-between align-items-center" key={course.id}> 
          <div className="selected-info flex-grow-1 ps-3 pe-2 d-flex flex-column">
            <div className="heading-2">{course.title}</div>
            <div className="selected-instructor mt-2">{course.instructor} ({course.id})</div>
          </div>

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