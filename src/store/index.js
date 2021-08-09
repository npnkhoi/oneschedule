import { configureStore } from '@reduxjs/toolkit'
import config from '../utils/config'
import { loadFromLocalStorage } from '../utils/localStorage'
import colorMapReducer from './colorMapSlice'
import courseReducer from './courseSlice'

const currentVersion = localStorage.getItem('version')
const reset = (currentVersion !== config.version)
if (reset) {
  localStorage.setItem('version', config.version)
  localStorage.removeItem('persistantState')
}

export default configureStore({
  reducer: {
    colorMap: colorMapReducer,
    course: courseReducer,
  },
  preloadedState: loadFromLocalStorage()
})