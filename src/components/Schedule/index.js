import React, {useRef, useState } from 'react'
import Calendar from './Calendar'
import './index.css'
import { selectCurrentCourseSelection } from '../../store/selectors'
import { useSelector } from 'react-redux'
import ExternalExporter from './ExternalExporter'
import TermSwitch from '../TermSwitch'
import {SelectedCourses, CreditCount} from './SelectedCourses'
import Searcher from './Searcher'
import { Helmet } from 'react-helmet'

const InfoBar = ({selectedCourses, className, calendarRef}) => {

  return (
    <div className={`info-bar d-flex flex-column col-3 ${className}`}>           
      <TermSwitch />
      <Searcher />
      <SelectedCourses 
        selectedCourses={selectedCourses}
      />

      <div className="row mt-auto">
          <div className="col-6">
            <ExternalExporter
              className="calendar-exporter" 
              componentRef={calendarRef}
              selectedCourses={selectedCourses}>
            </ExternalExporter>
          </div>
          
          <div className="col-6">
            <div className="mt-2">
              <CreditCount 
                selectedCourses={selectedCourses}
              />
            </div>
          </div>
      </div>

    </div>
  )
}

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

  const calendarRef = useRef()

  return (
    <div>
      <Helmet>
        <title>OneSchedule</title>
      </Helmet>
    
      <div className="d-flex flex-column">
        <div className="d-lg-none d-md-flex flex-column align-items-center ">
          <TermSwitch />
        </div>
      
        <div className="d-flex flex-row">          
          <div ref={calendarRef} className="flex-grow-1">
            <Calendar
              selectedCourses={currentCourseSelection} 
            />
          </div>
          
          <InfoBar 
            selectedCourses={currentCourseSelection}
            className={"d-none d-xl-flex"}
          />
          
          {isOpen ?
            <div>
              <div className="infobar-pop d-block d-lg-none" onClick={() => setIsOpen(!isOpen)}></div>
              <InfoBar 
                selectedCourses={currentCourseSelection}
                className={"d-xl-none"}
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
