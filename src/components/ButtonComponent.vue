<script setup lang="ts">
export interface Props {
  text?: string;
  onClick: () => void;
  theme?: "primary" | "secondary";
  width?: string;
  height?: string;
}

const props = withDefaults(defineProps<Props>(), {
  theme: "primary",
  width: "100px",
  height: "40px",
});
</script>
<template>
  <button
    :class="theme"
    @click="props.onClick"
    :style="{ width: props.width, height: props.height }"
  >
    {{ props.text }}
    <slot />
  </button>
</template>

<style scoped lang="scss">
button {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-transform: capitalize;
  font-weight: bold;
  font-size: 1rem;
  &.primary {
    background-color: var(--main-green);
    color: var(--primary-btn-text);

    &:hover {
      background-color: var(--main-green-hovered);
    }
  }
  &.secondary {
    background-color: var(--color-background-soft);
    color: var(--color-text);
    border: none;

    &:hover {
      background-color: var(--secondary-btn-hovered-bg);
    }
  }
}
</style>
