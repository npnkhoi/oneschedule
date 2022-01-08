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
      
      <div className="flex-grow-1">
        <SelectedCourses
          selectedCourses={selectedCourses}
        />
      </div>

      <div className="toolbar w-100 justify-content-between d-flex mt-auto border border-primary border-1 rounded">
          <div className="my-auto mx-auto text-left">
            <CreditCount 
              selectedCourses={selectedCourses}
            />
          </div>

          <div className="d-none d-md-block">
            <DownloadBtn
              className="calendar-exporter" 
              componentRef={calendarRef}
              selectedCourses={selectedCourses}>
            </DownloadBtn>
          </div>
          
      </div>
    </div>
  )
}

export default InfoBar