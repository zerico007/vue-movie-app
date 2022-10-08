<script setup lang="ts">
import Movie from "./MovieResult.vue";
import Button from "./ButtonComponent.vue";
import { useMoviesStore } from "../stores";

const moviesStore = useMoviesStore();
</script>
<template>
  <div v-if="moviesStore.movies.length > 0" class="movies-container">
    <h2>Search Results</h2>
    <Button text="Clear" :onClick="moviesStore.clearMovies" theme="secondary" />
    <div class="movies-container__results">
      <Movie
        v-for="movie in moviesStore.movies"
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
  width: 80%;
  margin: 2rem auto;
  &__results {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
