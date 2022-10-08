import { ref } from "vue";
import { defineStore } from "pinia";
import { searchMovies } from "../api";

export const useMoviesStore = defineStore("movies", () => {
  const movies = ref<Movie[]>([]);
  const loading = ref(false);

  function clearMovies() {
    movies.value = [];
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

  return {
    movies,
    loading,
    clearMovies,
    fetchMoviesBySearch,
  };
});
