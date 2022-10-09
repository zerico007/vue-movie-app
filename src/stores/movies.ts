import { ref } from "vue";
import { defineStore } from "pinia";
import { getMovieDetails, searchMovies } from "../api";

interface MovieState {
  query: string;
  results: Movie[];
  totalMatches: number;
  paginationKey: string;
  last?: boolean;
}

const initialMovieState: MovieState = {
  query: "",
  results: [],
  totalMatches: 0,
  paginationKey: "1",
  last: false,
};

export const useMoviesStore = defineStore("movies", () => {
  const movies = ref<MovieState>(initialMovieState);
  const movieDetails = ref<MovieDetails | null>(null);
  const loading = ref(false);

  function clearMovies() {
    movies.value = initialMovieState;
  }

  function resetMovieDetails() {
    movieDetails.value = null;
  }

  async function fetchMoviesBySearch(query: string, limit = 20, page = 1) {
    loading.value = true;
    try {
      const { results, totalMatches, paginationKey } = await searchMovies(
        query,
        limit,
        page
      );
      movies.value = {
        query,
        results,
        totalMatches,
        paginationKey: paginationKey ?? page.toString(),
        last: !paginationKey,
      };
    } catch (error) {
      console.error(error);
    } finally {
      loading.value = false;
    }
  }

  async function fetchMovieDetails(id: string) {
    loading.value = true;
    try {
      const response = await getMovieDetails(id);
      movieDetails.value = response;
    } catch (error) {
      console.error(error);
    } finally {
      loading.value = false;
    }
  }

  return {
    movies,
    movieDetails,
    loading,
    clearMovies,
    resetMovieDetails,
    fetchMoviesBySearch,
    fetchMovieDetails,
  };
});
