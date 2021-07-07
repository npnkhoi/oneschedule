import { TwitterPicker } from "react-color"
import COLORS from '../../data/colors.json'
import { useState } from "react"
import { getColor, setColor } from "../../utils/colors"

const ColorPicker = ({courseId}) => {
  const [changing, setChanging] = useState(false)
  
  const changeColor = (color) => {
    setColor(courseId, color.hex);
  }

  return (
    <div className='color-btn rounded flex-shrink-0 me-2'
      onClick={() => setChanging(!changing)}
      style={({backgroundColor: getColor(courseId).background})}
    >
      <div className='color-picker position-relative'>
        {changing 
        ? 
          <TwitterPicker
            colors={COLORS}
            onChangeComplete={changeColor}
          />
        : <div></div>
        }
      </div>
    </div>
  )
}

const SelectedCourses = ({courses, isSelected, isVisible, toggleVisibility, toggleSelection}) => {
  return (
  <div className="mt-4 chosen-courses d-flex flex-column">
    {
      courses
      .filter((course) => isSelected(course.id))
      .map((course) => (
        <div className="selected-course d-flex flex-row justify-content-between align-items-center" key={course.id}> 
          <div className="selected-info flex-grow-1 d-flex flex-column">
            <div className="heading-2">{course.title}</div>
            <div className='d-flex flex-row align-items-start mt-2'>
              <ColorPicker courseId={course.id} />
              <div className="selected-instructor">{course.instructor} ({course.id})</div>
            </div>
          </div>

          <div className="toggle-btns d-flex flex-column">
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