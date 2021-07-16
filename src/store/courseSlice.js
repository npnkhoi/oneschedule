import { createSlice } from "@reduxjs/toolkit";
import COURSES from '../data/courses.json'

// This slice maintain the true data of courses 
// and their visibility status in the app
const courseSlice = createSlice({
  name: 'course',
  initialState: {
    value: COURSES
      .reduce(
        (all, one) => (
          [...all, {...one, visible: true, selected: false}]
        ) , [])
  },
  reducers: {
    toggleSelection: (state, action) => {
      const {id} = action.payload
      state.value = state.value.map(cou => (
        {...cou, 
          selected: (cou.id === id ? (!cou.selected) : cou.selected),
          visible: true
        }
      ))
    },
    toggleVisibility: (state, action) => {
      const {id} = action.payload
      state.value = state.value.map(cou => (
        {...cou, visible: (cou.id === id ? (!cou.visible) : cou.visible)}
      ))
    },
  }
})

export default courseSlice.reducer

export const {toggleSelection, toggleVisibility} = courseSlice.actions