<script setup lang="ts">
import Movie from "./MovieResult.vue";
import Button from "./ButtonComponent.vue";
import Paginate from "./PaginateComponent.vue";
import { useMoviesStore } from "../stores";

const moviesStore = useMoviesStore();
</script>
<template>
  <div v-if="moviesStore.movies.results.length > 0" class="movies-container">
    <h2>{{ moviesStore.movies.totalMatches }} Search Results</h2>
    <Paginate />
    <Button text="Clear" :onClick="moviesStore.clearMovies" theme="secondary" />
    <div class="movies-container__results">
      <Movie
        v-for="movie in moviesStore.movies.results"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
.movies-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 2rem auto;
  &__results {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  h2 {
    margin-bottom: 1rem;
  }
}
</style>
