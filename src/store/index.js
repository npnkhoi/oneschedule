import { configureStore } from '@reduxjs/toolkit'
import { loadFromLocalStorage } from '../utils/localStorage'
import colorMapReducer from './colorMapSlice'
import courseReducer from './courseSlice'

export default configureStore({
  reducer: {
    colorMap: colorMapReducer,
    course: courseReducer,
  },
  preloadedState: loadFromLocalStorage()
})