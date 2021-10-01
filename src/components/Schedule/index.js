import React from 'react'
import Calendar from './Calendar'
import {SelectedCourses, CreditCount} from './SelectedCourses'
import Searcher from './Searcher'
import './index.css'
import { selectCurrentCourseSelection } from '../../store/selectors'
import { useSelector } from 'react-redux'
import TermSwitch from '../TermSwitch'
import { Helmet } from 'react-helmet'

const Timetable = () => {
  const currentCourseSelection = useSelector(selectCurrentCourseSelection)

  return (
    <div>
      <Helmet>
        <title>OneSchedule</title>
      </Helmet>
    
      {/* <div className="d-flex flex-column align-items-center"> */}
      <div className="d-flex flex-column">
        
        <div className="d-flex flex-column align-items-center d-lg-none d-md-block">
          <TermSwitch />
        </div>
      
        <div className="d-flex flex-row flex-grow-1">
          <Calendar 
            selectedCourses={currentCourseSelection} 
          />

          <div className="info-bar col-md-3 d-none d-lg-block">
            <TermSwitch />
            
            <Searcher />

            <SelectedCourses 
              selectedCourses={currentCourseSelection}
            />

            <CreditCount 
              selectedCourses={currentCourseSelection}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timetable
