import { createSlice } from '@reduxjs/toolkit';

interface ThemeType {
  value: boolean;
}

const initialState: ThemeType = {
  value: false,
};

const ThemeSlice = createSlice({
  name: 'IsDark',
  initialState,
  reducers: {
    changeTheme(state) {
      state.value = !state.value;
    },
  },
});

export const { changeTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;
