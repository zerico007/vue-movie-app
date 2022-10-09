<script setup lang="ts">
import { computed } from "vue";
import { useMoviesStore } from "../stores";

const moviesStore = useMoviesStore();
const totalPages = computed(() =>
  Math.floor(moviesStore.movies.totalMatches / 20)
);

function goToNextPage() {
  if (moviesStore.movies.last) return;
  moviesStore.fetchMoviesBySearch(
    moviesStore.movies.query,
    20,
    +moviesStore.movies.paginationKey
  );
}

function goToPreviousPage() {
  if (moviesStore.movies.paginationKey === "2") return;
  const newPage = moviesStore.movies.last
    ? +moviesStore.movies.paginationKey - 1
    : +moviesStore.movies.paginationKey - 2;
  moviesStore.fetchMoviesBySearch(moviesStore.movies.query, 20, newPage);
}

function goToFirstPage() {
  moviesStore.fetchMoviesBySearch(moviesStore.movies.query, 20, 1);
}

function goToLastPage() {
  moviesStore.fetchMoviesBySearch(
    moviesStore.movies.query,
    20,
    totalPages.value
  );
}
</script>
<template>
  <div class="paginate">
    <vue-feather @click="goToFirstPage" type="chevrons-left" />
    <vue-feather @click="goToPreviousPage" type="chevron-left" />
    <span
      >Page
      {{
        moviesStore.movies.last
          ? +moviesStore.movies.paginationKey
          : +moviesStore.movies.paginationKey - 1
      }}
      of {{ totalPages }}</span
    >
    <vue-feather @click="goToNextPage" type="chevron-right" />
    <vue-feather @click="goToLastPage" type="chevrons-right" />
  </div>
</template>
<style scoped lang="scss">
.paginate {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  width: 80%;

  & > * {
    margin: 0 0.5rem;
    cursor: pointer;
  }

  i {
    transition: all 0.3s ease-in-out;

    &:hover {
      scale: 1.2;
    }
  }
}

@media (max-width: 768px) {
  .paginate {
    width: 100%;
  }
}
</style>
