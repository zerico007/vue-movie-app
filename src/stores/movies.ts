import { ref } from "vue";
import { defineStore } from "pinia";
import { getMovieDetails, searchMovies } from "../api";

export const useMoviesStore = defineStore("movies", () => {
  const movies = ref<Movie[]>([]);
  const movieDetails = ref<MovieDetails | null>(null);
  const loading = ref(false);

  function clearMovies() {
    movies.value = [];
  }

  function resetMovieDetails() {
    movieDetails.value = null;
  }

  async function fetchMoviesBySearch(query: string, limit = 20) {
    loading.value = true;
    try {
      const { results } = await searchMovies(query, limit);
      movies.value = results;
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
