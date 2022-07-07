import { configureStore } from "@reduxjs/toolkit";
import { weatherDetailsReducer } from "../redux/weatherDetailsSlice";
import { newsDetailsReducer } from "../redux/newsDetailsSlice";

/**
 * redux store and all the reducer list
 */

export const store = configureStore({
  reducer: {
    weather: weatherDetailsReducer,
    news: newsDetailsReducer,
  },
});
