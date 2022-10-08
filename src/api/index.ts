import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_HOST = import.meta.env.VITE_API_HOST;

const movieAPI = axios.create({
  baseURL: `https://${API_HOST}/title`,
});

const headers = {
  "X-RapidAPI-Key": API_KEY,
  "X-RapidAPI-Host": API_HOST,
};

export const searchMovies = async (query: string, limit = 20) => {
  const { data } = await movieAPI.get("/v2/find", {
    params: {
      title: query,
      limit,
    },
    headers,
  });
  return data;
};
