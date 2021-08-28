import { createSlice } from "@reduxjs/toolkit";

// This slice maintains the course-to-color mapping
const selectedCourses = createSlice({
  name: 'selectedCourses',
  initialState: {
    value: []
  },
  reducers: {
    toggleSelection: (state, action) => {
      const {id} = action.payload
      const courseExist = (state.value.filter(course => course.id === id).length > 0)
      if (!courseExist) {
        console.log('pushing');
        state.value.push({
          'id': id,
          'selected': true,
          'visible': true,
          'color': null // FIXME
        })
      } else {
        console.log('removing');
        state.value = state.value.filter(course => course.id !== id)
      }
    }
  }
})

export default selectedCourses.reducer

export const {toggleSelection} = selectedCourses.actions