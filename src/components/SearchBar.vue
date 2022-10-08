<script setup lang="ts">
import { ref } from "vue";
import { useMoviesStore } from "../stores";
import Button from "./ButtonComponent.vue";

const searchQuery = ref("");

const moviesStore = useMoviesStore();

const handleSearchMovies = () => {
  if (!searchQuery.value) return;
  moviesStore.fetchMoviesBySearch(searchQuery.value);
};
</script>
<template>
  <div class="search-bar">
    <input
      type="text"
      @keyup.enter="handleSearchMovies"
      placeholder="Search for a movie"
      v-model="searchQuery"
    />
    <Button text="Search" :onClick="handleSearchMovies" />
  </div>
</template>

<style scoped lang="scss">
.search-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  height: 40px;
  width: 400px;
  input {
    width: 70%;
    height: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    margin-right: 1rem;
  }
}

@media (max-width: 500px) {
  .search-bar {
    width: 80%;
    flex-direction: column;
    input {
      width: 100%;
      margin-bottom: 1rem;
    }
  }
}
</style>
