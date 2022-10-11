<script setup lang="ts">
import SearchBar from "../components/SearchBar.vue";
import MoviesContainer from "../components/MoviesContainer.vue";
import { useMoviesStore, useColorThemeStore } from "../stores";

const moviesStore = useMoviesStore();
const colorThemeStore = useColorThemeStore();
const lightThemeHeadlineStyles = {
  background: "-webkit-linear-gradient(315deg, #42d392 25%, #647eff)",
  "background-clip": "text",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
};
</script>
<template>
  <div class="home-container">
    <h1
      :style="colorThemeStore.useDark ? { ...lightThemeHeadlineStyles } : {}"
      class="headline"
    >
      The <span>IMdb</span> Movie Search API
    </h1>
    <p class="tagline">Search for any movie you want to learn about.</p>
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

  .headline,
  .headline span {
    margin-top: 2rem;
    font-size: 76px;
    line-height: 1.25;
    font-weight: 700;
    letter-spacing: -1.5px;
    max-width: 960px;
    text-align: center;
    color: #213547;
  }
  .headline span {
    background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .tagline {
    font-size: 18px;
    line-height: 1.25;
    font-weight: 400;
    letter-spacing: -0.5px;
    max-width: 960px;
    text-align: center;
    margin-bottom: 2rem;
  }
}

.select-container {
  width: 200px;
  margin: 0 10px;
  border-radius: 0.25rem;
  background-color: var(--color-background-soft);

  --vs-controls-color: var(--color-text);
  --vs-selected-color: var(--color-text);
  --vs-dropdown-option-color: var(--color-text);
  --vs-dropdown-bg: var(--color-background-soft);
  --vs-dropdown-option--active-bg: var(--main-green);
  --vs-border-color: none;
}

@media (max-width: 768px) {
  .home-container {
    .headline,
    .headline span {
      font-size: 56px;
    }
    .tagline {
      font-size: 16px;
    }
  }
}

@media (max-width: 500px) {
  .select-container {
    width: 90%;
    height: 50px;
    padding: 8px;
  }
  .home-container {
    .headline,
    .headline span {
      font-size: 36px;
    }
    .tagline {
      font-size: 14px;
    }
  }
}
</style>
