import { combineReducers } from '@reduxjs/toolkit';
import theme from './theme';
import weatherInfo from './weatherInfo';

const rootReducer = combineReducers({
  theme,
  weatherInfo,
});
export default rootReducer;
