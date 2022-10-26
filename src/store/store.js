import { configureStore } from '@reduxjs/toolkit'
import { uiSlice, calendarSlice } from './'

export const store = configureStore({
  reducer:{
    calendarStore: calendarSlice.reducer,
    uiStore: uiSlice.reducer,
  }
})