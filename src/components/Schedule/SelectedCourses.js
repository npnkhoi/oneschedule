import { TwitterPicker } from "react-color"
import {COLORS} from '../../data/'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { setColor, toggleSelection, toggleVisibility } from "../../store/selectedCoursesSlice"
import { getCourse } from "../../utils/course"
import './SelectedCourses.scss'


const ColorPicker = ({courseId}) => {
  const [changing, setChanging] = useState(false)
  const color = useSelector(state => state.selectedCourses.value
    .filter(course => course.id === courseId)[0].color)
  const dispatch = useDispatch()

  const changeColor = (color) => {
    dispatch(setColor({id: courseId, color: color.hex}))   
    setChanging(false)
  }
  return (
    <div className='me-2'>
      <div className="dropdown">
      <button className="btn dropdown-toggle float-left" style={({backgroundColor: color})}
        type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
        onClick={() => {setChanging(!changing)}}
      >
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <TwitterPicker
            colors={COLORS.sort()}
            onChangeComplete={changeColor}
            width="204px"
          />
        </li>
      </ul>
    </div>
    </div>
  )
}

const CreditCount = ({selectedCourses}) =>{
  const credits = selectedCourses.reduce((preValue, curValue) => {
    const courseInfo = getCourse(curValue.id)
    const val = parseInt(courseInfo.credits)
    return preValue + (curValue.visible ? val : 0)
  } , 0
  )

  return (
    <div className="fw-bold">
      <span className="d-inline d-sm-none d-lg-inline">Credits: </span>{credits}
    </div>
  )
}

const SelectedCourses = ({selectedCourses}) => {
  const dispatch = useDispatch()

  return (
  <div className="selected-course-list h-100 d-flex flex-column overflow-scroll mt-2">
    {
      selectedCourses
      .map(course => {
        const info = getCourse(course.id)
        return {...course, title: info.title, instructor: info.instructor}
      })
      .sort((a, b) => a.title.localeCompare(b.title))
      .map((course) => (
        // A COURSE
        <div className="selected-course d-flex flex-row justify-content-between align-items-start mt-2 pb-2" key={course.id}> 
          {/* INFORMATION */}
          <div className="info flex-grow-1 d-flex flex-column text-start">
            <Link className="fw-bold text-decoration-none"
              to={`/courses/${course.id}`}
            >
              {course.title}
            </Link>
            <div className='d-flex flex-row align-items-center mt-2'>
              <ColorPicker courseId={course.id}/>
              <div className='d-flex flex-column'>
                <small className="selected-instructor"> {course.id} | {course.instructor} </small>
              </div>
            </div>
          </div>
          {/* EDIT BUTTONS */}
          <div className="togglers d-flex flex-column">
            <div 
              className="btn eye"
              onClick={() => dispatch(toggleVisibility({id: course.id}))}
            >
              {course.visible ? 
              <i className="fas fa-eye "></i> : <i className="fas fa-eye-slash "></i>}
            </div>
            <div 
              className="btn trash"
              onClick={() => dispatch(toggleSelection({id: course.id}))}
            >
              <i className="fas fa-trash "></i>
            </div>
          </div>
        </div>
      ))   
    }    
  </div>
  )
}

export {SelectedCourses, CreditCount}