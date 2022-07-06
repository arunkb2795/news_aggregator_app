import { createSlice } from "@reduxjs/toolkit";
import newsClient from "../api/newsClient";

export const newsDetailsSlice = createSlice({
  name: "news-details",
  initialState: {
    isLoading: false,
    isSuccess: false,
    newsData: null,
    searchedNewsData: null,
    isError: false,
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsSuccess: (state, action) => {
      state.isSuccess = action.payload;
    },
    getNewsDetailsData: (state, action) => {
      state.newsData = action.payload;
    },
    getSearchedNewsDetailsData: (state, action) => {
      state.searchedNewsData = action.payload;
    },
    setIsError: (state, action) => {
      state.isError = action.payload;
    },
  },
});

export const getTopNewsHeadLines = (data) => {
  return async (dispatch) => {
    dispatch(newsDetailsAction.setIsLoading(true));
    try {
      const response = await newsClient.getTopHeadLines(data);
      dispatch(newsDetailsAction.setIsSuccess(true));
      dispatch(newsDetailsAction.getNewsDetailsData(response.data));
      dispatch(newsDetailsAction.setIsLoading(false));
    } catch (err) {
      console.log(err);
      dispatch(newsDetailsAction.setIsError(false));
    }
  };
};

export const getSearchedNewsDetails = (data) => {
  return async (dispatch) => {
    dispatch(newsDetailsAction.setIsLoading(true));
    try {
      const response = await newsClient.getSearchedNews(data);
      dispatch(newsDetailsAction.setIsSuccess(true));
      dispatch(newsDetailsAction.getSearchedNewsDetailsData(response.data));
      dispatch(newsDetailsAction.setIsLoading(false));
    } catch (err) {
      console.log(err);
      dispatch(newsDetailsAction.setIsError(false));
    }
  };
};

export const newsDetailsAction = newsDetailsSlice.actions;
export const newsDetailsReducer = newsDetailsSlice.reducer;
