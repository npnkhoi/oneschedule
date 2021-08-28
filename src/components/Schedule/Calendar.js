import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid';
import moment from 'moment';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getTextColor } from '../../utils/colors';
import { getCourseInfo } from '../../utils/course';
import './Calendar.css'

const Calendar = ({selectedCourses}) => {
  const color = useSelector(state => state.colorMap.value)
  const [ scheduleOverlap, setScheduleOverlap ] = useState(false)
  
  const dayId = {
    'Sunday': 0,
    'Monday': 1,
    'Tuesday': 2,
    'Wednesday': 3,
    'Thursday': 4, 
    'Friday': 5,
    'Saturday': 6,
  }

  const transformTime = (time) => {
    const timeObject = moment(time, 'h:mm A')
    return timeObject.format('HH:mm:ss')
  }

  const getTimeblocks = (course) => {
    const backgroundColor = color[course.id]

    return course.schedule.reduce((blocks, block) => blocks.concat({
      title: `${course.title} (${course.instructor})`,
      daysOfWeek: [dayId[block.day]],
      startTime: transformTime(block.start_time),
      endTime: transformTime(block.end_time),
      backgroundColor: backgroundColor,
      textColor: getTextColor(backgroundColor),
    }), [])
  }
  const visibleCourses = selectedCourses
    .filter(course => course.visible)
    .map(course => getCourseInfo(course.id))

const events = visibleCourses
    .reduce((events, course) => events.concat(getTimeblocks(course)), [])

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
      toast.error("There are some schedule conflicts!", {
        toastId: 1
      })
    }
    setScheduleOverlap(overlapDeteced)
  }

  return (
  <FullCalendar
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
    eventTextColor = "black"
  />
  )
}

export default Calendar