import { createSlice } from "@reduxjs/toolkit";
import { getRarestColor } from "../utils/colors";

const selectedCourses = createSlice({
  name: 'selectedCourses',
  initialState: {
    value: []
  },
  reducers: {
    toggleSelection: (state, action) => {
      const {id} = action.payload
      const isSelected = (state.value.filter(course => course.id === id).length > 0)
      if (!isSelected) {
        state.value.push({
          'id': id,
          'selected': true,
          'visible': true,
          'color': getRarestColor(state.value.map(course => course.color))
        })
      } else {
        state.value = state.value.filter(course => course.id !== id)
      }
    },
    toggleVisibility: (state, action) => {
      const {id} = action.payload
      const isSelected = (state.value.filter(course => course.id === id).length > 0)
      if (isSelected) {
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
      const isSelected = (state.value.filter(course => course.id === id).length > 0)
      if (isSelected) {
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