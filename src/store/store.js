import { configureStore } from '@reduxjs/toolkit'
import { uiSlice, calendarSlice } from './'

export const store = configureStore({
  reducer:{
    calendarStore: calendarSlice.reducer,
    uiStore: uiSlice.reducer,
  },
  middleware: ( getDefaultMiddleware ) => getDefaultMiddleware({
    serializableCheck: false //* propiedad para que no serialize las fecha
  })
})