import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducerScripts/counterReducer'

// add all reducers here - root reducer
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})
