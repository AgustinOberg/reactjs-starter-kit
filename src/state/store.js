import { configureStore } from '@reduxjs/toolkit'
import configReducer  from './slices/configSlice'

export const store = configureStore({
  reducer: {
    config: configReducer
  },
})