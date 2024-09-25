import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

import axios from 'axios'
import { Currency } from '../../../types/Currency'

interface currenciesState {
    ratesArray: Currency[],
    status:  'loading' | 'succeeded' | 'failed',
    error: string | null
}

export const fetchAllCurrency = createAsyncThunk(
  'currency/fetchAllCurrency',
  async () => {
    const response = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
    const data = response.data.Valute;

    /* Преобразование объекта в массив*/

    const dataArray = Object.values(data as { [key: string]: Currency }).map((currency) => ({
      ID: currency.ID,
      NumCode: currency.NumCode,
      CharCode: currency.CharCode,
      Nominal: currency.Nominal,
      Name: currency.Name,
      Value: currency.Value,
      Previous: currency.Previous
    })) as Currency[];

    return dataArray
  }
)


const initialState: currenciesState = {
  ratesArray: [],
  status: 'loading',
  error: null
}

const rubValue = {
  ID: '1',
  NumCode: '810',
  CharCode: 'RUB',
  Nominal: 1,
  Name: 'Российского рубля',
  Value: 0,
  Previous: 0
}

export const curreniesSlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllCurrency.pending, (state) => {
        state.status = 'loading',
        state.error = null
    }),
    builder.addCase(fetchAllCurrency.fulfilled, (state, action: PayloadAction<Currency[]>) => {
        state.status = 'succeeded'
        state.ratesArray = [rubValue, ...action.payload as Currency[]]
    });
    builder.addCase(fetchAllCurrency.rejected, (state) => {
        state.status = 'failed'
    });
  }
})

export default curreniesSlice.reducer