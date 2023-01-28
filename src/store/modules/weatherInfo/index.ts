import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getWeather } from 'apis';
import { initialWeatherState } from 'consts';
import { GetWeatherPrams } from 'types';

export const getWeatherInfo = createAsyncThunk(
  'Jeju/getWeatherInfo',
  async (location: GetWeatherPrams) => {
    try {
      const data = await getWeather(location);
      return data;
    } catch (error) {
      return console.log(error);
    }
  }
);

const WeatherInfo = createSlice({
  name: 'weatherInfo',
  initialState: { ...initialWeatherState, isLoading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeatherInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWeatherInfo.fulfilled, (state, action) => {
        state.current = action.payload.current;
        state.daily = action.payload.daily;
        state.hourly = action.payload.hourly;
        state.isLoading = false;
      })
      .addCase(getWeatherInfo.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default WeatherInfo.reducer;
