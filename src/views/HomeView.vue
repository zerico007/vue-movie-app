<script setup lang="ts">
import SearchBar from "../components/SearchBar.vue";
import MoviesContainer from "../components/MoviesContainer.vue";
import { useMoviesStore } from "../stores";

const moviesStore = useMoviesStore();
</script>
<template>
  <div class="home-container">
    <SearchBar />
    <div class="select-container">
      <v-select
        v-model="moviesStore.genre"
        :options="moviesStore.genres"
        placeholder="Select a genre"
      />
    </div>
    <MoviesContainer />
  </div>
</template>

<style scoped lang="scss">
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
}

.select-container {
  width: 200px;
  margin: 0 10px;
  background-color: var(--color-background-soft);

  --vs-controls-color: var(--color-text);
  --vs-selected-color: var(--color-text);
  --vs-dropdown-option-color: var(--color-text);
  --vs-dropdown-bg: var(--color-background-soft);
  --vs-dropdown-option--active-bg: var(--main-green);
}
</style>
