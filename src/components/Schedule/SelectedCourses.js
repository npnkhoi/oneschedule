import { TwitterPicker } from "react-color"
import COLORS from '../../data/colors.json'
import { useState, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { setColor, toggleSelection, toggleVisibility } from "../../store/selectedCoursesSlice"
import { getCourseInfo } from "../../utils/course"

let useClickOutside = (handler) => {
  let domNode = useRef();
  
  useEffect(() => {
    let clickHandler = (event) => {
      if (domNode.current && !domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", clickHandler);

    return () => {
      document.removeEventListener("mousedown", clickHandler);
    };
  });

  return domNode;
};

const ColorPicker = ({courseId}) => {
  const [isOpen, setIsOpen] = useState(false)
  const color = useSelector(state => state.selectedCourses.value
    .filter(course => course.id === courseId)[0].color)
  const dispatch = useDispatch()

  const changeColor = (color) => {
    dispatch(setColor({id: courseId, color: color.hex}))   
    setIsOpen(false)
  }

  let domNode = useClickOutside(() => {
    setIsOpen(false);
  });
    
  return (
    <div ref={domNode} className='modifier me-2'>
      <div className='color-btn modifier rounded'
        onClick={() => {
          setIsOpen(!isOpen)
        }}
        style={({backgroundColor: color})}
      >
      </div>
      <div className='color-picker position-relative'>
        {isOpen 
        ? 
          <TwitterPicker
            colors={COLORS}
            onChangeComplete={changeColor}
            width="204px"
          />
        : <div></div>
        }
      </div>
    </div>
  )
}

const CreditCount = ({selectedCourses}) =>{
  function creditCount(selectedCourses){
    let credits = 0
    for (let course of selectedCourses){
      if (course.visible){
        credits += parseInt(getCourseInfo(course.id).credits)
      }
    }
    
    return credits
  }
 
  return (
    <div id="credit-count">Credits count - <span>{creditCount(selectedCourses)}</span></div>
  )
}

const SelectedCourses = ({selectedCourses}) => {
  const dispatch = useDispatch()

  return (
  <div id="selected-courses" className="d-flex flex-column">
    {
      selectedCourses
      .map(course => {
        const info = getCourseInfo(course.id)
        return {...course, title: info.title, instructor: info.instructor}
      })
      .sort((a, b) => a.title.localeCompare(b.title))
      .map((course) => (
        <div className="selected-course d-flex flex-row justify-content-between align-items-start" key={course.id}> 
          <div className="selected-info flex-grow-1 d-flex flex-column">
            <Link className="heading-2 text-decoration-none"
              to={`/courses/${course.id}`}
            >
              {course.title}
            </Link>
            <div className='d-flex flex-row align-items-center mt-2'>
              <ColorPicker courseId={course.id}/>
              <div className='d-flex flex-column'>
                <div className="selected-instructor"> {course.id} | {course.instructor} </div>
              </div>
            </div>
          </div>
          <div className="toggle-btns d-flex flex-column">
            <div 
              className="modifier"
              onClick={() => dispatch(toggleVisibility({id: course.id}))}
            >
              {course.visible ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
            </div>
            <div 
              className="modifier"
              onClick={() => dispatch(toggleSelection({id: course.id}))}
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

export {SelectedCourses, CreditCount}