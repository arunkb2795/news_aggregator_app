import { createSlice } from "@reduxjs/toolkit";
import weatherClient from "../api/weatherClient";
import { toast } from "react-toastify";
/*
  weatherDetailsSlice is fetch the weather data from API.
*/

export const weatherDetailsSlice = createSlice({
  name: "weather-details",
  initialState: {
    isLoadingWeatherData: false,
    isSuccessWeatherData: false,
    weatherData: null,
    isErrorWeatherData: false,
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoadingWeatherData = action.payload;
    },
    setIsSuccess: (state, action) => {
      state.isSuccessWeatherData = action.payload;
    },
    getWeatherDetailsData: (state, action) => {
      state.weatherData = action.payload;
    },
    setIsError: (state, action) => {
      state.isErrorWeatherData = action.payload;
    },
  },
});

export const getWeatherDetails = (data) => {
  return async (dispatch) => {
    dispatch(weatherDetailsAction.setIsLoading(true));
    try {
      const response = await weatherClient.getWeather(data);
      if (response.status === 200) {
        toast.success("Successfully fetch weather details");
        dispatch(weatherDetailsAction.setIsSuccess(true));
        dispatch(weatherDetailsAction.getWeatherDetailsData(response.data));
      } else {
        toast.error("Something went wrong please try again later.");
      }
      dispatch(weatherDetailsAction.setIsLoading(false));
    } catch (err) {
      dispatch(weatherDetailsAction.setIsError(true));
      dispatch(weatherDetailsAction.setIsLoading(false));
      toast.error("Something went wrong please try again later.");
    }
  };
};

export const weatherDetailsAction = weatherDetailsSlice.actions;
export const weatherDetailsReducer = weatherDetailsSlice.reducer;
