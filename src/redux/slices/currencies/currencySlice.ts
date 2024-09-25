import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Currency } from '../../../types/Currency'

const initialState: Currency = {
  ID: '',
  NumCode: '',
  CharCode: '',
  Nominal: 0,
  Name: '',
  Value: 0,
  Previous: 0,
}

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    addCurrency(state, action: PayloadAction<Currency>) {
      state.ID = action.payload.ID
      state.NumCode = action.payload.NumCode
      state.CharCode = action.payload.CharCode
      state.Nominal = action.payload.Nominal
      state.Name = action.payload.Name
      state.Value = action.payload.Value
      state.Previous = action.payload.Previous
    }
  },
})

export const { addCurrency } = currencySlice.actions

export default currencySlice.reducer