import { ApiClient } from "./apiClient";
let client = new ApiClient("https://jsonplaceholder.typicode.com/");
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  getPosts() {
    return client.get(`/posts`);
  },
};
