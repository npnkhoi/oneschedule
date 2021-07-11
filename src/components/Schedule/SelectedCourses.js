import { TwitterPicker } from "react-color"
import COLORS from '../../data/colors.json'
import { useState } from "react"
import { setColor } from "../../store/colorMapSlice"
import { useDispatch, useSelector } from "react-redux"

const ColorPicker = ({courseId}) => {
  const [changing, setChanging] = useState(false)
  const color = useSelector(state => state.colorMap.value[courseId])
  const dispatch = useDispatch()

  const changeColor = (color) => {
    // console.log('changing color', color);
    dispatch(setColor({courseId, color: color.hex}))   
    setChanging(false)
  }

  return (
    <div className='color-btn rounded flex-shrink-0 me-2'
      onClick={() => {
        if (!changing) {
          setChanging(!changing)
        }
      }}
      style={({backgroundColor: color})}
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
        <div className="selected-course d-flex flex-row justify-content-between align-items-start" key={course.id}> 
          <div className="selected-info flex-grow-1 d-flex flex-column">
            <div className="heading-2">{course.id} | {course.title}</div>
            <div className='d-flex flex-row align-items-start mt-2'>
              <ColorPicker courseId={course.id}/>
              <div className="selected-instructor">{course.instructor}</div>
            </div>
          </div>

          <div className="toggle-btns d-flex flex-row">
            <div 
              className="btn"
              onClick={() => toggleVisibility(course.id)}
            >
              {isVisible(course.id) ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
            </div>
            <div 
              className="btn"
              onClick={() => toggleSelection(course.id)}
            >
              <i className="fas fa-trash"></i>
            </div>
          </div>
        </div>
      ))
    }
  </div>
  )
}

export default SelectedCourses