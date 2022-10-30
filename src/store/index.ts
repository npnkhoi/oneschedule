import { configureStore } from '@reduxjs/toolkit'
import { loadFromLocalStorage } from '../utils/localStorage'
import selectedCoursesReducer from './selectedCoursesSlice'
import termReducer from './termSlice'

// const currentVersion = localStorage.getItem('version')
// if (currentVersion !== config.version) {
//   console.log('Deleting');
//   const oldData = localStorage.getItem('persistantState')
//   const timestamp = moment().format()
//   localStorage.setItem(timestamp, oldData)
//   localStorage.removeItem('persistantState')
//   localStorage.setItem('version', config.version)
// }

const store = configureStore({
  reducer: {
    selectedCourses: selectedCoursesReducer,
    term: termReducer
  },
  preloadedState: loadFromLocalStorage()
})
export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch