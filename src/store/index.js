import { configureStore } from '@reduxjs/toolkit'
import moment from 'moment'
import config from '../utils/config'
import { loadFromLocalStorage } from '../utils/localStorage'
import selectedCoursesReducer from './selectedCoursesSlice'

const currentVersion = localStorage.getItem('version')

// FIXME
if (currentVersion !== config.version) {
  console.log('Deleting');
  const oldData = localStorage.getItem('persistantState')
  const timestamp = moment().format()
  localStorage.setItem(timestamp, oldData)
  localStorage.removeItem('persistantState')
  localStorage.setItem('version', config.version)
}

export default configureStore({
  reducer: {
    selectedCourses: selectedCoursesReducer
  },
  preloadedState: loadFromLocalStorage()
})