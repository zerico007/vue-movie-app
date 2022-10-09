<script setup lang="ts">
import { RouterView } from "vue-router";
import Loader from "./components/LoaderComponent.vue";
import DarkModeToggle from "./components/DarkModeToggle.vue";
import { useMoviesStore } from "./stores";

const moviesStore = useMoviesStore();
</script>

<template>
  <div class="app-container">
    <DarkModeToggle />
    <RouterView />
    <Loader :active="moviesStore.loading" />
  </div>
</template>
