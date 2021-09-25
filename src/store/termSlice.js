import { createSlice } from "@reduxjs/toolkit";

const term = createSlice({
  name: 'term',
  initialState: {
    value: 'Fall2021'
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload
    }
  }
})

export default term.reducer