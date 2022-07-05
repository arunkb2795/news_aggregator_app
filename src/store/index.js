import { configureStore } from "@reduxjs/toolkit";
import { postDetailsReducer } from "../redux/postDetailsSlice";

export const store = configureStore({
  reducer: {
    posts: postDetailsReducer,
  },
});
