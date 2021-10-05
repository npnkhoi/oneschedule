import {React, useState} from 'react'
import Calendar from './Calendar'
import './index.css'
import { selectCurrentCourseSelection } from '../../store/selectors'
import { useSelector } from 'react-redux'
import TermSwitch from '../TermSwitch'
import InfoBar from './InfoBar'
import { Helmet } from 'react-helmet'

const Timetable = () => {
  const [isOpen, setIsOpen] = useState(false)

  const currentCourseSelection = useSelector(selectCurrentCourseSelection)

  const InfoBarCollapseBtn = () => {
    return (
      <div type="button"
        // className='info-bar-btn btn btn-outline-primary py-0 px-1 d-block d-xl-none'
        className='info-bar-btn btn btn-outline-primary py-0 px-1 d-block d-xl-none'
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fas fa-arrows-alt-h"></i>
      </div>  
    )
  }

  return (
    <div>
      <Helmet>
        <title>OneSchedule</title>
      </Helmet>
    
      {/* <div className="d-flex flex-column align-items-center"> */}
      <div className="d-flex flex-column">
        <div className="d-lg-none d-md-flex flex-column align-items-center ">
        {/* <div className="d-lg-none d-md-block"> */}
          <TermSwitch />
        </div>
      
        <div className="d-flex flex-row">          
          <Calendar 
            selectedCourses={currentCourseSelection} 
          />

          <InfoBar 
            selectedCourses={currentCourseSelection}
            className={"d-none d-xl-flex"}
          />
          
          {isOpen ?
            <div>
              <div className="popover d-block d-lg-none" onClick={() => setIsOpen(!isOpen)}></div>
              <InfoBar 
                selectedCourses={currentCourseSelection}
                className={"d-xl-none p-0"}
              />
            </div>
          : null }
        </div>
      </div>
      
      <InfoBarCollapseBtn />
    </div>
  )
}

export default Timetable
