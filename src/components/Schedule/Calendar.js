import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid';
import { getTextColor } from '../../utils/colors';
import { getCourse } from '../../utils/course';
import './Calendar.scss'

const Calendar = ({selectedCourses}) => {
  
  const dayId = {
    'Sunday': 0,
    'Monday': 1,
    'Tuesday': 2,
    'Wednesday': 3,
    'Thursday': 4, 
    'Friday': 5,
    'Saturday': 6,
  }

  const getTimeblocks = (course) => {

    return course.schedule.reduce((blocks, block) => blocks.concat({
      title: `${course.title} (${course.instructor})`,
      daysOfWeek: [dayId[block.day]],
      startTime: block.start_time,
      endTime: block.end_time,
      backgroundColor: course.color,
      textColor: getTextColor(course.color),
    }), [])
  }

  const visibleCourses = selectedCourses
  .filter(course => course.visible)
  .map(course => {
      const info = getCourse(course.id)
      return {...info, color: course.color}
    })
  
  const events = visibleCourses
    .reduce((events, course) => events.concat(getTimeblocks(course)), [])

  return (
  <FullCalendar
    plugins={[ timeGridPlugin ]}
    initialView="timeGridWeek"
    events = {events}
    slotMinTime = "07:00"
    slotMaxTime = "21:00"
    scrollTime = "09:00"
    hiddenDays = {[0]}
    expandRows = {true}
    allDaySlot = {false}
    headerToolbar = {
      ({
        start: "",
        center: "",
        end: ""
      })
    }
    dayHeaderFormat = { {weekday: 'short' }}
  />
  )
}

export default Calendar
