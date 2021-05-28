import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid';
import { toast } from 'react-toastify';

const Calendar = ({selectedCourses, courses, setScheduleOverlap, scheduleOverlap}) => {
  const dayId = {
    'Sunday': 0,
    'Monday': 1,
    'Tuesday': 2,
    'Wednesday': 3,
    'Thursday': 4, 
    'Friday': 5,
    'Saturday': 6
  }

  const events = courses
  .filter(course => selectedCourses.filter((selected) => selected.id === course.id).length > 0)
  .map(course => ({
    title: course.id,
    startTime: course.start_time,
    endTime: course.end_time,
    daysOfWeek: course.days.split(/[ ,]+/).map(day => dayId[day])
  }))

  const getSeconds = (stringTime) => {
    const nums = stringTime.split(/[:]+/)
    return (nums[0] * 24 + nums[1]) * 60 + nums[2]
  }

  const overlap = (courseA, courseB) => {
    let daysOverlap = false
    courseA.daysOfWeek.forEach((day1) => {
      courseB.daysOfWeek.forEach((day2) => {
        if (day1 && day2 && day1 === day2) {
          daysOverlap = true
        }
      })
    })
    if (!daysOverlap) {
      return false
    }
    const startA = getSeconds(courseA.startTime)
    const endA = getSeconds(courseA.endTime)
    const startB = getSeconds(courseB.startTime)
    const endB = getSeconds(courseB.endTime)

    return !((endA <= startB) || (endB <= startA))
  }
  let overlapDeteced = false;
  
  events.forEach((course1) => {
    events.forEach((course2) => {
      if (course1.title !== course2.title && overlap(course1, course2)) {
        overlapDeteced = true
      }
    })
  })
  if (scheduleOverlap !== overlapDeteced) {
    if (overlapDeteced) {
      toast.warn("There are some schedule conflicts!", {
        toastId: 1
      })
      console.log('Toast called when overlapDetected is', overlapDeteced);
    }
    setScheduleOverlap(overlapDeteced)
  }

  return (
  <FullCalendar
    className="calendar"
    plugins={[ timeGridPlugin ]}
    initialView="timeGridWeek"
    events = {events}
    slotMinTime = "08:00"
    slotMaxTime = "21:00"
    scrollTime = "09:00"
    weekends = {false}
    expandRows = {true}
    allDaySlot = {false}
    headerToolbar = {
      ({
        start: "",
        center: "",
        end: ""
      })
    }
    eventColor = "#264653"
    eventTextColor = "#E9C46A"
  />
  )
}

export default Calendar