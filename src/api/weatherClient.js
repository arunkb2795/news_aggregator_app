import { ApiClient } from "./apiClient";
let client = new ApiClient(process.env.REACT_APP_WEATHER_API_BASE_URL);
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

/*
  API for getting weather details.
  getWeather :  for getting current weather information using GeoLocation.
*/

export default {
  getWeather(data) {
    return client.get();
  },
};