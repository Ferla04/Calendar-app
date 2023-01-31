import { configureStore } from '@reduxjs/toolkit'
import { uiSlice, calendarSlice, authSlice } from './'

export const store = configureStore({
  reducer:{
    authStore: authSlice.reducer,
    calendarStore: calendarSlice.reducer,
    uiStore: uiSlice.reducer,
  },
  middleware: ( getDefaultMiddleware ) => getDefaultMiddleware({
    serializableCheck: false //* propiedad para que no serialize las fecha
  })
})