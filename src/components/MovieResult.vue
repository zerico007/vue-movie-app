<!-- eslint-disable no-undef -->
<script setup lang="ts">
import { useRouter } from "vue-router";
import Button from "./ButtonComponent.vue";

const props = defineProps<{
  movie: Movie;
}>();

const router = useRouter();

function navigateToMovie() {
  router.push(`/movies/${props.movie.id.split("/")[2]}`);
}
</script>
<template>
  <div class="movie-result">
    <div v-if="props.movie.image" class="movie-result__poster">
      <img :src="props.movie.image.url" alt="movie poster" />
    </div>
    <div class="movie-result__info">
      <h3>{{ props.movie.title }}</h3>
      <p>{{ props.movie.year }}</p>
      <Button
        text="View details"
        :onClick="navigateToMovie"
        width="100%"
        height="32px"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
.movie-result {
  display: flex;
  width: 300px;
  margin: 1rem auto;
  padding: 1rem;
  background: var(--color-background-soft);
  color: var(--color-text);
  border-radius: 0.5rem;

  &__poster {
    width: 30%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__info {
    width: 70%;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h3 {
      margin: 0;
    }
    p {
      margin: 0 0 1rem 0;
    }
  }
}

@media (max-width: 500px) {
  .movie-result {
    width: 90%;
    flex-direction: column;
    &__poster,
    &__info {
      width: 100%;
    }
  }
}
</style>
