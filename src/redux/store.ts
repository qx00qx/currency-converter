import { configureStore } from '@reduxjs/toolkit'
import currencies from './slices/currencies/currenciesSlice'
import convert from './slices/convert/convertSlice'

export const store = configureStore({
  reducer: {
    currencies,
    convert
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch