import { ApiClient } from "./apiClient";
import { DEFAULT_LANGUAGE, DEFAULT_SORT } from "../constants";
let client = new ApiClient(process.env.REACT_APP_NEWS_APP_BASE_URL);
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

/*
  API for getting news details.
  getTopHeadLines : fetching all the top headlines
  getSearchNews : fetching news depend on the options
*/

export default {
  getTopHeadLines(data) {
    const { sort, language } = data;
    let query = "";
    if (sort) {
      query += `&sortBy=${sort}`;
    } else {
      query += `&sortBy=${DEFAULT_SORT}`;
    }
    if (language) {
      query += `&language=${language}`;
    } else {
      query += `&language=${DEFAULT_LANGUAGE}`;
    }
    return client.get(
      `/top-headlines?apiKey=${process.env.REACT_APP_NEWS_APP_API_KEY}&pageSize=100${query}`
    );
  },

  getSearchedNews(data) {
    const { searchKey, sort, language } = data;
    let query = "";
    if (searchKey) {
      query += `&q=${searchKey}`;
    }
    if (sort) {
      query += `&sortBy=${sort}`;
    } else {
      query += `&sortBy=${DEFAULT_SORT}`;
    }
    if (language) {
      query += `&language=${language}`;
    } else {
      query += `&language=${DEFAULT_LANGUAGE}`;
    }
    return client.get(
      `/everything?apiKey=${process.env.REACT_APP_NEWS_APP_API_KEY}&pageSize=100${query}`
    );
  },
};
