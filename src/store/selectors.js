import { courseData } from '../data'

export const selectTerm = state => state.term.value

export const selectCurrentTerm = state => courseData[state.term.value]

export const selectCurrentCourseSelection = state => 
  state.selectedCourses.value.filter(
    course => {
      const term = state.term.value
      const idList = courseData[term].map(course => course.id)
      return idList.includes(course.id)
    }
  )