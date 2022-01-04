import {SelectedCourses, CreditCount} from './SelectedCourses'
import Searcher from './Searcher'
import DownloadBtn from './ExternalExporter'
import TermSwitch from '../TermSwitch'
import './InfoBar.scss'


const InfoBar = ({selectedCourses,calendarRef}) => {

  return (
    <div className={`info-bar d-flex flex-column`}>
      <div className='d-none d-md-block'><TermSwitch /></div>
      
      <Searcher />
      
      <SelectedCourses 
        selectedCourses={selectedCourses}
      />

      <div className="toolbar row mt-auto mx-auto">
          <div className="col-6 d-none d-md-block">
            <DownloadBtn
              className="calendar-exporter" 
              componentRef={calendarRef}
              selectedCourses={selectedCourses}>
            </DownloadBtn>
          </div>
          
          <div className="my-auto col-md-6">
            <CreditCount 
              selectedCourses={selectedCourses}
            />
          </div>
      </div>
    </div>
  )
}

export default InfoBar