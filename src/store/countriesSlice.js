import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../services/service";

// Async Thunk for fetching countries data
export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    //   const response = await axiosInstance.get('/all?fields=name,region,flag');
    const response = await fetch(
      "https://restcountries.com/v2/all?fields=name,region,flag"
    );
    const data = await response.json();
    return data;
  }
);

const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    countries: null,
    continent: "All",
    loading: false,
    error: null,
  },
  reducers: {
    setContinent: (state, action) => {
      state.continent = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countries = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const countriesState = (state) => state.countries;
export const { setContinent } = countriesSlice.actions;
export const countriesReducer = countriesSlice.reducer;
