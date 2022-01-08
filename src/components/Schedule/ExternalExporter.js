import React from 'react';
// import { exportComponentAsJPEG} from 'react-component-export-image';
import ExportCalendar from './ExportCalendar';

import './ExternalExporter.scss';
import '../utils/index.scss'


// const jpgFilePropoties = {
//     fileName : "Fulbright-course-calendar.jpg",
//     html2CanvasOptions: {
//       allowTaint: true,
//       useCORS: true,
//       logging: false,
//       height: 722,
//       windowHeight: 722, 
//     }
// }

const ExternalExporter = (props) => {
  return (
  <div className="dropdown">
      <button className="btn cta dropdown-toggle float-left"
       type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        <i className="fa fa-download me-2" aria-hidden="true"></i>
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        {/* <li>
          <button type="button" className="btn btn-white " 
            onClick={() => {exportComponentAsJPEG(props.componentRef, jpgFilePropoties)}}>
            <i className="fa fa-file-image-o me-3" aria-hidden="true"></i>
            Image file (jpg)
          </button>
        </li> */}

        <li>
          <ExportCalendar selectedCourses={props.selectedCourses}></ExportCalendar>
        </li>
      </ul>
    </div>
  )
}

export default ExternalExporter


//Future
// function saveAsPDF() {
//   html2canvas($('div.panel.panel-default'), {
//       onrendered: function (canvas) {
//           var wid;
//           var hgt;
//           var img = canvas.toDataURL("image/png", wid = canvas.width, hgt = canvas
//           .height); //image data of canvas
//           var hratio = hgt / wid;
//           var doc = new jsPDF({
//               orientation: "landscape"
//           });
//           var width = doc.internal.pageSize.width;
//           var height = doc.internal.pageSize.height;
//           var height = width * hratio;
//           doc.addImage(img, 'JPEG', width*.025, 20, width*.95, height*.95);
//           doc.save('AssetComparison.pdf');
//       }
//   });
// }