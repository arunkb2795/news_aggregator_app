import { createSlice } from "@reduxjs/toolkit";
import newsClient from "../api/newsClient";
import { toast } from "react-toastify";

/**
 * newsDetailsSlice: reduxToolkit slice to get the news details
 * states
 * isNewsLoading: loading state for the API endpoint,
 * isNewsSuccess: loading state for the API endpoint,
 * newsData: fetched news details from API endpoint,
 * isNewsError: error state for the API endpoint,,
 */

export const newsDetailsSlice = createSlice({
  name: "news-details",
  initialState: {
    isNewsLoading: false,
    isNewsSuccess: false,
    newsData: null,
    searchedNewsData: null,
    isNewsError: false,
  },
  reducers: {
    setIsNewsLoading: (state, action) => {
      state.isNewsLoading = action.payload;
    },
    setIsNewsSuccess: (state, action) => {
      state.isNewsSuccess = action.payload;
    },
    getNewsDetailsData: (state, action) => {
      state.newsData = action.payload;
    },
    setIsNewsError: (state, action) => {
      state.isNewsError = action.payload;
    },
  },
});

/**
 * getTopNewsHeadlines: function to get the top news details.
 * @parm {data} contain {sort,language} parameters for sorting
 */

export const getTopNewsHeadLines = (data) => {
  return async (dispatch) => {
    dispatch(newsDetailsAction.setIsNewsLoading(true));
    try {
      const response = await newsClient.getTopHeadLines(data);
      if (response.status === 200) {
        toast.success("Successfully fetch news details");
        dispatch(newsDetailsAction.setIsNewsSuccess(true));
        let filteredData = response.data.articles.filter(
          (item) => item.urlToImage !== null
        );
        dispatch(newsDetailsAction.getNewsDetailsData(filteredData));
        dispatch(newsDetailsAction.setIsNewsLoading(false));
      } else {
        dispatch(newsDetailsAction.getNewsDetailsData([]));
        toast.error("Something went wrong please try again later.");
      }
    } catch (err) {
      console.log(err);
      dispatch(newsDetailsAction.setIsNewsError(true));
      dispatch(newsDetailsAction.setIsNewsLoading(false));
      dispatch(newsDetailsAction.getNewsDetailsData([]));
      toast.error("Something went wrong please try again later.");
    }
  };
};

/**
 * getSearchedNewsDetails: function to get the searched news details.
 * @parm {data} contain {searchTerm,sort,language} parameters for sorting
 */

export const getSearchedNewsDetails = (data) => {
  return async (dispatch) => {
    dispatch(newsDetailsAction.setIsNewsLoading(true));
    try {
      const response = await newsClient.getSearchedNews(data);
      if (response.status === 200) {
        dispatch(newsDetailsAction.setIsNewsSuccess(true));
        let filteredData = response.data.articles.filter(
          (item) => item.urlToImage !== null
        );
        dispatch(newsDetailsAction.getNewsDetailsData(filteredData));
        dispatch(newsDetailsAction.setIsNewsLoading(false));
        toast.success("Successfully fetch news details");
      } else {
        dispatch(newsDetailsAction.getNewsDetailsData([]));
        toast.error("Something went wrong please try again later.");
      }
    } catch (err) {
      console.log(err);
      dispatch(newsDetailsAction.setIsNewsError(true));
      dispatch(newsDetailsAction.setIsNewsLoading(false));
      dispatch(newsDetailsAction.getNewsDetailsData([]));
      toast.error("Something went wrong please try again later.");
    }
  };
};

export const newsDetailsAction = newsDetailsSlice.actions;
export const newsDetailsReducer = newsDetailsSlice.reducer;
