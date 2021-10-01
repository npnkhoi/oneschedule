import TermSwitch from '../TermSwitch'
import {SelectedCourses, CreditCount} from './SelectedCourses'
import Searcher from './Searcher'

const InfoBar = ({selectedCourses}) => {
  return (
    <div className="info-bar col-md-3 d-none d-lg-block flex-shrink-1">        
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