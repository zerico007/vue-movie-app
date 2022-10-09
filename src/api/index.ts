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

export const searchMovies = async (
  query: string,
  limit: number,
  page: number,
  genre?: string
) => {
  const { data } = await movieAPI.get("/v2/find", {
    params: {
      title: query,
      limit,
      paginationKey: page.toString(),
      genre,
    },
    headers,
  });
  return data;
};

export const getMovieDetails = async (id: string) => {
  const { data } = await movieAPI.get("/get-overview-details", {
    params: {
      tconst: id,
    },
    headers,
  });
  return data;
};
