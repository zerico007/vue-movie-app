<script lang="ts" setup>
const props = defineProps<{
  active: boolean;
}>();
</script>
<template>
  <div v-if="props.active" class="loader">
    <ring-loader :loading="props.active" color="#3B82F6" size="60px" />
  </div>
</template>
<style scoped lang="scss">
.loader {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0 0 0 / 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
