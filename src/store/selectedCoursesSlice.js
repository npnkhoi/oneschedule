import { createSlice } from "@reduxjs/toolkit";
import { getRarestColor } from "../utils/colors";

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
          'color': getRarestColor(state.value)
        })
      } else {
        console.log('removing');
        state.value = state.value.filter(course => course.id !== id)
      }
    },
    toggleVisibility: (state, action) => {
      const {id} = action.payload
      const courseExist = (state.value.filter(course => course.id === id).length > 0)
      if (courseExist) {
        state.value = state.value.map(course => (
          course.id === id
          ? {...course, visible: !course.visible}
          : course
        ))
      } else {
        console.log('Warning: Toggle visibility of a non-existing course');
      }
    },
    setColor: (state, action) => {
      const {id, color} = action.payload
      console.log(id, color);
      const courseExist = (state.value.filter(course => course.id === id).length > 0)
      if (courseExist) {
        state.value = state.value.map(course => (
          course.id === id
          ? {...course, color: color}
          : course
        ))
      } else {
        console.log('Warning: Set color of a non-existing course');
      }
    }
  }
})

export default selectedCourses.reducer

export const {toggleSelection, toggleVisibility, setColor} = selectedCourses.actions