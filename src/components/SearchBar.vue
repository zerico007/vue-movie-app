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
      placeholder="Search for a movie..."
      v-model="searchQuery"
    />
    <Button :onClick="handleSearchMovies" width="120px">
      <div class="search-button-div">
        <span>Search</span>
        <vue-feather type="search" size="20px" />
      </div>
    </Button>
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
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    margin-right: 1rem;
    background-color: var(--color-background-soft);
    border: none;
    color: var(--color-text);
    caret-color: var(--main-green);

    &:focus {
      outline: 2px solid var(--main-green);
    }

    &::placeholder {
      color: var(--color-text);
    }
  }
}

.search-button-div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  span {
    font-weight: bolder;
  }
}

@media (max-width: 500px) {
  .search-bar {
    width: 90%;
    height: auto;
    flex-direction: column;
    input {
      width: 100%;
      height: 50px;
      font-size: 1rem;
      margin-bottom: 1rem;
    }
  }
}
</style>
