import { createSlice } from '@reduxjs/toolkit'

type ThemeType = boolean

const initialState: ThemeType = false

const ThemeSlice = createSlice({
  name: 'IsDark',
  initialState,
  reducers: {
    changeTheme(state) {
      state = !state
    },
  },
})

export const { changeTheme } = ThemeSlice.actions
export default ThemeSlice.reducer
