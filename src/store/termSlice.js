import { createSlice } from "@reduxjs/toolkit";
import {availableTerms} from '../data'
import config from "../utils/config";

const term = createSlice({
  name: 'term',
  initialState: {
    value: config.currentTerm
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload
    },
    forward: (state) => {
      const pos = availableTerms.indexOf(state.value)
      if (pos + 1 < availableTerms.length) {
        state.value = availableTerms[pos + 1]
      }
    },
    backward: (state) => {
      const pos = availableTerms.indexOf(state.value)
      if (pos > 0) {
        state.value = availableTerms[pos - 1]
      }
    }
  }
})

export default term.reducer
export const {forward, backward} = term.actions