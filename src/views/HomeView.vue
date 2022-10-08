<script setup lang="ts">
import SearchBar from "../components/SearchBar.vue";
import MoviesContainer from "../components/MoviesContainer.vue";
</script>
<template>
  <div class="home-container">
    <SearchBar />
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
</style>
