import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { unlockingSlice } from './unlocking/unlockingSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    unlocking: unlockingSlice.reducer
  },
})