import { configureStore } from '@reduxjs/toolkit'
import colorMapReducer from './colorMapSlice'
import courseReducer from './courseSlice'

// load string from localStarage and convert into an Object
// invalid output must be undefined
function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

export default configureStore({
  reducer: {
    colorMap: colorMapReducer,
    course: courseReducer,
  },
  preloadedState: loadFromLocalStorage()
})