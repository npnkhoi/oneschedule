import { courseData } from '../data'
import { RootState } from './index'

export const selectTerm = (state: RootState) => state.term.value

export const selectCurrentTerm = (state: RootState) => courseData[state.term.value]

export const selectCurrentSelectedCourseIds = (state: RootState) => 
  state.selectedCourses.value.filter(
    course => {
      const term = state.term.value
      const idList = courseData[term].map(course => course.id)
      return idList.includes(course.id)
    }
  )