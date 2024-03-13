import { courseData } from '../data'
import { loadPersonalPlansFromLocalStorage } from '../utils/localStorage'
import { RootState } from './index'

export const selectTerm = (state: RootState) => state.term.value

// should be named selectCurrentTermCourses :) it returns courses not term name
export const selectCurrentTerm = (state: RootState) => {
  const courseListThisTerm = courseData[state.term.value]
  const personalPlans = loadPersonalPlansFromLocalStorage() 
  return [...courseListThisTerm, ...personalPlans]
}

export const selectCoursesAndPlans  = (state: RootState) => {
  const personalPlans = loadPersonalPlansFromLocalStorage()
  const thisTerm = state.term.value 
  const coursesThisTerm = courseData[thisTerm] 

  const combined = [...coursesThisTerm, ...personalPlans]
  console.log('combined', combined)
  
  return combined 
}

export const selectCurrentSelectedCourseIds = (state: RootState) => {
  const coursesAndPlans = selectCoursesAndPlans(state)

  return state.selectedCourses.value.filter(
    item => {
      const idList = coursesAndPlans.map(item => item.id)
      // console.log('idList', idList) // vao den day roi van con ca courses va plans
      // console.log('mimimi', idList.includes(item.id)) // true 
      return idList.includes(item.id)
    }
  ) 
}