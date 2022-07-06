import { configureStore } from "@reduxjs/toolkit";
import { weatherDetailsReducer } from "../redux/weatherDetailsSlice";
import { newsDetailsReducer } from "../redux/newsDetailsSlice";

export const store = configureStore({
  reducer: {
    weather: weatherDetailsReducer,
    news: newsDetailsReducer,
  },
});
