import { createSlice } from "@reduxjs/toolkit";
import COURSES from '../data/courses.json'
import { getRandomColor } from "../utils/colors";


const colorMapSlice = createSlice({
  name: 'colorMap',
  initialState: {
    value: COURSES.reduce(
      (all, course) => ({
        ...all,
        [course.id]: getRandomColor()
      })
    , {})
  },
  reducers: {
    setColor: (state, action) => {
      const {courseId, color} = action.payload
      state.value[courseId] = color
    }
  }
})

export default colorMapSlice.reducer

export const {setColor} = colorMapSlice.actions