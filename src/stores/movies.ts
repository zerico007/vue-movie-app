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
  const genre = ref("");
  const movieDetails = ref<MovieDetails | null>(null);
  const loading = ref(false);

  const genres = [
    "comedy",
    "horror",
    "romance",
    "thriller",
    "sci-fi",
    "drama",
    "action",
    "adventure",
    "crime",
    "fantasy",
    "history",
    "musical",
    "animation",
    "family",
  ];

  function clearMovies() {
    movies.value = initialMovieState;
  }

  function resetMovieDetails() {
    movieDetails.value = null;
  }

  function setGenre(selectedGenre: string) {
    genre.value = selectedGenre;
    console.log("setting genre", selectedGenre);
    // if (movies.value.query) {
    //   fetchMoviesBySearch(movies.value.query);
    // }
  }

  async function fetchMoviesBySearch(query: string, limit = 20, page = 1) {
    loading.value = true;
    try {
      const { results, totalMatches, paginationKey } = await searchMovies(
        query,
        limit,
        page,
        genre.value
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
    genres,
    genre,
    clearMovies,
    setGenre,
    resetMovieDetails,
    fetchMoviesBySearch,
    fetchMovieDetails,
  };
});
