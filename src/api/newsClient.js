import { ApiClient } from "./apiClient";
let client = new ApiClient(process.env.REACT_APP_NEWS_APP_BASE_URL);
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

/*
  API for getting news details.
  getTopHeadLines : fetching all the top headlines
  getSearchNews : fetching news depend on the options
*/

export default {
  getTopHeadLines(data) {
    return client.get();
  },
  getSearchedNews(data) {
    return client.get();
  },
};
