import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import todoReducer from '../features/todolist/todoSlice'
export const store = configureStore({
  reducer: {
    count:counterReducer,
    todo:todoReducer,
},
})
