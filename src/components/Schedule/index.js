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
    <div className="d-flex flex-row flex-grow-1">
      <Helmet>
        <title>OneSchedule</title>
      </Helmet>
      <Calendar 
        selectedCourses={currentCourseSelection} 
      />
    
      <div className="info-bar">
        
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

  )
}

export default Timetable
