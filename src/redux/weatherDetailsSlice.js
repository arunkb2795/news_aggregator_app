import { createSlice } from "@reduxjs/toolkit";
import weatherClient from "../api/weatherClient";
export const weatherDetailsSlice = createSlice({
  name: "weather-details",
  initialState: {
    isLoading: false,
    isSuccess: false,
    wetherData: null,
    isError: false,
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsSuccess: (state, action) => {
      state.isSuccess = action.payload;
    },
    getWeatherDetailsData: (state, action) => {
      state.wetherData = action.payload;
    },
    setIsError: (state, action) => {
      state.isError = action.payload;
    },
  },
});

export const getWeatherDetails = ({ latitude, longitude }) => {
  return async (dispatch) => {
    dispatch(weatherDetailsAction.setIsLoading(true));
    try {
      const response = await weatherClient.getWeather({ latitude, longitude });
      dispatch(weatherDetailsAction.setIsSuccess(true));
      dispatch(weatherDetailsAction.getWeatherDetailsData(response.data));
      dispatch(weatherDetailsAction.setIsLoading(false));
    } catch (err) {
      console.log(err);
      dispatch(weatherDetailsAction.setIsError(false));
    }
  };
};

export const weatherDetailsAction = weatherDetailsSlice.actions;
export const weatherDetailsReducer = weatherDetailsSlice.reducer;
