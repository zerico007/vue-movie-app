<script setup lang="ts">
import { useColorThemeStore } from "../stores";

const colorThemeStore = useColorThemeStore();
</script>
<template>
  <div
    class="toggle-container"
    @click="colorThemeStore.toggleDarkMode(!colorThemeStore.useDark)"
  >
    <div :class="colorThemeStore.useDark ? 'slider dark' : 'slider light'">
      <vue-feather
        :type="colorThemeStore.useDark ? 'moon' : 'sun'"
        size="12px"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
.toggle-container {
  display: flex;
  position: relative;
  align-items: center;
  margin-left: auto;
  width: 50px;
  height: 24px;
  border-radius: 1rem;
  background-color: var(--color-background-soft);
  border: 1px solid var(--text-dark-2);
  cursor: pointer;

  &:hover {
    border: 1px solid var(--main-green);
  }

  .slider {
    position: absolute;
    top: 1px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in-out;

    &.dark {
      left: 25px;
      background-color: var(--black);
    }

    &.light {
      left: 2px;
      background-color: var(--white);
    }
  }
}
</style>
