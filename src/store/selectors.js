import { courseData } from '../data'

export const selectTerm = state => state.term.value

export const selectCurrentTerm = state => courseData[state.term.value]

export const selectCurrentCourseSelection = state => state.selectedCourses.value.filter(
  course => course.id.includes(state.term.value)
)