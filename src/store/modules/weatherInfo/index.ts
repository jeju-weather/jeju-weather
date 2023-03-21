import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getWeather } from 'apis';
import { GetWeatherPrams, WeatherInfoTypes } from 'types';

const initialWeatherState: WeatherInfoTypes = {
  current: {
    humidity: 0,
    sunrise: 0,
    sunset: 0,
    temp: 0,
    wind_speed: 0,
    rain: { '1h': 0 },
    weather: [
      {
        icon: '',
      },
    ],
  },
  daily: [
    {
      dt: 0,
      temp: {
        min: 0,
        max: 0,
      },
      weather: [
        {
          icon: '',
        },
      ],
    },
  ],
  hourly: [
    {
      dt: 0,
      humidity: 0,
      temp: 0,
      rain: { '1h': 0 },
      snow: { '1h': 0 },
      wind_speed: 0,
      weather: [
        {
          icon: '',
        },
      ],
    },
  ],
};

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
