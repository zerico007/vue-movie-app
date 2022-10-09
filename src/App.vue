<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { RouterView } from "vue-router";
import Loader from "./components/LoaderComponent.vue";
import DarkModeToggle from "./components/DarkModeToggle.vue";
import { useMoviesStore, useColorThemeStore } from "./stores";

const moviesStore = useMoviesStore();
const colorThemeStore = useColorThemeStore();

const windowPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");

onMounted(() => {
  colorThemeStore.loadDarkPreferenceFromLocalStorage();
  windowPrefersDark.addEventListener("change", (e) => {
    colorThemeStore.toggleDarkMode(e.matches);
  });
});

onUnmounted(() => {
  windowPrefersDark.removeEventListener("change", (e) => {
    colorThemeStore.toggleDarkMode(e.matches);
  });
});
</script>

<template>
  <div class="app-container">
    <DarkModeToggle />
    <RouterView />
    <Loader :active="moviesStore.loading" />
  </div>
</template>
