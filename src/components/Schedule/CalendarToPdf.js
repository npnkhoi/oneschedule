import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';
import React, { useRef } from 'react';
import Calendar from './Calendar';

const ComponentToPrint = React.forwardRef((props, ref) => (
  <div ref={ref}>
    Hello World
    <Calendar selectedCourses={props.selected}/>
  </div>
));

const CalendarToPdf = ({selectedCourses}) => {
  const componentRef = useRef();
  if (selectedCourses.length == 0) {
    return (
      <div></div>
    )
  }
  return (
    <React.Fragment>
      <ComponentToPrint ref={componentRef} selected={selectedCourses} />
      <button onClick={() => exportComponentAsJPEG(componentRef)}>
        Export As JPEG
      </button>
      <button onClick={() => exportComponentAsPDF(componentRef)}>
        Export As PDF
      </button>
      <button onClick={() => exportComponentAsPNG(componentRef)}>
        Export As PNG
      </button>
    </React.Fragment>
  );
};
ComponentToPrint.displayName = 'ComponentToPrint'
export default CalendarToPdf;