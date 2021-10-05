import TermSwitch from '../TermSwitch'
import {SelectedCourses, CreditCount} from './SelectedCourses'
import Searcher from './Searcher'

const InfoBar = ({selectedCourses, className}) => {

  return (
    // <div className="info-bar col-md-3 d-none d-lg-block">  
    <div className={`d-flex flex-column justify-content-between ${className}`}>           
      <TermSwitch />
  
      <Searcher />

      <SelectedCourses 
        selectedCourses={selectedCourses}
      />

      <CreditCount 
        selectedCourses={selectedCourses}
      />
    </div>
  )
}

export default InfoBar