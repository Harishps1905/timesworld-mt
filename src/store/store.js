import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import { countriesReducer } from './countriesSlice';

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

