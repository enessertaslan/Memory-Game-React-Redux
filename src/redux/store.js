import { configureStore } from '@reduxjs/toolkit'
import  memorySlice  from './memoryCardSlice'

export default configureStore({
  reducer: {
    memory:memorySlice,
  }
})