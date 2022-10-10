<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  rating: number;
}>();

const ratingPercentage = computed(() => {
  return (props.rating / 10) * 100;
});
</script>
<template>
  <div class="ratings-bar">
    <p>Rating:</p>
    <div class="ratings-bar__bar">
      <div
        class="ratings-bar__bar__fill"
        :style="`--width: ${ratingPercentage}%`"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
.ratings-bar {
  display: flex;
  align-items: center;
  p {
    margin-right: 0.5rem;
    font-size: large;
  }
  &__bar {
    width: 30%;
    height: 0.5rem;
    background: var(--text-light-2);
    border-radius: 0.5rem;
    margin-top: 3px;
    &__fill {
      height: 100%;
      background: var(--main-green);
      border-radius: 0.5rem 0 0 0.5rem;
      animation: growWidth 0.5s ease-in-out;
      width: var(--width);

      @keyframes growWidth {
        from {
          width: 0;
        }
        to {
          width: var(--width);
        }
      }
    }
  }
}
</style>
