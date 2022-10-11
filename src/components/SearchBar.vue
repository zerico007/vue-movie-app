<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { useMoviesStore } from "../stores";
import Button from "./ButtonComponent.vue";

const searchQuery = ref("");
const isMobile = ref(window.innerWidth < 500);
const moviesStore = useMoviesStore();

const handleSearchMovies = () => {
  if (!searchQuery.value) return;
  moviesStore.fetchMoviesBySearch(searchQuery.value);
};

onMounted(() => {
  window.addEventListener("resize", () => {
    isMobile.value = window.innerWidth < 500;
  });
});

onUnmounted(() => {
  window.removeEventListener("resize", () => {
    isMobile.value = window.innerWidth < 500;
  });
});
</script>
<template>
  <div class="search-bar">
    <input
      type="text"
      @keyup.enter="handleSearchMovies"
      placeholder="Search for a movie..."
      v-model="searchQuery"
    />
    <Button
      :onClick="handleSearchMovies"
      :width="isMobile ? '100%' : '120px'"
      :height="isMobile ? '50px' : '40px'"
    >
      <div class="search-button-div btn-body">
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
  width: 90%;

  .search-button-div:hover {
    i {
      transform: rotateZ(90deg);
      transition: transform 0.3s ease-in-out;
    }
  }

  input {
    width: 50%;
    height: 100%;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    margin-right: 1rem;
    background-color: var(--color-background-soft);
    border: none;
    color: var(--color-text);
    caret-color: var(--main-green);
    font-size: 1rem;

    &:focus {
      border: 2px solid var(--main-green);
      outline: none;
    }

    &::placeholder {
      color: var(--color-text);
    }
  }
}

@media (max-width: 500px) {
  .search-bar {
    height: auto;
    flex-direction: column;
    input {
      width: 100%;
      height: 50px;
      margin-bottom: 1rem;
      margin-right: 0;
    }

    .btn-body {
      justify-content: center;
    }

    .btn-body span {
      margin-right: 0.5rem;
    }
  }
}
</style>
