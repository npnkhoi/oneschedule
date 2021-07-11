import { createSlice } from "@reduxjs/toolkit";

const colorMapSlice = createSlice({
  name: 'colorMap',
  initialState: {
    value: {}
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