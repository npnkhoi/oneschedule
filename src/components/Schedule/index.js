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
      <div className='d-none d-md-block'><TermSwitch /></div>
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

  const ExpandBtn = () => {
    return (
      <div type="button"
        className='info-bar-btn py-0 px-1 d-block d-md-none'
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fas fa-expand"></i>
      </div>  
    )
  }

  const CompressBtn = () => {
    return (
      <div type="button"
        className='info-bar-btn py-0 px-1 d-block d-md-none'
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fas fa-compress"></i>
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
        <div className="d-flex d-md-none flex-column align-items-center">
          <TermSwitch />
        </div>
      
        <div className="d-flex flex-row">          
          <div ref={calendarRef} className="w-100">
            <Calendar
              selectedCourses={currentCourseSelection} 
            />
          </div>
          
          <InfoBar 
            selectedCourses={currentCourseSelection}
            className={"d-none d-md-flex"}
          />
          
          {isOpen ?
            <div>
              <CompressBtn />
              <div className="infobar-pop d-block d-md-none" onClick={() => setIsOpen(!isOpen)}></div>
                <InfoBar 
                  selectedCourses={currentCourseSelection}
                  className={"pt-3 rounded-top d-md-none"}
                />
              </div>
          : <ExpandBtn /> }
        </div>
      </div>
    </div>
  )
}

export default Timetable
