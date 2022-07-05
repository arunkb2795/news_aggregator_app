import { createSlice } from "@reduxjs/toolkit";
import postClient from "../api/postClient";
export const postDetailsSlice = createSlice({
  name: "post-details",
  initialState: {
    isLoading: false,
    isSuccess: false,
    postData: [],
    isError: false,
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsSuccess: (state, action) => {
      state.isSuccess = action.payload;
    },
    getPostDetailsData: (state, action) => {
      state.postData = action.payload;
    },
    setIsError: (state, action) => {
      state.isError = action.payload;
    },
  },
});

export const getPostDetails = () => {
  return async (dispatch) => {
    dispatch(postDetailsAction.setIsLoading(true));
    try {
      const response = await postClient.getPosts();
      dispatch(postDetailsAction.setIsSuccess(true));
      dispatch(postDetailsAction.getPostDetailsData(response.data));
      dispatch(postDetailsAction.setIsLoading(false));
    } catch (err) {
      console.log(err);
      dispatch(postDetailsAction.setIsError(false));
    }
  };
};

export const postDetailsAction = postDetailsSlice.actions;
export const postDetailsReducer = postDetailsSlice.reducer;
