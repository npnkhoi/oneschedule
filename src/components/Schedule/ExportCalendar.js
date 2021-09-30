import React from 'react'
import ical from 'ical-generator'
import { getCourseInfo } from '../../utils/course';

const cal = ical({
    domain: 'example.com',
    events: [
        {
            start: new Date(2021,9-1,30,2,30),
            end: new Date(2021,9-1,30,3,50),
            timestamp: new Date(),
            timezone: 'Asia/Jerusalem',
            summary: 'Event 1',
            organizer: 'Me <mail@example.com>',
            repeating: {
                freq: 'WEEKLY', // required
                until: new Date(2021,10-1,30),
                byDay: ['th'],
                exclude: [new Date(2021,10-1,7)] // exclude these dates
            }
        },
        {
            start: new Date(2021,10-1,1,5,30),
            end: new Date(2021,10-1,1,5,50),
            timestamp: new Date(),
            timezone: 'Asia/Jerusalem',
            summary: 'Event 2',
            organizer: 'Me <mail@example.net>',
            repeating: {
                freq: 'WEEKLY', // required
                until: new Date(2021,10-1,30),
                byDay: ['fr'], // repeat only sunday and monday
                exclude: [new Date(2021,10-1,15)] // exclude these dates
            }
        }
    ]
});


function downloadUrl(blob, filename) {
    const link = document.createElement('a');
    if (window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      const objectUrl = URL.createObjectURL(blob);
      link.download = filename;
      link.href = objectUrl;
      link.dispatchEvent(new MouseEvent('click'));
      URL.revokeObjectURL(objectUrl);
    }
  }

const ExportCalendar= (props) => {
    console.log(props.selectedCourses)
    for (let each of props.selectedCourses) {
        console.log(getCourseInfo(each.id).schedule)
    }
    const blob = new Blob([cal.toString()], { type: 'text/plain' });    
    return (
    <button type="button" className="btn btn-white " 
        onClick={() => {downloadUrl(blob, 'fulbright_calendar.ics')}}>
        <i className="fa fa-calendar me-3" aria-hidden="true"></i>
        Calendar file (ics)
    </button>
    )
}

export default ExportCalendar

