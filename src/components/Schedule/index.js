import React, {useRef} from 'react'
import Calendar from './Calendar'
import SelectedCourses from './SelectedCourses'
import Searcher from './Searcher'
import './index.css'
import { useSelector } from 'react-redux'
import COURSES from '../../data/courses.json'
import { exportComponentAsJPEG } from 'react-component-export-image';

const ComponentToPrint = React.forwardRef((props, ref) => (
  <div className="flex-grow-1">
    <div ref={ref} className="flex-grow-1">
      <Calendar selectedCourses={props.selected}/>
    </div>
  </div>
))
ComponentToPrint.displayName = 'ComponentToPrint'

const Timetable = () => {
  const selectedCourses = useSelector(state => state.selectedCourses.value)
  const componentRef = useRef();
  return (
    <div className="d-flex flex-row flex-grow-1">

      <ComponentToPrint selected={selectedCourses} ref={componentRef}/>

      <div className="info-bar">
        <p className="o-title">Fall, 2021</p>

        <Searcher
          courses={COURSES}
        />

        <SelectedCourses
          selectedCourses={selectedCourses}
        />
        <button onClick={() => exportComponentAsJPEG(componentRef)}>
          Export As JPEG
        </button>
        {/* <button onClick={() => exportComponentAsPDF(componentRef)}>
          Export As PDF
        </button>
        <button onClick={() => exportComponentAsPNG(componentRef)}>
          Export As PNG
        </button> */}
      </div>
    </div>

      )
}

export default Timetable
