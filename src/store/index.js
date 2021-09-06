import { configureStore } from '@reduxjs/toolkit'
import { loadFromLocalStorage } from '../utils/localStorage'
import selectedCoursesReducer from './selectedCoursesSlice'

// const currentVersion = localStorage.getItem('version')
// if (currentVersion !== config.version) {
//   console.log('Deleting');
//   const oldData = localStorage.getItem('persistantState')
//   const timestamp = moment().format()
//   localStorage.setItem(timestamp, oldData)
//   localStorage.removeItem('persistantState')
//   localStorage.setItem('version', config.version)
// }

export default configureStore({
  reducer: {
    selectedCourses: selectedCoursesReducer
  },
  preloadedState: loadFromLocalStorage()
})