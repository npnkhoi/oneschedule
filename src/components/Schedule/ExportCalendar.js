import React from 'react'
import ical from 'ical-generator'
import { selectTerm } from '../../store/selectors';
import { useSelector } from 'react-redux';
import trimesterInfo from '../../data/trimester_info.json'
import { getCourse } from '../../utils/course';

const time_location = "Asia/Ho_Chi_Minh";
const short_days = {
    'Monday': 'mo',
    'Tuesday': 'tu',
    'Wednesday': 'we',
    'Thursday': 'th',
    'Friday': 'fr',
    'Saturday': 'sa',
    'Sunday': 'su'
}
const num_days = {
    'Monday': 0,
    'Tuesday': 1,
    'Wednesday': 2,
    'Thursday': 3,
    'Friday': 4,
    'Saturday': 5,
    'Sunday': 6
}

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

function downloadCalendar(selectedCourses, cur_term_info) {
    let list_of_events = []
    //Info about current semester
    const start_date_term = new Date(cur_term_info['start_date'])
    const end_date_term = new Date(cur_term_info['end_date'])
    //For each course
    for (let each_courses of selectedCourses) {
        if (!each_courses.visible) {
            continue
        }
        let course_info = getCourse(each_courses.id)
        let course_schedule = course_info.schedule
        let course_title = course_info.title

        //check if course has same time slot for different day
        let same_time = true;
        if (course_schedule.length > 0) {
            let start_time = course_schedule[0]?.start_time
            let end_time = course_schedule[0]?.end_time
            for (let each_slot of course_schedule) {
                let start_time_day = each_slot['start_time']
                let end_time_day = each_slot['end_time']
                if (! (start_time == start_time_day && end_time == end_time_day)) { //different timeslot
                    same_time = false
                    break
                }
            }
        }
        else {  // course have no schedule yet, exit to prevent bug
            continue;
        }

        //same time slot => merge into single events for convenience
        if (same_time) {
            let each_time = course_schedule[0]
            let meet_day = each_time['day']
            let start_time = each_time['start_time']
            let end_time = each_time['end_time']
            //By ical convention: set event for first day, then add repeat later. Assume that week day is in order (i.e Tue as [0], Thu as [1])
            let first_day = new Date(start_date_term.getFullYear(),start_date_term.getMonth(),start_date_term.getUTCDate()+num_days[meet_day])
            first_day = first_day.toISOString().slice(0,10)
            let first_session_start = new Date(first_day+"T"+start_time)
            let first_session_end = new Date(first_day+"T"+end_time)
            let repeat_date = []
            for (let each_slot of course_schedule) {
                let each_meet_day = each_slot['day']
                repeat_date.push(short_days[each_meet_day])
            }
            //Standard ical format
            let current_event = {
                start: first_session_start,
                end: first_session_end,
                time_stamp: new Date(),
                timezone: time_location,
                summary: course_title,
                repeating: {
                    freq: 'WEEKLY',
                    until: end_date_term,
                    byDay: repeat_date,
                }
            }
            list_of_events.push(current_event)
        }
        //Course might have several time -> treat each different time slot as different events
        else {
            for (let each_time of course_schedule) {
                //Meet_day: thứ
                let meet_day = each_time['day']
                let start_time = each_time['start_time']
                let end_time = each_time['end_time']
                //By ical convention: set event for first day, then add repeat later
                let first_day = new Date(start_date_term.getFullYear(),start_date_term.getMonth(),start_date_term.getUTCDate()+num_days[meet_day])
                first_day = first_day.toISOString().slice(0,10)
                let first_session_start = new Date(first_day+"T"+start_time)
                let first_session_end = new Date(first_day+"T"+end_time)
                //Standard ical format
                let current_event = {
                    start: first_session_start,
                    end: first_session_end,
                    time_stamp: new Date(),
                    timezone: time_location,
                    summary: course_title,
                    repeating: {
                        freq: 'WEEKLY',
                        until: end_date_term,
                        byDay: [short_days[meet_day]],
                    }
                }
                list_of_events.push(current_event)
            }
        }
    }
    console.log(list_of_events)
    const cal = ical({
        events: list_of_events
    });
    const blob = new Blob([cal.toString()], { type: 'text/plain' }); 
    const time_stamp = (new Date()).toISOString().slice(0,19);
    const file_name = 'Fulbright-calendar_' + time_stamp + '.ics'
    downloadUrl(blob, file_name)
}

const ExportCalendar= (props) => {
    const cur_term_info = trimesterInfo.filter(term => term['name'] == useSelector(selectTerm))[0]
    return (
    <button type="button" className="btn btn-white " 
        onClick={() => {downloadCalendar(props.selectedCourses, cur_term_info)}}>
        <i className="fa fa-calendar me-3" aria-hidden="true"></i>
        Calendar file (ics)
    </button>
    )
}

export default ExportCalendar

