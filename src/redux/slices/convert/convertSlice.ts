import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    fromCurrency: '',
    toCurrency: '',
    fromValue: 0,
    toValue: 0,
    exchangeRate: 0,
    status: 'pending',
    error: ''
}

export const fetchInitialCurrencyData = createAsyncThunk(
  'currency/fetchInitialCurrencyData',
  async () => {
    const response = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = response.data.Valute

    const nominal = data.USD.Nominal
    const rubValue = data.USD.Value.toFixed(2)

    return {
      fromCurrency: 'RUB',
      fromValue: rubValue,
      toValue: nominal,
      toCurrency: 'USD',
    };
  }
);

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setFromCurrency(state, action: PayloadAction<string>) {
      state.fromCurrency = action.payload;
    },
    setToCurrency(state, action: PayloadAction<string>) {
      state.toCurrency = action.payload;
    },
    setFromValue(state, action: PayloadAction<number>) {
      state.fromValue = action.payload;
    },
    setToValue(state, action: PayloadAction<number>) {
      state.toValue = action.payload;
    },
    setExchangeRate(state, action: PayloadAction<number>) {
      state.exchangeRate = action.payload;
    },
    switchCurrency(state) {
      return {
        ...state,
        fromCurrency: state.toCurrency,
        toCurrency: state.fromCurrency,
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInitialCurrencyData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchInitialCurrencyData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.fromCurrency = action.payload.fromCurrency;
        state.toCurrency = action.payload.toCurrency;
        state.fromValue = action.payload.fromValue;
        state.toValue = action.payload.toValue;
      })
      .addCase(fetchInitialCurrencyData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch currency data';
      });
  },
})

export const { setFromCurrency, setFromValue, setToCurrency, setToValue, setExchangeRate} = currencySlice.actions

export default currencySlice.reducer