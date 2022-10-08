<!-- eslint-disable no-undef -->
<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useMoviesStore } from "../stores";
import Button from "../components/ButtonComponent.vue";

const route = useRoute();
const router = useRouter();
const moviesStore = useMoviesStore();

onMounted(() => {
  moviesStore.fetchMovieDetails(route.params.id as string);
});

function returnHome() {
  router.push("/");
  moviesStore.resetMovieDetails();
}
</script>
<template>
  <div class="wrapper">
    <Button
      :onClick="returnHome"
      text="Return Home"
      theme="secondary"
      width="200px"
    />
    <div v-if="moviesStore.movieDetails" class="movie-details-container">
      <div class="movie-details-container__poster">
        <img
          :src="moviesStore.movieDetails?.title.image?.url"
          alt="movie poster"
        />
      </div>
      <div class="movie-details-container__info">
        <h1>{{ moviesStore.movieDetails?.title.title }}</h1>
        <p>Year: {{ moviesStore.movieDetails?.title.year }}</p>
        <p>
          Runtime:
          {{ moviesStore.movieDetails?.title.runningTimeInMinutes }} minutes
        </p>
        <p>Plot: {{ moviesStore.movieDetails?.plotOutline.text }}</p>
        <p>Genres:</p>
        <ul class="genres">
          <li v-for="genre in moviesStore.movieDetails?.genres" :key="genre">
            {{ genre }}
          </li>
        </ul>
        <p>Rating: {{ moviesStore.movieDetails.ratings.rating }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
}
.movie-details-container {
  display: flex;
  width: 100%;
  margin-top: 2rem;
  padding: 1rem;
  background: transparent;
  color: var(--text-color);
  border-radius: 0.5rem;

  &__poster {
    width: 50%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__info {
    width: 50%;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      margin: 0;
      font-size: 60px;
    }
    p {
      margin: 0.5rem 0;
      font-size: large;
    }
    .genres {
      display: flex;
      flex-wrap: wrap;
      li {
        margin: 0.5rem;
        padding: 0.25rem;
      }
    }
  }
}

@media (max-width: 768px) {
  .movie-details-container {
    width: 90%;
    flex-direction: column;
    &__poster,
    &__info {
      width: 100%;
    }
  }
}
</style>
