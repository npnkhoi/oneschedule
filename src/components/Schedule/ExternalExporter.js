import React from 'react'
import { exportComponentAsJPEG} from 'react-component-export-image';

let jpgFilePropoties = {
    fileName : "Fulbright-course-calendar.jpg"
}

const ExternalExporter = (props) => {
  return (
  <div>
    <button onClick={() => {exportComponentAsJPEG(props.componentRef, jpgFilePropoties)}}>
      Export schedule as JPG
    </button>
  </div>
  )
}

export default ExternalExporter