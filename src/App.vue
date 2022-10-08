<script setup lang="ts">
import SearchBar from "./components/SearchBar.vue";
import MoviesContainer from "./components/MoviesContainer.vue";
import Loader from "./components/LoaderComponent.vue";
import { useMoviesStore } from "./stores";

const moviesStore = useMoviesStore();
</script>

<template>
  <div class="app-container">
    <SearchBar />
    <MoviesContainer />
    <Loader :active="moviesStore.loading" />
  </div>
</template>
