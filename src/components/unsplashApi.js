// src/unsplashApi.js
import axios from "axios";

const UNSPLASH_ACCESS_KEY = "mTUrrf1hv38LXyt4JUZmgIFH-fHcfwMrDjN7MLY5Elk";

const api = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
  },
});

export const searchPhotos = (query) => {
  return api.get("/search/photos", {
    params: { query },
  });
};
