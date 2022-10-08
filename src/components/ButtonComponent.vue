<script setup lang="ts">
export interface Props {
  text: string;
  onClick: () => void;
  theme?: "primary" | "secondary";
  width?: string;
}

const props = withDefaults(defineProps<Props>(), {
  theme: "primary",
  width: "100px",
});
</script>
<template>
  <button :class="theme" @click="props.onClick" :style="{ width: props.width }">
    {{ props.text }}
  </button>
</template>

<style scoped lang="scss">
button {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  height: 40px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;
  font-weight: bold;
  &.primary {
    background-color: #0f59a7;
    color: #fff;

    &:hover {
      background-color: #08376a;
    }
  }
  &.secondary {
    background-color: #dde2e6;
    color: #0f59a7;
    border: 1px solid #0f59a7;

    :hover {
      background-color: #b8bec2;
    }
  }
}
</style>
