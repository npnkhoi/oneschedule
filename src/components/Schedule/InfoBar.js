import {React, useState} from 'react'
import TermSwitch from '../TermSwitch'
import {SelectedCourses, CreditCount} from './SelectedCourses'
import Searcher from './Searcher'

const InfoBar = ({courses}) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="info-bar col-md-3 d-none d-lg-block">
      {isOpen ?
      <div>
        <TermSwitch />
    
        <Searcher />

        <SelectedCourses 
          selectedCourses={courses}
        />

        <CreditCount 
          selectedCourses={courses}
        />
      </div>
      : null
      }
    
      <button type="button"
        className='info-bar-btn btn btn-outline-primary'
        onClick={() => setIsOpen(!isOpen)}
      >
          Button
      </button>
    </div>
  )
}

export default InfoBar